/* 共用：本機記錄（只存在這台裝置） */
var XL = (function () {
  function get(k, d) { try { var v = localStorage.getItem('xl:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }
  function set(k, v) { try { localStorage.setItem('xl:' + k, JSON.stringify(v)); } catch (e) {} }
  function mins(chars) { return Math.max(3, Math.round(chars / 300 / 5) * 5 || 5); }
  function ch(id) { return (window.XL_CHAPTERS || []).filter(function (c) { return c.id === id; })[0]; }
  function title(c) { return c.t + (c.s ? '・' + c.s : ''); }
  return { get: get, set: set, mins: mins, ch: ch, title: title };
})();

/* ---------- 首頁 ---------- */
function xlIndex() {
  var list = window.XL_CHAPTERS, ready = window.XL_READY, done = XL.get('done', []);
  var groups = [], byKey = {};
  list.forEach(function (c) {
    var k = c.vol + '|' + c.part;
    if (!byKey[k]) { byKey[k] = { vol: c.vol, part: c.part, items: [] }; groups.push(byKey[k]); }
    byKey[k].items.push(c);
  });
  var html = '', lastVol = 0;
  groups.forEach(function (g) {
    if (g.vol !== lastVol) { html += '<div class="vol">' + (g.vol === 1 ? '第一冊' : '第二冊') + '</div>'; lastVol = g.vol; }
    var hasReady = g.items.some(function (c) { return ready.indexOf(c.id) > -1; });
    var first = g.items[0], last = g.items[g.items.length - 1];
    html += '<details class="grp"' + (hasReady ? ' open' : '') + '><summary>' + g.part +
      ' <span class="cnt">' + g.items.length + ' 章</span><span class="bar">原書 p.' + first.ps + '–' + last.pe + '</span></summary><ol class="chs">';
    g.items.forEach(function (c) {
      var ok = ready.indexOf(c.id) > -1, isDone = done.indexOf(c.id) > -1;
      var tt = '<span class="tt">' + c.t + (c.s ? '<small>' + c.s + '</small>' : '') + '</span>';
      var st = '<span class="st">' + (ok ? '<span class="tag red">樣章・可閱讀</span> ' : '') +
        'p.' + c.ps + '–' + c.pe + '　約 ' + XL.mins(c.chars) + ' 分鐘' + (c.split ? '　分' + c.split.join('／') : '') + (ok ? '' : '　籌備中') + '</span>';
      var inner = '<span class="no">' + c.n + '</span>' + tt + st;
      html += '<li class="' + (ok ? 'ready' : '') + (isDone ? ' done' : '') + '">' +
        (ok ? '<a href="' + c.id + '.html" style="display:contents">' + inner + '</a>' : inner) + '</li>';
    });
    html += '</ol></details>';
  });
  document.getElementById('dir').innerHTML = html;

  var p = XL.get('progress', null), r = document.getElementById('resume');
  if (p && p.ch && r) {
    var c = XL.ch(p.ch);
    if (c) {
      r.href = p.ch + '.html' + (p.sec ? '#' + p.sec : '');
      r.innerHTML = '<em>上次讀到</em><strong>' + XL.title(c) + '</strong>' + (p.label ? '　' + p.label : '') + '　→ 繼續讀';
      r.classList.add('on');
    }
  }
}

/* ---------- 章節頁 ---------- */
function xlChapter(id) {
  var secs = [].slice.call(document.querySelectorAll('[data-sec]'));
  var links = {}; [].forEach.call(document.querySelectorAll('.route a'), function (a) { links[a.getAttribute('href').slice(1)] = a; });
  var seen = XL.get(id + ':seen', []);
  seen.forEach(function (s) { links[s] && links[s].classList.add('seen'); });
  var bar = document.querySelector('.prog i'), pct = document.querySelector('.topbar .pct');
  var main = document.querySelector('.main');

  function onScroll() {
    var top = main.getBoundingClientRect().top + window.scrollY, h = main.offsetHeight - window.innerHeight * .6;
    var r = Math.min(1, Math.max(0, (window.scrollY - top + window.innerHeight * .3) / h));
    bar.style.width = (r * 100).toFixed(1) + '%'; pct.textContent = Math.round(r * 100) + '%';
    var cur = null;
    secs.forEach(function (s) { if (s.getBoundingClientRect().top < window.innerHeight * .35) cur = s; });
    for (var k in links) links[k].classList.toggle('on', cur && cur.id === k);
    if (cur) {
      var a = links[cur.id];
      if (a && window.innerWidth <= 1180) { var rt = a.parentNode.parentNode.parentNode; var x = a.offsetLeft - 24; if (Math.abs(rt.scrollLeft - x) > 40) rt.scrollTo({ left: x, behavior: 'smooth' }); }
      if (seen.indexOf(cur.id) < 0) { seen.push(cur.id); XL.set(id + ':seen', seen); a && a.classList.add('seen'); }
      XL.set('progress', { ch: id, sec: cur.id, label: cur.getAttribute('data-sec'), t: Date.now() });
      if (cur.id === 'look') { var d = XL.get('done', []); if (d.indexOf(id) < 0) { d.push(id); XL.set('done', d); } }
    }
  }
  var tick = false;
  window.addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(function () { tick = false; onScroll(); }); } }, { passive: true });
  onScroll();

  /* 互動 A：讀前關注點（可多選） */
  var fa = XL.get(id + ':focus', []);
  [].forEach.call(document.querySelectorAll('#askA .chip'), function (b) {
    var v = b.getAttribute('data-v');
    b.setAttribute('aria-pressed', fa.indexOf(v) > -1);
    b.addEventListener('click', function () {
      var i = fa.indexOf(v);
      if (v === '先讀下去') fa = i > -1 ? [] : ['先讀下去'];
      else { fa = fa.filter(function (x) { return x !== '先讀下去'; }); i = fa.indexOf(v); i > -1 ? fa.splice(i, 1) : fa.push(v); }
      XL.set(id + ':focus', fa);
      [].forEach.call(document.querySelectorAll('#askA .chip'), function (c) { c.setAttribute('aria-pressed', fa.indexOf(c.getAttribute('data-v')) > -1); });
      showA();
    });
  });
  function showA() {
    var fb = document.querySelector('#askA .fb'), rv = document.getElementById('revisitA');
    var txt = fa.length ? (fa[0] === '先讀下去' ? '好，那就先讀下去，讀完再回頭看看。' : '記下了：' + fa.join('、') + '。讀到章末，我們再回來對照。') : '';
    if (fb) fb.textContent = txt;
    if (rv) rv.textContent = fa.length && fa[0] !== '先讀下去' ? '你讀前選的是：' + fa.join('、') + '。' : '你讀前沒有選關注點，現在正好想一想。';
  }
  showA();

  /* 互動 B：選一位院友的行動 */
  var pk = XL.get(id + ':pick', null);
  var btns = [].slice.call(document.querySelectorAll('#pickB button'));
  function showB() {
    btns.forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-v') === pk); });
    var fb = document.getElementById('pickFb');
    var b = btns.filter(function (x) { return x.getAttribute('data-v') === pk; })[0];
    if (!b) { fb.classList.remove('on'); return; }
    fb.querySelector('blockquote').textContent = b.getAttribute('data-q');
    fb.querySelector('.src').textContent = '原文 p.' + b.getAttribute('data-p');
    fb.classList.add('on');
  }
  btns.forEach(function (b) { b.addEventListener('click', function () { pk = b.getAttribute('data-v'); XL.set(id + ':pick', pk); showB(); }); });
  showB();

  /* 我的一句記錄 */
  var ta = document.getElementById('myNote'), sv = document.querySelector('.note .saved'), tmr;
  if (ta) {
    ta.value = XL.get(id + ':note', '');
    ta.addEventListener('input', function () { clearTimeout(tmr); tmr = setTimeout(function () { XL.set(id + ':note', ta.value); sv.textContent = '已存在這台裝置　' + new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' }); }, 400); });
  }

  /* 看大圖 */
  var lb = document.createElement('div'); lb.className = 'lb'; lb.innerHTML = '<img alt=""><p></p>'; document.body.appendChild(lb);
  lb.addEventListener('click', function () { lb.classList.remove('on'); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') lb.classList.remove('on'); });
  [].forEach.call(document.querySelectorAll('figure.ph img'), function (im) {
    im.addEventListener('click', function () {
      lb.querySelector('img').src = im.src; lb.querySelector('img').alt = im.alt;
      lb.querySelector('p').textContent = im.closest('figure').querySelector('figcaption').textContent;
      lb.classList.add('on');
    });
  });
}
