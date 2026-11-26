// 巴生静思堂实时模型：可拖转 360 度、一砖一瓦盖起来、拉远看社区。
// 单位米；x 右、y 上、z 朝正门外。比例依官方效果图 front.jpg / aerial.jpg 量出。
window.Klang3D = (function () {
  'use strict';
  const clamp01 = x => Math.max(0, Math.min(1, x));
  const ease = x => { x = clamp01(x); return x * x * (3 - 2 * x); };
  const easeOut = x => { x = clamp01(x); return 1 - Math.pow(1 - x, 3); };
  const lerp = (a, b, t) => a + (b - a) * t;
  let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647; const Rr = (a, b) => a + (b - a) * rnd();

  const DISC = 60.5;      // 模型底座半径
  const WORLD = 235;      // 社区地盘半径
  const FOV = 24;
  const STAGES = [
    [.06, '打地基', 'Laying the foundation'], [.18, '立起柱子', 'Raising the columns'],
    [.52, '一砖一块砌上去', 'Brick by brick'], [.60, '升起山墙', 'Raising the gables'],
    [.82, '一片一片铺上瓦', 'Tile by tile'], [.88, '窗里亮起灯', 'The lights come on'],
    [.995, '种下空中花园', 'Planting the sky garden'], [2, '盖好之后的模样', 'How it is meant to look']
  ];

  let renderer, scene, camera, cv, sun, labelsEl, onStage = null, onP = null;
  let built = false, running = false, raf = 0, last = 0;
  let P = 1, playing = false, playDur = 15, c = 0, cT = 0;
  let az = -0.46, el = 0.17, elT = 0.17, drag = null, lastDrag = -1e9, vel = 0, spin = true;
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;

  const anims = [], glowMats = [], labels = [];
  let cutPlane, gableCut, scafCut, bricks, brickList = [], brickDummy, roughFloor;
  let crane, jib, trolley, cable, load, world, worldMat, sideWall, ring, plinth, mud, inst = [], lastStage = -1;
  let groundCtx, waterMesh, waterN, resortGroups = [], traffic, lampGlow, hemi, prof = [], safeFn = null, safe = null, safeAt = 0; const nightMats = [];

  // ---------- 贴图 ----------
  function tex(w, h, draw, rep) {
    const c2 = document.createElement('canvas'); c2.width = w; c2.height = h; draw(c2.getContext('2d'), w, h);
    const t = new THREE.CanvasTexture(c2); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
    if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); } return t;
  }
  const STONE = '#b6afa3', STONE2 = '#a9a296', TRIM = '#d6ccba', ROOF = '#43474e';
  function stoneBase(g, w, h, s) {            // 石材分格，s=每米像素
    g.fillStyle = STONE; g.fillRect(0, 0, w, h);
    for (let y = 0, r = 0; y < h; y += 1.5 * s, r++) for (let x = (r % 2) * -1.5 * s; x < w; x += 3 * s) {
      const v = (rnd() - .5) * 14; g.fillStyle = `rgba(${v > 0 ? '255,250,240' : '60,52,44'},${Math.abs(v) / 110})`; g.fillRect(x, y, 3 * s, 1.5 * s);
    }
    g.strokeStyle = 'rgba(70,64,56,.28)'; g.lineWidth = Math.max(1, s * .035);
    for (let y = 0; y < h; y += 1.5 * s) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); }
    for (let x = 0; x < w; x += 3 * s) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, h); g.stroke(); }
  }
  function glass(g, e, x, y, w, h, s, cols, rows) {  // 落地窗：底图 g，发光图 e
    const gr = g.createLinearGradient(0, y * s, 0, (y + h) * s); gr.addColorStop(0, '#5e5a52'); gr.addColorStop(1, '#3f3d3a');
    g.fillStyle = gr; g.fillRect(x * s, y * s, w * s, h * s);
    const eg = e.createLinearGradient(0, y * s, 0, (y + h) * s); eg.addColorStop(0, '#ffdc9c'); eg.addColorStop(.55, '#f4b768'); eg.addColorStop(1, '#c98a45');
    e.fillStyle = eg; e.fillRect(x * s, y * s, w * s, h * s);
    for (const k of [g, e]) {
      k.strokeStyle = k === g ? '#d9d2c5' : '#2a1d10'; k.lineWidth = Math.max(1.4, s * .09);
      for (let i = 0; i <= cols; i++) { const X = (x + w * i / cols) * s; k.beginPath(); k.moveTo(X, y * s); k.lineTo(X, (y + h) * s); k.stroke(); }
      for (let i = 0; i <= rows; i++) { const Y = (y + h * i / rows) * s; k.beginPath(); k.moveTo(x * s, Y); k.lineTo((x + w) * s, Y); k.stroke(); }
    }
    g.strokeStyle = '#8f887c'; g.lineWidth = s * .16; g.strokeRect(x * s, y * s, w * s, h * s);
  }
  function louver(g, x, y, w, h, s) {
    g.fillStyle = '#6d6a64'; g.fillRect(x * s, y * s, w * s, h * s);
    g.fillStyle = '#c5bdb0'; for (let Y = y; Y < y + h; Y += .24) g.fillRect(x * s, Y * s, w * s, .11 * s);
  }
  // 一面墙：返回 {map, emissiveMap}；draw(g,e,w,h,s)
  function wall(wm, hm, draw, base) {
    const s = 28, W = Math.round(wm * s), H = Math.round(hm * s);
    const cE = document.createElement('canvas'); cE.width = W; cE.height = H; const e = cE.getContext('2d'); e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    const map = tex(W, H, (g, w, h) => { (base || stoneBase)(g, w, h, s); draw(g, e, w, h, s); });
    const em = new THREE.CanvasTexture(cE); em.colorSpace = THREE.SRGBColorSpace; em.anisotropy = 8;
    return { map, emissiveMap: em };
  }
  function wallMat(t, clip) {
    const m = new THREE.MeshStandardMaterial(Object.assign({ color: '#fff', emissive: '#fff', emissiveIntensity: 0, roughness: .78, metalness: 0, side: THREE.DoubleSide }, t, clip ? { clippingPlanes: clip, clipShadows: true } : {}));
    glowMats.push(m); return m;
  }
  const std = (color, o) => new THREE.MeshStandardMaterial(Object.assign({ color, roughness: .82, metalness: 0 }, o || {}));

  // ---------- 小工具 ----------
  function add(geo, mat, x, y, z, parent, shadow) {
    const m = new THREE.Mesh(geo, mat); m.position.set(x || 0, y || 0, z || 0);
    m.castShadow = shadow !== false; m.receiveShadow = true; (parent || scene).add(m); return m;
  }
  function box(w, h, d) {                     // 原点在底面；UV 按米铺，石材不被拉伸
    const g = new THREE.BoxGeometry(w, h, d); g.translate(0, h / 2, 0);
    const uv = g.attributes.uv, dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
    for (let f = 0; f < 6; f++) for (let i = 0; i < 4; i++) { const k = f * 4 + i; uv.setXY(k, uv.getX(k) * dims[f][0] / 12, uv.getY(k) * dims[f][1] / 12); }
    return g;
  }
  // 合并几何（非索引；保留法线、UV、顶点色）
  function merge(list) {
    const ps = list.map(g => g.index ? g.toNonIndexed() : g); let n = 0; ps.forEach(g => n += g.attributes.position.count);
    const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), uv = new Float32Array(n * 2), col = new Float32Array(n * 3).fill(1); let o = 0;
    for (const g of ps) {
      const a = g.attributes, k = a.position.count; if (!a.normal) g.computeVertexNormals();
      pos.set(a.position.array, o * 3); nor.set(g.attributes.normal.array, o * 3); if (a.uv) uv.set(a.uv.array, o * 2); if (a.color) col.set(a.color.array, o * 3); o += k;
    }
    const out = new THREE.BufferGeometry();
    out.setAttribute('position', new THREE.BufferAttribute(pos, 3)); out.setAttribute('normal', new THREE.BufferAttribute(nor, 3)); out.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); out.setAttribute('color', new THREE.BufferAttribute(col, 3));
    return out;
  }
  // 真四坡屋顶：底边 w×d，脊线沿长边；UV 按米，瓦不被拉伸
  function hipGeo(w, d, h) {
    const a = w / 2, b = d / 2, ax = w >= d, r = Math.abs(w - d) / 2;
    const A = [-a, 0, b], B = [a, 0, b], C = [a, 0, -b], D = [-a, 0, -b], R1 = ax ? [-r, h, 0] : [0, h, r], R2 = ax ? [r, h, 0] : [0, h, -r];
    const faces = ax ? [[A, B, R2, R1], [B, C, R2], [C, D, R1, R2], [D, A, R1]] : [[A, B, R1], [B, C, R2, R1], [C, D, R2], [D, A, R1, R2]];
    const pos = [], uv = [];
    for (const f of faces) {
      const e0 = f[0], e1 = f[1], l = Math.hypot(e1[0] - e0[0], e1[2] - e0[2]), tx = (e1[0] - e0[0]) / l, tz = (e1[2] - e0[2]) / l;
      const tri = f.length === 3 ? [[0, 1, 2]] : [[0, 1, 2], [0, 2, 3]];
      for (const t of tri) for (const i of t) { const p = f[i], dx = p[0] - e0[0], dy = p[1], dz = p[2] - e0[2], u = dx * tx + dz * tz, v = Math.sqrt(Math.max(0, dx * dx + dy * dy + dz * dz - u * u)); pos.push(p[0], p[1], p[2]); uv.push(u / 8, v / 8); }
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.computeVertexNormals(); return g;
  }
  // 树冠：几团变形球，法线取球面、底暗顶亮；高度归一为 1
  function treeGeo(lobes, th) {
    const ps = [];
    for (const [cx, cy, cz, r, sy] of lobes) {
      const g = new THREE.IcosahedronGeometry(1, 1), p = g.attributes.position, n = g.attributes.normal, col = new Float32Array(p.count * 3);
      for (let i = 0; i < p.count; i++) {
        const x = p.getX(i), y = p.getY(i), z = p.getZ(i), k = 1 + .17 * Math.sin(x * 5.1 + y * 3.3 + cz * 9) * Math.cos(z * 4.7 + cx * 7);
        n.setXYZ(i, x, y, z); const Y = cy + y * r * sy * k; p.setXYZ(i, cx + x * r * k, Y, cz + z * r * k);
        const s = .5 + .62 * clamp01((y + 1) / 2) * (.82 + .18 * Math.sin(x * 9 + z * 7)); col[i * 3] = s * 1.04; col[i * 3 + 1] = s; col[i * 3 + 2] = s * .86;
      }
      g.setAttribute('color', new THREE.BufferAttribute(col, 3)); ps.push(g);
    }
    if (th) { const t = new THREE.CylinderGeometry(.018, .03, th, 5).translate(0, th / 2, 0), col = new Float32Array(t.toNonIndexed().attributes.position.count * 3); const nt = t.toNonIndexed(); for (let i = 0; i < col.length; i += 3) { col[i] = .62; col[i + 1] = .42; col[i + 2] = .34; } nt.setAttribute('color', new THREE.BufferAttribute(col, 3)); ps.push(nt); }
    return merge(ps);
  }
  // 一组共用摆放的实例：list 项 {x,y?,z,ry?,sx,sy,sz,d0}
  function addInst(parts, list, span) {
    const ms = parts.map(([geo, mat]) => { const m = new THREE.InstancedMesh(geo, mat, Math.max(1, list.length)); m.count = list.length; m.castShadow = m.receiveShadow = true; m.frustumCulled = false; m.visible = false; scene.add(m); return m; });
    inst.push({ ms, list, span }); return ms;
  }
  function grow(obj, t0, t1, mode) {
    obj.userData.y0 = obj.position.y; obj.userData.s0 = obj.scale.clone();
    anims.push({ obj, t0, t1, mode: mode || 'y' }); return obj;
  }
  const roofY = (s, r) => r.eave + (r.ridge - r.eave) * Math.pow(1 - s, 1.9) + r.flare * Math.pow(ease((s - .78) / .22), 2);

  // 一条瓦排：s0→s1 这段屋面
  function roofRow(side, s0, s1, r, z0, z1, mat) {
    const K = 3, pos = [], uv = [], idx = [];
    for (let i = 0; i <= K; i++) {
      const s = s0 + (s1 - s0) * i / K, x = side * s * r.halfW, y = roofY(s, r) + .05;
      pos.push(x, y, z0, x, y, z1);
      uv.push(0, s * r.halfW / 1.4, (z0 - z1) / 2.4, s * r.halfW / 1.4);
    }
    for (let i = 0; i < K; i++) { const a = i * 2; if (side > 0) idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); else idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx); g.computeVertexNormals();
    return add(g, mat);
  }
  function roofCurve(r, off, n) {             // 左檐 → 屋脊 → 右檐
    const pts = []; n = n || 28;
    for (let i = 0; i <= n; i++) { const s = 1 - i / n; pts.push([-s * r.halfW, roofY(s, r) + off]); }
    for (let i = 1; i <= n; i++) { const s = i / n; pts.push([s * r.halfW, roofY(s, r) + off]); }
    return pts;
  }
  function bargeboard(r, z, mat, t0, t1, up, dn) {
    const a = roofCurve(r, up), b = roofCurve(r, -dn).reverse(), s = new THREE.Shape();
    a.forEach((p, i) => i ? s.lineTo(p[0], p[1]) : s.moveTo(p[0], p[1])); b.forEach(p => s.lineTo(p[0], p[1])); s.closePath();
    const g = new THREE.ExtrudeGeometry(s, { depth: .9, bevelEnabled: false, curveSegments: 1 });
    return grow(add(g, mat, 0, 0, z - .45), t0, t1, 'drop');
  }
  function gable(r, halfW, z, mat) {          // 墙顶到屋面之间的三角墙
    const s = new THREE.Shape(); const y0 = r.eave - .1;
    s.moveTo(-halfW, y0);
    for (let i = 0; i <= 40; i++) { const x = -halfW + 2 * halfW * i / 40; s.lineTo(x, roofY(Math.abs(x) / r.halfW, r) - .1); }
    s.lineTo(halfW, y0); s.closePath();
    const g = new THREE.ShapeGeometry(s); const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / 12, uv.getY(i) / 12);
    return add(g, mat, 0, 0, z);
  }
  function finial(x, y, z, sc, mat, t) {      // 三宝珠
    const g = new THREE.Group(); g.position.set(x, y, z); g.scale.setScalar(sc); scene.add(g);
    const sp = new THREE.SphereGeometry(.42, 18, 14);
    add(new THREE.CylinderGeometry(.5, .85, .5, 18).translate(0, .25, 0), mat, 0, 0, 0, g);
    add(sp, mat, -.42, .82, 0, g); add(sp, mat, .42, .82, 0, g); add(sp, mat, 0, 1.45, 0, g);
    return grow(g, t, t + .03, 'pop');
  }

  // ---------- 建楼 ----------
  function buildHall(assets) {
    cutPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0);
    gableCut = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0);
    scafCut = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0);
    const stoneT = tex(512, 512, (g, w, h) => stoneBase(g, w, h, 512 / 12), [1, 1]);
    const stone = std('#fff', { map: stoneT, roughness: .8 });
    const trim = std(TRIM, { roughness: .7 });
    const stoneGable = std('#fff', { map: stoneT, roughness: .8, side: THREE.DoubleSide, clippingPlanes: [gableCut], clipShadows: true });
    const WH = 17.7;

    // 地基
    grow(add(box(58, .22, 86), std('#a7a297'), 0, -.02, 0), 0, .06, 'y');
    const con = std('#b9b4a9');
    // 柱子：主体四周先立起
    const colG = box(.9, WH, .9), per = [[-13, 20], [13, 20], [13, -8], [17, -8], [17, -40], [-17, -40], [-17, -8], [-13, -8]];
    per.forEach((a, i) => {
      const b = per[(i + 1) % per.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]), n = Math.max(1, Math.round(L / 7));
      for (let k = 0; k < n; k++) { const t = k / n; grow(add(colG, con, lerp(a[0], b[0], t), 0, lerp(a[1], b[1], t)), .055 + rnd() * .06, .13 + rnd() * .05, 'y'); }
    });

    // 主墙（靠裁切面一层层露出）
    const clip = [cutPlane];
    const front = wall(26, WH, (g, e, w, h, s) => {
      const Y = v => WH - v;                 // 贴图 y 向下
      for (const [x0, ww, cols] of [[2.5, 4.6, 3], [9.2, 7.6, 5], [18.9, 4.6, 3]]) {
        glass(g, e, x0, Y(16.8), ww, 2.7, s, cols, 2); glass(g, e, x0, Y(13), ww, 2.9, s, cols, 2); glass(g, e, x0, Y(9), ww, 2.7, s, cols, 2);
      }
      glass(g, e, 2.5, Y(5.6), 21, 5.6, s, 14, 2);
      g.fillStyle = '#4a3a2c'; g.fillRect(9.8 * s, Y(5.4) * s, 6.4 * s, 5.4 * s); e.fillStyle = '#000'; e.fillRect(9.8 * s, Y(5.4) * s, 6.4 * s, 5.4 * s);
      g.fillStyle = 'rgba(0,0,0,.25)'; for (let x = 9.8; x < 16.2; x += .4) g.fillRect(x * s, Y(5.4) * s, .05 * s, 5.4 * s);
    });
    const sideF = wall(28, WH, (g, e, w, h, s) => { for (let i = 0; i < 5; i++) { glass(g, e, 1.4 + i * 5.3, 1.2, 3.6, 3, s, 3, 2); glass(g, e, 1.4 + i * 5.3, 5.4, 3.6, 3, s, 3, 2); } });
    const sideB = wall(32, WH, (g, e, w, h, s) => { for (let i = 0; i < 6; i++) { glass(g, e, 1.2 + i * 5.1, 1.2, 3.4, 2.8, s, 3, 2); } });
    const backF = wall(34, WH, (g, e, w, h, s) => { for (let i = 0; i < 5; i++) { glass(g, e, 2 + i * 6.3, 1.2, 4.4, 3, s, 3, 2); glass(g, e, 2 + i * 6.3, 6, 4.4, 3, s, 3, 2); glass(g, e, 2 + i * 6.3, 11, 4.4, 3, s, 3, 2); } });
    const mF = wallMat(front, clip), mS = wallMat(sideF, clip), mB = wallMat(sideB, clip), mK = wallMat(backF, clip);
    const pl = (w, h, m, x, z, ry) => { const p = add(new THREE.PlaneGeometry(w, h), m, x, h / 2, z); p.rotation.y = ry || 0; return p; };
    pl(26, WH, mF, 0, 20); pl(28, WH, mS, 13, 6, Math.PI / 2); pl(28, WH, mS, -13, 6, -Math.PI / 2);
    pl(32, WH, mB, 17, -24, Math.PI / 2); pl(32, WH, mB, -17, -24, -Math.PI / 2); pl(34, WH, mK, 0, -40, Math.PI);
    pl(4, WH, std(STONE2, { side: THREE.DoubleSide, clippingPlanes: clip }), 15, -8); pl(4, WH, std(STONE2, { side: THREE.DoubleSide, clippingPlanes: clip }), -15, -8);
    // 内部楼板
    [5.8, 10, 14].forEach((y, i) => { grow(add(box(25.6, .4, 27.6), con, 0, y, 6, scene, false), .24 + i * .09, .27 + i * .09, 'pop'); grow(add(box(33.6, .4, 31.6), con, 0, y, -24, scene, false), .25 + i * .09, .28 + i * .09, 'pop'); });

    // 逐块砖
    const BL = 2, BH = 1, COURSES = Math.ceil(WH);
    per.forEach((a, i) => {
      const b = per[(i + 1) % per.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]), n = Math.round(L / BL), ry = Math.atan2(b[1] - a[1], b[0] - a[0]);
      for (let k = 0; k < n; k++) brickList.push({ x: lerp(a[0], b[0], (k + .5) / n), z: lerp(a[1], b[1], (k + .5) / n), ry, o: rnd() });
    });
    const nPer = brickList.length, base = brickList.slice(); brickList = [];
    for (let cI = 0; cI < COURSES; cI++) base.forEach((q, i) => brickList.push({ x: q.x, z: q.z, ry: q.ry, y: cI * BH, c: cI, t: .18 + (.34) * ((cI + q.o * .85) / COURSES) }));
    bricks = new THREE.InstancedMesh(new THREE.BoxGeometry(BL * .96, BH * .9, .6), std('#fff', { roughness: .9 }), brickList.length);
    bricks.instanceMatrix.setUsage(THREE.DynamicDrawUsage); bricks.castShadow = false; bricks.frustumCulled = false;
    const col = new THREE.Color(); brickList.forEach((b, i) => { col.setHSL(.06 + rnd() * .02, .34 + rnd() * .1, .5 + rnd() * .1); bricks.setColorAt(i, col); });
    scene.add(bricks); brickDummy = new THREE.Object3D();

    // 两翼：一楼玻璃、阳台、二楼退一点、屋顶花园
    const railT = tex(256, 64, (g, w, h) => {
      g.clearRect(0, 0, w, h); g.fillStyle = '#4c4b49';
      g.fillRect(0, 0, w, 5); g.fillRect(0, h - 5, w, 5);
      for (let x = 0; x < w; x += 16) for (let y = 5, r = 0; y < h - 5; y += 9, r++) { g.fillRect(x + (r % 2) * 8, y, 10, 4); }
      g.fillStyle = '#c9c0b1'; for (let x = 0; x < w; x += 128) g.fillRect(x, 0, 7, h);
    }, [1, 1]);
    const lvl1 = wall(30, 6.1, (g, e, w, h, s) => { glass(g, e, .4, 1.1, 29.2, 5, s, 18, 2); louver(g, .4, .1, 29.2, 1, s); });
    const lvl1s = wall(40, 6.1, (g, e, w, h, s) => { glass(g, e, .4, 1.1, 39.2, 5, s, 24, 2); louver(g, .4, .1, 39.2, 1, s); });
    const lvl2 = wall(40, 4.4, (g, e, w, h, s) => { glass(g, e, .4, 1.3, 39.2, 3, s, 26, 1); louver(g, .4, .15, 39.2, 1.05, s); });
    const lvl3 = wall(30, 2.4, (g, e, w, h, s) => { glass(g, e, .4, .4, 29.2, 1.9, s, 20, 1); });
    const m1 = wallMat(lvl1), m1s = wallMat(lvl1s), m2 = wallMat(lvl2), m3 = wallMat(lvl3);
    const hedgePts = [], treePts = [];
    function railRect(x0, x1, z0, z1, y, h, t0, t1) {
      const seg = (L, x, z, ry) => {
        const t = railT.clone(); t.repeat.set(Math.round(L / 3.2), 1); t.needsUpdate = true;
        const m = std('#fff', { map: t, alphaTest: .5, side: THREE.DoubleSide, roughness: .6 });
        const p = add(new THREE.PlaneGeometry(L, h), m, x, y + h / 2, z); p.rotation.y = ry; grow(p, t0, t1, 'y2');
        const cap = add(box(L + .2, .16, .34), trim, x, y + h, z); cap.rotation.y = ry; grow(cap, t0, t1, 'pop');
      };
      seg(x1 - x0, (x0 + x1) / 2, z0, 0); seg(z0 - z1, x1, (z0 + z1) / 2, Math.PI / 2); seg(x1 - x0, (x0 + x1) / 2, z1, 0);
    }
    function tieredBox(x0, x1, z0, z1, y, h, front, side, t0, t1) {   // 四面贴窗的一层
      const g = new THREE.Group(); g.position.y = y; scene.add(g);
      const w = x1 - x0, d = z0 - z1, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, sgn = cx > 0 ? 1 : -1;
      const f = add(new THREE.PlaneGeometry(w, h), front, cx, h / 2, z0, g); f.scale.x = 1;
      const s2 = add(new THREE.PlaneGeometry(d, h), side, sgn > 0 ? x1 : x0, h / 2, cz, g); s2.rotation.y = sgn * Math.PI / 2;
      add(new THREE.PlaneGeometry(w, h), side, cx, h / 2, z1, g).rotation.y = Math.PI;
      return grow(g, t0, t1, 'y');
    }
    for (const sg of [-1, 1]) {
      const A = v => (sg > 0 ? v : -v), lo = (a, b) => (sg > 0 ? [a, b] : [-b, -a]);
      const [a0, a1] = lo(13, 28), [b0, b1] = lo(13, 26.8), [c0, c1] = lo(13, 21);
      for (const x of [13.4, 20.5, 27.6]) for (const z of [33.6, 20, 6, -5.6]) grow(add(box(.8, 6.1, .8), con, A(x), 0, z), .14 + rnd() * .03, .19, 'y');
      tieredBox(a0, a1, 34, -6, 0, 6.1, m1, m1s, .17, .24);
      grow(add(box(16.8, .62, 41.2), trim, A(20.4), 6.1, 14), .22, .26, 'pop');
      tieredBox(b0, b1, 32.8, -5, 6.7, 4.5, m2, m2, .27, .34);
      grow(add(box(16.8, .62, 41.2), trim, A(20.4), 11.2, 14), .33, .37, 'pop');
      tieredBox(c0, c1, 30, 4, 11.8, 2.4, m3, m3, .38, .42);
      grow(add(box(9.2, .5, 27.2), trim, A(17), 14.2, 17), .41, .43, 'pop');
      // 后侧楼
      const [e0, e1] = lo(17, 24);
      tieredBox(e0, e1, -6, -40, 0, 14.4, wallMat(wall(8, 14.4, (g, e, w, h, s) => { for (let r = 0; r < 4; r++) glass(g, e, .6, .7 + r * 3.5, 6.8, 2.3, s, 5, 1); })), wallMat(wall(34, 14.4, (g, e, w, h, s) => { for (let r = 0; r < 4; r++) glass(g, e, .6, .7 + r * 3.5, 32.8, 2.3, s, 20, 1); })), .2, .36);
      grow(add(box(7.6, .7, 34.6), trim, A(20.5), 14.4, -23), .36, .39, 'pop');
      // 栏杆（晚一点上）
      const rr = (x0, x1, z0, z1, y, h, t) => { if (sg > 0) railSide(x0, x1, z0, z1, y, h, t); else railSide(-x1, -x0, z0, z1, y, h, t); };
      rr(13, 28.7, 34.5, -6.4, 6.72, 1.25, .76); rr(13, 28.7, 34.5, -6.4, 11.82, 1.2, .78); rr(13, 21.5, 30.5, 3.6, 14.7, 1, .8);
      // 绿篱和小树
      for (let z = 33.4; z > -5; z -= 1.15) { hedgePts.push([A(27.7), 12, z, 1.05]); hedgePts.push([A(23), 12, z, .95]); }
      for (let x = 21.8; x < 27.4; x += 1.15) hedgePts.push([A(x), 12, 33.4, 1]);
      for (let z = 29.6; z > 4; z -= 1.2) hedgePts.push([A(20.6), 14.8, z, .9]);
      for (let x = 14; x < 20.4; x += 1.2) hedgePts.push([A(x), 14.8, 29.6, .9]);
      for (let z = 33.4; z > 8; z -= 1.3) hedgePts.push([A(27.8), 7, z, .55]);
      treePts.push([A(25), 11.9, 28, 1.05], [A(25.4), 11.9, 14, 1.2], [A(24.8), 11.9, 2, 1], [A(17.4), 14.7, 24, .95], [A(18), 14.7, 10, 1.1]);
    }
    function railSide(x0, x1, z0, z1, y, h, t) {
      const inner = x0 > 0 ? x1 : x0, other = x0 > 0 ? x0 : x1;
      railRect(Math.min(x0, x1), Math.max(x0, x1), z0, z1, y, h, t, t + .06);
      void inner; void other;
    }
    // 花园：绿篱 + 小树
    const leaf = new THREE.IcosahedronGeometry(1, 1);
    const hedge = new THREE.InstancedMesh(leaf, std('#fff', { roughness: .95, flatShading: true }), hedgePts.length * 2);
    const dm = new THREE.Object3D(); let n = 0;
    hedgePts.forEach(p => { for (let k = 0; k < 2; k++) { dm.position.set(p[0] + Rr(-.3, .3), p[1] + .4 + k * .35, p[2] + Rr(-.3, .3)); dm.scale.setScalar(p[3] * Rr(.62, .92)); dm.rotation.set(rnd() * 3, rnd() * 3, 0); dm.updateMatrix(); hedge.setMatrixAt(n, dm.matrix); hedge.setColorAt(n, new THREE.Color().setHSL(.27 + rnd() * .04, .36, .24 + rnd() * .1)); n++; } });
    hedge.castShadow = true; scene.add(hedge); grow(hedge, .84, .92, 'y');
    const trunkM = std('#6b5140');
    treePts.forEach(p => {
      const g = new THREE.Group(); g.position.set(p[0], p[1], p[2]); g.scale.setScalar(p[3]); scene.add(g);
      add(new THREE.CylinderGeometry(.14, .2, 2.2, 6).translate(0, 1.1, 0), trunkM, 0, 0, 0, g);
      for (let k = 0; k < 5; k++) { const m = add(leaf, std(new THREE.Color().setHSL(.28, .38, .26 + rnd() * .08), { flatShading: true, roughness: .95 }), Rr(-1.2, 1.2), Rr(2.5, 3.8), Rr(-1.2, 1.2), g); m.scale.setScalar(Rr(1.1, 1.6)); }
      grow(g, .88 + rnd() * .04, .97, 'pop');
    });

    // 山墙
    const RF = { halfW: 17, ridge: 25.4, eave: WH, flare: 1 };
    const RB = { halfW: 21, ridge: 27.2, eave: WH, flare: 1.1 };
    const RP = { halfW: 7.9, ridge: 13.4, eave: 8.45, flare: .5 };
    gable(RF, 13, 20, stoneGable); gable(RF, 13, -8, stoneGable); gable(RB, 17, -8.2, stoneGable); gable(RB, 17, -40, stoneGable);

    // 屋瓦：一排一排落下
    const tileT = tex(256, 256, (g, w, h) => {
      g.fillStyle = ROOF; g.fillRect(0, 0, w, h);
      for (let y = 0, r = 0; y < h; y += 32, r++) for (let x = (r % 2) * -16; x < w; x += 32) { const v = 44 + rnd() * 16; g.fillStyle = `rgb(${v + 6},${v + 10},${v + 16})`; g.fillRect(x + 1, y + 1, 30, 30); g.fillStyle = 'rgba(0,0,0,.34)'; g.fillRect(x, y + 28, 32, 4); }
    }, [1, 1]);
    const tile = std('#fff', { map: tileT, roughness: .62, side: THREE.DoubleSide });
    const R1 = 14;
    function roofOf(r, z0, z1, t0, t1, rows) {
      for (const side of [-1, 1]) for (let i = 0; i < rows; i++) {
        const u = i / rows, s1 = 1 - u, s0 = 1 - (i + 1) / rows - .004;     // 从檐口往屋脊铺
        const m = roofRow(side, Math.max(0, s0), s1, r, z0, z1, tile);
        grow(m, t0 + (t1 - t0) * (u + (side > 0 ? .02 : 0)) * .92, t0 + (t1 - t0) * (u + .08), 'drop');
      }
    }
    roofOf(RB, -8, -42, .54, .70, R1); roofOf(RF, 22, -9, .62, .80, R1); roofOf(RP, 36, 20, .68, .76, 8);
    bargeboard(RF, 22, trim, .56, .60, .34, .6); bargeboard(RB, -42, trim, .55, .59, .36, .62); bargeboard(RB, -8.6, trim, .56, .60, .36, .62);
    bargeboard(RP, 36, trim, .66, .69, .22, .4);
    for (const [r, z0, z1, t] of [[RF, 22, -9, .79], [RB, -8, -42, .69], [RP, 36, 20, .75]]) {
      const L = Math.abs(z1 - z0), zc = (z0 + z1) / 2;
      grow(add(box(r === RP ? .7 : 1.1, r === RP ? .34 : .5, L + .4), trim, 0, r.ridge - .05, zc), t, t + .02, 'pop');
      for (const sd of [-1, 1]) grow(add(box(.5, .46, L + .6), trim, sd * r.halfW, r.eave + r.flare - .34, zc), t - .02, t, 'pop');
    }
    finial(0, 25.7, 22.2, 1, trim, .8); finial(0, 27.5, -41.8, 1, trim, .71); finial(0, 13.6, 36, .62, trim, .76);

    // 门廊
    const porchT0 = .62;
    for (const x of [-6.3, -5, 5, 6.3]) {
      grow(add(new THREE.CylinderGeometry(.56, .6, 7.1, 28).translate(0, 3.55, 0), std('#e2d9c8', { roughness: .55 }), x, 0, 33), porchT0, porchT0 + .05, 'y');
      grow(add(box(1.6, .5, 1.6), trim, x, 0, 33), porchT0, porchT0 + .01, 'pop');
    }
    grow(add(box(15.6, 1.35, 15), stone, 0, 7.1, 27.5), porchT0 + .04, porchT0 + .07, 'pop');
    const pG = gable(RP, 7.8, 34.98, std('#fff', { map: stoneT, side: THREE.DoubleSide }));
    grow(pG, porchT0 + .05, porchT0 + .08, 'pop');
    // 门廊两侧到主墙
    for (const sd of [-1, 1]) grow(add(box(.6, 7.1, 13.6), stone, sd * 7.4, 0, 27), porchT0, porchT0 + .05, 'y');
    // 台阶
    for (let i = 0; i < 7; i++) { const dp = 10 - i * .8; grow(add(box(28 - i * .3, .2, dp), trim, 0, i * .2, 30 + dp / 2), .73 + i * .004, .75 + i * .004, 'pop'); }
    // 徽与字：原档，不重画
    const addDecal = (tx, w, h, x, y, z, t) => {
      const m = new THREE.MeshStandardMaterial({ map: tx, transparent: true, roughness: .5, polygonOffset: true, polygonOffsetFactor: -2 });
      const d = add(new THREE.PlaneGeometry(w, h), m, x, y, z, scene, false); d.castShadow = false; grow(d, t, t + .02, 'pop'); return d;
    };
    assets.then(({ logo, txt }) => {
      if (logo) addDecal(logo, 5.6, 3, 0, 20.1, 20.08, .6);
      if (txt) addDecal(txt, 6, 1.65, 0, 9.9, 35.06, .7);
      apply();
    });
    buildSiteGear();
  }

  // 鹰架、塔吊
  function buildSiteGear() {
    const lat = tex(128, 128, (g, w, h) => {
      g.clearRect(0, 0, w, h); g.strokeStyle = '#8d8f90'; g.lineWidth = 4; g.strokeRect(2, 2, w - 4, h - 4);
      g.lineWidth = 3; g.beginPath(); g.moveTo(0, h); g.lineTo(w, 0); g.stroke();
    }, [1, 1]);
    const face = (w, x, z, ry) => {
      const t = lat.clone(); t.repeat.set(Math.round(w / 2.4), 8); t.needsUpdate = true;
      const m = std('#fff', { map: t, alphaTest: .4, side: THREE.DoubleSide, clippingPlanes: [scafCut] });
      const p = add(new THREE.PlaneGeometry(w, 20), m, x, 10, z, scene, false); p.rotation.y = ry; return p;
    };
    face(29, 0, 21.4, 0); face(62, 18.6, -10, Math.PI / 2); face(62, -18.6, -10, Math.PI / 2); face(38, 0, -41.5, 0);
    const craneY = std('#e2b13c', { roughness: .5 });
    crane = new THREE.Group(); crane.position.set(36, 0, -18); scene.add(crane);
    const ltex = tex(64, 64, (g, w, h) => { g.clearRect(0, 0, w, h); g.strokeStyle = '#e2b13c'; g.lineWidth = 6; g.strokeRect(0, 0, w, h); g.beginPath(); g.moveTo(0, h); g.lineTo(w, 0); g.stroke(); }, [1, 12]);
    const lm = std('#fff', { map: ltex, alphaTest: .4, side: THREE.DoubleSide });
    for (const [x, z, ry] of [[0, .85, 0], [0, -.85, 0], [.85, 0, Math.PI / 2], [-.85, 0, Math.PI / 2]]) { const p = add(new THREE.PlaneGeometry(1.7, 31), lm, x, 15.5, z, crane, false); p.rotation.y = ry; }
    add(box(4.4, .6, 4.4), std('#8b8c8c'), 0, 0, 0, crane, false);
    jib = new THREE.Group(); jib.position.y = 31; crane.add(jib);
    add(box(2.4, 2.2, 2.4), craneY, 0, 0, 0, jib);
    add(box(.1, 8, .1), craneY, 0, 2, 0, jib, false);
    const j1 = add(box(50, 1.1, 1), craneY, -23, 1.7, 0, jib); j1.material = craneY;
    add(box(14, .9, .9), craneY, 8, 1.6, 0, jib); add(box(4, 2.2, 1.6), std('#6d6f72'), 13, .3, 0, jib);
    trolley = add(box(1.8, .5, 1.4), std('#444'), -26, 1.1, 0, jib, false);
    cable = add(new THREE.CylinderGeometry(.05, .05, 1, 5).translate(0, -.5, 0), std('#333'), 0, 0, 0, trolley, false);
    load = add(box(3.2, 1, 1.6), std('#ae7f5e'), 0, -14, 0, trolley);
    grow(crane, .9, .965, 'gone');
  }

  // ---------- 底座与社区 ----------
  function buildGround() {
    const S = 2048 / (WORLD * 2), X = x => (x + WORLD) * S, Z = z => (z + WORLD) * S;
    const poly = (g, pts, fill) => { g.fillStyle = fill; g.beginPath(); const n = pts.length; for (let i = 0; i < n; i++) { const a = pts[i], b = pts[(i + 1) % n], mx = (a[0] + b[0]) / 2, mz = (a[1] + b[1]) / 2; if (!i) g.moveTo(X((pts[n - 1][0] + a[0]) / 2), Z((pts[n - 1][1] + a[1]) / 2)); g.quadraticCurveTo(X(a[0]), Z(a[1]), X(mx), Z(mz)); } g.closePath(); g.fill(); };
    const rect = (g, x0, z0, x1, z1, f) => { g.fillStyle = f; g.fillRect(X(x0), Z(z0), (x1 - x0) * S, (z1 - z0) * S); };
    const WATER = '#5f94a8';
    const LAKES = [[[50, -60], [70, -84], [130, -72], [192, -78], [240, -66], [240, -18], [186, -8], [158, 26], [122, 64], [82, 60], [56, 34], [50, -14]],
      [[96, -240], [152, -240], [168, -180], [140, -132], [106, -128], [86, -176]], [[-240, 104], [-120, 98], [-30, 124], [12, 168], [-12, 240], [-240, 240]]];
    let ctx;
    const map = tex(2048, 2048, (g, w, h) => {
      ctx = g;
      g.fillStyle = '#7d9a5c'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(${rnd() > .5 ? '60,90,44' : '168,184,110'},.09)`; g.beginPath(); g.arc(rnd() * w, rnd() * h, 5 + rnd() * 34, 0, 7); g.fill(); }
      poly(g, [[-235, -240], [70, -240], [70, -150], [-30, -128], [-235, -140]], '#a99d78');    // 后方空地
      rect(g, -168, -132, -30, 58, '#c8b593');                                                    // 邻近建筑的铺地
      poly(g, [[-96, -66], [-66, -60], [-82, -24], [-108, -6], [-146, -14], [-152, -46], [-122, -50]], WATER);   // 自由形水池
      g.strokeStyle = '#efe7d6'; g.lineWidth = 3; g.fillStyle = '#6fb6c8'; g.fillRect(X(-74), Z(-30), 32 * S, 50 * S); g.strokeRect(X(-74), Z(-30), 32 * S, 50 * S);
      rect(g, -212, -46, -176, -8, '#a9574a'); rect(g, -208, -42, -180, -12, '#5f9c70');            // 球场
      // 湖
      for (const pts of LAKES) poly(g, pts, WATER);
      // 大路
      g.lineCap = 'round'; g.strokeStyle = '#8c8e91'; g.lineWidth = 17 * S;
      g.beginPath(); g.moveTo(X(-250), Z(72)); g.bezierCurveTo(X(-90), Z(70), X(10), Z(74), X(70), Z(104)); g.bezierCurveTo(X(110), Z(130), X(120), Z(190), X(126), Z(250)); g.stroke();
      g.strokeStyle = '#e8e6df'; g.lineWidth = .5 * S; g.setLineDash([5 * S, 6 * S]);
      g.beginPath(); g.moveTo(X(-250), Z(72)); g.bezierCurveTo(X(-90), Z(70), X(10), Z(74), X(70), Z(104)); g.bezierCurveTo(X(110), Z(130), X(120), Z(190), X(126), Z(250)); g.stroke(); g.setLineDash([]);
      // 前停车场、右侧车道
      rect(g, -32, 42, 46, 68, '#9a9b9d'); rect(g, 28, -52, 47, 68, '#9a9b9d'); rect(g, -24, -56, 47, -42, '#9a9b9d');
      g.strokeStyle = '#efefe8'; g.lineWidth = .35 * S;
      for (let z = -44; z < 42; z += 3) { g.beginPath(); g.moveTo(X(41), Z(z)); g.lineTo(X(47), Z(z)); g.stroke(); }
      for (let x = -28; x < 26; x += 3) { g.beginPath(); g.moveTo(X(x), Z(62)); g.lineTo(X(x), Z(68)); g.stroke(); }
      poly(g, [[-22, 48], [6, 48], [8, 58], [-22, 60]], '#6f9150');
      // 桥与环岛广场
      g.strokeStyle = '#a7a6a2'; g.lineWidth = 9 * S; g.beginPath(); g.moveTo(X(46), Z(-104)); g.lineTo(X(118), Z(-104)); g.stroke();
      g.fillStyle = '#a4654f'; g.beginPath(); g.arc(X(152), Z(-104), 36 * S, 0, 7); g.fill();
      g.strokeStyle = 'rgba(240,226,200,.5)'; g.lineWidth = .8 * S; for (let a = 0; a < 6.28; a += .26) { g.beginPath(); g.moveTo(X(152 + 14 * Math.cos(a)), Z(-104 + 14 * Math.sin(a))); g.lineTo(X(152 + 35 * Math.cos(a)), Z(-104 + 35 * Math.sin(a))); g.stroke(); }
      g.fillStyle = '#7d9a5c'; g.beginPath(); g.arc(X(152), Z(-104), 13 * S, 0, 7); g.fill();
      // 住宅区街道
      for (const [x0, z0, x1, z1] of [[176, -236, 184, -128], [190, 14, 240, 22], [152, 62, 240, 70], [150, 118, 240, 126], [150, 174, 240, 182]]) rect(g, x0, z0, x1, z1, '#a8a49c');
    });
    const pixels = ctx.getImageData(0, 0, 2048, 2048).data;
    const isWater = (x, z) => { const i = (Math.round(Z(z)) * 2048 + Math.round(X(x))) * 4; return pixels[i + 2] > pixels[i + 1] + 2 && pixels[i + 2] > pixels[i]; };
    groundCtx = ctx; map.wrapS = map.wrapT = THREE.ClampToEdgeWrapping;
    worldMat = std('#fff', { map, roughness: .92 });
    world = add(new THREE.CircleGeometry(WORLD, 128).rotateX(-Math.PI / 2), worldMat, 0, -.04, 0, scene, false); world.castShadow = false;
    sideWall = add(new THREE.CylinderGeometry(WORLD, WORLD * .985, 3.2, 128, 1, true).translate(0, -1.65, 0), std('#a19a8d', { side: THREE.DoubleSide }), 0, 0, 0, scene, false);
    ring = add(new THREE.TorusGeometry(WORLD, .35 * 1, 8, 160).rotateX(Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#e8c27a', transparent: true, opacity: .7 }), 0, -.1, 0, scene, false); ring.castShadow = false;

    // 湖面：单独一层，映出黄昏天，微微起波
    const mask = tex(1024, 1024, (g, w, h) => {
      const k = .5; g.fillStyle = '#000'; g.fillRect(0, 0, w, h); g.save(); g.scale(k, k); g.filter = 'blur(5px)';
      for (const pts of LAKES) poly(g, pts, '#fff');
      g.restore();
    });
    waterN = tex(128, 128, (g, w, h) => {
      const hgt = new Float32Array(w * h), f = [];
      for (let i = 0; i < 46; i++) { const a = Math.round(Rr(-22, 22)), b = Math.round(Rr(-22, 22)), l = Math.hypot(a, b) || 1; f.push([a, b, 1 / l, rnd() * 6.28]); }
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { let v = 0; for (const [a, b, m, ph] of f) v += m * Math.sin((a * x + b * y) / w * 6.2832 + ph); hgt[y * w + x] = v; }
      const im = g.createImageData(w, h);
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { const dx = hgt[y * w + (x + 1) % w] - hgt[y * w + (x + w - 1) % w], dy = hgt[((y + 1) % h) * w + x] - hgt[((y + h - 1) % h) * w + x], i = (y * w + x) * 4; im.data[i] = 128 + dx * 150; im.data[i + 1] = 128 + dy * 150; im.data[i + 2] = 255; im.data[i + 3] = 255; }
      g.putImageData(im, 0, 0);
    }, [7, 7]);
    waterN.colorSpace = THREE.NoColorSpace;
    mask.colorSpace = THREE.NoColorSpace; mask.wrapS = mask.wrapT = THREE.ClampToEdgeWrapping;
    waterMesh = add(new THREE.CircleGeometry(WORLD, 128).rotateX(-Math.PI / 2), std('#6f9ab8', { alphaMap: mask, transparent: true, opacity: .3, roughness: .14, metalness: .25, normalMap: waterN, normalScale: new THREE.Vector2(.22, .22), depthWrite: false }), 0, .02, 0, scene, false); waterMesh.castShadow = false; waterMesh.visible = false;

    // 石材铺面 + 绿草边：模型模式才显示
    const pave = tex(2048, 2048, (g, w, h) => {
      const rr = w / 2, k = w / (DISC * 2);
      g.fillStyle = '#5f8040'; g.beginPath(); g.arc(rr, rr, rr, 0, 7); g.fill();
      for (let i = 0; i < 2400; i++) { const a = rnd() * 6.283, r = rr * (.955 + rnd() * .045); g.fillStyle = rnd() > .5 ? '#7a9a50' : '#4e6d38'; g.fillRect(rr + r * Math.cos(a), rr + r * Math.sin(a), 3, 3); }
      g.save(); g.beginPath(); g.arc(rr, rr, rr * .955, 0, 7); g.clip();
      g.fillStyle = '#b4aea2'; g.fillRect(0, 0, w, h);
      for (let y = 0; y < h; y += 3 * k) for (let x = 0; x < w; x += 3 * k) { const v = 164 + rnd() * 26; g.fillStyle = `rgb(${v},${v - 5},${v - 14})`; g.fillRect(x + 1, y + 1, 3 * k - 2, 3 * k - 2); }
      g.restore();
    });
    plinth = add(new THREE.CircleGeometry(DISC, 96).rotateX(-Math.PI / 2), std('#fff', { map: pave, transparent: true, roughness: .55, polygonOffset: true, polygonOffsetFactor: -1 }), 0, .02, 0, scene, false); plinth.castShadow = false;
    const mudT = tex(1024, 1024, (g, w, h) => {
      const rr = w / 2; g.clearRect(0, 0, w, h); g.fillStyle = '#b89a72'; g.beginPath(); g.arc(rr, rr, rr * .955, 0, 7); g.fill();
      for (let i = 0; i < 1800; i++) { g.fillStyle = `rgba(${rnd() > .5 ? '90,70,48' : '216,194,160'},.14)`; g.beginPath(); g.arc(rnd() * w, rnd() * h, 3 + rnd() * 26, 0, 7); g.fill(); }
      g.globalCompositeOperation = 'destination-in'; g.beginPath(); g.arc(rr, rr, rr * .955, 0, 7); g.fill();
    });
    mud = add(new THREE.CircleGeometry(DISC, 96).rotateX(-Math.PI / 2), std('#fff', { map: mudT, transparent: true, roughness: 1, polygonOffset: true, polygonOffsetFactor: -2 }), 0, .04, 0, scene, false); mud.castShadow = false;

    // 周边：依官方鸟瞰图的度假村、排屋、树、湖、桥、车和路灯，由内向外长出
    const LOW = cv.clientWidth < 760 || matchMedia('(pointer:coarse)').matches;
    const OC = 2, ON = Math.ceil(WORLD * 2 / OC), occ = new Uint8Array(ON * ON);
    const mark = (x, z, w, d, pad) => { pad = pad == null ? 2 : pad; for (let a = x - w / 2 - pad; a <= x + w / 2 + pad; a += OC) for (let b = z - d / 2 - pad; b <= z + d / 2 + pad; b += OC) { const i = Math.floor((a + WORLD) / OC), j = Math.floor((b + WORLD) / OC); if (i >= 0 && j >= 0 && i < ON && j < ON) occ[j * ON + i] = 1; } };
    const taken = (x, z) => { const i = Math.floor((x + WORLD) / OC), j = Math.floor((z + WORLD) / OC); return i < 0 || j < 0 || i >= ON || j >= ON || occ[j * ON + i]; };
    const px = (x, z) => (Math.round(Math.min(2047, Math.max(0, Z(z)))) * 2048 + Math.round(Math.min(2047, Math.max(0, X(x))))) * 4;
    const isGrass = (x, z) => { const i = px(x, z), a = (x + 82) / 150, b = (z + 210) / 50; return a * a + b * b < 1 || (pixels[i + 1] > pixels[i] + 5 && pixels[i + 1] >= pixels[i + 2]); };
    const inside = (x, z, m) => Math.hypot(x, z) < WORLD - (m || 5);
    mark(0, -10, 56, 92, 4);                                                             // 静思堂本体

    // 度假村：多重四坡屋顶、桃橙瓦、橙色檐线、白墙
    const wallT = wall(12, 12, (g, e, w, h, s) => {
      for (let r = 0; r < 4; r++) for (let q = 0; q < 4; q++) {
        const x = q * 3 + .6, y = r * 3 + .7; g.fillStyle = '#4a5560'; g.fillRect(x * s, y * s, 1.8 * s, 1.7 * s); g.strokeStyle = '#fbf6ea'; g.lineWidth = s * .14; g.strokeRect(x * s, y * s, 1.8 * s, 1.7 * s);
        if (rnd() > .42) { e.fillStyle = rnd() > .5 ? '#ffd28e' : '#f6b768'; e.fillRect(x * s, y * s, 1.8 * s, 1.7 * s); }
      }
      g.fillStyle = 'rgba(120,100,80,.2)'; for (let r = 1; r <= 4; r++) g.fillRect(0, r * 3 * s - s * .12, w, s * .16);
    }, (g, w, h) => { g.fillStyle = '#f3ecdf'; g.fillRect(0, 0, w, h); for (let i = 0; i < 300; i++) { g.fillStyle = `rgba(${rnd() > .5 ? '255,255,255' : '150,130,110'},.05)`; g.fillRect(rnd() * w, rnd() * h, 30 + rnd() * 60, 8 + rnd() * 20); } });
    wallT.map.wrapS = wallT.map.wrapT = wallT.emissiveMap.wrapS = wallT.emissiveMap.wrapT = THREE.RepeatWrapping;
    const nightMat = o => { const m = new THREE.MeshStandardMaterial(Object.assign({ color: '#fff', emissive: '#fff', emissiveIntensity: 0, roughness: .85 }, o)); nightMats.push(m); return m; };
    const resortWall = nightMat(wallT);
    const tileT = tex(256, 256, (g, w, h) => {
      g.fillStyle = '#fff'; g.fillRect(0, 0, w, h);
      for (let y = 0, r = 0; y < h; y += 16, r++) for (let x = (r % 2) * -16; x < w; x += 32) { const v = 214 + rnd() * 41; g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(x, y, 31, 15); }
      g.fillStyle = 'rgba(40,20,10,.34)'; for (let y = 0; y < h; y += 16) g.fillRect(0, y + 13, w, 3);
    }, [1, 1]);
    const resortRoof = std('#e08f62', { map: tileT, roughness: .62 }), fascia = std('#c8602f', { roughness: .6 }), stoneMat = std('#e6dfd0', { roughness: .8 });
    const big = [[-48, -96, 34, 22], [-96, -112, 40, 22], [-136, -98, 24, 20], [-52, -62, 12, 12], [-110, 22, 62, 26], [-54, 34, 28, 22], [-92, 54, 30, 16], [-150, 36, 30, 22],
      [-48, -118, 20, 14], [-152, -118, 22, 14], [-160, -80, 16, 18], [-120, -130, 24, 12]];
    const resort = [];
    for (const [x, z, w, d] of big) {
      mark(x, z, w, d, 3);
      const wg = [], rg = [], fg = [], H0 = w * d > 500 ? 9.6 : 6.6;
      const vol = (cx, cz, vw, vd, vh, base, rh, eave) => {
        wg.push(box(vw, vh, vd).translate(cx, base, cz));
        rg.push(hipGeo(vw + eave * 2, vd + eave * 2, rh).translate(cx, base + vh, cz));
        fg.push(new THREE.BoxGeometry(vw + eave * 2 + .2, .42, vd + eave * 2 + .2).translate(cx, base + vh - .05, cz));
      };
      vol(0, 0, w, d, H0, 0, Math.min(w, d) * .2, 1.5);
      if (w * d > 150) vol(0, 0, w * .56, d * .56, 3, H0 + Math.min(w, d) * .06, Math.min(w, d) * .17, 1);
      if (w > 26) for (const sx of [-1, 1]) vol(sx * w * .33, (rnd() > .5 ? 1 : -1) * (d / 2 + 2.6), w * .22, 7, H0 - 2.6, 0, 2.4, 1.1);
      if (d > 19 && w < 30) vol((rnd() > .5 ? 1 : -1) * (w / 2 + 2.4), 0, 6, d * .4, H0 - 2.6, 0, 2.2, 1.1);
      const G = new THREE.Group(); G.position.set(x, 0, z);
      for (const [geos, mat] of [[wg, resortWall], [rg, resortRoof], [fg, fascia]]) { const m = new THREE.Mesh(merge(geos), mat); m.castShadow = m.receiveShadow = true; G.add(m); }
      G.scale.setScalar(.0001); G.visible = false; scene.add(G); resort.push({ G, d0: Math.hypot(x, z) });
    }
    resortGroups = resort;

    // 排屋：单元模型，窗门、门廊，颜色逐户变化
    const homeT = wall(9.2, 7, (g, e, w, h, s) => {
      for (const [x, y, ww, hh] of [[1, 1, 2.2, 1.8], [3.6, 1, 2.2, 1.8], [6.2, 1, 2.2, 1.8], [1, 4.3, 2.2, 1.8], [6.2, 4.3, 2.2, 1.8]]) {
        g.fillStyle = '#46515c'; g.fillRect(x * s, y * s, ww * s, hh * s); g.strokeStyle = '#ffffff'; g.lineWidth = s * .12; g.strokeRect(x * s, y * s, ww * s, hh * s);
        e.fillStyle = rnd() > .3 ? '#ffd089' : '#000'; e.fillRect(x * s, y * s, ww * s, hh * s);
      }
      g.fillStyle = '#7b5a42'; g.fillRect(3.8 * s, 4 * s, 1.5 * s, 3 * s);
    }, (g, w, h) => { g.fillStyle = '#fff'; g.fillRect(0, 0, w, h); g.fillStyle = 'rgba(120,110,100,.22)'; g.fillRect(0, 3.45 * 28, w, 6); });
    const homeBox = new THREE.BoxGeometry(9.2, 6.6, 11.4); homeBox.translate(0, 3.3, 0);
    const homeWallG = merge([homeBox, new THREE.BoxGeometry(3.6, 2.8, 2).translate(-1.6, 1.4, 6.4)]);
    const homeRoofG = merge([hipGeo(9.6, 12.6, 2.9).translate(0, 6.6, 0), hipGeo(4.2, 2.8, 1).translate(-1.6, 2.8, 6.4)]);
    const homes = [];
    for (let i = 0; i < 12; i++) for (const [x, ry] of [[198, -Math.PI / 2], [216, Math.PI / 2]]) homes.push({ x, z: -232 + i * 9.4, ry });
    for (const [zr, ry] of [[34, Math.PI], [50, 0], [88, Math.PI], [104, 0], [142, Math.PI], [158, 0], [196, Math.PI], [212, 0]]) for (let i = 0; i < 9; i++) homes.push({ x: 156 + i * 9.4, z: zr, ry });
    const hList = homes.filter(q => inside(q.x, q.z, 8)).map(q => { mark(q.x, q.z, 10, 12, 1); return Object.assign(q, { sx: 1, sy: 1, sz: 1, d0: Math.hypot(q.x, q.z) }); });
    const homeWall = nightMat(homeT), homeRoof = std('#fff', { map: tileT, roughness: .62 });
    const hp = addInst([[homeWallG, homeWall], [homeRoofG, homeRoof]], hList, 16);
    const color = new THREE.Color();
    const WALLS = ['#f4eee2', '#efe3d0', '#f3e4cc', '#e9e4da', '#f0dcc4'], ROOFS = ['#d9835a', '#cf7449', '#dd9266', '#c96a44', '#b9633f'];
    hList.forEach((q, i) => { hp[0].setColorAt(i, color.set(WALLS[Math.floor(rnd() * 5)])); hp[1].setColorAt(i, color.set(ROOFS[Math.floor(rnd() * 5)])); });

    // 大路中心线
    const bez = (p0, p1, p2, p3, t) => { const u = 1 - t; return [0, 1].map(k => u * u * u * p0[k] + 3 * u * u * t * p1[k] + 3 * u * t * t * p2[k] + t * t * t * p3[k]); };
    const road = t => t < .5 ? bez([-250, 72], [-90, 70], [10, 74], [70, 104], t * 2) : bez([70, 104], [110, 130], [120, 190], [126, 250], t * 2 - 1);
    const roadAt = t => { const a = road(Math.max(0, t - .002)), b = road(Math.min(1, t + .002)), p = road(t), l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1; return { p, tx: (b[0] - a[0]) / l, tz: (b[1] - a[1]) / l }; };

    // 树：三种树冠，平滑法线加树冠明暗
    const mk = (lobes, th) => treeGeo(lobes, th);
    const G3 = [
      mk([[0, .62, 0, .44, .66], [.36, .56, .1, .3, .62], [-.34, .58, -.12, .32, .62], [.08, .56, .36, .3, .6], [-.1, .57, -.36, .3, .6], [.04, .78, 0, .3, .55]], .5),
      mk([[0, .58, 0, .38, .95], [.2, .46, .14, .24, .9], [-.2, .5, -.1, .25, .9], [0, .8, .05, .22, .8]], .36),
      mk([[0, .42, 0, .22, 1.3], [0, .68, 0, .17, 1.3], [0, .88, 0, .1, 1.2]], .24)];
    const leafT = tex(128, 128, (g, w, h) => {
      g.fillStyle = '#9a9a9a'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 1500; i++) { const v = rnd() > .5 ? 255 : 30; g.fillStyle = `rgba(${v},${v},${v},${.14 + rnd() * .3})`; g.beginPath(); g.ellipse(rnd() * w, rnd() * h, 1 + rnd() * 2.6, .7 + rnd() * 1.5, rnd() * 3, 0, 6.3); g.fill(); }
    }, [3, 3]);
    const leafMat = () => std('#fff', { vertexColors: true, map: leafT, roughness: .95 });
    const tp = [];
    const pushT = (x, z, s) => { if (inside(x, z, 6) && !taken(x, z)) { tp.push([x, z, s]); mark(x, z, 2, 2, 0); } };
    const step = LOW ? 13 : 8.5;
    for (let t = 0; t <= 1; t += .0035) { const q = roadAt(t); for (const o of [-13.5, 13.5]) { const x = q.p[0] - q.tz * o, z = q.p[1] + q.tx * o; if (isGrass(x, z) && !isWater(x, z) && !taken(x, z)) pushT(x + Rr(-1, 1), z + Rr(-1, 1), Rr(9, 12.5)); } t += (step - 2.1) / 600; }
    for (let z = -46; z < 60; z += LOW ? 12 : 7.4) pushT(51 + Rr(-.6, .6), z, Rr(7, 9.5));
    for (let x = -160; x < 26; x += LOW ? 15 : 9) if (isGrass(x, 88)) pushT(x + Rr(-2, 2), 88 + Rr(-2, 3), Rr(8, 11));
    const shore = LOW ? 120 : 300;
    for (let i = 0, n = 0; i < 9000 && n < shore; i++) {
      const a = rnd() * 6.283, r = Math.sqrt(rnd()) * (WORLD - 6), x = r * Math.cos(a), z = r * Math.sin(a);
      if (isWater(x, z) || !isGrass(x, z) || r < 60) continue;
      if (![[6, 0], [-6, 0], [0, 6], [0, -6]].some(o => isWater(x + o[0], z + o[1]))) continue;
      pushT(x, z, Rr(6, 11)); n++;
    }
    const fillN = LOW ? 220 : 620;
    for (let i = 0, n = 0; i < 16000 && n < fillN; i++) {
      const a = rnd() * 6.283, r = Math.sqrt(rnd()) * (WORLD - 6), x = r * Math.cos(a), z = r * Math.sin(a);
      if (r < 62 || isWater(x, z) || !isGrass(x, z)) continue;
      if (Math.sin(x * .021 + 1.3) * Math.cos(z * .026 - .4) + rnd() * .9 < .55) continue;    // 成团，不均匀撒
      pushT(x, z, Rr(7, 13.5)); n++;
    }
    for (const a of [0, 2.1, 4.2]) pushT(152 + 6 * Math.cos(a), -104 + 6 * Math.sin(a), Rr(6, 8));
    for (let v = 0; v < 3; v++) {
      const list = tp.filter((_, i) => i % 7 < [3, 6, 7][v] && i % 7 >= [0, 3, 6][v]).map(p => ({ x: p[0], z: p[1], ry: rnd() * 6.283, sx: p[2] * (v === 2 ? .9 : 1.12), sy: p[2] * (v === 0 ? .88 : 1.1), sz: p[2] * (v === 2 ? .9 : 1.12), d0: Math.hypot(p[0], p[1]) }));
      const m = addInst([[G3[v], leafMat()]], list, 14)[0];
      list.forEach((q, i) => { color.setHSL(.26 + rnd() * .09, .34 + rnd() * .16, .17 + rnd() * .1); m.setColorAt(i, color); });
    }
    // 灌木：路缘、车场绿岛、度假村花圃
    const shrubG = treeGeo([[0, .5, 0, .62, .62]], 0), sh = [];
    const nS = LOW ? 180 : 460;
    for (let i = 0, n = 0; i < 12000 && n < nS; i++) {
      const a = rnd() * 6.283, r = Math.sqrt(rnd()) * (WORLD - 6), x = r * Math.cos(a), z = r * Math.sin(a);
      if (r < 40 || isWater(x, z) || !isGrass(x, z) || taken(x, z)) continue;
      const s = Rr(1.8, 3.6); sh.push({ x, z, ry: rnd() * 6, sx: s * 1.5, sy: s * .9, sz: s * 1.2, d0: r }); n++;
    }
    for (let x = -24; x < 8; x += 2.6) sh.push({ x, z: 53 + Rr(-1.6, 1.6), ry: rnd() * 6, sx: 2.6, sy: 1.5, sz: 2.2, d0: Math.hypot(x, 53) });
    const sm = addInst([[shrubG, leafMat()]], sh, 12)[0];
    sh.forEach((q, i) => { color.setHSL(.22 + rnd() * .12, .32 + rnd() * .18, .18 + rnd() * .1); sm.setColorAt(i, color); });

    // 车：停车场静止，大路上来回
    const carG = merge([new THREE.BoxGeometry(1.9, .72, 4.4).translate(0, .62, 0), new THREE.BoxGeometry(1.62, .58, 2.2).translate(0, 1.26, -.2)]);
    const CARS = ['#f2f2ee', '#c9ccd0', '#2a2d33', '#8d1f22', '#2f4a6b', '#e8e4dc', '#6d7278'];
    const parked = [];
    for (let z = -44; z < 42; z += 3) if (rnd() > .42) parked.push({ x: 44, z: z + 1.5, ry: Math.PI / 2 + (rnd() > .5 ? Math.PI : 0), sx: 1, sy: 1, sz: 1, d0: Math.hypot(44, z) });
    for (let x = -28; x < 26; x += 3) if (rnd() > .42) parked.push({ x: x + 1.5, z: 65, ry: rnd() > .5 ? Math.PI : 0, sx: 1, sy: 1, sz: 1, d0: Math.hypot(x, 65) });
    for (const q of homes) if (rnd() > .62 && inside(q.x, q.z, 10)) parked.push({ x: q.x + 2.2 * Math.cos(q.ry), z: q.z + 9 * Math.cos(q.ry) * 1 - 2.2 * Math.sin(q.ry) + 9 * Math.sin(q.ry), ry: q.ry, sx: 1, sy: 1, sz: 1, d0: Math.hypot(q.x, q.z) });
    const carM = std('#fff', { roughness: .32, metalness: .35 }), pm = addInst([[carG, carM]], parked, 12)[0];
    parked.forEach((q, i) => pm.setColorAt(i, color.set(CARS[Math.floor(rnd() * 7)])));
    const NC = LOW ? 8 : 16; traffic = { m: new THREE.InstancedMesh(carG, carM, NC), list: [], at: roadAt };
    traffic.m.frustumCulled = false; traffic.m.visible = false; scene.add(traffic.m);
    for (let i = 0; i < NC; i++) { traffic.list.push({ t: rnd(), dir: i % 2 ? 1 : -1, v: Rr(.012, .018) }); traffic.m.setColorAt(i, color.set(CARS[i % 7])); }

    // 拱桥、环岛广场、度假村小物件
    const L = 72, HB = 3.8, arc = t => HB * Math.sin(Math.PI * t), side = (off, th) => { const s = new THREE.Shape(); s.moveTo(0, off - th); for (let i = 0; i <= 28; i++) s.lineTo(L * i / 28, arc(i / 28) + off); for (let i = 28; i >= 0; i--) s.lineTo(L * i / 28, arc(i / 28) + off - th); return s; };
    const bridgeG = merge([new THREE.ExtrudeGeometry(side(.1, 1), { depth: 9, bevelEnabled: false }), new THREE.ExtrudeGeometry(side(1.15, .75), { depth: .34, bevelEnabled: false }), new THREE.ExtrudeGeometry(side(1.15, .75), { depth: .34, bevelEnabled: false }).translate(0, 0, 8.66)]);
    addInst([[bridgeG, stoneMat]], [{ x: 46, z: -108.5, y: .1, sx: 1, sy: 1, sz: 1, d0: 110 }], 18);
    const ringG = merge([new THREE.CylinderGeometry(13.4, 13.8, .7, 48, 1, true).translate(0, .35, 0), new THREE.RingGeometry(12.6, 13.4, 48).rotateX(-Math.PI / 2).translate(0, .7, 0)]);
    addInst([[ringG, stoneMat]], [{ x: 152, z: -104, sx: 1, sy: 1, sz: 1, d0: 186 }], 16);
    const umbG = merge([new THREE.ConeGeometry(2, .9, 10).translate(0, 3, 0), new THREE.CylinderGeometry(.07, .07, 2.8, 5).translate(0, 1.4, 0)]);
    const um = [];
    for (let i = 0, n = 0; i < 400 && n < (LOW ? 12 : 26); i++) { const x = Rr(-160, -38), z = Rr(-70, 18), i2 = px(x, z); if (pixels[i2] > pixels[i2 + 2] + 30 && !isWater(x, z) && !taken(x, z)) { um.push({ x, z, sx: 1, sy: 1, sz: 1, d0: Math.hypot(x, z) }); mark(x, z, 3, 3, 0); n++; } }
    const uM = addInst([[umbG, std('#fff', { roughness: .7 })]], um, 10)[0]; um.forEach((q, i) => uM.setColorAt(i, color.set(i % 3 ? '#f4efe4' : '#d58a5e')));
    addInst([[new THREE.BoxGeometry(.1, 1, 11).translate(0, .5, 0), std('#e8e8e4')]], [{ x: -194, z: -27, sx: 1, sy: 1, sz: 1, d0: 196 }], 10);
    const booth = merge([box(4, 3, 3).translate(0, 0, 0), hipGeo(5.2, 4.2, 1.4).translate(0, 3, 0)]);
    addInst([[booth, stoneMat]], [{ x: -36, z: 62, sx: 1, sy: 1, sz: 1, d0: 72 }], 8);

    // 路灯：黄昏时亮
    const lamps = [];
    for (let t = 0; t <= 1; t += .026) { const q = roadAt(t); for (const o of [-9.6, 9.6]) { const x = q.p[0] - q.tz * o, z = q.p[1] + q.tx * o; if (inside(x, z, 8) && !isWater(x, z)) lamps.push([x, z]); } }
    for (let a = 0; a < 6.28; a += .524) lamps.push([152 + 37.5 * Math.cos(a), -104 + 37.5 * Math.sin(a)]);
    for (let x = 52; x <= 112; x += 15) { lamps.push([x, -109]); lamps.push([x, -99]); }
    for (let z = -40; z < 42; z += 16) lamps.push([48.6, z]);
    for (let x = -28; x < 40; x += 16) lamps.push([x, 41]);
    for (const [x0, z0, x1, z1] of [[-168, -132, -30, -132], [-168, 58, -30, 58], [-168, -132, -168, 58], [-30, -132, -30, 58]]) for (let t = 0; t <= 1; t += .18) lamps.push([lerp(x0, x1, t), lerp(z0, z1, t)]);
    for (const zr of [66, 122, 178]) for (let x = 156; x < 236; x += 20) if (inside(x, zr, 8)) lamps.push([x, zr]);
    const poleG = merge([new THREE.CylinderGeometry(.08, .12, 6.6, 5).translate(0, 3.3, 0), new THREE.BoxGeometry(1.5, .12, .24).translate(.6, 6.6, 0)]);
    addInst([[poleG, std('#51555c', { roughness: .5, metalness: .4 })]], lamps.map(p => ({ x: p[0], z: p[1], sx: 1, sy: 1, sz: 1, d0: Math.hypot(p[0], p[1]) })), 10);
    const glowT = tex(64, 64, (g, w, h) => { const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,244,214,1)'); gr.addColorStop(.18, 'rgba(255,214,150,.75)'); gr.addColorStop(1, 'rgba(255,190,110,0)'); g.fillStyle = gr; g.fillRect(0, 0, w, h); });
    const gp = new Float32Array(lamps.length * 3); lamps.forEach((p, i) => { gp[i * 3] = p[0] + 1.2; gp[i * 3 + 1] = 6.5; gp[i * 3 + 2] = p[1]; });
    const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.BufferAttribute(gp, 3));
    lampGlow = new THREE.Points(gg, new THREE.PointsMaterial({ map: glowT, size: 13, sizeAttenuation: true, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    lampGlow.frustumCulled = false; lampGlow.visible = false; scene.add(lampGlow);
    labels.push({ zh: '湖', en: 'Lake', p: [118, 2, -20] }, { zh: '住宅区', en: 'Homes', p: [172, 8, 118] }, { zh: '大路', en: 'Main road', p: [-120, 2, 72] }, { zh: '环岛广场', en: 'Roundabout plaza', p: [152, 2, -104] });
  }

  function applyCommunity() {
    const Rn = lerp(DISC, WORLD, ease(c)), k = Rn / WORLD;
    world.scale.set(k, 1, k); sideWall.scale.set(k, 1, k); ring.scale.set(k, 1, k);
    worldMat.map.repeat.set(k, k); worldMat.map.offset.set((1 - k) / 2, (1 - k) / 2);
    plinth.material.opacity = 1 - ease(c * 1.6); plinth.visible = plinth.material.opacity > .01;
    mud.visible = plinth.visible || P < .9;
    const e = ease(c), dm = new THREE.Object3D(), RG = lerp(DISC - 18, WORLD + 12, e), on = c > .004;
    for (const g of inst) {
      g.ms.forEach(m => { m.visible = on; });
      if (on) {
        g.list.forEach((q, i) => {
          const u = Math.max(easeOut((RG - q.d0) / g.span), .0001);
          dm.position.set(q.x, q.y || 0, q.z); dm.rotation.set(0, q.ry || 0, 0); dm.scale.set(q.sx * u, q.sy * u, q.sz * u); dm.updateMatrix();
          for (const m of g.ms) m.setMatrixAt(i, dm.matrix);
        });
        for (const m of g.ms) m.instanceMatrix.needsUpdate = true;
      }
    }
    for (const r of resortGroups) { const u = easeOut((RG - r.d0) / 16); r.G.visible = u > .001; r.G.scale.setScalar(Math.max(u, .0001)); }
    if (traffic) traffic.m.visible = c > .8;
    if (waterMesh) { waterMesh.visible = on; waterMesh.scale.set(k, 1, k); const am = waterMesh.material.alphaMap; am.repeat.set(k, k); am.offset.set((1 - k) / 2, (1 - k) / 2); }
    // 社区一律走全站的黄昏：低日头、长影子、窗和路灯亮起
    if (hemi) {
      const n = ease((c - .45) / .55);
      sun.color.lerpColors(SUN0, SUN1, e); sun.intensity = lerp(2.5, 2.05, e); sun.position.lerpVectors(SP0, SP1, e);
      const sc = sun.shadow.camera, r = lerp(78, WORLD + 10, e); sc.left = sc.bottom = -r; sc.right = sc.top = r; sc.far = lerp(340, 900, e); sc.updateProjectionMatrix();
      sun.shadow.normalBias = lerp(.05, .32, e); sun.shadow.bias = lerp(-.0005, -.0009, e);
      hemi.color.lerpColors(HEMI0, HEMI1, e); hemi.intensity = lerp(.55, .62, e);
      worldMat.color.lerpColors(WHITE, DUSK, e); renderer.toneMappingExposure = lerp(1.02, .94, e);
      for (const m of nightMats) m.emissiveIntensity = n * 1.25;
      if (lampGlow) { lampGlow.visible = n > .01; lampGlow.material.opacity = n * .95; }
    }
  }

  // ---------- 进度 ----------
  function apply() {
    for (const a of anims) {
      const o = a.obj, u = clamp01((P - a.t0) / Math.max(a.t1 - a.t0, 1e-4)), s = o.userData.s0, y0 = o.userData.y0;
      if (a.mode === 'gone') { const v = 1 - ease(u); o.visible = v > .01; o.scale.set(s.x, Math.max(v, .001), s.z); continue; }
      o.visible = u > 0;
      if (a.mode === 'y' || a.mode === 'y2') { o.scale.set(s.x, s.y * Math.max(ease(u), .001), s.z); if (a.mode === 'y2') o.position.y = y0 - (1 - ease(u)) * .5; }
      else if (a.mode === 'pop') o.scale.copy(s).multiplyScalar(Math.max(easeOut(u), .001));
      else if (a.mode === 'drop') { o.position.y = y0 + (1 - easeOut(u)) * 7; }
    }
    const t0 = .18, t1 = .52, CO = 18, done = Math.max(0, Math.min(CO, Math.floor((P - t0) / (t1 - t0) * CO)));
    cutPlane.constant = done * 1 + .001;
    const m = brickDummy;
    for (let i = 0; i < brickList.length; i++) {
      const b = brickList[i], u = (P - b.t) / .012;
      if (b.c < done || u <= 0) { m.scale.setScalar(.0001); m.position.set(0, -50, 0); }
      else { m.scale.setScalar(1); m.position.set(b.x, b.y + .5 + (1 - easeOut(u)) * 2.2, b.z); m.rotation.set(0, -b.ry, 0); }
      m.updateMatrix(); bricks.setMatrixAt(i, m.matrix);
    }
    bricks.instanceMatrix.needsUpdate = true; bricks.visible = P > t0 && P < t1 + .02;
    gableCut.constant = P < .5 ? -1 : 17.7 + ease((P - .5) / .08) * 11;   // 没到山墙阶段就整面切掉，不留细缝
    const top = P < .8 ? Math.min(20, Math.max(0, (done + 2))) * (P > .1 ? 1 : 0) : 20 * (1 - ease((P - .8) / .06));
    scafCut.constant = top;
    const g = ease((P - .74) / .14) * .62; for (const q of glowMats) q.emissiveIntensity = g;
    mud.material.opacity = 1 - ease((P - .7) / .25);
    if (renderer) renderer.shadowMap.needsUpdate = true;
    let st = STAGES.findIndex(s => P < s[0]); if (st !== lastStage) { lastStage = st; if (onStage) onStage(STAGES[st][1], STAGES[st][2]); }
    if (onP) onP(P);
  }

  // ---------- 相机与循环 ----------
  function resize() {
    const W = cv.clientWidth, H = cv.clientHeight; renderer.setSize(W, H, false); camera.aspect = W / H; camera.updateProjectionMatrix();
  }
  // 模型一律落在文字下沿与操作条上沿之间：按实测版面和真实外形算，不靠比例估
  function fitHall(W, H, narrow, tan) {
    const now = performance.now();
    if (safeFn && (!safe || now - safeAt > 400)) { safe = safeFn(); safeAt = now; }
    const top = (safe ? safe.top : H * .34) + 10, bot = (safe ? safe.bottom : H * .78) - 10, A = Math.max(90, bot - top);
    const hh = Math.min(H * (narrow ? .40 : .46), W * .9 / 1.5);
    const side = safe && safe.left != null, x0 = side ? safe.left : 0, x1 = side ? safe.right : W;
    let s = (side ? x1 - x0 : Math.min(W * .96, hh * 1.62)) / (DISC * 2), d = 1, up = 0, dn = 0;
    const ce = Math.cos(el), se = Math.sin(el);
    for (let it = 0; it < 4; it++) {
      d = H / (2 * tan * s); up = -1e9; dn = 1e9;
      for (const [r, y] of prof) for (const g of [1, -1]) { const yy = y - 10, o = (yy * ce + g * r * se) * d / (d + g * r * ce - yy * se) * s; if (o > up) up = o; if (o < dn) dn = o; }
      const k = A / (up - dn); if (k >= 1) break; s *= k;
    }
    return { d, x: (x0 + x1 - W) / 2, y: (top + bot) / 2 + (up + dn) / 2 };
  }
  function placeCam() {
    const W = cv.clientWidth, H = cv.clientHeight, narrow = W < 760, e = ease(c), tan = Math.tan(FOV / 2 * Math.PI / 180);
    const hall = fitHall(W, H, narrow, tan), dHall = hall.d;
    const wCom = Math.min(W * .96, H * 1.45);
    const dCom = (WORLD * 2) * H / (2 * tan * wCom);
    const d = lerp(dHall, dCom, e), ty = lerp(10, 0, e);
    camera.position.set(Math.sin(az) * Math.cos(el) * d, ty + Math.sin(el) * d, Math.cos(az) * Math.cos(el) * d);
    camera.lookAt(0, ty, 0);
    const yHall = hall.y, yCom = H * .5, xCom = 0;
    camera.setViewOffset(W, H, -lerp(hall.x, xCom, e), -(lerp(yHall, yCom, e) - H / 2), W, H);
  }
  function drawLabels() {
    if (!labelsEl) return;
    const show = c > .72; labelsEl.style.opacity = show ? 1 : 0; if (!show) return;
    const v = new THREE.Vector3(), r = cv.getBoundingClientRect();
    labels.forEach(l => {
      v.set(l.p[0], l.p[1], l.p[2]).project(camera);
      l.el.style.transform = `translate(${((v.x + 1) / 2 * r.width).toFixed(1)}px,${((1 - v.y) / 2 * r.height).toFixed(1)}px) translate(-50%,-50%)`;
      const q = new THREE.Vector3(l.p[0], 0, l.p[2]); l.el.style.opacity = q.length() < WORLD - 8 ? 1 : 0;
    });
  }
  function loop(now) {
    if (!running) return; raf = requestAnimationFrame(loop);
    const elapsed = (now - last) / 1000 || 0; const dt = Math.min(.05, elapsed); last = now;
    if (playing) { P = Math.min(1, P + elapsed / playDur); if (P >= 1) { playing = false; if (onPlay) onPlay(false); } apply(); }
    if (P > .02 && P < .965 && jib) {
      jib.rotation.y = Math.sin(now / 2600) * .55 + .2;
      trolley.position.x = -28 + Math.sin(now / 1900) * 9;
      const dd = 40 - Math.max(10, Math.min(30, (P - .1) * 40)) - 8 + Math.sin(now / 1400) * 3;
      cable.scale.y = dd; load.position.y = -dd;
    }
    if (c > .3) { waterN.offset.x = now * 5e-6; waterN.offset.y = now * 3e-6; }
    if (traffic && traffic.m.visible) {
      const dm = trafficDm;
      traffic.list.forEach((q, i) => {
        q.t += q.dir * q.v * dt; if (q.t > 1) q.t -= 1; if (q.t < 0) q.t += 1;
        const a = traffic.at(q.t), o = 3.6 * q.dir, x = a.p[0] - a.tz * o, z = a.p[1] + a.tx * o, ok = Math.hypot(x, z) < WORLD - 3;
        dm.position.set(x, 0, z); dm.rotation.set(0, Math.atan2(a.tx * q.dir, a.tz * q.dir), 0); dm.scale.setScalar(ok ? 1 : .0001); dm.updateMatrix(); traffic.m.setMatrixAt(i, dm.matrix);
      });
      traffic.m.instanceMatrix.needsUpdate = true;
    }
    if (Math.abs(cT - c) > .0005) { c += (cT - c) * (1 - Math.exp(-dt * 2.1)); if (Math.abs(cT - c) < .001) c = cT; applyCommunity(); renderer.shadowMap.needsUpdate = true; }
    if (!drag) {
      if (spin && !reduce && now - lastDrag > 2600) az += dt * (c > .5 ? .05 : .13);
      az += vel * dt; vel *= Math.exp(-dt * 4);
    }
    el += (elT - el) * (1 - Math.exp(-dt * 3));
    placeCam(); renderer.render(scene, camera); drawLabels();
  }
  let onPlay = null; const trafficDm = new THREE.Object3D();
  const SUN0 = new THREE.Color('#ffdcae'), SUN1 = new THREE.Color('#ffb883'), HEMI0 = new THREE.Color('#c8d6e8'), HEMI1 = new THREE.Color('#9fb2d4'), WHITE = new THREE.Color('#fff'), DUSK = new THREE.Color('#ead9c8');
  const SP0 = new THREE.Vector3(-90, 88, 92), SP1 = new THREE.Vector3(-300, 150, 210);

  function init(canvas, opts) {
    cv = canvas; labelsEl = opts.labels || null; onStage = opts.onStage; onP = opts.onP; onPlay = opts.onPlay; safeFn = opts.safe || null;
    try {
      renderer = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true, preserveDrawingBuffer: !!opts.snap });
    } catch (e) { return false; }
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    renderer.setClearColor(0, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.02;
    renderer.localClippingEnabled = true;
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; renderer.shadowMap.autoUpdate = false;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(FOV, cv.clientWidth / cv.clientHeight, 10, 4000);
    // 环境光：暖色黄昏天
    const sky = new THREE.Scene(), skyT = tex(16, 256, (g, w, h) => { const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#93a7c0'); gr.addColorStop(.5, '#f2d8b2'); gr.addColorStop(.55, '#8a7a66'); gr.addColorStop(1, '#4e4438'); g.fillStyle = gr; g.fillRect(0, 0, w, h); });
    sky.add(new THREE.Mesh(new THREE.SphereGeometry(50, 24, 16), new THREE.MeshBasicMaterial({ map: skyT, side: THREE.BackSide })));
    const pm = new THREE.PMREMGenerator(renderer); scene.environment = pm.fromScene(sky, .04).texture; pm.dispose();
    hemi = new THREE.HemisphereLight('#c8d6e8', '#6d5c4a', .55); scene.add(hemi);
    sun = new THREE.DirectionalLight('#ffdcae', 2.5); sun.position.set(-90, 88, 92); sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048); Object.assign(sun.shadow.camera, { left: -78, right: 78, top: 78, bottom: -78, near: 20, far: 340 });
    sun.shadow.bias = -.0005; sun.shadow.normalBias = .05; scene.add(sun);
    const fill = new THREE.DirectionalLight('#b8c8e0', .55); fill.position.set(90, 40, -80); scene.add(fill);

    const load = src => new Promise(res => { if (!src) return res(null); const im = new Image(); im.onload = () => res(im); im.onerror = () => res(null); im.src = src; });
    const assets = Promise.all([load(opts.logo), load(opts.txt)]).then(([lg, tx]) => {
      const out = {};
      if (lg) {
        const k = 4, c2 = document.createElement('canvas'); c2.width = lg.width * k; c2.height = lg.height * k; const g = c2.getContext('2d');
        g.imageSmoothingQuality = 'high'; g.drawImage(lg, 0, 0, c2.width, c2.height); g.globalCompositeOperation = 'source-in'; g.fillStyle = '#f6f1e6'; g.fillRect(0, 0, c2.width, c2.height);
        out.logo = new THREE.CanvasTexture(c2); out.logo.colorSpace = THREE.SRGBColorSpace;
      }
      if (tx) { out.txt = new THREE.Texture(tx); out.txt.needsUpdate = true; out.txt.colorSpace = THREE.SRGBColorSpace; }
      return out;
    });
    buildHall(assets);
    // 模型真实外形（含吊车和鹰架）：半径每 4 米一格取最高点，给相机算安全区
    scene.updateMatrixWorld(true);
    const hb = {}, bb = new THREE.Box3(), vv = new THREE.Vector3();
    scene.traverse(o => { if (!o.isMesh || o.isInstancedMesh) return; bb.setFromObject(o); for (const x of [bb.min.x, bb.max.x]) for (const z of [bb.min.z, bb.max.z]) { const q = Math.ceil(Math.hypot(x, z) / 4) * 4; hb[q] = Math.max(hb[q] || 0, bb.max.y); } });
    prof = Object.entries(hb).map(([r, y]) => [Math.min(+r, DISC), y]).concat([[DISC, -5]]);
    buildGround();
    load(opts.ground).then(im => {
      if (!im) return; const g = groundCtx, w = g.canvas.width, h = g.canvas.height;
      g.drawImage(im, 0, 0, w, h);
      const v = g.createRadialGradient(w / 2, h / 2, w * .4, w / 2, h / 2, w * .5); v.addColorStop(0, 'rgba(14,18,30,0)'); v.addColorStop(1, 'rgba(14,18,30,.72)'); g.fillStyle = v; g.fillRect(0, 0, w, h);
      worldMat.map.needsUpdate = true;
    });
    labels.forEach(l => { const d = document.createElement('span'); opts.label(d, l.zh, l.en); labelsEl && labelsEl.appendChild(d); l.el = d; });
    applyCommunity(); apply(); built = true;

    cv.addEventListener('pointerdown', e => { drag = { x: e.clientX, y: e.clientY }; vel = 0; cv.setPointerCapture(e.pointerId); cv.classList.add('grab'); });
    cv.addEventListener('pointermove', e => {
      if (!drag) return; const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.x = e.clientX; drag.y = e.clientY;
      az -= dx * .0075; vel = -dx * .25; elT = Math.max(.03, Math.min(1.25, elT + dy * .004)); lastDrag = performance.now();
    });
    const up = () => { drag = null; lastDrag = performance.now(); cv.classList.remove('grab'); };
    cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
    addEventListener('resize', () => { if (running) resize(); });
    return true;
  }

  return {
    init,
    get ready() { return built; },
    start() { if (running || !built) return; running = true; resize(); last = performance.now(); raf = requestAnimationFrame(loop); },
    stop() { running = false; cancelAnimationFrame(raf); playing = false; },
    play(from, dur) { if (from != null) P = from; if (dur) playDur = dur; if (P >= 1) P = 0; playing = true; apply(); if (onPlay) onPlay(true); },
    pause() { playing = false; if (onPlay) onPlay(false); },
    get playing() { return playing; },
    setBuild(p) { P = clamp01(p); playing = false; apply(); if (onPlay) onPlay(false); },
    setView(v) { cT = v ? 1 : 0; elT = v ? .68 : .17; },
    setRaw(o) { if ('az' in o) az = o.az; if ('el' in o) el = elT = o.el; if ('c' in o) { c = cT = o.c; applyCommunity(); } if ('spin' in o) spin = o.spin; if (renderer) renderer.shadowMap.needsUpdate = true; },
    get state() { return { P, c, az, el, running, frame: renderer && renderer.info.render.frame, playing, prof, safe, calls: renderer && renderer.info.render.calls, tris: renderer && renderer.info.render.triangles }; }
  };
})();
