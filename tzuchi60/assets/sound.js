/* 全站配樂。瀏覽器要等訪客點過一下才准出聲，所以第一次點擊才開始。
   M 是「哪一段放哪些曲」：home＝主頁，charity＝慈善總覽，b1–b6＝慈善六段。
   iPhone 不能用程式改 audio.volume，淡入淡出改走 Web Audio；別的瀏覽器直接改音量。 */
(function () {
  var M = window.TC60_MUSIC || {}, VOL = .5, d = document, K = 'tc60snd', P = 'tc60pos';
  var el = new Audio(), on = true, unlocked = false, area = '', list = [], idx = 0, hidden = false, vid = false, tUn = 0, ctx = null, g = null, cur = 0, raf = 0, pos = {};
  el.preload = 'none';
  try { on = localStorage.getItem(K) !== '0'; pos = JSON.parse(sessionStorage.getItem(P)) || {}; } catch (e) {}
  el.volume = .5; var fixedVol = el.volume !== .5; el.volume = 0;
  function level(v) { cur = v; if (g) g.gain.value = v; else if (!fixedVol) el.volume = v; }
  function fade(to, ms, cb) {
    cancelAnimationFrame(raf);
    var a = cur, t0 = 0;
    function step(n) {
      t0 = t0 || n; var t = Math.min(1, (n - t0) / ms);
      level(a + (to - a) * t);
      if (t < 1) raf = requestAnimationFrame(step); else if (cb) cb();
    }
    /* 分頁在背景時 rAF 不跑，直接到位 */
    if (d.hidden || !ms) { level(to); if (cb) cb(); } else raf = requestAnimationFrame(step);
  }
  function wiring() {
    if (!fixedVol || ctx || location.protocol === 'file:') return;
    var C = window.AudioContext || window.webkitAudioContext; if (!C) return;
    /* 手機開靜音鍵時 Web Audio 會被一起靜音，這行讓它照音樂播放處理 */
    try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) {}
    ctx = new C(); g = ctx.createGain(); g.gain.value = cur;
    ctx.createMediaElementSource(el).connect(g); g.connect(ctx.destination);
  }
  function save() {
    if (!area) return;
    pos[area] = { i: idx, t: el.currentTime || 0 }; pos.last = area; pos.on = !el.paused;
    try { sessionStorage.setItem(P, JSON.stringify(pos)); } catch (e) {}
  }
  function load(i, t) {
    idx = list.length ? i % list.length : 0;
    if (!list.length) return;
    el.src = 'assets/music/' + list[idx].f;
    if (t) el.addEventListener('loadedmetadata', function f() { el.removeEventListener('loadedmetadata', f); if (t < el.duration - 3) el.currentTime = t; });
  }
  function can() { return on && unlocked && !hidden && !vid && list.length; }
  function sync() {
    if (can()) {
      if (ctx && ctx.state === 'suspended') ctx.resume();
      var p = el.play(); if (p && p.catch) p.catch(function () {});
      fade(VOL, 1600);
    } else fade(0, 600, function () { el.pause(); });
    paint();
  }
  function setArea(a) {
    if (a === area) return;
    var next = M[a] || [], same = list.length && next.length && list[idx] && next.some(function (x) { return x.f === list[idx].f; });
    save(); area = a;
    /* 下一段含同一首就接著放，不重來 */
    if (same) { var f = list[idx].f; list = next; next.forEach(function (x, i) { if (x.f === f) idx = i; }); return; }
    var go = function () {
      var s = pos[a] || {}, was = pos.on, l = pos[pos.last], o = l && (M[pos.last] || [])[l.i];
      /* 換頁後同一首接著放 */
      if (o) next.forEach(function (x, i) { if (x.f === o.f) s = { i: i, t: l.t }; });
      list = next;
      load(s.i || 0, s.t || 0); sync(); if (was && !unlocked) unlock();
    };
    if (el.paused) go(); else fade(0, 900, go);
  }
  el.addEventListener('ended', function () { load(idx + 1, 0); sync(); });
  /* 滑動後的 touchend 不算手勢，play 會被拒，所以要 play 成功才算解鎖 */
  function unlock() {
    if (unlocked || !on || !list.length) return;
    wiring();
    if (ctx && ctx.state === 'suspended') ctx.resume();
    var p = el.play();
    if (p && p.then) p.then(opened).catch(function () {}); else opened();
  }
  function opened() { if (unlocked) return; unlocked = true; tUn = Date.now(); sync(); }
  ['click', 'touchend', 'keydown'].forEach(function (n) { d.addEventListener(n, unlock, true); });
  /* 片子有自己的聲音，配樂讓開；門的那段影片是靜音的，不算 */
  d.addEventListener('play', function (e) { if (e.target.tagName === 'VIDEO' && !e.target.muted) { vid = true; sync(); } }, true);
  ['pause', 'ended'].forEach(function (n) { d.addEventListener(n, function (e) { if (e.target.tagName === 'VIDEO' && !e.target.muted && vid) { vid = false; sync(); } }, true); });
  d.addEventListener('visibilitychange', function () { hidden = d.hidden; sync(); });
  addEventListener('pagehide', save);

  var b, txt;
  function paint() {
    if (!b) return;
    var wait = on && !unlocked;
    b.setAttribute('aria-pressed', on); b.classList.toggle('off', !on); b.classList.toggle('wait', wait);
    txt.innerHTML = wait ? '<span class="zh">點一下開聲音</span><span class="en" lang="en">Tap for sound</span>' : on ? '<span class="zh">聲音開</span><span class="en" lang="en">Sound on</span>' : '<span class="zh">聲音關</span><span class="en" lang="en">Sound off</span>';
  }
  function ui() {
    var s = d.createElement('style');
    s.textContent = '#snd{position:fixed;right:16px;bottom:16px;z-index:85;display:flex;align-items:center;gap:7px;min-height:44px;padding:0 14px;border:0;border-radius:22px;background:#17120cd9;color:#f6ecd9;font:14px/1 system-ui,sans-serif;cursor:pointer;box-shadow:0 2px 10px #0005}#snd svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}#snd .w{display:block}#snd .x{display:none}#snd.off .w{display:none}#snd.off .x{display:block}#snd.wait{animation:sndp 2.4s ease-in-out infinite}@keyframes sndp{50%{box-shadow:0 0 0 7px #f6ecd933}}@media(prefers-reduced-motion:reduce){#snd.wait{animation:none}}html.intro #snd{z-index:1001}@media(max-width:640px){#snd{bottom:62px}#snd:not(.wait) span{display:none}#snd:not(.wait){padding:0 13px}}';
    d.head.appendChild(s);
    b = d.createElement('button'); b.id = 'snd'; b.type = 'button'; b.setAttribute('aria-label', '配樂開關 Music on or off');
    b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path class="w" d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11"/><path class="x" d="M16 9.5l5 5m0-5l-5 5"/></svg><span></span>';
    txt = b.lastChild; d.body.appendChild(b);
    b.addEventListener('click', function (e) {
      /* 第一次點這顆就是要聽，不要反而關掉 */
      if (b.classList.contains('wait') || Date.now() - tUn < 700) return;
      on = !on;
      try { localStorage.setItem(K, on ? '1' : '0'); } catch (x) {}
      if (on) unlock();
      sync();
    });
    paint();
  }
  /* 還沒放曲子就不要出現開關 */
  if (Object.keys(M).length) { if (d.body) ui(); else addEventListener('DOMContentLoaded', ui); }
  window.SND = { area: setArea, el: el };
})();
