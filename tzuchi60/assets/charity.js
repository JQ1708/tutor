/* 慈善站渲染与交互。普通 script，可 file:// 打开，不用 fetch/module */
(function () {
  var CH = window.CH, SRC = window.SRC || {}, PHS = window.PHS || {}, doc = document, root = doc.documentElement;
  var app = doc.getElementById('app');
  root.classList.add('js');

  /* 语言：这一页默认只显示中文 */
  var LK = 'tc60lang', lang = 'zh';
  try { lang = localStorage.getItem(LK) || 'zh'; } catch (e) {}
  root.dataset.lang = lang;

  function B(o, tag, cls) {
    if (!o) return ''; tag = tag || 'span'; cls = cls ? cls + ' ' : '';
    return '<' + tag + ' class="' + cls + 'zh">' + (o.zh || '') + '</' + tag + '>' +
      (o.en && o.en !== o.zh ? '<' + tag + ' class="' + cls + 'en" lang="en">' + o.en + '</' + tag + '>' : '');
  }
  function plain(o) { return (o && o.zh || '').replace(/<[^>]+>/g, '').replace(/"/g, '&quot;'); }
  function srcOf(k) { return CH.S[k] || SRC[k]; }
  function one(k) {
    var s = srcOf(k); if (!s) return '';
    var z = s.zh, e = s.en || s.zh;
    var w = function (x) { return s.url ? '<a href="' + s.url + '" target="_blank" rel="noopener">' + x + '</a>' : x; };
    return '<span class="zh">' + w(z) + '</span><span class="en" lang="en">' + w(e) + '</span>';
  }
  function srcs(a) { return a && a.length ? '<p class="src"><span class="zh">出处：</span><span class="en" lang="en">Source: </span>' + a.map(one).join('；') + '</p>' : ''; }
  function fig(p) {
    var z = PHS[p.i] || [3, 2];
    return '<figure><button class="zoom" data-i="' + p.i + '" aria-label="放大看图 ' + plain(p.c) + '"><img loading="lazy" src="assets/ph/' + p.i + '.jpg" width="' + z[0] + '" height="' + z[1] + '" alt="' + plain(p.c) + '"></button><figcaption>' + B(p.c) + '</figcaption></figure>';
  }
  function quote(q) {
    if (!q) return '';
    return '<blockquote class="q"><p class="zh">「' + q.zh + '」</p><p class="en" lang="en">“' + q.en + '”</p><cite>' + B(q.who) + '</cite></blockquote>';
  }
  function paras(a) { return (a || []).map(function (p) { return B(p, 'p'); }).join(''); }

  var R = {
    sheet: function () {
      var s = CH.sheet;
      return '<article class="sheet"><i class="fold"></i><header class="mast"><h2>' + s.mast + '</h2><div class="dt">' + s.date + '</div></header>' +
        '<div class="sbody"><div class="stop2"><figure class="sph"><img src="' + s.img + '" alt="' + s.alt + '"><div class="cap">' + s.cap + '</div></figure>' +
        '<h3 class="shead">' + s.head + '<small>' + s.small + '</small></h3></div><div class="scol">' + s.col.map(function (x) { return '<p>' + x + '</p>'; }).join('') + '</div></div>' +
        '<p class="sen" lang="en">' + s.en + '</p></article>';
    },
    story: function (b) {
      var more = b.more ? '<details class="more"><summary><span class="zh">读全文</span><span class="en" lang="en">Read more</span></summary>' + paras(b.more) + '</details>' : '';
      var t = '<div class="st-t">' + (b.date ? '<div class="date">' + b.date + '</div>' : '') + '<h3>' + B(b.h) + '</h3><div class="cols">' + paras(b.p) + '</div>' +
        quote(b.q) + quote(b.q2) + more + (b.note ? B(b.note, 'p', 'note') : '') + srcs(b.s) + '</div>';
      var lay = b.ph ? b.lay : 'T';
      var ph = b.ph ? '<div class="st-p" style="--n:' + Math.min(b.ph.length, 3) + '">' + b.ph.map(fig).join('') + '</div>' : '';
      return '<article class="st st-' + lay + (b.full ? ' full' : '') + '">' + t + ph + '</article>';
    },
    acct: function (b) {
      return '<div class="acct"><h3>' + B(b.h) + '</h3><table>' + b.rows.map(function (r) { return '<tr><td>' + B(r[0]) + '</td><td>' + B(r[1]) + '</td></tr>'; }).join('') +
        '<tr class="sum"><td>' + B(b.sum[0]) + '</td><td>' + B(b.sum[1]) + '</td></tr></table>' + srcs(b.s) + '</div>';
    },
    rec: function (b) {
      return '<div class="rec"><ol>' + b.items.map(function (x) { return '<li><div class="d">' + x.d + '</div><div>' + B(x, 'p') + '</div></li>'; }).join('') + '</ol>' + srcs(b.s) + '</div>';
    },
    quote: function (b) {
      return '<blockquote class="bq' + (b.big ? ' big' : '') + '"><p class="zh">「' + b.zh + '」</p><p class="en" lang="en">“' + b.en + '”</p><cite>' + B(b.who) + '</cite>' + srcs(b.s) + '</blockquote>';
    },
    photos: function (b) { return '<div class="' + (b.lay === 'one' ? 'ph1' : 'ph3') + '">' + b.ph.map(fig).join('') + '</div>'; },
    five: function (b) { return '<div class="five">' + b.items.map(function (x) { return '<div>' + B(x) + '</div>'; }).join('') + '</div>'; },
    chain: function (b) {
      return '<div class="chain">' + b.items.map(function (x) {
        var pic = x.i ? fig({ i: x.i, c: x.c }) : '<div class="pic">' + B(x.c) + '</div>';
        return '<div>' + pic + '<div class="y">' + x.y + '</div><div class="w">' + B(x.w) + '</div><div class="tt">' + B(x.t) + '</div></div>';
      }).join('') + '</div>';
    },
    vids: function (b) {
      return '<div class="vids">' + b.ids.map(function (v) { return vid(v[0], v[1]); }).join('') + '</div>';
    },
    ledger: function () {
      var h = CH.ledger.map(function (g) {
        return '<div class="lg"><h3>' + B(g.h) + '</h3>' + g.rows.map(function (r) {
          var n = r.nen ? '<span class="zh">' + r.n + '</span><span class="en" lang="en">' + r.nen + '</span>' : r.n;
          return '<div class="row' + (r.big ? ' big' : '') + '"><div class="n">' + n + (r.u && r.u.zh ? '<small>' + B(r.u) + '</small>' : '') + '</div><div class="l">' + B(r.l) + '</div><div class="w">' + (r.w ? B(r.w) + ' · ' : '') + one(r.s) + '</div></div>';
        }).join('') + '</div>';
      }).join('');
      return h + B(CH.ledgerNote, 'p', 'lnote') + '<div class="lold">' + CH.ledgerOld.map(function (r) { return '<div>' + '<span>' + B(r[0]) + '</span><b>' + B(r[1]) + '</b></div>'; }).join('') + '</div>';
    },
    you: function () {
      var y = CH.you;
      return '<div class="you">' + B(y.lines[0], 'p', 'line0') + B(y.lines[1], 'p') + B(y.lines[2], 'p') +
        '<blockquote class="bq big"><p class="zh">「' + y.q.zh + '」</p><p class="en" lang="en">“' + y.q.en + '”</p><cite>' + B(y.q.who) + '</cite>' + srcs([y.q.s]) + '</blockquote>' +
        y.links.map(function (l) { return '<a class="go" href="' + l.url + '" target="_blank" rel="noopener">' + B(l) + '</a>'; }).join('') + B(y.linkNote, 'p', 'ln') + '</div>';
    },
    films: function () {
      var v = (window.CHARITY && CHARITY.videos) || [];
      return '<h3 class="h4"><span class="zh">影片</span><span class="en" lang="en">Films</span></h3><div class="vids">' + v.map(function (x) { return vid(x.id, x, x.y); }).join('') + '</div>';
    },
    records: function () {
      return '<h3 class="h4"><span class="zh">慈善沿革</span><span class="en" lang="en">Timeline</span></h3><div class="filters" id="flt">' +
        CH.filters.map(function (f, i) { return '<button data-f="' + f[0] + '" aria-pressed="' + (i === 0) + '">' + B(f[1]) + '</button>'; }).join('') + '</div><ol class="rlist" id="rl">' +
        CH.records.map(function (r) { return '<li data-t="' + r[1] + '"><div class="d">' + r[0] + '</div><div>' + B({ zh: r[2], en: r[3] }, 'p') + '<p class="src">' + one(r[4]) + '</p></div></li>'; }).join('') + '</ol>';
    },
    sources: function () {
      var seen = {}, L = [];
      var add = function (k) { if (k && !seen[k] && srcOf(k)) { seen[k] = 1; L.push(k); } };
      CH.chapters.forEach(function (c) { c.b.forEach(function (b) { (b.s || []).forEach(add); }); });
      CH.ledger.forEach(function (g) { g.rows.forEach(function (r) { add(r.s); }); });
      CH.records.forEach(function (r) { add(r[4]); });
      return '<details class="all"><summary><span class="zh">本页全部出处（' + L.length + ' 条）</span><span class="en" lang="en">All sources on this page (' + L.length + ')</span></summary><ul>' + L.map(function (k) { return '<li>' + one(k) + '</li>'; }).join('') + '</ul></details>';
    }
  };
  function vid(id, t, y) {
    return '<a class="vid" href="https://www.youtube.com/watch?v=' + id + '" target="_blank" rel="noopener"><span class="im"><img loading="lazy" src="assets/yt/' + id + '.jpg" alt=""></span>' + B(t) + (y ? '<small>' + y + '</small>' : '') + '</a>';
  }

  /* 组页 */
  var h = CH.hero, html = '';
  html += '<section id="hero" data-era="dark"><img class="still" src="assets/ph/hero.jpg" alt=""><video id="door" muted playsinline preload="auto" poster="assets/ph/hero0.jpg" src="assets/film/door.mp4"></video>' +
    '<div class="hero-t"><p class="film t">' + B(h.film) + '</p><p class="stop">' + B(h.stop) + '</p><h1>' + B(h.title) + '</h1><p class="sub">' + B(h.sub) + '</p>' +
    '<div class="hero-b"><a class="btn solid" href="#film" id="watch">' + B(h.watch) + '</a><a class="btn" href="#river">' + B(h.read) + '</a></div></div><div class="ai">' + B(h.ai) + '</div></section>';
  html += '<section id="river" data-era="dark" aria-label="照片河，从今天流回一九六六"><div id="rs"><div class="rrow"></div><div class="rrow"></div><div class="rrow"></div>' +
    '<div id="ryear" aria-hidden="true">2026</div><img id="rpop" alt=""><div id="rtext"><div>' + B(CH.river.a) + '</div><div>' + B(CH.river.b) + '</div></div><div id="rgold"></div><div id="rpaper"></div></div></section>';
  CH.chapters.forEach(function (c, i) {
    html += '<section class="ch" id="' + c.id + '" data-era="' + c.era + '" data-i="' + i + '">';
    if (c.ask) html += '<div class="ask rv">' + B(c.ask, 'div', 't') + '</div>';
    html += '<div class="wrap' + (c.ask ? '' : ' first') + '">';
    if (c.h) html += '<header class="ch-h rv"><div class="yr">' + (c.yen ? B({ zh: c.y, en: c.yen }) : c.y) + '</div><h2>' + B(c.h) + '</h2>' + (c.lead ? B(c.lead, 'p', 'lead') : '') + '</header>';
    c.b.forEach(function (b) { html += '<div class="b rv">' + R[b.k](b) + '</div>'; });
    html += '</div></section>';
  });
  html += '<section class="next" data-era="dark"><p class="a t zh">' + CH.next.ask.zh + '</p><p class="en" lang="en"><i>' + CH.next.ask.en + '</i></p><p class="s">' + B(CH.next.stop) + '</p></section>';
  html += '<footer data-era="dark"><div class="wrap">' + B(CH.footer) + '</div></footer>';
  app.innerHTML = html;

  /* 语言钮 */
  var lg = doc.getElementById('lang');
  [['zh', '中'], ['en', 'EN'], ['both', '中/EN']].forEach(function (x) {
    var b = doc.createElement('button'); b.textContent = x[1]; b.setAttribute('aria-pressed', x[0] === lang);
    b.onclick = function () { lang = x[0]; root.dataset.lang = lang; try { localStorage.setItem(LK, lang); } catch (e) {} [].forEach.call(lg.children, function (c) { c.setAttribute('aria-pressed', c === b); }); paintPill(); };
    lg.appendChild(b);
  });

  /* 门 */
  var hero = doc.getElementById('hero'), door = doc.getElementById('door');
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function showTxt() { hero.classList.add('txt'); }
  function done() { hero.classList.add('done'); showTxt(); }
  if (reduce) { door.remove(); done(); } else {
    door.addEventListener('timeupdate', function () { if (door.currentTime > 5.2) showTxt(); });
    door.addEventListener('ended', done);
    door.addEventListener('error', done);
    var pl = door.play(); if (pl && pl.catch) pl.catch(done);
    setTimeout(function () { if (door.paused || door.currentTime === 0) done(); }, 2500);
  }

  /* 照片河 */
  var RV = window.RIVER || [], rows = doc.querySelectorAll('.rrow');
  RV.forEach(function (r, i) {
    var im = doc.createElement('img'); im.src = 'assets/river/' + r[1] + '.jpg'; im.alt = ''; im.width = r[2]; im.height = 300; im.dataset.y = r[0]; rows[i % 3].appendChild(im);
  });
  var riv = doc.getElementById('river'), ry = doc.getElementById('ryear'), rp = doc.getElementById('rpop'), rg = doc.getElementById('rgold'), rpa = doc.getElementById('rpaper'), rt = doc.querySelectorAll('#rtext>div'), rs = doc.getElementById('rs');
  var pops = [.3, .46, .62, .76].map(function (a, n) { var r = RV[Math.floor(a * (RV.length - 1))]; return { a: a, y: r[0], s: 'assets/river/' + r[1] + '.jpg' }; });
  var off = [0, 90, 40], rowW = [0, 0, 0];
  function meas() { [].forEach.call(rows, function (r, i) { rowW[i] = r.scrollWidth - innerWidth; }); }
  function ramp(x, a, b) { return Math.min(1, Math.max(0, (x - a) / (b - a))); }
  function tri(x, a, b, c, d) { return ramp(x, a, b) * (1 - ramp(x, c, d)); }
  function river() {
    var r = riv.getBoundingClientRect(), span = r.height - innerHeight, p = Math.min(1, Math.max(0, -r.top / span));
    if (r.bottom < -50 || r.top > innerHeight + 50) return;
    var q = ramp(p, .04, .9);
    [].forEach.call(rows, function (e, i) { e.style.transform = 'translate3d(' + (-off[i] - q * (rowW[i] - off[i])) + 'px,0,0)'; });
    /* 年份跟着屏幕中间那张真实照片走，不按滚动比例推算 */
    var cx = off[1] + q * (rowW[1] - off[1]) + innerWidth / 2, ph = rows[1].children, yy = q > 0 ? ph[0].dataset.y : 2026;
    for (var k = 0; k < ph.length && q > 0; k++) { if (ph[k].offsetLeft > cx) break; yy = ph[k].dataset.y; }
    ry.textContent = yy;
    ry.style.opacity = .92 * (1 - ramp(p, .9, .95));
    rs.style.background = 'rgb(' + Math.round(18 + 70 * q) + ',' + Math.round(15 + 50 * q) + ',' + Math.round(12 + 26 * q) + ')';
    rg.style.opacity = 1 - ramp(p, 0, .07);
    rpa.style.opacity = ramp(p, .93, 1);
    /* 纸幕快盖满时就把底色换好，1966 升上来时才不会露出黑底 */
    if (p > .9) { var ee = p > .96 ? CH.chapters[0].era : 'dark'; if (root.dataset.era !== ee) root.dataset.era = ee; }
    rt[0].style.opacity = tri(p, .08, .13, .24, .29);
    rt[1].style.opacity = tri(p, .8, .84, .93, .95);
    var hit = null; pops.forEach(function (o) { if (Math.abs(p - o.a) < .045) hit = o; });
    if (hit) {
      if (rp.dataset.s !== hit.s) { rp.src = hit.s; rp.dataset.s = hit.s; }
      var d = (p - hit.a) / .045; rp.style.opacity = 1 - Math.pow(Math.abs(d), 3);
      rp.style.transform = 'translate(-50%,-50%) scale(' + (1 + .06 * d) + ')';
    } else rp.style.opacity = 0;
  }

  /* 进度线、年代、胶囊 */
  var bar = doc.getElementById('bar'), pill = doc.getElementById('pill'), pb = doc.getElementById('pillb'), toc = doc.getElementById('toc');
  var chs = doc.querySelectorAll('.ch'), cur = -1, N = CH.chapters.length;
  toc.innerHTML = CH.chapters.map(function (c) { return '<a href="#' + c.id + '"><span>' + (c.yen && lang === 'en' ? c.yen : c.y) + '</span><span>' + B(c.nav) + '</span></a>'; }).join('');
  function paintPill() {
    [].forEach.call(toc.children, function (a, i) { var x = CH.chapters[i]; a.firstChild.textContent = lang === 'en' && x.yen ? x.yen : x.y; });
    if (cur < 0) return; var c = CH.chapters[cur];
    pb.innerHTML = '<b>' + (cur + 1) + '/' + N + '</b><span>' + (lang === 'en' ? (c.yen || c.y) : c.y) + '</span><i>' + (lang === 'en' ? c.nav.en : c.nav.zh) + '</i><span aria-hidden="true">▴</span>';
    [].forEach.call(toc.children, function (a, i) { if (i === cur) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
  }
  if (window.IntersectionObserver) {
    var eio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var t = e.target; root.dataset.era = t.dataset.era;
        if (t === riv && !reduce) river();
        var i = t.dataset.i === undefined ? -1 : +t.dataset.i;
        pill.classList.toggle('on', i >= 0);
        if (i < 0) toc.hidden = true;
        if (i >= 0 && i !== cur) { cur = i; paintPill(); }
      });
    }, { rootMargin: '-50% 0px -50% 0px' });
    doc.querySelectorAll('#hero,#river,.ch,.next').forEach(function (s) { eio.observe(s); });
    var rio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    doc.querySelectorAll('.rv').forEach(function (e) { rio.observe(e); });
  } else doc.querySelectorAll('.rv').forEach(function (e) { e.classList.add('in'); });
  pb.onclick = function (e) { e.stopPropagation(); toc.hidden = !toc.hidden; pb.setAttribute('aria-expanded', !toc.hidden); };
  toc.onclick = function () { toc.hidden = true; };
  doc.addEventListener('click', function (e) { if (!toc.hidden && !toc.contains(e.target)) toc.hidden = true; });

  var tick = false;
  function frame() {
    tick = false;
    var m = doc.documentElement.scrollHeight - innerHeight;
    bar.style.transform = 'scaleX(' + (m > 0 ? scrollY / m : 0) + ')';
    if (!reduce) river();
  }
  function ask() { if (!tick) { tick = true; requestAnimationFrame(frame); } }
  addEventListener('scroll', ask, { passive: true });
  addEventListener('resize', function () { meas(); ask(); });
  addEventListener('load', function () { meas(); ask(); });
  meas(); ask();

  /* 灯箱 */
  var lb = doc.getElementById('lb'), lbi = doc.getElementById('lbi'), lbc = doc.getElementById('lbc'), last = null;
  app.addEventListener('click', function (e) {
    var z = e.target.closest && e.target.closest('.zoom'); if (!z) return;
    last = z; lbi.src = 'assets/ph/' + z.dataset.i + '.jpg'; lbi.alt = z.querySelector('img').alt;
    var c = z.parentNode.querySelector('figcaption'); lbc.innerHTML = c ? c.innerHTML : '';
    lb.hidden = false; root.style.overflow = 'hidden'; doc.getElementById('lbx').focus();
  });
  function closeLb() { lb.hidden = true; root.style.overflow = ''; if (last) last.focus(); }
  doc.getElementById('lbx').onclick = closeLb;
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });

  /* 影片 */
  var fl = doc.getElementById('film'), fv = doc.getElementById('filmv');
  function closeFilm() { fv.pause(); fl.hidden = true; root.style.overflow = ''; }
  doc.getElementById('watch').addEventListener('click', function (e) { e.preventDefault(); fl.hidden = false; root.style.overflow = 'hidden'; fv.play(); });
  doc.getElementById('filmx').onclick = closeFilm;
  addEventListener('keydown', function (e) { if (e.key !== 'Escape') return; if (!lb.hidden) closeLb(); if (!fl.hidden) closeFilm(); });

  /* 沿革筛选 */
  var flt = doc.getElementById('flt'), rl = doc.getElementById('rl');
  if (flt) flt.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return; var f = b.dataset.f;
    [].forEach.call(flt.children, function (c) { c.setAttribute('aria-pressed', c === b); });
    [].forEach.call(rl.children, function (li) { li.hidden = f !== 'all' && (' ' + li.dataset.t + ' ').indexOf(' ' + f + ' ') < 0; });
  });
})();
