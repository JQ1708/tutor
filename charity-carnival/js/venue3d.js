(function (window) {
  'use strict';

  const CENTER_X = 67.5;
  const CENTER_Z = 0;
  const ENTRANCE_X = 12;
  const ENTRANCE_Z = 16.8;
  const DEG = Math.PI / 180;
  const IDLE_MS = 8000;
  const pinOffsets = [[0, -1], [-.7, -.7], [.7, -.7], [-1, 0], [1, 0], [-.7, .7], [.7, .7], [0, 1]];
  const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
  const colors = {
    cream: 0xfff6e5, white: 0xfffbf1, ink: 0x483a30, wood: 0xba9470,
    terra: 0xb86f54, indigo: 0x718998, mustard: 0xcfac62, olive: 0x8e9d67
  };
  const awnings = [colors.terra, colors.mustard, colors.olive];
  const locations = [
    [3.3, 1.4, 6.15, '舞台', 'Stage'],
    [32, -.8, 3.05, 'D1 用餐区', 'Dining Area D1'],
    [62, -11.4, 4.4, '询问处', 'Info Counter'],
    [62, .4, 3.25, 'D2 用餐区', 'Dining Area D2'],
    [55.8, 10, 4.1, '静思人文', 'Jing Si Books & Culture'],
    [98, -.3, 4.6, '义卖摊位', 'Charity Stalls'],
    [70.7, 11, 4.05, '游戏区', 'Games Area'],
    [86, 11, 4.6, 'B1 用电摊位', 'B1 Powered Stalls'],
    [129.3, 0, 3.25, 'D3 募心区', 'Fundraising Corner D3']
  ];
  const style = `
    .venue3d-root {position:relative;width:100%;height:100%;min-height:210px;isolation:isolate;overflow:hidden;background:#f8f4ec;color:#483a30}
    .venue3d-root canvas {position:absolute;inset:0;display:block;width:100%;height:100%;touch-action:pan-y;cursor:grab;user-select:none}
    .venue3d-root canvas:active {cursor:grabbing}
    .venue3d-overlay {position:absolute;inset:0;pointer-events:none;font-family:system-ui,sans-serif;visibility:hidden}
    .venue3d-pin {box-sizing:border-box;position:absolute;top:0;left:0;display:grid;place-items:center;padding:0;border:2px solid #fff8eb;border-radius:50%;background:#483a30;color:#fff;font:700 14px/1 system-ui,sans-serif;box-shadow:0 2px 5px #39291f38;pointer-events:auto;cursor:pointer;touch-action:pan-y;user-select:none}
    .venue3d-pin:focus-visible {outline:2px solid #90622d;outline-offset:2px}
    .venue3d-a5 {background:#a65339;border-color:#ffdf92;border-radius:9px;pointer-events:none}
    .venue3d-entrance,.venue3d-mall {border-radius:8px;white-space:nowrap;font-size:12px}
    .venue3d-entrance {display:flex;justify-content:center;align-items:center;gap:4px;background:#2a654c;border-color:#f2f8df}
    .venue3d-entry-arrow {display:block;color:#e2f3c3;font-size:13px;line-height:1}
    .venue3d-mall {background:#ede6dd;border-color:#fff9ef;color:#4c413a;pointer-events:none;font-size:11px}
    .venue3d-stem {position:absolute;top:0;left:0;width:1px;background:#58422da8;transform-origin:top center}
    .venue3d-compass {position:absolute;right:12px;bottom:10px;width:36px;height:42px;display:grid;justify-items:center;align-content:end;padding-bottom:2px;font:700 12px/1 system-ui,sans-serif;border-radius:12px;background:#fbf6eccf}
    .venue3d-needle {width:14px;height:17px;margin-bottom:4px;background:#534133;clip-path:polygon(50% 0,100% 100%,50% 76%,0 100%)}
    .venue3d-pop {box-sizing:border-box;position:absolute;top:0;left:0;z-index:2;width:max-content;max-width:calc(100% - 16px);padding:7px 10px;border:1px solid #e6d2b9;border-radius:8px;background:#fff9ef;color:#483a30;box-shadow:0 3px 12px #483a3026;font:600 13px/1.25 system-ui,sans-serif}
    .venue3d-pop[hidden] {display:none}
  `;

  function random(seed) {
    return function () {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      return seed / 4294967296;
    };
  }

  function makePaving(THREE, kind) {
    const canvas = document.createElement('canvas');
    const size = 256;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Venue3D requires a 2D canvas context for its paving textures.');
    const rnd = random(903);
    const joint = { asphalt: '#99938b', dining: '#baa48e', market: '#a4a089', games: '#c39e68' };
    ctx.fillStyle = joint[kind];
    ctx.fillRect(0, 0, size, size);

    if (kind === 'dining' || kind === 'market') {
      const market = kind === 'market';
      const cellW = 64;
      const cellH = market ? 32 : 64;
      for (let y = 0, row = 0; y < size; y += cellH, row++) {
        const shift = market && row % 2 ? cellW / 2 : 0;
        for (let x = 0; x < size; x += cellW) {
          const v = Math.round(rnd() * 13);
          ctx.fillStyle = market ? `rgb(${194 + v},${187 + v},${163 + v})` : `rgb(${218 + v},${191 + v},${159 + v})`;
          ctx.fillRect(x + shift + 1, y + 1, cellW - 2, cellH - 2);
          if (x + shift + cellW > size) ctx.fillRect(x + shift + 1 - size, y + 1, cellW - 2, cellH - 2);
        }
      }
    }
    const speckles = kind === 'asphalt' ? 7200 : 3700;
    for (let n = 0; n < speckles; n++) {
      ctx.fillStyle = n % 2 ? '#ffffef29' : '#493a2d24';
      ctx.fillRect(rnd() * size, rnd() * size, .45 + rnd() * 1.7, .5 + rnd());
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.anisotropy = 4;
    return texture;
  }

  function makeModel(THREE, scene, highlight, resources) {
    const own = resource => {
      resources.push(resource);
      return resource;
    };
    const material = own(new THREE.MeshStandardMaterial({ roughness: .87 }));
    const shapes = new Map();
    const groups = new Map();
    const paving = new Map();
    const dummy = new THREE.Object3D();
    const tint = new THREE.Color();

    function shape(name, create) {
      shapes.set(name, own(create()));
    }
    function facets(points, indices) {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
      geometry.setIndex(indices);
      const flat = geometry.toNonIndexed();
      geometry.dispose();
      flat.computeVertexNormals();
      return flat;
    }
    shape('box', () => new THREE.BoxGeometry(1, 1, 1));
    shape('soft', () => {
      const profile = new THREE.Shape();
      profile.moveTo(-.42, -.42);
      profile.lineTo(.42, -.42);
      profile.lineTo(.42, .42);
      profile.lineTo(-.42, .42);
      profile.closePath();
      const geometry = new THREE.ExtrudeGeometry(profile, {
        depth: .84, steps: 1, bevelSize: .08, bevelThickness: .08, bevelSegments: 1
      });
      geometry.translate(0, 0, -.42);
      return geometry;
    });
    shape('round', () => new THREE.CylinderGeometry(.5, .5, 1, 12));
    shape('taper', () => new THREE.CylinderGeometry(.43, .5, 1, 8));
    shape('twig', () => new THREE.CylinderGeometry(.45, .5, 1, 6));
    shape('foliage', () => new THREE.IcosahedronGeometry(.5, 1));
    shape('head', () => new THREE.SphereGeometry(.5, 8, 5));
    shape('coat', () => new THREE.CapsuleGeometry(.5, 1, 2, 7).scale(1, .5, 1));
    shape('gable', () => facets(
      [-.5, 0, -.5, .5, 0, -.5, -.5, 0, .5, .5, 0, .5, -.5, 1, 0, .5, 1, 0],
      [0, 4, 1, 1, 4, 5, 4, 2, 5, 5, 2, 3, 0, 2, 4, 1, 5, 3]
    ));
    shape('arrow', () => facets(
      [0, 0, -.5, -.5, 0, -.04, .5, 0, -.04, -.17, 0, -.04, .17, 0, -.04,
        -.17, 0, .5, .17, 0, .5],
      [0, 1, 2, 3, 5, 4, 4, 5, 6]
    ));
    shape('roof', () => {
      const points = [];
      const indices = [];
      // One set of alternating stripes. A copy shifted one stripe completes the roof.
      for (let i = 0; i < 5; i++) {
        const x = -.5 + i * .2;
        const rows = [[-.5, -.18], [-.5, 0], [0, 1], [.5, 0], [.5, -.18]];
        for (let r = 0; r < rows.length - 1; r++) {
          const [z1, y1] = rows[r];
          const [z2, y2] = rows[r + 1];
          const start = points.length / 3;
          points.push(x, y1, z1, x + .1, y1, z1, x, y2, z2, x + .1, y2, z2);
          indices.push(start, start + 2, start + 1, start + 1, start + 2, start + 3);
        }
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
      geometry.setIndex(indices);
      geometry.computeVertexNormals();
      return geometry;
    });
    shape('umbrella', () => {
      const points = [];
      for (let s = 0; s < 12; s += 2) {
        const edge = step => {
          const a = step * Math.PI / 6;
          return [Math.cos(a) * .5, 0, Math.sin(a) * .5];
        };
        points.push(0, 1, 0, ...edge(s + 1), ...edge(s));
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
      geometry.computeVertexNormals();
      return geometry;
    });

    function part(type, x, y, z, w, h, d, color, turn = 0, cast = true) {
      const key = type + (cast ? ':shadow' : ':detail');
      let group = groups.get(key);
      if (!group) {
        group = { type, cast, items: [] };
        groups.set(key, group);
      }
      group.items.push({ x, y, z, w, h, d, color, turn });
    }
    function box(x, z, w, d, h, color, y = 0, turn = 0, cast = true) {
      part('box', x, y + h / 2, z, w, h, d, color, turn, cast);
    }
    function soft(x, z, w, d, h, color, y = 0, turn = 0, cast = true) {
      part('soft', x, y + h / 2, z, w, h, d, color, turn, cast);
    }
    function round(x, z, r, h, color, y = 0, cast = true) {
      part('round', x, y + h / 2, z, 2 * r, h, 2 * r, color, 0, cast);
    }
    function floor(kind, x, z, w, d, y, color = 0xffffff) {
      if (!paving.has(kind)) paving.set(kind, []);
      paving.get(kind).push({ x, z, w, d, y, color });
    }

    function surroundings() {
      const wall = 0xded9d0;
      const warmRoof = 0xe1d9cb;
      const railing = 0xb4a89c;
      const glass = 0x8d999a;
      const roadPaint = 0xede9de;
      const entryGreen = 0x51836a;
      // Reuse the venue's instance groups without casting building shadows onto it.
      const block = (x, z, w, d, h, color, y = 0, turn = 0) => box(x, z, w, d, h, color, y, turn, false);
      const column = (x, z, r, h, color, y = 0) => round(x, z, r, h, color, y, false);
      const mark = (x, z, w, d, color = roadPaint, y = -.129) => block(x, z, w, d, .014, color, y);
      const arrow = (x, z, w, d, turn, color, y = -.112) => part('arrow', x, y, z, w, 1, d, color, turn, false);

      // Keep the frontages, circulation lane and closest parking row in the model.
      block(67, 12, 172, 104, .64, 0xb7aea0, -.8);
      floor('asphalt', 67, 12, 172, 104, -.149, 0xe4e5e7);
      for (const [start, end] of [[-11, 58.5], [66.5, 141]]) {
        const x = (start + end) / 2;
        block(x, 28.4, end - start, 2.6, .14, 0xc9c2b8, -.15);
        block(x, 30.3, end - start, 1.3, .12, 0xb9a6a0, -.15);
      }
      block(67, -27.7, 148, 1.8, .14, 0xc9c4b7, -.15);
      block(67, -28.65, 148, .22, .17, 0xb6ab9b, -.15);
      for (let x = 3; x < 138; x += 7.5) {
        if (Math.abs(x - ENTRANCE_X) > 3) mark(x, 22.1, 3, .125);
        mark(x, -23.2, 3, .125);
      }
      for (const x of [30, 90, 127]) {
        arrow(x, 24.15, 1.36, 3, Math.PI / 2, roadPaint);
        arrow(x - 8, -21.75, 1.36, 3, -Math.PI / 2, roadPaint);
      }
      arrow(-8.8, 1, 1.45, 3.35, 0, roadPaint);
      mark(-12.3, 0, .12, 32);
      mark(144.4, 0, .12, 30);

      const cars = [0xc3c7c9, 0xb6a29a, 0xe1dfd7, 0x9aa8ae, 0xcdc0af];
      for (let i = 0; i <= 42; i++) {
        const x = 4 + i * 3;
        mark(x, -32, .095, 5.6, 0xd9c193);
        if (i % 4 > 1 || i === 42) continue;
        const xx = x + 1.5;
        block(xx, -32, 1.82, 3.88, .72, cars[i % cars.length], -.12);
        block(xx, -32.12, 1.61, 2.09, .53, glass, .55);
        block(xx, -32.14, 1.54, 1.68, .11, cars[i % cars.length], 1.06);
      }
      mark(67, -34.8, 126, .095, 0xd9c193);

      // The tall frontage on the Zone A side has rounded pale ends and horizontal cladding.
      const cladding = 0xb89488;
      block(24, 43.5, 62, 25, .38, railing, -.14);
      block(24, 44, 57, 22, 3.7, wall, .22);
      block(25.5, 43.7, 53, 25.8, 15.8, cladding, 4.0);
      block(25.5, 44.4, 53, 24, .27, warmRoof, 19.8);
      block(30, 46.5, 19, 8.8, 1.05, wall, 20.03);
      for (const x of [1.8, 51]) {
        part('round', x, 11.9, 37.2, 15.8, 15.8, 16.2, wall, 0, false);
        part('round', x, 3.77, 37.2, 16.2, .49, 16.6, railing, 0, false);
        part('round', x, 2.02, 38.9, 13.5, 3.5, 14.4, glass, 0, false);
      }
      for (let y = 7.6; y < 19; y += 2.15) block(26.3, 30.72, 40.3, .19, .16, 0xc6a69a, y);
      const fascia = [0xc2a5a1, 0xa7b7b9, 0xc4b78f, 0xb5a5a0, 0xbc918c];
      for (let i = 0; i < 9; i++) {
        const x = 7 + i * 4.8;
        column(x - 1.85, 30.15, .30, 3.95, wall, .01);
        block(x, 32.96, 4.37, .15, 2.70, glass, .28);
        block(x, 32.85, .095, .10, 2.62, railing, .31);
        block(x, 30.62, 4.58, .20, 1.42, fascia[i % fascia.length], 4.16);
        block(x + .44, 30.47, 2.65, .07, .13, wall, 4.98);
      }

      // The shallow-roof retail row on the Zone B side and the gap beside the mall.
      function shopRow(x, w, z, d, wallTone, roofTone, trim) {
        block(x, z, w, d - 1.4, 4.08, wallTone, -.12);
        part('gable', x, 3.95, z, w + .6, 1.38, d + .38, roofTone, 0, false);
        const front = z - d / 2;
        block(x, front + .29, w + .56, 1.87, .21, trim, 3.47);
        const bays = Math.round(w / 4.25);
        for (let i = 0; i < bays; i++) {
          const span = w / bays;
          const xx = x - w / 2 + (i + .5) * span;
          block(xx, front + .57, span - .24, .18, 2.97, glass, .12);
          block(xx, front + .44, .10, .11, 2.94, wall, .16);
          block(xx, front - .64, span - .18, .19, .70, fascia[(i + 1) % fascia.length], 3.04);
          column(xx - span / 2, front - .49, .115, 3.49, trim);
        }
      }
      shopRow(85.9, 36.8, 36, 13.4, wall, 0xdad2bd, 0xc8b375);
      shopRow(115.7, 19.9, 36, 14.2, 0xc6b5a7, 0xc0a597, 0xb29284);
      shopRow(137, 20, 44.2, 14.6, 0xc9cec5, 0xb2c0bc, 0x9dacac);
      for (const x of [113.2, 117.2]) block(x, 38.2, .23, .26, 2.65, railing, 4.9);
      block(115.2, 38.2, 5.3, .55, 2.9, wall, 7.4);
      block(114.04, 37.89, 1.65, .09, .83, 0xb99389, 8.48);
      block(63, 39, 11.7, 2.6, .82, 0xbaa39a, 4.08);
      block(63, 37.65, 11.7, .22, .61, wall, 4.13);
      mark(63, 48.4, .12, 12.7);
      arrow(63, 35.5, 1.2, 2.45, 0, roadPaint);

      // The raised pale cylinder is visible beyond the shop roofs and trees.
      const towerX = 90;
      const towerZ = 55.2;
      column(towerX, towerZ, 5.25, .45, railing, -.1);
      for (let i = 0; i < 10; i++) {
        const a = i * Math.PI / 5;
        column(towerX + 4.55 * Math.cos(a), towerZ + 4.55 * Math.sin(a), .24, 13.2, wall);
      }
      for (const y of [5.2, 9.2, 12.95]) column(towerX, towerZ, 5.05, .36, railing, y);
      column(towerX, towerZ, 5.2, 4.65, 0xd7cbb6, 13.1);
      column(towerX, towerZ, 5.29, .29, wall, 17.75);
      column(towerX, towerZ, .79, .47, railing, 17.98);
      for (const x of [69, 75, 82, 103, 110, 117, 123]) {
        column(x, 48.7, .19, 2.2, railing);
        part('foliage', x, 3.15, 48.7, 5.4, 4.3, 4.4, x % 2 ? 0x9fab88 : 0xaab498, x, false);
      }

      // Wayfinding for a provisional pedestrian approach at the photos' painted crossing.
      for (let n = 0; n < 6; n++) mark(ENTRANCE_X, 18.8 + n * 1.34, 3.3, .49, 0xccb175);
      for (const side of [-1, 1]) {
        const x = ENTRANCE_X + side * 2.6;
        block(x, ENTRANCE_Z, .54, .54, .25, railing, -.11);
        block(x, ENTRANCE_Z, .28, .28, 1.99, entryGreen, .11);
        block(x, ENTRANCE_Z, .32, .32, .25, 0xd7e1b8, 1.84);
      }
      arrow(ENTRANCE_X, 15.45, 2.25, 2.95, 0, entryGreen, -.078);
    }

    const { cream, white, ink, wood, terra, olive, mustard, indigo } = colors;
    surroundings();
    const slab = 0xd6cab8;
    box(CENTER_X, 0, 143, 38, .58, 0xa49680, -.78, 0, false);
    box(CENTER_X, 0, 142, 37, .085, slab, -.2, 0, false);
    floor('asphalt', CENTER_X, 0, 140.5, 35.5, -.11);
    floor('dining', 32.5, -1.5, 65, 25, .00);
    floor('market', 100, 0, 70, 30, .012, 0xece8dd);
    floor('dining', 33.3, -1.1, 49.7, 24, .027, 0xf2e5cd);
    floor('dining', 62, -.1, 5.3, 17.1, .039, 0xf2dbbe);
    floor('dining', 129.3, 0, 8.8, 30, .042, 0xc6d3ad);
    // Edge strips frame the asphalt. Each pair leaves the four entries open.
    for (const side of [-1, 1]) {
      const segments = side < 0 ? [[-2, 63], [72, 137]] : [[-2, ENTRANCE_X - 3.2], [ENTRANCE_X + 3.2, 63], [72, 137]];
      for (const [start, end] of segments) box((start + end) / 2, side * 17.5, end - start, .32, .13, slab, -.11, 0, false);
      for (const z of [-11, 11]) box(CENTER_X + side * 70, z, .32, 12.7, .13, slab, -.11, 0, false);
    }

    // Stage, with its front facing D1.
    soft(3.3, 1.4, 4.57, 9.75, 1.04, 0xa65d48, .03);
    soft(3.3, 1.4, 4.63, 9.8, .145, 0xd19c79, 1.04);
    for (let j = 0; j < 8; j++) box(3.42, -2.73 + j * 1.18, 4.36, .026, .012, 0xae7d61, 1.186, 0, false);
    soft(1.15, 1.4, .29, 9.65, 3.25, terra, 1.04);
    soft(1.32, 1.4, .10, 7.6, 2.57, 0xd59a7b, 1.38);
    soft(1.39, 1.4, .085, 6.1, 1.97, 0xdfac8e, 1.66);
    for (let j = 0; j < 7; j++) {
      for (const z of [-2.79 + j * .13, 5.59 - j * .13]) {
        box(1.33, z, .11, .052, 2.78, j % 2 ? 0xbf765e : 0xd2876a, 1.2, 0, false);
      }
    }
    for (let step = 0; step < 3; step++) {
      const stepHeight = .26 + (2 - step) * .29;
      box(5.67 + step * .34, 1.4, 1.05, 3.12, stepHeight, 0xa7654f, .03);
      soft(5.67 + step * .34, 1.4, 1.10, 3.2, .07, 0xcd9675, .03 + stepHeight);
    }
    for (const z of [-2.65, 5.45]) {
      for (const x of [1.04, 4.66]) box(x, z, .12, .12, 3.94, 0x6b5750, 1.12);
      box(2.85, z, 3.75, .12, .13, 0x6b5750, 5);
      soft(3.99, z, .63, .63, 1.17, 0x4c4542, 1.19);
      for (const y of [1.47, 1.89]) {
        // Speaker grille is vertical and faces the audience.
        box(4.31, z, .027, .42, .23, 0x655b56, y, 0, false);
      }
    }
    for (const x of [4.66, 1.04]) box(x, 1.4, .135, 8.23, .2, 0x6b5750, 5.01);
    for (const z of [-1.89, -.26, 1.4, 3.06, 4.69]) {
      soft(4.66, z, .36, .38, .32, ink, 4.72);
      box(4.49, z, .056, .23, .16, 0xffdda1, 4.76, 0, false);
    }

    function stool(x, z, r, h, color = wood) {
      part('taper', x, h * .42 + .04, z, r * 1.12, h * .84, r * 1.12, 0x9e795c);
      round(x, z, r, .105, color, h * .84 + .04);
    }
    function diningTable(x, z, small) {
      const r = small ? .52 : .74;
      const h = small ? .8 : .95;
      round(x, z, .15, h - .08, wood, .05);
      part('taper', x, h - .045, z, r * 2.07, .25, r * 2.07, cream);
      round(x, z, r * .92, .06, white, h + .075);
      round(x, z, .095, .03, small ? terra : olive, h + .14, false);
      part('taper', x, h + .21, z, .09, .11, .09, 0xd5a366, 0, false);
      const seats = small ? 4 : 8;
      for (let n = 0; n < seats; n++) {
        const a = (n + .5) * Math.PI * 2 / seats;
        stool(x + Math.cos(a) * (r + .49), z + Math.sin(a) * (r + .49), small ? .19 : .22, .45);
      }
    }
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 10; col++) diningTable(11.5 + col * 4.52, -10.1 + row * 4.15, false);
    }
    for (let col = 0; col < 5; col++) {
      for (let row = 0; row < 7; row++) {
        const x = 60.05 + col * .97;
        const z = -6.3 + row * 2.12;
        for (const side of [-1, 1]) {
          box(x, z + side * .65, .28, .13, .67, wood, .04);
          for (const offset of [-.43, .43]) {
            stool(x + side * .34, z + offset, .125, .39);
          }
        }
        soft(x, z, .43, 1.75, .15, cream, .67);
        box(x, z, .14, 1.59, .014, 0xd6bf91, .821, 0, false);
      }
    }
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 2; col++) diningTable(127.5 + col * 3.5, -12.2 + row * 3.5, true);
    }

    // Info counter and its alternating umbrella panels.
    floor('games', 62, -11.4, 5.3, 3.5, .044, 0xf9e1ac);
    soft(62, -11.2, 2.85, .84, .93, mustard, .04);
    soft(62, -11.2, 3.02, .97, .13, cream, .95);
    box(62, -10.76, 2.21, .05, .53, 0xe4c785, .24, 0, false);
    for (const x of [61.42, 62.58]) {
      box(x, -11.04, .31, .35, .03, white, 1.085, 0, false);
      box(x, -11.14, .24, .08, .04, olive, 1.118, 0, false);
    }
    round(62, -11.6, .057, 2.67, wood, .04);
    part('umbrella', 62, 2.57, -11.6, 3.47, .62, 3.47, mustard);
    part('umbrella', 62, 2.57, -11.6, 3.47, .62, 3.47, cream, Math.PI / 6);
    round(62, -11.6, .085, .15, mustard, 3.14);

    // Jing Si books and culture. The display boards carry colored paper without lettering.
    floor('market', 55.8, 9.9, 4.6, 3.2, .049, 0xc7d1ae);
    for (let j = 0; j < 3; j++) {
      const x = 54.5 + j * 1.25;
      soft(x, 10.61, 1.15, .41, 1.94, wood, .05);
      for (let shelf = 0; shelf < 3; shelf++) {
        const y = .36 + shelf * .49;
        box(x, 10.33, 1.13, .41, .085, cream, y);
        for (let book = 0; book < 5; book++) {
          const h = .19 + ((j + shelf + book) % 3) * .056;
          box(x + .17 * (book - 2), 10.31, .106, .22, h, awnings[(shelf + book) % 3], y + .085, 0, false);
        }
      }
      soft(x, 9.22, .88, .65, .67, cream, .05);
      for (let k = 0; k < 3; k++) {
        box(x + (k - 1) * .22, 9.19, .15, .31, .048, awnings[k], .725, .14 * (k - 1), false);
      }
    }
    for (const x of [53.84, 57.82]) box(x, 11.12, .13, .19, 2.26, olive, .05);
    box(55.83, 11.12, 4, .18, .55, olive, 1.75);
    box(55.83, 11.01, 3.58, .065, .29, cream, 1.89, 0, false);

    function booth(x, z, turn, color) {
      const cs = Math.cos(turn);
      const sn = Math.sin(turn);
      const base = .12;
      function piece(type, u, v, y, w, h, d, tone, cast = true) {
        part(type, x + u * cs + v * sn, base + y, z - u * sn + v * cs, w, h, d, tone, turn, cast);
      }
      for (const u of [-.88, .88]) {
        for (const v of [-.65, .65]) piece('box', u, v, 1.03, .075, 2.08, .075, white);
      }
      for (const v of [-.65, .65]) piece('box', 0, v, 1.98, 1.85, .074, .061, white);
      for (const u of [-.88, .88]) piece('box', u, 0, 1.98, .061, .074, 1.33, white);
      piece('roof', 0, 2.13, 2.08, 2.03, .64, 1.72, color);
      piece('roof', .203, 0, 2.08, 2.03, .64, 1.72, cream);
      piece('soft', 0, .43, .46, 1.5, .88, .59, color);
      piece('soft', 0, .44, .94, 1.64, .13, .73, cream);
      for (let k = 0; k < 3; k++) {
        piece('box', (k - 1) * .45, .39, 1.06, .24, .095 + k * .04, .26, k % 2 ? cream : 0xd0ac82, false);
      }
    }
    function workTable(x, z) {
      for (const side of [-1, 1]) box(x + side * .53, z, .09, .91, .75, wood, .09);
      soft(x, z, 1.45, 1.25, .13, cream, .76);
      box(x + .18, z - .15, .35, .27, .13, wood, .892, 0, false);
    }
    function island(id, x, z, w, d, count) {
      const a5 = highlight && id === 'A5';
      floor('market', x, z, w, d, .066, a5 ? 0xf3dfaf : 0xd0dbb1);
      if (a5) {
        for (const side of [-1, 1]) {
          box(x, z + side * d / 2, w + .31, .31, .095, 0xf3c262, .062, 0, false);
          box(x + side * w / 2, z, .31, d - .31, .095, 0xf3c262, .062, 0, false);
        }
      }
      const tone = index => a5 ? terra : awnings[index % 3];
      const along = (count - 4) / 2;
      for (let i = 0; i < along; i++) {
        const xx = x - w / 2 + 1.15 + i * (w - 2.3) / (along - 1);
        booth(xx, z - d / 2 + .85, Math.PI, tone(i));
        booth(xx, z + d / 2 - .85, 0, tone(i + 1));
      }
      for (const side of [-1, 1]) {
        for (let j = 0; j < 2; j++) booth(x + side * (w / 2 - .9), z + (j - .5) * 1.8, side * Math.PI / 2, tone(j + 2));
      }
      const tables = Math.floor(w / 2.7) - 2;
      for (let i = 0; i < tables; i++) workTable(x + (i - (tables - 1) / 2) * 1.65, z);
    }
    island('A4', 79.4, -10, 26, 8.2, 18);
    island('A5', 79.4, .1, 26, 8.2, 18);
    for (let i = 0; i < 3; i++) island('F' + (i + 1), 108.6, -10 + i * 10.1, 26.5, 8.2, 18);
    island('B1', 86.2, 10.2, 11.2, 8.2, 10);

    // Three game counters, a row of stepping pads, and the separate power cabinet.
    floor('games', 70.7, 10.2, 8.1, 8.7, .065, 0xffe6b1);
    for (let i = 0; i < 3; i++) {
      const x = 68.3 + i * 2.2;
      const tone = [terra, indigo, olive][i];
      soft(x, 7.6, 1.65, .89, .86, tone, .074);
      soft(x, 7.6, 1.78, .98, .115, cream, .93);
      box(x, 7.87, 1.62, .10, 1.32, tone, 1.02);
      box(x, 7.8, 1.36, .09, .78, cream, 1.36, 0, false);
      for (let n = 0; n < 3; n++) {
        const xx = x + .37 * (n - 1);
        round(xx, 7.43, .09, .24 - .03 * n, awnings[n], 1.05);
        part('head', xx, 1.65 + .16 * (n % 2), 7.71, .25, .25, .13, awnings[(i + n) % 3], 0, false);
      }
      round(x + .21, 11.6, .57, .10, tone, .066);
      round(x + .21, 11.6, .36, .018, cream, .167, false);
      round(x + .21, 11.6, .24, .021, tone, .185, false);
    }
    floor('asphalt', 77.3, 10.2, 4.7, 8.7, .078, 0xc6c8b7);
    soft(77.3, 8.4, 2.3, 1.1, 1.40, 0x7c8882, .08);
    soft(77.3, 8.4, 2.43, 1.2, .12, 0x9aa29a, 1.44);
    for (const x of [76.78, 77.82]) {
      box(x, 7.835, .93, .08, .96, 0x929b92, .34);
      box(x - .31, 7.777, .068, .04, .17, 0x4d5550, .68, 0, false);
      for (let slat = 0; slat < 3; slat++) box(x + .08, 7.781, .39, .045, .027, 0x6c7770, .42 + slat * .07, 0, false);
    }
    box(77.82, 7.779, .20, .05, .19, mustard, 1.03, 0, false);

    const rnd = random(607);
    function tree(x, z, scale) {
      const h = scale * (2.7 + rnd() * .65);
      const greens = [0x738554, 0x899b62, 0x9aaa6d, 0x9a9f60];
      round(x, z, .76 * scale, .14, 0xac9b83, -.11);
      round(x, z, .67 * scale, .018, 0x75644e, .031, false);
      part('twig', x, h * .27, z, .20 * scale, h * .56, .20 * scale, 0x805f49);
      for (let leaf = 0; leaf < 4; leaf++) {
        const a = leaf * 2.4 + rnd() * .35;
        const s = h * (.57 + rnd() * .17);
        part('foliage', x + Math.cos(a) * h * .24, h * (.57 + leaf * .11),
          z + Math.sin(a) * h * .24, s, s * .87, s, greens[leaf], a);
      }
    }
    function shrub(x, z) {
      for (let i = -1; i <= 1; i++) {
        const h = .55 + rnd() * .37;
        part('foliage', x + i * .47, h * .4 - .07, z + rnd() * .2,
          .94, h, .77, i % 2 ? 0x8c9a66 : 0x74865c, rnd());
      }
    }
    function lamp(x, z, inward) {
      const arm = inward * .42;
      round(x, z, .23, .13, 0x756b5f, -.1);
      part('twig', x, 1.68, z, .15, 3.37, .15, 0x696760);
      box(x, z + arm * .5, .09, .61, .09, 0x696760, 3.35);
      soft(x, z + arm, .37, .64, .14, 0x696760, 3.29);
      box(x, z + arm, .25, .44, .038, 0xffdfa0, 3.266, 0, false);
    }
    for (const side of [-1, 1]) {
      for (const x of [1, 13, 24, 36, 48, 59, 75, 88, 100, 112, 123, 134]) {
        const besideEntrance = side === 1 && x === 13 ? 5.5 : 0;
        tree(x + besideEntrance + (rnd() - .5) * 1.7, side * 17.08, .77 + rnd() * .26);
      }
      for (const x of [7, 30, 53, 81, 106, 129]) lamp(x, side * 16.98, -side);
      for (const x of [17, 42, 93, 118]) shrub(x, side * 16.93);
      for (const z of [-12, -5.8, 5.8, 12]) tree(CENTER_X + side * 69.42, z, .75 + rnd() * .25);
      for (const z of [-14.8, 14.8]) shrub(CENTER_X + side * 69.1, z);
    }

    function person(x, z, index) {
      const h = 1.37 + rnd() * .39;
      const turn = rnd() * Math.PI * 2;
      const skin = [0xd6a981, 0xb77e5b, 0xe6bb96, 0x966647][index % 4];
      const shirt = [0xa36054, 0x89966d, 0x698898, 0xd1ab67, 0xc09292, 0xe5c8a6][index % 6];
      part('coat', x, h * .56, z, .41, h * .50, .26, shirt, turn);
      for (const side of [-1, 1]) {
        const u = side * .104;
        part('coat', x + u * Math.cos(turn), h * .22, z - u * Math.sin(turn),
          .13, h * .42, .15, 0x625b58, turn, false);
      }
      part('head', x, h * .896, z, .27, h * .206, .26, skin, turn);
      part('head', x - .035 * Math.sin(turn), h * .966, z - .035 * Math.cos(turn),
        .271, .138, .25, index % 4 === 1 ? 0x554035 : 0x493931, turn, false);
    }
    let visitors = 0;
    const spread = (x1, x2, z1, z2, count) => {
      for (let i = 0; i < count; i++) {
        person(x1 + (i + .2 + rnd() * .6) * (x2 - x1) / count, z1 + rnd() * (z2 - z1), visitors++);
      }
    };
    for (const z of [-8.1, -3.94, .21, 4.36]) spread(10.3, 52.1, z - .29, z + .29, 7);
    spread(8.4, 57.5, 8.55, 9.25, 8);
    spread(8, 58.5, -13.5, -12.05, 8);
    spread(66.1, 122.2, -5.55, -4.26, 13);
    spread(67.5, 122.7, 4.48, 5.58, 13);
    for (const x of [65.05, 94, 122.67]) {
      for (let i = 0; i < 3; i++) person(x + rnd() * .4, -9 + i * 8 + rnd(), visitors++);
    }
    spread(124.1, 134, -15.05, -13.85, 5);

    for (const [kind, patches] of paving) {
      const positions = [];
      const uv = [];
      const vertexColors = [];
      const tile = { asphalt: 4, dining: 3.6, market: 2.8, games: 2.5 }[kind];
      for (const { x, z, w, d, y, color } of patches) {
        const l = x - w / 2;
        const r = x + w / 2;
        const b = z - d / 2;
        const t = z + d / 2;
        tint.setHex(color);
        for (const [xx, zz] of [[l, b], [l, t], [r, b], [r, b], [l, t], [r, t]]) {
          positions.push(xx, y, zz);
          uv.push(xx / tile, zz / tile);
          vertexColors.push(tint.r, tint.g, tint.b);
        }
      }
      const geo = own(new THREE.BufferGeometry());
      geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
      geo.setAttribute('color', new THREE.Float32BufferAttribute(vertexColors, 3));
      geo.computeVertexNormals();
      const map = own(makePaving(THREE, kind));
      const mat = own(new THREE.MeshStandardMaterial({ map, vertexColors: true, roughness: .96 }));
      const mesh = new THREE.Mesh(geo, mat);
      mesh.receiveShadow = true;
      scene.add(mesh);
    }
    for (const { type, cast, items } of groups.values()) {
      const mesh = own(new THREE.InstancedMesh(shapes.get(type), material, items.length));
      mesh.castShadow = cast;
      mesh.receiveShadow = true;
      for (let i = 0; i < items.length; i++) {
        const { x, y, z, w, h, d, color, turn } = items[i];
        dummy.position.set(x, y, z);
        dummy.rotation.y = turn;
        dummy.scale.set(w, h, d);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        mesh.setColorAt(i, tint.setHex(color));
      }
      mesh.instanceMatrix.needsUpdate = true;
      mesh.instanceColor.needsUpdate = true;
      mesh.computeBoundingSphere();
      scene.add(mesh);
    }
  }

  function element(tag, className, parent, value) {
    const el = document.createElement(tag);
    el.className = className;
    if (value) el.textContent = value;
    parent.appendChild(el);
    return el;
  }

  function createView(el, THREE, opts, initialLang) {
    const started = performance.now();
    const highlight = opts.highlight === 'A5';
    const root = element('div', 'venue3d-root', el);
    const resources = [];
    const cleanups = [];
    let renderer;
    let sun;
    let stats;
    let destroyed = false;

    function destroy() {
      if (destroyed) return;
      destroyed = true;
      for (const cleanup of cleanups.reverse()) cleanup();
      for (const resource of resources.reverse()) resource.dispose();
      if (sun) sun.shadow.dispose();
      if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
      }
      root.remove();
      if (stats && window.__venueStats === stats) delete window.__venueStats;
    }

    try {
      element('style', '', root, style);
      const canvas = element('canvas', '', root);
      canvas.setAttribute('aria-hidden', 'true');
      const overlay = element('div', 'venue3d-overlay', root);
      const pins = [];
      const project = new THREE.Vector3();
      function addPin(text, x, z, y, zh, en, kind = 'number') {
        const interactive = kind === 'number' || kind === 'entrance';
        const stem = element('span', 'venue3d-stem', overlay);
        const pinClass = kind === 'number' ? 'venue3d-pin' : 'venue3d-pin venue3d-' + kind;
        const button = element(interactive ? 'button' : 'span', pinClass, overlay, text);
        if (interactive) button.type = 'button';
        const pin = { button, stem, x, z, y, zh, en, kind, interactive, tx: 0, ty: 0, sx: 0, sy: 0, half: 0 };
        pins.push(pin);
        return pin;
      }
      locations.forEach(([x, z, y, zh, en], i) => addPin(String(i + 1), x, z, y, zh, en));
      if (highlight) addPin('A5', 79.4, .1, 6.4, '', '', 'a5');
      const entrance = addPin('', ENTRANCE_X, ENTRANCE_Z, 4.6, '正门（推定）', 'Main Entrance (estimated)', 'entrance');
      const entryArrow = element('span', 'venue3d-entry-arrow', entrance.button, '↑');
      entryArrow.setAttribute('aria-hidden', 'true');
      const entryText = element('span', '', entrance.button);
      const mall = addPin('', 27, 33.5, 24, 'GM Klang 商场', 'GM Klang Mall', 'mall');
      const compass = element('div', 'venue3d-compass', overlay);
      compass.setAttribute('aria-hidden', 'true');
      const needle = element('div', 'venue3d-needle', compass);
      element('span', '', compass, 'N');
      const pop = element('div', 'venue3d-pop', overlay);
      pop.hidden = true;
      pop.setAttribute('role', 'status');

      let lang = initialLang;
      let selected = null;
      let popWidth = 0;
      let popHeight = 0;
      let pinSize = 28;
      let width = 0;
      let height = 0;
      let dpr = 0;
      let sized = false;
      let visible = false;
      let contextLost = false;
      let ready = false;
      let frame = 0;
      let timer = 0;
      let lastFrame = 0;
      let idleUntil = 0;
      let dirty = true;
      let yaw = -171 * DEG;
      let pitch = 48 * DEG;
      let zoom = 1;
      let targetZoom = 1;
      let yawSpeed = 0;
      let pitchSpeed = 0;
      let spinSpeed = 0;
      const pointers = new Map();
      let gesture = '';
      let pinchDistance = 0;

      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'default' });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.04;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.shadowMap.autoUpdate = false;
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xf8f4ec);
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 400);
      scene.add(new THREE.HemisphereLight(0xfff4df, 0xb0997b, 1.2));
      sun = new THREE.DirectionalLight(0xffe0b9, 2.1);
      sun.position.set(CENTER_X - 39, 82, 39);
      sun.target.position.set(CENTER_X, 0, CENTER_Z);
      sun.castShadow = true;
      sun.shadow.mapSize.set(2048, 1024);
      Object.assign(sun.shadow.camera, { left: -80, right: 80, top: 48, bottom: -48, near: 12, far: 185 });
      sun.shadow.camera.updateProjectionMatrix();
      sun.shadow.normalBias = .04;
      sun.shadow.bias = -.00023;
      scene.add(sun, sun.target);
      const fill = new THREE.DirectionalLight(0xe4eeff, .48);
      fill.position.set(CENTER_X + 55, 43, -58);
      fill.target.position.set(CENTER_X, 0, CENTER_Z);
      scene.add(fill, fill.target);
      makeModel(THREE, scene, highlight, resources);
      renderer.shadowMap.needsUpdate = true;

      function listen(target, name, fn, options) {
        target.addEventListener(name, fn, options);
        cleanups.push(() => target.removeEventListener(name, fn, options));
      }

      function setLang(value) {
        lang = value;
        entryText.textContent = lang === 'en' ? 'Main Entrance' : '正门';
        mall.button.textContent = mall[lang];
        for (const pin of pins) {
          if (!pin.interactive) continue;
          pin.button.setAttribute('aria-label', pin[lang]);
          pin.button.setAttribute('aria-expanded', String(selected === pin));
        }
        sizePins();
        setPopup();
        if (ready && sized) placeOverlay();
      }

      function sizePins() {
        for (const pin of pins) {
          if (pin.kind === 'entrance') pin.half = lang === 'en' ? 57 : 29;
          else if (pin.kind === 'mall') pin.half = 49;
          else pin.half = pin.kind === 'a5' ? pinSize * .79 : pinSize / 2;
          pin.button.style.width = pin.half * 2 + 'px';
          pin.button.style.height = pinSize + 'px';
        }
      }

      function setPopup() {
        pop.hidden = !selected;
        if (!selected) return;
        pop.textContent = selected[lang];
        measurePopup();
        if (ready) positionPopup();
      }

      function measurePopup() {
        if (selected) {
          popWidth = pop.offsetWidth;
          popHeight = pop.offsetHeight;
        }
      }

      function positionPopup() {
        if (!selected) return;
        let x;
        let y;
        const gap = pinSize / 2 + 7;
        const options = [[-popWidth / 2, -gap - popHeight], [-popWidth / 2, gap],
          [selected.half + 7, -popHeight / 2], [-selected.half - popWidth - 7, -popHeight / 2]];
        for (const [dx, dy] of options) {
          x = clamp(selected.sx + dx, 4, Math.max(4, width - popWidth - 4));
          y = clamp(selected.sy + dy, 4, Math.max(4, height - popHeight - 4));
          const coversPin = pins.some(pin => x < pin.sx + pin.half + 2 && x + popWidth > pin.sx - pin.half - 2
            && y < pin.sy + pinSize / 2 + 2 && y + popHeight > pin.sy - pinSize / 2 - 2);
          if (!coversPin) break;
        }
        pop.style.transform = 'translate(' + Math.round(x) + 'px,' + Math.round(y) + 'px)';
      }

      function locatePin(pin, index) {
        const insetX = pin.half + 4;
        const insetY = pinSize / 2 + 4;
        const maxX = Math.max(insetX, width - insetX);
        const maxY = Math.max(insetY, height - insetY);
        const tx = clamp(pin.tx, insetX, maxX);
        const ty = clamp(pin.ty, insetY, maxY);
        function tryAt(x, y) {
          if (x < insetX || x > maxX || y < insetY || y > maxY) return false;
          if (x + pin.half > width - 52 && y + pinSize / 2 > height - 55) return false;
          for (let i = 0; i < index; i++) {
            const other = pins[i];
            if (Math.abs(x - other.sx) < pin.half + other.half + 3 && Math.abs(y - other.sy) < pinSize + 3) return false;
          }
          pin.sx = x;
          pin.sy = y;
          return true;
        }
        if (tryAt(tx, ty)) return;
        const step = pinSize * .66;
        // Search around the projected point, preferring to move the label upwards.
        for (let ring = 1; ring <= 6; ring++) {
          const d = ring * step;
          for (const [ix, iy] of pinOffsets) {
            if (tryAt(clamp(tx + ix * d, insetX, maxX), clamp(ty + iy * d, insetY, maxY))) return;
          }
        }
        for (let y = insetY; y <= maxY; y += step) {
          for (let x = insetX; x <= maxX; x += step) {
            if (tryAt(x, y)) return;
          }
        }
        pin.sx = tx;
        pin.sy = ty;
      }

      function placeOverlay() {
        for (let i = 0; i < pins.length; i++) {
          const pin = pins[i];
          project.set(pin.x, pin.y, pin.z).project(camera);
          pin.tx = (project.x + 1) * width / 2;
          pin.ty = (1 - project.y) * height / 2;
          locatePin(pin, i);
          pin.button.style.transform = 'translate(' + Math.round(pin.sx - pin.half)
            + 'px,' + Math.round(pin.sy - pinSize / 2) + 'px)';

          project.set(pin.x, pin.kind === 'mall' ? 19.8 : .6, pin.z).project(camera);
          const x = (project.x + 1) * width / 2;
          const y = (1 - project.y) * height / 2;
          const onScreen = x >= 0 && x <= width && y >= 0 && y <= height;
          if (onScreen) {
            const dx = pin.sx - x;
            const dy = pin.sy - y;
            pin.stem.style.height = Math.hypot(dx, dy).toFixed(1) + 'px';
            pin.stem.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1)
              + 'px) rotate(' + Math.atan2(-dx, dy).toFixed(4) + 'rad)';
          } else {
            pin.stem.style.height = '0px';
          }
        }
        project.set(CENTER_X, 0, CENTER_Z).project(camera);
        const x = project.x;
        const y = project.y;
        project.set(CENTER_X, 0, CENTER_Z + 10).project(camera);
        const angle = Math.atan2((project.x - x) * width, (project.y - y) * height);
        needle.style.transform = 'rotate(' + angle.toFixed(4) + 'rad)';
        entryArrow.style.transform = 'rotate(' + (angle + Math.PI).toFixed(4) + 'rad)';
        positionPopup();
      }

      function active() {
        return !destroyed && visible && sized && !document.hidden && !contextLost;
      }

      function draw() {
        if (!active()) return;
        const firstDrawAt = ready ? 0 : performance.now();
        const aspect = width / height;
        // Fit the venue and the nearest façades. The far verge can crop on wide displays.
        const depth = 143 * Math.abs(Math.sin(yaw)) + 73 * Math.abs(Math.cos(yaw));
        const span = Math.max(174, (depth * Math.sin(pitch) + 20) * aspect) / zoom;
        camera.left = -span / 2;
        camera.right = span / 2;
        camera.top = span / aspect / 2;
        camera.bottom = -camera.top;
        camera.updateProjectionMatrix();
        const radius = 165;
        const flat = radius * Math.cos(pitch);
        camera.position.set(CENTER_X - flat * Math.sin(yaw), 4.5 + radius * Math.sin(pitch), 11 + flat * Math.cos(yaw));
        camera.lookAt(CENTER_X, 4.5, 11);
        renderer.render(scene, camera);
        placeOverlay();
        dirty = false;
        if (!ready) {
          stats = {
            drawCalls: renderer.info.render.calls,
            triangles: renderer.info.render.triangles,
            buildMs: Math.round(buildMs + performance.now() - firstDrawAt)
          };
          window.__venueStats = stats;
          ready = true;
          overlay.style.visibility = 'visible';
          if (typeof opts.onReady === 'function') opts.onReady();
        } else {
          stats.drawCalls = renderer.info.render.calls;
          stats.triangles = renderer.info.render.triangles;
        }
      }

      function resize() {
        if (destroyed) return;
        const w = root.clientWidth;
        const h = root.clientHeight;
        if (w <= 0 || h <= 0) {
          sized = false;
          sync();
          return;
        }
        const nextDpr = Math.min(window.devicePixelRatio || 1, w < 600 ? 1.5 : 2);
        if (sized && width === w && height === h && dpr === nextDpr) return;
        width = w;
        height = h;
        pinSize = clamp(Math.round(18 + width / 65), 24, 34);
        sizePins();
        if (!contextLost) {
          if (dpr !== nextDpr) renderer.setPixelRatio(nextDpr);
          renderer.setSize(width, height, false);
        }
        dpr = nextDpr;
        sized = true;
        dirty = true;
        measurePopup();
        if (active()) draw();
        sync();
      }

      function stopFrame() {
        if (frame) window.cancelAnimationFrame(frame);
        frame = 0;
        lastFrame = 0;
      }

      function isSpinning(now) {
        return pointers.size === 0 && now >= idleUntil;
      }

      function moving(now) {
        return isSpinning(now) || yawSpeed !== 0 || pitchSpeed !== 0 || targetZoom !== zoom;
      }

      function sync() {
        if (timer) window.clearTimeout(timer);
        timer = 0;
        if (!active()) {
          stopFrame();
          spinSpeed = 0;
          return;
        }
        const now = performance.now();
        if (pointers.size === 0 && now < idleUntil) {
          timer = window.setTimeout(() => {
            timer = 0;
            sync();
          }, Math.ceil(idleUntil - now));
        }
        if (!moving(now)) {
          stopFrame();
          if (dirty) draw();
          return;
        }
        if (!frame) frame = window.requestAnimationFrame(tick);
      }

      function tick(now) {
        frame = 0;
        if (!active()) return;
        const dt = lastFrame ? clamp((now - lastFrame) / 1000, 0, .05) : 1 / 60;
        lastFrame = now;
        if (isSpinning(now)) {
          spinSpeed += (.095 - spinSpeed) * (1 - Math.exp(-dt * 2.1));
          yaw += spinSpeed * dt;
        }
        if (pointers.size === 0 && (yawSpeed || pitchSpeed)) {
          yaw += yawSpeed * dt;
          const nextPitch = pitch + pitchSpeed * dt;
          pitch = clamp(nextPitch, 20 * DEG, 70 * DEG);
          const decay = Math.exp(-dt * 7.2);
          yawSpeed = Math.abs(yawSpeed) > .012 ? yawSpeed * decay : 0;
          pitchSpeed = pitch === nextPitch && Math.abs(pitchSpeed) > .012 ? pitchSpeed * decay : 0;
        }
        if (zoom !== targetZoom) {
          zoom += (targetZoom - zoom) * (1 - Math.exp(-dt * 17));
          if (Math.abs(targetZoom - zoom) < .002) zoom = targetZoom;
        }
        yaw %= Math.PI * 2;
        draw();
        if (active() && moving(now)) frame = window.requestAnimationFrame(tick);
        else lastFrame = 0;
      }

      function pause() {
        idleUntil = performance.now() + IDLE_MS;
        spinSpeed = 0;
      }

      function clearMotion() {
        yawSpeed = 0;
        pitchSpeed = 0;
        targetZoom = zoom;
        spinSpeed = 0;
      }

      function zoomBy(factor) {
        targetZoom = clamp(targetZoom * factor, .66, 2.65);
        pause();
        sync();
      }

      function touchDistance() {
        const [a, b] = pointers.values();
        return Math.max(12, Math.hypot(a.x - b.x, a.y - b.y));
      }

      function start(e) {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        if (pointers.size >= 2 || (pointers.size && e.pointerType !== 'touch')) return;
        if (selected) select(null);
        clearMotion();
        pause();
        pointers.set(e.pointerId, {
          x: e.clientX, y: e.clientY, startX: e.clientX, startY: e.clientY, time: performance.now(), yaw: 0, pitch: 0
        });
        if (pointers.size === 2) {
          gesture = 'pinch';
          pinchDistance = touchDistance();
        } else {
          gesture = e.pointerType === 'touch' ? 'pending' : 'orbit';
        }
        if (gesture !== 'pending') canvas.setPointerCapture(e.pointerId);
        sync();
      }

      function move(e) {
        const pointer = pointers.get(e.pointerId);
        if (!pointer || gesture === 'scroll' || gesture === 'rest') return;
        const dx = e.clientX - pointer.x;
        const dy = e.clientY - pointer.y;
        pointer.x = e.clientX;
        pointer.y = e.clientY;
        if (gesture === 'pinch') {
          const d = touchDistance();
          zoomBy(d / pinchDistance);
          pinchDistance = d;
          return;
        }
        if (gesture === 'pending') {
          const x = Math.abs(pointer.x - pointer.startX);
          const y = Math.abs(pointer.y - pointer.startY);
          if (x < 7 && y < 7) return;
          if (y >= x) {
            gesture = 'scroll';
            return;
          }
          if (x < y * 1.12) return;
          gesture = 'orbit';
          canvas.setPointerCapture(e.pointerId);
        }
        const sensitivity = (e.pointerType === 'touch' ? 5.4 : 4.5) / clamp(width, 340, 920);
        const yawDelta = -dx * sensitivity;
        const oldPitch = pitch;
        yaw += yawDelta;
        pitch = clamp(pitch + dy * sensitivity * .76, 20 * DEG, 70 * DEG);
        const now = performance.now();
        const dt = clamp((now - pointer.time) / 1000, .012, .085);
        pointer.yaw = clamp(yawDelta / dt, -3.3, 3.3);
        pointer.pitch = clamp((pitch - oldPitch) / dt, -1.7, 1.7);
        pointer.time = now;
        pause();
        dirty = true;
        // Coalesce input into a frame, including a single drag event while autoplay is paused.
        if (active() && !frame) frame = window.requestAnimationFrame(tick);
      }

      function end(e) {
        const pointer = pointers.get(e.pointerId);
        if (!pointer) return;
        pointers.delete(e.pointerId);
        const now = performance.now();
        if (gesture === 'orbit' && e.type === 'pointerup' && now - pointer.time < 95) {
          yawSpeed = pointer.yaw * .64;
          pitchSpeed = pointer.pitch * .64;
        }
        gesture = pointers.size ? 'rest' : '';
        pause();
        sync();
      }

      function stoppedByVisibility() {
        if (active()) {
          if (dirty) draw();
        } else {
          if (pointers.size) pause();
          pointers.clear();
          gesture = '';
          clearMotion();
        }
        sync();
      }

      function select(pin) {
        if (selected) selected.button.setAttribute('aria-expanded', 'false');
        selected = pin;
        if (selected) selected.button.setAttribute('aria-expanded', 'true');
        setPopup();
      }

      for (const pin of pins) {
        if (!pin.interactive) continue;
        listen(pin.button, 'pointerdown', () => {
          clearMotion();
          pause();
          sync();
        });
        listen(pin.button, 'click', () => {
          pause();
          select(selected === pin ? null : pin);
          sync();
        });
      }
      listen(root, 'keydown', e => {
        if (e.key === 'Escape' && selected) select(null);
      });
      listen(canvas, 'pointerdown', start);
      listen(canvas, 'pointermove', move);
      for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) listen(canvas, event, end);
      listen(canvas, 'wheel', e => {
        if (e.ctrlKey) return;
        e.preventDefault();
        const unit = e.deltaMode === 1 ? 16 : (e.deltaMode === 2 ? height : 1);
        zoomBy(Math.exp(-clamp(e.deltaY * unit, -250, 250) * .0016));
      }, { passive: false });
      listen(document, 'visibilitychange', stoppedByVisibility);
      listen(canvas, 'webglcontextlost', e => {
        e.preventDefault();
        contextLost = true;
        dirty = true;
        stoppedByVisibility();
      });
      listen(canvas, 'webglcontextrestored', () => {
        contextLost = false;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.shadowMap.autoUpdate = false;
        renderer.shadowMap.needsUpdate = true;
        sized = false;
        dpr = 0;
        resize();
      });

      const intersection = new window.IntersectionObserver(entries => {
        if (destroyed) return;
        const entry = entries[entries.length - 1];
        const next = entry.isIntersecting && entry.intersectionRatio > 0;
        if (next === visible) return;
        visible = next;
        stoppedByVisibility();
      });
      cleanups.push(() => intersection.disconnect());
      const sizes = new window.ResizeObserver(resize);
      cleanups.push(() => sizes.disconnect());
      cleanups.push(() => {
        stopFrame();
        if (timer) window.clearTimeout(timer);
        for (const id of pointers.keys()) {
          if (canvas.hasPointerCapture(id)) canvas.releasePointerCapture(id);
        }
        pointers.clear();
      });
      setLang(lang);
      const buildMs = performance.now() - started;
      return {
        destroy,
        setLang,
        start() {
          intersection.observe(root);
          sizes.observe(root);
          // The observer performs the first draw after confirming actual viewport intersection.
          resize();
        }
      };
    } catch (error) {
      destroy();
      throw error;
    }
  }

  let mounted = null;
  let language = 'zh';
  function destroy() {
    if (!mounted) return;
    mounted.destroy();
    mounted = null;
  }

  window.Venue3D = {
    mount(el, opts = {}) {
      if (!el || el.nodeType !== 1) throw new TypeError('Venue3D.mount requires a container element.');
      if (!window.THREE) throw new Error('Load the global THREE script before mounting Venue3D.');
      destroy();
      if (opts.lang === 'zh' || opts.lang === 'en') language = opts.lang;
      mounted = createView(el, window.THREE, opts, language);
      try {
        mounted.start();
      } catch (error) {
        destroy();
        throw error;
      }
    },
    setLang(lang) {
      if (lang !== 'zh' && lang !== 'en') return;
      language = lang;
      if (mounted) mounted.setLang(lang);
    },
    destroy
  };
})(window);
