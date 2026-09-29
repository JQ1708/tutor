/* IGCSE Gaming Section — pure game logic (no DOM). Works as window.GameCore and module.exports.
   A "level" in the code is what students see as a "Set" (50 fixed questions, id S03). */
(function (root) {
  'use strict';

  var PASS = 40;
  var SIZE = 50;
  var SALT = 'igcse-gaming-v1|k7Qz-4mXw-Lb2e';
  var IDLE_CAP_MS = 120000;              // one gap longer than this counts as 2 min (time away ≠ time taken)
  var LETTERS = ['A', 'B', 'C', 'D'];

  /* ───────── small helpers ───────── */
  function mulberry32(a) {
    a = a >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffle(arr, rng) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function cyrb53(str, seed) {
    var h1 = 0xdeadbeef ^ (seed || 0), h2 = 0x41c6ce57 ^ (seed || 0);
    for (var i = 0; i < str.length; i++) {
      var ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return [h1 >>> 0, h2 >>> 0];
  }

  function hex8(n) { var s = (n >>> 0).toString(16); while (s.length < 8) s = '0' + s; return s; }

  /* ───────── certificate code ───────── */
  function certCode(f) {
    var s = [f.setId, f.who, f.isoTime, f.firstTry, f.final, f.rounds, SALT].join('|');
    var h = cyrb53(s);
    return hex8(h[0] ^ h[1]).toUpperCase();
  }

  function verifyCert(f, code) {
    return String(code || '').trim().toUpperCase() === certCode(f);
  }

  /* "Set 3" → "S03" (also accepts an id as-is) */
  function parseSetId(text) {
    var t = String(text || '').trim();
    if (/^S\d{2,}$/i.test(t)) return t.toUpperCase();
    var m = /^Set\s+(\d+)$/i.exec(t);
    if (!m) return null;
    var b = m[1];
    if (b.length < 2) b = '0' + b;
    return 'S' + b;
  }

  function setName(level) { return 'Set ' + level.n; }

  /* ───────── date / time ───────── */
  function isoNoMs(d) { return d.toISOString().replace(/\.\d+Z$/, 'Z'); }

  var DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function gmtLabel(d) {                  // device time zone as GMT+8 / GMT-5 / GMT+5:30 (same wording on every browser)
    var off = -d.getTimezoneOffset();
    var sign = off < 0 ? '-' : '+';
    off = Math.abs(off);
    var h = Math.floor(off / 60), m = off % 60;
    return 'GMT' + sign + h + (m ? ':' + (m < 10 ? '0' : '') + m : '');
  }

  function formatDateTime(d) {            // Mon 29 Sep 2026, 21:47 (GMT+8)
    function p(n) { return (n < 10 ? '0' : '') + n; }
    return DAYS[d.getDay()] + ' ' + d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear() + ', ' +
      p(d.getHours()) + ':' + p(d.getMinutes()) + ' (' + gmtLabel(d) + ')';
  }

  function stamp(d) {                     // yyyymmdd-hhmm in the device's local time
    function p(n) { return (n < 10 ? '0' : '') + n; }
    return d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + '-' + p(d.getHours()) + p(d.getMinutes());
  }

  function formatDuration(ms) {
    var s = Math.max(0, Math.round(ms / 1000));
    var m = Math.floor(s / 60);
    s = s % 60;
    return m + ' min ' + (s < 10 ? '0' : '') + s + ' s';
  }

  /* ───────── state machine ─────────
     phase: 'question' → 'feedback' → (next) → 'question' | 'intro' | 'done'
     Everything in `state` is plain JSON so it can go into localStorage. */
  function startLevel(level, now) {
    return {
      levelId: level.id,
      order: level.ids.slice(),           // fixed first-round order (also the base order for review rounds)
      queue: level.ids.slice(),
      pos: 0,
      round: 0,                           // 0 = first round, n ≥ 1 = review round n
      firstTry: 0,
      total: 0,
      wrong: [],                          // ids still wrong, in set order
      firstWrong: [],                     // [{id, perm}] every question missed in round 0, first-round order; never shrinks
      phase: 'question',
      cur: null,                          // {id, perm, chosen, right}
      activeMs: 0,
      lastTick: now || 0,
      done: null                          // {firstTry, final, rounds, activeMs}
    };
  }

  function tick(state, now) {
    if (!now) return;
    if (state.lastTick) state.activeMs += Math.min(Math.max(now - state.lastTick, 0), IDLE_CAP_MS);
    state.lastTick = now;
  }

  /* Prepare the question at state.pos: pick the option order. Returns the view for the UI. */
  function show(state, bank, rng, now) {
    tick(state, now);
    var id = state.queue[state.pos];
    var card = bank.cards[id];
    var perm;
    if (card.opts) perm = shuffle([0, 1, 2, 3], rng);   // perm[k] = original index shown at slot k
    else perm = [0, 1, 2, 3];                            // options live in the image: letters fixed
    var right = perm.indexOf(card.ans);
    state.cur = { id: id, perm: perm, chosen: null, right: right };
    state.phase = 'question';
    return view(state, bank);
  }

  /* Explanations are written with the ORIGINAL option letters; the game shuffles options.
     Rewrite every bold option-letter token (<b>C</b>, <b>B, D</b>) and "option X" to the displayed letters,
     then put the correct option's block first and the others in displayed-letter order.
     A block = a line-leading <b>letter</b> line plus any unlettered lines that follow it. */
  var LEAD_RE = /^\s*<b>([A-D](?:\s*,\s*[A-D])*)<\/b>/;
  function remapWhy(why, perm, ansOrig) {
    if (!why || !perm) return why;
    var disp = function (o) { return LETTERS[perm.indexOf(o)]; };
    var sortedDisp = function (list) { return list.map(function (l) { return disp(LETTERS.indexOf(l)); }).sort(); };
    var fix = function (seg) {
      return seg
        .replace(/<b>([A-D](?:\s*,\s*[A-D])*)<\/b>/g, function (m, g) { return '<b>' + sortedDisp(g.split(/\s*,\s*/)).join(', ') + '</b>'; })
        .replace(/\b([Oo]ption )([A-D])\b/g, function (m, a, l) { return a + disp(LETTERS.indexOf(l)); });
    };
    var segs = why.split(/<br\s*\/?>/);
    var pre = [], blocks = [];
    segs.forEach(function (seg) {
      var m = LEAD_RE.exec(seg);
      if (m) {
        var orig = m[1].split(/\s*,\s*/).map(function (l) { return LETTERS.indexOf(l); });
        blocks.push({ correct: orig.indexOf(ansOrig) >= 0, key: sortedDisp(m[1].split(/\s*,\s*/))[0], lines: [fix(seg)] });
      } else if (blocks.length) blocks[blocks.length - 1].lines.push(fix(seg));
      else pre.push(fix(seg));
    });
    blocks.sort(function (a, b) {
      if (a.correct !== b.correct) return a.correct ? -1 : 1;
      return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
    });
    var out = pre;
    blocks.forEach(function (b) { out = out.concat(b.lines); });
    return out.join('<br>');
  }

  function view(state, bank) {
    var cur = state.cur;
    var card = bank.cards[cur.id];
    var opts = card.opts ? cur.perm.map(function (k) { return card.opts[k]; }) : null;
    return {
      id: cur.id, card: card, opts: opts, topic: card.topic, generic: !card.opts,
      index: state.pos + 1, of: state.queue.length,
      correct: state.total, round: state.round, left: state.wrong.length,
      chosen: cur.chosen, right: cur.right, letter: LETTERS[cur.right],
      why: card.opts ? remapWhy(card.why, cur.perm, card.ans) : card.why
    };
  }

  /* Answer with the displayed slot (0–3). Returns {right, rightSlot, letter} or null if not allowed. */
  function answer(state, choice, now) {
    if (state.phase !== 'question' || !state.cur || state.cur.chosen !== null) return null;
    if (!(choice >= 0 && choice <= 3)) return null;
    tick(state, now);
    var cur = state.cur;
    cur.chosen = choice;
    var ok = choice === cur.right;
    if (state.round === 0) {
      if (ok) { state.firstTry++; state.total++; }
      else {
        state.wrong.push(cur.id);
        if (Array.isArray(state.firstWrong)) state.firstWrong.push({ id: cur.id, perm: cur.perm.slice() });   // saved state from before E2 has none: stays missing, never a partial list
      }
    } else if (ok) {
      state.total++;
      var i = state.wrong.indexOf(cur.id);
      if (i >= 0) state.wrong.splice(i, 1);
    }
    state.phase = 'feedback';
    return { right: ok, rightSlot: cur.right, letter: LETTERS[cur.right] };
  }

  function finish(state) {
    state.phase = 'done';
    state.done = { firstTry: state.firstTry, final: state.total, rounds: state.round, activeMs: state.activeMs };
  }

  function startReview(state, rng) {
    state.round++;
    var pending = state.order.filter(function (id) { return state.wrong.indexOf(id) >= 0; });
    state.queue = shuffle(pending, rng);
    state.pos = 0;
  }

  /* Move on after feedback. Returns 'question' | 'intro' | 'done'.
     'intro' = first round finished below the pass mark; call resume(state) to start review round 1. */
  function nextQuestion(state, rng, now) {
    if (state.phase !== 'feedback') return state.phase;
    tick(state, now);
    state.cur = null;
    state.pos++;
    if (state.round > 0 && state.total >= PASS) { finish(state); return 'done'; }
    if (state.pos >= state.queue.length) {
      if (state.round === 0) {
        if (state.firstTry >= PASS) { finish(state); return 'done'; }
        state.phase = 'intro';
        return 'intro';
      }
      if (state.total >= PASS) { finish(state); return 'done'; }
      startReview(state, rng);            // still short: another review round of what is still wrong
      state.phase = 'question';
      return 'question';
    }
    state.phase = 'question';
    return 'question';
  }

  /* Leave the 'intro' screen: begin review round 1. */
  function beginReview(state, rng, now) {
    if (state.phase !== 'intro') return state.phase;
    tick(state, now);
    startReview(state, rng);
    state.phase = 'question';
    return 'question';
  }

  function certFields(state, level, who, when) {
    return {
      setId: state.levelId,
      setName: setName(level),
      who: who,
      isoTime: isoNoMs(when),
      firstTry: state.done.firstTry,
      final: state.done.final,
      rounds: state.done.rounds
    };
  }

  // record kept in store.done when a set is finished (keeps the first-try miss list so the certificate + review list can be reopened)
  function doneRecord(state) {
    var r = { firstTry: state.done.firstTry, final: state.done.final, rounds: state.done.rounds, at: state.finishedAt,
              total: state.order.length, activeMs: state.done.activeMs };
    if (Array.isArray(state.firstWrong)) r.firstWrong = state.firstWrong.map(function (e) { return { id: e.id, perm: e.perm.slice() }; });
    return r;
  }

  // rebuild just enough state to show the certificate + review list again; phase 'view' so finishToMap never re-saves it
  function viewState(levelId, rec) {
    var s = { levelId: levelId, phase: 'view', finishedAt: rec.at, order: new Array(rec.total || SIZE),
              done: { firstTry: rec.firstTry, final: rec.final, rounds: rec.rounds, activeMs: rec.activeMs } };
    if (Array.isArray(rec.firstWrong)) s.firstWrong = rec.firstWrong;
    return s;
  }

  var api = {
    doneRecord: doneRecord, viewState: viewState,
    remapWhy: remapWhy, PASS: PASS, SIZE: SIZE, SALT: SALT, LETTERS: LETTERS,
    mulberry32: mulberry32, shuffle: shuffle,
    certCode: certCode, verifyCert: verifyCert, parseSetId: parseSetId, setName: setName,
    isoNoMs: isoNoMs, formatDateTime: formatDateTime, stamp: stamp, formatDuration: formatDuration,
    startLevel: startLevel, show: show, view: view, answer: answer, nextQuestion: nextQuestion,
    beginReview: beginReview, certFields: certFields, tick: tick
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.GameCore = api;
})(typeof window !== 'undefined' ? window : globalThis);
