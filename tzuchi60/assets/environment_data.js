/* 環保站資料：結構照 education_data.js。效果在 CH.R，隧道走 tunnel.js 的 weave */
(function () {
  var T = function (zh, en) { return { zh: zh, en: en }; };
  var otd = function (d) { var s = d.slice(0, 4) + '.' + d.slice(4, 6) + '.' + d.slice(6, 8); return { zh: '《慈濟歷史上的今天》' + s, en: 'Tzu Chi, On This Day, ' + s, url: 'https://tzuchiculture.org/tzuchi_60th_anniversary/onthisday/onthisday_' + d + '-1/' }; };
  var fm = function (n, t) { return { zh: '慈濟法脈資料庫 ' + n + '〈' + t + '〉', en: 'Tzu Chi Dharma Lineage Archive, no. ' + n }; };
  var xl = function (p) { return { zh: '《馬來西亞慈濟史 雪隆分會（二）》頁 ' + p.replace(/, /g, '、'), en: 'History of Tzu Chi Malaysia: KL & Selangor Branch, vol. 2, p. ' + p }; };

  var S = {
    nCheng: { zh: '馬來西亞慈濟〈義賣聚人氣　凝聚社區善力量〉2026.09.13', en: 'Tzu Chi Malaysia news report on the Cheng centre, 13 Sep 2026', url: 'https://www.tzuchi.my/zh/慈济新知/慈济报导/社区志工纪实/cat/慈善纪实/义卖聚人气凝聚社区善力量' },
    o230409: otd('20230409'),
    nEarth: { zh: '慈濟全球網〈The Earth: Our Shared Responsibility〉', en: 'Tzu Chi Global: The Earth, Our Shared Responsibility', url: 'https://global.tzuchi.org/the-earth-our-shared-responsibility' },
    nPlog: { zh: '慈濟全球網〈Malaysia’s Plogging Event Mobilizes Thousands for Clean-Up〉', en: 'Tzu Chi Global: Malaysia’s Plogging Event Mobilizes Thousands for Clean-Up', url: 'https://global.tzuchi.org/malaysias-plogging-event-mobilizes-thousands-for-clean-up' },
    nScroll: { zh: '慈濟全球網〈Urban resilience efforts honored in Malaysia〉', en: 'Tzu Chi Global: Urban resilience efforts honored in Malaysia', url: 'https://global.tzuchi.org/urban-resilience-efforts-honored-in-malaysia-2' },
    nBubur: { zh: '慈濟全球網〈Bubur Cha Cha inspires recycling lessons in Malaysia〉', en: 'Tzu Chi Global: Bubur Cha Cha inspires recycling lessons in Malaysia', url: 'https://global.tzuchi.org/bubur-cha-cha-inspires-recycling-lessons-in-malaysia' },
    fm35: fm('00035', '一眼觀時千眼觀，一手動時千手動'),
    fm127: fm('00127', '用鼓掌的雙手做環保'),
    fm174: fm('00174', '慈濟全面推動環保餐具'),
    fm255: fm('00255', '垃圾變黃金，黃金變愛心，愛心化清流，清流繞全球'),
    fm304: fm('00304', '慈濟國際人道援助會研發環保毛毯'),
    fm322: fm('00322', '實業家成立「大愛感恩科技公司」'),
    fm335: fm('00335', '清淨在源頭'),
    fm344: fm('00344', '廣行環保福滿乾坤，淨化人心風調雨順'),
    fm355: fm('00355', '慈濟出席聯合國永續發展大會'),
    fm378: fm('00378', '環保站加入「社區照顧關懷據點」'),
    fm390: fm('00390', '111世界蔬醒日'),
    fm429: fm('00429', '慈濟獲得聯合國環境署觀察員身份'),
    o900823: otd('19900823'), o101017: otd('20101017'), o200716: otd('20200716'),
    i4: { zh: '慈濟六十週年影響力報告・環保', en: 'Tzu Chi 60th anniversary impact report: environment', url: 'https://60impact.tzuchi.org.tw/' },
    i60: { zh: '《慈濟六十週年影響力報告》頁 69–70、81–82', en: 'Tzu Chi 60th Anniversary Impact Report, pp. 69–70, 81–82' },
    c15: { zh: '《2015 慈濟永續報告書》頁 76', en: 'Tzu Chi Sustainability Report 2015, p. 76' },
    c16: { zh: '《2016–2017 慈濟永續報告書》頁 76–79', en: 'Tzu Chi Sustainability Report 2016–2017, pp. 76–79' },
    c25: { zh: '《2024–2025 慈濟永續報告書》頁 12–13', en: 'Tzu Chi Sustainability Report 2024–2025, pp. 12–13' },
    al24: { zh: '《2024 慈濟年鑑》頁 663', en: 'Tzu Chi Almanac 2024, p. 663', url: 'https://www.tzuchi-org.tw/ebook/almanac/2024almanac/663/' },
    oral: { zh: '慈濟環保口述歷史', en: 'Tzu Chi environmental oral history project', url: 'https://tcoralhistory.tzuchi.org.tw/eporalhistory/' },
    tcn: { zh: '慈善新聞網〈兩萬條臺灣環保毛毯啟運〉2022.04.21', en: 'Tzu Chi charity news, 21 Apr 2022', url: 'https://www.tcnews.com.tw/news/item/14101.html' },
    xn: xl('612'), xa: xl('613–615'), xb: xl('616'), xc: xl('617–618'), xd: xl('630–631'), xe: xl('635–638'), xf: xl('640'), xg: xl('641'), xh: xl('643–647')
  };
  var CH = window.CH = { S: S };
  var SHANGREN = T('證嚴上人', 'Dharma Master Cheng Yen');
  var OTD = T('取自《慈濟歷史上的今天》。', 'From Tzu Chi, On This Day.');
  var cap = function (zh, en) { return T(zh + OTD.zh, en + ' ' + OTD.en); };

  var P = window.PHS = window.PHS || {};
  var SZ = { hero_v: [1600, 900], v_back: [800, 492], v_bags: [800, 557], v_bale: [1024, 576], v_bask: [800, 272], v_belt: [800, 725], v_board: [800, 1048], v_boat: [800, 453], v_box: [800, 1106], v_cage: [800, 1087], v_can: [800, 596], v_cart: [800, 806], v_cart2: [800, 1298], v_chop: [1024, 576], v_flake: [1024, 746], v_fold: [960, 376], v_green: [800, 377], v_hand: [800, 343], v_iron: [800, 813], v_isle: [1064, 220], v_kch: [800, 640], v_mill: [1024, 256], v_mkt: [800, 405], v_net: [800, 351], v_news: [800, 337], v_paper: [800, 1152], v_sack: [800, 362], v_shirt: [970, 610], v_shred: [1024, 754], v_solar: [800, 781], v_truck: [800, 868], v_wall: [1024, 576], v_wash: [800, 526], v_yarn: [800, 1008] };
  Object.keys(SZ).forEach(function (k) { P[k] = SZ[k]; });
  /* 隧道圖：assets/river/v_*.jpg。只有確證的年份才寫，其餘留 0 */
  window.RIVER_M = (window.RIVER_M || []).concat(Object.keys(SZ).filter(function (k) { return k !== 'hero_v'; }).map(function (k) { return [0, k, Math.round(SZ[k][0] / SZ[k][1] * 300)]; }));
  /* 進入國際賑災的隧道用 1991 的真圖：報紙、募款箱、水淹房舍 */
  window.RIVER_M = window.RIVER_M.concat([[1991, 'v_r1', 410], [1991, 'v_r2', 402], [1991, 'v_r3', 404]]);

  CH.page = { key: 'environment', pre: 'v', title: '環保｜大家為什麼拍手？', still: 'hero_v', noDoor: 1, noFilm: 1, after: ['vnum', 'vall'] };

  CH.hero = {
    film: T('大家為什麼拍手？', 'Why is everyone clapping?'),
    stop: T('第四站', 'Fourth stop'), title: T('環保', 'Environmental Protection'),
    sub: T('一句話之後，有人回家就動手。<br>一條街跟著做，分得夠細的瓶子，走到了災區。', 'After one sentence, someone went home and began.<br>A street joined in, and bottles sorted finely enough travelled to disaster areas.'),
    watch: T('影片製作中', 'Film in production'), read: T('走這六段路', 'Walk the six stretches'),
    ai: T('回收的寶特瓶與綠色瓶片　局部　取自《慈濟歷史上的今天》', 'Recycled bottles and green flakes, detail, from Tzu Chi, On This Day')
  };

  CH.chapters = [
    /* ───── 第一段 ───── */
    { id: 'v1a', era: 'e90', y: '1990', nav: T('鼓掌的這雙手', 'The hands that clapped'),
      ask: T('大家為什麼拍手？', 'Why is everyone clapping?'),
      b: [
        { k: 'story', lay: 'T', date: '1990.08.23', h: T('掌聲響起的那個晚上', 'The evening of the applause'),
          p: [T('一九九〇年八月二十三日，吳尊賢文教公益基金會邀請證嚴上人，到臺中新民商工的社會公益講座演講。', 'On 23 August 1990, the Wu Tsun-hsien Foundation invited Dharma Master Cheng Yen to speak at its public welfare lecture, held at Xinmin Vocational High School in Taichung.'),
            T('上人一九九三年回憶，當天早上要去看印順導師，經過公園旁的一條路。那條路晚上是夜市，一大早滿路髒亂。晚上演講時，上人談到垃圾若能分類，能回收的回收再生，資源就不會一直消耗。臺下的人聽了，一直鼓掌。', 'Recalling that day in 1993, the Master said that on the way to see her teacher, Venerable Yin Shun, she had passed a road beside a park. It was a night market after dark, and in the early morning the whole road was filthy. That evening she spoke of sorting rubbish, so that what could be recycled would be, and resources would not keep being used up. The audience kept clapping.')],
          note: T('夜市滿地垃圾是上人一九九三年的回憶。同一句呼籲，在後來的回憶和報導裡字句略有不同，本頁以當日紀錄為準。', 'The littered night market comes from the Master’s recollection in 1993. Later retellings of her appeal differ slightly in wording; this page follows the record of that day.'),
          s: ['fm127'] },
        { k: 'bags', bare: 1, d: '1990.08.23', h: T('鼓掌的這雙手', 'The hands that clapped'),
          t: T('上人說得很具體：玻璃、鐵罐各歸各的；報紙看過之後整理整齊，再找人把廢紙再造。', 'The Master was specific: glass with glass, tins with tins, and newspapers tidied after reading, so that someone could remake the paper.'),
          q: { zh: '鼓掌的這雙手，可以做什麼？垃圾分類，對不對？這是我很期待的。', en: 'These hands that are clapping, what can they do? Sort rubbish, can they not? This is what I hope for.', who: SHANGREN },
          lab: [T('報紙', 'Paper'), T('鐵罐', 'Tins'), T('玻璃', 'Glass')],
          note: T('示意畫面。', 'An illustration.'), s: ['fm127'] },
        { k: 'story', lay: 'R', date: '1990.09', h: T('她回去就開始', 'She went home and began'),
          ph: [{ i: 'v_cart2', c: cap('推車上滿載紙箱與報紙的局部，確切年代不詳，並非故事裡的三輪車。', 'Detail of a cart loaded with boxes and newspapers. The date is unknown, and this is not the tricycle in the story.') }],
          p: [T('那場演講有幾千人聽法。其中一位二十歲出頭的女孩楊順苓（後改名楊佩珊），回去就開始做。她利用星期六、日，挨家挨戶拜託人家，把報紙、簿本紙另外集中，罐頭、沙拉油罐和汽水罐也另外分類，每個星期去收一次。', 'Several thousand people heard that talk. One of them, a young woman in her early twenties named Yang Shun-ling, who later took the name Yang Pei-shan, went home and began. On Saturdays and Sundays she went from door to door, asking people to set aside newspapers and exercise books, and to sort tins, cooking-oil cans and soft-drink cans. She came to collect once a week.')],
          q: { zh: '師父，上個月您來時，提起垃圾分類，我覺得很有道理。師父說大家都有責任，我回去就開始負起這個責任。', en: 'Master, when you came last month you spoke about sorting rubbish, and I thought it made good sense. You said everyone has a responsibility, so I went home and began to take up mine.', who: T('楊順苓　上人一九九〇年九月二十二日轉述', 'Yang Shun-ling, as retold by the Master, 22 Sep 1990') },
          more: [T('剛開始，她不知道東西要怎麼收。後來她去拜託一位拖三輪車的，說明自己的理想。對方也很歡喜，幫她一袋一袋放上三輪車，推去賣。賣給舊貨商，一次可以賣到一千多元。', 'At first she did not know how to move it all. Then she asked a tricycle hauler for help and explained what she hoped to do. He was glad to, and loaded the sacks onto his tricycle one by one and pushed them off to sell. A scrap dealer would pay a little over a thousand dollars at a time.'),
            T('一九九〇年九月，她把變賣舊報紙的所得全數捐出，成為慈濟第一筆環保善款。這筆錢捐的是功德會。功德會，就是慈濟當時的善款單位。', 'In September 1990 she gave everything from the sale to the Merit Society, Tzu Chi’s charity body at the time. It became the first environmental donation Tzu Chi received.')],
          note: T('「一千多元」是上人一九九〇年的轉述，原文未寫幣別。', 'The “thousand dollars” is the Master’s 1990 account. The source does not name the currency.'),
          s: ['fm127', 'o900823'] },
        { k: 'story', lay: 'L', date: '1990', h: T('一條街跟著做', 'A street joins in'),
          ph: [{ i: 'v_paper', c: cap('堆疊的舊報紙局部，確切年代不詳。', 'Detail of a stack of old newspapers. The date is unknown.') }],
          p: [T('楊順苓到分會分享之後，黎明社區三十幾位聽到了，也動了起來。二〇一〇年上人回憶這一段，稱之為蝴蝶效應。', 'After Yang shared her story at the branch office, some thirty people from the Liming community heard it and began too. Looking back in 2010, the Master called this a butterfly effect.'),
            T('住在臺中黎明新村的簡素絹，在演講後隔月就在自家成立環保點，從左鄰右舍的舊報紙回收做起。志工把市場載來的回收物，一層一層疊在她家庭院。', 'Jian Su-juan of Liming New Village in Taichung set up a recycling point at her home the month after the talk, starting with her neighbours’ old newspapers. Volunteers brought loads from the market and stacked them in her yard.')],
          q: { zh: '沒幾天，我回來就開始做，以前庭院就是像這樣，我就回收回來，放這裡，還有楊素梅師姊、李味師姊，她們就東西載來、疊上去，她們去市場載，載來這邊放。', en: 'Within days I came back and started. The yard used to look like this. I would bring things back and put them here, and Sister Yang Su-mei and Sister Li Wei would bring loads and stack them up. They fetched them from the market and put them here.', who: T('簡素絹', 'Jian Su-juan') },
          note: T('第一個環保點有兩種說法。上人二〇一〇年談到，第一個環保點從楊順苓開始身體力行；《慈濟歷史上的今天》則記簡素絹在自家成立第一個環保點。成立月份也有八月、九月兩說。本頁並列，待分會確認。', 'There are two accounts of the first recycling point. In 2010 the Master said it began with Yang Shun-ling putting the idea into practice; Tzu Chi, On This Day records Jian Su-juan founding it at home. Sources also differ between August and September. Both are given here, pending confirmation by the branch.'),
          s: ['fm127', 'fm35', 'o900823'] },
        { k: 'story', lay: 'R', date: '1990', h: T('戴著安全帽出門', 'Going out in a helmet'),
          ph: [{ i: 'v_back', c: cap('兩位環保志工的背影，確切年代不詳。', 'Two recycling volunteers seen from behind. The date is unknown.') }],
          p: [T('當時坐在禮堂二樓的黃翠玉，聽完演講隔天便動手。她那時三十幾歲，在垃圾堆裡翻找可以回收的東西，怕的是被人認出來。', 'Huang Cui-yu, who had been sitting on the upper floor of the hall, started the very next day. She was in her thirties, and as she searched through rubbish heaps for anything that could be recycled, her fear was of being recognised.')],
          q: { zh: '我去做回收的時候，我就是戴安全帽、戴口罩，怕人家認出來', en: 'When I went out to recycle I wore a helmet and a mask, afraid people would recognise me.', who: T('黃翠玉', 'Huang Cui-yu') },
          more: [T('林秀鳳聽了同一場演講，從理髮店門口開始回收。回收物沒有地方放，她四處找空地，四年後才租到「捨得」環保點。', 'Lin Xiu-feng heard the same talk and began collecting at the door of a barber’s shop. With nowhere to put the recyclables she searched everywhere for space, and only four years later did she rent what became the She De recycling point.')],
          q2: { zh: '一年三百六十五天我都在做環保，不曾間斷', en: 'Three hundred and sixty-five days a year I do this work, without a break.', who: T('林秀鳳', 'Lin Xiu-feng') },
          s: ['o900823', 'oral'] },
        { k: 'five', items: [T('一開始沒有環保站，大家從門口、庭院和鄰居的舊報紙做起。', 'At first there were no recycling stations. People began at their doors, in their yards, with their neighbours’ old newspapers.'), T('這就是鼓掌的雙手，第一次動起來的樣子。', 'This is how the hands that clapped first began to move.')] }
      ] },

    /* ───── 第二段 ───── */
    { id: 'v2a', era: 'e90', y: '1992–2019', nav: T('街頭巷尾的道場', 'A place of practice in the streets'),
      ask: T('環保站是什麼地方？', 'What kind of place is a recycling station?'),
      b: [
        { k: 'story', lay: 'L', h: T('點、站、教育站', 'Points, stations and education stations'),
          ph: [{ i: 'v_wall', c: cap('臺中豐原福陽環保站，用瓶蓋拼成字的牆面局部。', 'Part of a wall of bottle caps forming characters at the Fuyang recycling station in Fengyuan, Taichung.') }],
          p: [T('環保做開之後，有了幾種不同的地方。社區環保點，定點定時收資源，再送到環保站處理。環保站集中分類，也開放大眾來認識和實踐環保。環保教育站重在教學與參訪，可能和環保站是同一處，所以三類不能相加。', 'As the work spread, different kinds of places appeared. A community recycling point collects at a fixed place and time, then sends everything on to a station. A recycling station does the sorting and is open for the public to learn and take part. An education station is for teaching and visits, and may be the same place as a station, so the three cannot be added together.'),
            T('上人在高雄區環保志工歲末祝福時說了一句話。道場，是修行的地方。', 'At a year-end blessing for recycling volunteers in Kaohsiung, the Master said this. A place of practice is where one cultivates oneself.')],
          q: { zh: '真正最好的道場，就是在街頭巷尾。', en: 'The truest and best place of practice is in the streets and lanes.', who: T('證嚴上人　一九九六年一月二十七日', 'Dharma Master Cheng Yen, 27 Jan 1996') },
          s: ['al24', 'fm127'] },
        { k: 'story', lay: 'T', date: '1992', h: T('八卦寮', 'Bagualiao'),
          p: [T('高雄慈濟志工陳清雲，一九九二年提供八卦寮的自家三合院，做為社區裡的環保站。這些年下來，這裡減少了垃圾，也建立一套完整細緻的處理模式。', 'In 1992 the Kaohsiung volunteer Chen Qing-yun offered the family courtyard house in Bagualiao as a community recycling station. Over the years it reduced rubbish and built up a complete, careful way of working.'),
            T('一九九九年，中山大學把環境教育課程的學習場域指定在八卦寮環保站。這個地方也順勢成為慈濟第一個環保教育站。', 'In 1999 National Sun Yat-sen University named the Bagualiao station as a learning site for its environmental education course, and it became Tzu Chi’s first environmental education station.')],
          note: T('《2015 慈濟永續報告書》寫第一個環保站「以自家客廳開始」，《2016–2017 慈濟永續報告書》寫一九九二年提供自家三合院。第一個環保點和第一個環保站是兩件事，本頁分開寫，形態待分會確認。', 'The 2015 report says the first station began in a family living room; the 2016–2017 report speaks of a courtyard house offered in 1992. The first point and the first station are separate matters and are written separately here. The form of the first station awaits confirmation.'),
          s: ['c15', 'c16'] },
        { k: 'day', bare: 1, h: T('環保站的一天', 'A day at a station'),
          t: T('有的環保站每天透過視訊連線，讓志工參與精舍的早課，再開始工作。雙和聯絡處的長者，上午量血壓、做健康操，做完環保一起吃午餐。', 'Some stations link up by video each day so volunteers can join the morning service at the Abode before work begins. At the Shuanghe office, older volunteers have their blood pressure taken, exercise, do their recycling and share lunch.'),
          items: [[T('清早', 'Early'), T('視訊連線，參與早課', 'Video link to the morning service')], [T('聽法', 'Listening'), T('聆聽上人晨語開示', 'The Master’s morning talk')], [T('早餐', 'Breakfast'), T('吃過早餐，展開一天的環保工作', 'Then the day’s work begins')], [T('量血壓', 'Check-up'), T('每天為長者量血壓', 'Daily blood pressure')], [T('上午十點', '10 a.m.'), T('帶動健康操，再帶動長者做環保', 'Exercises, then recycling')], [T('午餐', 'Lunch'), T('長者共餐', 'Lunch together')]],
          note: T('示意畫面。前三格是部分環保站的作息，後三格是雙和聯絡處的例子，不是每一站都一樣。', 'An illustration. The first three steps are from some stations and the last three from Shuanghe. Not every station is the same.'), s: ['fm378'] },
        { k: 'story', lay: 'R', date: '2015.09.09', h: T('長者是付出的人', 'Older people are the givers'),
          ph: [{ i: 'v_hand', c: cap('戴手套的環保志工手拿瓶子，局部。', 'Detail of a gloved volunteer’s hand holding a bottle.') }],
          p: [T('環保志工隊伍裡，不乏八、九十歲的長者。有的環保站可以煮食供餐，子女也安心讓長輩到環保站做事。二〇一五年九月九日，慈濟配合衛福部，在全臺靜思堂、環保站等場所設立「社區照顧關懷據點」，第一階段將成立五十處，當天在新北市雙和聯絡處揭牌。', 'Among recycling volunteers are many in their eighties and nineties. Some stations can cook and serve meals, so that families feel at ease sending their elders. On 9 September 2015, working with the Ministry of Health and Welfare, Tzu Chi began setting up community care points at Jing Si Halls, stations and other sites. Fifty were planned for the first phase, and the plaque was unveiled at the Shuanghe office in New Taipei.'),
            T('這些長者把人家丟掉的雨傘抽起傘骨，傘布做成袋子。慈濟人稱年長的志工為老菩薩。一位老菩薩向上人這樣說：', 'These elders pull the ribs from umbrellas people throw away and make the cloth into bags. Tzu Chi people call older volunteers “elder bodhisattvas”. One of them said this to the Master:')],
          q: { zh: '感恩哦！師父，因為您有創造慈濟，我們才有環保可做，讓我們的人生有價值。', en: 'Thank you, Master! Because you created Tzu Chi we have this work to do, and it gives our lives value.', who: T('一位老菩薩　上人二〇一九年轉述', 'An elder volunteer, as retold by the Master, 2019') },
          s: ['fm378', 'fm127'] },
        { k: 'story', lay: 'L', h: T('從六十歲做到九十二歲', 'From sixty to ninety-two'),
          ph: [{ i: 'v_sack', c: cap('裝滿回收物的太空袋局部。', 'Detail of a large sack full of recyclables.') }],
          p: [T('北港環保志工莊明琴，六十歲投入環保，一直做到九十二歲，三十二年如一日。她也說過一個心願：', 'Zhuang Ming-qin, a recycling volunteer in Beigang, began at sixty and kept going to ninety-two, thirty-two years without change. She also spoke of a wish:')],
          q: { zh: '我將來想要捐大體，讓醫生做研究，延續生命良能。', en: 'I want to donate my body one day, so that doctors can study it and my life can go on being of use.', who: T('莊明琴', 'Zhuang Ming-qin') },
          more: [T('直到生命終點，她實踐了承諾，成為大體老師。大體老師，是往生後捐出身體供醫學教學的人。', 'At the end of her life she kept that promise and became a Silent Mentor, one who gives their body after death for medical teaching.')],
          s: ['i4'] },
        { k: 'story', lay: 'T', h: T('背著大聲公的家庭主婦', 'Homemakers with loudhailers'),
          p: [T('上人二〇一九年回顧，早年推動環保的這一群人，都是家庭主婦。她們把大聲公背在身上，走到街頭巷尾宣導、收環保。不論年紀，這些手做的都是同一件事。街頭巷尾，就是她們的道場。', 'Looking back in 2019, the Master recalled that those who first took this work out were homemakers. With loudhailers on their backs they went through the streets and lanes, spreading the word and collecting. Whatever their age, these hands were doing the same work, and the streets and lanes were their place of practice.')],
          s: ['fm127'] }
      ] },

    /* ───── 第三段 ───── */
    { id: 'v3a', era: 'e00', y: '1990–2014', nav: T('分得很細的手', 'Hands that sort finely'),
      ask: T('丟進袋子就好了，為什麼要分這麼細？', 'Why not just drop it in a bag? Why sort it so finely?'),
      b: [
        { k: 'story', lay: 'R', h: T('喀啦！喀啦！', 'Crack! Crack!'),
          ph: [{ i: 'v_bask', c: cap('環保站裡的分類籃局部。', 'Detail of sorting baskets at a recycling station.') }],
          p: [T('假日午後，各地環保站響起「喀啦！喀啦！」的聲音。志工把寶特瓶依顏色、材質分類，取下瓶蓋，踩扁後裝袋打包。這是手腳並用的全身運動。', 'On holiday afternoons, the sound of crack, crack rises from stations everywhere. Volunteers sort PET bottles by colour and material, take off the caps, stamp them flat and bag them. It takes both hands and feet.'),
            T('上人提過，慈濟人回收回來還要再細分，連瓶頸上的塑膠圈都要剪開。紙也一樣，有印刷的部分剪掉，留下乾淨空白的部分，就可以再製造很高級的用品。', 'The Master has noted that Tzu Chi people sort again after collecting, even cutting away the plastic ring on the neck of a bottle. Paper is the same: the printed part is cut off and the clean blank part kept, and it can then be remade into very high-grade goods.')],
          s: ['fm322', 'fm335'] },
        { k: 'split', bare: 1, h: T('一支瓶子，拆成三份', 'One bottle, three parts'),
          t: T('能做成紡織品的，是 PET 材質的瓶身。瓶蓋和瓶環是其他材質，要分開。', 'Only the PET body of the bottle can become textile. The cap and ring are other materials and must be kept apart.'),
          lab: [T('瓶蓋', 'Cap'), T('瓶環', 'Ring'), T('瓶身', 'Body')],
          note: T('示意畫面。', 'An illustration.'), s: ['fm322'] },
        { k: 'story', lay: 'L', h: T('為什麼要這麼細', 'Why so fine'),
          ph: [{ i: 'v_shred', c: cap('壓扁、碎開的瓶子局部。', 'Detail of crushed and broken bottles.') }],
          p: [T('早在一九九六年，紡織業者就已具備把寶特瓶回收再製成紡織品的能力，瓶頸在上游原料的品質。切片造粒時若混入瓶蓋和瓶環，再生原料的品質就不穩定。', 'As early as 1996 the textile industry could turn recycled PET bottles into fabric. The bottleneck was the quality of the raw material. If caps and rings got into the chipping and pelletising, the recycled material would not be stable.'),
            T('慈濟的回收物裡，透明、綠色、雜色的瓶子少有混雜。志工還要求回收場把機器清洗乾淨，再來處理慈濟的寶特瓶。', 'In Tzu Chi’s collections, clear, green and mixed-colour bottles were rarely mixed up. Volunteers also asked the recycling yards to clean their machines before handling Tzu Chi’s bottles.'),
            T('德國萊因的再生材質稽核也比較過：一般工廠的 PET 回收雜質率約百分之十五到二十，慈濟志工分類處理過的，可以降到百分之十以下。', 'A recycled-material audit by TÜV Rheinland made the comparison: ordinary PET recycling ran at about 15 to 20 per cent impurities, and what Tzu Chi volunteers had sorted could come in below 10 per cent.')],
          q: { zh: '因為前端做得很乾淨，所以我們的良率是世界最高的！', en: 'Because the front end is done so cleanly, our yield is the highest in the world!', who: T('羅忠祐　協力廠商的實業家志工', 'Luo Zhong-you, a volunteer whose firm is a supplier') },
          note: T('「世界最高」是當事人的說法，雜質率是二〇一一年報導裡的比較，不是現在的全球統計。', '“Highest in the world” is his own claim. The impurity figures are a comparison quoted in a 2011 report, not a current global statistic.'),
          s: ['fm322'] },
        { k: 'story', lay: 'R', date: '2006', h: T('就算賣不了錢', 'Even if it sells for nothing'),
          ph: [{ i: 'v_box', c: cap('疊成高塔的回收紙板局部。', 'Detail of a tower of recycled cardboard.') }],
          p: [T('資源回收風氣未開的時候，志工花一整天分類、整理，載一大卡車到回收商處，通常只得幾百元。上人對大家談起這段往事，也說明了做回收的理念在於保護地球，不在於賣多少錢。', 'Before recycling caught on, volunteers would spend a whole day sorting, carry a full truckload to the dealer and usually get only a few hundred dollars. Recalling this, the Master explained that the aim of the work is to protect the Earth, not what it sells for.')],
          q: { zh: '就算賣不了錢，還是要做回收。', en: 'Even if it cannot be sold, we still recycle.', who: SHANGREN },
          s: ['fm304'] },
        { k: 'story', lay: 'L', date: '1990–2002', h: T('回收所得，用在哪裡', 'Where the money went'),
          ph: [{ i: 'v_cage', c: cap('籃中待分類的瓶子局部。', 'Detail of bottles in a basket waiting to be sorted.') }],
          p: [T('回收所得的用途，要按年代來說。一九九〇年，楊順苓賣回收物的錢捐給功德會。二〇〇〇年，上人談到回收所得用在四大志業，也就是慈善、醫療、教育、人文，不論蓋醫院、蓋學校或救人，大家點滴匯集起來，能做很多好事。二〇〇二年，上人勉勵大家把回收所得拿來護持大愛臺。', 'Where the money went depends on the year. In 1990 Yang gave what she earned to the Merit Society. In 2000 the Master spoke of using it for the four missions of charity, medicine, education and culture: hospitals, schools and saving lives, with everyone’s drops adding up to much good. In 2002 she encouraged volunteers to use it to support Da Ai Television.')],
          q: { zh: '這是一種愛的循環，也是一種修行。', en: 'This is a circle of love, and it is also a practice.', who: SHANGREN },
          note: T('用途隨年代不同，本頁不把任何一年的用途當成全部。', 'The use differed by year. No single year stands for the whole.'),
          s: ['fm127', 'fm255'] }
      ] },

    /* ───── 第四段 ───── */
    { id: 'v4a', era: 'e00', y: '2004–2010', nav: T('一支瓶子走多遠', 'How far a bottle travels'),
      ask: T('瓶子真的能變成毛毯嗎？', 'Can a bottle really become a blanket?'),
      b: [
        { k: 'story', lay: 'L', date: '2004.08.13', h: T('從衣著組開始', 'It began in the clothing group'),
          ph: [{ i: 'v_flake', c: cap('回收的寶特瓶與綠色瓶片，局部。', 'Detail of recycled bottles and green flakes.') }],
          p: [T('二〇〇四年八月十三日，慈濟國際人道援助會成立，簡稱人援會。成員是不同產業的企業家，分食品、衣著、住屋、交通運輸、資訊與智庫六組，為無水無電的災區研發賑災物資，也考量環境保護。', 'On 13 August 2004 the Tzu Chi International Humanitarian Aid Association was founded. Its members were business people from different industries, in six groups: food, clothing, housing, transport, information and research. They developed relief supplies for disaster areas without water or power, with the environment in mind.'),
            T('黃華德回想，上人很早就問過實業家志工，環保回收資源能不能再製成紡織品。當時技術不成熟，市場也有限。到了二〇〇四年，寶特瓶做成瓶片、酯粒和加工絲的技術大幅提升，衣著組加快了腳步。', 'Huang Hua-de recalls that the Master had long ago asked volunteers in business whether recycled material could be made into textiles. The technology was not ready and the market was small. By 2004, making bottles into flakes, pellets and textured yarn had greatly improved, and the clothing group picked up its pace.'),
            T('二〇〇六年一月十三日，人援會到靜思精舍報告寶特瓶回收再製成綿紗的成果。九月三十日，人援會把回收綠色寶特瓶製成、通過檢測的長纖毛毯和雙面彈性布料，呈給上人。', 'On 13 January 2006 the association reported to the Master at the Jing Si Abode on making recycled bottles into yarn. On 30 September it presented a tested long-fibre blanket and double-sided stretch fabric made from recycled green bottles.')],
          s: ['fm304', 'fm322'] },
        { k: 'specs', h: T('研發時算過的帳', 'The sums at the time of development'),
          items: [['20', T('一件夏天穿的 T 恤', 'a summer T-shirt')], ['80', T('一件冬天毛料雙層夾克', 'a double-layer winter jacket')], ['140', T('賑災睡袋等', 'a relief sleeping bag and the like')]],
          u: T('支寶特瓶', 'bottles'),
          note: T('這是二〇〇六年研發時的規格，不是後來所有產品的換算。', 'These are 2006 development figures, not a conversion for all later products.'), s: ['fm304'] },
        { k: 'pipe', bare: 1, h: T('從瓶片到毛毯', 'From flake to blanket'),
          t: T('分好的瓶子，要經過工廠一站一站的製程。毛毯織好，還要裁剪、車邊、貼標、折疊、壓縮封裝、裝箱、入庫，才能在災難發生時送出去。', 'Sorted bottles pass stage by stage through factories. Once woven, a blanket is still cut, hemmed, labelled, folded, compressed, boxed and shelved, ready to go out when disaster strikes.'),
          items: [T('瓶片', 'Flakes'), T('酯粒', 'Pellets'), T('紗線', 'Yarn'), T('布', 'Fabric'), T('毛毯', 'Blanket')],
          note: T('示意畫面。實際製程在工廠完成，不是用手把瓶子拉成紗。', 'An illustration. The real process takes place in factories. Bottles are not spun into yarn by hand.'), s: ['fm322', 'tcn'] },
        { k: 'photos', ph: [{ i: 'v_yarn', c: cap('再生紗線的紗筒局部。', 'Detail of spools of recycled yarn.') }, { i: 'v_mill', c: cap('灰色毯面局部。', 'Detail of a grey blanket surface.') }, { i: 'v_fold', c: cap('疊好的毛毯局部。', 'Detail of folded blankets.') }] },
        { k: 'story', lay: 'R', date: '2007.04', h: T('第一次送往災區', 'To a disaster area for the first time'),
          p: [T('二〇〇七年四月七日，菲律賓馬尼拉近郊的曼達盧永市發生大火，燒毀四百多棟房屋，三千多戶無家可歸。上人提起可以從臺灣運送衣物與環保毛毯救災，菲律賓航空陳永栽董事長當場表示，菲航可以免費協助空運。', 'On 7 April 2007 a fire swept through Mandaluyong on the edge of Manila, destroying more than four hundred buildings and leaving more than three thousand households homeless. When the Master raised the idea of sending clothes and eco-blankets from Taiwan, Philippine Airlines chairman Lucio Tan said at once that the airline could carry them free of charge.'),
            T('環保毛毯首次應用於國際賑災。回收的瓶子製成毛毯，送到受災鄉親手上。', 'It was the first time eco-blankets had been used in international relief. Collected bottles had begun to reach people who had lost their homes.')],
          s: ['fm304'] },
        { k: 'story', lay: 'L', date: '2008', h: T('二〇〇八年底，大愛感恩', 'Da Ai Technology, late 2008'),
          ph: [{ i: 'v_shirt', c: cap('再生材質製成的環保衫局部，衣上標示照原樣。', 'Detail of a garment made from recycled material. Its label is shown as it is.') }],
          p: [T('二〇〇八年底，黃華德、魏應充、李鼎銘、高明善、林家和五位實業家志工，出資成立大愛感恩科技公司。蘋果綠的毛毯、圍巾，全由綠色寶特瓶製成，全程不加染劑。吊牌上記著寶特瓶被回收送進工廠、製成瓶片及酯粒、抽紗織布到成衣的日期。', 'In late 2008, five volunteers in business, Huang Hua-de, Wei Ying-chung, Li Ding-ming, Kao Ming-shan and Lin Jia-he, put up the money for Da Ai Technology. Its apple-green blankets and scarves are made entirely from green bottles with no dye. Each tag records the dates on which the bottles reached the factory, became flakes and pellets, and were spun, woven and made up.')],
          q: { zh: '它是一個『非營利』的營利事業，也就是必須有利潤才能夠維持，但盈餘全部回饋慈濟基金會做四大志業後盾。', en: 'It is a “non-profit” for-profit business. It has to make a profit to keep going, but all of it goes back to the Tzu Chi Foundation to support the four missions.', who: T('黃華德', 'Huang Hua-de') },
          more: [T('工廠的前面，是環保站。宜蘭區環保幹事陳龍泉為志工代言，說他們一大早四點就出門，撿寶特瓶、厚紙板。當地的寶特瓶壓成瓶磚運到再生處理廠，平均一個批次就多達四十萬支。', 'Ahead of the factory stands the station. Chen Long-quan, a coordinator in Yilan, said the volunteers leave home at four in the morning to gather bottles and cardboard. Pressed into bricks and sent to the recycling plant, one batch there averages as many as 400,000 bottles.')],
          q2: { zh: '那些老菩薩每天都在那邊蹲著分類瓶罐，我真的非常感動！', en: 'Those elder bodhisattvas crouch there every day sorting bottles and cans. I am truly moved!', who: T('黃華德', 'Huang Hua-de') },
          s: ['fm322'] },
        { k: 'story', lay: 'T', h: T('這毛毯非常溫暖', 'This blanket is very warm'),
          p: [T('二〇〇六年起，回收的寶特瓶透過專業製程化身成環保毛毯，成為海內外賑災發放的好幫手。一位烏克蘭難民凱特這樣說：', 'From 2006 recycled bottles, through skilled processing, became eco-blankets, a great help in relief distributions at home and abroad. Kate, a Ukrainian refugee, said this:')],
          q: { zh: '我沒想到說，這裡早上會這麼冷，這毛毯非常溫暖，而且我媽告訴我，這又是寶特瓶做的，這樣對環境很友善，這樣非常地好。', en: 'I did not expect it to be so cold here in the morning. This blanket is very warm, and my mother told me it is made from plastic bottles too, which is kind to the environment. That is very good.', who: T('凱特　烏克蘭難民', 'Kate, a Ukrainian refugee') },
          more: [T('志工用心分類，回收的瓶子製成毛毯，送到有需要的鄉親手上。從資源分類做起，人人都能付出。', 'Volunteers sort with care, and collected bottles become blankets for those in need. Starting with sorting, everyone can give.')],
          note: T('她受訪的時間、地點和年齡，原文未載，本頁也不寫她收到哪一批毛毯。', 'The source does not give the date or place of the interview or her age, and this page does not say which shipment of blankets she received.'),
          s: ['o101017'] }
      ] },

    /* ───── 第五段 ───── */
    { id: 'v5a', era: 'e20', y: '1992–2020', nav: T('清淨在源頭', 'Clean at the source'),
      ask: T('回收做得這麼好，為什麼還要講源頭？', 'If recycling is going so well, why talk about the source?'),
      b: [
        { k: 'story', lay: 'T', date: '1992.12.20', h: T('自備一副餐具', 'Bringing your own tableware'),
          p: [T('一九九二年十二月二十日，花蓮慈院員工餐廳全面停用紙製餐具，推行自備餐具運動。這間餐廳每日一餐要供應千人。這件事最早始於院內的環保社，社員以身作則，呼籲大家響應。', 'On 20 December 1992 the staff canteen at the Hualien Tzu Chi hospital stopped using paper tableware altogether and asked people to bring their own. It served a thousand people at a single meal. The idea began with the hospital’s environmental club, whose members led by example.'),
            T('一九九四年，慈濟全面推動環保餐具。二〇〇一年，這個理念延伸到急難救助，賑災全面採用環保餐盒。', 'In 1994 Tzu Chi took up reusable tableware across the organisation. In 2001 the idea reached emergency aid, and relief work moved entirely to eco-friendly meal boxes.')],
          q: { zh: '自備餐盤雖然是一個小細節，但是卻是培養善念的開始', en: 'Bringing your own plate may be a small detail, but it is where a good thought starts to grow.', who: T('花蓮慈院環保社同仁　《慈濟道侶》169 期', 'A member of the hospital’s environmental club, Tzu Chi Companions, no. 169') },
          s: ['fm174', 'i4'] },
        { k: 'story', lay: 'R', date: '2010', h: T('二十年後的一句話', 'A phrase twenty years on'),
          ph: [{ i: 'v_wash', c: cap('水龍頭旁清洗回收瓶的局部。', 'Detail of bottles being washed beside a tap.') }],
          p: [T('回收回來的東西常常很髒。志工忍著臭味，一一分類，才分得出乾淨的、髒的，還有垃圾。二〇一〇年，一對老夫妻環保志工這樣說：', 'What comes back is often filthy. Volunteers bear the smell and sort it piece by piece into clean, dirty and rubbish. In 2010 an elderly couple who volunteer said this:')],
          q: { zh: '哪有辦法，那些髒的如果不收，其中有可以回收的，若載去埋掉，也是傷害大地。', en: 'What else can we do? If the dirty things are not collected, some could still be recycled, and if they are carted off and buried, that harms the land too.', who: T('一對老夫妻環保志工', 'An elderly volunteer couple') },
          more: [T('二〇一〇年，慈濟環保滿二十年，上人呼籲「清淨在源頭」。家家戶戶把用過的東西洗乾淨，再拿到環保站，環保站就不必用大量的水清洗。', 'In 2010, twenty years on, the Master called for cleanliness at the source. If every household washes what it has used before bringing it in, the stations do not need great amounts of water to clean it.')],
          q2: { zh: '從源頭開始保持乾淨再回收。', en: 'Begin at the source, keep things clean, and then recycle.', who: SHANGREN },
          s: ['fm335'] },
        { k: 'loop', bare: 1, h: T('往回走', 'Walking back upstream'),
          t: T('回收是最後一站。往回走，才看得到源頭在哪裡。', 'Recycling is the last stop. Only by walking back does one see where the source is.'),
          q: { zh: '將心的欲念節制，就不會一直消費，再一直製造。', en: 'When the mind’s desires are restrained, we will not go on consuming, and go on producing.', who: SHANGREN },
          lab: [T('一念心', 'A thought'), T('購買', 'Buying'), T('使用', 'Using'), T('丟棄', 'Discarding'), T('環保站', 'Station')],
          note: T('示意畫面。', 'An illustration.'), s: ['fm335'] },
        { k: 'quote', big: 1, zh: '人心要淨化，才懂得節儉、懂得愛物惜福。', en: 'Only when people’s hearts are purified do they know thrift, and how to treasure things and cherish their blessings.', who: SHANGREN, s: ['fm344'] },
        { k: 'story', lay: 'T', date: '2012–2019', h: T('走進國際會議', 'Into international meetings'),
          p: [T('二〇一二年六月十七日，美國與巴西慈濟志工參與聯合國永續發展大會，在里約熱內盧舉辦「永續消費模式」講座，提倡「日食八分飽．兩分助人」，並展示寶特瓶製成的環保產品。', 'On 17 June 2012, Tzu Chi volunteers from the United States and Brazil took part in the UN Conference on Sustainable Development. In Rio de Janeiro they held a talk on sustainable consumption, promoting eating to 80 per cent full and using the other 20 to help others, and showed products made from bottles.'),
            T('聯合國氣候變化大會簡稱 COP。慈濟基金會以非政府組織成員身分，從 COP19 波蘭華沙、COP20 祕魯利馬到 COP21 法國巴黎，連續第三年受邀與會，並首次在場內舉辦記者會。', 'The UN climate change conference is known as COP. As a non-governmental organisation, the Tzu Chi Foundation was invited three years running, from COP19 in Warsaw and COP20 in Lima to COP21 in Paris, where it held a press conference inside the venue for the first time.'),
            T('二〇一九年一月九日，慈濟基金會取得聯合國環境署（UNEP）非政府組織觀察員身分，可以出席相關會議，提出書面建言或發表計畫。', 'On 9 January 2019 the Foundation gained observer status with the UN Environment Programme as a non-governmental organisation, able to attend relevant meetings and to submit written advice or present plans.')],
          s: ['fm355', 'fm390', 'fm429'] },
        { k: 'story', lay: 'L', date: '2020.07.16', h: T('開到校園去的貨櫃車', 'A container truck that drives to schools'),
          ph: [{ i: 'v_truck', c: cap('行動環保教育車車身局部。', 'Detail of the side of the mobile environmental education truck.') }, { i: 'v_chop', c: cap('車內「一筷省水」體驗站局部。', 'Detail of the “one chopstick saves water” activity inside the truck.') }],
          p: [T('二〇二〇年七月十六日，行動環保教育車在嘉義「科學168教育博覽會」首度亮相。車由兩個四十呎的大貨櫃打造而成，分別以「與地球共生息」和「低碳心生活」為主題，裡面有十二道闖關遊戲。車頂排著二十二片太陽能板，供應車上的電力；「一筷省水」體驗站的水，流下去還能抽上來循環利用。', 'On 16 July 2020 the mobile environmental education truck made its debut at the Science 168 Education Fair in Chiayi. Built from two forty-foot containers, it has the themes “Living in harmony with the Earth” and “Low-carbon living”, and twelve challenge games inside. Twenty-two solar panels on the roof supply its power, and the water at the “one chopstick saves water” stop is pumped back up and reused.'),
            T('二〇二〇年起，慈濟也在每年四月二十二日世界地球日舉辦「蔬食無痕家庭日」。教育車深入校園與偏鄉，把源頭的道理帶到孩子面前。', 'Since 2020 Tzu Chi has also held a vegetarian family day each year on Earth Day, 22 April. The truck goes deep into schools and remote areas, bringing the idea of the source to children.'),
            T('乾淨從家裡開始，節制從一念心開始。這是人人都做得到的事。', 'Cleanliness starts at home, and restraint starts with a single thought. This is something anyone can do.')],
          s: ['o200716', 'i4'] }
      ] },

    /* ───── 第六段 ───── */
    { id: 'v6a', era: 'my', y: T('馬來西亞', 'Malaysia'), nav: T('在馬來西亞', 'In Malaysia'),
      ask: T('我們這裡，也有人這樣做嗎？', 'Are people doing this where we live too?'),
      b: [
        { k: 'story', lay: 'T', date: '1995.05', h: T('一塊告示板，一間小木屋', 'A notice board and a wooden hut'),
          p: [T('一九九五年五月，簡慈露在馬六甲慈濟每月慈善發放日宣導環保，邀約志工江秀玉等人製作資源回收告示板。參加發放的吉隆坡志工鄧淑蓮很認同，回到吉隆坡後也投入推動。', 'In May 1995, at Tzu Chi’s monthly charity distribution in Melaka, Jian Ci-lu spoke about recycling and asked volunteers including Jiang Xiu-yu to make a recycling notice board. Deng Shu-lian, a Kuala Lumpur volunteer who was there, agreed with the idea and took it back with her.'),
            T('一九九六年一月，吉隆坡慈濟人成立資源回收組，分成五區：吉隆坡三區、八打靈再也一區、巴生一區，每月第一個星期天是資源回收日。', 'In January 1996, Tzu Chi people in Kuala Lumpur formed a recycling team in five areas, three in Kuala Lumpur, one in Petaling Jaya and one in Klang, with the first Sunday of each month as recycling day.'),
            T('雪隆分會及所屬據點的第一個環保定點，一九九六年成立於巴生南方鎮花園。志工蔡真梅提供住家後面搭建的小木屋，從事五金業的洪金生借出卡車，把資源載給回收商。一九九七年六月二十九日，八打靈 SS2 環保點成立，是雪隆第一個設在社區的環保點，每月固定在 SS2 早市場舉行環保日。', 'The first recycling point of the Selangor and Kuala Lumpur Branch and its offices opened in 1996 at Nanfangzhen Garden in Klang. The volunteer Cai Zhen-mei offered a wooden hut built behind her home, and Hong Jin-sheng, who ran a hardware business, lent a truck to take the materials to the dealer. On 29 June 1997 a recycling point opened at SS2 in Petaling Jaya, the first to be set up in a community, with a recycling day each month at the SS2 morning market.')],
          note: T('馬來西亞人物、地名的英文多是拼音，待分會給官方寫法。', 'English spellings of Malaysian names and places are mostly romanised here, pending the official forms from the branch.'),
          s: ['xa'] },
        { k: 'story', lay: 'R', date: '1997–2000', h: T('東馬：沒有回收商的時候', 'East Malaysia: when there was no dealer'),
          ph: [{ i: 'v_kch', c: T('古晉承恩花園環保站招牌局部。照片：雪隆分會提供。', 'Part of the sign at the Cheng’en Garden station in Kuching. Photo: Selangor and Kuala Lumpur Branch.') }],
          p: [T('一九九八年，雪隆分會轄下東馬地區的第一個環保站在古晉成立。民眾黃永福把輝盛區承恩花園一間獨立式住宅借給慈濟。', 'In 1998 the first recycling centre in East Malaysia under the Selangor and Kuala Lumpur Branch opened in Kuching, when Huang Yong-fu lent Tzu Chi a detached house.'),
            T('沙巴的路更難走。亞庇慈濟人一九九七年開始，卻苦無回收商，最後找到距離亞庇兩百公里的金馬尼士回收廠。一九九八年一月正式展開，五月機器故障，暫停回收紙類；八月回收廠因資金問題關閉，所有回收活動暫停。', 'Sabah was harder. Tzu Chi people in Kota Kinabalu began in 1997 but could find no dealer, until they reached a plant two hundred kilometres away. Work began properly in January 1998. In May the machines broke down and paper stopped; in August the plant closed for lack of funds and all collection stopped.'),
            T('一九九九年四月，距離亞庇六公里外的必打丹回收廠願意配合。二〇〇〇年三月，回收廠再次面臨關閉。亞庇志工黃靖發為了讓環保持續，發心收購，命名為「綠淨環保有限公司」。', 'In April 1999 another plant, six kilometres from Kota Kinabalu, agreed to work with them. In March 2000 it too faced closure. To keep the work going, the Kota Kinabalu volunteer Huang Jing-fa bought it and gave it a new company name.')],
          s: ['xb', 'xc'] },
        { k: 'story', lay: 'L', date: '2007–2011', h: T('下班以後', 'After work'),
          ph: [{ i: 'v_mkt', c: T('「一協一站」推行後，大城堡環保站開始推動夜間環保。局部。照片：李文傑。', 'After the “one team, one station” drive, the Dachengbao station began evening recycling. Detail. Photo: Li Wen-jie.') }],
          p: [T('二〇〇七年底，雪隆試推夜間環保，因為大多數志工和民眾仍需上班，下班後才有時間做環保。推動並不容易。', 'In late 2007 the branch tried evening recycling, because most volunteers and residents worked during the day and only had time after hours. It was not easy to get going.'),
            T('二〇一〇年十一月二十九日，雪隆慈濟人回臺向上人發願「一協一站」，由一個協力組負責一個環保站。協力組是社區的志工編組。當時雪隆轄下有十個環保站。願發了，落實要一步一步來，二〇一一年下旬，各社區的環保站才慢慢成立。', 'On 29 November 2010, the branch’s volunteers returned to Taiwan and vowed to the Master: “one team, one station”, each community volunteer team taking charge of a station. There were ten stations under the branch at the time. A vow still has to be carried out step by step, and community stations came up slowly from late 2011.'),
            T('截至二〇二二年，約一半的環保站都帶動夜間環保。', 'By 2022 about half the stations were running evening recycling.')],
          s: ['xe'] },
        { k: 'story', lay: 'R', date: '2011', h: T('兩個太子園', 'Two stations, one name'),
          ph: [{ i: 'v_bags', c: T('裝滿回收物的袋子局部。照片：凌碗有。', 'Detail of bags full of recyclables. Photo: Ling Wan-you.') }],
          p: [T('二〇一〇年「一協一站」的願景提出後，有善心人士願意讓慈濟無償使用雙溪毛糯的一棟雙層店屋。大多數志工是上班族，只能利用下班或假日整理，清掃、裝潢，架設電纜、電燈，重新安裝天花板。二〇一一年四月十七日，雙溪毛糯太子園環保站啟用，是「一協一站」推動後的第一個環保站。', 'After the “one team, one station” vision was announced in 2010, a well-wisher offered a two-storey shophouse in Sungai Buloh rent-free. Most volunteers had day jobs and worked evenings and holidays, cleaning, fitting out, running cables and lights, and rehanging the ceiling. On 17 April 2011 the Sungai Buloh Sri Putra station opened, the first after the drive began.'),
            T('同年七月，蕉賴太子園社區也成立了第一個社區環保站。當時環保站還沒有負責人。修理汽車冷氣的陳春明覺得要持續經營，必須有人接手，和太太商量後結束生意，承擔起環保站的負責人。', 'That July, the separate Taizi Garden community in Cheras opened its first community station. It had no one in charge yet. Chen Chun-ming, who repaired car air conditioners, felt that someone had to take it on if it was to last. After talking with his wife he closed his business and took charge.')],
          q: { zh: '在還沒加入慈濟之前，我的脾氣很壞，每天面對各式各樣的客人，遇到有人想要佔便宜時，就馬上發脾氣；加入慈濟後，上人的身教與精神感動了我。我要跟著上人的腳步，改掉自己的習氣，消除無明的煩惱，少欲知足就是心靈環保。', en: 'Before I joined Tzu Chi I had a bad temper. I faced all sorts of customers every day, and whenever someone tried to take advantage I would flare up. After joining, the Master’s example moved me. I want to follow in her steps, change my habits and clear away the troubles of ignorance. Wanting little and being content: that is environmental protection of the heart.', who: T('陳春明', 'Chen Chun-ming') },
          s: ['xf', 'xd'] },
        { k: 'boat', bare: 1, h: T('一個月兩趟', 'Twice a month'),
          t: T('處理好的回收物，要過海才到得了回收中心。', 'Once processed, the recyclables have to cross the sea to reach the recycling centre.'),
          lab: [T('吉膽島', 'Pulau Ketam'), T('巴生港口', 'Port Klang'), T('約一小時', 'About an hour')],
          items: [[T('前一晚', 'The night before'), T('把回收物搬上船', 'Recyclables are loaded')], [T('隔天早上七點半', '7.30 next morning'), T('送達巴生港口', 'Arrival at Port Klang')], [T('上岸以後', 'Ashore'), T('一至兩輛大卡車，載到回收中心', 'One or two trucks to the centre')]],
          note: T('示意畫面，航線不按比例。', 'An illustration. The route is not to scale.'), s: ['xh'] },
        { k: 'story', lay: 'T', date: '2011.10.15', h: T('吉膽島的船', 'The boat of Pulau Ketam'),
          ph: [{ i: 'v_isle', c: T('吉膽島的水上村落局部。照片：蔡福汶提供。', 'Part of the stilt village on Pulau Ketam. Photo: courtesy of Cai Fu-wen.') }],
          p: [T('雪蘭莪州巴生港岸外的吉膽島上沒有垃圾場，居民養成把垃圾往海裡扔的習慣。二〇〇八年，島上第一位慈濟志工陳秀蘭想宣導環保，卻沒有人能配合用船把資源運到本土。', 'Pulau Ketam, off Port Klang in Selangor, had no rubbish dump, and people had grown used to throwing rubbish into the sea. In 2008 Chen Xiu-lan, the first Tzu Chi volunteer on the island, wanted to promote recycling, but no one could carry the material to the mainland.'),
            T('「一協一站」推動之後，在巴生志工莊榮月的鼓勵下，陳秀蘭、蔡福汶和洪火炎找到一處閒置的電廠辦公室及倉庫，屋主免費出租。二〇一一年十月十五日，吉膽島環保站成立。', 'After the “one team, one station” drive began, with encouragement from the Klang volunteer Zhuang Rong-yue, Chen, Cai Fu-wen and Hong Huo-yan found an unused power-station office and store, which the owner let them have free. The Pulau Ketam station opened on 15 October 2011.'),
            T('島民起初質疑志工只是想藉變賣資源謀利。志工把垃圾從海中撈上來，再一一清洗乾淨。默默做下去，島民才開始主動把回收物送來。志工又製作環保鐵籠，放在島上不同的地方，讓居民就近回收。', 'At first islanders suspected the volunteers only wanted to profit from selling the material. The volunteers fished rubbish out of the sea and washed it piece by piece. They kept on quietly, until islanders began bringing recyclables themselves. They also built steel cages and placed them around the island so people could recycle close to home.'),
            T('回收物雇船運到巴生港口要一個小時，每次費用大概一百令吉。漁夫王慕銘不忍志工辛苦，還要自費雇船，把自己的漁船無償借出。此後一個月航行兩趟，最高紀錄曾有四噸，卡車載了四趟才處理完。二〇一六年，這裡升格為吉膽島環保教育站。', 'Hiring a boat to Port Klang took an hour and cost about a hundred ringgit a time. The fisherman Wang Mu-ming could not bear to see volunteers paying from their own pockets, and lent his fishing boat free of charge. From then on it sailed twice a month. The record load was four tonnes, which took a truck four trips. In 2016 the site became the Pulau Ketam Environmental Education Station.')],
          s: ['xh'] },
        { k: 'story', lay: 'L', h: T('每趟出海，十多袋垃圾', 'More than ten sacks from every trip'),
          ph: [{ i: 'v_boat', c: T('志工蔡福汶經常駕駛著自己的小船，收集海中的垃圾。局部。照片：蔡福汶提供。', 'The volunteer Cai Fu-wen often takes his own small boat out to gather rubbish from the sea. Detail. Photo: courtesy of Cai Fu-wen.') }, { i: 'v_iron', c: T('吉膽島的環保鐵籠局部。照片：覃平福。', 'Detail of a recycling cage on Pulau Ketam. Photo: Qin Ping-fu.') }],
          p: [T('蔡福汶當了二十多年漁夫，常在捕魚時看到海面上的垃圾，每一趟出海都撈起十多袋。別人認為這沒有意義，他仍然做下去。環保站初成立時空間狹窄，空氣裡有後方工廠的刺鼻化學味，他就在裡面處理分類。島上的環保鐵籠和漁網回收袋，都出自他的巧手。', 'Cai Fu-wen fished for more than twenty years. He often saw rubbish on the water, and on each trip he hauled in ten or more sacks. Others saw no point in it, and he carried on. When the station opened it was cramped, the air sharp with chemicals from the factory behind, and he sorted in there all the same. The island’s steel cages and fishing-net bags are his own design.')],
          q: { zh: '剛開始的時候最辛苦，志工非常少，若沒有工作，我一吃飽就會去做環保，做到凌晨', en: 'The beginning was the hardest. There were very few volunteers. When I had no work I would go and do recycling as soon as I had eaten, until the early hours.', who: T('蔡福汶', 'Cai Fu-wen') },
          s: ['xh'] },
        { k: 'story', lay: 'R', date: '2019', h: T('開車進來的環保站', 'The drive-through station'),
          ph: [{ i: 'v_board', c: T('車尾廂裡整理好的紙板局部。照片：顏偉明。', 'Detail of sorted cardboard in a car boot. Photo: Yan Wei-ming.') }],
          p: [T('二〇一九年，雪隆的哥打哥文寧環保教育站啟用，也叫「得來速」環保站。居民把車開進站內，把整理好的回收物分別放入分類鐵箱，即可離去，不影響交通，成為全馬首座自助式環保站。站裡有教育區、閱讀區和占地最廣的分類區。', 'In 2019 the Kota Kemuning environmental education station opened, known as the drive-through station. Residents drive in, put their sorted recyclables into steel bins and leave without holding up traffic. It became the first self-service station in Malaysia. It has an education area, a reading area and, largest of all, a sorting area.')],
          s: ['xg'] },
        { k: 'story', lay: 'T', date: '2025.06.29', h: T('彎下腰的雙手', 'Hands that bend down'),
          p: [T('二〇二五年六月二十九日，雪隆慈濟舉辦環保三十年撿跑，全馬五十二個地點同步參與，逾八千四百人一邊行走、一邊拾起路旁廢棄物。兩小時清出垃圾 3,937 公斤，另回收資源 3,646 公斤。', 'On 29 June 2025, Tzu Chi KL & Selangor marked thirty years of recycling with a plogging event. More than 8,400 people at 52 sites across Malaysia walked and picked up litter along the way. In two hours they collected 3,937 kg of rubbish and recycled a further 3,646 kg.'),
            T('家庭、學生、企業與地方代表一起走。在環保站分類的雙手，這一天走上了社區的街道。', 'Families, students, companies and local representatives walked together. The hands that sort at the centres went out that day onto community streets.'),
            T('從一塊告示板到全馬各地的環保站，靠的都是一雙雙願意動手的手。下一雙手，可以是你的。', 'From one notice board to stations across Malaysia, it has all rested on hands willing to work. The next pair could be yours.')],
          s: ['nPlog'] }
      ] },

    /* ───── 數字 ───── */
    { id: 'vnum', era: 'num', y: '數字', yen: 'Numbers', h: T('數字裡的環保', 'Environmental protection in numbers'), nav: T('數字', 'Numbers'), b: [{ k: 'ledger' }] },
    /* ───── 沿革 ───── */
    { id: 'vall', era: 'all', y: '沿革', yen: 'Timeline', h: T('沿革與影音', 'Timeline and films'), lead: T('六段路之外的日期和原始出處，都在這裡。', 'Dates and original sources beyond the six stretches are all here.'), nav: T('沿革與影音', 'Timeline and films'), b: [{ k: 'films' }, { k: 'records' }, { k: 'sources' }] }
  ];

  CH.blocks = [
    { id: 'v1', y: '1990', h: T('鼓掌的這雙手', 'The hands that clapped'), ch: ['v1a'], cover: 'v_cart2', tun: 'v_w1' },
    { id: 'v2', y: '1992–2019', h: T('街頭巷尾的道場', 'A place of practice in the streets'), ch: ['v2a'], cover: 'v_wall', tun: 'v_w2' },
    { id: 'v3', y: '1990–2014', h: T('分得很細的手', 'Hands that sort finely'), ch: ['v3a'], cover: 'v_cage', tun: 'v_w3' },
    { id: 'v4', y: '2004–2010', h: T('一支瓶子走多遠', 'How far a bottle travels'), ch: ['v4a'], cover: 'v_yarn', tun: 'v_w4' },
    { id: 'v5', y: '1992–2020', h: T('清淨在源頭', 'Clean at the source'), ch: ['v5a'], cover: 'v_chop', tun: 'v_w5' },
    { id: 'v6', y: T('馬來西亞', 'Malaysia'), h: T('在馬來西亞', 'In Malaysia'), ch: ['v6a'], cover: 'v_boat', tun: 'v_w6' }
  ];

  CH.ui = {
    hubK: T('環保', 'Environmental Protection'), hubH: T('六段路，從一雙手開始', 'Six stretches, starting from one pair of hands'),
    hubS: T('一段一段走。走完一段，就蓋一個章。', 'Walk them one at a time. Each one you finish earns a stamp.'),
    start: T('從這裡開始', 'Start here'), walked: T('走過了', 'Walked'), nextTun: T('下一個時空隧道', 'Next time tunnel'), nextOf: T('下一段', 'Next'),
    back: T('回六段路', 'Back to the six stretches'), road: T('回八大腳印', 'Back to the Eight Footprints'), skip: T('跳過', 'Skip'),
    left: T('這一段還有', 'Still ahead'), leftU: T('個故事', 'stories'), seg: T('第 {n} 段／共 6 段', 'Part {n} of 6'), done: T('走完了這一段', 'You finished this part'), recH: T('環保沿革', 'Timeline')
  };

  CH.ledger = [
    { h: T('臺灣', 'Taiwan'), rows: [
      { n: '92,520', u: T('位', 'people'), l: T('環保志工', 'recycling volunteers'), w: T('2024 年底', 'End of 2024'), s: 'i4', big: 1 },
      { n: '78,299,856', u: T('公斤', 'kg'), l: T('回收量，單一年度', 'recycled in a single year'), w: T('2025 年', '2025'), s: 'i60' },
      { n: '1,704,516,281', u: T('公斤', 'kg'), l: T('紙類回收總重量，累計', 'paper recycled, cumulative'), w: T('1992–2025 年', '1992–2025'), s: 'i60' },
      { n: '3,400多萬', nen: 'Over 34 million', u: T('棵', 'trees'), l: T('上一項紙類重量換算成二十年生大樹。這是重量換算，不是真的種了這麼多樹', 'the paper above converted into 20-year-old trees. This is a conversion by weight, not trees actually planted'), w: T('1992–2025 年', '1992–2025'), s: 'i60' }
    ] },
    { h: T('全球', 'Worldwide'), rows: [
      { n: '19', u: T('個', ''), l: T('推動環保的國家地區', 'countries and regions promoting recycling'), w: T('2025 年底', 'End of 2025'), s: 'c25', big: 1 },
      { n: '超過 570', nen: 'Over 570', u: T('個', ''), l: T('環保站', 'recycling stations'), w: T('2025 年底', 'End of 2025'), s: 'c25' },
      { n: '超過 12,400', nen: 'Over 12,400', u: T('個', ''), l: T('社區環保點', 'community recycling points'), w: T('2025 年底', 'End of 2025'), s: 'c25' },
      { n: '超過 108,000', nen: 'Over 108,000', u: T('位', ''), l: T('環保志工', 'recycling volunteers'), w: T('2025 年底', 'End of 2025'), s: 'c25' }
    ] },
    { h: T('毛毯', 'Blankets'), rows: [
      { n: '1,417,024', u: T('件', 'items'), l: T('賑災毛毯，送往 47 個國家地區。這是賑災毛毯總數，不等於全部由寶特瓶做成', 'relief blankets sent to 47 countries and regions. This is the total for relief blankets and does not mean all were made from bottles'), w: T('累計至 2025.12.31', 'To 31 Dec 2025'), s: 'i60', big: 1 },
      { n: '40,137', u: T('條', ''), l: T('援助烏克蘭的環保毛毯。這是 2022 年鑑的數字，不是全球總數', 'eco-blankets in aid for Ukraine. A figure from the 2022 almanac, not a global total'), w: T('2022 年鑑', '2022 almanac'), s: 'i60' }
    ] },
    { h: T('行動環保教育車', 'Mobile education truck'), rows: [
      { n: '303', u: T('場', ''), l: T('主題展示', 'themed exhibitions'), w: T('2020–2025 年', '2020–2025'), s: 'i60' },
      { n: '473,485', u: T('人次', 'visits'), l: T('互動人數。人次，同一人多次參加都算', 'interactions. One person taking part more than once counts each time'), w: T('2020–2025 年', '2020–2025'), s: 'i60' }
    ] },
    { h: T('全馬', 'Malaysia'), rows: [
      { n: '154', u: T('個', ''), l: T('環保站', 'recycling centres'), w: T('2024.12.31', '31 Dec 2024'), s: 'al24', big: 1 },
      { n: '776', u: T('個', ''), l: T('社區環保點', 'community recycling points'), w: T('2024.12.31', '31 Dec 2024'), s: 'al24' },
      { n: '12,720', u: T('位', ''), l: T('環保志工', 'recycling volunteers'), w: T('2024.12.31', '31 Dec 2024'), s: 'al24' }
    ] },
    { h: T('雪隆分會轄下', 'Selangor and Kuala Lumpur Branch'), rows: [
      { n: '97', u: T('個', ''), l: T('環保站', 'recycling centres'), w: T('截至 2022 年', 'To 2022'), s: 'xn' },
      { n: '348', u: T('個', ''), l: T('環保點', 'recycling points'), w: T('截至 2022 年', 'To 2022'), s: 'xn' }
    ] }
  ];
  CH.ledgerNote = T('各項來源、年份和範圍不同，不互相加總。全球環保站、環保點和志工人數，同一截止日有兩套統計，本頁寫「超過」，待最終年鑑定案。雪隆與全馬年份、範圍都不同，分開列。', 'Sources, years and scope differ, so these figures are not added together. For stations, points and volunteers worldwide, two sets of figures exist for the same date, so this page says “over”, pending the final almanac. The branch and Malaysia figures differ in year and scope and are listed apart.');

  CH.films = [
    { id: 'rEdm_5rnR44', zh: '用鼓掌的雙手做環保', en: 'Doing recycling with the hands that clap', y: '1990' },
    { id: 'jRaieNWO3Vw', zh: '人援會研發環保毛毯', en: 'The humanitarian aid association develops eco-blankets', y: '2006' },
    { id: 'tEWSMbsvhTA', zh: '慈悲的後盾', en: 'The backing of compassion', y: '2008' },
    { id: '7uo8FFYLYmk', zh: '清淨在源頭', en: 'Clean at the source', y: '2010' },
    { id: 'RwYr8dLjSlk', zh: '環保站社區關懷', en: 'Community care at recycling stations', y: '2015' },
    { id: 'E4Lp75IvHJ8', zh: '檳城直落巴巷淨灘', en: 'A beach clean-up at Teluk Bahang, Penang', y: '2025' },
    { id: 'hCwwA9_baIY', zh: '全國人居獎傑出組織', en: 'A national award for Tzu Chi in Malaysia', y: '2025' },
    { id: 'CK8drV6Gx7Q', zh: '慈濟開啟環保志業', en: 'How Tzu Chi’s recycling work began', y: '2026' },
    { id: 'LA6FpHKNbNc', zh: '環保講座入校園', en: 'An environmental talk at a school in Penang', y: '2026' },
    { id: 'vTTCaJy-rc4', zh: '環保防災勇士 PK 賽在馬來西亞', en: 'The PaGamO contest in Malaysia', y: '2026' }
  ];

  CH.filters = [['all', T('全部', 'All')], ['first', T('第一次', 'Firsts')], ['station', T('環保站', 'Stations')], ['bottle', T('寶特瓶', 'Bottles')], ['source', T('源頭', 'Source')], ['world', T('國際', 'International')], ['my', T('馬來西亞', 'Malaysia')]];
  CH.records = [
    ['1990.08.23', 'first', '上人在臺中新民商工吳尊賢社會公益講座，呼籲用鼓掌的雙手做環保', 'The Master calls for recycling at a lecture in Taichung', 'fm127'],
    ['1990.09', 'first station', '臺中黎明新村簡素絹自家環保點成立（另有上人憶述的楊順苓一說，及八月一說）', 'Jian Su-juan’s home recycling point in Liming New Village, Taichung (other accounts exist)', 'o900823'],
    ['1990.09', 'first', '慈濟收到第一筆環保善款', 'Tzu Chi receives its first environmental donation', 'o900823'],
    ['1991.03', '', '慈濟與金車教育基金會合作，展開預約人間淨土活動（《慈濟歷史上的今天》記三月，法脈資料庫 00142 記四月一日）', 'The Reserving a Pure Land campaign with the King Car Education Foundation (On This Day says March; Lineage Archive no. 00142 says 1 April)', 'o900823'],
    ['1992', 'station', '陳清雲提供高雄八卦寮自家三合院做環保站', 'Chen Qing-yun offers the family house in Bagualiao, Kaohsiung, as a station', 'c16'],
    ['1992.12.20', 'source', '花蓮慈院員工餐廳全面停用紙製餐具', 'The Hualien hospital staff canteen stops using paper tableware', 'fm174'],
    ['1993', 'first', '慈濟第一部環保車在臺中', 'Tzu Chi’s first recycling truck, in Taichung', 'o900823'],
    ['1994', 'source', '慈濟全面推動環保餐具', 'Tzu Chi takes up reusable tableware throughout', 'fm174'],
    ['1995.05', 'my', '馬六甲製作資源回收告示板', 'A recycling notice board is made in Melaka', 'xa'],
    ['1996.01', 'my', '吉隆坡慈濟人成立資源回收組，分五區', 'Kuala Lumpur volunteers form a recycling team in five areas', 'xa'],
    ['1996.01.27', 'station', '高雄區環保志工歲末祝福，上人談街頭巷尾的道場', 'At a year-end blessing in Kaohsiung the Master speaks of practice in the streets', 'fm127'],
    ['1996', 'my first', '雪隆分會及所屬據點第一個環保定點，巴生南方鎮花園', 'The branch’s first recycling point, Nanfangzhen Garden, Klang', 'xa'],
    ['1996.10.20', '', '九九九大家一起來掃地，全臺近五萬人參與', 'The 999 Sweep Together event, with nearly 50,000 people across Taiwan', 'o900823'],
    ['1997.04.02', '', '捷運淡水線通車，慈濟掃街', 'Tzu Chi sweeps the streets as the Tamsui metro line opens', 'o900823'],
    ['1997.06.29', 'my', '八打靈 SS2 環保點成立', 'The SS2 recycling point opens in Petaling Jaya', 'xa'],
    ['1998', 'my first', '雪隆分會轄下東馬第一個環保站在古晉成立', 'The first East Malaysian station under the branch opens in Kuching', 'xb'],
    ['1999', 'station first', '中山大學指定八卦寮環保站為環境教育課程學習場域，成為慈濟第一個環保教育站', 'National Sun Yat-sen University names Bagualiao as a learning site, Tzu Chi’s first education station', 'c16'],
    ['2001', 'source', '賑災全面採用環保餐盒', 'Relief work moves entirely to eco-friendly meal boxes', 'i4'],
    ['2004.08.13', 'bottle', '慈濟國際人道援助會成立', 'The Tzu Chi International Humanitarian Aid Association is founded', 'fm304'],
    ['2005.06.03', '', '上人提出環保五化：年輕化、生活化、知識化、家庭化、心靈化', 'The Master sets out five aims for recycling: younger, everyday, informed, in the family, and of the heart', 'o900823'],
    ['2006.09.30', 'bottle', '人援會呈上回收綠色寶特瓶製成的長纖毛毯', 'The association presents a long-fibre blanket made from green bottles', 'fm304'],
    ['2007.04', 'bottle first', '環保毛毯首次應用於國際賑災，送往菲律賓', 'Eco-blankets used in international relief for the first time, in the Philippines', 'fm304'],
    ['2007 年底', 'my', '雪隆試推夜間環保', 'The branch tries evening recycling', 'xe'],
    ['2008 年底', 'bottle', '五位實業家志工出資成立大愛感恩科技公司', 'Five volunteers in business found Da Ai Technology', 'fm322'],
    ['2010', 'source', '慈濟環保二十年，上人呼籲清淨在源頭', 'At twenty years, the Master calls for cleanliness at the source', 'fm335'],
    ['2010.11.29', 'my', '雪隆慈濟人向上人發願「一協一站」', 'Branch volunteers vow “one team, one station”', 'xe'],
    ['2011.04.17', 'my', '雙溪毛糯太子園環保站啟用', 'The Sungai Buloh Sri Putra station opens', 'xf'],
    ['2011.10.15', 'my', '吉膽島環保站成立', 'The Pulau Ketam station opens', 'xh'],
    ['2012.06.17', 'world', '慈濟志工在里約熱內盧舉辦「永續消費模式」講座', 'Tzu Chi volunteers hold a talk on sustainable consumption in Rio de Janeiro', 'fm355'],
    ['2015.09.09', 'station', '社區照顧關懷據點在雙和聯絡處揭牌', 'Community care points launched at the Shuanghe office', 'fm378'],
    ['2016', 'my', '吉膽島環保站升格為環保教育站', 'The Pulau Ketam station becomes an education station', 'xh'],
    ['2019.01.09', 'world', '慈濟基金會取得聯合國環境署非政府組織觀察員身分', 'The Foundation gains UNEP observer status', 'fm429'],
    ['2019', 'my first', '哥打哥文寧環保教育站啟用，全馬首座自助式環保站', 'The Kota Kemuning station opens, Malaysia’s first self-service station', 'xg'],
    ['2020.07.16', 'source', '行動環保教育車在嘉義首度亮相', 'The mobile education truck makes its debut in Chiayi', 'o200716'],
    ['2021.08.30', 'source', '環保防災勇士 PK 賽起跑，第一年近一千所學校參賽', 'The PaGamO environmental and disaster-prevention contest begins, with nearly 1,000 schools in its first year', 'o230409'],
    ['2022.03.27', 'source world', '首屆環保防災勇士 PK 賽總決賽，美國、加拿大、新加坡、馬來西亞、印尼等六國 145 位選手在線參與國際盃', 'First finals of the contest: 145 players from six countries, including the United States, Canada, Singapore, Malaysia and Indonesia, join the international cup online', 'o230409'],
    ['2023.04.09', 'source world', '第二屆 PaGamO 環保防災勇士 PK 賽全球總決賽，選手從近兩千所學校選拔而出', 'Second global finals of the PaGamO contest, with players chosen from nearly 2,000 schools', 'o230409'],
    ['2023.06.05', 'source', '慈濟在臺北啟動 Plantārium 蔬食共創空間', 'Tzu Chi launches Plantārium, a plant-based lifestyle space in Taipei', 'nEarth'],
    ['2024.04.23', 'source', '慈濟在 Plantārium 與 21 家企業、7 所學校合作，推動永續飲食教育', 'Tzu Chi partners with 21 companies and seven schools for sustainability education', 'nEarth'],
    ['2025.06.29', 'my', '雪隆慈濟環保三十年撿跑，全馬 52 處逾 8,400 人參與，兩小時清出垃圾 3,937 公斤，另回收資源 3,646 公斤', 'Thirty years of recycling are marked with a plogging event: over 8,400 people at 52 sites across Malaysia collect 3,937 kg of rubbish in two hours and recycle a further 3,646 kg', 'nPlog'],
    ['2025.10.07', 'my', '雪隆慈濟獲馬來西亞人居榮譽獎「城市危機應對傑出組織」類別第二名', 'Tzu Chi KL & Selangor takes second place in the Outstanding Organisation for Urban Crisis Response category of the 2025 Malaysia Scroll of Honour Award', 'nScroll'],
    ['2025.10.16', 'my station', '馬六甲慈濟環保教育站接待東甲 12 人參訪團，交流資源分類', 'The Tzu Chi Recycling Education Centre in Melaka hosts a 12-member delegation from Johor', 'nBubur'],
    ['2026.09.13', 'my station', '馬六甲晉巷工業區環保教育站正式啟用，每週一、四、六開放', 'A new Recycling Education Centre opens in the Cheng industrial area, Melaka, open on Mondays, Thursdays and Saturdays', 'nCheng']
  ];

  CH.next = { ask: T('那麼遠的人，我們也要管嗎？', 'Those people so far away, should we care for them too?'), stop: T('下一站・國際賑災', 'Next stop: International Relief'), href: 'relief.html', tun: 'v_r' };

  CH.footer = T('本頁為樣板，尚未經馬來西亞慈濟分會審核，未發佈。女孩與媽媽是說故事的人。照片除另有說明外，取自慈濟《歷史上的今天》公開頁面，已裁成無人局部；書圖署名；標示「示意」的畫面為插畫，非當年實物。「」內為原文照錄。', 'Sample only: not yet reviewed by Tzu Chi Malaysia and not published. The girl and her mother are storytellers. Unless noted, photos are from the public pages of Tzu Chi, On This Day, cropped to details without people; book images are credited. Scenes marked as illustrations are not real objects of the time. Words inside quotation marks are taken from the sources; their English is a plain translation.');

  /* 六段隧道：同一種 weave，照片、紗色、底色、時長各不同 */
  window.TUN_M = window.TUN_M || {};
  var TM = window.TUN_M;
  var wv = function (ids, yarn, x) { var o = { walk: 'weave', d: 3400, ids: ids.map(function (i) { return 'v_' + i; }), yarn: yarn, bg: '#14170f', tint: '#7f8f78', a0: 0, a1: .12, ink: '#f7eedd', plate: 'rgba(20,22,16,', pa: .72 }; Object.keys(x || {}).forEach(function (k) { o[k] = x[k]; }); return o; };
  TM.v_w1 = wv(['cart', 'cart2', 'back', 'box', 'paper'], ['#6f7f6c', '#a8aca6'], { d: 3900, y: [2026, 1990], bg: '#101622', tint: '#6d7f9a' });
  TM.v_w2 = wv(['wall', 'hand', 'sack', 'bale', 'green'], ['#7c8b74', '#b1b3ab'], { y: [1992, 1999], bg: '#16190f' });
  TM.v_w3 = wv(['cage', 'bask', 'belt', 'shred'], ['#64766a', '#9ea5a0'], { d: 3200, bg: '#10161a', tint: '#6f8f8c' });
  TM.v_w4 = wv(['flake', 'yarn', 'mill', 'fold', 'shirt'], ['#85987f', '#bcbfb8'], { d: 3700, y: [2004, 2008], bg: '#121a14', tint: '#8fae84' });
  TM.v_w5 = wv(['solar', 'truck', 'chop', 'news', 'wash'], ['#5f7468', '#a3aaa4'], { y: [1992, 2019], bg: '#0e1a1c', tint: '#5e9aa6' });
  TM.v_w6 = wv(['isle', 'mkt', 'board', 'can', 'net', 'boat', 'iron', 'bags', 'kch'], ['#6c8373', '#adb2aa'], { d: 3900, y: [1995, 2019], bg: '#0f1c17', tint: '#5f9a7e' });
  TM.v_r = { walk: 'route', d: 3600, ids: ['v_r1', 'v_r2', 'v_r3'], pts: [[121, 23.7, '臺灣'], [116.4, 39.9, '北京'], [118.1, 32.1, '全椒']], zoom: 3, dot: 'rgba(190,200,185,.5)', line: '#c9d3bd', bg: '#10161a', tint: '#7f8f78', a0: 0, a1: .12, ink: '#f7eedd', plate: 'rgba(20,22,16,', pa: .72 };

  var api = function () { return CH.api; };
  /* 效果：同一個外框，只換中間舞台 */
  var fxw = function (cls, b, st) {
    var A = api();
    return '<section class="fx ' + cls + '" data-fx><div class="fx-s"><div class="fx-t">' + (b.d ? '<p class="fx-d">' + b.d + '</p>' : '') + '<h3 class="t">' + A.B(b.h) + '</h3>' + (b.t ? A.B(b.t, 'p') : '') + A.quote(b.q) + '</div>' + st + '<div class="fx-n"><small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></section>';
  };
  var SVG = {
    paper: '<svg viewBox="0 0 60 44"><rect x="2" y="4" width="56" height="36" rx="2" fill="#e9e2cf" stroke="#6b6658"/><path d="M8 12h20M8 18h20M8 25h44M8 32h44" stroke="#6b6658" fill="none"/></svg>',
    can: '<svg viewBox="0 0 36 52"><rect x="3" y="6" width="30" height="42" rx="3" fill="#9aa3a8" stroke="#4f585e"/><ellipse cx="18" cy="6" rx="15" ry="4" fill="#c5ccd0" stroke="#4f585e"/></svg>',
    glass: '<svg viewBox="0 0 28 66"><path d="M10 2h8v12c0 4 7 7 7 14v32a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V28c0-7 7-10 7-14z" fill="#8fc0a8" fill-opacity=".75" stroke="#2f5a4a"/></svg>',
    flake: '<svg viewBox="0 0 60 60"><path d="M8 14l14-6 6 12-14 6zM34 8l16 4-6 12-12-4zM10 38l14-4 4 14-14 4zM36 32l14 2-2 16-14-4z" fill="#8fc0a8" stroke="#2f5a4a"/></svg>',
    pellet: '<svg viewBox="0 0 60 60"><g fill="#d9e6dc" stroke="#2f5a4a"><circle cx="16" cy="18" r="7"/><circle cx="34" cy="14" r="7"/><circle cx="48" cy="26" r="7"/><circle cx="24" cy="34" r="7"/><circle cx="42" cy="42" r="7"/><circle cx="14" cy="48" r="7"/></g></svg>',
    yarn: '<svg viewBox="0 0 60 60"><path d="M20 6h20l6 48H14z" fill="#b8c9b4" stroke="#2f5a4a"/><path d="M19 14h22M18 22h24M17 30h26M16 38h28M15 46h30" stroke="#2f5a4a" fill="none"/></svg>',
    cloth: '<svg viewBox="0 0 60 60"><rect x="6" y="8" width="48" height="44" fill="#a8b8a6" stroke="#2f5a4a"/><path d="M14 8v44M22 8v44M30 8v44M38 8v44M46 8v44M6 16h48M6 24h48M6 32h48M6 40h48" stroke="#2f5a4a" stroke-opacity=".5" fill="none"/></svg>',
    blanket: '<svg viewBox="0 0 60 60"><rect x="6" y="36" width="48" height="14" rx="4" fill="#9fb49c" stroke="#2f5a4a"/><rect x="6" y="23" width="48" height="14" rx="4" fill="#b5c7b1" stroke="#2f5a4a"/><rect x="6" y="10" width="48" height="14" rx="4" fill="#cbd8c7" stroke="#2f5a4a"/></svg>',
    boat: '<svg viewBox="0 0 90 44"><path d="M4 24h82l-12 18H16z" fill="#e8dcc2" stroke="#3a3226" stroke-width="2"/><rect x="34" y="8" width="24" height="16" fill="#c9b78f" stroke="#3a3226" stroke-width="2"/><path d="M10 24l6-8h14v8" fill="#5f8a74" stroke="#3a3226" stroke-width="2"/></svg>'
  };
  CH.R = {
    bags: function (b) {
      var A = api(), ks = ['paper', 'can', 'glass'];
      var col = ks.map(function (k, i) {
        var it = '';
        for (var j = 0; j < 3; j++) it += '<i class="bg-i" style="--a:' + (.08 + j * .24 + i * .05).toFixed(2) + ';--x:' + ((j - 1) * 26) + '%">' + SVG[k] + '</i>';
        return '<div class="bg-c">' + it + '<div class="bg-k"><b>' + A.B(b.lab[i]) + '</b></div></div>';
      }).join('');
      return fxw('fx-bg', b, '<div class="bg-st">' + col + '</div>');
    },
    day: function (b) {
      var A = api(), n = b.items.length;
      return fxw('fx-dy', b, '<div class="dy-st"><div class="dy-l" aria-hidden="true"><i></i></div><ol class="dy-o">' + b.items.map(function (x, i) { return '<li style="--a:' + (i / n * .9).toFixed(2) + '"><b>' + A.B(x[0]) + '</b>' + A.B(x[1], 'span') + '</li>'; }).join('') + '</ol></div>');
    },
    split: function (b) {
      var A = api();
      return fxw('fx-sp', b, '<div class="sp-st"><div class="sp-w">' +
        '<div class="sp-p sp-cap"><i class="sp-g"></i>' + A.B(b.lab[0], 'b') + '</div>' +
        '<div class="sp-p sp-ring"><i class="sp-g"></i>' + A.B(b.lab[1], 'b') + '</div>' +
        '<div class="sp-p sp-body"><svg viewBox="0 0 80 190" aria-hidden="true"><path d="M28 2h24v14c0 12 22 20 22 46v112a12 12 0 0 1-12 12H18a12 12 0 0 1-12-12V62c0-26 22-34 22-46z" fill="#cfe3dc" fill-opacity=".55" stroke="#2f6f5a" stroke-width="2.5"/><path d="M8 92h64M8 140h64" stroke="#2f6f5a" stroke-opacity=".4"/></svg>' + A.B(b.lab[2], 'b') + '</div>' +
        '</div></div>');
    },
    pipe: function (b) {
      var A = api(), ks = ['flake', 'pellet', 'yarn', 'cloth', 'blanket'];
      return fxw('fx-pp', b, '<div class="pp-st"><div class="pp-l" aria-hidden="true"><i></i></div><ol class="pp-o">' + b.items.map(function (x, i) { return '<li style="--a:' + (.06 + i * .17).toFixed(2) + '"><span class="pp-i" aria-hidden="true">' + SVG[ks[i]] + '</span>' + A.B(x, 'b') + '</li>'; }).join('') + '</ol></div>');
    },
    loop: function (b) {
      var A = api(), pos = [[50, 6], [90, 36], [75, 88], [25, 88], [10, 36]];
      /* 由環保站（最後一個）往回亮到一念心 */
      return fxw('fx-lp', b, '<div class="lp-st"><svg viewBox="0 0 300 300" aria-hidden="true"><circle class="lp-b" cx="150" cy="150" r="124"/><circle class="lp-a" cx="150" cy="150" r="124" pathLength="100"/></svg>' +
        b.lab.map(function (x, i) { return '<div class="lp-n" style="left:' + pos[i][0] + '%;top:' + pos[i][1] + '%;--a:' + ((4 - i) * .19 + .04).toFixed(2) + '">' + A.B(x, 'b') + '</div>'; }).join('') + '</div>');
    },
    boat: function (b) {
      var A = api();
      return fxw('fx-bt', b, '<div class="bt-st"><div class="bt-sea" aria-hidden="true"><i class="bt-r"></i><i class="bt-b">' + SVG.boat + '</i></div><div class="bt-e bt-a">' + A.B(b.lab[0], 'b') + '</div><div class="bt-e bt-z">' + A.B(b.lab[1], 'b') + '</div><div class="bt-m">' + A.B(b.lab[2], 'span') + '</div></div>' +
        '<ol class="bt-o">' + b.items.map(function (x, i) { return '<li style="--a:' + (.1 + i * .3).toFixed(2) + '"><b>' + A.B(x[0]) + '</b>' + A.B(x[1], 'span') + '</li>'; }).join('') + '</ol>');
    },
    specs: function (b) {
      var A = api();
      return '<div class="sc"><h3 class="h4">' + A.B(b.h) + '</h3><div class="sc-g">' + b.items.map(function (x) { return '<div><b>' + x[0] + '</b><small>' + A.B(b.u) + '</small>' + A.B(x[1], 'span') + '</div>'; }).join('') + '</div><p class="sc-n">' + A.B(b.note) + '</p>' + A.srcs(b.s) + '</div>';
    },
    films: function () {
      var A = api();
      return '<h3 class="h4"><span class="zh">影片</span><span class="en" lang="en">Films</span></h3><div class="ed-fl">' + CH.films.map(function (x) { return '<a href="https://www.youtube.com/watch?v=' + x.id + '" target="_blank" rel="noopener"><b>' + x.y + '</b>' + A.B(x) + '</a>'; }).join('') + '</div>';
    }
  };

  /* 滾動進度：放得下才釘住，放不下或減少動態就攤平 */
  var fx = [], reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fit = '';
  function measure() { fx.forEach(function (e) { e.classList.remove('flat'); var s = e.querySelector('.fx-s'); if (reduce || s.scrollHeight > s.clientHeight + 1) e.classList.add('flat'); }); }
  CH.onWire = function () { fx = [].slice.call(document.querySelectorAll('[data-fx]')); fit = ''; if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { fit = ''; CH.onFrame(); }); CH.onFrame(); };
  CH.onFrame = function () {
    var H = innerHeight, k = innerWidth + document.documentElement.getAttribute('data-lang');
    if (k !== fit) { fit = k; measure(); }
    fx.forEach(function (e) {
      var r = e.getBoundingClientRect(); if (r.bottom < -H || r.top > H * 2) return;
      var p = e.classList.contains('flat') ? 1 : Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - H)));
      e.style.setProperty('--p', p.toFixed(4));
    });
  };
})();
