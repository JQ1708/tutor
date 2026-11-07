/* 骨髓捐贈站：內容、圖片尺寸、隧道參數、六個滾動效果。charity.js 共用；這個檔只放本站的東西 */
(function () {
  var T = function (zh, en) { return { zh: zh, en: en }; };
  var otd = function (d, tail) { var s = d.slice(0, 4) + '.' + d.slice(4, 6) + '.' + d.slice(6, 8); return { zh: '《慈濟歷史上的今天》' + s, en: 'Tzu Chi, On This Day, ' + s, url: 'https://tzuchiculture.org/tzuchi_60th_anniversary/onthisday/onthisday_' + d + (tail === undefined ? '-1' : tail) + '/' }; };
  var fm = function (n, t) { return { zh: '慈濟法脈資料庫 ' + n + '〈' + t + '〉', en: 'Tzu Chi Dharma Lineage Archive, no. ' + n }; };

  var S = {
    f062: fm('00062', '信己無私，信人有愛'),
    f160: fm('00160', '救人一命，無損己身'),
    f161: fm('00161', '設立「慈濟基金會骨髓捐贈資料中心」'),
    o930120: otd('19930120'), o931020: otd('19931020'),
    i60: { zh: '慈濟六十周年影響力官網，行動六', en: 'Tzu Chi 60th anniversary impact site, Action 6', url: 'https://60impact.tzuchi.org.tw/' },
    w94: { zh: '《1994 慈濟年鑑》〈感謝有你，使他生命無憾〉', en: 'Tzu Chi Almanac 1994', url: 'https://tcdata.tzuchi-org.tw/asset/detail/20231203-124413819-6470?keyword=1994%E5%B9%B4%E6%85%88%E6%BF%9F%E5%B9%B4%E9%91%91' },
    wlin: { zh: '馬來西亞慈濟官網〈傻做歡喜行　害羞女孩的蛻變路〉，二〇二六年三月四日', en: 'Tzu Chi Malaysia, feature on Lin Chiu-li, 4 March 2026', url: 'https://tzuchi.my/zh/慈济新知/慈济报导/人物报导/cat/傻做欢喜行害羞女孩的蜕变路' },
    wxj: { zh: '花蓮慈濟醫院〈冰天凍地 送髓到新疆〉，日誌二〇一九年一月十九日', en: 'Hualien Tzu Chi Hospital, carrying stem cells to Xinjiang, log of 19 January 2019', url: 'https://hlm.tzuchi.com.tw/home/index.php/news/log/2019-07-13-09-20-02_20250220001258_645' },
    w20: { zh: '《人醫心傳》二〇二〇年八月號，頁 46–51', en: 'Ren Yi Xin Chuan, August 2020, pp. 46–51', url: 'https://tcmc.tzuchi.com.tw/images/NEW/200/n46.pdf' },
    wdon: { zh: '慈濟骨髓幹細胞中心官網流程索引', en: 'Tzu Chi Stem Cells Center website, process index', url: 'https://btcscc.tzuchi.com.tw/index/donate' }
  };
  var CH = window.CH = { S: S };
  var SR = function (d, e) { return T('證嚴上人，' + d, 'Dharma Master Cheng Yen, ' + e); };

  /* 圖片：尺寸登記到 PHS；隧道圖登記到 RIVER_M。攝影年都不詳，一律 0 不印 */
  var P = window.PHS = window.PHS || {};
  var SZ = {
    hero_w: [1600, 900], marrow_arm: [1075, 479], w_thread: [1200, 675],
    w_banner: [891, 215], w_forms: [720, 566], w_rack: [720, 516], w_walk: [758, 318], w_dome: [1024, 500], w_meetbn: [1024, 167], w_bouquet: [720, 451], w_lab: [720, 465],
    w_cord: [972, 733], w_iv: [768, 507], w_swab: [1024, 576], w_table: [720, 404], w_chairs: [720, 362], w_news1: [738, 299], w_news3: [1024, 576], w_hand: [1024, 565],
    w_world: [1024, 316], w_buddha: [1024, 728], w_machine: [720, 959], w_tie: [1024, 576], w_sash: [653, 1267], w_back: [473, 812], w_sign: [720, 272], w_tubes: [720, 582]
  };
  Object.keys(SZ).forEach(function (k) { P[k] = SZ[k]; });
  var RV = ['banner', 'forms', 'rack', 'walk', 'dome', 'meetbn', 'bouquet', 'lab', 'cord', 'iv', 'swab', 'table', 'chairs', 'news1', 'news3', 'hand', 'world', 'buddha', 'machine', 'tie', 'sash', 'back', 'sign', 'tubes'];
  /* z1–z6 是同一批照片放大的局部，只給隧道用 */
  var ZS = { z1: 445, z2: 435, z3: 361, z4: 455, z5: 418, z6: 534 };
  window.RIVER_M = (window.RIVER_M || []).concat(
    RV.map(function (k) { var z = SZ['w_' + k]; return [0, 'mw_' + k, Math.round(z[0] / z[1] * 300)]; }),
    [[0, 'mw_hero', 533], [0, 'mw_arm', 673]],
    Object.keys(ZS).map(function (k) { return [0, 'mw_' + k, ZS[k]]; }));

  CH.page = { key: 'marrow', pre: 'w', title: '骨髓捐贈｜不認識的人，也能救嗎？', still: 'hero_w', noDoor: 1, noFilm: 1, after: ['wnum', 'wall'] };

  CH.hero = {
    film: T('不認識的人，也能救嗎？', 'Can you save someone you have never met?'),
    stop: T('第六站', 'Sixth stop'), title: T('骨髓捐贈', 'Bone Marrow Donation'),
    sub: T('一位病人回國請命，醫界與慈濟人共同投入，推動非親屬骨髓捐贈。<br>此後，許多人留下資料，等待配對助人的因緣。', 'A patient came home to plead for others, and doctors and Tzu Chi people worked together to open marrow donation between strangers.<br>Since then, many have left their details and await the chance of a match.'),
    watch: T('影片製作中', 'Film in production'), read: T('走這六段路', 'Walk the six stretches'),
    ai: T('手臂的局部，取自《慈濟歷史上的今天》，拍攝日未載', 'Detail of an arm. From Tzu Chi, On This Day; date of photograph not given')
  };

  var otdC = function (z, e) { return T(z + '取自《慈濟歷史上的今天》，拍攝日未載。', e + ' From Tzu Chi, On This Day; date of photograph not given.'); };

  CH.chapters = [
    /* 1 一扇只開給親人的門 */
    { id: 'w1a', era: 'e90', y: '1992–1993', nav: T('她回到臺灣', 'She came home'), ask: T('不認識的人，也能救嗎？', 'Can you save someone you have never met?'), b: [
      { k: 'door', bare: 1,
        lead: T('一九九二年的臺灣，骨髓移植只能等親人。條例限定，捐贈者要在三親等以內或是配偶。', 'In Taiwan in 1992, a marrow transplant could only come from family. The law limited donors to relatives within three degrees of kinship, or a spouse.'),
        row: T('限三親等以內或配偶', 'Relatives within three degrees, or a spouse'), law: T('器官移植條例', 'Organ transplant law'),
        q: { zh: '當天立法院並宣布通過器官移植修正案，廢除骨髓捐贈三親等限制', en: 'That same day the Legislative Yuan announced the passing of the organ transplant amendment, abolishing the three-degree limit on marrow donation.', who: T('一九九三年五月十八日的記錄', 'Record of 18 May 1993') },
        note: T('法條版面和門都是示意，不是條文原文。這裡寫的是宣布通過的日子。', 'The page of law and the door are illustrations, not the text of the statute. The date given is the day the passing was announced.'),
        s: ['f161'] },
      { k: 'story', lay: 'R', date: '1992', h: T('她回到臺灣', 'She came home'),
        p: [T('溫文玲在美國攻讀財務博士學位，卻意外發現罹患血癌。一九九二年九月，她返國呼籲開放這道限制。', 'Wen Wen-ling was studying for a doctorate in finance in the United States when she unexpectedly learned she had leukaemia. In September 1992 she came back to Taiwan to call for this limit to be lifted.'),
          T('她獲衛生署張博雅接見，器官移植條例開始研究修改，經行政院通過後，在十一月提案立法院。', 'She was received by Chang Po-ya of the Department of Health, and work began on amending the organ transplant law. After the Executive Yuan approved it, the bill went to the Legislative Yuan in November.')],
        more: [T('一九九二年十一月十五日，慈濟美國分會為她舉行血液測試活動，尋找合適的骨髓。', 'On 15 November 1992, the Tzu Chi USA branch held a blood testing drive for her, to look for suitable marrow.')],
        ph: [{ i: 'w_news1', c: otdC('當年報紙局部，寫著為溫文玲舉辦血液測試。', 'Detail of a newspaper of the time, reporting blood testing drives held for Wen Wen-ling.') }],
        s: ['f161'] },
      { k: 'story', lay: 'T', date: '1993.01.20', h: T('她來到靜思精舍', 'She came to the Jing Si Abode'),
        p: [T('一九九三年一月二十日，溫文玲由臺大醫院陳耀昌醫師陪同，來到靜思精舍，希望能由慈濟成立骨髓資料庫。她不是來為自己求助，而是為所有血液病患請命。', 'On 20 January 1993, accompanied by Dr. Chen Yao-chang of National Taiwan University Hospital, Wen Wen-ling came to the Jing Si Abode. She hoped Tzu Chi would set up a marrow registry. She had not come to ask for herself. She came to plead for all patients with blood diseases.'),
          T('陳醫師提到，臺灣醫界一直希望能呼籲社會大眾捐髓，可是卻帶動不起來。', 'Dr. Chen said that doctors in Taiwan had long hoped to call on the public to donate marrow, but had been unable to get it moving.')],
        q: { zh: '想到那麼優秀的人怎會沒得救呢？', en: 'To think that so outstanding a person could have no way of being saved.', who: SR('二〇〇一年回顧當年', 'looking back in 2001') },
        s: ['f161', 'o930120'] }
    ] },
    { id: 'w1b', era: 'e90', y: '1993–1994', nav: T('先問清楚，才敢呼籲', 'Ask first, then appeal'), b: [
      { k: 'story', lay: 'T', date: '1993', h: T('先問清楚，才敢呼籲', 'Ask first, then appeal'),
        p: [T('上人回憶：「臺灣人還無法瞭解捐髓無損己身，因此很畏懼。這由任何機構做都很困難」。呼籲之前，上人先向醫學界問清楚捐髓對人體有沒有損害。', 'The Master recalled that people in Taiwan did not yet understand that donating marrow did no harm to the donor, and so they were afraid; for any organisation, this would be hard. Before making any appeal, the Master first asked the doctors whether donating would harm the body.')],
        q: { zh: '我問得很清楚，捐髓對人體不會有損害，像捐血般，骨髓能再生', en: 'I asked very clearly. Donating marrow does not harm the body. Like donating blood, the marrow grows back.', who: SR('一九九三年五月十九日', '19 May 1993') },
        q2: { zh: '我絕對不可能為了病人而損傷健康的人，若不透徹瞭解「骨髓移植」，絕對不敢呼籲。', en: 'I could never harm a healthy person for the sake of a patient. Unless I thoroughly understood marrow transplants, I would never dare to make an appeal.', who: SR('一九九三年十二月二十九日', '29 December 1993') },
        note: T('這是上人當年的話。捐贈之前，仍要由醫師評估。', 'These are the Master’s words at the time. Before any donation, a doctor must still assess the donor.'),
        s: ['f160', 'f161'] },
      { k: 'quote', big: 1, zh: '『救命』不能拖延，雖然這是一項高難度的工作，但慈濟責無旁貸，此事不做則已，要做就要做成功。', en: 'Saving lives cannot wait. This is very difficult work, but Tzu Chi cannot turn away from it. Either we do not do it at all, or we do it and see it through.', who: SR('一九九三年', '1993'), s: ['f161'] },
      { k: 'story', lay: 'T', date: '1993.05.18', h: T('門開了', 'The door opened'),
        p: [T('一九九三年五月十八日，李政道博士在榮總人員陪同下來到靜思精舍，和上人廣泛交換成立國內第一座骨髓庫的事宜。同一天，立法院宣布通過器官移植修正案。', 'On 18 May 1993, Dr. Lee Cheng-tao came to the Jing Si Abode with staff of Veterans General Hospital and talked at length with the Master about setting up the country’s first marrow registry. That same day, the Legislative Yuan announced the passing of the organ transplant amendment.'),
          T('一九九四年，溫文玲往生。這扇門的開啟，凝聚了溫文玲、醫界與慈濟人的共同努力。', 'In 1994, Wen Wen-ling passed away. Opening this door took the joint effort of Wen Wen-ling, the medical community and Tzu Chi people.')],
        q: { zh: '生命是無價的，所以還是決定要做。', en: 'Life is beyond price, and so we still decided to do it.', who: SR('一九九七年十二月九日', '9 December 1997') },
        note: T('李政道的名字，一九九三年的原文寫作「李正道」。', 'In the original 1993 text, the Chinese characters for Dr. Lee’s name are written slightly differently.'),
        s: ['f161', 'f160'] }
    ] },

    /* 2 留下一管血 */
    { id: 'w2a', era: 'e90', y: '1993', nav: T('八卦山上', 'On Bagua Mountain'), ask: T('那要去哪裡找那個人？', 'So where do you go to find that person?'), b: [
      { k: 'story', lay: 'R', date: '1993.09–10', h: T('交到慈濟手上', 'Entrusted to Tzu Chi'),
        p: [T('一九九三年九月六日，衛生署召開專案會議，決議推舉慈濟基金會統籌骨髓捐贈資料庫的成立及運作。', 'On 6 September 1993, the Department of Health held a special meeting and resolved to ask the Tzu Chi Foundation to set up and run the marrow donor registry.'),
          T('十月十二日到十九日，上人巡迴全省，宣導骨髓捐贈的理念。十月二十日，臺灣地區首座骨髓捐贈資料庫正式定名，並成立技術指導委員會，由曾文賓院長擔任召集人，蕭正光擔任中心主任。', 'From 12 to 19 October, the Master travelled around Taiwan to explain the idea of marrow donation. On 20 October, Taiwan’s first marrow donor registry received its official name, and a technical guidance committee was formed, convened by Superintendent Tseng Wen-pin, with Hsiao Cheng-kuang as director of the centre.')],
        q: { zh: '信己無私，信人有愛', en: 'Believe that you yourself can be selfless. Believe that others have love.', who: T('證嚴上人', 'Dharma Master Cheng Yen') },
        ph: [{ i: 'w_news3', c: otdC('當年報紙局部，寫著慈濟將籌設首座骨髓資料庫。', 'Detail of a newspaper of the time, reporting that Tzu Chi would set up the first marrow registry.') }],
        s: ['f161', 'f062'] },
      { k: 'story', lay: 'T', date: '1993.10.24', h: T('八卦山上的一個攤位', 'A stall on Bagua Mountain'),
        p: [T('一九九三年十月二十四日，慈濟的第一場骨髓捐贈驗血活動在彰化八卦山展開。這是臺灣的第二場，第一場是八月二十九日，由臺大醫院發起。', 'On 24 October 1993, Tzu Chi’s first marrow donor blood testing drive took place on Bagua Mountain in Changhua. It was the second in Taiwan. The first had been started by National Taiwan University Hospital on 29 August.'),
          T('那一天原本是健行淨山和義賣園遊會，慈濟臨時在會場增加了一個驗血攤位。師兄、師姊和中區慈青向民眾詳細解說捐骨髓的意義，臺中榮總、彰化秀傳紀念醫院、慈濟醫院的醫護人員志願前來，在現場驗血。', 'That day had been planned as a walk, a mountain clean-up and a charity fair, and a blood testing stall was added at short notice. Volunteers and young Tzu Chi members from central Taiwan explained to the public what donating marrow meant. Doctors and nurses from Taichung Veterans General Hospital, Show Chwan Memorial Hospital in Changhua and Tzu Chi Hospital came of their own accord to take blood on site.'),
          T('中部地區民眾保守，捐髓風氣未開。幾個鐘頭內，有八百四十位民眾簽下同意書。', 'People in central Taiwan were conservative, and marrow donation was still unfamiliar. Within a few hours, 840 people had signed consent forms.')],
        q: { zh: '我平時就有捐血，感覺救人很快樂', en: 'I give blood regularly. It makes me happy to save people.', who: T('一位五十二歲的中年男子', 'A man of fifty-two') },
        more: [T('所有檢體由華航專機送往美國 UCLA 醫學中心檢驗。', 'All the samples were sent by a China Airlines flight to the UCLA medical centre in the United States for testing.')],
        s: ['f161', 'f160'] },
      { k: 'photos', lay: 'one', ph: [{ i: 'marrow_arm', c: T('手臂扎著止血帶。取自慈濟六十周年影響力報告，攝影年不詳。', 'An arm with a tourniquet. From the Tzu Chi 60th anniversary impact report; year of photograph unknown.') }] },
      { k: 'wall', bare: 1, n: 9988, h: T('兩個多月', 'A little over two months'), u: T('人', 'people'),
        t: T('自成立後截至一九九三年底，短短兩個多月，臺灣地區志願捐髓者實際入庫登記人數為 9,988 人。', 'From its founding to the end of 1993, in little more than two months, 9,988 volunteer donors in Taiwan were actually entered in the registry.'),
        note: T('格子是示意，每一格不是一個真人。資料庫裡存的是配對資料，不是骨髓。', 'The squares are an illustration, and one square is not one person. A registry stores matching data, not marrow.'),
        s: ['f161'] }
    ] },
    { id: 'w2b', era: 'heart', y: '1993', nav: T('一場接一場', 'One drive after another'), b: [
      { k: 'rec', items: [
        { d: '1993.11.10', zh: '董氏基金會把「骨髓移植」捐款專戶基金移交慈濟。', en: 'The John Tung Foundation hands its marrow transplant fund over to Tzu Chi.' },
        { d: '1993.11.12', zh: '臺南市立體育場舉行義賣會，宣導骨髓捐贈。', en: 'A charity sale at the Tainan municipal stadium spreads word of marrow donation.' },
        { d: '1993.11.19', zh: '臺大醫院把志願捐髓者的同意書、個人資料和 HLA 檢驗結果，正式移交慈濟。', en: 'National Taiwan University Hospital formally hands over its donors’ consent forms, personal details and HLA results to Tzu Chi.' },
        { d: '1993.11.28', zh: '臺北分會舉行捐髓驗血活動。', en: 'The Taipei branch holds a blood testing drive.' },
        { d: '1993.12.03', zh: '慈濟發起「尊重生命全球齊步走」系列活動，宣導骨髓捐贈。', en: 'Tzu Chi begins its Respect Life Global Walk events, which also spread word of marrow donation.' },
        { d: '1993.12.05', zh: '桃園成功國小舉行捐血和捐髓驗血活動。', en: 'A blood and marrow testing drive is held at Chenggong Primary School in Taoyuan.' },
        { d: '1993.12.25', zh: '義賣園遊會在全省同步展開。', en: 'Charity fairs open across Taiwan on the same day.' }
      ], s: ['f161', 'o931020'] },
      { k: 'story', lay: 'R', date: '1993', h: T('胸前背後都掛著告示牌', 'A sign on the chest and back'),
        p: [T('為了召募志願捐髓者，慈濟人全力以赴。上人回顧當年，有老菩薩到菜市場呼喊「救人啊！」，有人騎著腳踏車，在大馬路上呼籲。', 'Tzu Chi volunteers gave everything to find donors. Looking back, the Master recalled an elderly volunteer who called out “Save lives!” in the market, and others who appealed on the main roads from their bicycles.')],
        q: { zh: '騎著腳踏車，胸前背後都掛著「救人一命，無損己身」的告示牌在大馬路上呼籲', en: 'Riding bicycles, with signs on chest and back reading “Save a life, with no harm to yourself”, they appealed on the main roads.', who: SR('二〇〇二年回顧', 'looking back in 2002') },
        ph: [{ i: 'w_banner', c: otdC('紅布條局部。', 'Detail of a red banner.') }, { i: 'w_forms', c: otdC('桌上一疊疊表單，和翻頁的手。', 'Stacks of forms on a table, and hands turning the pages.') }],
        s: ['f161'] },
      { k: 'photos', lay: 'one', ph: [{ i: 'w_walk', c: otdC('「尊重生命全球齊步走」布條局部。', 'Detail of the Respect Life Global Walk banner.') }] },
      { k: 'photos', lay: 'one', ph: [{ i: 'w_dome', c: T('十二月底的園遊會特別設置充氣屋，讓大眾了解骨髓捐贈知識。取自《慈濟歷史上的今天》。', 'An inflatable dome set up at the fair in late December, to help the public learn about marrow donation. From Tzu Chi, On This Day.') }] }
    ] },

    /* 3 在茫茫人海裡對上 */
    { id: 'w3a', era: 'e90', y: '1997–1998', nav: T('怎樣才算對上', 'What counts as a match'), ask: T('怎麼知道就是那個人？', 'How do you know it is the right person?'), b: [
      { k: 'match', bare: 1, h: T('對上的，不是血型', 'It is not the blood type that has to match'),
        t: T('紅血球有 A、B、O 等血型，白血球也有不同的抗原型，叫做人類白血球抗原，簡稱 HLA。', 'Red blood cells have blood types such as A, B and O. White blood cells also have different antigen types, called human leucocyte antigens, or HLA.'),
        q: { zh: '只有在捐髓者與受髓者的人類白血球抗原相符時，才能進行骨髓移植。', en: 'Only when the human leucocyte antigens of donor and recipient match can a marrow transplant go ahead.', who: T('《經典》雜誌，一九九八年', 'Rhythms magazine, 1998') },
        note: T('格子是示意，不是真實的 HLA 資料。配對成功，也還不等於完成捐贈。', 'The squares are an illustration, not real HLA data. A match is still not a completed donation.'),
        s: ['f161'] },
      { k: 'story', lay: 'R', date: '1997.11.08', h: T('不必再送到美國', 'No more sending to America'),
        p: [T('資料中心成立時，國內還沒有人類白血球抗原檢驗的實驗室，捐髓者的樣本都送往美國檢驗。', 'When the centre was founded, Taiwan had no laboratory for HLA testing, and all donor samples were sent to the United States.'),
          T('一九九七年十一月八日，慈濟骨髓捐贈資料中心的免疫基因實驗室正式啟用，由李政道博士回國主持，引進 DNA 分型法與擴增技術。整個血樣的檢驗工作，才開始在國內進行。', 'On 8 November 1997, the centre’s immunogenetics laboratory opened. Dr. Lee Cheng-tao came home from the American Red Cross immunogenetics laboratory to lead it, bringing in DNA typing and amplification. Only then did the testing of blood samples begin in Taiwan.')],
        q: { zh: '我們這個部分已經把DNA抽成出來以後，我們要擴增。', en: 'In this part, once we have extracted the DNA, we need to amplify it.', who: T('李政道博士，二〇〇〇年的影像', 'Dr. Lee Cheng-tao, footage from 2000') },
        ph: [{ i: 'w_lab', c: otdC('實驗室裡操作檢體的局部。', 'Detail of samples being handled in a laboratory.') }],
        s: ['f161', 'o931020'] },
      { k: 'story', lay: 'T', date: '1998', h: T('十一樓', 'The eleventh floor'),
        p: [T('一九九八年的記錄裡，這間實驗室坐落在花蓮慈濟醫院十一樓。研究人員埋頭進行 DNA 的抽取、擴增、高壓電泳及濾紙色層分析等作業，務求正確無誤。', 'A record from 1998 places the laboratory on the eleventh floor of Hualien Tzu Chi Hospital. Researchers worked with heads bowed on DNA extraction, amplification, high-voltage electrophoresis and filter paper chromatography, determined to make no mistakes.')],
        s: ['f161'] }
    ] },
    { id: 'w3b', era: 'e20', y: '1998–2026', nav: T('從一管血到一支棉棒', 'From a tube of blood to a swab'), b: [
      { k: 'story', lay: 'R', date: '1998–2002', h: T('不只骨髓', 'More than marrow'),
        p: [T('一九九八年七月，臍帶血庫成立。二〇〇二年四月三十日，資料中心正式改制為「慈濟骨髓幹細胞中心」，下轄免疫基因實驗室、臍帶血庫、臨床醫學暨研究組、捐贈活動暨關懷組、資料庫暨行政組五個部門。', 'In July 1998 a cord blood bank was set up. On 30 April 2002 the centre was formally reorganised as the Tzu Chi Stem Cells Center, with five departments: the immunogenetics laboratory, the cord blood bank, clinical medicine and research, donation activities and care, and the database and administration.'),
          T('移植的來源也不只一種。「骨髓幹細胞移植」、「周邊血幹細胞移植」或是「臍帶血幹細胞移植」，如今一般統稱為「造血幹細胞移植」。', 'Nor is there only one source. Transplants of stem cells from marrow, from peripheral blood or from cord blood are now generally called haematopoietic stem cell transplants.')],
        ph: [{ i: 'w_cord', c: otdC('「慈濟骨髓捐贈中心　臍血庫」標示。', 'Sign reading Tzu Chi Marrow Donor Registry, Cord Blood Bank.') }],
        s: ['f161', 'o931020'] },
      { k: 'story', lay: 'R', date: '2026.08.30', h: T('一支棉棒', 'A single swab'),
        p: [T('二〇二六年八月三十日，慈濟造血幹細胞驗血建檔活動首次採用「口腔黏膜拭子採樣」。這改變的是建檔時的採樣方式，不是捐贈的方式。', 'On 30 August 2026, a Tzu Chi donor registration drive used a mouth swab for the first time. This changes how samples are taken at registration. It does not change how donation is done.'),
          T('一支棉棒看來簡單，後面的工夫並不少。慈濟骨髓幹細胞中心主任楊尚憲說明了其中的挑戰。', 'A swab looks simple, but much work lies behind it. Yang Shang-hsien, director of the Tzu Chi Stem Cells Center, explained one of the challenges.')],
        q: { zh: '因為台灣比較溼，我們怎麼樣保護這些檢體', en: 'Because Taiwan is rather humid, how do we protect these samples?', who: T('楊尚憲', 'Yang Shang-hsien') },
        ph: [{ i: 'w_swab', c: T('採樣棉棒和檢體架。取自《慈濟歷史上的今天》。', 'A sampling swab and a sample rack. From Tzu Chi, On This Day.') }],
        s: ['o931020'] }
    ] },

    /* 4 一個人走過的路 */
    { id: 'w4a', era: 'e00', y: '1994–', nav: T('十步', 'Ten steps'), ask: T('找到了，然後呢？', 'And once you have found them?'), b: [
      { k: 'road', bare: 1, h: T('留下資料之後，還有這麼長的路', 'After leaving your details, the road is still this long'),
        items: [
          [T('宣導建檔', 'Learning and registering'), T('志工', 'Volunteers')],
          [T('保持聯絡', 'Staying in touch'), T('捐者和中心', 'Donor and centre')],
          [T('通知，再確認意願', 'Notice, and asking again'), T('中心和志工', 'Centre and volunteers')],
          [T('血樣複檢', 'A second blood test'), T('中心', 'The centre')],
          [T('體檢和排期', 'Check-up and scheduling'), T('醫師和中心', 'Doctors and the centre')],
          [T('採集', 'Collection'), T('醫護人員', 'Medical staff')],
          [T('照顧陪伴', 'Care and company'), T('關懷小組', 'The care team')],
          [T('交接運送', 'Handover and transport'), T('護送人員', 'The escort')],
          [T('抵達醫院', 'Arrival at the hospital'), T('移植團隊', 'The transplant team')],
          [T('追蹤關懷', 'Follow-up and care'), T('志工', 'Volunteers')]
        ],
        note: T('這是整理過的歷史說明，不是就醫指引。現行流程以中心公布為準。', 'This is a summary for history, not medical guidance. For the current process, follow what the centre publishes.'),
        s: ['f161', 'wdon'] },
      { k: 'story', lay: 'R', date: '1994', h: T('陪著走的人', 'Those who walk alongside'),
        p: [T('一九九四年，「慈濟骨髓捐贈關懷小組」成立，現在叫「慈濟造血幹細胞捐贈關懷小組」。從最初的宣導，到配對成功後的尋人與陪伴捐髓，這些繁重的工作，都由慈濟志工投入。', 'In 1994, Tzu Chi set up its marrow donation care team, now the stem cell donation care team. From the first public talks to finding donors after a match and accompanying them through donation, this heavy work has been taken up by Tzu Chi volunteers.'),
          T('有些配對成功者接到通知後猶豫不決，也有父母不肯答應。志工以專業知識分享，讓父母安心，讓捐髓者勇於面對。捐贈之後，他們持續追蹤捐者的健康狀況，也關懷受髓病患與家人。', 'Some who are matched hesitate when the notice comes, and some parents refuse. Volunteers share what they have learned so that parents can feel at ease and donors can face what lies ahead. After donation they keep following the donor’s health, and they care for the patient and family too.')],
        ph: [{ i: 'w_back', c: otdC('背心上寫著「搶救生命　需你我他」。', 'A vest reading “Saving lives needs you, me and everyone”.') }, { i: 'w_sash', c: otdC('寫著「捐髓者」的綬帶。', 'A sash reading “Marrow donor”.') }],
        s: ['f161'] },
      { k: 'story', lay: 'T', date: '1996.09', h: T('駕照上的字', 'Words on a driving licence'),
        p: [T('一九九六年九月，二十一歲的楊承運得知自己和一位病人配對成功。他積極補充營養，唯恐血紅素不足、體重過低，完成不了這件事。等待捐髓的日子，他連走路騎車都分外小心，還在駕照上寫下這段話。', 'In September 1996, Yang Cheng-yun, aged twenty-one, learned that he had been matched with a patient. He made a point of eating well, afraid that low haemoglobin or low weight would stop him from going through with it. While he waited he took special care even walking and riding, and he wrote these words on his driving licence.')],
        q: { zh: '若我個人有什麼意外，不一定要先救我，請醫護人員先抽我的骨髓出來，因為它可以救人。', en: 'If anything happens to me, you need not save me first. Please have the medical staff draw my marrow first, because it can save someone.', who: T('楊承運', 'Yang Cheng-yun') },
        note: T('這是他當年的心意，不是捐贈的要求，也不是醫療建議。', 'This was what he felt at the time. It is neither a requirement of donation nor medical advice.'),
        s: ['f161'] }
    ] },
    { id: 'w4b', era: 'heart', y: '1993–2026', nav: T('怕針的人', 'Afraid of needles'), b: [
      { k: 'story', lay: 'R', date: '1993–2026', h: T('不是龍骨水', 'Not spinal fluid'),
        p: [T('當年許多人誤以為，捐髓是從脊椎抽取「龍骨水」。骨髓遍布全身的骨骼，尤其是扁平骨，是人體的造血組織。一九九三年時，抽取骨髓是從臀部兩側骨盆的腸骨。', 'Many people at the time wrongly believed that marrow was drawn from the spine as “dragon bone water”. In fact marrow lies throughout the bones of the body, especially the flat bones, and it is where blood is made. In 1993, marrow was drawn from the iliac bones on either side of the pelvis.'),
          T('後來又有周邊血的方式。如今非親屬造血幹細胞捐贈中，有超過九成採用周邊血。', 'Later came collection from peripheral blood. Today, more than nine in ten unrelated stem cell donations use peripheral blood.')],
        note: T('這是歷史說明，不是就醫指引。', 'This is an account of history, not medical guidance.'),
        ph: [{ i: 'w_iv', c: otdC('手臂接著管線的局部。', 'Detail of an arm connected to tubing.') }, { i: 'w_machine', c: otdC('醫院裡的採集機器。', 'Collection machines in a hospital.') }],
        s: ['f161', 'o930120', 'o931020'] },
      { k: 'story', lay: 'T', date: '', h: T('怕打針、怕見血的人', 'Afraid of needles and blood'),
        p: [T('傅昭榮接受骨髓移植八個月後，再度復發。醫師建議，試著找原來的捐髓者再幫忙一次。慈濟志工傳回消息：捐髓者願意再捐。', 'Eight months after his marrow transplant, Fu Chao-jung relapsed. His doctor suggested trying to ask the original donor to help once more. Tzu Chi volunteers brought word back: the donor was willing to give again.'),
          T('那位捐髓者是張林楷，當時二十一歲，怕打針、怕見血，一年內做了兩次幹細胞捐贈。第一次全身麻醉，從臀部上方的腸骨處抽取；第二次採周邊血。', 'The donor was Chang Lin-kai, then twenty-one, who was afraid of needles and of blood. Within a year he donated stem cells twice. The first time, under general anaesthetic, cells were drawn from the iliac bone above the hip. The second time, they came from peripheral blood.')],
        q: { zh: '手臂上的長針插入那一剎那，幸虧大林慈濟醫院的護理長善巧引導，讓我安心', en: 'At the moment the long needle went into my arm, thankfully the head nurse at Dalin Tzu Chi Hospital guided me skilfully and put me at ease.', who: T('張林楷', 'Chang Lin-kai') },
        more: [T('他也說，接下來看著血液在眼前輸送，還是很驚恐。後來兩人相見，傅昭榮說，他「賺到第二次的人生」。', 'He also said that watching the blood flow past his eyes afterwards was still frightening. When the two later met, Fu said he had “gained a second life”.')],
        q2: { zh: '我心中一直有個問號，我是捐給兩個人，還是同一個人？', en: 'There was always a question in my heart. Had I given to two people, or to the same person?', who: T('張林楷', 'Chang Lin-kai') },
        s: ['f161'] }
    ] },

    /* 5 這一袋，不能等 */
    { id: 'w5a', era: 'e90', y: '1994–2001', nav: T('第一次跨海', 'The first crossing'), ask: T('那要怎麼送過去？', 'Then how does it get there?'), b: [
      { k: 'story', lay: 'T', date: '1994.09.26', h: T('第一次跨海', 'The first crossing'),
        p: [T('一九九四年九月二十六日，臺灣慈濟骨髓資料庫第一次跨國供髓。中心人員、推展志工和護理長三人護送，從臺灣送到新加坡中央醫院。受者是一位馬來西亞籍的少女。', 'On 26 September 1994, the Tzu Chi registry in Taiwan supplied marrow across a border for the first time. Three people, a member of the centre, a volunteer and a head nurse, escorted it from Taiwan to Singapore General Hospital. The recipient was a Malaysian girl.')],
        q: { zh: '也許我們正是前世的姊妹呢', en: 'Perhaps we were sisters in a past life.', who: T('這位捐髓者', 'The donor') },
        note: T('一九九四年十二月五日，少女辭世，十六歲。有人願意，不等於一定救得回來。這一段，本頁如實記下。', 'On 5 December 1994 the girl died. She was sixteen. Someone being willing does not mean a life can always be saved. This page records it as it happened.'),
        s: ['w94'] },
      { k: 'story', lay: 'T', date: '1998–2001', h: T('連上別人的資料庫', 'Linked to other registries'),
        p: [T('一九九八年，資料中心執行祕書蕭正光教授指出，慈濟已跟美國、新加坡、澳洲、香港骨髓資料庫簽約連線。', 'In 1998, Professor Hsiao Cheng-kuang, the centre’s executive secretary, said Tzu Chi had signed agreements linking it with marrow registries in the United States, Singapore, Australia and Hong Kong.'),
          T('二〇〇一年，上人講到一位住在臺灣的捐髓者，他的骨髓要送到中國大陸。他在花蓮慈濟醫院抽完骨髓之後，還有這樣一段路。', 'In 2001, the Master spoke of a donor living in Taiwan whose marrow was to go to mainland China. After it was drawn at Hualien Tzu Chi Hospital, it still had this journey ahead.')],
        q: { zh: '由專人從花蓮送到中正機場，再從中正機場搭飛機送到中國大陸的醫院', en: 'A designated person carried it from Hualien to Chiang Kai-shek Airport, and from there it flew to the hospital in mainland China.', who: SR('二〇〇一年六月六日', '6 June 2001') },
        s: ['f161', 'f160'] }
    ] },
    { id: 'w5b', era: 'e20', y: '2019–2020', nav: T('箱不離手', 'The box never left his hands'), b: [
      { k: 'thread', bare: 1, h: T('「箱不離手」', '“The box never left his hands”'),
        t: T('二〇一九年一月十八日到十九日，主任楊國梁護送造血幹細胞，從花蓮到桃園、北京，再到烏魯木齊。天寒地凍，他用院方準備的羽絨衣包住保冷桶。實際運送十七小時。', 'From 18 to 19 January 2019, director Yang Kuo-liang escorted stem cells from Hualien to Taoyuan, Beijing and then Urumqi. In the bitter cold he wrapped the cooler in a down jacket that the hospital had prepared for him. The journey itself took seventeen hours.'),
        stops: [T('花蓮', 'Hualien'), T('桃園', 'Taoyuan'), T('北京', 'Beijing'), T('烏魯木齊', 'Urumqi')],
        q: { zh: '幫助生命接力，這是我的使命。', en: 'Helping to pass on life is my mission.', who: T('楊國梁。新華社報導，花蓮慈院轉載', 'Yang Kuo-liang. Xinhua report, reprinted by Hualien Tzu Chi Hospital') },
        note: T('路線和箱子都是示意，不是地圖。不是每一袋都由志工手提，這一趟是主任楊國梁親自護送。', 'The route and the box are illustrations, not a map. Not every bag is hand-carried by a volunteer. On this trip it was director Yang himself.'),
        s: ['wxj'] },
      { k: 'tbl', h: T('「勿延遲運送」', '“Do not delay”'),
        t: T('交接的時候，要逐項核對，再簽字。', 'At a handover, each item is checked before anyone signs.'),
        items: [T('血袋數量', 'Number of bags'), T('包裝有無滲漏、結塊', 'Packing, leaks and clots'), T('顏色', 'Colour'), T('編碼、細胞類別、容量、血型', 'Code, cell type, volume and blood type'), T('核對後簽字', 'Signature after checking')],
        note: T('長桌和保冷箱是示意，不是當時的實物。核對項目是二〇二〇年報導所記。', 'The long table and the cooler are illustrations, not the real objects. The checklist comes from a 2020 report.'),
        s: ['w20'] },
      { k: 'story', lay: 'T', date: '2020.04', h: T('「落地不入境」', '“Landing without entering”'),
        p: [T('二〇二〇年四月底，各國邊境管制。新加坡的取髓人員搭包機飛到花蓮，不入境，在花蓮航空站四號空橋下的長桌遠距交接，簽好單據，隨包機離開。', 'At the end of April 2020, borders were closed. Collection staff from Singapore flew to Hualien on a chartered plane. Without entering the country, they took the handover at a long table beneath Bridge 4 at Hualien Airport, signed the papers and left on the same plane.'),
          T('這一趟靠的是資料庫、醫院、航空站、航警和衛生單位一起配合。', 'This trip depended on the registry, the hospital, the airport, the airport police and the health authorities working together.')],
        note: T('這是該次的做法，不是每一次都如此。「落地不入境」是報導用語。', 'This was how it was done that time, not every time. “Landing without entering” is the report’s phrase.'),
        s: ['w20'] }
    ] },

    /* 6 兩個陌生人 */
    { id: 'w6a', era: 'heart', y: '1994–1995', nav: T('相見', 'They meet'), ask: T('他們見過面嗎？', 'Did they ever meet?'), b: [
      { k: 'meet', bare: 1, h: T('一九九五年五月十四日', '14 May 1995'),
        t: T('一九九四年，臺灣首例非親屬間骨髓移植獲得成功。隔年，受贈者魏志祥與捐贈者葉美菁相見。', 'In 1994, the first transplant between unrelated people in Taiwan succeeded. The next year, the recipient, Wei Chih-hsiang, met the donor, Yeh Mei-ching.'),
        a: { zh: '如果我是那個孩子，或是我是那個家長', en: 'If I were that child, or if I were that parent', who: T('葉美菁，捐的人', 'Yeh Mei-ching, who gave') },
        b2: { zh: '因為我跟他非親非故，讓我感覺到就是，自己還是有一分希望。', en: 'Because we were not related in any way, it made me feel that I still had a measure of hope.', who: T('魏志祥，受的人', 'Wei Chih-hsiang, who received') },
        note: T('人影是示意。捐受雙方的資料依規定保密，相見由中心安排。', 'The figures are illustrations. Details of donors and recipients are kept confidential under the rules, and meetings are arranged by the centre.'),
        s: ['o931020'] },
      { k: 'photos', lay: 'one', ph: [{ i: 'w_meetbn', c: otdC('「慈濟骨髓捐贈資料中心」相見歡記者會紅布條局部。', 'Detail of a red banner for a Tzu Chi registry press conference at which donor and recipient met.') }] },
      { k: 'story', lay: 'R', date: '', h: T('「我拿命賭了」', '“I staked my life”'),
        p: [T('陳致業的主治醫師說，他必須進行異體骨髓移植，但兄弟的配對都不符。慈濟骨髓捐贈資料中心成立後，榮總立刻把他的資料寄出。', 'Chen Chih-yeh’s doctor said he needed a transplant from a donor, but his brothers were not a match. When the Tzu Chi centre was founded, Veterans General Hospital sent his details at once.'),
          T('半年後，配對成功的消息傳來，他反而陷入掙扎。移植前夕，他一度想逃離醫院。', 'Six months later the news of a match came, and he found himself in turmoil. On the eve of the transplant, he thought of running away from the hospital.')],
        q: { zh: '我拿命賭了，贏了，就得到一輩子，若現在放棄，這輩子就沒機會了。', en: 'I have staked my life. If I win, I get a whole lifetime. If I give up now, I will have no chance in this life.', who: T('陳致業', 'Chen Chih-yeh') },
        more: [T('檢查報告證實，他贏了。捐髓者蕭先生在相見歡會場，緊緊握著他的手。', 'The test results showed that he had won. At a gathering where donors and recipients met, the donor, Mr. Hsiao, held his hand tightly.')],
        ph: [{ i: 'w_bouquet', c: otdC('花束局部，不是這一場相見。', 'Detail of a bouquet, not from this meeting.') }],
        s: ['f161'] }
    ] },
    { id: 'w6b', era: 'my', y: '1994–2026', nav: T('在馬來西亞，和後來', 'In Malaysia, and after'), b: [
      { k: 'rec', items: [
        { d: '1994', zh: '一位馬來西亞籍少女，在新加坡接受臺灣送來的骨髓。', en: 'A Malaysian girl receives marrow from Taiwan in Singapore.' },
        { d: '1995', zh: '劉濟雨帶著一車馬六甲志工到新加坡，抽血建檔。', en: 'Liu Chi-yu takes a busload of Melaka volunteers to Singapore to give blood samples and register.' },
        { d: '1996.01', zh: '林秋麗在新加坡捐髓。', en: 'Lin Chiu-li donates marrow in Singapore.' }
      ], s: ['w94', 'wlin'] },
      { k: 'story', lay: 'T', date: '1995–1996', h: T('害羞的女孩', 'The shy young woman'),
        p: [T('一九九五年，林秋麗隨這一車馬六甲志工到新加坡建檔。大約三個月後，她接到配對通知。她和父母溝通顧慮，在同仁陪伴安排下出國，一九九六年一月在新加坡捐髓。', 'In 1995, Lin Chiu-li joined the Melaka volunteers on that trip to Singapore and registered. About three months later she was told she had been matched. She talked through her parents’ worries, travelled abroad with colleagues arranging and accompanying her, and donated in Singapore in January 1996.'),
          T('馬來西亞慈濟官網的圖說，稱她是馬來西亞首位非親屬骨髓移植捐贈者。', 'A photo caption on the Tzu Chi Malaysia website calls her Malaysia’s first unrelated marrow donor.')],
        q: { zh: '只要願意做，就會遇見不一樣的自己。', en: 'As long as you are willing to do it, you will meet a different self.', who: T('林秋麗', 'Lin Chiu-li') },
        note: T('這是個案，不是馬來西亞的全貌，也不是馬來西亞境內的第一場。', 'This is one case, not the whole picture in Malaysia, and not the first drive held inside Malaysia.'),
        s: ['wlin'] },
      { k: 'story', lay: 'T', date: '2026.07.31', h: T('有人願意', 'Someone was willing'),
        p: [T('截至二〇二六年七月三十一日，累計建檔志願捐贈人數達 498,066 筆，完成捐贈案例達 7,281 例，跨越 31 個國家地區。', 'As of 31 July 2026, the registry held 498,066 volunteer donor records, with 7,281 completed donations reaching 31 countries and regions.'),
          T('這是完成的捐贈，不是獲救的人數。配對不等於完成捐贈，捐贈也不保證救活。', 'These are completed donations, not lives saved. A match is not a donation, and a donation is no guarantee of a life saved.'),
          T('這條路的兩端，都有人願意為不認識的人付出。', 'At both ends of this road, there were people willing to give for someone they had never met.')],
        s: ['o931020'] },
      { k: 'quote', big: 1, zh: '讓大家知道「救人一命，無損己身」，有捐贈的人，才有得救的人。', en: 'Let everyone know: save a life, with no harm to yourself. Only when there are people who give can there be people who are saved.', who: SR('一九九七年十二月九日', '9 December 1997'), s: ['f160'] }
    ] },

    { id: 'wnum', era: 'num', y: '數字', yen: 'Numbers', h: T('數字裡的骨髓捐贈', 'Marrow donation in numbers'), nav: T('數字', 'Numbers'), b: [{ k: 'ledger' }] },
    { id: 'wall', era: 'all', y: '沿革', yen: 'Timeline', h: T('沿革與影音', 'Timeline and films'), lead: T('六段路之外的日期和原始出處，都在這裡。', 'Dates and original sources beyond the six stretches are all here.'), nav: T('沿革與影音', 'Timeline and films'), b: [{ k: 'films' }, { k: 'records' }, { k: 'sources' }] }
  ];

  CH.blocks = [
    { id: 'w1', y: '1992–1994', h: T('一扇只開給親人的門', 'A door open only to family'), ch: ['w1a', 'w1b'], cover: 'w_news1', tun: 'w_b1' },
    { id: 'w2', y: '1993', h: T('留下一管血', 'Leaving a tube of blood'), ch: ['w2a', 'w2b'], cover: 'marrow_arm', tun: 'w_b2' },
    { id: 'w3', y: '1997–2026', h: T('在茫茫人海裡對上', 'A match in a sea of people'), ch: ['w3a', 'w3b'], cover: 'w_lab', tun: 'w_b3' },
    { id: 'w4', y: '1994–2026', h: T('一個人走過的路', 'The road one person walks'), ch: ['w4a', 'w4b'], cover: 'w_iv', tun: 'w_b4' },
    { id: 'w5', y: '1994–2020', h: T('這一袋，不能等', 'This bag cannot wait'), ch: ['w5a', 'w5b'], cover: 'w_thread', tun: 'w_b5' },
    { id: 'w6', y: '1994–2026', h: T('兩個陌生人', 'Two strangers'), ch: ['w6a', 'w6b'], cover: 'w_bouquet', tun: 'w_b6' }
  ];

  CH.ui = {
    hubK: T('骨髓捐贈', 'Bone Marrow Donation'), hubH: T('六段路，從一扇門走到兩個陌生人', 'Six stretches, from a door to two strangers'), hubS: T('一段一段走。走完一段，就蓋一個章。', 'Walk them one at a time. Each one you finish earns a stamp.'),
    start: T('從這裡開始', 'Start here'), walked: T('走過了', 'Walked'), nextTun: T('下一個時空隧道', 'Next time tunnel'), nextOf: T('下一段', 'Next'), back: T('回六段路', 'Back to the six stretches'), road: T('回八大腳印', 'Back to the Eight Footprints'),
    skip: T('跳過', 'Skip'), left: T('這一段還有', 'Still ahead'), leftU: T('個故事', 'stories'), seg: T('第 {n} 段／共 6 段', 'Part {n} of 6'), done: T('走完了這一段', 'You finished this part'), recH: T('骨髓捐贈沿革', 'Timeline')
  };

  CH.ledger = [
    { h: T('同一天的三個數字', 'Three figures from one day'), rows: [
      { n: '498,066', u: T('筆', 'records'), l: T('累計建檔志願捐贈人數', 'Volunteer donors on the registry'), w: T('截至 2026-07-31', 'As of 31 July 2026'), s: 'o931020', big: 1 },
      { n: '7,281', u: T('例', 'donations'), l: T('完成捐贈案例，不是獲救人數', 'Completed donations, not lives saved'), w: T('截至 2026-07-31', 'As of 31 July 2026'), s: 'o931020', big: 1 },
      { n: '31', u: T('個國家地區', 'countries and regions'), l: T('捐贈跨越的國家地區', 'Reached by these donations'), w: T('截至 2026-07-31', 'As of 31 July 2026'), s: 'o931020' }
    ] },
    { h: T('病人和臺灣', 'Patients, and Taiwan'), rows: [
      { n: '72,317', u: T('人', 'people'), l: T('登記尋求配對的病人，不是受髓人數', 'Patients registered to seek a match, not recipients'), w: T('截至 2025-12-31', 'As of 31 December 2025'), s: 'i60', big: 1 },
      { n: '3,612', u: T('例', 'donations'), l: T('臺灣累計捐贈', 'Donations in Taiwan'), w: T('2025 年底', 'End of 2025'), s: 'i60' }
    ] },
    { h: T('陪伴的人', 'Those who accompany'), rows: [
      { n: '3,582', u: T('場', 'drives'), l: T('歷年驗血建檔活動', 'Blood testing and registration drives over the years'), w: T('32 年來', 'Over 32 years'), s: 'i60', big: 1 },
      { n: '上萬', nen: 'Over 10,000', u: T('人次／年', 'volunteer turnouts a year'), l: T('每年動員的志工，是人次，不是人數', 'Volunteers mobilised each year, counted by turnout, not as individuals'), w: T('2025 報告期', '2025 reporting period'), s: 'i60' },
      { n: '7,394', u: T('位', 'people'), l: T('關懷小組志工完成專業課程，不是現役人數', 'Care team volunteers who have completed professional courses, not a count of those now active'), w: T('2025 報告期', '2025 reporting period'), s: 'i60' },
      { n: '598', u: T('位', 'people'), l: T('獲得補助的受者', 'Recipients given financial assistance'), w: T('2015–2025 年', '2015–2025'), s: 'i60' }
    ] },
    { h: T('方式', 'How it is done'), rows: [
      { n: '超過九成', nen: 'Over 90%', u: T('', ''), l: T('非親屬造血幹細胞捐贈採用周邊血', 'Unrelated stem cell donations using peripheral blood'), w: T('網頁當下敘述', 'As stated on the page'), s: 'o931020' }
    ] },
    { h: T('開始的時候', 'At the beginning'), rows: [
      { n: '840', u: T('位', 'people'), l: T('八卦山簽下同意書', 'Signed consent forms on Bagua Mountain'), w: T('1993-10-24', '24 October 1993'), s: 'f161', big: 1 },
      { n: '9,988', u: T('人', 'people'), l: T('實際入庫登記', 'Actually entered in the registry'), w: T('1993 年底', 'End of 1993'), s: 'f161' }
    ] }
  ];
  CH.ledgerNote = T('這些數字年份和範圍都不同，各自獨立，不相加。例數不等於獲救人數，配對不等於完成捐贈。今天的排名，本頁不寫。', 'These figures cover different years and scopes. Each stands alone and they should not be added up. A count of donations is not a count of lives saved, and a match is not a completed donation. This page does not give any ranking for today.');

  CH.films = [
    { id: 'OeyVJWuuV7k', zh: '救人一命，無損己身', en: 'Save a life, with no harm to yourself', y: '1993' },
    { id: 'BsTTu5hnGww', zh: '大愛新聞：送髓到新疆', en: 'Da Ai News: carrying stem cells to Xinjiang', y: '2019' },
    { id: 'z-9E_mWp_rw', zh: '成功配對七千例', en: 'Seven thousand matches at the Stem Cells Center', y: '2025' },
    { id: '93XqWGxigac', zh: '髓緣相見歡：三十二周年', en: 'Donors and recipients meet at the 32nd anniversary', y: '2025' },
    { id: 'mbt3b_Az4sA', zh: '骨髓捐贈釋疑', en: 'Questions about bone marrow donation, answered', y: '2026' },
    { id: 'VlqyxaAejEA', zh: '慈濟六十：骨髓幹細胞中心', en: 'Tzu Chi at 60: the Stem Cells Center', y: '2026' }
  ];

  CH.filters = [['all', T('全部', 'All')], ['law', T('法令與成立', 'Law and founding')], ['drive', T('驗血建檔', 'Drives')], ['lab', T('檢驗與中心', 'Laboratory')], ['care', T('陪伴與相見', 'Care and meetings')], ['cross', T('跨海接力', 'Across borders')]];
  CH.records = [
    ['1992.09', 'law', '溫文玲返國，呼籲開放骨髓移植以三親等以內或配偶為限的條例。', 'Wen Wen-ling returns to Taiwan and calls for the kinship limit on marrow transplants to be lifted.', 'f161'],
    ['1992.11.15', 'drive', '慈濟美國分會為溫文玲舉行血液測試活動。', 'The Tzu Chi USA branch holds a blood testing drive for Wen Wen-ling.', 'f161'],
    ['1993.01.20', 'law', '溫文玲由陳耀昌醫師陪同到靜思精舍，希望由慈濟成立骨髓資料庫。', 'Wen Wen-ling visits the Jing Si Abode with Dr. Chen Yao-chang and asks Tzu Chi to set up a registry.', 'f161'],
    ['1993.05.18', 'law', '李政道博士拜訪上人；立法院宣布通過器官移植修正案，廢除骨髓捐贈三親等限制。', 'Dr. Lee Cheng-tao visits the Master; the Legislative Yuan announces the passing of the amendment.', 'f161'],
    ['1993.08.29', 'drive', '臺大醫院發起臺灣第一場捐髓驗血活動。', 'National Taiwan University Hospital starts Taiwan’s first marrow testing drive.', 'f161'],
    ['1993.09.06', 'law', '衛生署專案會議決議推舉慈濟統籌骨髓捐贈資料庫。', 'A Department of Health meeting asks Tzu Chi to run the registry.', 'f161'],
    ['1993.10.12', 'drive', '上人巡迴全省宣導骨髓捐贈，至十月十九日。', 'The Master tours Taiwan to explain marrow donation, until 19 October.', 'f161'],
    ['1993.10.20', 'law', '資料庫定名「慈濟基金會臺灣骨髓捐贈資料中心」，成立技術指導委員會。', 'The registry is officially named, and a technical guidance committee is formed.', 'f161'],
    ['1993.10.24', 'drive', '慈濟第一場驗血活動在彰化八卦山展開，臺灣第二場，八百四十位簽下同意書。', 'Tzu Chi’s first drive, Taiwan’s second, on Bagua Mountain: 840 people sign consent forms.', 'f161'],
    ['1993.11.10', 'law', '董氏基金會把「骨髓移植」捐款專戶基金移交慈濟。', 'The John Tung Foundation hands over its marrow transplant fund.', 'f161'],
    ['1993.11.19', 'law', '臺大醫院把志願捐髓者資料正式移交慈濟。', 'National Taiwan University Hospital hands over its donor records.', 'f161'],
    ['1993.12.03', 'drive', '慈濟發起「尊重生命全球齊步走」系列活動。', 'Tzu Chi begins its Respect Life Global Walk events.', 'o931020'],
    ['1993.12.31', 'drive', '截至年底，實際入庫登記 9,988 人。', 'By the end of the year, 9,988 people are entered in the registry.', 'f161'],
    ['1994', 'law', '溫文玲往生。', 'Wen Wen-ling passes away.', 'f161'],
    ['1994', 'care', '「慈濟骨髓捐贈關懷小組」成立。', 'The marrow donation care team is set up.', 'f161'],
    ['1994', 'care', '臺灣首例非親屬間骨髓移植獲得成功。', 'The first unrelated transplant in Taiwan succeeds.', 'o931020'],
    ['1994.09.26', 'cross', '臺灣慈濟骨髓資料庫第一次跨國供髓，送到新加坡中央醫院，受者是馬來西亞籍少女。', 'The Tzu Chi registry’s first supply across a border, to Singapore General Hospital, for a Malaysian girl.', 'w94'],
    ['1994.12.05', 'cross', '這位少女辭世，十六歲。', 'The girl dies at sixteen.', 'w94'],
    ['1995', 'cross', '劉濟雨帶一車馬六甲志工到新加坡抽血建檔。', 'Liu Chi-yu takes Melaka volunteers to Singapore to register.', 'wlin'],
    ['1995.05.14', 'care', '受贈者魏志祥與捐贈者葉美菁相見。', 'The recipient Wei Chih-hsiang meets the donor Yeh Mei-ching.', 'o931020'],
    ['1996.01', 'cross', '林秋麗在新加坡捐髓。', 'Lin Chiu-li donates in Singapore.', 'wlin'],
    ['1996.09', 'care', '楊承運配對成功，在駕照上寫下那段話。', 'Yang Cheng-yun is matched and writes his words on his licence.', 'f161'],
    ['1997.11.08', 'lab', '免疫基因實驗室正式啟用，由李政道博士主持。', 'The immunogenetics laboratory opens, led by Dr. Lee Cheng-tao.', 'o931020'],
    ['1998.07', 'lab', '臍帶血庫成立。', 'The cord blood bank is set up.', 'o931020'],
    ['2001.06.06', 'cross', '上人開示，講到骨髓由專人經中正機場送往中國大陸的醫院。', 'The Master describes marrow carried via Chiang Kai-shek Airport to a hospital in mainland China.', 'f160'],
    ['2002.04.30', 'lab', '正式改制為「慈濟骨髓幹細胞中心」。', 'Reorganised as the Tzu Chi Stem Cells Center.', 'f161'],
    ['2019.01.18', 'cross', '主任楊國梁護送造血幹細胞從花蓮到烏魯木齊，至十九日交付。', 'Director Yang Kuo-liang escorts stem cells from Hualien to Urumqi, delivering them on the 19th.', 'wxj'],
    ['2020.04', 'cross', '新加坡取髓人員包機到花蓮，落地不入境，在空橋下交接。', 'Collection staff from Singapore land at Hualien and take the handover without entering the country.', 'w20'],
    ['2026.07.31', 'drive', '累計建檔 498,066 筆，完成捐贈 7,281 例，跨越 31 個國家地區。', '498,066 records and 7,281 completed donations, reaching 31 countries and regions.', 'o931020'],
    ['2026.08.30', 'drive', '驗血建檔活動首次採用「口腔黏膜拭子採樣」。', 'A registration drive uses a mouth swab for the first time.', 'o931020']
  ];

  CH.next = { ask: T('那我們隔壁的阿婆呢？', 'And what about the old lady next door?'), stop: T('下一站・社區志工', 'Next stop: Community Volunteerism'), href: 'community.html', tun: 'w_c' };
  CH.footer = T('本頁為樣板，尚未經馬來西亞慈濟分會審核，未發佈。女孩與媽媽是說故事的人。照片除另有說明外，取自慈濟《歷史上的今天》公開頁面，已裁成無人臉的局部，拍攝年份多未載明。標示「示意」的畫面為插畫，非當年實物。「」內為原文照錄，英文為本頁翻譯，僅供閱讀。', 'This page is a draft. It has not been reviewed by the Tzu Chi Malaysia branch and is not published. The girl and her mother are storytellers. Unless stated otherwise, photographs come from the public Tzu Chi, On This Day pages and are cropped to details without faces; most do not give a year. Images marked as illustrations are drawings, not the original objects. Text in quotation marks is reproduced from the original Chinese, and the English is this page’s translation, for reading only.');

  /* 隧道：match 走法，近白紙底、深紅線，六段照片和參數都不同 */
  window.TUN_M = window.TUN_M || {};
  var TM = window.TUN_M;
  var mt = function (d, ids, bg, hot, end, tint) { return { walk: 'match', d: d, ids: ids.map(function (i) { return 'mw_' + i; }), bg: bg, hot: hot, end: end, tint: tint, a0: 0, a1: .1, ink: '#2a1f1c', plate: 'rgba(250,246,240,', pa: .84 }; };
  TM.w_b1 = mt(3600, ['news1', 'hand', 'world', 'news3', 'chairs'], '#f7f3ec', '#8e1b22', 3, '#8a7a62');
  TM.w_b2 = mt(3400, ['tie', 'table', 'rack', 'forms', 'banner', 'sign', 'tubes', 'arm'], '#f8f4f0', '#9c1c24', 7, '#a4574f');
  TM.w_b3 = mt(3200, ['lab', 'cord', 'swab', 'z2', 'z5', 'z6'], '#f4f5f2', '#7f1720', 0, '#6f8582');
  TM.w_b4 = mt(3500, ['iv', 'machine', 'sash', 'back', 'z3', 'z4'], '#f7f2ee', '#a11e26', 1, '#8f7f92');
  TM.w_b5 = mt(3000, ['z1', 'z3', 'z4', 'hero', 'tubes', 'walk'], '#f5f2ee', '#861a22', 4, '#7a7f8a');
  TM.w_b6 = mt(3800, ['meetbn', 'bouquet', 'walk', 'dome', 'back', 'buddha'], '#faf5ef', '#971b25', 1, '#b08870');
  /* 進下一站用下一站的走法：窗燈 */
  TM.w_c = { walk: 'lights', d: 3600, ids: ['walk', 'dome', 'back', 'forms', 'table', 'sign', 'banner'].map(function (i) { return 'mw_' + i; }), bg: '#10151f', tint: '#c9a56a', a0: 0, a1: .12, ink: '#f7eedd', plate: 'rgba(16,18,24,', pa: .72, warm: '#f2c46b', fx: .5 };

  /* 自定義區塊 */
  var api = function () { return CH.api; };
  var R = CH.R = {};
  var fxq = function (q) { return api().quote(q); };

  /* 1 法條裡一行被劃掉，門開一條縫 */
  R.door = function (b) {
    var A = api();
    return '<section class="fx fx-dr" data-fx><div class="fx-s"><div class="dr-w"><div class="dr-o" aria-hidden="true"><div class="dr-p"><b>' + A.B(b.law) + '</b><i></i><i></i><span class="dr-l"><em>' + A.B(b.row) + '</em></span><i></i><i></i></div><div class="dr-d"><span class="dr-g"></span><span class="dr-f"><u></u></span></div></div><div class="dr-t">' + A.B(b.lead, 'p') + fxq(b.q) + '<small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></div></section>';
  };

  /* 2 滿牆小格一格格亮起，數字走到 9,988 */
  R.wall = function (b) {
    var A = api(), g = '', i, j, t, N = 240, o = [], x = 7;
    for (i = 0; i < N; i++) o[i] = i;
    for (i = N - 1; i > 0; i--) { x = (x * 1103515245 + 12345) % 2147483648; j = x % (i + 1); t = o[i]; o[i] = o[j]; o[j] = t; }
    for (i = 0; i < N; i++) g += '<i style="--i:' + o[i] + '"></i>';
    return '<section class="fx fx-wl" data-fx data-n="' + b.n + '" data-a=".08" data-b=".84"><div class="fx-s"><div class="wl-w"><div class="wl-g" aria-hidden="true">' + g + '</div><div class="wl-t"><h3>' + A.B(b.h) + '</h3><p class="wl-n"><b data-c>' + b.n.toLocaleString('en-US') + '</b>' + A.B(b.u) + '</p>' + A.B(b.t, 'p') + '<small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></div></section>';
  };

  /* 3 兩排格子滑動，最後兩格對上 */
  var tick = function (s) { var o = '', i; for (i = 0; i < 5; i++) o += '<s style="--h:' + (22 + ((s * 37 + i * 53) % 70)) + '%"></s>'; return o; };
  R.match = function (b) {
    var A = api(), row = function (k) { var o = '', i; for (i = 0; i < 13; i++) o += i === 6 ? '<i class="on">' + tick(99) + '</i>' : '<i>' + tick(k * 17 + i * 5 + 1) + '</i>'; return '<div class="mt-r mt-' + k + '">' + o + '</div>'; };
    return '<section class="fx fx-mt" data-fx><div class="fx-s"><div class="mt-w"><div class="mt-o" aria-hidden="true">' + row(1) + '<span class="mt-k"></span>' + row(2) + '</div><div class="mt-t"><h3>' + A.B(b.h) + '</h3>' + A.B(b.t, 'p') + fxq(b.q) + '<small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></div></section>';
  };

  /* 4 一條直線走十步，每步旁邊有人 */
  R.road = function (b) {
    var A = api();
    return '<section class="fx fx-rd" data-fx><div class="fx-s"><div class="rd-w"><h3>' + A.B(b.h) + '</h3><ol class="rd-g">' + b.items.map(function (x, i) { return '<li style="--i:' + i + '"><b>' + (i + 1) + '</b><span class="rd-a">' + A.B(x[0]) + '</span><span class="rd-b"><u aria-hidden="true"></u>' + A.B(x[1]) + '</span></li>'; }).join('') + '</ol><small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></section>';
  };

  /* 5 紅線從花蓮牽出，箱子一站站走 */
  var box = function (x, y, a, c) { return '<g class="th-b" style="--a:' + a + ';--b:' + c + '" transform="translate(' + x + ' ' + y + ')"><rect x="-24" y="-40" width="48" height="36" rx="5"/><path d="M-24-29H24M-10-40c0-11 20-11 20 0"/></g>'; };
  R.thread = function (b) {
    var A = api(), P4 = [[590, 215], [520, 150], [330, 95], [60, 70]], F = [0, .2, .6, 1];
    return '<section class="fx fx-th" data-fx><div class="fx-s"><div class="th-w"><div class="th-t"><h3>' + A.B(b.h) + '</h3>' + A.B(b.t, 'p') + '</div><div class="th-o" aria-hidden="true"><svg viewBox="0 0 640 260"><path class="th-l0" d="M590 215C565 190 545 170 520 150C460 110 400 105 330 95C240 80 150 70 60 70"/><path class="th-l" pathLength="1" d="M590 215C565 190 545 170 520 150C460 110 400 105 330 95C240 80 150 70 60 70"/>' +
      P4.map(function (p, i) { return '<circle class="th-c" style="--f:' + F[i] + '" cx="' + p[0] + '" cy="' + p[1] + '" r="6"/>' + box(p[0], p[1], i === 0 ? -1 : i === 3 ? .97 : F[i], i < 3 ? F[i + 1] : 9); }).join('') + '</svg>' +
      b.stops.map(function (s, i) { return '<span class="th-s th-' + i + '" style="--f:' + F[i] + ';left:' + (P4[i][0] / 6.4).toFixed(1) + '%;top:' + (P4[i][1] / 2.6).toFixed(1) + '%">' + A.B(s) + '</span>'; }).join('') + '</div><div class="th-q">' + fxq(b.q) + '<small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></div></section>';
  };

  /* 5b 長桌和核對清單，靜態 */
  R.tbl = function (b) {
    var A = api();
    return '<div class="tb"><div class="tb-o" aria-hidden="true"><span class="tb-c"><u></u></span><span class="tb-p"></span><i class="tb-top"></i><i class="tb-l1"></i><i class="tb-l2"></i></div><div class="tb-t"><h3>' + A.B(b.h) + '</h3>' + A.B(b.t, 'p') + '<ul>' + b.items.map(function (x) { return '<li>' + A.B(x) + '</li>'; }).join('') + '</ul>' + A.B(b.note, 'p', 'note') + A.srcs(b.s) + '</div></div>';
  };

  /* 6 紅線兩端兩個人影慢慢靠近，不畫臉 */
  var who = '<svg viewBox="0 0 60 130"><circle cx="30" cy="20" r="16"/><path d="M6 130V66c0-16 11-26 24-26s24 10 24 26v64z"/></svg>';
  R.meet = function (b) {
    var A = api();
    return '<section class="fx fx-mw" data-fx><div class="fx-s"><div class="mw-w"><h3>' + A.B(b.h) + '</h3>' + A.B(b.t, 'p') + '<div class="mw-o" aria-hidden="true"><i class="mw-l"></i><span class="mw-a">' + who + '</span><span class="mw-b">' + who + '</span></div><div class="mw-q"><div class="mw-1">' + fxq(b.a) + '</div><div class="mw-2">' + fxq(b.b2) + '</div></div><small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></section>';
  };

  R.films = function () {
    var A = api();
    return '<h3 class="h4"><span class="zh">影片</span><span class="en" lang="en">Films</span></h3><div class="ku-fl">' + CH.films.map(function (x) { return '<a href="https://www.youtube.com/watch?v=' + x.id + '" target="_blank" rel="noopener"><b>' + x.y + '</b>' + A.B(x) + '</a>'; }).join('') + '</div>';
  };

  var fx = [], reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, fit = '';
  function measure() { fx.forEach(function (e) { e.classList.remove('flat'); var s = e.querySelector('.fx-s'); if (reduce || s.scrollHeight > s.clientHeight + 1) e.classList.add('flat'); }); }
  CH.onWire = function () { fx = [].slice.call(document.querySelectorAll('[data-fx]')); fit = ''; if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { fit = ''; CH.onFrame(); }); CH.onFrame(); };
  CH.onFrame = function () {
    var H = innerHeight, k = innerWidth + document.documentElement.getAttribute('data-lang');
    if (k !== fit) { fit = k; measure(); }
    fx.forEach(function (e) {
      var r = e.getBoundingClientRect();
      if (r.bottom < -H || r.top > H * 2) return;
      var p = e.classList.contains('flat') ? 1 : Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - H)));
      e.style.setProperty('--p', p.toFixed(4));
      var c = e.querySelector('[data-c]');
      if (c) { var n = +e.dataset.n, a = +e.dataset.a, b = +e.dataset.b; c.textContent = Math.round(n * Math.min(1, Math.max(0, (p - a) / (b - a)))).toLocaleString('en-US'); }
    });
  };
})();
