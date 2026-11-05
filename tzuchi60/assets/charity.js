/* 慈善站渲染與交互。普通 script，可 file:// 打開，不用 fetch/module */
(function () {
  var CH = window.CH, SRC = window.SRC || {}, PHS = window.PHS || {}, doc = document, root = doc.documentElement;
  var app = doc.getElementById('app');
  root.classList.add('js');

  /* 語言：這一頁默認只顯示中文 */
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
  function srcs(a) { return a && a.length ? '<p class="src"><span class="zh">出處：</span><span class="en" lang="en">Source: </span>' + a.map(one).join('；') + '</p>' : ''; }
  function fig(p) {
    var z = PHS[p.i] || [3, 2];
    return '<figure><button class="zoom" data-i="' + p.i + '" aria-label="放大看圖 ' + plain(p.c) + '"><img loading="lazy" src="assets/ph/' + p.i + '.jpg" width="' + z[0] + '" height="' + z[1] + '" alt="' + plain(p.c) + '"></button><figcaption>' + B(p.c) + '</figcaption></figure>';
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
      var more = b.more ? '<details class="more"><summary><span class="zh">讀全文</span><span class="en" lang="en">Read more</span></summary>' + paras(b.more) + '</details>' : '';
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
      var z = b.big ? b.zh.split(/(?<=[，。？！；])/).map(function (x, i) { return '<span class="qs" style="--i:' + i + '">' + x + '</span>'; }).join('') : b.zh;
      return '<blockquote class="bq' + (b.big ? ' big' : '') + '"><p class="zh">「' + z + '」</p><p class="en" lang="en">“' + b.en + '”</p><cite>' + B(b.who) + '</cite>' + srcs(b.s) + '</blockquote>';
    },
    photos: function (b) {
      if (b.lay === 'one') return '<div class="ph1">' + b.ph.map(fig).join('') + '</div>';
      return '<div class="strip"><div class="roll">' + b.ph.map(fig).join('') + '</div></div>';
    },
    coin: function () {
      var c = CH.coin, g = '';
      for (var i = 0; i < 30; i++) g += '<i></i>';
      return '<div class="coin"><h3>' + B(c.h) + '</h3><div class="cn-g" aria-hidden="true">' + g + '</div>' +
        '<div class="cn-v" aria-live="polite"><b>0</b><span class="zh"> 元</span></div><p class="cn-s">' + B(c.s0) + '</p>' +
        '<button class="btn cn-b">' + B(c.tap) + '</button></div>';
    },
    spend: function () {
      var s = CH.spend, mx = 120, show = { 2016: 1, 2021: 1, 2025: 1 };
      function v(x) { return x.toFixed(2).replace(/0$/, ''); }
      var bars = s.rows.map(function (r) {
        var m = s.mark[r[0]];
        return '<div class="sp-b' + (show[r[0]] ? ' lab' : '') + '" tabindex="0" style="--h:' + (r[1] / mx * 100).toFixed(1) + '%"><b>' + v(r[1]) + '</b><i></i><span data-s="\'' + String(r[0]).slice(2) + '">' + r[0] + '</span>' +
          (m ? '<em>' + B(m) + '</em>' : '') + '</div>';
      }).join('');
      var tb = s.rows.map(function (r) { return '<tr><td>' + r[0] + '</td><td>' + v(r[1]) + '</td></tr>'; }).join('');
      return '<div class="sp"><p class="sp-k">' + B(s.h) + '</p><p class="sp-big">' + B(s.big) + '</p>' + B(s.sub, 'p', 'sp-sub') +
        '<div class="sp-u">' + B(s.unit) + '</div><div class="sp-c">' + bars + '</div>' + B(s.note, 'p', 'lnote') +
        '<details class="sp-t"><summary>' + B(s.table) + '</summary><table>' + tb + '</table></details></div>';
    },
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
          var n = r.nen ? '<span class="zh">' + cu(r.n) + '</span><span class="en" lang="en">' + cu(r.nen) + '</span>' : cu(r.n);
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
      return '<details class="all"><summary><span class="zh">本頁全部出處（' + L.length + ' 條）</span><span class="en" lang="en">All sources on this page (' + L.length + ')</span></summary><ul>' + L.map(function (k) { return '<li>' + one(k) + '</li>'; }).join('') + '</ul></details>';
    }
  };
  function cu(t) { return t.replace(/\d[\d,]*/, function (m) { return '<span class="cu" data-v="' + m.replace(/,/g, '') + '">' + m + '</span>'; }); }
  function vid(id, t, y) {
    return '<a class="vid" href="https://www.youtube.com/watch?v=' + id + '" target="_blank" rel="noopener"><span class="im"><img loading="lazy" src="assets/yt/' + id + '.jpg" alt=""></span>' + B(t) + (y ? '<small>' + y + '</small>' : '') + '</a>';
  }

  /* 組頁：hub 和六段靠 hash 切換，內容還是原來的章節 */
  var U = CH.ui, BL = CH.blocks, byId = {}, reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, seen = {}, cur = -1;
  CH.chapters.forEach(function (c) { byId[c.id] = c; });
  try { (JSON.parse(localStorage.getItem('tc60seen')) || []).forEach(function (k) { seen[k] = 1; }); } catch (e) {}
  function mark(id) { if (seen[id]) return; seen[id] = 1; try { localStorage.setItem('tc60seen', JSON.stringify(Object.keys(seen))); } catch (e) {} }
  function askOf(b) { return b.ask || byId[b.ch[0]].ask; }
  function yr(b) { return typeof b.y === 'string' ? b.y : B(b.y); }
  function tx(o) { return (lang === 'en' ? o.en : o.zh).replace(/<[^>]+>/g, ''); }
  function stamp() { return '<span class="stamp t" aria-hidden="true">' + B(U.walked) + '</span>'; }
  function foot() { return '<footer data-era="dark"><div class="wrap">' + B(CH.footer) + '</div></footer>'; }
  function hubHTML() {
    var h = CH.hero, nx = -1;
    BL.some(function (b, i) { if (!seen[b.id]) { nx = i; return true; } });
    var cards = BL.map(function (b, i) {
      return '<a class="bc' + (i === nx ? ' nx' : '') + (seen[b.id] ? ' ok' : '') + '" href="#' + b.id + '" data-go="' + i + '"><span class="bc-i"><img loading="lazy" src="assets/ph/' + b.cover + '.jpg" alt=""></span>' +
        '<span class="bc-t"><span class="bc-y"><b>' + (i + 1) + '</b>' + yr(b) + '</span><span class="bc-h t">' + B(b.h) + '</span><span class="bc-q">' + B(askOf(b)) + '</span></span>' +
        (i === nx ? '<em>' + B(U.start) + '</em>' : '') + (seen[b.id] ? stamp() : '') + '</a>';
    }).join('');
    return '<section id="hero" data-era="dark"><img class="still" src="assets/ph/hero.jpg" alt=""><video id="door" muted playsinline preload="auto" poster="assets/ph/hero0.jpg" src="assets/film/door.mp4"></video>' +
      '<div class="hero-t"><p class="film t">' + B(h.film) + '</p><p class="stop">' + B(h.stop) + '</p><h1>' + B(h.title) + '</h1><p class="sub">' + B(h.sub) + '</p>' +
      '<div class="hero-b"><a class="btn solid" href="#film" id="watch">' + B(h.watch) + '</a><a class="btn" href="#hub" id="read">' + B(h.read) + '</a></div></div><div class="ai">' + B(h.ai) + '</div></section>' +
      '<section id="hub" data-era="e60"><div class="wrap"><p class="hub-k">' + B(U.hubK) + '</p><h2 class="t">' + B(U.hubH) + '</h2><p class="hub-s">' + B(U.hubS) + '</p><div class="bcs">' + cards + '</div></div></section>' + foot();
  }
  function chapter(c, skipAsk) {
    var s = '<section class="ch" id="' + c.id + '" data-era="' + c.era + '">';
    if (c.ask && !skipAsk) s += '<div class="ask rv">' + B(c.ask, 'div', 't') + '</div>';
    s += '<div class="wrap' + (c.ask && !skipAsk ? '' : ' first') + '">';
    if (c.h) s += '<header class="ch-h rv"><div class="yr">' + (c.yen ? B({ zh: c.y, en: c.yen }) : c.y) + '</div><h2>' + B(c.h) + '</h2>' + (c.lead ? B(c.lead, 'p', 'lead') : '') + '</header>';
    c.b.forEach(function (b) { s += '<div class="b rv">' + R[b.k](b) + '</div>'; });
    return s + '</div></section>';
  }
  function blockHTML(i) {
    var b = BL[i], n = BL[i + 1], seg = { zh: U.seg.zh.replace('{n}', i + 1), en: U.seg.en.replace('{n}', i + 1) };
    var s = '<section class="bh" data-era="dark"><img src="assets/ph/' + b.cover + '.jpg" alt=""><div class="bh-t"><p class="bh-k">' + B(seg) + '　' + yr(b) + '</p><h1 class="t">' + B(b.h) + '</h1><p class="bh-q t">' + B(askOf(b)) + '</p><span class="bh-d" aria-hidden="true">↓</span></div></section>';
    b.ch.forEach(function (id, k) { s += chapter(byId[id], k === 0); });
    s += '<section class="bn" data-era="dark"><div class="bn-s">' + stamp() + '</div><p class="bn-d">' + B(U.done) + '</p>';
    if (n) s += '<p class="bn-k">' + B(U.nextOf) + '　' + yr(n) + '　' + B(n.h) + '</p><p class="bn-q t">' + B(askOf(n)) + '</p><a class="go2" href="#' + n.id + '" data-go="' + (i + 1) + '">' + B(U.nextTun) + ' →</a><a class="bn-b" href="#hub">' + B(U.back) + '</a>';
    else s += '<p class="bn-q t">' + B(CH.next.ask) + '</p><p class="bn-k">' + B(CH.next.stop) + '</p><a class="go2" href="index.html#road" id="toroad">' + B(U.road) + ' →</a><a class="bn-b" href="#hub">' + B(U.back) + '</a>';
    return s + '</section>' + foot();
  }

  /* 語言鈕 */
  var lg = doc.getElementById('lang');
  [['zh', '中'], ['en', 'EN'], ['both', '中/EN']].forEach(function (x) {
    var b = doc.createElement('button'); b.textContent = x[1]; b.setAttribute('aria-pressed', x[0] === lang);
    b.onclick = function () { lang = x[0]; root.dataset.lang = lang; try { localStorage.setItem(LK, lang); } catch (e) {} [].forEach.call(lg.children, function (c) { c.setAttribute('aria-pressed', c === b); }); paintPill(); };
    lg.appendChild(b);
  });

  /* 門：一次瀏覽只開一次 */
  function wireDoor() {
    var hero = doc.getElementById('hero'), door = doc.getElementById('door'), once = false;
    try { once = sessionStorage.getItem('tc60door'); sessionStorage.setItem('tc60door', '1'); } catch (e) {}
    function showTxt() { hero.classList.add('txt'); }
    function done() { hero.classList.add('done'); showTxt(); }
    if (reduce || once) { door.remove(); done(); return; }
    door.addEventListener('timeupdate', function () { if (door.currentTime > 5.2) showTxt(); });
    door.addEventListener('ended', done);
    door.addEventListener('error', done);
    var pl = door.play(); if (pl && pl.catch) pl.catch(done);
    setTimeout(function () { if (door.paused || door.currentTime === 0) done(); }, 2500);
  }

  /* 竹筒互動 */
  function wireCoin() {
    var el = doc.querySelector('.coin'); if (!el) return;
    var c = CH.coin, cells = el.querySelectorAll('.cn-g i'), v = el.querySelector('.cn-v b'), s = el.querySelector('.cn-s'), bt = el.querySelector('.cn-b'), tm = [];
    function say(o) { s.innerHTML = B(o); }
    function num(x) { v.textContent = (lang === 'en' ? 'NT$' : '') + x.toLocaleString('en-US'); }
    function at(ms, f) { tm.push(setTimeout(f, ms)); }
    function reset() { tm.forEach(clearTimeout); tm = []; el.classList.remove('day'); [].forEach.call(cells, function (x) { x.className = ''; }); num(0); }
    bt.onclick = function () {
      reset(); bt.hidden = true;
      var t = reduce ? 0 : 1;
      cells[0].className = 'on'; num(.5);
      for (var i = 1; i < 30; i++) (function (i) { at(t * (500 + i * 55), function () { cells[i].className = 'on'; num((i + 1) / 2); if (i === 29) say(c.s1); }); })(i);
      at(t * 3400, function () { el.classList.add('day'); [].forEach.call(cells, function (x) { x.className = ''; }); });
      for (var d = 0; d < 30; d++) (function (d) { at(t * (3500 + d * 70), function () { cells[d].className = 'on'; num((d + 1) * 15); if (d === 29) say(c.s2); }); })(d);
      at(t * 7000, function () { num(1170); say(c.s3); bt.innerHTML = B(c.again); bt.hidden = false; });
    };
  }

  /* 數字跑上去 */
  function run(e) {
    var to = +e.dataset.v, t0 = 0, big = e.textContent.indexOf(',') >= 0;
    if (reduce) return;
    function f(t) {
      t0 = t0 || t; var p = Math.min(1, (t - t0) / 1300), x = Math.round(to * (1 - Math.pow(1 - p, 3)));
      e.textContent = big ? x.toLocaleString('en-US') : x; if (p < 1) requestAnimationFrame(f);
    }
    requestAnimationFrame(f);
  }

  /* 目錄、進度、年代 */
  var bar = doc.getElementById('bar'), pill = doc.getElementById('pill'), pb = doc.getElementById('pillb'), toc = doc.getElementById('toc'), dots = doc.getElementById('dots'), bk = doc.querySelector('.back');
  var eio, rio, strips = [];
  function paintToc() {
    toc.innerHTML = BL.map(function (b, i) { return '<a href="#' + b.id + '" data-go="' + i + '"' + (i === cur ? ' aria-current="true"' : '') + '><span>' + (i + 1) + '</span><span>' + B(b.h) + '</span><span>' + (seen[b.id] ? '✓' : '') + '</span></a>'; }).join('');
    dots.innerHTML = cur < 0 ? '' : BL.map(function (b, i) { return '<a href="#' + b.id + '" data-go="' + i + '" aria-label="' + (i + 1) + '" class="' + (i === cur ? 'c' : seen[b.id] ? 's' : '') + '"></a>'; }).join('');
  }
  function paintPill() {
    if (cur < 0) return;
    var left = doc.querySelectorAll('.b.rv:not(.in)').length;
    pb.innerHTML = '<b>' + (cur + 1) + '/6</b><span>' + tx(BL[cur].h) + '</span><i>' + (left ? tx(U.left) + ' ' + left + ' ' + tx(U.leftU) : tx(U.done)) + '</i><span aria-hidden="true">▴</span>';
  }
  function wire() {
    if (eio) eio.disconnect();
    if (rio) rio.disconnect();
    paintToc();
    pill.classList.toggle('on', cur >= 0); toc.hidden = true;
    bk.innerHTML = cur < 0 ? '<span class="zh">← 八大腳印</span><span class="en" lang="en">← Eight Footprints</span>' : '<span class="zh">← 六段路</span><span class="en" lang="en">← Six stretches</span>';
    bk.setAttribute('href', cur < 0 ? 'index.html#road' : '#hub');
    if (cur < 0) wireDoor();
    wireCoin();
    strips = [].slice.call(doc.querySelectorAll('.strip'));
    if (window.IntersectionObserver) {
      eio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) root.dataset.era = e.target.dataset.era; }); }, { rootMargin: '-50% 0px -50% 0px' });
      doc.querySelectorAll('#hero,#hub,.bh,.ch,.bn').forEach(function (s) { eio.observe(s); });
      rio = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          var t = e.target;
          t.classList.add('in'); rio.unobserve(t);
          if (t.classList.contains('cu')) run(t);
          if (t.classList.contains('bn')) { mark(BL[cur].id); paintToc(); }
          paintPill();
        });
      }, { rootMargin: '0px 0px -8% 0px' });
      doc.querySelectorAll('.rv,.cu,.bn,.sp-c').forEach(function (e) { rio.observe(e); });
    } else doc.querySelectorAll('.rv,.bn,.sp-c').forEach(function (e) { e.classList.add('in'); });
    paintPill();
    if (window.TUN) TUN.prep(cur < 0 ? 'back' : BL[cur + 1] ? BL[cur + 1].tun : 'big');
    frame();
  }
  function render() {
    var m = /^#b([1-6])$/.exec(location.hash), hub = location.hash === '#hub';
    cur = m ? +m[1] - 1 : -1;
    root.dataset.view = m ? 'block' : 'hub';
    app.innerHTML = m ? blockHTML(cur) : hubHTML();
    doc.title = (m ? tx(BL[cur].h) + '｜' : '') + '慈善｜媽媽，慈濟是什麼？';
    scrollTo(0, 0);
    wire();
    if (hub) doc.getElementById('hub').scrollIntoView();
  }
  /* 換段都走時空隧道；瀏覽器上一頁不走 */
  function go(i) {
    var b = BL[i], tg = '#' + b.id;
    if (!window.TUN) { location.hash = tg; return; }
    TUN.play(b.tun, { q: tx(askOf(b)), skip: tx(U.skip), mid: function () { if (location.hash === tg) render(); else location.hash = tg; } });
  }
  doc.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-go]');
    if (a) { e.preventDefault(); toc.hidden = true; go(+a.dataset.go); return; }
    var w = e.target.closest && e.target.closest('#watch,#read,#toroad');
    if (!w) return;
    e.preventDefault();
    if (w.id === 'watch') { fl.hidden = false; root.style.overflow = 'hidden'; fv.play(); }
    else if (w.id === 'read') doc.getElementById('hub').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    else if (window.TUN) TUN.play('big', { q: tx(U.road), skip: tx(U.skip), end: function () { location.href = 'index.html#road'; } });
    else location.href = 'index.html#road';
  });
  pb.onclick = function (e) { e.stopPropagation(); toc.hidden = !toc.hidden; pb.setAttribute('aria-expanded', !toc.hidden); };
  doc.addEventListener('click', function (e) { if (!toc.hidden && !toc.contains(e.target)) toc.hidden = true; });

  var tick = false, wide = matchMedia('(hover:hover) and (pointer:fine)');
  function frame() {
    tick = false;
    var m = doc.documentElement.scrollHeight - innerHeight;
    bar.style.transform = 'scaleX(' + (m > 0 ? scrollY / m : 0) + ')';
    /* 膠卷：桌面跟著滾動慢慢拉過去，手機用手指滑 */
    if (wide.matches && !reduce) strips.forEach(function (s) {
      var r = s.getBoundingClientRect(), mx = s.scrollWidth - s.clientWidth;
      if (mx > 0 && r.bottom > 0 && r.top < innerHeight) s.scrollLeft = mx * Math.min(1, Math.max(0, (innerHeight - r.bottom + r.height * .4) / (innerHeight * .75)));
    });
  }
  function ask() { if (!tick) { tick = true; requestAnimationFrame(frame); } }
  addEventListener('scroll', ask, { passive: true });
  addEventListener('resize', ask);
  addEventListener('hashchange', render);

  /* 燈箱 */
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
  doc.getElementById('filmx').onclick = closeFilm;
  addEventListener('keydown', function (e) { if (e.key !== 'Escape') return; if (!lb.hidden) closeLb(); if (!fl.hidden) closeFilm(); });

  /* 沿革篩選 */
  app.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('#flt button'); if (!b) return;
    var flt = doc.getElementById('flt'), rl = doc.getElementById('rl'), f = b.dataset.f;
    [].forEach.call(flt.children, function (c) { c.setAttribute('aria-pressed', c === b); });
    [].forEach.call(rl.children, function (li) { li.hidden = f !== 'all' && (' ' + li.dataset.t + ' ').indexOf(' ' + f + ' ') < 0; });
  });

  render();
})();
