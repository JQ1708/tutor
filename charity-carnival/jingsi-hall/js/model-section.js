(() => {
  const frame = document.querySelector('.model-frame');
  const controls = document.querySelector('.model-controls');
  const toggle = document.querySelector('#model-switch');
  let ready = false, visible = false, started = false, resumeBuild = false;

  let textures, attempted = false;

  function syncPlayback() {
    if (visible && !document.hidden && textures && !attempted) {
      attempted = true;
      ready = initialize();
      controls.hidden = !ready;
    }
    if (!ready) return;
    if (visible && !document.hidden) {
      frame.querySelector('.model-poster').hidden = true;
      Klang3D.start();
      if (!started || resumeBuild) Klang3D.play(started ? Klang3D.state.P : 0, 16);
      started = true;
      resumeBuild = false;
    } else if (Klang3D.state.running) {
      resumeBuild = Klang3D.playing;
      Klang3D.stop();
      frame.querySelector('.model-poster').hidden = false;
    }
  }

  function initialize() {
    return Klang3D.init(frame.querySelector('canvas'), {
      ...textures,
      labels: frame.querySelector('.model-labels'),
      safe: () => ({ top: 0, bottom: frame.clientHeight, left: frame.clientWidth * .03, right: frame.clientWidth * .97 }),
      label(element, zh, en) {
        for (const [lang, text] of [['zh-Hans', zh], ['en', en]]) {
          const span = document.createElement('span');
          span.lang = lang;
          span.textContent = text;
          span.hidden = lang !== document.documentElement.lang;
          element.append(span);
        }
      },
      onStage(zh, en) {
        const stage = document.querySelector('#model-stage');
        stage.firstElementChild.textContent = zh;
        stage.lastElementChild.textContent = en;
      }
    });
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.append(script);
    });
  }

  const preload = new IntersectionObserver(async ([entry]) => {
    if (!entry.isIntersecting) return;
    preload.disconnect();
    try {
      await loadScript('js/three.min.js');
      await loadScript('js/klang3d.js');
      // Chrome isolates file URLs. Use the same decoded image bytes via data URLs
      // for local double-click previews so WebGL can upload the textures.
      textures = { logo: 'klang/logo.png', txt: 'klang/txt.png', ground: 'klang/ground.webp' };
      if (location.protocol === 'file:') {
        await loadScript('klang/local-textures.js');
        textures = window.klangLocalTextures;
        delete window.klangLocalTextures;
      }
      syncPlayback();
    } catch (error) {
      console.warn('Klang model unavailable', error);
    }
  }, { rootMargin: window.innerHeight + 'px 0px' });
  preload.observe(frame);

  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    syncPlayback();
  }).observe(frame);
  document.addEventListener('visibilitychange', syncPlayback);
  new MutationObserver(() => {
    for (const span of frame.querySelectorAll('.model-labels [lang]')) {
      span.hidden = span.lang !== document.documentElement.lang;
    }
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  toggle.addEventListener('click', () => {
    const community = toggle.getAttribute('aria-pressed') !== 'true';
    toggle.setAttribute('aria-pressed', String(community));
    toggle.firstElementChild.hidden = community;
    toggle.lastElementChild.hidden = !community;
    Klang3D.setView(community);
    if (community) Klang3D.setBuild(1);
  });
})();
