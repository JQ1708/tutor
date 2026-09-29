/* IGCSE Gaming Section — DOM, state, storage. Logic lives in game-core.js. ("level" in code = "Set" on screen.) */
(function () {
  'use strict';

  var G = window.GameCore;
  var BANK = window.__GAME_BANK__;
  var IMG_BASE = './';
  var KEY = 'igcseGame.v1';
  var params = new URLSearchParams(location.search);
  var DEMO = params.get('demo');            // map | play | feedback | review | cert  (screenshots only, never writes storage)

  var $ = function (id) { return document.getElementById(id); };
  var levels = {};
  BANK.levels.forEach(function (l) { levels[l.id] = l; });

  var store = { v: 1, name: '', done: {}, prog: {} };
  var who = null;                            // email from Cloudflare Access, or the name the student typed
  var state = null;                          // state of the set being played
  var setId = null;
  var rng = Math.random;
  var confettiRaf = 0;

  /* ───────── storage (never throws) ───────── */
  function loadStore() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var o = JSON.parse(raw);
        if (o && o.v === 1) {
          store = { v: 1, name: o.name || '', done: o.done || {}, prog: o.prog || {} };
        }
      }
    } catch (e) { /* storage blocked or corrupt: start clean, game still works */ }
    if (store.name) who = store.name;
  }

  function saveStore() {
    if (DEMO) return;
    try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* ignore */ }
  }

  function persist() {
    if (DEMO || !state) return;
    store.prog[setId] = state;
    saveStore();
  }

  /* ───────── identity ───────── */
  function loadIdentity() {
    if (DEMO || typeof fetch !== 'function') return;
    var ctl = typeof AbortController === 'function' ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctl) ctl.abort(); }, 3500);
    fetch('/cdn-cgi/access/get-identity', { credentials: 'same-origin', signal: ctl ? ctl.signal : undefined })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error('no identity')); })
      .then(function (j) { if (j && j.email) who = j.email; })
      .catch(function () { /* fall back to the name box when a certificate is needed */ })
      .then(function () { clearTimeout(timer); });
  }

  /* ───────── views ───────── */
  var VIEWS = ['v-map', 'v-play', 'v-intro', 'v-cert'];
  function showView(id) {
    VIEWS.forEach(function (v) { $(v).classList.toggle('hidden', v !== id); });
    if (id !== 'v-cert') stopConfetti();
    window.scrollTo(0, 0);
  }

  function show(el, on) { el.classList.toggle('hidden', !on); }

  function progressText(s) {
    if (s.round === 0) return 'Question ' + Math.min(s.pos + 1, s.queue.length) + ' / ' + s.queue.length;
    return reviewText(s);
  }

  function reviewText(s) {
    var n = s.wrong.length;
    return 'Review round ' + s.round + ' — ' + n + (n === 1 ? ' question' : ' questions') + ' left to fix';
  }

  /* ───────── map ───────── */
  function renderMap() {
    var grid = $('setGrid');
    grid.innerHTML = '';
    BANK.levels.forEach(function (l) {
      var b = document.createElement('button');
      b.type = 'button';
      var done = !!store.done[l.id];
      var p = store.prog[l.id];
      b.className = 'tile' + (done ? ' done' : p ? ' prog' : '');
      var status = done ? 'Done ✓' : p && p.phase !== 'done' ? (p.round === 0 ? 'Question ' + Math.min(p.pos + 1, p.queue.length) + ' / ' + p.queue.length : 'Review round ' + p.round) : '';
      b.innerHTML = '<span class="tn">Set ' + l.n + '</span><span class="ts">' + status + '</span>';
      if (p && !done) {
        var frac = p.round === 0 ? p.pos / p.queue.length : Math.min(p.total / G.PASS, 1);
        b.insertAdjacentHTML('beforeend', '<span class="pbar"><i style="width:' + Math.round(frac * 100) + '%"></i></span>');
      }
      b.addEventListener('click', function () { openSet(l.id); });
      grid.appendChild(b);
    });
  }

  function toMap() {
    renderMap();
    showView('v-map');
  }

  /* ───────── set sheet ───────── */
  var sheetFor = null;
  function openSet(id) {
    sheetFor = id;
    var l = levels[id], p = store.prog[id];
    $('dlgSetTitle').textContent = 'Set ' + l.n;
    var sub = store.done[id] ? 'Done ✓' : '';
    if (p) sub = progressText(p);
    show($('dlgView'), !!store.done[id] && !p);
    $('dlgSetSub').textContent = sub;
    $('dlgStart').textContent = p ? 'Continue set' : 'Start set';
    show($('dlgRestart'), !!p);
    show($('dlgSet'), true);
    $('dlgStart').focus();
  }

  function closeSheet() { show($('dlgSet'), false); }

  function viewResults() {                     // reopen a finished set's certificate + review list
    closeSheet();
    setId = sheetFor;
    state = G.viewState(setId, store.done[setId]);
    showCertificate();
  }

  /* ───────── play ───────── */
  function beginSet(id, fresh) {
    setId = id;
    var l = levels[id];
    if (fresh || !store.prog[id]) {
      state = G.startLevel(l, Date.now());
      G.show(state, BANK, rng, Date.now());
      persist();
    } else {
      state = store.prog[id];
      state.lastTick = Date.now();
    }
    resume();
  }

  function resume() {
    if (state.phase === 'done') return showCertificate();
    if (state.phase === 'intro') return showIntro();
    if (!state.cur) G.show(state, BANK, rng, Date.now());
    showView('v-play');
    renderPlay();
  }

  function renderPlay() {
    var v = G.view(state, BANK);
    var card = v.card;
    $('setTag').textContent = 'Set ' + levels[setId].n;
    $('stQ').textContent = 'Question ' + v.index + ' / ' + v.of;
    $('stC').textContent = 'Correct: ' + v.correct;
    var banner = $('roundBanner');
    show(banner, state.round > 0);
    if (state.round > 0) banner.textContent = reviewText(state);
    var answered = v.chosen !== null ? 1 : 0;
    var frac = state.round === 0 ? (v.index - 1 + answered) / v.of : Math.min(state.total / G.PASS, 1);
    $('barFill').style.width = Math.round(frac * 100) + '%';

    $('topicTag').textContent = BANK.topics[card.topic] || '';
    $('qText').innerHTML = card.q;

    var fig = $('fig');
    if (card.img) { $('figImg').src = IMG_BASE + card.img; show(fig, true); } else { $('figImg').removeAttribute('src'); show(fig, false); }

    var box = $('opts');
    box.className = 'opts' + (v.generic ? ' gen' : '');
    box.innerHTML = '';
    for (var i = 0; i < 4; i++) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'opt';
      b.dataset.i = i;
      b.innerHTML = '<span class="lt">' + G.LETTERS[i] + '</span>' + (v.generic ? '' : '<span class="ot">' + v.opts[i] + '</span>');
      b.addEventListener('click', onChoose.bind(null, i));
      box.appendChild(b);
    }
    show($('feedback'), false);
    show($('why'), false);
    show($('btnNext'), false);
    if (v.chosen !== null) applyFeedback(v.chosen === v.right, v.chosen, false);
  }

  function onChoose(i) {
    if (!state || state.phase !== 'question') return;
    var res = G.answer(state, i, Date.now());
    if (!res) return;
    persist();
    applyFeedback(res.right, i, true);
  }

  function applyFeedback(ok, chosen, scroll) {
    var v = G.view(state, BANK);
    var btns = $('opts').children;
    for (var i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
      if (i === v.right) btns[i].classList.add('right');
      else if (i === chosen) btns[i].classList.add('wrong');
      else btns[i].classList.add('dim');
    }
    var fb = $('feedback');
    fb.className = 'feedback ' + (ok ? 'ok' : 'no');
    fb.textContent = ok ? 'Correct!' : 'Not quite — the answer is ' + v.letter + '.';
    var why = $('why');
    if (v.why) { why.innerHTML = v.why; show(why, true); } else show(why, false);
    $('stC').textContent = 'Correct: ' + state.total;
    var frac = state.round === 0 ? v.index / v.of : Math.min(state.total / G.PASS, 1);
    $('barFill').style.width = Math.round(frac * 100) + '%';
    var nb = $('btnNext');
    show(nb, true);
    if (scroll) {
      nb.focus({ preventScroll: true });
      try { nb.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) { /* ignore */ }
    }
  }

  function onNext() {
    if (!state || state.phase !== 'feedback') return;
    var r = G.nextQuestion(state, rng, Date.now());
    if (r === 'question') {
      G.show(state, BANK, rng, Date.now());
      persist();
      renderPlay();
      window.scrollTo(0, 0);
    } else if (r === 'intro') {
      persist();
      showIntro();
    } else {
      state.finishedAt = G.isoNoMs(new Date());
      persist();
      showCertificate();
    }
  }

  function showIntro() {
    $('introText').textContent = 'You scored ' + state.firstTry + ' / ' + state.queue.length +
      ". Let's fix the ones you missed — same questions, you need 40 to finish.";
    showView('v-intro');
  }

  function onIntroNext() {
    G.beginReview(state, rng, Date.now());
    G.show(state, BANK, rng, Date.now());
    persist();
    showView('v-play');
    renderPlay();
  }

  function leave() {
    persist();
    toMap();
  }

  /* ───────── certificate ───────── */
  var cert = null;                            // {fields, code, dateText, timeText}

  function showCertificate() {
    if (!who) { askName(showCertificate); return; }
    var when = new Date(state.finishedAt || Date.now());
    var f = G.certFields(state, levels[setId], who, when);
    cert = {
      f: f, code: G.certCode(f), when: when,
      dateText: G.formatDateTime(when), timeText: G.formatDuration(state.done.activeMs)
    };
    $('cStudent').textContent = who;
    $('cSet').textContent = f.setName;
    $('cDate').textContent = cert.dateText;
    $('cIso').textContent = f.isoTime;
    $('cFirst').textContent = f.firstTry + ' / ' + state.order.length;
    $('cFinal').textContent = f.final + ' / ' + state.order.length;
    $('cRounds').textContent = String(f.rounds);
    $('cTime').textContent = state.done.activeMs == null ? '—' : cert.timeText;
    $('cCode').textContent = cert.code;
    renderReview();
    showView('v-cert');
    startConfetti();
  }

  /* ───────── questions to review (first-round misses, under the certificate) ───────── */
  var REVIEW_INTRO = 'These are the questions you got wrong on your first try. Read the answer and the explanation for each one.';
  var reviewCount = 0;

  function reviewCard(e, n) {
    var card = BANK.cards[e.id];
    if (!card) return '';
    var rightSlot = e.perm.indexOf(card.ans);
    var h = '<article class="rvCard"><div class="topicTag">' + (BANK.topics[card.topic] || '') + '</div>' +
      '<div class="q">' + card.q + '</div>';
    if (card.img) h += '<figure class="fig"><img src="' + IMG_BASE + card.img + '" alt="Question diagram"></figure>';
    if (card.opts) {
      h += '<ol class="rvOpts">';
      for (var i = 0; i < 4; i++) {
        h += '<li class="rvOpt' + (i === rightSlot ? ' right' : '') + '"><span class="lt">' + G.LETTERS[i] + '</span>' +
          '<span class="ot">' + card.opts[e.perm[i]] + '</span>' +
          (i === rightSlot ? '<span class="tick">✓ Correct answer</span>' : '') + '</li>';
      }
      h += '</ol>';
    } else {                                  // options live in the figure: letters are fixed, only mark the right one
      h += '<ol class="rvOpts gen">';
      for (var j = 0; j < 4; j++) {
        h += '<li class="rvOpt' + (j === rightSlot ? ' right' : '') + '"><span class="lt">' + G.LETTERS[j] + '</span>' +
          (j === rightSlot ? '<span class="tick">✓ Correct answer</span>' : '') + '</li>';
      }
      h += '</ol>';
    }
    var why = card.opts ? G.remapWhy(card.why, e.perm, card.ans) : card.why;
    if (why) h += '<div class="why"><span class="whyLbl">Why</span>' + why + '</div>';
    return h + '</article>';
  }

  function renderReview() {
    var fw = Array.isArray(state.firstWrong) ? state.firstWrong : null;   // saved progress from before this feature: null
    var list = $('reviewList');
    list.innerHTML = '';
    reviewCount = 0;
    $('reviewIntro').textContent = '';
    if (!fw) {
      $('reviewTitle').textContent = 'Questions to review';
      $('reviewIntro').textContent = 'No review list for this attempt. Play the set again to get one.';
      $('printHead').textContent = '';
    } else if (!fw.length) {
      $('reviewTitle').textContent = 'Questions to review';
      $('reviewIntro').textContent = 'Perfect first try — no questions to review!';
      $('printHead').textContent = '';
    } else {
      reviewCount = fw.length;
      $('reviewTitle').textContent = 'Questions to review · ' + fw.length;
      $('reviewIntro').textContent = REVIEW_INTRO;
      $('printHead').textContent = 'IGCSE Chemistry · ' + cert.f.setName + ' — questions to review · ' + who + ' · ' +
        cert.dateText + ' · First try ' + cert.f.firstTry + ' / ' + state.order.length;
      list.innerHTML = fw.map(reviewCard).join('');
    }
    show($('btnPdf'), reviewCount > 0);
    var jump = $('certJump');
    jump.textContent = '↓ See the ' + reviewCount + ' question' + (reviewCount === 1 ? '' : 's') + ' to review';
    show(jump, reviewCount > 0);
  }

  function jumpToReview(e) { e.preventDefault(); $('reviewWrap').scrollIntoView({ behavior: 'smooth', block: 'start' }); }

  function savePdf() { if (reviewCount > 0) window.print(); }

  function finishToMap() {
    if (state && state.phase === 'done' && !DEMO) {
      store.done[setId] = G.doneRecord(state);
      delete store.prog[setId];
      saveStore();
    }
  }

  function onBack() { finishToMap(); state = null; toMap(); }

  function onAgain() {
    var id = setId;
    finishToMap();
    if (DEMO) { toMap(); return; }
    beginSet(id, true);
  }

  /* ───────── name box ───────── */
  var afterName = null;
  function askName(cb) {
    afterName = cb;
    show($('dlgName'), true);
    $('nameInput').value = '';
    setTimeout(function () { $('nameInput').focus(); }, 30);
  }

  function onNameSubmit(e) {
    e.preventDefault();
    var v = $('nameInput').value.trim();
    if (!v) return;
    who = v;
    store.name = v;
    saveStore();
    show($('dlgName'), false);
    if (afterName) { var f = afterName; afterName = null; f(); }
  }

  /* ───────── confetti (hand-written, ~4 s) ───────── */
  function stopConfetti() {
    if (confettiRaf) cancelAnimationFrame(confettiRaf);
    confettiRaf = 0;
    var c = $('confetti');
    if (c && c.getContext) c.getContext('2d').clearRect(0, 0, c.width, c.height);
  }

  function startConfetti() {
    stopConfetti();
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var c = $('confetti');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = c.clientWidth || window.innerWidth, H = c.clientHeight || window.innerHeight;
    c.width = W * dpr; c.height = H * dpr;
    var ctx = c.getContext('2d');
    ctx.scale(dpr, dpr);
    var colors = ['#f2b632', '#ffffff', '#39b87a', '#ff6b5a', '#7cc4ff', '#c99bff'];
    var ps = [];
    for (var i = 0; i < 170; i++) {
      ps.push({
        x: W / 2 + (Math.random() - 0.5) * W * 0.3, y: H * 0.35,
        vx: (Math.random() - 0.5) * 16, vy: -Math.random() * 15 - 3,
        w: 6 + Math.random() * 7, h: 9 + Math.random() * 8,
        r: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.4,
        c: colors[i % colors.length]
      });
    }
    var t0 = performance.now(), last = t0, LIFE = 4000;
    function frame(now) {
      var dt = Math.min((now - last) / 16.67, 3);
      last = now;
      var age = now - t0;
      ctx.clearRect(0, 0, W, H);
      var alpha = age > LIFE - 800 ? Math.max(0, (LIFE - age) / 800) : 1;
      ctx.globalAlpha = alpha;
      ps.forEach(function (p) {
        p.vy += 0.32 * dt; p.vx *= 0.995; p.x += p.vx * dt; p.y += p.vy * dt; p.r += p.vr * dt;
        ctx.save();
        ctx.translate(p.x, p.y); ctx.rotate(p.r);
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      if (age < LIFE) confettiRaf = requestAnimationFrame(frame);
      else { ctx.clearRect(0, 0, W, H); confettiRaf = 0; }
    }
    confettiRaf = requestAnimationFrame(frame);
  }

  /* ───────── save as image (canvas, no library) ───────── */
  function rr(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function fitText(ctx, text, maxW, size, weight, family) {
    var s = size;
    do { ctx.font = weight + ' ' + s + 'px ' + family; s -= 2; } while (ctx.measureText(text).width > maxW && s > 18);
  }

  function drawCert() {
    var W = 1200, H = 1500, f = cert.f;
    var c = document.createElement('canvas');
    c.width = W; c.height = H;
    var ctx = c.getContext('2d');
    var SANS = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    var MONO = 'ui-monospace,"SF Mono",Menlo,monospace';
    var g = ctx.createRadialGradient(W / 2, 0, 60, W / 2, 200, 1300);
    g.addColorStop(0, '#17a2a0'); g.addColorStop(0.5, '#0d6d6d'); g.addColorStop(1, '#0b4c55');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#dff2f1'; ctx.font = '600 34px ' + SANS;
    ctx.fillText('IGCSE Chemistry — Gaming Section', W / 2, 96);
    ctx.fillStyle = '#fff7d6'; ctx.font = '900 104px ' + SANS;
    ctx.fillText('SET COMPLETE!', W / 2, 220);

    var x = 80, y = 290, w = W - 160, h = 1000;
    ctx.save(); ctx.shadowColor = 'rgba(0,0,0,.4)'; ctx.shadowBlur = 50; ctx.shadowOffsetY = 20;
    rr(ctx, x, y, w, h, 40); ctx.fillStyle = '#fbfaf6'; ctx.fill(); ctx.restore();
    rr(ctx, x, y, w, h, 40); ctx.lineWidth = 6; ctx.strokeStyle = '#e3a51b'; ctx.stroke();

    ctx.textAlign = 'left';
    var colL = x + 60, colR = x + w / 2 + 20, colW = w / 2 - 80;
    function field(label, value, cx, cy, maxW, opts) {
      opts = opts || {};
      ctx.fillStyle = '#5d6b72'; ctx.font = '800 24px ' + SANS;
      ctx.fillText(label.toUpperCase().split('').join(String.fromCharCode(8202)), cx, cy);
      ctx.fillStyle = opts.color || '#1e2a30';
      fitText(ctx, value, maxW, opts.size || 46, opts.mono ? '700' : '800', opts.mono ? MONO : SANS);
      ctx.fillText(value, cx, cy + (opts.size || 46) + 4);
    }
    field('Student', who, colL, y + 90, w - 120);
    field('Set', f.setName, colL, y + 250, colW);
    field('Date & time', cert.dateText, colR, y + 250, colW, { size: 36 });
    ctx.fillStyle = '#5d6b72'; ctx.font = '22px ' + MONO;
    fitText(ctx, f.isoTime, colW, 24, '400', MONO);
    ctx.fillText(f.isoTime, colR, y + 250 + 36 + 44);
    var total = state.order.length;
    field('First try', f.firstTry + ' / ' + total, colL, y + 460, colW);
    field('Final', f.final + ' / ' + total, colR, y + 460, colW);
    field('Review rounds', String(f.rounds), colL, y + 640, colW);
    field('Time taken', cert.timeText, colR, y + 640, colW);
    field('Code', cert.code, colL, y + 820, w - 120, { mono: true, size: 72, color: '#0a6767' });

    ctx.textAlign = 'center';
    ctx.fillStyle = '#dff2f1'; ctx.font = '600 28px ' + SANS;
    ctx.fillText('Send this to your teacher.', W / 2, 1380);
    return c;
  }

  function saveImage() {
    if (!cert) return;
    var c = drawCert();
    var name = 'IGCSE-' + cert.f.setId + '-' + G.stamp(cert.when) + '.png';
    var done = function (blob) {
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url; a.download = name;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
    };
    if (c.toBlob) c.toBlob(function (b) { if (b) done(b); }, 'image/png');
  }

  /* ───────── lightbox ───────── */
  function openLightbox() {
    var src = $('figImg').getAttribute('src');
    if (!src) return;
    $('lbImg').src = src;
    show($('lightbox'), true);
  }
  function closeLightbox() { show($('lightbox'), false); }

  /* ───────── keyboard ───────── */
  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key;
    if (k === 'Escape') { closeLightbox(); closeSheet(); show($('dlgRestartC'), false); return; }
    if (!$('dlgName').classList.contains('hidden')) return;
    if (!$('v-play').classList.contains('hidden') && state) {
      if (state.phase === 'question') {
        var i = '1234'.indexOf(k);
        if (i < 0) i = 'abcd'.indexOf(String(k).toLowerCase());
        if (i >= 0 && String(k).length === 1) { e.preventDefault(); onChoose(i); }
      } else if (state.phase === 'feedback' && (k === 'Enter')) {
        e.preventDefault(); onNext();
      }
    } else if (!$('v-intro').classList.contains('hidden') && k === 'Enter') {
      e.preventDefault(); onIntroNext();
    }
  });

  /* ───────── demo data (screenshots only) ───────── */
  function simulate(level, n, wrongAt) {
    var s = G.startLevel(level, 1000000), r = G.mulberry32(11), t = 1000000;
    for (var i = 0; i < n; i++) {
      G.show(s, BANK, r, t);
      var bad = wrongAt(i);
      G.answer(s, bad ? (s.cur.right + 1) % 4 : s.cur.right, t += 21000);
      var res = G.nextQuestion(s, r, t += 3000);
      if (res === 'intro') G.beginReview(s, r, t);
      if (res === 'done') { s.finishedAt = G.isoNoMs(new Date()); return s; }
    }
    if (s.phase === 'question' || s.phase === 'intro') { if (s.phase === 'intro') G.beginReview(s, r, t); G.show(s, BANK, r, t); }
    return s;
  }

  function demoOverrideCard() {
    var id = params.get('card');
    if (id && BANK.cards[id]) { state.queue[state.pos] = id; G.show(state, BANK, rng, Date.now()); }
  }

  function runDemo() {
    who = 'student@example.com';
    var l = levels[params.get('set') ? 'S' + ('0' + params.get('set')).slice(-2) : 'S03'] || levels.S03;
    setId = l.id;
    var mode = DEMO;
    if (mode === 'map') {
      store.done = { S01: { firstTry: 44 }, S02: { firstTry: 41 }, S05: { firstTry: 47 }, S06: { firstTry: 40 } };
      store.prog = { S03: simulate(levels.S03, 12, function (i) { return i === 3; }), S07: simulate(levels.S07, 50, function (i) { return i % 3 === 0; }) };
      toMap();
    } else if (mode === 'play' || mode === 'feedback') {
      state = simulate(l, 11, function (i) { return i === 3 || i === 8; });
      demoOverrideCard();
      if (mode === 'feedback') {
        var wrongSlot = (state.cur.right + 1) % 4;
        G.answer(state, params.get('ok') ? state.cur.right : wrongSlot, Date.now());
      }
      showView('v-play'); renderPlay();
    } else if (mode === 'review') {
      state = simulate(l, 50 + 3, function (i) { return i < 50 && i < 19; });
      // 31 right first try; 3 review answers right so far
      demoOverrideCard();
      showView('v-play'); renderPlay();
    } else if (mode === 'cert') {
      var nw = params.get('wrong');           // 0 = perfect first try · old = progress saved before the review list existed
      state = simulate(l, 50, function (i) { return nw === '0' ? false : (i === 4 || i === 17 || i === 33 || i === 40 || i === 41 || i === 48 || i === 20); });
      if (nw === 'old') delete state.firstWrong;
      state.finishedAt = G.isoNoMs(new Date());
      showCertificate();
      var sc = parseInt(params.get('scroll'), 10);   // screenshots only: scroll the certificate view down to the review list
      if (sc > 0) $('v-cert').scrollTop = sc;
    } else {
      toMap();
    }
  }

  /* ───────── wire up ───────── */
  $('btnNext').addEventListener('click', onNext);
  $('btnIntroNext').addEventListener('click', onIntroNext);
  $('btnLeave').addEventListener('click', leave);
  $('btnSave').addEventListener('click', saveImage);
  $('btnPdf').addEventListener('click', savePdf);
  $('certJump').addEventListener('click', jumpToReview);
  $('dlgView').addEventListener('click', viewResults);
  $('btnBack').addEventListener('click', onBack);
  $('btnAgain').addEventListener('click', onAgain);
  $('figImg').addEventListener('click', openLightbox);
  $('lightbox').addEventListener('click', closeLightbox);
  $('nameForm').addEventListener('submit', onNameSubmit);
  $('dlgSetX').addEventListener('click', closeSheet);
  $('dlgSet').addEventListener('click', function (e) { if (e.target === $('dlgSet')) closeSheet(); });
  $('dlgStart').addEventListener('click', function () { closeSheet(); beginSet(sheetFor, false); });
  $('dlgRestart').addEventListener('click', function () { show($('dlgRestartC'), true); });
  $('rsNo').addEventListener('click', function () { show($('dlgRestartC'), false); });
  $('rsYes').addEventListener('click', function () {
    show($('dlgRestartC'), false); closeSheet();
    delete store.prog[sheetFor]; saveStore();
    beginSet(sheetFor, true);
  });

  loadStore();
  loadIdentity();
  if (DEMO) runDemo(); else toMap();
})();
