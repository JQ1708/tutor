/* 人文站：內容、圖片尺寸、隧道參數、六個滾動效果。charity.js 共用；這個檔只放本站的東西 */
(function () {
  var T = function (zh, en) { return { zh: zh, en: en }; };
  var otd = function (d, tail) { var s = d.slice(0, 4) + '.' + d.slice(4, 6) + '.' + d.slice(6, 8); return { zh: '《慈濟歷史上的今天》' + s, en: 'Tzu Chi, On This Day, ' + s, url: 'https://tzuchiculture.org/tzuchi_60th_anniversary/onthisday/onthisday_' + d + (tail === undefined ? '-1' : tail) + '/' }; };
  var fm = function (n, t) { return { zh: '慈濟法脈資料庫 ' + n + '〈' + t + '〉', en: 'Tzu Chi Dharma Lineage Archive, no. ' + n }; };
  var xl = function (p) { return { zh: '《馬來西亞慈濟史 雪隆分會（二）》頁 ' + p.replace(/, /g, '、'), en: 'History of Tzu Chi Malaysia: KL & Selangor Branch, vol. 2, p. ' + p }; };

  var S = {
    u438: fm('00438', '臺東慈善紀錄片《如常》上映'),
    o230729: otd('20230729'),
    o240704: otd('20240704'),
    o240502: otd('20240502'),
    o250711: otd('20250711'),
    nM700: { zh: '《慈濟》月刊二〇二五年三月號', en: 'Tzu Chi Monthly, March 2025', url: 'https://tcmonthly.tzuchiculture.org.tw/?p=68849' },
    nHs29: { zh: '慈濟人文〈29放光．慈濟60〉報導', en: 'Report on the Huashan exhibition', url: 'https://www.tcnews.com.tw/culture/item/29921.html' },
    nYt26: { zh: 'YouTube〈記錄大型經藏演繹　捕捉美善感動瞬間〉', en: 'YouTube: recording a large sutra adaptation', url: 'https://www.youtube.com/watch?v=zv9OK_k7o8M' },
    f038: fm('00038', '《慈濟》月刊創刊'),
    f087: fm('00087', '信為道源功德母，長養一切諸善根'),
    f089: fm('00089', '第一個廣播節目「慈濟世界」'),
    f096: fm('00096', '《慈濟道侶》創刊'),
    f118: fm('00118', '《證嚴法師靜思語》出版'),
    f135: fm('00135', '慈濟文化出版社成立'),
    f182: fm('00182', '人文深度化'),
    f209: fm('00209', '大愛電視臺開播'),
    f210: fm('00210', '《經典》雜誌創刊'),
    f241: fm('00241', '《三十七道品》、《人有二十難》首演'),
    f271: fm('00271', '「文化三合一志工」成立'),
    f288: fm('00288', '報真導正'),
    f291: fm('00291', '慈濟人文志業中心啟用'),
    f301: fm('00301', '心寬念純，美善人生'),
    f302: fm('00302', '人品典範，文史流芳'),
    f304: fm('00304', '慈濟國際人道援助會研發環保毛毯'),
    f363: fm('00363', '菲律賓海燕風災'),
    o670720: otd('19670720'), o860801: otd('19860801'), o980103: otd('19980103', ''), o991010: otd('19991010'), o020305: otd('20020305'), o160430: otd('20160430'),
    imp: { zh: '慈濟六十周年官網〈非洲大地一步一腳印 緬懷朱金財足跡〉', en: 'Tzu Chi 60th anniversary site: remembering Zhu Jincai in Africa' },
    tca: { zh: '慈濟加拿大官網〈靜思語〉，二〇二四年出版三十五周年介紹', en: 'Tzu Chi Canada: Jing Si Aphorisms, 2024 anniversary page', url: 'https://tzuchi.ca/zh-hant/zh-hant-master-cheng-yen/jing-si-aphorisms/' },
    daai: { zh: '慈濟人文志業官網〈大愛之友〉', en: 'Tzu Chi Culture: Friends of Da Ai', url: 'https://tzuchiculture.org/daai-friends/' },
    tcd: { zh: '慈濟文史資料庫《衲履足跡》2009.04.24–25〈火爐熱地，轉為清涼〉', en: 'Tzu Chi archive, Footprints of a Monk, 24–25 April 2009', url: 'https://tcdata.tzuchi-org.tw/asset/detail/20231214-071901936-2901?keyword=%E7%99%BC%E6%94%BE' },
    x495: xl('495'), x497: xl('497'), x499: xl('499'), x500: xl('500'), x503: xl('503'), x505: xl('505'), x508: xl('508'), x509: xl('509'), x510: xl('510'), x511: xl('511'), x512: xl('512'), x513: xl('513'), x514: xl('514–515'),
    x582: xl('582'), x593: xl('593'), x595: xl('595'), x597: xl('597'), x599: xl('599'), x600: xl('600'), x601: xl('601'), x603: xl('603')
  };
  var CH = window.CH = { S: S };
  var SR = function (d, e) { return T('證嚴上人，' + d, 'Dharma Master Cheng Yen, ' + e); };

  /* 圖片：尺寸登記到 PHS；隧道圖登記到 RIVER_M。年份只寫有確證的，其餘 0 不印 */
  var P = window.PHS = window.PHS || {};
  var SZ = {
    hero_u: [1600, 900], u_date: [1200, 322], u_mast: [722, 682], u_daolu: [302, 662], u_bound: [1082, 912], u_pumen: [1200, 451], u_emag: [1200, 855], u_emag2: [1200, 417],
    u_title: [1200, 389], u_deck: [869, 538], u_ctrl: [1200, 450], u_sub: [1200, 793], u_banner: [1200, 365], u_dish: [1200, 812], u_guandu: [1200, 737], u_stone: [1200, 638],
    u_shop: [1200, 656], u_tai: [1181, 1054], u_sutra: [1200, 527], u_drum: [1200, 270], u_kl: [1200, 822], u_files: [858, 298], u_tripod: [392, 715], u_fa2: [1200, 422]
  };
  Object.keys(SZ).forEach(function (k) { P[k] = SZ[k]; });
  var YR = { hero: 0, date: 1967, mast: 1967, daolu: 0, bound: 0, pumen: 0, emag: 0, emag2: 0, title: 0, deck: 0, ctrl: 0, sub: 0, banner: 0, dish: 0, guandu: 0, stone: 2005, shop: 0, tai: 0, sutra: 0, drum: 0, kl: 0, files: 2013, tripod: 1999, fa2: 2015 };
  var KEY = { hero: 'hero_u' };
  window.RIVER_M = (window.RIVER_M || []).concat(Object.keys(YR).map(function (k) { var z = SZ[KEY[k] || 'u_' + k]; return [YR[k], 'cu_' + k, Math.round(z[0] / z[1] * 300)]; }));

  CH.page = { key: 'culture', pre: 'u', title: '人文｜媽媽，這些你怎麼都知道？', still: 'hero_u', noDoor: 1, after: ['unum', 'uall'] };

  CH.hero = {
    film: T('媽媽，這些你怎麼都知道？', 'Mama, how do you know all this?'),
    stop: T('第八站', 'Eighth stop'), title: T('人文', 'Humanistic Culture'),
    sub: T('有人一路記下來。<br>先讓每一筆錢看得見，再讓每一個人的故事聽得見、看得見。', 'Someone kept writing it down.<br>First so that every donation could be seen, then so that every person’s story could be heard and seen.'),
    watch: T('看影片　6 分 36 秒', 'Watch the film · 6 min 36 s'), read: T('走這六段路', 'Walk the six stretches'),
    ai: T('底片畫面為示意，格內是三張照片的局部：製播設備、《慈濟》創刊號報頭、吉隆坡靜思堂', 'The film strip is an illustration. Its frames are details of three photographs: broadcast equipment, the masthead of the first issue of Tzu Chi, and the Jing Si Hall in Kuala Lumpur')
  };

  CH.chapters = [
    /* 1 鋼板上的第一筆 */
    { id: 'u1a', era: 'e60', y: '1967', nav: T('鋼板上的第一筆', 'The first lines on a steel plate'), ask: T('媽媽，這些你怎麼都知道？', 'Mama, how do you know all this?'), b: [
      { k: 'plate', bare: 1,
        lead: T('徵信，就是把善款和救濟的去向交代清楚，讓捐款人看得見。', 'Zhengxin means accounting openly for where donations and relief go, so that those who give can see it.'),
        q: { zh: '還沒有月刊之前，每個月我們都用手在鋼板謄寫徵信，就讓出錢的人能了解他的錢交出來，而且我們救濟到什麼樣的人。', en: 'Before there was a monthly, every month we copied out the accounts by hand on a steel plate, so that those who gave could understand where their money went and what kind of people we were helping.', who: T('證嚴上人', 'Dharma Master Cheng Yen') },
        note: T('鋼板和版面都是示意，不是當年原物，線條也不是真實名單。手寫徵信開始的日期，查到的資料沒有寫明。', 'The steel plate and page layouts are illustrations, not the originals, and the lines are not real lists. The sources found do not state when the handwritten accounts began.'),
        s: ['o670720'] },
      { k: 'story', lay: 'T', date: '1967', h: T('每日節省三十元', 'Thirty dollars saved each day'),
        p: [T('一九六七年，功德會成立的第二年，陳貞如向上人提出「辦雜誌」的構想，一則宣揚佛教的慈悲理念，再則號召更多善士捐款贊助。', 'In 1967, the second year of the Merit Society, Chen Chen-ju proposed to the Master that they start a publication. It would spread the Buddhist teaching of compassion and invite more people to give.')],
        q: { zh: '師父，您請放心！錢的事我來想辦法！', en: 'Master, please do not worry. I will find a way with the money.', who: T('陳貞如', 'Chen Chen-ju') },
        more: [T('陳貞如與同為慈濟委員的舅母吳玉鳳（靜慈）商議，兩人決定每日節省三十元、每月集資一千八百元，共同分攤出版費用。', 'Chen talked it over with her aunt Wu Yu-feng (Jing Ci), also a Tzu Chi commissioner. The two decided to save thirty dollars a day, pooling 1,800 dollars a month to share the printing costs.')],
        s: ['f038'] },
      { k: 'story', lay: 'R', date: '1967.07.20', h: T('四個版，三千份', 'Four pages, three thousand copies'),
        p: [T('一九六七年七月二十日，《慈濟》創刊，是慈濟第一份平面刊物。報紙型四個版，每月五日、二十日出刊，首期發行三千份，主旨是報導好人好事，以及捐款徵信。', 'On 20 July 1967, Tzu Chi appeared, the first printed publication of the foundation. It was a four-page newspaper, published on the 5th and 20th of each month, and the first issue ran to 3,000 copies. Its purpose was to report good people and good deeds, and to account for donations.'),
          T('花蓮新聞界的林志勝出任發行人，侯蔚萍擔任總編輯，李業漢兼任記者，陳貞如、吳玉鳳分任社長、副社長。', 'Lin Chih-sheng of the Hualien press became publisher, Hou Wei-ping chief editor and Li Yeh-han reporter, while Chen Chen-ju and Wu Yu-feng served as president and vice-president.')],
        ph: [{ i: 'u_mast', c: T('《慈濟》創刊號報頭局部。取自《慈濟歷史上的今天》。', 'Detail of the masthead of the first issue of Tzu Chi. From Tzu Chi, On This Day.') }],
        s: ['f038', 'f271', 'o670720'] }
    ] },
    { id: 'u1b', era: 'e70', y: '1968–2007', nav: T('名單越來越長', 'A growing record'), b: [
      { k: 'story', lay: 'T', date: '1973', h: T('容納更多徵信名單', 'Room for more accounts'),
        p: [T('一九七三年八月五日第 82 期起，為便利讀者閱讀及保存，並容納更多徵信名單與會務報導，《慈濟》由報紙型改為十六開雜誌型。', 'From issue 82 on 5 August 1973, Tzu Chi changed from a newspaper to a magazine, making it easier to read and keep, and leaving room for more accounts and reports on the foundation’s work.')],
        q: { zh: '徵信的工作很辛苦，要很認真、很謹慎地做好誠與信的本分。', en: 'The work of accounting is hard. It must be done earnestly and carefully, as our duty of sincerity and trust.', who: T('證嚴上人', 'Dharma Master Cheng Yen') },
        note: T('本頁只講徵信的做法，不展示任何捐款人或受助人的名單。', 'This page describes how the accounts were kept. It does not show any list of donors or recipients.'),
        s: ['f038', 'f087'] },
      { k: 'rec', items: [
        { d: '1968', zh: '由半月刊改為月刊。', en: 'Changed from twice a month to monthly.' },
        { d: '1973.08.05', zh: '第 82 期起，改為十六開雜誌型。', en: 'From issue 82, a magazine format.' },
        { d: '1988.09', zh: '第 263 期起，「每月徵信」改為「年度徵信」。', en: 'From issue 263, monthly accounts became annual accounts.' },
        { d: '1998.01', zh: '第 374 期起，全面改為彩色印刷。', en: 'From issue 374, printed entirely in colour.' },
        { d: '2007.04.01', zh: '推出電子雜誌。', en: 'An electronic edition began.' }
      ], s: ['f038', 'o670720'] },
      { k: 'photos', lay: 'one', ph: [{ i: 'u_emag', c: T('《慈濟》電子雜誌畫面。取自《慈濟歷史上的今天》，拍攝日未載。', 'The Tzu Chi e-magazine on screen. From Tzu Chi, On This Day; date of photograph not given.') }] }
    ] },

    /* 2 聽得見，看得見 */
    { id: 'u2a', era: 'e80', y: '1985–1989', nav: T('聽得見', 'Heard'), ask: T('寫下來之後，別人怎麼聽得到？', 'Once it was written down, how could others hear it?'), b: [
      { k: 'wave', bare: 1,
        a: T('1985.11.16　清晨五點五十分', '16 Nov 1985, 5:50 in the morning'), b2: T('1998.01.01　下午三點二十分', '1 Jan 1998, 3:20 in the afternoon'),
        tv: T('大愛電視臺正式開播', 'Da Ai Television goes on air'),
        t: T('從一小時的廣播，到自己的電視臺，中間走了十二年。', 'From one hour of radio to a television station of its own took twelve years.'),
        note: T('聲波和亮線是示意。', 'The sound wave and the line of light are illustrations.'),
        s: ['f089', 'f209'] },
      { k: 'story', lay: 'T', date: '1985.11.16', h: T('「明天我來講。」', '“I will do it tomorrow.”'),
        p: [T('一九八五年十一月十六日，天南電臺開始在北部地區播出《慈濟世界》，這是慈濟第一個廣播節目。林義傑了解慈濟和上人的悲願後，將「歡樂之聲」撥出一小時，每天清晨五點五十分到六點五十分說慈濟事。', 'On 16 November 1985, Tiannan Radio began broadcasting Tzu Chi World in northern Taiwan, the first Tzu Chi radio programme. After learning about Tzu Chi and the Master’s vow, Lin Yi-chieh gave up one hour of his programme, and from 5:50 to 6:50 each morning it told Tzu Chi’s stories.'),
          T('由於對慈濟認識尚淺，節目無法讓聽眾了解慈濟。開播三天的節目不能停，在舅舅公司擔任會計的柯美玉，就這樣走進了播音室。', 'At first the programme knew too little of Tzu Chi to explain it to listeners. It was only three days old and could not stop, so Ko Mei-yu, an accountant at her uncle’s company, stepped into the studio.')],
        q: { zh: '明天我來講。', en: 'I will do it tomorrow.', who: T('柯美玉', 'Ko Mei-yu') },
        more: [T('一九九一年十月十二日，慈濟臺北分會竣工啟用，設立錄音室，廣播單位有了自己的家。二〇〇五年九月一日，大愛網路電臺開播。', 'On 12 October 1991 the Taipei branch opened with a recording studio, and the radio team had a home of its own. On 1 September 2005 an internet radio service began.')],
        s: ['f089'] },
      { k: 'story', lay: 'R', date: '1986', h: T('一間文庫，交到慈濟手上', 'A library handed to Tzu Chi'),
        p: [T('一九八六年三月八日，臺北普門文庫無條件交給慈濟接辦。八月一日改組為「佛教慈濟文化服務中心」，延聘陳慧劍居士為總編輯。', 'On 8 March 1986, the Pumen Library in Taipei was handed to Tzu Chi without conditions. On 1 August it became the Buddhist Tzu Chi Cultural Service Centre, with the lay Buddhist Chen Hui-chien as chief editor.'),
          T('九月一日，《慈濟道侶》創刊，輔助《慈濟》月刊報導慈濟訊息。十月，「慈濟道侶檀施會」成立，由會員隨喜布施贊助。', 'On 1 September, Tzu Chi Companions was launched to carry more news alongside the monthly. In October a supporters’ circle was formed, with members giving as they wished.')],
        ph: [{ i: 'u_pumen', c: T('「佛教慈濟功德會 普門文庫」匾額局部。取自《慈濟歷史上的今天》。', 'Detail of the Pumen Library plaque. From Tzu Chi, On This Day.') }, { i: 'u_bound', c: T('《慈濟道侶》合訂本。取自《慈濟歷史上的今天》。', 'A bound volume of Tzu Chi Companions. From Tzu Chi, On This Day.') }],
        s: ['f096', 'o860801'] },
      { k: 'story', lay: 'T', date: '1989', h: T('三萬本，全部贈完', 'Thirty thousand copies, all given away'),
        p: [T('一九八九年九月十七日，為慶祝慈濟護專創校開學和慈濟醫院創辦三周年，高信疆等人將上人語錄依內容分類，編成《證嚴法師靜思語》發行，此書是非賣品。', 'On 17 September 1989, marking the opening of the Tzu Chi nursing college and the third anniversary of the hospital, Kao Hsin-chiang and others arranged the Master’s sayings by theme and issued them as Jing Si Aphorisms. The book was not for sale.'),
          T('《慈濟道侶》報導，「三萬本全部贈送告罄」。十一月十五日，此書授權九歌出版社初版發行，走進一般書店。', 'Tzu Chi Companions reported that all 30,000 copies had been given away. On 15 November the book was licensed to Chiu Ko Publishing, which issued its first edition.')],
        s: ['f118'] }
    ] },
    { id: 'u2b', era: 'e90', y: '1995–1998', nav: T('看得見', 'Seen'), ask: T('那電視呢？', 'And television?'), b: [
      { k: 'quote', zh: '所以很久以前我就一直想，若是能有個電視節目，每天都有一段慈濟新聞，能向大家報告我們在台灣做了什麼事？國外的慈濟人為當地付出了多少？', en: 'So for a long time I have been thinking: if there could be a television programme, with a piece of Tzu Chi news every day, we could report to everyone what we have done in Taiwan, and how much Tzu Chi people abroad have given where they are.', who: SR('1995.11.25', '25 November 1995'), s: ['f182'] },
      { k: 'story', lay: 'R', date: '1998.01.01', h: T('下午三點二十分', 'Twenty past three in the afternoon'),
        p: [T('一九九七年十一月十九日，大愛臺與新聞局簽約，租用公視大樓四至六樓和兩個攝影棚，工作人員月底陸續遷入。', 'On 19 November 1997, Da Ai signed a lease for three floors and two studios of the Public Television building, and staff began moving in by the end of the month.'),
          T('一九九八年一月一日下午三點二十分，上人與行政院長蕭萬長共同按鈕，大愛電視臺的電波向四方發散。當天臺北中正紀念堂與花蓮靜思堂道侶廣場，同步舉行「大愛讓世界亮起來」開播晚會。', 'At 3:20 in the afternoon on 1 January 1998, the Master and Premier Vincent Siew pressed the button together, and Da Ai’s signal went out. That day a launch evening was held at once in Taipei and Hualien.')],
        q: { zh: '不只是慈濟世界的好人好事，就是社會上別的團體有什麼好事，我們照樣報導啊！', en: 'Not only the good people and good deeds of the Tzu Chi world. When other groups in society do something good, we will report that just the same.', who: SR('1997.04.06', '6 April 1997') },
        ph: [{ i: 'u_deck', c: T('電視製播設備局部。取自《慈濟歷史上的今天》，拍攝日未載。', 'Detail of broadcast equipment. From Tzu Chi, On This Day; date of photograph not given.') }],
        s: ['f209', 'f182', 'o980103'] },
      { k: 'story', lay: 'T', date: '1998.08.01', h: T('《經典》創刊', 'Rhythms is launched'),
        p: [T('同年八月一日，慈濟文化志業中心創辦的《經典》雜誌創刊。它的理念是「讓臺灣更了解臺灣、讓臺灣更了解世界，也讓世界更了解臺灣；從中學習到對生命的尊重」。', 'On 1 August that year, the Tzu Chi Cultural Centre launched Rhythms magazine. Its aim was “to help Taiwan understand Taiwan better, help Taiwan understand the world better, and help the world understand Taiwan better, and from this to learn respect for life.”')],
        q: { zh: '讓臺灣更了解臺灣、讓臺灣更了解世界，也讓世界更了解臺灣；從中學習到對生命的尊重', en: 'To let Taiwan understand Taiwan better, Taiwan understand the world better, and the world understand Taiwan better, and through this to learn respect for life', who: T('《慈濟道侶》報導的《經典》創刊理念', 'The founding idea of Rhythms, as reported in Tzu Chi Companions') },
        s: ['f210'] }
    ] },

    /* 3 報真導正 */
    { id: 'u3a', era: 'e00', y: '2005–2013', nav: T('報真導正', 'Report truly, guide rightly'), ask: T('電視上說的，都是真的嗎？', 'Is everything on television true?'), b: [
      { k: 'quote', big: 1, zh: '要報真導正，要讓真實美善的人生，傳播給普天下人。', en: 'Report what is true and guide people rightly. Let true, beautiful and good lives be made known to people everywhere.', who: SR('2011.09.09', '9 September 2011'), s: ['f288'] },
      { k: 'story', lay: 'T', date: '2013', h: T('不能只報導「據說」', 'Not just “it is said”'),
        p: [T('二〇一三年海燕風災，災區傳輸不易，一分鐘影像得傳一小時。上人對大愛臺新聞部的同仁重申記者的使命：不能因此以外電報導為主，要把志工在災區的付出，及時而詳盡地報導出來。', 'During Typhoon Haiyan in 2013, sending footage from the disaster area was so hard that one minute of video took an hour to transmit. The Master reminded the Da Ai news team of their duty: even so, they could not simply rely on wire reports. They must report what volunteers were doing there, promptly and in full.')],
        q: { zh: '貼切落實『報真導正』，是人文志業的使命。其他新聞臺或許只能依據外電報導，而慈濟人實際在災區付出，大愛新聞最能詳盡呈現災區真實狀況，是第一手的實情報導，要報『真』、報『實』，補足『真』與『實』的人、事、物。不能只是引用資料，報導『據說』的新聞；要負起『為時代作見證，為人類寫歷史』的責任。', en: 'To truly carry out “report truly, guide rightly” is the mission of our humanistic work. Other stations may only have wire reports, but Tzu Chi people are working in the disaster area, and Da Ai news can show the real situation in full. This is first-hand reporting. Report what is true and real, and fill in the true and real people, events and things. Do not merely quote material and report “it is said”. Take up the duty of bearing witness to our time and writing history for humankind.', who: T('證嚴上人', 'Dharma Master Cheng Yen') },
        s: ['f363'] },
      { k: 'six', bare: 1, h: T('六道作業，全面數位化', 'Six stages, all made digital'),
        t: T('二〇〇五年一月一日，大愛全數位製播系統完工啟用。', 'On 1 January 2005, Da Ai’s all-digital production system came into use.'),
        items: [T('採訪拍攝', 'Reporting and filming'), T('剪輯後製', 'Editing and post-production'), T('編輯作業', 'Editing the programme'), T('網路傳輸', 'Network transmission'), T('電視播映', 'Broadcast'), T('影音檔案儲存', 'Storing the audio and video')],
        note: T('六道是作業，不是六個人。', 'These are six stages of work, not six people.'),
        s: ['f291'] },
      { k: 'story', lay: 'L', date: '2009', h: T('不以廣告招商', 'Without advertising'),
        p: [T('大愛臺的戲劇和新聞不同。《大愛劇場》以真人真事為本，由演員重演，不是紀錄片。', 'Da Ai’s dramas are different from its news. Da Ai Drama is based on real people and real events, re-enacted by actors. It is not documentary.'),
          T('護持這座電視臺的，有大眾的愛心，也有環保志工。回收物資賣掉之後，幫助做大愛臺。', 'The station is sustained by the love of the public, and by recycling volunteers too. What they collect is sold to help support Da Ai.')],
        q: { zh: '大愛臺不同於商業電視臺，不以廣告招商，而是以大眾的愛心點滴灌溉；', en: 'Da Ai is different from commercial stations. It does not seek advertising, but is nourished drop by drop by the love of the public.', who: SR('2009.12.07', '7 December 2009') },
        q2: { zh: '感恩環保志工，把浪費的資源再回收再製，收回來的東西賣掉之後，幫助師父做大愛台，', en: 'I am grateful to the recycling volunteers, who take wasted resources and recycle them. What they collect is sold, and it helps me run Da Ai.', who: SR('2005.01.02', '2 January 2005') },
        ph: [{ i: 'u_ctrl', c: T('電視製播室的螢幕局部。取自《慈濟歷史上的今天》，拍攝日未載。', 'Detail of monitors in a broadcast room. From Tzu Chi, On This Day; date of photograph not given.') }],
        s: ['f288', 'f182'] }
    ] },
    { id: 'u3b', era: 'e00', y: '2003–2026', nav: T('看見的人', 'Those who watched'), b: [
      { k: 'story', lay: 'T', date: '2003', h: T('辛巴威的一臺電視', 'A television in Zimbabwe'),
        p: [T('朱金財一九九五年移居辛巴威，二〇〇三年因看見大愛臺而接觸慈濟，從此投入當地的熱食發放、供水改善與長期關懷。他看見居民取用髒水，深感不忍，發願為辛巴威鑿井。', 'Zhu Jincai moved to Zimbabwe in 1995. In 2003 he came to Tzu Chi after seeing Da Ai, and from then on he joined hot-meal distributions, water improvements and long-term care there. Seeing people draw dirty water moved him, and he vowed to dig wells for Zimbabwe.'),
          T('二〇二六年二月，朱金財在關懷鄉親途中往生。', 'In February 2026, Zhu Jincai passed away on his way to care for local people.')],
        q: { zh: '我死後不要回臺灣，我要長眠於辛巴威，五生五世都留在辛巴威，成為有力量的辛巴威人，陪伴他們、翻轉他們的貧窮。', en: 'When I die I do not want to go back to Taiwan. I want to rest in Zimbabwe, stay in Zimbabwe for five lifetimes, and become a Zimbabwean with the strength to accompany them and turn their poverty around.', who: T('朱金財', 'Zhu Jincai') },
        s: ['imp'] },
      { k: 'story', lay: 'T', h: T('在家看大愛臺的太太', 'Watching Da Ai at home'),
        p: [T('馬來西亞的志工林文交，一九九七年接觸慈濟，與家人的相處有了改變。《衲履足跡》記述，「太太就在家「偷」看大愛台」，後來夫妻一起同行。', 'Lin Wenjiao, a volunteer in Malaysia, came to Tzu Chi in 1997, and the way he treated his family changed. Footprints of a Monk records that his wife watched Da Ai at home on the quiet, and that the two later walked this road together.')],
        s: ['tcd'] },
      { k: 'story', lay: 'R', date: '2006', h: T('跨過語言', 'Across languages'),
        p: [T('二〇〇六年二月十五日，慈濟傳播文化基金會在印尼雅加達成立的大愛電視無線臺試播，這是慈濟跨國設立無線電視臺的首例。', 'On 15 February 2006, a Da Ai broadcast station set up in Jakarta, Indonesia, began test transmission, the first time Tzu Chi had set up a broadcast station in another country.'),
          T('許多節目內容也翻譯成日文、西班牙文、印尼文、泰文、緬甸文、越南文。', 'Many programmes have also been translated into Japanese, Spanish, Indonesian, Thai, Burmese and Vietnamese.')],
        ph: [{ i: 'u_sub', c: T('畫面上的中英對照翻譯文字局部。取自《慈濟歷史上的今天》，拍攝日未載。', 'Detail of Chinese and English translation text on a screen. From Tzu Chi, On This Day; date of photograph not given.') }],
        s: ['f291', 'daai', 'o980103'] }
    ] },

    /* 4 文史流芳 */
    { id: 'u4a', era: 'e00', y: '1989–2004', nav: T('沒有掌聲的工作', 'Work without applause'), ask: T('那是誰在記的？', 'Who was writing it down?'), b: [
      { k: 'quote', big: 1, zh: '人文就是「人品典範，文史流芳」。慈濟的文史從四十二年前開始，早期雖然只是很簡單地用鋼板、鋼筆謄寫下來的徵信，但是留下了慈濟完整的紀錄，就可以流芳百世。', en: 'Humanistic culture means people of exemplary character, and a written history that endures. Tzu Chi’s history began forty-two years ago. In the early days it was only accounts copied out simply with a steel plate and a pen, but they left a complete record of Tzu Chi, and that can last for generations.', who: SR('2009.07.20', '20 July 2009'), s: ['f302'] },
      { k: 'three', bare: 1, labels: [T('文字', 'Words'), T('相片', 'Photographs'), T('影像', 'Video')], end: T('三合一', 'Three in one'),
        q: { zh: '影像、相片、文字三合一，這才是完整文宣。', en: 'Video, photographs and words, three in one: only that is a complete record.', who: SR('2002.12.06', '6 December 2002') },
        t: T('二〇〇三年，筆耕、攝影、影視三支志工隊伍開始整合。', 'In 2003, the volunteer writers, photographers and video teams began to come together.'),
        note: T('線條是示意。', 'The lines are an illustration.'),
        s: ['f271'] },
      { k: 'story', lay: 'T', date: '1989–1996', h: T('省下買汽車的錢', 'The money for a car'),
        p: [T('「慈濟筆耕隊」於一九八九年成立，一九九六年「慈濟影視映像志工聯誼會」成立。', 'The Tzu Chi writers’ team was formed in 1989, and a volunteer video fellowship in 1996.'),
          T('資深志工黃錦益和同修師姊慈暘，「省下買汽車的錢添購攝影機、拿買房子的錢買剪接機」。', 'Senior volunteer Huang Chin-yi and his wife, Sister Ci Yang, are recorded as having spent the money saved for a car on a video camera, and the money for a house on an editing machine.')],
        s: ['f271'] },
      { k: 'story', lay: 'T', date: '2003', h: T('少打擾受訪的人', 'Fewer knocks on the same door'),
        p: [T('二〇〇三年二月二十二日，三合一整合的理念在關渡慈濟園區的研習課程上布達。文稿志工可以把主題、訪問內容與圖像、影視志工討論，也避免因重複採訪，帶給受訪者過度的打擾。', 'On 22 February 2003, the idea of bringing the three teams together was announced at a training course in Guandu. Writers could now discuss subjects and interviews with photographers and video volunteers, and people would no longer be disturbed by being interviewed again and again.')],
        s: ['f271'] },
      { k: 'story', lay: 'T', date: '2003–2004', h: T('工地裡的日誌', 'A diary on the building site'),
        p: [T('人文志業中心二〇〇二年底動工，翌年四月起，文化志工輪班記錄每日施工點滴。曾美姬第一次走進關渡園區，覺得工地需要一位全心記錄者，便決定試試看，這一試，就試了一年半。', 'Work on the Humanitarian Centre began at the end of 2002, and from the following April culture volunteers took turns recording each day on site. When Tseng Mei-chi first walked in, she felt the site needed someone recording full time. She decided to try, and stayed a year and a half.'),
          T('她身穿藍衣藍褲，頭戴工安帽，腰間繫著安全繩索，把當日工程進度與見聞詳細記載下來。一次冷雨強風中，她全身濕透，仍護著數位相機，以凍僵的雙手，把工程人員的身影留了下來。', 'In blue work clothes and a safety helmet, a safety line at her waist, she wrote down each day’s progress and what she saw. Once, soaked through in cold wind and rain, she shielded her digital camera and, with frozen hands, kept a record of the workers.')],
        q: { zh: '要完成文化記錄任務，真的很不容易，而且這是一件最沒有掌聲的工作。', en: 'Completing the task of recording is truly not easy, and it is work that gets the least applause of all.', who: T('法脈資料庫報導所引，這句未標明說話人', 'Quoted in an archive report; this line does not name its speaker') },
        s: ['f291'] }
    ] },
    { id: 'u4b', era: 'e20', y: '2004–2008', nav: T('文化改人文', 'From culture to humanity'), b: [
      { k: 'story', lay: 'R', date: '2004–2008', h: T('把文化改成人文', 'Changing “culture” to “humanity”'),
        p: [T('二〇〇四年十二月二十四日，上人把四大志業裡的「文化」改稱「人文」。', 'On 24 December 2004, the Master renamed “culture” among the four missions as “humanity”.'),
          T('二〇〇五年一月一日，慈濟人文志業中心啟用，大愛臺和平面出版、廣播、《經典》等單位遷入關渡。二〇〇八年，基金會完成法人更名，名稱裡的「文化」也改為「人文」，三月五日起對外使用。', 'On 1 January 2005, the Humanitarian Centre opened in Guandu, and Da Ai, the publishing and radio units and Rhythms moved in. In 2008 the foundation’s legal name changed too, with “culture” replaced by “humanity” from 5 March.')],
        q: { zh: '過去我都是說慈善、醫療、教育、文化，我現在把文化改成人文。', en: 'In the past I always said charity, medicine, education and culture. Now I am changing culture to humanity.', who: SR('2004.12.24', '24 December 2004') },
        q2: { zh: '人文是為人群而付出，讓自己的生命真正亮麗起來；', en: 'Humanistic culture is giving for others, and so letting one’s own life truly shine.', who: SR('2004.12.24', '24 December 2004') },
        ph: [{ i: 'u_stone', c: T('「守護慧命的磐石」銅牌局部，二〇〇五年一月一日。取自《慈濟歷史上的今天》。', 'Detail of a bronze plaque dated 1 January 2005. From Tzu Chi, On This Day.') }],
        s: ['f291', 'o991010'] },
      { k: 'quote', zh: '「文」就是文史流芳。歷史要記錄下來，才會真正永遠地流傳下去。', en: '“Wen” means a written history that endures. History must be recorded before it can truly be passed down for ever.', who: SR('2006.06.02', '2 June 2006'), s: ['f302'] }
    ] },

    /* 5 走進生活 */
    { id: 'u5a', era: 'e20', y: '2002–2025', nav: T('走進書軒', 'Into the bookshops'), ask: T('這些只放在電視裡嗎？', 'Are these only on television?'), b: [
      { k: 'shelf', bare: 1, h: T('全球靜思書軒', 'Jing Si Books & Cafe worldwide'), n: 119, u: T('家', 'shops'),
        t: T('截至二〇二五年，全球已有 119 家靜思書軒。', 'By 2025 there were 119 Jing Si Books & Cafe shops around the world.'),
        note: T('書架是示意，一本書代表一家，不對應實際位置。', 'The shelf is an illustration. One book stands for one shop and does not show its location.'),
        s: ['o020305'] },
      { k: 'story', lay: 'R', date: '2002.03.05', h: T('愛的連鎖店', 'A chain store of love'),
        p: [T('二〇〇二年三月五日，新舞台的靜思書軒試營運，這是全臺第一家走出慈濟會所、深入社區的書軒。它不同於傳統書店，有書香、咖啡香，更強調人與人互動。', 'On 5 March 2002, the Jing Si shop at the Novel Hall began trial operation, the first in Taiwan to step out of a Tzu Chi centre and into the community. Unlike an ordinary bookshop, it offered books and coffee, and put its weight on people meeting people.'),
          T('上人曾以「愛的連鎖店」形容書軒，期待大眾能在這裡體會到善與愛。', 'The Master once described the shops as “a chain store of love”, hoping people would find goodness and love there.')],
        ph: [{ i: 'u_shop', c: T('靜思書軒招牌局部。取自《慈濟歷史上的今天》，拍攝日未載。', 'Detail of a Jing Si Books & Cafe sign. From Tzu Chi, On This Day; date of photograph not given.') }, { i: 'u_tai', c: T('書軒外的傘和空椅。取自《慈濟歷史上的今天》，拍攝日未載。', 'Umbrellas and empty chairs outside a shop. From Tzu Chi, On This Day; date of photograph not given.') }],
        s: ['o020305'] },
      { k: 'story', lay: 'T', date: '2024', h: T('八百多萬冊，23 種語言', 'Over eight million copies, 23 languages'),
        p: [T('二〇二四年官網周年介紹記載，《靜思語》出版以來發行八百多萬冊，翻譯成 23 種語言。', 'A 2024 anniversary page on the official site records that Jing Si Aphorisms has reached over eight million copies since publication, in 23 languages.'),
          T('每一種語言背後都有翻譯的人。德文版的譯者陸西華，是這樣下筆的：', 'Behind each language is someone translating. Lu Hsi-hua, who worked on the German edition, went about it like this:')],
        q: { zh: '我先把中文版《靜思語》看懂了，再看看英文版的翻譯，然後再想想如何用德語表達。', en: 'First I made sure I understood the Chinese Jing Si Aphorisms, then I read the English translation, and then I thought about how to say it in German.', who: T('陸西華', 'Lu Hsi-hua') },
        s: ['tca', 'f118'] }
    ] },
    { id: 'u5b', era: 'e20', y: '1992–2007', nav: T('手語和舞臺', 'Sign and stage'), b: [
      { k: 'story', lay: 'R', date: '1992–2007', h: T('用雙手把經文演出來', 'Performing the sutras with the hands'),
        p: [T('臺灣慈濟本會於一九九二年成立靜思手語隊。', 'The Jing Si sign-language team was formed at Tzu Chi headquarters in Taiwan in 1992.'),
          T('二〇〇二年，音樂手語劇《父母恩重難報經》全臺巡迴三十一場。二〇〇三年，《藥師如來十二大願》共十六幕、約一百分鐘，全臺巡迴三十一場。二〇〇七年九月十五日起，慈濟志工與志業體同仁演出《無量義經》經藏演繹，展開全臺四十三場公演。', 'In 2002, the musical sign-language drama on the Sutra of Filial Piety toured Taiwan in 31 performances. In 2003, The Twelve Great Vows of the Medicine Buddha, with sixteen scenes lasting about a hundred minutes, also gave 31 performances around Taiwan. From 15 September 2007, Tzu Chi volunteers and staff staged the Sutra of Innumerable Meanings in 43 public performances across Taiwan.')],
        note: T('每一部戲的場次分開記，這裡不相加。', 'Performances are counted separately for each work and are not added together here.'),
        ph: [{ i: 'u_sutra', c: T('經藏演繹遠景。取自《慈濟歷史上的今天》，拍攝日未載。', 'A distant view of a sutra adaptation performance. From Tzu Chi, On This Day; date of photograph not given.') }, { i: 'u_drum', c: T('經藏演繹的鼓和舞臺局部。取自《慈濟歷史上的今天》，拍攝日未載。', 'Detail of drums on the stage. From Tzu Chi, On This Day; date of photograph not given.') }],
        s: ['x593', 'f241', 'o160430'] },
      { k: 'story', lay: 'T', date: '2006.06.22', h: T('一杯茶', 'A cup of tea'),
        p: [T('人文也在一杯茶裡。上人說到靜思茶道課程的用意：', 'Humanistic culture is also found in a cup of tea. The Master spoke of why the Jing Si tea course began:')],
        q: { zh: '成立靜思茶道課程，是希望透過茶道，強調禮儀形象、以茶會友的風氣，更期盼人人涵養美善心念。', en: 'We set up the Jing Si tea course hoping that, through the way of tea, we can stress courtesy and bearing and the custom of meeting friends over tea, and above all that everyone will nurture good and beautiful thoughts.', who: SR('2006.06.22', '22 June 2006') },
        s: ['f301'] }
    ] },

    /* 6 在馬來西亞 */
    { id: 'u6a', era: 'my', y: '2000–2022', nav: T('一令吉的客廳', 'A living room for one ringgit'), ask: T('馬來西亞也有人在記嗎？', 'Is someone writing it down in Malaysia too?'), b: [
      { k: 'lease', bare: 1, h: T('吉隆坡靜思書軒', 'Jing Si Books & Cafe, Kuala Lumpur'),
        cv: T('租約', 'Lease'), amt: T('每月一令吉', 'One ringgit a month'), mark: T('示意', 'Illustration'), room: T('社區客廳', 'A community living room'),
        q: { zh: '每月僅象徵式收取一令吉租金。', en: 'Only a token rent of one ringgit a month was charged.', who: T('《馬來西亞慈濟史 雪隆分會》', 'History of Tzu Chi Malaysia') },
        t: T('實業家林孝式將武吉免登商業大樓的地下一樓，無條件借予慈濟。', 'The businessman Lin Xiaoshi lent Tzu Chi a lower-ground floor in a Bukit Bintang building without conditions.'),
        note: T('租約和客廳都是示意，不是當年原物。', 'The lease and the room are illustrations, not the originals.'),
        s: ['x511'] },
      { k: 'story', lay: 'T', date: '2000.08.11', h: T('全球第一家在檳城', 'The world’s first, in Penang'),
        p: [T('靜思書籍雖然能在當地書店流通，但佛教書籍常被擺在角落，乏人問津。檳城志工郭秋明（濟航）因此決定開書店，走訪日本、香港考察。', 'Jing Si books could be found in local shops, but Buddhist titles tended to sit in a corner, seldom picked up. So the Penang volunteer Guo Qiuming (Ji Hang) decided to open a shop, and went to Japan and Hong Kong to learn.'),
          T('二〇〇〇年八月十一日，全球第一家靜思書軒在檳城成立。', 'On 11 August 2000, the world’s first Jing Si Books & Cafe was established in Penang.')],
        s: ['x511'] },
      { k: 'story', lay: 'T', date: '2004.09.18', h: T('與心靈對話的社區客廳', 'A community living room for quiet conversation'),
        p: [T('二〇〇四年三月，林孝式到花蓮參加實業家靜思生活營。返馬後，他借出空間，同年九月十八日，吉隆坡靜思書軒啟用，「營造一個與心靈對話的社區客廳」。', 'In March 2004, Lin Xiaoshi joined a Jing Si retreat for business people in Hualien. Back in Malaysia he offered the space, and on 18 September that year the Kuala Lumpur shop opened, meant to be a community living room for quiet conversation with oneself.'),
          T('書軒不為營利而設，專款經營，完全沒動用慈濟會員的捐款。這裡提供飲品和閱讀環境，有時也舉辦講座、讀書會、電影觀賞會。至二〇二二年，雪隆分會轄下聯絡據點共有十二間靜思書軒。', 'The shops are not set up for profit. They run on separate funds and use no members’ donations. They offer drinks and a place to read, and sometimes talks, reading groups and film screenings. By 2022 there were twelve shops at centres under the Selangor and Kuala Lumpur branch.')],
        s: ['x511', 'x512'] }
    ] },
    { id: 'u6b', era: 'my', y: '1992–2022', nav: T('扛著機器的人', 'Those who carried the camera'), b: [
      { k: 'story', lay: 'T', date: '1992', h: T('厚紙卡上的照片', 'Photographs on coloured card'),
        p: [T('一九九二年，簡慈露開始投入慈濟志業，先生劉濟雨在訪視、發放時發揮攝影專長。當時電腦製圖並不發達，劉濟雨用彩色的厚紙卡，黏上照片和手寫圖解，製成文宣看板或檔案本，成為南馬慈濟最早的文宣品。', 'In 1992, Jian Cilu began working with Tzu Chi, and her husband Liu Jiyu put his photography to use on home visits and distributions. Computer graphics were still rare, so he pasted photographs and handwritten notes on coloured card to make display boards and files, the earliest Tzu Chi publicity in southern Malaysia.')],
        s: ['x495'] },
      { k: 'story', lay: 'R', date: '2004–2006', h: T('一邊扛著機器', 'Carrying the camera on his shoulder'),
        p: [T('陳貴州（濟為）二〇〇四年投入人文真善美志工行列，一開始對錄影不熟悉，經過同仁林妍君耐心教導，才慢慢嘗試獨立拍攝。二〇〇六年，他承擔人文真善美幹事，也開始陪伴新手志工。', 'Chen Guizhou (Ji Wei) joined the volunteer documentary team in 2004. He knew little about filming until colleague Lin Yanjun patiently taught him, and little by little he tried working alone. In 2006 he took on the team’s coordination and began guiding newcomers.')],
        q: { zh: '只好一邊扛著機器，慢慢摸索，一邊找尋有心想加入人文真善美的有緣人。', en: 'All I could do was carry the camera, feel my way along, and at the same time look for people who wanted to join.', who: T('陳貴州', 'Chen Guizhou') },
        ph: [{ i: 'u_tripod', c: T('影視課程研習營的三腳架，馬六甲分會，1999.12.03。照片：馬六甲分會提供。', 'A tripod at a video training camp, Melaka branch, 3 December 1999. Photo: Melaka branch.') }],
        s: ['x513', 'x497'] },
      { k: 'story', lay: 'T', date: '2004', h: T('步行半小時，去學電腦', 'A half-hour walk to learn the computer'),
        p: [T('二〇〇四年斯里蘭卡發生海嘯，陳金香到當地參與國際賑災。她不懂得操作電腦，手寫的稿件得靠其他志工幫忙打字。看到夥伴要剪輯畫面，還要協助她，她下定決心要學會。', 'After the 2004 tsunami, Chen Jinxiang went to Sri Lanka with the relief work. She could not use a computer, so others had to type up her handwritten reports. Seeing colleagues give up their rest to help her, she resolved to learn.'),
          T('回國後，她天天抱著電腦，步行半小時到鄰近的靜思書軒請教同仁，從零學起。有志工說不知如何提筆，她這樣分享：', 'Back home she carried her computer every day on a half-hour walk to the nearest Jing Si shop to ask colleagues for help, starting from nothing. When volunteers say they do not know how to begin writing, she tells them:')],
        q: { zh: '人物故事最感人之處，就是平凡中必有不平凡，從細節裡尋找寶藏，敏銳觀察細心體會。', en: 'What moves people most in a life story is that within the ordinary there is always the extraordinary. Look for treasure in the details, observe keenly and feel with care.', who: T('陳金香', 'Chen Jinxiang') },
        s: ['x514'] },
      { k: 'story', lay: 'T', date: '2009–2021', h: T('四地輪流的《大馬慈濟情》', 'Tzu Chi Malaysia, made in turns'),
        p: [T('二〇〇九年十二月，在大愛臺副總監張尊昱鼓勵下，馬來西亞各分會開始協力製作專題節目《大馬慈濟情》，由馬六甲、雪隆、檳城及吉打分會影視同仁輪流承擔。', 'In December 2009, encouraged by Da Ai deputy director Chang Tsun-yu, Malaysian branches began working together on the series Tzu Chi Malaysia, with video colleagues in Melaka, Selangor and Kuala Lumpur, Penang and Kedah taking turns.'),
          T('二〇一一年六月四日起，節目在大愛臺全球同步播出，每週六上午一集。截至二〇二一年，404 集節目中，雪隆團隊製作了 154 集。', 'From 4 June 2011 it went out on Da Ai worldwide, one episode each Saturday morning. By 2021, of 404 episodes, the Selangor and Kuala Lumpur team had made 154.')],
        s: ['x499', 'x500'] },
      { k: 'story', lay: 'T', date: '2016–2022', h: T('一支手機', 'A mobile phone'),
        p: [T('隨著智慧手機普及，志工許國進二〇一六年在沙登共修處測試手機錄影課程。二〇一七年十二月十五日，吉隆坡靜思堂社教中心首度舉辦「簡易手機錄影及剪輯工作坊」。截至二〇二二年三月，超過兩千六百名志工與會眾受惠。', 'As smartphones spread, volunteer Xu Guojin tried out a phone filming class at Serdang in 2016. On 15 December 2017 the first workshop on simple phone filming and editing was held at the Kuala Lumpur Jing Si Hall. By March 2022, more than 2,600 volunteers and members had benefited.'),
          T('二〇一八年，雪隆分會在 YouTube 設立「志工故事館」，讓志工有發表的平臺，截至二〇二二年三月累計發布 101 則短片。', 'In 2018 the branch set up a Volunteer Story House on YouTube as a place for volunteers’ work. By March 2022 it had published 101 short films.')],
        s: ['x510'] },
      { k: 'photos', lay: 'one', ph: [{ i: 'u_files', c: T('馬來西亞慈濟史教育訓練工作坊上的檔案夾，2013 年 11 月。照片：胡玉美。', 'Files at a Tzu Chi Malaysia history workshop, November 2013. Photo: Hu Yumei.') }] }
    ] },
    { id: 'u6c', era: 'my', y: '2011–2026', nav: T('搭船到吉膽島', 'By boat to Pulau Ketam'), b: [
      { k: 'story', lay: 'R', date: '2015.07.04', h: T('《法譬如水》', 'Water of Dharma'),
        p: [T('二〇一一年六月起，雪隆和馬六甲分會陸續啟動《法譬如水慈悲三昧水懺講記》讀書會。巴生手語種子溫寶玉（慈璵）與團隊，把《法譬如水》從巴生傳到萬津、適耕莊、大港、沙白安南，「甚至是搭船到吉膽島」。', 'From June 2011, the Selangor and Kuala Lumpur and Melaka branches began reading groups on the Water Repentance. In Klang, sign-language seed teacher Wen Baoyu (Ci Yu) and her team carried the work to Banting, Sekinchan, Sungai Besar and Sabak Bernam, and even by boat to Pulau Ketam.'),
          T('二〇一四年十一月，雪隆分會成立「心鼓隊」，隊員由實業組志工組成。他們不僅在桌上練，也把大腿當鼓。', 'In November 2014 the branch formed the Heart Drum Team from business volunteers, who practised on tabletops and even on their own thighs.'),
          T('二〇一五年七月四日下午，首場《法譬如水》經藏演繹在吉隆坡武吉加里爾室內體育館演出，雪隆和馬六甲各社區據點超過四千六百位志工與會眾參加。', 'On the afternoon of 4 July 2015, the first performance of Water of Dharma took place at the Bukit Jalil indoor stadium in Kuala Lumpur. More than 4,600 volunteers and members from communities in the two branches took part.')],
        ph: [{ i: 'u_fa2', c: T('《法譬如水》四面舞臺遠景，2015 年。照片：翁書霖。', 'Water of Dharma on its four-sided stage, 2015. Photo: Weng Shulin.') }],
        s: ['x595', 'x603', 'x597', 'x601', 'x599', 'x600'] },
      { k: 'story', lay: 'R', date: '2015.08.30', h: T('講經堂', 'The lecture hall'),
        p: [T('二〇一五年八月三十日，吉隆坡靜思堂講經堂正式啟用。', 'On 30 August 2015, the lecture hall of the Kuala Lumpur Jing Si Hall officially opened.')],
        ph: [{ i: 'u_kl', c: T('吉隆坡靜思堂外觀。照片：朱國財。', 'The Kuala Lumpur Jing Si Hall. Photo: Zhu Guocai.') }],
        s: ['x582'] },
      { k: 'story', lay: 'T', date: '2026', h: T('會場很暗', 'A dark hall'),
        p: [T('慈濟新山支會與峇株巴轄聯絡處推出《無量義．再現》經藏演繹，超過千人參與。為了記錄下來，除了當地真善美志工，六位檳城真善美志工也跨區來支援。', 'Tzu Chi in Johor Bahru and Batu Pahat presented a sutra adaptation with more than a thousand people taking part. To record it, six documenting volunteers from Penang crossed over to join the local team.')],
        q: { zh: '拍攝遇到的困難主要是，因為整個會場都很暗，所以我們就是要，去找有光線打到人身上的時候。', en: 'The main difficulty in filming was that the whole hall was dark, so we had to look for the moments when light fell on people.', who: T('謝佳宇，慈濟志工', 'A Tzu Chi volunteer') },
        s: ['nYt26'] },
      { k: 'eight', bare: 1, ask: T('媽媽，那我現在看的是什麼？', 'Mama, so what am I watching now?'),
        h: T('你現在看的這些，就是這個腳印。', 'What you are watching now is this footprint.'),
        t: T('前面七站的故事，都有人替我們留了下來。有人用鋼板，有人用話筒，有人用鏡頭，後來還有人用一支手機。', 'Someone kept the stories of the first seven stops for us. Some used a steel plate, some a microphone, some a lens, and later some a mobile phone.'),
        g1: T('四大志業', 'The four missions'), g2: T('再加四個腳印', 'And four more footprints'),
        items: [T('慈善', 'Charity'), T('醫療', 'Medicine'), T('教育', 'Education'), T('人文', 'Humanistic Culture'), T('國際賑災', 'International Relief'), T('骨髓捐贈', 'Bone Marrow Donation'), T('環保', 'Environmental Protection'), T('社區志工', 'Community Volunteerism')],
        q: T('法脈資料庫記述環保志工幹部：「人人都是一步八腳印，步步踏實。」', 'The Dharma Lineage Archive says of recycling volunteer leaders: “Everyone takes one step and leaves eight footprints, each step firm on the ground.”'),
        s: ['f304'] }
    ] },

    /* 數字與沿革 */
    { id: 'unum', era: 'num', y: '數字', yen: 'Numbers', h: T('數字裡的人文', 'Humanistic Culture in numbers'), nav: T('數字', 'Numbers'), b: [
      { k: 'ledger' }, { k: 'usub' }
    ] },
    { id: 'uall', era: 'all', y: '沿革', yen: 'Timeline', h: T('沿革與影音', 'Timeline and films'), lead: T('六段路之外的日期和原始出處，都在這裡。', 'Dates and original sources beyond the six stretches are all here.'), nav: T('沿革與影音', 'Timeline and films'), b: [
      { k: 'films' }, { k: 'records' }, { k: 'sources' }
    ] }
  ];

  CH.blocks = [
    { id: 'u1', y: '1967–2007', h: T('鋼板上的第一筆', 'The first lines on a steel plate'), ch: ['u1a', 'u1b'], cover: 'u_mast', tun: 'u_b1' },
    { id: 'u2', y: '1985–1998', h: T('聽得見，看得見', 'Heard, then seen'), ch: ['u2a', 'u2b'], cover: 'u_deck', tun: 'u_b2' },
    { id: 'u3', y: '2003–2026', h: T('報真導正', 'Report truly, guide rightly'), ch: ['u3a', 'u3b'], cover: 'u_ctrl', tun: 'u_b3' },
    { id: 'u4', y: '1989–2008', h: T('文史流芳', 'A history that endures'), ch: ['u4a', 'u4b'], cover: 'u_stone', tun: 'u_b4' },
    { id: 'u5', y: '1992–2025', h: T('走進生活', 'Into daily life'), ch: ['u5a', 'u5b'], cover: 'u_shop', tun: 'u_b5' },
    { id: 'u6', y: '1992–2026', h: T('在馬來西亞', 'In Malaysia'), ch: ['u6a', 'u6b', 'u6c'], cover: 'u_kl', tun: 'u_b6' }
  ];

  CH.ui = {
    hubK: T('人文', 'Humanistic Culture'), hubH: T('六段路，從鋼板走到鏡頭', 'Six stretches, from a steel plate to a lens'), hubS: T('一段一段走。走完一段，就蓋一個章。', 'Walk them one at a time. Each one you finish earns a stamp.'),
    start: T('從這裡開始', 'Start here'), walked: T('走過了', 'Walked'), nextTun: T('下一個時空隧道', 'Next time tunnel'), nextOf: T('下一段', 'Next'), back: T('回六段路', 'Back to the six stretches'), road: T('回八大腳印', 'Back to the Eight Footprints'),
    skip: T('跳過', 'Skip'), left: T('這一段還有', 'Still ahead'), leftU: T('個故事', 'stories'), seg: T('第 {n} 段／共 6 段', 'Part {n} of 6'), done: T('走完了這一段', 'You finished this part'), recH: T('人文沿革', 'Timeline')
  };

  CH.ledger = [
    { h: T('刊物和書', 'Publications and books'), rows: [
      { n: '3,000', u: T('份', 'copies'), l: T('《慈濟》創刊號首期發行', 'First issue of Tzu Chi'), w: T('1967', '1967'), s: 'f038', big: 1 },
      { n: '4', u: T('個版', 'pages'), l: T('《慈濟》創刊時的報紙版面', 'The newspaper at its launch'), w: T('1967', '1967'), s: 'f038' },
      { n: '八百多萬', nen: 'Over 8 million', u: T('冊', 'copies'), l: T('《靜思語》出版以來發行', 'Jing Si Aphorisms since publication'), w: T('2024 官網周年介紹', '2024 anniversary page'), s: 'tca', big: 1 },
      { n: '23', u: T('種語言', 'languages'), l: T('《靜思語》翻譯語言', 'Languages of Jing Si Aphorisms'), w: T('2024 官網周年介紹', '2024 anniversary page'), s: 'tca' }
    ] },
    { h: T('靜思書軒', 'Jing Si Books & Cafe'), rows: [
      { n: '119', u: T('家', 'shops'), l: T('全球靜思書軒', 'Shops worldwide'), w: T('截至 2025', 'As of 2025'), s: 'o020305', big: 1 },
      { n: '12', u: T('間', 'shops'), l: T('雪隆分會轄下聯絡據點的靜思書軒', 'Shops at centres under the Selangor and Kuala Lumpur branch'), w: T('至 2022', 'As of 2022'), s: 'x512' }
    ] },
    { h: T('在馬來西亞記錄', 'Recording in Malaysia'), rows: [
      { n: '404', u: T('集', 'episodes'), l: T('《大馬慈濟情》', 'Tzu Chi Malaysia'), w: T('截至 2021', 'As of 2021'), s: 'x500', big: 1 },
      { n: '154', u: T('集', 'episodes'), l: T('其中由雪隆團隊製作', 'Of these, made by the Selangor and Kuala Lumpur team'), w: T('截至 2021', 'As of 2021'), s: 'x500' },
      { n: '101', u: T('則短片', 'short films'), l: T('雪隆「志工故事館」累計發布', 'Published by the Volunteer Story House'), w: T('截至 2022 年 3 月', 'As of March 2022'), s: 'x510' },
      { n: '超過 2,600', nen: 'Over 2,600', u: T('名', 'people'), l: T('手機錄影剪輯教學受惠的志工與會眾，不是註冊志工數', 'Volunteers and members who benefited from phone filming classes, not a count of registered volunteers'), w: T('截至 2022 年 3 月', 'As of March 2022'), s: 'x510' }
    ] },
    { h: T('舞臺', 'The stage'), rows: [
      { n: '超過 4,600', nen: 'Over 4,600', u: T('位', 'people'), l: T('《法譬如水》參加的志工與會眾，不是觀眾數', 'Volunteers and members who took part in Water of Dharma, not an audience figure'), w: T('2015，馬來西亞', '2015, Malaysia'), s: 'x600', big: 1 },
      { n: '43', u: T('場', 'performances'), l: T('《無量義經》經藏演繹公演', 'Public performances of the Sutra of Innumerable Meanings'), w: T('2007 起，臺灣', 'From 2007, Taiwan'), s: 'f241' }
    ] }
  ];
  CH.ledgerNote = T('這些數字年份和範圍都不同，各自獨立，不相加。全球收視、頻道數、節目總數、真善美人數和演繹累計，目前沒有可靠的統一數字，本頁不寫。', 'These figures cover different years and places. Each stands alone, and they are not added together. Global audiences, channel counts, total programmes, documentary volunteer numbers and cumulative performances have no reliable single figure at present, so they are left out.');

  CH.films = [
    { id: '-VCdpZVGH84', zh: '《慈濟》月刊創刊', en: 'Tzu Chi Monthly launched', y: '1967' },
    { id: 'e3if2yPsjtA', zh: '第一個廣播節目《慈濟世界》', en: 'The first radio programme', y: '1985' },
    { id: '0Trd4kJAZtU', zh: '《慈濟道侶》創刊', en: 'Tzu Chi Companions launched', y: '1986' },
    { id: 'PVRIRw8-Ut4', zh: '《證嚴法師靜思語》出版', en: 'Jing Si Aphorisms published', y: '1989' },
    { id: 'ziK32AG-qLM', zh: '大愛電視臺開播', en: 'Da Ai Television begins', y: '1998' },
    { id: '3jdZ1mt7toM', zh: '《經典》雜誌創刊', en: 'Rhythms magazine launched', y: '1998' },
    { id: 'Svlsmbthwho', zh: '「文化三合一志工」成立', en: 'The three-in-one volunteers', y: '2003' },
    { id: 'ktZ_TRQRaO8', zh: '人文真善美志工：為時代做見證，為慈濟寫歷史', en: 'Documenting volunteers: bearing witness to the times', y: '2025' },
    { id: 'WF0IwNEO_iA', zh: '《無量義．再現》經藏演繹', en: 'A sutra adaptation in Johor Bahru and Batu Pahat', y: '2026' },
    { id: 'zv9OK_k7o8M', zh: '記錄大型經藏演繹', en: 'Documenting volunteers record a sutra adaptation', y: '2026' },
    { id: 'hWaAfaMNwRQ', zh: '真善美志工到底在忙什麼？', en: 'What documenting volunteers do behind the scenes', y: '2026' }
  ];

  CH.filters = [['all', T('全部', 'All')], ['print', T('刊物與出版', 'Print')], ['air', T('廣播與電視', 'Radio and TV')], ['rec', T('記錄志工', 'Recording')], ['live', T('書軒與舞臺', 'Shops and stage')], ['my', T('馬來西亞', 'Malaysia')]];
  CH.records = [
    ['1967', 'print', '陳貞如向上人提出「辦雜誌」的構想。', 'Chen Chen-ju proposes a publication.', 'f038'],
    ['1967.07.20', 'print', '《慈濟》創刊，報紙型四個版，每月 5 日、20 日出刊，首期三千份。', 'Tzu Chi launched: a four-page newspaper, twice a month, 3,000 copies.', 'f038'],
    ['1968', 'print', '由半月刊改為月刊。', 'Becomes a monthly.', 'f038'],
    ['1973.08.05', 'print', '第 82 期起改為十六開雜誌型。', 'Magazine format from issue 82.', 'f038'],
    ['1985.11.16', 'air', '天南電臺播出《慈濟世界》，慈濟第一個廣播節目。', 'Tzu Chi World, the first radio programme, begins.', 'f089'],
    ['1986.03.08', 'print', '臺北普門文庫無條件交給慈濟接辦。', 'The Pumen Library is handed to Tzu Chi.', 'f096'],
    ['1986.08.01', 'print', '普門文庫改組為「佛教慈濟文化服務中心」。', 'The library becomes a cultural service centre.', 'f096'],
    ['1986.09.01', 'print', '《慈濟道侶》創刊。', 'Tzu Chi Companions launched.', 'f096'],
    ['1988.09', 'print', '第 263 期起，「每月徵信」改為「年度徵信」。', 'From issue 263, monthly accounts become annual.', 'f038'],
    ['1989', 'rec', '「慈濟筆耕隊」成立。', 'The writers’ team is formed.', 'f271'],
    ['1989.09.17', 'print', '《證嚴法師靜思語》非賣品發行。', 'Jing Si Aphorisms issued, not for sale.', 'f118'],
    ['1989.11.15', 'print', '《證嚴法師靜思語》授權九歌出版社初版發行。', 'Chiu Ko Publishing issues its first edition.', 'f118'],
    ['1990.10.29', 'print', '接獲新聞局覆函，「慈濟文化出版社」照准成立。', 'The Tzu Chi Cultural Publishing Company is approved.', 'f135'],
    ['1991.10.12', 'air', '臺北分會設立錄音室，廣播單位有了自己的家。', 'The radio team gets its own studio at the Taipei branch.', 'f089'],
    ['1992', 'live', '臺灣慈濟本會成立靜思手語隊。', 'The Jing Si sign-language team is formed in Taiwan.', 'x593'],
    ['1992', 'rec my', '劉濟雨用彩色厚紙卡製成文宣看板或檔案本，是南馬慈濟最早的文宣品。', 'Liu Jiyu makes boards and files from coloured card, the earliest publicity in southern Malaysia.', 'x495'],
    ['1996', 'rec', '「慈濟影視映像志工聯誼會」成立。', 'A volunteer video fellowship is formed.', 'f271'],
    ['1997.11.19', 'air', '大愛臺與新聞局簽約，租用公視大樓和兩個攝影棚。', 'Da Ai leases floors and two studios in the Public Television building.', 'f209'],
    ['1998.01', 'print', '《慈濟》第 374 期起全面彩色印刷。', 'Tzu Chi in full colour from issue 374.', 'f038'],
    ['1998.01.01', 'air', '下午三點二十分，大愛電視臺正式開播。', 'Da Ai Television goes on air at 3:20 p.m.', 'f209'],
    ['1998.08.01', 'print', '《經典》雜誌創刊。', 'Rhythms magazine launched.', 'f210'],
    ['1999.04.01', 'air', '大愛臺搬遷至南港中視新大樓。', 'Da Ai moves to Nangang.', 'f209'],
    ['1999.10.17', 'print my', '馬來西亞舉辦《慈濟世界》期刊創刊推介禮。這是當地期刊，和 1985 年臺灣的同名廣播不同。', 'A launch is held for the Malaysian periodical Tzu Chi World, separate from the Taiwan radio programme of the same name.', 'x503'],
    ['2000.08.11', 'live my', '全球第一家靜思書軒在檳城成立。', 'The world’s first Jing Si Books & Cafe is established in Penang.', 'x511'],
    ['2002.03.05', 'live', '新舞台靜思書軒試營運，全臺第一家走出會所的書軒。', 'The Novel Hall shop opens on trial, the first in Taiwan outside a Tzu Chi centre.', 'o020305'],
    ['2002.07.24', 'live', '《父母恩重難報經》音樂手語劇開始全臺巡迴，總計三十一場。', 'The sign-language drama on filial piety tours Taiwan, 31 performances.', 'f241'],
    ['2002.12.06', 'rec', '臺南工地功能組會議，上人開示影像、相片、文字三合一。', 'At a meeting in Tainan the Master speaks of video, photographs and words as three in one.', 'f271'],
    ['2003.02.22', 'rec', '關渡慈濟園區研習課程，布達三合一整合的理念。', 'The three-in-one idea is announced at a course in Guandu.', 'f271'],
    ['2003.07.04', 'live', '《藥師如來十二大願》音樂手語劇全臺巡迴，共三十一場。', 'The Twelve Great Vows of the Medicine Buddha tours Taiwan, 31 performances.', 'f241'],
    ['2004.09.18', 'live my', '吉隆坡靜思書軒啟用。', 'The Kuala Lumpur shop opens.', 'x511'],
    ['2004.12.24', 'rec', '上人把「文化」改稱「人文」。', 'The Master renames “culture” as “humanity”.', 'f291'],
    ['2005.01.01', 'air', '大愛全數位製播系統完工啟用。', 'Da Ai’s all-digital system comes into use.', 'f291'],
    ['2005.09.01', 'air', '慈濟大愛網路電臺開播。', 'Internet radio begins.', 'f089'],
    ['2006.02.15', 'air', '印尼雅加達大愛電視無線臺試播。', 'Test transmission from the Da Ai station in Jakarta.', 'f291'],
    ['2007.04.01', 'print', '《慈濟》推出電子雜誌。', 'Tzu Chi’s electronic edition begins.', 'f038'],
    ['2007.09.15', 'live', '《無量義經》經藏演繹展開全臺四十三場公演。', 'The Sutra of Innumerable Meanings begins 43 performances across Taiwan.', 'f241'],
    ['2009.12', 'air my', '馬來西亞各分會開始協力製作《大馬慈濟情》。', 'Malaysian branches begin making Tzu Chi Malaysia.', 'x499'],
    ['2010.03.20', 'rec my', '吉隆坡與巴生首次舉辦人文真善美實作課程，共十六位志工參加。', 'Kuala Lumpur and Klang hold their first documentary practice course, with sixteen volunteers.', 'x508'],
    ['2011.06.04', 'air my', '《大馬慈濟情》在大愛臺播出。', 'Tzu Chi Malaysia goes out on Da Ai.', 'x500'],
    ['2013.12.03', 'rec my', '大馬版圖像編輯系統「3in1」開發完成。', 'The Malaysian image system “3in1” is completed.', 'x509'],
    ['2015.07.04', 'live my', '首場《法譬如水》經藏演繹在吉隆坡演出。', 'First performance of Water of Dharma in Kuala Lumpur.', 'x599'],
    ['2015.08.30', 'my', '吉隆坡靜思堂講經堂啟用。', 'The lecture hall of the Kuala Lumpur Jing Si Hall opens.', 'x582'],
    ['2017.12.15', 'rec my', '首度舉辦「簡易手機錄影及剪輯工作坊」。', 'The first workshop on phone filming and editing.', 'x510'],
    ['2019.06.28', 'air', '慈濟製播的臺東慈善紀錄片《如常》於全臺 28 家戲院上映。', 'A Tzu Chi documentary on charity work in Taitung opens in 28 cinemas across Taiwan.', 'u438'],
    ['2023.07.29', 'live', '《無量義法髓頌》經藏演繹在彰化體育場展開，二〇二三年全年共演出 18 場。', 'A sutra adaptation opens at the Changhua stadium; 18 performances are held during 2023.', 'o230729'],
    ['2024.07.04', 'live my', '慈濟科技大學親善大使團 23 位學生展開星馬巡演，九場演出吸引逾萬人觀賞。', 'Twenty-three student ambassadors from Tzu Chi University of Science and Technology begin a tour of Singapore and Malaysia; nine shows draw over 10,000 people.', 'o240704'],
    ['2024.09.01', 'air my', '星馬慈濟團隊推展在地傳法，尼泊爾版《祈禱》於菩提電視臺首播。', 'With Tzu Chi teams from Singapore and Malaysia, the Nepal edition of Prayer premieres on Bodhi TV.', 'o240502'],
    ['2025.03', 'print', '《慈濟》月刊三月號邁入第七百期。', 'Tzu Chi Monthly reaches its 700th issue.', 'nM700'],
    ['2025.07.11', 'print', '歷經兩年修護，國立臺灣圖書館團隊將七冊《法華經》古籍恭呈上人。', 'After two years of restoration, a National Taiwan Library team presents seven volumes of the Lotus Sutra to Master Cheng Yen.', 'o250711'],
    ['2026.02.03', 'print', '臺北國際書展重現《古蘭經》與《法華經》的修復過程。', 'The Taipei International Book Exhibition shows the restoration of the Quran and the Lotus Sutra.', 'o250711'],
    ['2026.07.03', 'live', '慈濟人文在華山開展「29放光．慈濟60」特展，十天展期結合劇場、講座與蔬食市集。', 'A ten-day exhibition opens at Huashan 1914 in Taipei, with theatre, talks and a vegetarian market.', 'nHs29']
  ];

  CH.next = { ask: T('八個腳印，走完了。', 'All eight footprints have been walked.'), stop: T('全系列最後一站', 'The last stop of the journey') };
  CH.footer = T('本頁為樣板，尚未經馬來西亞慈濟分會審核，未發佈。女孩與媽媽是說故事的人。照片除另有說明外，取自慈濟《歷史上的今天》公開頁面，已裁成無人局部；馬來西亞的照片取自《馬來西亞慈濟史 雪隆分會（二）》。標示「示意」的畫面為插畫，非當年實物。「」內為原文照錄，英文為本頁翻譯，僅供閱讀。', 'This page is a draft. It has not been reviewed by the Tzu Chi Malaysia branch and is not published. The girl and her mother are storytellers. Unless noted, photographs come from the public Tzu Chi On This Day pages and are cropped to details without people; Malaysian photographs come from the History of Tzu Chi Malaysia, vol. 2. Anything marked as an illustration is not an original object. Words in quotation marks are verbatim in Chinese; the English is this page’s own translation, for reading only.');

  /* 隧道：reel 走法，墨黑紙白，六段照片不重複主角，方向交替 */
  window.TUN_M = window.TUN_M || {};
  var TM = window.TUN_M;
  var rl = function (dir, d, ids, x) { var o = { walk: 'reel', dir: dir, d: d, ids: ids.map(function (i) { return 'cu_' + i; }), bg: '#0d0c0b', tint: '#efe7d6', a0: 0, a1: .08, ink: '#f7f2e6', plate: 'rgba(13,12,11,', pa: .74 }; if (x) Object.keys(x).forEach(function (k) { o[k] = x[k]; }); return o; };
  TM.u_b1 = rl(1, 3600, ['mast', 'date', 'emag', 'emag2', 'mast', 'date']);
  TM.u_b2 = rl(-1, 3400, ['title', 'deck', 'pumen', 'daolu', 'bound', 'banner']);
  TM.u_b3 = rl(1.2, 3200, ['ctrl', 'dish', 'sub', 'guandu', 'ctrl', 'dish']);
  TM.u_b4 = rl(-1.2, 3400, ['stone', 'guandu', 'tripod', 'files', 'stone', 'emag']);
  TM.u_b5 = rl(.8, 3200, ['shop', 'tai', 'sutra', 'drum', 'sub', 'shop']);
  TM.u_b6 = rl(-.8, 3600, ['kl', 'fa2', 'tripod', 'files', 'shop', 'kl']);

  /* 自定義區塊 */
  var api = function () { return CH.api; };
  var strip = function (a) { return a.map(function (x, i) { return '<i style="--i:' + i + '"></i>'; }).join(''); };
  var R = CH.R = {};

  /* 1 鋼板到螢幕：字一筆筆出現，版面換五次 */
  R.plate = function (b) {
    var A = api(), lines = '', i;
    for (i = 0; i < 12; i++) lines += '<i style="--i:' + i + ';--w:' + (72 + (i * 37) % 26) + '%"></i>';
    var ch = b.q.zh.split('').map(function (c, n) { return '<i style="--i:' + n + '">' + c + '</i>'; }).join('');
    var steps = [['-1', '.5', T('手寫徵信', 'Handwritten accounts')], ['.5', '.64', T('1967　報紙型，四個版', '1967: a four-page newspaper')], ['.64', '.77', T('1973　十六開雜誌型', '1973: a magazine')], ['.77', '.88', T('1998　全面彩色印刷', '1998: full colour')], ['.88', '9', T('2007　電子雜誌', '2007: an e-magazine')]];
    var pages = steps.map(function (s, n) { return '<div class="pl-l pl-' + n + '" style="--a:' + s[0] + ';--b:' + s[1] + '">' + (n === 0 ? '<div class="pl-g">' + lines + '</div>' : '<b></b><span></span>') + '</div>'; }).join('');
    var labs = steps.map(function (s) { return '<span class="pl-y" style="--a:' + s[0] + ';--b:' + s[1] + '">' + A.B(s[2]) + '</span>'; }).join('');
    return '<section class="fx fx-pl" data-fx><div class="fx-s"><div class="pl-w"><div class="pl-c"><div class="pl-o" aria-hidden="true">' + pages + '</div><p class="pl-k">' + labs + '</p></div><div class="pl-t">' + A.B(b.lead, 'p') +
      '<blockquote class="q pl-q"><p class="zh" aria-label="' + b.q.zh + '">「' + ch + '」</p><p class="en" lang="en">“' + b.q.en + '”</p><cite>' + A.B(b.q.who) + '</cite></blockquote><small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></div></section>';
  };

  /* 2 聲波拉直，變成電視開機的亮線 */
  R.wave = function (b) {
    var A = api(), bars = '', i;
    for (i = 0; i < 56; i++) bars += '<i style="--h:' + (.14 + .86 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * .45))).toFixed(2) + '"></i>';
    return '<section class="fx fx-wv" data-fx><div class="fx-s"><div class="wv-w"><p class="wv-y wv-a">' + A.B(b.a) + '</p><p class="wv-y wv-b">' + A.B(b.b2) + '</p><div class="wv-o" aria-hidden="true"><div class="wv-g">' + bars + '</div><div class="wv-l"></div><div class="wv-tv"><span>' + A.B(b.tv) + '</span></div></div>' + A.B(b.t, 'p', 'wv-t') + '<small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></section>';
  };

  /* 3 六道作業逐格亮起 */
  R.six = function (b) {
    var A = api();
    return '<section class="fx fx-sx" data-fx><div class="fx-s"><div class="sx-w"><h3>' + A.B(b.h) + '</h3>' + A.B(b.t, 'p') + '<ol class="sx-g">' + b.items.map(function (x, i) { return '<li style="--i:' + i + '"><b>' + (i + 1) + '</b>' + A.B(x) + '</li>'; }).join('') + '</ol><small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></section>';
  };

  /* 4 三條線合成一條 */
  R.three = function (b) {
    var A = api();
    return '<section class="fx fx-tr" data-fx><div class="fx-s"><div class="tr-w"><div class="tr-o"><div class="tr-l">' + b.labels.map(function (x) { return A.B(x, 'p'); }).join('') + '</div><svg viewBox="0 0 420 150" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M0 25 C180 25 200 75 300 75 L420 75"/><path pathLength="1" d="M0 75 L420 75"/><path pathLength="1" d="M0 125 C180 125 200 75 300 75 L420 75"/></svg>' + A.B(b.end, 'p', 'tr-e') + '</div>' + A.B(b.t, 'p') + A.quote(b.q) + '<small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></section>';
  };

  /* 5 空書架一格格擺上書 */
  R.shelf = function (b) {
    var A = api(), rows = '', i = 0, r, c, col = ['#2a2622', '#efe7d6', '#7d6a4f', '#b8ad97', '#4b4239'];
    for (r = 0; r < 7; r++) { rows += '<div>'; for (c = 0; c < 17; c++, i++) rows += '<i style="--i:' + i + ';--c:' + col[(i * 7 + r) % 5] + ';--t:' + (72 + (i * 13) % 28) + '%"></i>'; rows += '</div>'; }
    return '<section class="fx fx-sh" data-fx data-n="' + b.n + '" data-a=".08" data-b=".82"><div class="fx-s"><div class="sh-w"><div class="sh-g" aria-hidden="true">' + rows + '</div><div class="sh-t"><h3>' + A.B(b.h) + '</h3><p class="sh-n"><b data-c>' + b.n + '</b>' + A.B(b.u) + '</p>' + A.B(b.t, 'p') + '<small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></div></section>';
  };

  /* 6 一令吉的租約翻開，是一間社區客廳 */
  R.lease = function (b) {
    var A = api();
    return '<section class="fx fx-ls" data-fx><div class="fx-s"><div class="ls-w"><div class="ls-o"><div class="ls-r"><i class="r-sh"></i><i class="r-lp"></i><i class="r-tb"></i><i class="r-c1"></i><i class="r-c2"></i><i class="r-ch"></i><p class="r-t">' + A.B(b.room) + '</p></div><div class="ls-c"><p class="c-h">' + A.B(b.cv) + '</p><i></i><i></i><p class="c-a">' + A.B(b.amt) + '</p><i></i><p class="c-m">' + A.B(b.mark) + '</p></div></div><div class="ls-t"><h3>' + A.B(b.h) + '</h3>' + A.B(b.t, 'p') + A.quote(b.q) + '<small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></div></section>';
  };

  /* 收尾：八個腳印，按官方順序列一次 */
  var foot = '<svg viewBox="0 0 40 60" aria-hidden="true"><ellipse cx="20" cy="27" rx="11" ry="13"/><ellipse cx="20" cy="49" rx="7.5" ry="8.5"/><circle cx="8" cy="10" r="3.4"/><circle cx="15" cy="6.5" r="3.6"/><circle cx="23" cy="6" r="3.6"/><circle cx="31" cy="9" r="3.4"/></svg>';
  R.eight = function (b) {
    var A = api();
    var cell = function (x, i) { return '<li style="--i:' + i + '">' + foot + A.B(x) + '</li>'; };
    return '<section class="fx fx-8" data-fx><div class="fx-s"><div class="e8-w"><p class="e8-a t">' + A.B(b.ask) + '</p><h3>' + A.B(b.h) + '</h3>' + A.B(b.t, 'p') +
      '<p class="e8-k">' + A.B(b.g1) + '</p><ol class="e8-g">' + b.items.slice(0, 4).map(function (x, i) { return cell(x, i); }).join('') + '</ol><p class="e8-k">' + A.B(b.g2) + '</p><ol class="e8-g">' + b.items.slice(4).map(function (x, i) { return cell(x, i + 4); }).join('') + '</ol>' +
      A.B(b.q, 'p', 'e8-q') + A.srcs(b.s) + '</div></div></section>';
  };

  /* 154 是 404 的子集，畫在同一條上，不並排 */
  R.usub = function () {
    var A = api();
    return '<div class="ku-b"><h3>' + A.B(T('《大馬慈濟情》404 集裡的 154 集', '154 of the 404 episodes of Tzu Chi Malaysia')) + '</h3><div class="ku-t"><i style="width:' + (154 / 404 * 100).toFixed(1) + '%"></i></div><p class="ku-k">' + A.B(T('深色：雪隆團隊製作 154 集。全條：404 集，截至 2021 年。', 'Dark: 154 made by the Selangor and Kuala Lumpur team. Full bar: 404 episodes, as of 2021.')) + '</p>' + A.srcs(['x500']) + '</div>';
  };

  R.films = function () {
    var A = api();
    return '<h3 class="h4"><span class="zh">影片</span><span class="en" lang="en">Films</span></h3><div class="ku-fl">' + CH.films.map(function (x) { return '<a href="https://www.youtube.com/watch?v=' + x.id + '" target="_blank" rel="noopener"><b>' + x.y + '</b>' + A.B(x) + '</a>'; }).join('') + '</div>';
  };

  /* 滾動進度：寫到 --p；放不下一屏就改成不釘住的 .flat */
  var fx = [], reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, fit = '';
  function measure() { fx.forEach(function (e) { e.classList.remove('flat'); var s = e.querySelector('.fx-s'); if (reduce || s.scrollHeight > s.clientHeight + 1) e.classList.add('flat'); }); }
  CH.onWire = function () { fx = [].slice.call(document.querySelectorAll('[data-fx]')); fit = ''; if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { fit = ''; CH.onFrame(); }); CH.onFrame(); };
  CH.onFrame = function () {
    var H = innerHeight, k = innerWidth + document.documentElement.getAttribute('data-lang');
    if (k !== fit) { fit = k; measure(); }
    fx.forEach(function (e) {
      var r = e.getBoundingClientRect(); if (r.bottom < -H || r.top > H * 2) return;
      var p = e.classList.contains('flat') ? 1 : Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - H)));
      e.style.setProperty('--p', p.toFixed(4));
      var c = e.querySelector('[data-c]');
      if (c) { var n = +e.dataset.n, a = +e.dataset.a, b = +e.dataset.b; c.textContent = Math.round(n * Math.min(1, Math.max(0, (p - a) / (b - a)))); }
    });
  };
})();
