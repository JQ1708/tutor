/* 醫療站全部文字都在這裡。大組開會後改字，只改這個文件。
   敘述語氣照 內容/慈濟文字特點.md。「」內的原話一律照出處，不改。
   p: 段落　more: 「讀全文」裡的段落　s: 出處　ph: 照片 {i:文件名, c:圖注}
   版面和互動沿用 charity.js；拉門、砌磚、院門、腎友與志工這四個效果塊在本文件最後。 */
(function () {
  var T = function (zh, en) { return { zh: zh, en: en }; };
  var otd = function (d) {
    var s = d.slice(0, 4) + '.' + d.slice(4, 6) + '.' + d.slice(6, 8);
    return { zh: '《慈濟歷史上的今天》' + s, en: 'Tzu Chi, On This Day, ' + s, url: 'https://tzuchiculture.org/tzuchi_60th_anniversary/onthisday/onthisday_' + d + '-1/' };
  };
  var fm = function (n, t) { return { zh: '慈濟法脈資料庫 ' + n + '〈' + t + '〉', en: 'Tzu Chi Dharma Lineage Archive, no. ' + n }; };
  var S = {
    fm28: fm('00028', '一攤血事件'), fm48: fm('00048', '成立貧民施醫義診所'), fm63: fm('00063', '以掘井人的精神，掘到湧泉'),
    fm64: fm('00064', '籌建「佛教慈濟綜合醫院」'), fm70: fm('00070', '福田一方邀天下善士，心蓮萬蕊造慈濟世界'), fm71: fm('00071', '首次舉辦建院義賣'),
    fm75: fm('00075', '花蓮慈濟醫院第一次動土'), fm82: fm('00082', '花蓮慈濟醫院第二次動土'), fm91: fm('00091', '花蓮慈濟醫院啟業'),
    fm93: fm('00093', '樂生療養院「賣心蓮」活動'), fm98: fm('00098', '成立慈濟醫院志工服務隊'), fm166: fm('00166', '海外第一間義診中心'),
    fm187: fm('00187', '上人呼籲大體捐贈'), fm199: fm('00199', '成立「慈濟醫事人員聯誼會」'), fm203: fm('00203', '海外第一間洗腎中心'),
    fm226: fm('00226', '玉里慈濟醫院啟業'), fm235: fm('00235', '關山慈濟醫院啟業'), fm236: fm('00236', '大林慈濟醫院啟業'),
    fm258: fm('00258', '慈濟大學首創「大體模擬手術教學」'), fm287: fm('00287', '臺北慈濟醫院啟業'), fm307: fm('00307', '臺中慈濟醫院啟業'), fm428: fm('00428', '斗六慈濟醫院啟業'),
    o720910: otd('19720910'), o840424: otd('19840424'), o860309: otd('19860309'), o860817: otd('19860817'),
    o960917: otd('19960917'), o961012: otd('19961012'), o970803: otd('19970803'), o201027: otd('20201027'),
    i2: { zh: '慈濟六十週年影響力報告・全球義診', en: 'Tzu Chi 60th anniversary impact report: free clinics worldwide', url: 'https://60impact.tzuchi.org.tw/' },
    i7: { zh: '慈濟六十週年影響力報告・無語良師', en: 'Tzu Chi 60th anniversary impact report: Silent Mentors', url: 'https://60impact.tzuchi.org.tw/' },
    tp: { zh: '臺北慈濟醫院〈回首來時六十年　愛永流傳不退轉〉', en: 'Taipei Tzu Chi Hospital: Looking back on sixty years', url: 'https://taipei.tzuchi.com.tw/回首來時六十年-愛永流傳不退轉/' }
  };
  var CH = window.CH = { S: S };
  var SHANGREN = T('證嚴上人', 'Dharma Master Cheng Yen');

  CH.page = {
    key: 'medical', pre: 'm', title: '醫療｜媽媽，沒有錢，醫院就不救嗎？',
    still: 'hero_m', poster: 'hero0_m', door: 'door_m', doorKey: 'tc60doorm', doorT: 5.6, after: ['mnum', 'mall']
  };
  CH.hero = {
    film: T('媽媽，沒有錢，醫院就不救嗎？', 'Mama, if people have no money, won’t the hospital save them?'),
    stop: T('第二站', 'Second stop'), title: T('醫療', 'Medicine'),
    sub: T('一九七二年，一間借來的店面。<br>一九八六年，花蓮慈濟醫院的門開了。', 'In 1972, a borrowed shopfront.<br>In 1986, the doors of Hualien Tzu Chi Hospital opened.'),
    watch: T('看影片　3 分 54 秒', 'Watch the film · 3 min 54 s'), read: T('走這六段路', 'Walk the six stretches'),
    ai: T('AI 情境重建，非當年攝影', 'AI reconstruction, not a historical photograph')
  };

  CH.chapters = [
    /* 一 */
    { id: 'm1a', era: 'e60', y: '1972', nav: T('一間借來的店面', 'A borrowed shopfront'), ask: T('媽媽，那時候沒有錢的人生病，怎麼辦？', 'Mama, what did people do back then if they fell ill with no money?'), b: [
      { k: 'shutter', bare: 1, i: '19720910-1_00', date: '1972.09.10', t: T('花蓮市仁愛街二十八號', '28 Ren’ai Street, Hualien'), hint: T('往下滑，把門拉開', 'Scroll to open'),
        c: T('慈濟貧民義診所的店面，年份待確認。', 'The Tzu Chi free clinic’s shopfront; year to be confirmed.') },
      { k: 'story', lay: 'R', date: '1972.09.10', h: T('借來的店面', 'A borrowed shopfront'),
        ph: [{ i: '19720910-1_01', c: T('義診所門口的招牌。', 'The signboard at the clinic door.') }],
        p: [
          T('慈濟功德會借用花蓮市仁愛街二十八號，成立貧民施醫義診所。店面是德慈師父的俗家母親黃阿奶老太太提供的住家樓下。', 'The Tzu Chi Merit Society borrowed 28 Ren’ai Street in Hualien and opened a free clinic for the poor. The shopfront was the ground floor of a home offered by Huang A-Nai, the lay mother of Master De Ci.'),
          T('志工早早打掃整理，五十多坪的空間裡，掛號、看診、調藥的動線一應俱全。在地藥房義務提供藥品。', 'Volunteers came early to clean. In a little over fifty ping of floor space they laid out a path from registration to consultation to dispensing. A local pharmacy supplied medicine without charge.'),
          T('當時社會普遍貧困，許多人生病捨不得花錢就醫。義診所一開，孤老無依、長期罹病的鄉親不斷前來。有人建議，是不是規定持有政府發放的「貧民證」，或是先做身家調查。', 'Hardship was widespread, and many people would not spend money on a doctor. Once the clinic opened, the elderly and alone and the chronically ill kept coming. Some suggested requiring a government poverty certificate, or checking each family’s background first.')
        ],
        q: { zh: '我希望人人有病都能及時得到醫治，才不會小病拖成大病，大病一來傾家蕩產，拖垮一家。所以無論有無貧民證，病人來了，我們就要為他治療。', en: 'I hope everyone who falls ill can be treated in time, so that a small illness does not grow into a serious one, and a serious one does not ruin a whole family. So whether or not they have a poverty certificate, when patients come, we will treat them.', who: SHANGREN },
        s: ['fm48', 'o720910'] },
      { k: 'story', lay: 'L', h: T('用休息時間看診的人', 'Those who gave their rest hours'),
        ph: [{ i: '19720910-1_06', c: T('義診現場，年份待確認。', 'At a free clinic; year to be confirmed.') }],
        p: [
          T('靜善（鄧淑卿師姊）和靜良（林碧芑師姊）兩位慈濟委員服務於花蓮醫院，由她們負責張羅醫療事務。省立花蓮醫院的醫師張澄溫、黃博施，護士吳素蓮，南京街張藥房的張溪池，都來了。', 'Two commissioners, Sister Deng Shu-Ching and Sister Lin Bi-Chi, worked at Hualien Hospital and took charge of the medical side. Doctors Chang Cheng-Wen and Huang Po-Shih of Hualien Provincial Hospital, the nurse Wu Su-Lien, and the pharmacist Chang Hsi-Chih all came.'),
          T('每週兩次義診，從醫師、護士到藥劑師，都是志工。他們利用休息時間看診，在不影響本職之下，付出一分愛心。', 'The clinic ran twice a week, and everyone from doctor to nurse to pharmacist was a volunteer. They came in their rest hours, keeping up their own jobs while giving what they could.')
        ],
        q: { zh: '正好我們兩位都是護理工作，就想說，若是有這樣的機會，真的很想能夠有義診、辦義診，因為感覺雖然是很克難，可是，因為醫療人員就有了，至於其它問題來克服來解決，都不會很難，因為人找到了就方便了。', en: 'We both happened to be nurses, so we thought that if there was a chance, we really wanted to run a free clinic. It would be hard going, but the medical people were already there. Any other problem could be solved. Once you have found the people, the rest is easy.', who: T('鄧淑卿', 'Deng Shu-Ching') },
        q2: { zh: '當時有一些貧苦的人，需要看病找不到醫生，他們看醫生也很麻煩，也沒有錢，那時候只有勞保、公保。', en: 'There were poor people then who needed treatment and could not find a doctor. Seeing one was hard for them, and they had no money. Back then there was only labour insurance and civil servants’ insurance.', who: T('張澄溫', 'Chang Cheng-Wen') },
        s: ['fm48', 'o720910'] },
      { k: 'story', lay: 'R', h: T('紅布條', 'The red banner'),
        ph: [{ i: '19720910-1_09', c: T('義診時，醫師為長者聽診。', 'A doctor listens to an elder’s chest at a free clinic.') }],
        p: [
          T('除了定點服務，醫護人員與志工還在假日深入玉里、光復、壽豐巡迴義診，最遠到過臺東。', 'Beyond the clinic itself, medical staff and volunteers spent their holidays on mobile clinics in Yuli, Guangfu and Shoufeng, going as far as Taitung.')
        ],
        q: { zh: '當時公路還很簡陋，有二段路甚至是公路與鐵軌同道，過橋時，巴士走在鐵軌上，就怕突然間火車過來，很緊張；在車身二邊掛著慈濟義診的紅布條，有一次偏偏是來到橋上，進退不得的時候，紅布條被風吹落，只好停下車去撿紅布條，很刺激……', en: 'The roads were very rough then. On two stretches the highway even shared its way with the railway. Crossing a bridge, the bus ran along the rails, and we were so afraid a train would suddenly come. The Tzu Chi clinic’s red banners hung on both sides of the bus. Once, right on a bridge, where we could go neither forward nor back, the wind blew a banner off, and we had to stop the bus and pick it up. What a thrill…', who: SHANGREN },
        q2: { zh: '每到一個窮鄉僻壤，「慈濟義診團」的紅布條一拉起，總是有好幾百位患者圍繞在醫護和志工之間……。', en: 'In every poor and remote place, as soon as the “Tzu Chi Free Clinic” red banner went up, several hundred patients would gather around the medical staff and volunteers…', who: SHANGREN },
        s: ['fm48', 'o720910'] },
      { k: 'rec', items: [
        { d: '1972.10', zh: '開辦頭三個星期，共嘉惠貧病鄉親九十人次。', en: 'In its first three weeks, the clinic served 90 patient visits.' },
        { d: '1973.08', zh: '至八月底，嘉惠貧病鄉親計三千二百六十六人次，含固定及巡迴義診。', en: 'By the end of August, 3,266 patient visits had been recorded, counting the clinic and mobile outings.' },
        { d: '1972–86', zh: '義診所看診超過十四萬人次。', en: 'The clinic served more than 140,000 patient visits.' },
        { d: '1986.12', zh: '義診所結束看診，貧戶可依義診券，至花蓮慈院免費就醫。', en: 'The clinic closed. Poor households could use clinic vouchers for free care at Hualien Tzu Chi Hospital.' }
      ], s: ['fm48', 'o720910'] }
    ] },

    /* 二 */
    { id: 'm2a', era: 'e70', y: '1966–84', nav: T('一個更大的心願', 'A larger wish'), ask: T('媽媽，已經有義診所了，為什麼還要蓋醫院？', 'Mama, there was already a clinic. Why build a hospital?'), b: [
      { k: 'story', lay: 'R', date: '1966', h: T('八千元', 'Eight thousand dollars'),
        ph: [{ i: 'ai_h1', c: T('情境重建：東部的鄉間道路。AI 畫面，非當年攝影。', 'Reconstruction: a country road in eastern Taiwan. AI image, not a historical photograph.') }],
        p: [
          T('早在慈濟成立那一年的初春，證嚴上人到鳳林探病，在醫院門口看到地上的一攤血。旁人說，一位原住民婦女小產，被送到醫院，因為繳不出八千元的保證金，又被抬了回去。', 'In early spring of the year Tzu Chi began, the Master went to Fenglin to visit a patient and saw a pool of blood on the ground at the hospital door. Bystanders told her that an Indigenous woman had miscarried and been brought there, but could not pay a deposit of eight thousand dollars and was carried away again.'),
          T('上人當時沒有見到那位婦女，只看到那一攤血。', 'The Master never saw the woman herself. She saw only the blood.')
        ],
        q: { zh: '難道一條人命只值八千元？', en: 'Could a human life be worth only eight thousand dollars?', who: SHANGREN },
        s: ['fm28'] },
      { k: 'story', lay: 'T', h: T('看一次病不會好', 'One visit does not cure'),
        p: [T('義診所開了幾年，來看診的多是長期罹病的鄉親。店面能做的，終究有限。', 'After some years the clinic’s patients were mostly long-term cases. There was a limit to what a shopfront could do.')],
        q: { zh: '義診所資源有限，只能幫助感冒、慢性病或是營養不良的人改善症狀；若遇上病情較複雜，需要進一步檢查者，就必須轉介到西部的大醫院。', en: 'The clinic’s resources were limited. It could only ease the symptoms of colds, chronic illness or malnutrition. Anyone with a more complicated condition who needed further tests had to be referred to the big hospitals in the west.', who: SHANGREN },
        q2: { zh: '我就說你這個要蓋醫院才有辦法，因為我們看的病，都是長期病，我跟師父講說，我們有辦法就蓋個醫院起來，不然這些人，不是今天看一次病就會好。', en: 'I said a hospital was the only way, because what we were seeing were all long-term illnesses. I told the Master that if we could manage it we should build a hospital. Otherwise these people would not get well from one visit today.', who: T('張澄溫', 'Chang Cheng-Wen') },
        s: ['fm48', 'o720910'] },
      { k: 'story', lay: 'T', date: '1979.07.08', h: T('掘井的人', 'The well-digger'),
        p: [T('這一天的委員聯誼月會上，籌建醫院的構想提了出來。', 'At the commissioners’ monthly gathering on this day, the idea of building a hospital was put forward.')],
        q: { zh: '民國六十八年（1979年），我的身體狀況最差，竟有股世緣將盡的感覺。我突然想到，萬一我老了，慈濟工作是否就中斷了？從三十個會員，到幾萬個會員的這段歷程與形成的力量，如就此中止，豈不是太可惜了？那些急難貧困的人又將怎麼辦？想到這些問題，我興起了籌建醫院的念頭', en: 'In 1979 my health was at its worst, and I felt my time in this world might be ending. It struck me: if I grew old, would Tzu Chi’s work simply stop? From thirty members to tens of thousands, what a pity if that journey and the strength it built came to an end. And what would become of the poor and those in crisis? Thinking of this, the idea of building a hospital arose in me.', who: SHANGREN },
        q2: { zh: '當時建院構想成立之初，臺北陳燦暉教授曾忠告：「建院構想緊隨而來的，將是一連串的艱辛困苦。」但我願以掘井人之心來創建慈濟醫院。', en: 'When the idea first took shape, Professor Chen Tsan-Hui of Taipei warned me: “Right behind this idea will come a long chain of hardship.” But I am willing to build Tzu Chi Hospital with the heart of one who digs a well.', who: SHANGREN },
        s: ['fm64', 'fm75', 'fm63'] },
      { k: 'gap', top: T('醫院需要', 'The hospital needed'), topv: T('六至八億', 'NT$600–800 million'), low: T('募了三年多', 'Raised in over three years'), lowv: T('三千萬都不到', 'Not even NT$30 million'),
        cap: T('上人向來訪的省主席說起籌建現況。長條依六億與三千萬的比例畫。', 'The Master describing the fundraising to the visiting provincial governor. Bars drawn to scale at NT$600 million and NT$30 million.'),
        date: '1983.02.04', s: ['fm75'] },
      { k: 'rec', items: [
        { d: '1983.02.05', zh: '花蓮慈院在國福里預定地舉行破土典禮。', en: 'Groundbreaking at the planned site in Guofu Village.' },
        { d: '1983.04.16', zh: '慈濟接獲軍方公文，要求土地暫緩建院。', en: 'A military notice asks that building on the land be put on hold.' },
        { d: '1983.05.23', zh: '省立花蓮高級農業職業學校農場實習用地撥給慈濟，作為建院新址。', en: 'Farm land of the provincial Hualien agricultural school is allocated to Tzu Chi as the new site.' },
        { d: '1984.04.24', zh: '新建地舉行動土典禮，三千餘人參加。', en: 'Groundbreaking at the new site, attended by more than 3,000 people.' }
      ], s: ['fm75', 'fm82'] },
      { k: 'photos', lay: 'one', ph: [{ i: '19840424-1_10', c: T('「佛教慈濟綜合醫院破土興工典禮」。', 'The groundbreaking ceremony of the Buddhist Tzu Chi General Hospital.') }] },
      { k: 'story', lay: 'T', h: T('半個月一次的工程費', 'A construction bill every two weeks'),
        p: [T('動土那一刻，有歡喜，也有憂心。', 'At the groundbreaking there was joy, and there was worry.')],
        q: { zh: '沒錢、沒有人，這一動土，我就半個月，要付一次的工程費，錢要從那裡來啊。', en: 'No money, no people. Once ground was broken I would have a construction bill to pay every two weeks. Where was the money to come from?', who: SHANGREN },
        s: ['o840424'] },
      { k: 'quote', big: 1, zh: '慈濟的考量就是生命的價值，生命平等、尊重生命，這就是我們的使命。', en: 'What Tzu Chi weighs is the value of life. All lives are equal, and life must be respected. That is our mission.', who: T('證嚴上人，2002.08.17', 'Dharma Master Cheng Yen, 17 Aug 2002'), s: ['o840424'] }
    ] },

    /* 三 */
    { id: 'm3a', era: 'e80', y: '1980–86', nav: T('一塊磚，一把沙', 'A brick, a handful of sand'), ask: T('媽媽，蓋醫院的錢，從哪裡來？', 'Mama, where did the money for the hospital come from?'), b: [
      { k: 'story', lay: 'R', h: T('兩億美金', 'Two hundred million US dollars'),
        ph: [{ i: '19840424-1_15', c: T('舊刊頁面：「本會籌建慈濟綜合醫院　各界熱烈響應踴躍捐獻」。', 'An old publication: “Tzu Chi General Hospital: all sides respond and give generously.”') }],
        p: [T('當時募得的資金僅三千萬，有一位日本人願意提供兩億美金建院。上人婉拒了。', 'Only about NT$30 million had been raised when a Japanese donor offered two hundred million US dollars for the hospital. The Master declined.')],
        q: { zh: '因為那時候有人要捐給我兩億美金，但我不要，我要的是人人來造福。臺灣的福田，臺灣人耕，我寧願去收五十元、一百元。', en: 'Someone wanted to give me two hundred million US dollars then, but I did not want it. What I wanted was for everyone to sow blessings. Taiwan’s fields of blessings are for the people of Taiwan to till. I would rather go and collect fifty dollars, a hundred dollars.', who: T('證嚴上人，2007.10.10', 'Dharma Master Cheng Yen, 10 Oct 2007') },
        q2: { zh: '那時候，委員若是收到一萬元，就去佛前拜一百零八拜，募款是很辛苦的。', en: 'In those days, if a commissioner received ten thousand dollars, they would go before the Buddha and bow 108 times. Raising money was very hard.', who: SHANGREN },
        s: ['fm70', 'fm75', 'o840424'] },
      { k: 'bricks', bare: 1, i: '19860817-1_00', zh: '我寧願10元、50元去收，讓每一個人一塊磚、一把沙，都是自己人(募來)的。', en: 'I would rather collect ten dollars, fifty dollars, so that every brick, every handful of sand, comes from our own people.', who: T('證嚴上人，2006.08.14', 'Dharma Master Cheng Yen, 14 Aug 2006'), c: T('花蓮慈濟醫院啟業當天。', 'Hualien Tzu Chi Hospital on its opening day.'), s: ['o840424'] },
      { k: 'story', lay: 'R', h: T('一間病房三十萬', 'Three hundred thousand for one ward'),
        ph: [{ i: 'ai_h9', c: T('情境重建：賣水果的手。AI 畫面，非當年攝影。', 'Reconstruction: hands selling fruit. AI image, not a historical photograph.') }, { i: 'ai_h10', c: T('情境重建：半夜的橋。AI 畫面，非當年攝影。', 'Reconstruction: a bridge at night. AI image, not a historical photograph.') }],
        p: [T('高愛師姊聽到了建院的心願，就動了起來。', 'When Sister Kao Ai heard of the wish to build a hospital, she set to work.')],
        q: { zh: '聽到師父說一間病房30萬，我就去賣水果、一直勸募。我當時是掃華中橋，都是(半夜)一點出門。只要有錢了，我就一直要捐出來。', en: 'When I heard the Master say one ward cost three hundred thousand, I went to sell fruit and kept asking people to give. I was sweeping Huazhong Bridge then, going out at one in the morning. Whenever I had money, I wanted to give it.', who: T('高愛，2006', 'Kao Ai, 2006') },
        s: ['o840424'] },
      { k: 'story', lay: 'L', h: T('一朵一萬元的心蓮', 'A lotus of the heart for ten thousand dollars'),
        ph: [{ i: '19860309-1_07', c: T('捐款賬冊特寫，姓名已虛化。', 'A close view of a donation ledger, names blurred.') }],
        p: [
          T('一九八〇年十月二十七日，樂生療養院棲蓮精舍的蓮友，為響應慈濟醫院籌建，發心募集六萬一千九百元，郵政劃撥至慈濟。', 'On 27 October 1980, the lotus friends of Qilian Hall at Losheng Sanatorium raised NT$61,900 for the planned hospital and sent it to Tzu Chi by postal transfer.'),
          T('後來，失明的宋金緣老菩薩（慈濟對長者的敬稱）以掃把柄當拐杖，挨家挨戶為建院募「心蓮」。一個月下來，勸募了三十幾朵。', 'Later the blind elder Song Jin-Yuan, using a broom handle as her cane, went door to door offering “lotuses of the heart” for the hospital. In one month, more than thirty were taken up.')
        ],
        q: { zh: '要買蓮花嗎？清淨莊嚴的蓮花，一朵一萬元。', en: 'Would you like to buy a lotus? A pure and dignified lotus, ten thousand dollars each.', who: T('宋金緣', 'Song Jin-Yuan') },
        q2: { zh: '我們不可輕視自己，這一百元所供養的，不是慈濟所需要的經費，而是供養慈濟所需要的精神。', en: 'We must not look down on ourselves. What this hundred dollars offers is not the funds Tzu Chi needs, but the spirit Tzu Chi needs.', who: T('金義楨', 'Jin Yi-Zhen') },
        s: ['fm93', 'o860309'] }
    ] },

    /* 四 */
    { id: 'm4a', era: 'heart', y: '1986', nav: T('門開了', 'The doors open'), ask: T('媽媽，所以，沒有錢，也可以住院了？', 'Mama, so people with no money could stay in hospital?'), b: [
      { k: 'gate', bare: 1, i: '19860817-1_05', date: T('1986 年 8 月 17 日', '17 August 1986'), t: T('病房不分等級，住院不須保證金。', 'No classes of ward. No deposit to be admitted.'), c: T('排隊的人群。', 'People waiting in line.'), s: ['fm91', 'o860817'] },
      { k: 'rec', items: [
        { d: '1986.06.22', zh: '花蓮慈院第一期工程竣工。', en: 'The first phase of Hualien Tzu Chi Hospital is completed.' },
        { d: '1986.08.02', zh: '訂定「病房不分等級，住院不須保證金」等營運措施。', en: 'Operating measures are set, including no classes of ward and no deposit for admission.' },
        { d: '1986.08.03', zh: '舉辦兩週義診，共嘉惠七千三百五十三人。', en: 'A two-week free clinic serves 7,353 people.' },
        { d: '1986.08.17', zh: '啟業典禮，萬餘人觀禮。', en: 'The opening ceremony is attended by more than ten thousand people.' }
      ], s: ['fm91'] },
      { k: 'photos', lay: 'one', ph: [{ i: '19860817-1_04', c: T('當年的報導：「慈濟醫院義診兩週　嘉惠病患七千餘人」。', 'A report at the time: Tzu Chi Hospital’s two-week free clinic serves over 7,000 patients.') }] },
      { k: 'quote', zh: '心裡要說的話很多，千頭萬緒，總歸一句，就是無法所說的感謝。全台的會員、委員，對慈濟的支持與愛護，我已經沒話可說了。', en: 'There is so much in my heart to say, a thousand threads of it, and it all comes down to one thing: a gratitude I cannot put into words. For the support and care of members and commissioners across Taiwan, I have no words left.', who: T('證嚴上人，啟業當天', 'Dharma Master Cheng Yen, on opening day'), s: ['o860817'] },
      { k: 'story', lay: 'R', date: '1986.08.17', h: T('病房裡的人', 'The people in the wards'),
        ph: [{ i: 'ai_h12', c: T('情境重建：握著病人的手。AI 畫面，非當年攝影。', 'Reconstruction: holding a patient’s hand. AI image, not a historical photograph.') }],
        p: [
          T('啟業這一天，志工顏惠美、杜張瑤珍及陳卿子攜手組隊，走入病房膚慰病人（親手撫觸、陪伴安慰），這是「志工服務隊」最早期的雛型。', 'On opening day the volunteers Yen Hui-Mei, Tu Chang Yao-Chen and Chen Ching-Tzu formed a team and walked into the wards to comfort patients. This was the earliest form of the volunteer service team.'),
          T('十二月七日，「慈濟服務隊」首期招募一百五十餘位志工，並於十五日正式服務。志工把阿公阿媽當作親人；護理長陳惠蘭說，志工就像病人與醫護之間的潤滑劑。', 'On 7 December the Tzu Chi Service Team held its first training for over 150 recruits, and service began on the 15th. Volunteers treated the elderly patients as family. Head nurse Chen Hui-Lan described them as the lubricant between patients and staff.')
        ],
        more: [T('志工自稱是「活動的服務台」，證嚴上人則讚譽志工為「慈濟醫院軟體中的軟體」。', 'The volunteers called themselves “a walking service desk.” The Master praised them as “the software within the software of Tzu Chi Hospital.”')],
        s: ['fm98', 'o860817'] }
    ] },

    /* 五 */
    { id: 'm5a', era: 'e90', y: '走進家門', yen: 'Into homes', nav: T('走進家門', 'Into homes'), ask: T('媽媽，走不到醫院的人呢？', 'Mama, what about people who can’t reach a hospital?'), b: [
      { k: 'story', lay: 'R', h: T('「推」車', 'A van that had to be pushed'),
        ph: [{ i: '19961012-1_06', c: T('往診（醫護到家中看診），走進照顧戶的家門。', 'A home visit.') }],
        p: [
          T('慈濟醫院家庭醫學科決定作巡迴醫療時，選擇的服務區域，就是「不能到的地方」。東部交通不便，很需要一輛四輪傳動的巡迴醫療車上山下海。', 'When the hospital’s family medicine team began mobile care, the area they chose was “the places no one can reach.” Travel in the east was hard, and they needed a four-wheel-drive van for the mountains and the coast.'),
          T('很快有人捐了車，雖不是理想中的「傳動」，但是醫師、志工、社工仍是「推」車走遍了花蓮，直抵最南端的富里，「遠不是問題，他們需要才是問題。」', 'Someone soon donated a van. It was not the four-wheel drive they had hoped for, but the doctors, volunteers and social workers still “pushed” it across Hualien, as far south as Fuli. “Distance is not the problem. Their need is the problem.”')
        ],
        s: ['fm199'] },
      { k: 'story', lay: 'L', date: '1998.01.18', h: T('街頭的診間', 'A clinic on the street'),
        ph: [{ i: '19961012-1_15', c: T('二〇〇六年印尼中爪哇強震，點滴瓶掛在香蕉樹上。', 'After the 2006 Central Java earthquake, a drip bag hung from a banana tree.') }],
        p: [
          T('一九九六年十月十二日，慈濟醫事人員聯誼會成立。一九九八年一月十八日更名為慈濟人醫會，並首次為街友舉辦街頭義診。', 'The Tzu Chi medical personnel association was founded on 12 October 1996. On 18 January 1998 it took the name Tzu Chi Medical Association and held its first street clinic for homeless people.'),
          T('那一天，在萬華龍山寺對面的停車場，四十五位人醫會成員及五十位慈濟人，為三百五十五位街友檢診。', 'That day, in a car park across from Wanhua’s Longshan Temple, 45 association members and 50 Tzu Chi volunteers examined 355 homeless people.'),
          T('二〇〇四年，定名為國際慈濟人醫會。', 'In 2004 it took the name Tzu Chi International Medical Association.')
        ],
        q: { zh: '一次就醫都要1千多元，我哪有錢。', en: 'One doctor’s visit costs over a thousand dollars. Where would I get the money?', who: T('一位街友', 'A homeless man') },
        q2: { zh: '苦的，就是苦在偏遠地區，或是老病沒有人照顧的，在暗角裡，在邊緣的，他們也都在渴望著，期待著，真有人去關心他們。', en: 'The suffering is in remote places, among the old and sick with no one to care for them, in dark corners, at the margins. They too are longing and hoping that someone will truly come and care.', who: SHANGREN },
        s: ['fm199', 'o961012'] },
      { k: 'rec', items: [
        { d: '1999.03.15', zh: '玉里分院啟業。', en: 'Yuli branch opens.' },
        { d: '2000.03.15', zh: '關山分院啟用，與花蓮慈院、玉里分院連成東部醫療網。', en: 'Guanshan branch opens, joining Hualien and Yuli in an eastern care network.' },
        { d: '2000.08.13', zh: '大林慈院啟業。', en: 'Dalin Tzu Chi Hospital opens.' },
        { d: '2005.05.08', zh: '臺北慈濟醫院啟業。', en: 'Taipei Tzu Chi Hospital opens.' },
        { d: '2007.01.08', zh: '臺中慈濟醫院啟業。', en: 'Taichung Tzu Chi Hospital opens.' },
        { d: '2019.01.05', zh: '斗六慈濟醫院啟業。', en: 'Douliu Tzu Chi Hospital opens.' },
        { d: '2022.12.12', zh: '三義慈濟中醫醫院揭牌啟用。', en: 'Sanyi Tzu Chi Chinese Medicine Hospital opens.' }
      ], s: ['fm226', 'fm235', 'fm236', 'fm287', 'fm307', 'fm428', 'o201027'] }
    ] },
    { id: 'm5b', era: 'e00', y: '1995', h: T('把自己交給下一代', 'Giving oneself to the next generation'), nav: T('無語良師', 'Silent Mentors'), b: [
      { k: 'story', lay: 'R', date: '1995.02.03', h: T('無語良師', 'Silent Mentors'),
        ph: [{ i: '19960917-1_10', c: T('模擬手術教學。', 'Simulated surgery teaching.') }],
        p: [
          T('一九九四年底，慈濟醫學院接到彰化林蕙敏女士的電話，表達遺體捐贈的意願。隔年二月三日，林女士往生，家屬遵循遺願，捐贈遺體給慈濟醫學院。', 'At the end of 1994 Tzu Chi College of Medicine received a call from Ms. Lin Hui-Min of Changhua, who wished to donate her body. On 3 February 1995 she passed away, and her family honoured her wish.'),
          T('三月四日，上人提及這分因緣，呼籲大體捐贈。慈濟人尊稱捐贈遺體的人為「大體老師」、「無語良師」。', 'On 4 March the Master spoke of this and called for body donation. Tzu Chi people honour those who choose to donate as “Great Teachers” or “Silent Mentors.”'),
          T('一九九六年九月十七日，大體解剖教學實習室啟用。二〇〇二年五月，慈濟大學全臺首創大體模擬手術教學。', 'The anatomy teaching lab opened on 17 September 1996. In May 2002 Tzu Chi University began Taiwan’s first simulated surgery teaching on donated bodies.')
        ],
        q: { zh: '大體老師完完整整地交在你手裏，你學習完了之後，至少要把大體老師完完整整復原，完完整整的交還給家人，然後一起送大體老師去火化，所以這是一個託付，對同學來講，就是實踐自己的承諾。', en: 'The Silent Mentor is placed whole in your hands. When your learning is done, you must at the least restore the Mentor whole, return the Mentor whole to the family, and accompany the Mentor to cremation together. So this is an entrustment. For students, it is keeping a promise.', who: T('曾國藩', 'Tseng Kuo-Fan') },
        q2: { zh: '他可以在我身上研究，但是一定要在病人的身上，有更好的進步，來幫病人解脫他的困難，這樣我捐這個大體才有意義。', en: 'They may study on my body, but it must bring real progress for patients and free them from their difficulties. Only then does giving this body have meaning.', who: T('張明璽，計畫參與者', 'Chang Ming-Hsi, programme participant') },
        s: ['fm187', 'fm258', 'o960917'] }
    ] },

    /* 六 */
    { id: 'm6a', era: 'my', y: '馬來西亞', yen: 'Malaysia', nav: T('在馬來西亞', 'In Malaysia'), ask: T('媽媽，馬來西亞也有嗎？', 'Mama, is it in Malaysia too?'), b: [
      { k: 'story', lay: 'R', date: '1997.08.03', h: T('檳城的洗腎中心', 'The dialysis centre in Penang'),
        ph: [{ i: '19970803-1_02', c: T('檳城慈濟洗腎中心的洗腎室。', 'The dialysis room of the Tzu Chi centre in Penang.') }],
        p: [
          T('檳城慈濟洗腎中心在歌德路啟用，為家貧腎友提供免費服務。這是慈濟海外第一間洗腎中心，也是全馬第一家由非政府組織經營、費用全免的洗腎中心。', 'The Penang Tzu Chi dialysis centre opened on Jalan Gottlieb, offering free care to patients in need. It was Tzu Chi’s first dialysis centre overseas, and Malaysia’s first run by a non-governmental organisation entirely free of charge.'),
          T('當時慈濟關懷的一百三十五戶照顧戶中，有三十多戶需要洗腎。一位腎友陳亞惹，為了孩子撐了下來。', 'Among the 135 households then in care, more than thirty needed dialysis. One patient, Chen Ya-Re, held on for her children.')
        ],
        q: { zh: '我們希望這洗腎中心是專給那些，真正很孤老無依的，全免(醫藥費)的服務。', en: 'We hope this centre is for those who are truly old and alone, a service entirely free of charge.', who: T('郭濟航', 'Kuo Chi-Hang') },
        q2: { zh: '我看到我的孩子，可憐他們，(他們)沒有父親了，母親又患上腎病，要放棄他們也不可以，硬撐下去，為了孩子們。', en: 'I looked at my children and my heart ached for them. They had no father, and their mother had kidney disease. I could not give up on them. I held on, for the children.', who: T('陳亞惹', 'Chen Ya-Re') },
        s: ['fm203', 'o970803'] },
      { k: 'turn', bare: 1, a: '19970803-1_12', b: '19970803-1_08c',
        ka: T('腎友', 'Patient'), kb: T('志工', 'Volunteer'),
        qa: { zh: '當慈濟洗腎中心的醫師親口告訴我能夠免費洗腎時，我高興得說不出話來，眼淚直流……那種感覺就好像下雨天有人為你撐了把傘。', en: 'When the centre’s doctor told me in person that my dialysis would be free, I was too happy to speak. The tears just ran… It felt like someone holding an umbrella over you in the rain.', who: T('腎友阿里', 'Ali, a dialysis patient') },
        qb: { zh: '記得第一次參加志工服務的前一個晚上，我高興得睡不著覺。', en: 'I remember the night before my first time volunteering. I was too happy to sleep.', who: T('腎友李彩珠', 'Lee Chai-Chu, a dialysis patient') },
        ca: T('洗腎中心的護理人員。', 'A nurse at the dialysis centre.'), cb: T('收來的紙箱，做環保。', 'Collected cartons for recycling.'),
        s: ['fm203', 'o970803'] },
      { k: 'story', lay: 'R', h: T('半數成了志工', 'Half became volunteers'),
        p: [
          T('二〇〇二年的報導裡，接受洗腎中心免費服務的五十四位腎友中，有半數左右成為志工。阿里義務打掃，也整理園藝。李彩珠每週兩次跟著志工到腎友家關懷。', 'A 2002 report found that of the 54 patients receiving free care, about half had become volunteers. Ali swept and tended the garden. Lee Chai-Chu joined volunteers twice a week on visits to other patients’ homes.'),
          T('治療一直在繼續，洗腎中心的費用負擔也一直都在。許多腎友翻轉手心，從受助到付出，投入環保志業。腎友張梅英勸鄰里留下報紙與紙箱，大概有一百多間人家響應。', 'Treatment does not end, and neither does its cost. Many patients turned their hands from receiving to giving and took up recycling. One of them, Chang Mei-Ying, collected newspapers and cartons from more than a hundred homes.')
        ],
        q: { zh: '在我跌入生命谷底時，是慈濟拉了我一把，幫助我揮別病痛的陰霾。我想在有生之年，盡我所能地去幫助別人。', en: 'When I fell to the lowest point of my life, Tzu Chi pulled me up and helped me leave the shadow of illness behind. For as long as I live, I want to help others as much as I can.', who: T('李彩珠', 'Lee Chai-Chu') },
        s: ['fm203', 'o970803'] },
      { k: 'story', lay: 'L', date: '2025.01.12', h: T('一束花', 'A bunch of flowers'),
        ph: [{ i: 'ai_h15', c: T('情境重建：醫生的手。AI 畫面，非當年攝影。', 'Reconstruction: a doctor’s hand. AI image, not a historical photograph.') }, { i: 'ai_h17', c: T('情境重建：獻花。AI 畫面，非當年攝影。', 'Reconstruction: presenting flowers. AI image, not a historical photograph.') }],
        p: [
          T('黃春玲跌倒開了刀，沒有力氣工作，擔心手術費。', 'Huang Chun-Ling fell and needed surgery. She no longer had the strength to work and worried about the cost.'),
          T('後來，她也發心投入，家訪、募款。二〇二五年一月十二日，在吉隆坡靜思堂，她把一束花親手送到鄭醫生手裡。', 'Later she too went out on home visits and to raise funds. On 12 January 2025, at the Jing Si Hall in Kuala Lumpur, she placed a bunch of flowers in the hands of Dr. Cheng, who had come south for the occasion.')
        ],
        q: { zh: '那個靚仔醫生告訴我，慈濟會幫助你的手術費，不要擔心，他這一番話，我才放下心來。', en: 'That handsome young doctor told me Tzu Chi would help with my surgery fees and not to worry. Only with those words could I set my heart at ease.', who: T('黃春玲', 'Huang Chun-Ling') },
        s: ['my'] },
      { k: 'quote', big: 1, zh: '除了謝謝他，還有告訴他，希望自己可以為慈濟多做一些！', en: 'Besides thanking him, I also told him I hope I can do more for Tzu Chi!', who: T('黃春玲', 'Huang Chun-Ling'), s: ['my'] }
    ] },

    /* 卡片下方：數字和全紀錄 */
    { id: 'mnum', era: 'num', y: '數字', yen: 'Numbers', h: T('數字裡的醫療', 'Medicine in numbers'), nav: T('數字', 'Numbers'), b: [{ k: 'ledger' }] },
    { id: 'mall', era: 'all', y: '全記錄', yen: 'Archive', h: T('全記錄', 'The full record'), lead: T('醫療沿革與影片，都可以自己翻。', 'The timeline and films are here for you to explore.'), nav: T('全記錄與影片', 'Archive and films'), b: [{ k: 'films' }, { k: 'records' }, { k: 'sources' }] }
  ];

  CH.blocks = [
    { id: 'm1', y: '1972–86', h: T('一間借來的店面', 'A borrowed shopfront'), ch: ['m1a'], cover: '19720910-1_00', tun: 'm_hall' },
    { id: 'm2', y: '1966–84', h: T('一個更大的心願', 'A larger wish'), ch: ['m2a'], cover: '19840424-1_13', tun: 'm_rows' },
    { id: 'm3', y: '1980–86', h: T('一塊磚，一把沙', 'A brick, a handful of sand'), ch: ['m3a'], cover: '19860309-1_05', tun: 'm_fall' },
    { id: 'm4', y: '1986', h: T('門開了', 'The doors open'), ch: ['m4a'], cover: '19860817-1_00', tun: 'm_fly' },
    { id: 'm5', y: T('走進家門', 'Into homes'), h: T('走進家門，也把自己交給下一代', 'Into homes, and into the next generation’s hands'), ch: ['m5a', 'm5b'], cover: '19961012-1_06', tun: 'm_cols' },
    { id: 'm6', y: T('馬來西亞', 'Malaysia'), h: T('在馬來西亞', 'In Malaysia'), ch: ['m6a'], cover: '19970803-1_02', tun: 'm_my' }
  ];
  CH.ui = {
    hubK: T('醫療', 'Medicine'), hubH: T('六段路，從店面走到今天', 'Six stretches, from a shopfront to today'),
    hubS: T('一段一段走。走完一段，就蓋一個章。', 'Walk them one at a time. Each one you finish earns a stamp.'),
    start: T('從這裡開始', 'Start here'), walked: T('走過了', 'Walked'), nextTun: T('下一個時空隧道', 'Next time tunnel'), nextOf: T('下一段', 'Next'),
    back: T('回六段路', 'Back to the six stretches'), road: T('回八大腳印', 'Back to the Eight Footprints'), skip: T('跳過', 'Skip'),
    left: T('這一段還有', 'Still ahead'), leftU: T('個故事', 'stories'), seg: T('第 {n} 段／共 6 段', 'Part {n} of 6'), done: T('走完了這一段', 'You finished this part'),
    recH: T('醫療沿革', 'Timeline')
  };

  CH.ledger = [
    { h: T('義診所', 'The free clinic'), rows: [
      { n: '3,266', u: T('人次', 'patient visits'), l: T('開辦第一年受惠，含固定及巡迴義診', 'Served in the first year, clinic and mobile outings together'), w: T('1972.09–1973.08', 'Sep 1972 to Aug 1973'), s: 'fm48' },
      { n: '超過 14 萬', nen: 'Over 140,000', u: T('人次', 'patient visits'), l: T('義診所看診', 'Served by the free clinic'), w: T('1972–1986', '1972 to 1986'), s: 'o720910', big: 1 }
    ] },
    { h: T('慈濟人醫會', 'Tzu Chi International Medical Association'), rows: [
      { n: '20,197', u: T('場', 'clinics'), l: T('全球義診累計', 'Free clinics worldwide, cumulative'), w: T('截至 2025.12.31', 'to 31 Dec 2025'), s: 'i2', big: 1 },
      { n: '4,834,907', u: T('人次', 'people served'), l: T('全球義診服務', 'Served at free clinics worldwide'), w: T('截至 2025.12.31', 'to 31 Dec 2025'), s: 'i2' },
      { n: '59', u: T('個國家地區', 'countries and regions'), l: T('全球義診足跡', 'Reached by these free clinics'), w: T('截至 2025.12.31', 'to 31 Dec 2025'), s: 'i2' }
    ] },
    { h: T('醫院', 'Hospitals'), rows: [
      { n: '8', u: T('家醫院', 'hospitals'), l: T('另有一家診所', 'plus one clinic'), w: T('2026 年 5 月', 'May 2026'), s: 'tp' }
    ] },
    { h: T('無語良師', 'Silent Mentors'), rows: [
      { n: '1,401', u: T('位', 'Silent Mentors'), l: T('已捐贈，含大體解剖與模擬手術教學，不含病理捐贈', 'Donors so far, for anatomy and simulated surgery teaching, excluding pathology donation'), w: T('截至 2026.03.23', 'to 23 Mar 2026'), s: 'i7', big: 1 },
      { n: '43,721', u: T('位', 'people'), l: T('簽署捐贈志願書', 'Have signed a pledge to donate'), w: T('截至 2026.03.23', 'to 23 Mar 2026'), s: 'i7' },
      { n: '13,502', u: T('人次', 'trainee sessions'), l: T('模擬手術訓練，慈濟與非慈濟醫療體系約各半', 'Simulated surgery training, about half from outside Tzu Chi’s medical system'), w: T('統計至 2025.10', 'to Oct 2025'), s: 'i7' }
    ] }
  ];
  CH.ledgerNote = T('人次：同一人多次受惠，每次都算一次。簽署捐贈志願書的人，不等於已經捐贈。', 'Patient visits count each occasion, so one person may be counted more than once. Signing a pledge is not the same as having donated.');

  CH.films = [
    { id: 'LOTSwjtC4cY', zh: '成立貧民施醫義診所', en: 'Founding the free clinic', y: '1972' },
    { id: '1oA2YDMjyhA', zh: '花蓮慈濟醫院第一次動土', en: 'First groundbreaking', y: '1983' },
    { id: '6bH2N9jjPRk', zh: '花蓮慈濟醫院啟業', en: 'Hualien Tzu Chi Hospital opens', y: '1986' },
    { id: '2urBuWf77mA', zh: '成立慈濟醫院志工服務隊', en: 'The hospital volunteer team', y: '1986' },
    { id: 'P6s-XOr2YLE', zh: '上人呼籲大體捐贈', en: 'The call for body donation', y: '1995' },
    { id: 'bxq_uzDpH7E', zh: '成立「慈濟醫事人員聯誼會」', en: 'The medical personnel association', y: '1996' },
    { id: 'jNbY_WWeX4o', zh: '海外第一間洗腎中心', en: 'The first overseas dialysis centre', y: '1997' },
    { id: 'oDmH4B90NQQ', zh: '慈濟大學首創「大體模擬手術教學」', en: 'Simulated surgery teaching begins', y: '2002' }
  ];

  CH.filters = [['all', T('全部', 'All')], ['first', T('第一次', 'Firsts')], ['clinic', T('義診', 'Free clinics')], ['hosp', T('醫院', 'Hospitals')], ['people', T('人', 'People')], ['my', T('馬來西亞', 'Malaysia')]];
  CH.records = [
    ['1972.09.10', 'first clinic', '慈濟功德會借用花蓮市仁愛街廿八號，成立貧民施醫義診所。', 'The free clinic opens at 28 Ren’ai Street, Hualien.', 'fm48'],
    ['1972.12.24', 'first clinic', '行憲紀念日假期巡迴義診。', 'A mobile clinic over the Constitution Day holiday.', 'fm48'],
    ['1979.07.08', 'hosp', '委員聯誼月會發起籌建醫院的構想。', 'The idea of a hospital is raised at the commissioners’ monthly gathering.', 'fm64'],
    ['1980.10.27', 'people', '樂生療養院棲蓮精舍蓮友發心募集六萬一千九百元。', 'Lotus friends at Losheng raise NT$61,900.', 'fm93'],
    ['1981.09.27', 'hosp', '成立籌建委員會，印順長老導師任主任委員。', 'A building committee is formed, chaired by Elder Master Yin Shun.', 'fm64'],
    ['1983.02.05', 'hosp', '在國福里預定地舉行破土典禮。', 'Groundbreaking at Guofu Village.', 'fm75'],
    ['1983.04.16', 'hosp', '接獲軍方公文，要求土地暫緩建院。', 'A military notice puts the land on hold.', 'fm75'],
    ['1983.05.23', 'hosp', '省立花蓮高農農場實習用地撥給慈濟作為建院新址。', 'Farm land of the Hualien agricultural school becomes the new site.', 'fm75'],
    ['1983.11.06', 'first people', '在臺北市空軍官兵活動中心舉辦首次大型義賣。', 'First large charity sale for the building fund, in Taipei.', 'fm71'],
    ['1984.04.24', 'hosp', '新建地動土典禮，三千餘人參加。', 'Groundbreaking at the new site, with over 3,000 people.', 'fm82'],
    ['1986.06.22', 'hosp', '花蓮慈院第一期工程竣工。', 'First phase of the hospital is completed.', 'fm91'],
    ['1986.08.02', 'hosp', '訂定「病房不分等級，住院不須保證金」等營運措施。', 'Measures set: no classes of ward, no deposit for admission.', 'fm91'],
    ['1986.08.03', 'clinic', '兩週義診，共嘉惠七千三百五十三人。', 'A two-week free clinic serves 7,353 people.', 'fm91'],
    ['1986.08.17', 'first hosp', '花蓮慈濟醫院啟業，萬餘人觀禮。', 'Hualien Tzu Chi Hospital opens before more than ten thousand people.', 'fm91'],
    ['1986.12.07', 'first people', '「慈濟服務隊」首期招募一百五十餘位志工，舉行第一期訓練。', 'The Tzu Chi Service Team’s first training, over 150 volunteers.', 'fm98'],
    ['1986.12', 'clinic', '義診所結束看診，貧戶可依義診券至花蓮慈院免費就醫。', 'The free clinic closes; vouchers continue free care at the hospital.', 'fm48'],
    ['1993.11.01', 'first clinic', '美國義診中心，慈濟海外第一所醫療機構。', 'The US free clinic, Tzu Chi’s first medical facility overseas.', 'fm166'],
    ['1995.02.03', 'first people', '林蕙敏女士往生，家屬遵循遺願捐贈遺體給慈濟醫學院。', 'Ms. Lin Hui-Min passes away and her family donates her body as she wished.', 'fm187'],
    ['1996.09.17', 'people', '大體解剖教學實習室啟用。', 'The anatomy teaching lab opens.', 'o960917'],
    ['1996.10.12', 'clinic people', '慈濟醫事人員聯誼會成立。', 'The medical personnel association is founded.', 'fm199'],
    ['1997.08.03', 'first my', '檳城慈濟洗腎中心啟用，提供家貧腎友免費服務。', 'The Penang dialysis centre opens, offering free care.', 'fm203'],
    ['1998.01.18', 'first clinic', '更名慈濟人醫會，首次為街友舉辦街頭義診。', 'Renamed the Tzu Chi Medical Association; first street clinic for homeless people.', 'fm199'],
    ['1999.03.15', 'hosp', '慈濟玉里分院啟業。', 'Yuli branch opens.', 'fm226'],
    ['2000.03.15', 'hosp', '慈濟關山分院啟用。', 'Guanshan branch opens.', 'fm235'],
    ['2000.08.13', 'hosp', '大林慈院啟業。', 'Dalin Tzu Chi Hospital opens.', 'fm236'],
    ['2002.03.07', 'my', '馬來西亞第二座洗腎中心，日得拉慈濟洗腎中心啟用。', 'Malaysia’s second centre opens in Jitra, Kedah.', 'fm203'],
    ['2002.05.27', 'first people', '全臺首創大體模擬手術教學。', 'Taiwan’s first simulated surgery teaching on donated bodies.', 'fm258'],
    ['2002.11.28', 'my', '馬來西亞第三座洗腎中心，北海慈濟洗腎中心啟用。', 'Malaysia’s third centre opens in Butterworth.', 'fm203'],
    ['2004.09.25', 'clinic', '定名國際慈濟人醫會。', 'The name Tzu Chi International Medical Association is adopted.', 'fm199'],
    ['2005.05.08', 'hosp', '臺北慈濟醫院正式啟業。', 'Taipei Tzu Chi Hospital opens.', 'fm287'],
    ['2007.01.08', 'hosp', '臺中慈濟醫院一期大樓正式啟業。', 'Taichung Tzu Chi Hospital’s first building opens.', 'fm307'],
    ['2019.01.05', 'hosp', '斗六門診部升格為地區醫院，名為斗六慈濟醫院。', 'The Douliu outpatient unit becomes Douliu Tzu Chi Hospital.', 'fm428'],
    ['2022.12.12', 'hosp', '三義慈濟中醫醫院揭牌啟用。', 'Sanyi Tzu Chi Chinese Medicine Hospital opens.', 'o201027']
  ];

  CH.next = {
    ask: T('媽媽，醫院蓋好了，照顧病人的人才，從哪裡來？', 'Mama, the hospital is built. Where will the people to care for the patients come from?'),
    stop: T('下一站・教育　製作中', 'Next stop: Education · in progress')
  };
  CH.footer = T('本頁為樣板，尚未經馬來西亞慈濟分會審核，未發佈。女孩與媽媽是說故事的人。照片除另有說明外，取自慈濟《歷史上的今天》公開頁面；標示「情境重建」的畫面由 AI 依史料生成，非當年攝影。「」內為原文照錄。', 'Sample only: not yet reviewed by Tzu Chi Malaysia and not published. The girl and her mother are storytellers. Unless stated otherwise, photographs come from Tzu Chi’s public On This Day pages. Images marked as reconstructions were generated by AI from the historical record and are not historical photographs. Words inside quotation marks are reproduced from the sources.');

  /* 隧道：第一段走長廊，其餘各走各的 */
  window.TUN_M = window.TUN_M || {};
  var TM = window.TUN_M;
  TM.m_rows = { walk: 'rows', n: 2, dir: 1, d: 2500, y: [1986, 1966], ids: ['19840424-1_13', '19840424-1_10', '19840424-1_00', '19840424-1_04', '19800116-1_00', '19800116-1_05', '19720910-1_09', '19720910-1_07', '19720910-1_06', '19690510-1_00', '19670701-1_03', '19660414-1_09'], bg: '#1a0d0a', tint: '#a8402e', a0: .3, a1: .4, pop: 1 };
  TM.m_fall = { walk: 'fall', d: 2500, y: [1980, 1986], ids: ['19840424-1_14', '19840424-1_15', '19840424-1_06', '19860309-1_05', '19860309-1_07', '19860817-1_04', '19800116-1_00', '19840828-1_00'], bg: '#efe6d4', tint: '#b98a58', a0: .25, a1: .2, ink: '#2b2822', plate: 'rgba(239,230,212,' };
  TM.m_fly = { walk: 'fly', dir: -1, spd: 1, d: 2600, y: [1984, 1986], ids: ['19860817-1_05', '19860817-1_00', '19720910-1_10', '19840424-1_13', '19840424-1_10', '19840828-1_00', '19840828-1_04', '19860817-1_04'], bg: '#1c1305', tint: '#d3a23c', a0: .4, a1: .34, glow: 'rgba(240,196,110,' };
  TM.m_cols = { walk: 'cols', d: 2500, y: [1986, 2002], ids: ['19961012-1_06', '19961012-1_12', '19961012-1_13', '19961012-1_15', '19960917-1_04', '19960917-1_10', '19860817-1_05', '19860817-1_00'], bg: '#0a1626', tint: '#2a5a98', a0: .34, a1: .3 };
  TM.m_my = { walk: 'rows', n: 3, dir: -1, d: 2500, y: [1997, 2025], ids: ['19970803-1_02', '19970803-1_01', '19970803-1_12', '19970803-1_08c', '19961012-1_13', '19961012-1_15', '19970803-1_11'], bg: '#08170f', tint: '#2f8a62', a0: .34, a1: .3, pop: 1 };

  /* 效果塊。靠 CSS 變數 --p（0 到 1，滾動進度）驅動，砌磚要畫 canvas */
  var api = function () { return CH.api; };
  CH.R = {
    shutter: function (b) {
      var A = api();
      return '<section class="fx fx-sh" data-fx><div class="fx-s"><img src="assets/ph/' + b.i + '.jpg" alt="' + b.c.zh + '"><div class="sh-c">' + A.B(b.c) + '</div><div class="sh-d" aria-hidden="true"></div>' +
        '<div class="sh-t"><div class="sh-y">' + b.date + '</div><p class="t">' + A.B(b.t) + '</p><small>' + A.B(b.hint) + '</small></div></div></section>';
    },
    gap: function (b) {
      var A = api();
      return '<div class="gap"><div class="gap-d">' + b.date + '</div><div class="gap-r"><p>' + A.B(b.top) + '</p><b>' + A.B(b.topv) + '</b><i style="--w:100%"></i></div><div class="gap-r lo"><p>' + A.B(b.low) + '</p><b>' + A.B(b.lowv) + '</b><i style="--w:5%"></i></div><p class="gap-c">' + A.B(b.cap) + '</p>' + A.srcs(b.s) + '</div>';
    },
    bricks: function (b) {
      var A = api();
      return '<section class="fx fx-bk" data-fx data-i="' + b.i + '"><div class="fx-s"><blockquote class="bk-q"><p class="zh">「' + b.zh + '」</p><p class="en" lang="en">“' + b.en + '”</p><cite>' + A.B(b.who) + '</cite></blockquote><div class="bk-w"><canvas role="img" aria-label="' + b.c.zh + '"></canvas></div><div class="bk-c">' + A.B(b.c) + A.srcs(b.s) + '</div></div></section>';
    },
    gate: function (b) {
      var A = api();
      return '<section class="fx fx-gt" data-fx><div class="fx-s"><img src="assets/ph/' + b.i + '.jpg" alt="' + b.c.zh + '"><div class="gt-l" aria-hidden="true"></div><div class="gt-r" aria-hidden="true"></div><div class="gt-y">' + A.B(b.date) + '</div><div class="gt-t"><p class="t">' + A.B(b.t) + '</p><small>' + A.B(b.c) + '</small>' + A.srcs(b.s) + '</div></div></section>';
    },
    turn: function (b) {
      var A = api();
      function side(c, i, k, q, cap) {
        return '<div class="tn-' + c + '"><img src="assets/ph/' + i + '.jpg" alt="' + cap.zh + '"><div class="tn-t"><span class="tn-k t">' + A.B(k) + '</span>' + A.quote(q) + '<small>' + A.B(cap) + '</small></div></div>';
      }
      return '<section class="fx fx-tn" data-fx><div class="fx-s">' + side('a', b.a, b.ka, b.qa, b.ca) + side('b', b.b, b.kb, b.qb, b.cb) + '<div class="tn-s">' + A.srcs(b.s) + '</div></div></section>';
    }
  };

  var fx = [], wall = [], reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function rnd(i) { var x = Math.sin(i * 91.7 + 17.3) * 43758.5453; return x - Math.floor(x); }
  function drawWall(w, p) {
    var cv = w.cv, c = w.c, W = cv.width, H = cv.height, m = w.m;
    if (!m.complete || !m.naturalWidth || !W) return;
    var s = Math.max(W / m.naturalWidth, H / m.naturalHeight), sw = W / s, sh = H / s, sx = (m.naturalWidth - sw) / 2, sy = (m.naturalHeight - sh) / 2;
    var rows = W < 700 ? 13 : 15, bh = H / rows, bw = bh * 2.3, g = Math.max(1, W / 700);
    c.clearRect(0, 0, W, H);
    for (var r = 0; r < rows; r++) {
      var y = H - (r + 1) * bh, off = r % 2 ? -bw / 2 : 0, n = Math.ceil(W / bw) + 2;
      for (var i = 0; i < n; i++) {
        var x = off + i * bw, at = (r + rnd(r * 31 + i) * 1.8) / (rows + 1.8), q = Math.min(1, Math.max(0, (p * 1.12 - at) / .07));
        if (q <= 0) continue;
        var bx = Math.max(0, x), bw2 = Math.min(W, x + bw) - bx; if (bw2 <= 0) continue;
        c.globalAlpha = q;
        c.drawImage(m, sx + bx / s, sy + y / s, bw2 / s, bh / s, bx + g / 2, y + g / 2 - (1 - q) * bh * 1.4, bw2 - g, bh - g);
      }
    }
    c.globalAlpha = 1;
  }
  function sizeWall(w) {
    var r = w.cv.parentNode.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2);
    w.cv.width = Math.round(r.width * d); w.cv.height = Math.round(r.height * d); w.p = -1;
  }
  CH.onWire = function () {
    fx = [].slice.call(document.querySelectorAll('[data-fx]'));
    wall = [].map.call(document.querySelectorAll('.fx-bk'), function (e) {
      var cv = e.querySelector('canvas'), m = new Image(), w = { e: e, cv: cv, c: cv.getContext('2d'), m: m, p: -1 };
      m.onload = function () { sizeWall(w); CH.onFrame(); };
      m.src = 'assets/ph/' + e.dataset.i + '.jpg';
      return w;
    });
    CH.onFrame();
  };
  CH.onFrame = function () {
    var H = innerHeight;
    fx.forEach(function (e) {
      var r = e.getBoundingClientRect();
      if (r.bottom < -H || r.top > H * 2) return;
      var p = reduce ? 1 : Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - H)));
      e.style.setProperty('--p', p.toFixed(4));
      e.dataset.p = p;
    });
    wall.forEach(function (w) {
      var p = reduce ? 1 : +(w.e.dataset.p || 0);
      if (w.cv.width && w.p !== p) { w.p = p; drawWall(w, p); }
    });
  };
  addEventListener('resize', function () { wall.forEach(sizeWall); if (CH.onFrame) CH.onFrame(); });
})();
