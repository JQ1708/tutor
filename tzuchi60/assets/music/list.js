(function () {
  var life = [{ f: 'shengming.m4a', t: '《生命圓舞曲》片頭曲伴奏' }];
  var kaijing = [{ f: 'kaijing.m4a', t: '開經偈（靜思僧團）' }];
  var spring = [{ f: 'chunnuan.m4a', t: '《春暖花蓮》伴奏' }];
  var breeze = [{ f: 'chunfeng.m4a', t: '《春風化雨》〈老師心菩薩心〉伴奏' }];
  var earth = [{ f: 'earth.m4a', t: '《地球是我家》演奏版' }];
  var relief = [{ f: 'suifeng.m4a', t: '《隨風隨緣》伴奏' }];
  var marrow = [{ f: 'shengmingxian.m4a', t: '《手碰生命的弦》' }];
  var alley = [{ f: 'onourway.m4a', t: '《On Our Way》弦樂版' }];
  var pure = [{ f: 'chunmei.m4a', t: '《純美時光》伴奏' }];
  function set(o, key, pre, v) { o[key] = v; for (var i = 1; i <= 6; i++) o[pre + i] = v; }
  window.TC60_MUSIC = { home: kaijing, charity: life, b1: life, b2: life, b3: life, b4: life, b5: life, b6: life,
    medical: spring, m1: spring, m2: spring, m3: spring, m4: spring, m5: spring, m6: spring,
    education: breeze, e1: breeze, e2: breeze, e3: breeze, e4: breeze, e5: breeze, e6: breeze };
  set(TC60_MUSIC, 'environment', 'v', earth); set(TC60_MUSIC, 'relief', 'r', relief); set(TC60_MUSIC, 'marrow', 'w', marrow);
  set(TC60_MUSIC, 'community', 'c', alley); set(TC60_MUSIC, 'culture', 'u', pure);
})();
