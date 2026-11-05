/* 網頁的時空隧道。每條走法不同，照片全是 assets/river 裡的真實舊照。
   TUN.play(key, {q, skip, mid, end})：蓋滿後呼叫 mid 換頁面，end 用在要跳去別的網址時。
   色調用 canvas 混色，不用 ctx.filter（iPhone Safari 不支援）。 */
(function () {
  var RV = window.RIVER || [], doc = document, cache = {}, reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function ramp(x, a, b) { return Math.min(1, Math.max(0, (x - a) / (b - a))); }
  function rnd(i) { var x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  function fr(x) { return x - Math.floor(x); }
  function img(r) {
    if (!cache[r[1]]) { var m = new Image(); m.decoding = 'async'; m.src = 'assets/river/' + r[1] + '.jpg'; cache[r[1]] = m; }
    return cache[r[1]];
  }
  function ph(c, r, x, y, w, h, a, rot, edge) {
    var m = img(r);
    c.save(); c.globalAlpha = a;
    if (rot) { c.translate(x + w / 2, y + h / 2); c.rotate(rot); x = -w / 2; y = -h / 2; }
    if (edge) { c.fillStyle = '#f4efe2'; c.fillRect(x - edge, y - edge, w + edge * 2, h + edge * 2); }
    if (m.complete && m.naturalWidth) c.drawImage(m, x, y, w, h);
    else { c.fillStyle = '#6d5f4a'; c.fillRect(x, y, w, h); }
    c.restore();
  }
  /* 橫流：dir 1 往右（往回走），-1 往左（往前走） */
  function rows(n, dir) {
    return function (c, t, W, H, L) {
      var gap = 8, rh = (H - gap * (n - 1)) / n;
      for (var i = 0; i < n; i++) {
        var pos = 0, k = i, sp = 1 + i % 2 * .22, s = Math.pow(t, 1.25) * Math.max(W * 2.4, 1500) * sp + i * rh * .45, y = i * (rh + gap);
        for (var q = 0; q < 26; q++, k += n) {
          var r = L[k % L.length], w = rh * r[2] / 300, x = dir > 0 ? W - pos - w + s : pos - s;
          if (x < W && x + w > 0) ph(c, r, x, y, w, rh, 1);
          pos += w + gap;
        }
      }
    };
  }
  /* 透視：dir 1 從中心飛散，-1 向中心匯聚 */
  function fly(dir, spd, n) {
    return function (c, t, W, H, L) {
      var cx = W / 2, cy = H / 2, R = Math.hypot(W, H) * .62, it = [];
      for (var i = 0; i < n; i++) {
        var z = fr(rnd(i) + t * spd);
        it.push({ i: i, z: dir > 0 ? z : 1 - z });
      }
      it.sort(function (a, b) { return a.z - b.z; });
      it.forEach(function (o) {
        var a = rnd(o.i + 40) * 6.283, d = Math.pow(o.z, 1.7) * R + 30, r = L[o.i % L.length], h = Math.min(W, H) * (.1 + o.z * .85), w = h * r[2] / 300;
        ph(c, r, cx + Math.cos(a) * d - w / 2, cy + Math.sin(a) * d * .8 - h / 2, w, h, Math.min(1, o.z * 5) * Math.min(1, (1 - o.z) * 7), 0);
      });
    };
  }
  /* 直流：照片一列一列往上升 */
  function cols(c, t, W, H, L) {
    var n = W < 640 ? 2 : 4, gap = 8, cw = (W - gap * (n - 1)) / n;
    for (var i = 0; i < n; i++) {
      var y = H - Math.pow(t, 1.2) * H * (2.5 + i % 2 * .7) - (i % 2) * cw * .4, k = i;
      for (var q = 0; q < 16; q++, k += n) {
        var r = L[k % L.length], h = cw * 300 / r[2];
        if (y < H && y + h > 0) ph(c, r, i * (cw + gap), y, cw, h, 1);
        y += h + gap;
      }
    }
  }
  /* 帳頁：照片像一頁一頁紙落下 */
  function fall(c, t, W, H, L) {
    var n = 15, w0 = Math.max(W * .24, 180);
    for (var i = 0; i < n; i++) {
      var r = L[i % L.length], w = w0 * (.8 + rnd(i) * .5), h = w * 300 / r[2], z = fr(rnd(i + 9) + t * 1.15);
      ph(c, r, rnd(i + 20) * (W - w * .6) - w * .2 + Math.sin(z * 6 + i) * 34, -h - 20 + z * (H + h * 2 + 40), w, h, 1, Math.sin(z * 5 + i) * .24, 5);
    }
  }
  /* 長廊：見 hall.js。沒有 WebGL2 的裝置改走橫流。 */
  var HG, HF = rows(2, 1);
  function hall(c, t, W, H, L) {
    if (HG === undefined) { HG = window.HALL ? HALL() : null; if (HG) HG.load(L, img, 1.3); }
    if (HG) c.drawImage(HG.render(t, Math.round(W * 1.25), Math.round(H * 1.25)), 0, 0, W, H); else HF(c, t, W, H, L);
  }
  var M = {
    back: { d: 4400, y: [2026, 1966], from: 1966, to: 2026, bg: '#120f0c', tint: '#a98a55', a0: .05, a1: .86, f: rows(3, 1), pop: 1, close: '#d9cfb8' },
    road: { d: 2400, y: [1969, 1989], from: 1969, to: 1993, bg: '#1d150c', tint: '#c98f3f', a0: .3, a1: .42, f: rows(2, -1), pop: 1 },
    far: { d: 2500, y: [1991, 2015], from: 1991, to: 2016, bg: '#07181c', tint: '#2c7f8f', a0: .4, a1: .3, f: fly(1, 1.1, 24), max: 24 },
    heart: { d: 2600, from: 2005, to: 2025, bg: '#1c1305', tint: '#d3a23c', a0: .45, a1: .36, f: fly(-1, 1, 24), max: 24, glow: 'rgba(240,196,110,' },
    my: { d: 2400, y: [1993, 2017], only: [1993, 1994, 2017], bg: '#08170f', tint: '#2f8a62', a0: .34, a1: .3, f: cols },
    ledger: { d: 2500, from: 1966, to: 2025, bg: '#efe9da', tint: '#b9a36f', a0: .3, a1: .22, ink: '#2b2822', plate: 'rgba(239,233,218,', f: fall, max: 15 },
    big: { d: 3000, from: 1966, to: 2025, bg: '#0b0907', tint: '#6b5a3c', a0: .5, a1: .7, f: fly(1, .62, 22), max: 22, close: '#0b0907' }
  };
  /* 別的站自己的隧道：ids 指定照片（見 assets/river/med.js），牆上的年份由長廊自己算 */
  if (window.TUN_M) Object.keys(TUN_M).forEach(function (k) { var x = TUN_M[k]; x.f = { hall: hall, rows: rows(x.n || 3, x.dir || 1), fall: fall, cols: cols, fly: fly(x.dir || 1, x.spd || 1, 24) }[x.walk]; M[k] = x; });
  function list(m) {
    if (m.ids) { var X = {}; (window.RIVER_M || []).forEach(function (r) { X[r[1]] = r; }); return m.ids.map(function (i) { return X[i]; }).filter(Boolean); }
    var L = RV.filter(function (r) { return m.only ? m.only.indexOf(r[0]) >= 0 : r[0] >= m.from && r[0] <= m.to; });
    if (L.length < 8) L = L.concat(RV.slice().sort(function (a, b) { return Math.abs(a[0] - L[0][0]) - Math.abs(b[0] - L[0][0]); }).slice(0, 10));
    /* 只畫得下 max 張的走法，平均抽各年代，也少載圖 */
    if (m.max && L.length > m.max) { var S = []; for (var i = 0; i < m.max; i++) S.push(L[Math.floor(i * L.length / m.max)]); L = S; }
    return L;
  }
  var el, cv, cx, qe, ye, sk, raf = 0, live = null;
  function build() {
    el = doc.createElement('div'); el.id = 'tun'; el.hidden = true;
    el.innerHTML = '<canvas></canvas><p class="tq t"></p><span class="ty" aria-hidden="true"></span><button class="tk"></button>';
    doc.body.appendChild(el);
    cv = el.firstChild; cx = cv.getContext('2d', { alpha: false }); qe = el.querySelector('.tq'); ye = el.querySelector('.ty'); sk = el.querySelector('.tk');
    el.addEventListener('click', function () { if (live) live.skip(); });
    addEventListener('keydown', function (e) { if (live && e.key === 'Escape') live.skip(); });
  }
  function size() {
    var d = Math.min(devicePixelRatio || 1, 1.5);
    cv.width = Math.round(innerWidth * d); cv.height = Math.round(innerHeight * d);
    cx.setTransform(d, 0, 0, d, 0, 0);
  }
  function draw(m, L, t) {
    var W = innerWidth, H = innerHeight, c = cx;
    c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1;
    c.fillStyle = m.bg; c.fillRect(0, 0, W, H);
    m.f(c, t, W, H, L);
    if (m.pop) for (var i = 0; i < 3; i++) {
      var p = ramp(t, .16 + i * .23, .4 + i * .23);
      if (p > 0 && p < 1) {
        var r = L[(i * 5 + 3) % L.length], h = Math.min(H * .46, W * .62) * (.84 + p * .22), w = h * r[2] / 300, x = (i % 2 ? .72 : .28) * W - w / 2;
        ph(c, r, Math.max(8, Math.min(W - w - 8, x)), (i === 1 ? .1 : .46) * H, w, h, Math.sin(p * 3.1416), (i - 1) * .035, 6);
      }
    }
    c.globalCompositeOperation = 'color'; c.globalAlpha = m.a0 + (m.a1 - m.a0) * t;
    c.fillStyle = m.tint; c.fillRect(0, 0, W, H);
    c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1;
    if (m.glow) {
      var g = c.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * (.2 + t * .5));
      g.addColorStop(0, m.glow + (.2 + t * .75) + ')'); g.addColorStop(1, m.glow + '0)');
      c.fillStyle = g; c.fillRect(0, 0, W, H);
    }
    /* 問句底下壓一層，照片再亂都讀得到 */
    var pl = m.plate || 'rgba(8,6,4,', v = c.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W * .62, 240));
    v.addColorStop(0, pl + '.8)'); v.addColorStop(.55, pl + '.5)'); v.addColorStop(1, pl + '0)');
    c.fillStyle = v; c.fillRect(0, 0, W, H);
    if (m.close) { c.globalAlpha = ramp(t, .8, .97); c.fillStyle = m.close; c.fillRect(0, 0, W, H); c.globalAlpha = 1; }
    qe.style.opacity = ramp(t, .08, .2) * (1 - ramp(t, .74, .86));
    /* 只有照片和年份對得上的隧道才跑年份 */
    ye.textContent = m.walk === 'hall' && HG ? HG.year(t) : m.y ? Math.round(m.y[0] + (m.y[1] - m.y[0]) * Math.min(1, t * 1.1)) : '';
    ye.style.opacity = (1 - ramp(t, .84, .94)) * .9;
  }
  function play(key, o) {
    var m = M[key] || M.big, L = list(m); o = o || {};
    if (!el) build();
    if (live) return;
    L.forEach(img); size();
    el.style.setProperty('--ink', m.ink || '#f6ecd9'); qe.textContent = o.q || ''; sk.textContent = o.skip || '';
    qe.style.opacity = 0; ye.style.opacity = 0; ye.textContent = '';
    el.hidden = false; el.classList.remove('on');
    draw(m, L, 0);
    void el.offsetWidth; el.classList.add('on');
    var t0 = 0, midDone = false, over = false, d = reduce ? 300 : m.d;
    function mid() { if (!midDone) { midDone = true; if (o.mid) o.mid(); } }
    function fin() {
      if (over) return; over = true; cancelAnimationFrame(raf); mid();
      if (o.end) { live = null; o.end(); return; }
      el.classList.remove('on'); live = null;
      setTimeout(function () { if (!live) el.hidden = true; }, 620);
    }
    live = { skip: fin };
    function step(n) {
      t0 = t0 || n; var t = Math.min(1, (n - t0) / d);
      if (!reduce) draw(m, L, t);
      if (t > .9) mid();
      if (t >= 1) { fin(); return; }
      raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
  }
  window.TUN = { play: play, prep: function (k) { var m = M[k]; if (m) list(m).slice(0, 16).forEach(img); } };
})();
