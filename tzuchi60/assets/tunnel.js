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
  /* 翻書：照片印在書頁上。dir 1 往回翻（書頁由左蓋向右），-1 往前翻。橫屏攤開兩頁，直屏只見右頁。
     紙色由 m.p0 老到 m.p1：頁面畫好存起來，圖還沒到就先畫白紙，不存。 */
  var BC = {}, BK = '', BY = '';
  function hex(s) { return [1, 3, 5].map(function (i) { return parseInt(s.substr(i, 2), 16); }); }
  function paper(a, b, u) { var x = hex(a), y = hex(b); return 'rgb(' + x.map(function (v, i) { return Math.round(v + (y[i] - v) * u); }).join(',') + ')'; }
  function leaf(r, u, side, cw, ch, a, b) {
    var key = r[1] + side + u.toFixed(2), hit = BC[key]; if (hit) return hit;
    var v = doc.createElement('canvas'), c = v.getContext('2d'), m = img(r), ok = m.complete && m.naturalWidth, col = paper(a, b, u);
    v.width = cw; v.height = ch;
    c.fillStyle = col; c.fillRect(0, 0, cw, ch);
    var w = cw * .82, h = w * 300 / r[2];
    if (h > ch * .62) { h = ch * .62; w = h * r[2] / 300; }
    var x = (cw - w) / 2, y = ch * .1 + (ch * .62 - h) / 2;
    if (ok) {
      c.drawImage(m, x, y, w, h);
      c.globalCompositeOperation = 'multiply'; c.globalAlpha = .35 + u * .65; c.fillStyle = col; c.fillRect(x, y, w, h);
      c.globalCompositeOperation = 'source-over'; c.globalAlpha = 1;
    } else { c.fillStyle = 'rgba(70,55,35,.14)'; c.fillRect(x, y, w, h); }
    c.strokeStyle = 'rgba(70,55,35,.3)'; c.lineWidth = Math.max(1, cw / 420); c.strokeRect(x, y, w, h);
    c.fillStyle = 'rgba(60,46,28,.8)'; c.textAlign = 'center';
    if (r[0]) { c.font = Math.round(cw * .05) + 'px Georgia, serif'; c.fillText(r[0], cw / 2, ch * .8); }
    c.fillStyle = 'rgba(70,55,35,.16)';
    for (var i = 0; i < 3; i++) c.fillRect(cw * .16, ch * (.85 + i * .03), cw * (i === 2 ? .4 : .68), Math.max(1, ch / 520));
    /* 靠書脊那一側的陰影 */
    var g = c.createLinearGradient(side ? 0 : cw, 0, side ? cw * .14 : cw * .86, 0);
    g.addColorStop(0, 'rgba(50,34,16,.34)'); g.addColorStop(1, 'rgba(50,34,16,0)');
    c.fillStyle = g; c.fillRect(0, 0, cw, ch);
    if (ok) BC[key] = v;
    return v;
  }
  function book(c, t, W, H, L, m) {
    var n = L.length, N = Math.max(1, Math.floor((n - 2) / 2)), wide = W / H > 1.05, dir = m.dir || 1;
    var ph = wide ? H * .86 : Math.min(H * .8, W * .9 * 1.38), pw = wide ? Math.min(W * .47, ph * .76) : W * .9, sp = wide ? W / 2 : (W - pw) / 2, top = (H - ph) / 2;
    var cw = Math.round(pw * 1.4), ch = Math.round(ph * 1.4), key = cw + 'x' + ch + (m.p0 || '') + L[0][1];
    if (key !== BK) { BC = {}; BK = key; }
    var p0 = m.p0 || '#fbf9f3', p1 = m.p1 || '#d9bd82', den = Math.max(1, 2 * N + 1);
    function pg(k, side) { var i = 2 * k + side; return leaf(L[i % n], i / den, side, cw, ch, p0, p1); }
    var q = Math.min(1, t / .72), e = q * q * (3 - 2 * q), u = e * N, k = Math.min(N - 1, Math.floor(u)), f = u - k;
    f = f * f * (3 - 2 * f);
    var th = f * Math.PI, sn = Math.sin(th), cs = Math.cos(th), z = 1 + t * .05;
    c.save(); c.translate(W / 2, H / 2); c.scale(z, z); c.translate(-W / 2, -H / 2);
    /* 書身：紙邊和壓在桌上的影子 */
    var lx = wide ? sp - pw : sp, tw = wide ? pw * 2 : pw;
    c.fillStyle = 'rgba(0,0,0,.42)'; c.fillRect(lx - 4, top + 12, tw + 16, ph + 8);
    c.fillStyle = paper(p0, p1, .6); c.fillRect(lx - 7, top + 3, tw + 14, ph + 2);
    var A = dir > 0, Lf = pg(A ? k + 1 : k, 0), Rg = pg(A ? k : k + 1, 1);
    if (wide) c.drawImage(Lf, sp - pw, top, pw, ph);
    c.drawImage(Rg, sp, top, pw, ph);
    /* 翻起來那一頁：前半在起手那一側，過了書脊換成另一面 */
    var first = th < Math.PI / 2, left = A ? first : !first, s = first ? (A ? pg(k, 0) : pg(k, 1)) : (A ? pg(k + 1, 1) : pg(k + 1, 0)), ax = Math.abs(cs), S = 18, D = pw * 3.2, cx = W / 2;
    if (sn > .001) {
      c.fillStyle = 'rgba(40,26,12,' + (.3 * sn).toFixed(3) + ')';
      if (left) { if (wide) c.fillRect(sp - pw, top, pw, ph); } else c.fillRect(sp, top, pw, ph);
    }
    for (var j = 0; j < S; j++) {
      var a0 = j / S, a1 = (j + 1) / S, s0 = D / (D - a0 * pw * sn), s1 = D / (D - a1 * pw * sn), dx = left ? -1 : 1;
      var x0 = cx + (sp + dx * a0 * pw * ax - cx) * s0, x1 = cx + (sp + dx * a1 * pw * ax - cx) * s1;
      var xa = Math.min(x0, x1), xw = Math.abs(x1 - x0) + .8, sc = (s0 + s1) / 2, hh = ph * sc, yy = H / 2 - hh / 2;
      if (xa > W || xa + xw < 0) continue;
      var sx = (left ? 1 - a1 : a0) * cw;
      c.drawImage(s, sx, 0, cw / S, ch, xa, yy, xw, hh);
      if (sn > .001) { c.fillStyle = 'rgba(40,26,12,' + (sn * (.06 + .2 * (1 - a0))).toFixed(3) + ')'; c.fillRect(xa, yy, xw, hh); }
    }
    c.restore();
    var cur = L[(2 * (f > .5 ? k + 1 : k) + 1) % n];
    BY = cur[0] || '';
  }
  /* 織線（環保）：照片切成經線，一排排緯線穿過去，織成一條毯子。m.yarn 兩個色 */
  function weave(c, t, W, H, L, m) {
    var y2 = m.yarn || ['#7c8b8f', '#a9b4ae'], sw = Math.max(26, Math.min(44, W / 22)), nc = Math.ceil(W / sw) + 1, k = W < 640 ? 5 : 8, th = H / 2, rh = sw * .62, nr = Math.ceil(H / rh) + 1, q = Math.min(1, t / .8);
    for (var j = 0; j < nc; j++) {
      var dy = Math.sin(j * .9 + t * 5) * 7 + (j % 2 ? -1 : 1) * t * 80;
      for (var v = -1; v < 3; v++) {
        var r = L[(Math.floor(j / k) * 3 + v + 1 + 40) % L.length], im = img(r), x = j * sw, y = v * th + dy;
        if (im.complete && im.naturalWidth) { var sx = (j % k) / k * im.naturalWidth; c.drawImage(im, sx, 0, im.naturalWidth / k, im.naturalHeight, x, y, sw - 2, th - 2); }
        else { c.fillStyle = '#5c5242'; c.fillRect(x, y, sw - 2, th - 2); }
      }
    }
    for (var i = 0; i < nr; i++) {
      var o = Math.pow(q, 1.3) * (nr + 6) - i, f = Math.min(1, Math.max(0, o / 6));
      if (f <= 0) continue;
      var len = W * f, yy = H - (i + 1) * rh;
      c.fillStyle = y2[i % 2];
      for (var u = 0; u < nc; u++) {
        var xx = u * sw; if ((u + i) % 2) continue;
        if (i % 2 ? xx + sw < W - len : xx > len) continue;
        c.fillRect(xx - 1, yy, sw + 2, rh - 1);
      }
      if (f >= 1 && q > .55) { c.globalAlpha = ramp(q, .55, 1); c.fillRect(0, yy, W, rh - 1); c.globalAlpha = 1; }
      c.fillStyle = 'rgba(30,26,20,.16)'; c.fillRect(0, yy + rh - 2, Math.max(len, f >= 1 ? W : 0), 1);
    }
  }
  /* 航線（國際賑災）：世界點陣地圖上一條線飛過 m.pts [經度,緯度,地名]，到一站貼一張照片 */
  var WC = null, WK = '';
  function wmap(sc, dot) {
    var key = sc.toFixed(2) + dot; if (WK === key) return WC;
    var G = window.WORLD, v = doc.createElement('canvas'), g = v.getContext('2d'), s = G.step * sc;
    v.width = Math.ceil(G.w * s); v.height = Math.ceil(G.r.length * s); g.fillStyle = dot;
    G.r.forEach(function (row, y) { for (var x = 0; x < G.w; x++) if (parseInt(row[x >> 2], 16) >> (3 - x % 4) & 1) { g.beginPath(); g.arc((x + .5) * s, (y + .5) * s, s * .3, 0, 6.283); g.fill(); } });
    WC = v; WK = key; return v;
  }
  function route(c, t, W, H, L, m) {
    var G = window.WORLD; if (!G) return HF(c, t, W, H, L);
    var P = m.pts || [], rowsN = G.r.length, sc = Math.max(W / (G.w * G.step), H / (rowsN * G.step) * .92) * (m.zoom || 1), mp = wmap(sc, m.dot || 'rgba(210,190,150,.5)');
    function pt(p) { return [(p[0] + 180) * sc, (G.top - p[1]) * sc]; }
    var n = P.length - 1, u = Math.min(1, t / .8) * n, k = Math.min(n - 1, Math.floor(u)), f = u - k; f = f * f * (3 - 2 * f);
    var a = pt(P[k]), b = pt(P[k + 1]), cx0 = a[0] + (b[0] - a[0]) * f, cy0 = a[1] + (b[1] - a[1]) * f;
    var ox = Math.min(0, Math.max(W - mp.width, W / 2 - cx0)), oy = Math.min(0, Math.max(H - mp.height, H / 2 - cy0));
    if (mp.width < W) ox = (W - mp.width) / 2; if (mp.height < H) oy = (H - mp.height) / 2;
    c.drawImage(mp, ox, oy);
    c.strokeStyle = m.line || '#e7c98a'; c.lineWidth = 2; c.setLineDash([7, 6]); c.beginPath();
    for (var i = 0; i <= k + 1; i++) {
      var q = pt(P[i]), e = i <= k ? q : [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
      if (i) { var pv = pt(P[i - 1]), mx = (pv[0] + e[0]) / 2, my = (pv[1] + e[1]) / 2 - Math.hypot(e[0] - pv[0], e[1] - pv[1]) * .16; c.quadraticCurveTo(mx + ox, my + oy, e[0] + ox, e[1] + oy); } else c.moveTo(e[0] + ox, e[1] + oy);
    }
    c.stroke(); c.setLineDash([]);
    for (i = 0; i <= n; i++) if (i <= k + (f > .96 ? 1 : 0)) {
      q = pt(P[i]); c.fillStyle = m.line || '#e7c98a'; c.beginPath(); c.arc(q[0] + ox, q[1] + oy, 4.5, 0, 6.283); c.fill();
      var age = u - i; if (age > -.04 && age < .95) {
        var r = L[i % L.length], h = Math.min(H * .3, W * .42) * (.9 + Math.min(age, .3) * .3), w = h * r[2] / 300, x = q[0] + ox + (q[0] + ox > W / 2 ? -w - 16 : 16), y = q[1] + oy - h * .6;
        ph(c, r, Math.max(8, Math.min(W - w - 8, x)), Math.max(8, Math.min(H - h - 8, y)), w, h, Math.min(1, (age + .04) * 8) * Math.min(1, (.95 - age) * 6), (i % 2 ? 1 : -1) * .03, 5);
      }
    }
    BY = P[Math.round(u)] ? P[Math.round(u)][2] || '' : '';
  }
  /* 配對（骨髓）：滿牆小格掃過去一格格暗下，最後只剩兩格對上，紅線連起來，推進那一格 */
  var MC = null, MK = '', MN = -1;
  function match(c, t, W, H, L, m) {
    var s = Math.max(30, Math.min(52, W / 16)), nx = Math.ceil(W / s), ny = Math.ceil(H / s), done = L.filter(function (r) { var i = img(r); return i.complete && i.naturalWidth; }).length, key = W + 'x' + H + L[0][1];
    if (key !== MK || done !== MN) {
      MC = MC || doc.createElement('canvas'); MC.width = W; MC.height = H; var g = MC.getContext('2d'); g.fillStyle = m.bg; g.fillRect(0, 0, W, H);
      for (var y = 0; y < ny; y++) for (var x = 0; x < nx; x++) { var r0 = L[Math.floor(rnd(x * 31 + y * 7) * L.length)], im = img(r0); if (im.complete && im.naturalWidth) { var a = rnd(x + y * 91) * .5; g.drawImage(im, a * im.naturalWidth, 0, im.naturalHeight * .9, im.naturalHeight * .9, x * s + 1, y * s + 1, s - 2, s - 2); } else { g.fillStyle = '#463c35'; g.fillRect(x * s + 1, y * s + 1, s - 2, s - 2); } }
      MK = key; MN = done;
    }
    var hot = m.hot || '#d9493f', ax = Math.floor(nx * .22), ay = Math.floor(ny * .38), bx = Math.floor(nx * .74), by = Math.floor(ny * .62), z = ramp(t, .68, .98), zz = z * z * (3 - 2 * z), sc = Math.pow(Math.max(W, H) / s * 1.15, zz), cxp = (bx + .5) * s, cyp = (by + .5) * s, sw = ramp(t, .04, .5);
    c.save(); c.translate(cxp + (W / 2 - cxp) * zz, cyp + (H / 2 - cyp) * zz); c.scale(sc, sc); c.translate(-cxp, -cyp);
    c.drawImage(MC, 0, 0, W, H);
    c.fillStyle = m.bg;
    for (var i = 0; i < ny; i++) for (var j = 0; j < nx; j++) {
      var o = ramp(sw, rnd(j * 13 + i * 57) * .8, rnd(j * 13 + i * 57) * .8 + .2);
      if (o > 0 && !(j === ax && i === ay) && !(j === bx && i === by)) { c.globalAlpha = o * .93; c.fillRect(j * s, i * s, s, s); }
    }
    c.globalAlpha = 1;
    var lk = ramp(t, .5, .66);
    if (lk > 0) {
      var p0 = [(ax + .5) * s, (ay + .5) * s], p1 = [cxp, cyp];
      c.strokeStyle = hot; c.lineWidth = 2 / Math.sqrt(sc); c.beginPath(); c.moveTo(p0[0], p0[1]); c.lineTo(p0[0] + (p1[0] - p0[0]) * lk, p0[1] + (p1[1] - p0[1]) * lk); c.stroke();
      c.lineWidth = 2.5 / Math.sqrt(sc); c.strokeRect(ax * s, ay * s, s, s); if (lk >= 1) c.strokeRect(bx * s, by * s, s, s);
    }
    var r1 = L[(m.end || 0) % L.length], ie = img(r1);
    if (z > 0 && ie.complete && ie.naturalWidth) { c.globalAlpha = ramp(z, 0, .5); var w1 = ie.naturalHeight * .9; c.drawImage(ie, (ie.naturalWidth - w1) / 2, 0, w1, ie.naturalHeight * .9, bx * s + 1, by * s + 1, s - 2, s - 2); c.globalAlpha = 1; }
    c.restore();
  }
  /* 窗燈（社區）：夜裡的街屋，一扇扇窗亮起來，窗裡是舊照，鏡頭慢慢退到整條街 */
  function lights(c, t, W, H, L, m) {
    var wide = W > H, nc = wide ? 12 : 6, nrw = wide ? 5 : 8, ww = W / (nc + 1), wh = ww * (wide ? .86 : 1.1), bw = (nc + 1) * ww, top = H - nrw * wh * 1.22 - H * .05, z = 1.7 - .7 * Math.pow(ramp(t, 0, .8), .8), warm = m.warm || '#f0c070', lit = Math.pow(ramp(t, .04, .8), 1.25);
    c.save(); c.translate(W * (m.fx || .5), H * .62); c.scale(z, z); c.translate(-W * (m.fx || .5), -H * .62);
    for (var b = 0; b < nc; b += 3) {
      var hh = rnd(b + 3) * wh * 1.1, x0 = (b + .5) * ww - ww * .35;
      c.fillStyle = b % 2 ? '#141a26' : '#10151f'; c.fillRect(x0, top - hh - wh * .3, ww * 3, H);
      c.fillStyle = 'rgba(255,255,255,.04)'; c.fillRect(x0, top - hh - wh * .3, ww * 3, 3);
    }
    for (var y = 0; y < nrw; y++) for (var x = 0; x < nc; x++) {
      var id = y * nc + x, px = (x + .75) * ww, py = top + y * wh * 1.22, w = ww * .66, h = wh * .82, on = rnd(id + 5) * .92 + .04 < lit;
      c.fillStyle = '#0b0f17'; c.fillRect(px, py, w, h);
      if (on) {
        var r = L[(id * 7) % L.length], im = img(r), age = Math.min(1, (lit - rnd(id + 5) * .92) * 7);
        c.globalAlpha = age;
        if (im.complete && im.naturalWidth) { var ch = im.naturalHeight, cw = ch * w / h; if (cw > im.naturalWidth) { cw = im.naturalWidth; ch = cw * h / w; } c.drawImage(im, (im.naturalWidth - cw) / 2, (im.naturalHeight - ch) / 2, cw, ch, px, py, w, h); }
        c.fillStyle = warm; c.globalAlpha = age * .3; c.fillRect(px, py, w, h);
        c.globalAlpha = age * .55; c.strokeStyle = warm; c.lineWidth = 1.5; c.strokeRect(px, py, w, h);
        c.globalAlpha = 1;
      }
      c.fillStyle = 'rgba(0,0,0,.5)'; c.fillRect(px + w / 2 - .75, py, 1.5, h);
    }
    c.restore();
  }
  /* 膠卷（人文）：底片帶一格格滾過，格邊印年份，最後中間一格放大，掃描線亮成螢幕。m.dir 1 往下 */
  function reel(c, t, W, H, L, m) {
    var n = W > H ? 3 : 2, fw = W > H ? Math.min(W * .26, H * .46) : W * .62, gap = fw * .16, fh = fw * .74, dir = m.dir || 1, sp = Math.pow(t, 1.15) * H * 3.4, z = ramp(t, .66, .96), zz = z * z * (3 - 2 * z), mid = n === 3 ? 1 : 0;
    function strip(si, x, spd, rot, off) {
      var hole = fw * .06, sw = fw + hole * 5, s = (dir > 0 ? sp : -sp) * spd + off, step = fh + gap * .4, k0 = Math.floor(-s / step) - 1;
      c.save(); c.translate(x, H / 2); c.rotate(rot); c.translate(-sw / 2, -H / 2);
      c.fillStyle = '#17120e'; c.fillRect(0, -H, sw, H * 3);
      for (var q = k0; q < k0 + Math.ceil(H * 1.6 / step) + 3; q++) {
        var y = q * step + s, r = L[((q + si * 5) % L.length + L.length) % L.length];
        ph(c, r, hole * 2.5, y, fw, fh, 1);
        c.fillStyle = 'rgba(236,222,190,.82)'; c.font = Math.round(hole * 1.15) + 'px Georgia, serif';
        if (r[0]) { c.save(); c.translate(sw - hole * .7, y + fh * .5); c.rotate(1.5708); c.textAlign = 'center'; c.fillText(r[0], 0, 0); c.restore(); }
        if (si === mid && y < H / 2 && y + fh > H / 2) BY = r[0] || '';
        for (var u = 0; u < 5; u++) { c.fillStyle = '#efe7d6'; var hy = y + u * step / 5; c.fillRect(hole * .7, hy, hole * 1.1, hole * .8); c.fillRect(sw - hole * 1.8, hy, hole * 1.1, hole * .8); }
      }
      c.restore();
    }
    if (n === 3) { strip(0, W * .17, .8, -.05, 40); strip(2, W * .83, .92, .05, 90); }
    else strip(1, W * .9, .8, .04, 60);
    c.save(); c.translate(n === 3 ? W / 2 : W * .4, H / 2); c.scale(1 + zz * 2.6, 1 + zz * 2.6); c.translate(-(n === 3 ? W / 2 : W * .4), -H / 2);
    strip(mid, n === 3 ? W / 2 : W * .4, 1, 0, 0);
    c.restore();
    if (z > 0) { c.fillStyle = 'rgba(8,8,10,' + (.3 * z).toFixed(2) + ')'; for (var y = 0; y < H; y += 4) c.fillRect(0, y, W, 2); }
    if (rnd(Math.floor(t * 60)) > .86) { c.fillStyle = 'rgba(255,245,220,.05)'; c.fillRect(0, 0, W, H); }
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
  if (window.TUN_M) Object.keys(TUN_M).forEach(function (k) { var x = TUN_M[k]; x.f = { hall: hall, rows: rows(x.n || 3, x.dir || 1), fall: fall, cols: cols, fly: fly(x.dir || 1, x.spd || 1, 24), book: book, weave: weave, route: route, match: match, lights: lights, reel: reel }[x.walk]; M[k] = x; });
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
    m.f(c, t, W, H, L, m);
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
    var pa, pl = m.plate || 'rgba(8,6,4,', v = c.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W * .62, 240));
    pa = m.pa == null ? 1 : m.pa;
    v.addColorStop(0, pl + .8 * pa + ')'); v.addColorStop(.55, pl + .5 * pa + ')'); v.addColorStop(1, pl + '0)');
    c.fillStyle = v; c.fillRect(0, 0, W, H);
    if (m.close) { c.globalAlpha = ramp(t, .8, .97); c.fillStyle = m.close; c.fillRect(0, 0, W, H); c.globalAlpha = 1; }
    qe.style.opacity = ramp(t, .08, .2) * (1 - ramp(t, .74, .86));
    /* 只有照片和年份對得上的隧道才跑年份 */
    ye.textContent = m.walk === 'book' || m.walk === 'route' || m.walk === 'reel' ? BY : m.walk === 'hall' && HG ? HG.year(t) : m.y ? Math.round(m.y[0] + (m.y[1] - m.y[0]) * Math.min(1, t * 1.1)) : '';
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
