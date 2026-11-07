/* 國際賑災站資料：結構照 environment_data.js。效果在 CH.R，六段隧道走 tunnel.js 的 route，下一站隧道走 match */
(function () {
  var T = function (zh, en) { return { zh: zh, en: en }; };
  var dd = function (zh, en) { return '<span class="zh">' + zh + '</span><span class="en" lang="en">' + en + '</span>'; };
  var otd = function (d) { var s = d.slice(0, 4) + '.' + d.slice(4, 6) + '.' + d.slice(6, 8); return { zh: '《慈濟歷史上的今天》' + s, en: 'Tzu Chi, On This Day, ' + s, url: 'https://tzuchiculture.org/tzuchi_60th_anniversary/onthisday/onthisday_' + d + '-1/' }; };
  var fm = function (n, t) { return { zh: '慈濟法脈資料庫 ' + n + '〈' + t + '〉', en: 'Tzu Chi Dharma Lineage Archive, no. ' + n }; };
  var xl = function (p) { return { zh: '《馬來西亞慈濟史 雪隆分會（一）》頁 ' + p, en: 'History of Tzu Chi Malaysia: KL & Selangor Branch, vol. 1, p. ' + p }; };

  var S = {
    o190322: otd('20190322'),
    o250928: otd('20250928'),
    nCfw: { zh: '慈濟全球網〈Cash-for-Work Brings Hope to Myanmar’s Disaster-Hit Communities〉', en: 'Tzu Chi Global: Cash-for-Work Brings Hope to Myanmar’s Disaster-Hit Communities', url: 'https://global.tzuchi.org/cash-for-work-brings-hope-to-myanmars-disaster-hit-communities' },
    nAceh: { zh: '慈濟全球網〈Families rebuild lives in North Aceh permanent housing village〉', en: 'Tzu Chi Global: Families rebuild lives in North Aceh permanent housing village', url: 'https://global.tzuchi.org/families-rebuild-lives-in-north-aceh-permanent-housing-village' },
    fm45: fm('00045', '艾爾西颱風，首次大型賑災'),
    fm54: fm('00054', '無緣大慈，同體大悲'),
    fm138: fm('00138', '哥奇颶風侵襲孟加拉'),
    fm140: fm('00140', '中國大陸華東、華中水患'),
    fm155: fm('00155', '蘇聯解體，蒙古糧荒'),
    fm224: fm('00224', '科索沃戰亂、土耳其強震'),
    fm259: fm('00259', '印尼雅加達水患，展開「五管齊下」'),
    fm282: fm('00282', '南亞大海嘯'),
    fm293: fm('00293', '美國卡崔娜颶風'),
    fm304: fm('00304', '慈濟國際人道援助會研發環保毛毯'),
    fm323: fm('00323', '緬甸納吉斯風災，帶動米撲滿'),
    fm324: fm('00324', '中國大陸汶川強震'),
    fm332: fm('00332', '菲律賓凱莎娜颱風，啟動「以工代賑」'),
    fm338: fm('00338', '巴基斯坦水患，慈濟研發福慧床'),
    fm339: fm('00339', '海地太子港強震'),
    fm345: fm('00345', '日本三一一複合式大災難'),
    fm363: fm('00363', '菲律賓海燕風災'),
    fm379: fm('00379', '尼泊爾強震，慈濟「返佛國、膚震殤」'),
    fm415: fm('00415', '莫三比克垃圾山倒塌'),
    fm468: fm('00468', '莫三比克分會獲准於當地註冊立案'),
    fm476: fm('00476', '馬來西亞四州水患'),
    o910519: otd('19910519'), o910715: otd('19910715'), o050924: otd('20050924'), o080504: otd('20080504'),
    o220224: otd('20220224'), o230211: otd('20230211'), o230220: otd('20230220'), o240223: otd('20240223'), o250330: otd('20250330'),
    i5: { zh: '慈濟六十週年影響力報告・跨越國界的慈悲行動', en: 'Tzu Chi 60th anniversary impact report: compassion across borders', url: 'https://60impact.tzuchi.org.tw/' },
    i36: { zh: '《慈濟六十週年影響力報告》頁 69–70', en: 'Tzu Chi 60th Anniversary Impact Report, pp. 69–70' },
    c15a: { zh: '《2015 慈濟永續報告書》頁 10', en: 'Tzu Chi Sustainability Report 2015, p. 10' },
    c15b: { zh: '《2015 慈濟永續報告書》頁 66', en: 'Tzu Chi Sustainability Report 2015, p. 66' },
    c16: { zh: '《2016–2017 慈濟永續報告書》頁 18–19', en: 'Tzu Chi Sustainability Report 2016–2017, pp. 18–19' },
    c18: { zh: '《2018–2019 慈濟永續報告書》頁 3', en: 'Tzu Chi Sustainability Report 2018–2019, p. 3' },
    c20: { zh: '《2020–2021 慈濟永續報告書》頁 108', en: 'Tzu Chi Sustainability Report 2020–2021, p. 108' },
    r20: { zh: '《慈濟 2020 年報》頁 1–2', en: 'Tzu Chi Annual Report 2020, pp. 1–2' },
    r21: { zh: '《慈濟 2021 年報》頁 5', en: 'Tzu Chi Annual Report 2021, p. 5' },
    tcm: { zh: '《慈濟月刊》第 704 期，2025.07.01', en: 'Tzu Chi Monthly, no. 704, 1 Jul 2025', url: 'https://tcmonthly.tzuchiculture.org.tw/?p=73239' },
    rice: { zh: '慈濟國際人道援助會〈一粒米中藏日月 靜思香積飯〉', en: 'Tzu Chi International Humanitarian Aid Association, on Jing Si instant rice', url: 'https://www.tzuchi-org.tw/tihaa/index.php/2015-11-20-07-05-36/2015-12-08-01-37-38/2015-12-08-01-37-41' },
    x43: xl('42'), x44: xl('43'), x45: xl('44'), x47: xl('46'), x280: xl('279–282'), x289: xl('288'), x292: xl('291'), x286: xl('285')
  };
  var CH = window.CH = { S: S };
  var SHANGREN = T('證嚴上人', 'Dharma Master Cheng Yen');
  var OTD = T('取自《慈濟歷史上的今天》。', 'From Tzu Chi, On This Day.');
  var cap = function (zh, en) { return T(zh + OTD.zh, en + ' ' + OTD.en); };

  /* 圖：ph 的尺寸照 PHS 登記，不改 ph/size.js；同時排進隧道清單 */
  var P = window.PHS = window.PHS || {};
  var SZ = {
    hero_r: [1600, 900], r_clip: [1024, 768], r_recv: [1024, 329], r_tdl: [1024, 752], r_grp: [1024, 576], r_kali: [1024, 782],
    r_plan: [1024, 747], r_wc: [1024, 576], r_haiti: [1024, 571], r_road: [1024, 588], r_card: [1024, 576], r_box2: [1024, 576],
    r_bed: [1024, 576], r_beds: [594, 404], r_vill: [1024, 576], r_ham: [1024, 752], r_panel: [922, 576], r_roof: [757, 414],
    r_sack: [1024, 461], r_scale: [675, 576], r_green: [1024, 576], r_mud: [432, 576]
  };
  Object.keys(SZ).forEach(function (k) { P[k] = SZ[k]; });
  P.relief_aceh = [424, 776]; P.relief_bamboo = [560, 300]; P.relief_blanket = [1040, 640]; P.relief_class = [640, 576]; P.relief_pack = [424, 300];
  window.RIVER_M = (window.RIVER_M || []).concat(Object.keys(SZ).filter(function (k) { return k !== 'hero_r'; }).map(function (k) { return [0, k, Math.round(SZ[k][0] / SZ[k][1] * 300)]; }));
  window.RIVER_M = window.RIVER_M.concat([[2023, 'r_fire', 692], [1991, 'r_box', 402], [1991, 'r_flood', 403], [1991, 'r_news', 409], [2005, 'r_ruin', 406], [2008, 'r_seed', 533], [2008, 'r_can', 533], [0, 'r_aceh', 164], [2025, 'r_bamboo', 560], [2025, 'r_pack', 424], [2025, 'r_class', 333], [0, 'r_blank', 487]]);

  CH.page = { key: 'relief', pre: 'r', title: '國際賑災｜那麼遠的人，我們也要管嗎？', still: 'hero_r', noDoor: 1, noFilm: 1, after: ['rnum', 'rall'] };

  CH.hero = {
    film: T('那麼遠的人，我們也要管嗎？', 'People so far away: are they ours to care for?'),
    stop: T('第五站', 'Fifth stop'), title: T('國際賑災', 'International Relief'),
    sub: T('一開始，善款是轉交出去的。<br>後來親手交到受災鄉親手上，再由當地人接著照顧當地人。', 'At first the donations were passed on through others.<br>Later they went hand to hand, and then local people took up the care of their own.'),
    watch: T('影片製作中', 'Film in production'), read: T('走這六段路', 'Walk the six stretches'),
    ai: T('莫三比克的路　局部　取自《慈濟歷史上的今天》', 'A road in Mozambique, detail, from Tzu Chi, On This Day')
  };

  CH.chapters = [
    {
      id: 'r1a', era: 'e90', y: '1991', nav: T('那麼遠的人', 'People so far away'), ask: T('那麼遠的人，我們也要管嗎？', 'People so far away: are they ours to care for?'),
      b: [
        {
          k: 'story', lay: 'R', date: '1991.05.24', h: T('鞋盒大小的捐款盒', 'Donation boxes the size of shoeboxes'),
          p: [
            T('慈善站走過一九六九年的臺東大南村，那是慈濟首次發起大型賑災。這一站從海外走起。', 'The charity stop walked through Danan Village, Taitung, in 1969, Tzu Chi’s first large relief effort. This stop begins overseas.'),
            T('一九九一年，熱帶氣旋哥奇襲擊孟加拉。五月十九日，慈濟美國分會、支會和聯絡處發起「援助孟加拉災民運動」。', 'In 1991 a tropical cyclone struck Bangladesh. On 19 May, Tzu Chi’s branches and liaison offices in the United States began a campaign to aid the survivors.'),
            T('五月二十四日下午，爾灣一家頂好超級市場門口，五位隊員穿著白上衣、牛仔褲，帶著兩個鞋盒大小的捐獻盒子和一張支架海報。事前去請示時，李老闆一口答應；見隊員站了很久，又送來剛出爐的包子和果汁。', 'On the afternoon of 24 May, outside a supermarket in Irvine, five members in white shirts and jeans stood with two donation boxes the size of shoeboxes and a poster on a stand. The owner, Mr Lee, had agreed at once when they asked; seeing them stand so long, he brought out freshly steamed buns and juice.'),
            T('六月二十五日，美國分會執行長黃正義代表捐出美金十五萬七千一百四十九元，交給國際紅十字會洛杉磯分會。這一次，善款是轉交出去的。', 'On 25 June, the US branch’s chief executive Huang Zhengyi gave US$157,149 to the Los Angeles chapter of the Red Cross. This time the donations were passed on through others.')
          ],
          q: { zh: '善事豈能不為。', en: 'How could anyone not do a good deed?', who: T('頂好超市李老闆', 'Mr Lee, supermarket owner') },
          q2: { zh: '當然大家都不習慣，尤其華人面子掛不下來，那是第一次我們學習上人的精神，學習佛陀拖缽的精神，學習什麼是無緣(大慈)，什麼是同體(大悲)。', en: 'Of course no one was used to it, and for Chinese people it was hard on one’s pride. That was the first time we learned the Master’s spirit, the spirit of the Buddha with his alms bowl, and learned what great kindness without ties and great compassion as one body mean.', who: T('黃思賢', 'Huang Sixian (Huang Zhengyi’s Dharma name)') },
          s: ['fm45', 'fm138', 'o910519'],
          ph: [{ i: 'r_clip', c: cap('當時的報紙剪報：美分會發起援助孟加拉災民行動（局部）。', 'Press clipping of the time on the US branch’s Bangladesh appeal, detail.') }, { i: 'r_recv', c: cap('紅十字會開給慈濟的收據（局部）。', 'The Red Cross receipt issued to Tzu Chi, detail.') }]
        },
        {
          k: 'rmap', d: '1991', h: T('線從臺灣畫出去', 'A line drawn out from Taiwan'),
          t: T('孟加拉那一次，善款經紅十字會轉交。同一年夏天，華中、華東大水，慈濟自己走了一趟：八月十一日到北京，八月十五日到安徽全椒勘災。', 'For Bangladesh, the donations went through the Red Cross. That same summer, when floods struck central and eastern China, Tzu Chi made the journey itself: Beijing on 11 August, and on 15 August to Quanjiao in Anhui to survey the damage.'),
          note: T('地圖為示意，只標地點，不是實際航線。', 'The map is an illustration. It marks places, not actual routes.'),
          s: ['fm138', 'fm140', 'o910715']
        },
        { k: 'quote', big: 1, zh: '佛教說「無緣大慈，同體大悲」，就是和我沒有關係的人，我也要去愛他、去關心他。', en: 'Buddhism speaks of great kindness without ties and great compassion as one body. It means that even people who have no connection with me, I should love them and care about them.', who: T('證嚴上人　二〇〇四年四月十六日，與菲律賓教育工作者座談', 'Dharma Master Cheng Yen, 16 April 2004, meeting educators from the Philippines'), s: ['fm54'] },
        {
          k: 'story', lay: 'L', date: '1991.07.15', h: T('要救的是無辜災民', 'Those to be saved are innocent people'),
          p: [
            T('一九九一年五、六月間，華中、華東洪澇，災情遍及十九個省份。七月十五日，證嚴上人來到彰化，公開呼籲委員發動賑災。', 'In May and June 1991, floods spread across nineteen provinces of central and eastern China. On 15 July, in Changhua, Dharma Master Cheng Yen publicly called on commissioners to begin a relief appeal.'),
            T('當時兩岸相對疏離，質疑和冷漠都有。慈善站講過這場募款；這一站要問的，是那些人從沒見過面，為什麼還要去。', 'Taiwan and the mainland were still distant then, and doubt and indifference were both real. The charity stop told of this appeal. The question here is why go at all, to people no one had ever met.')
          ],
          q: { zh: '賑災要救的是無辜災民，不是政黨；我們應以誠意感化民眾冷漠的心。', en: 'Relief is meant to save innocent survivors, not a political party. We should move people’s indifferent hearts with sincerity.', who: SHANGREN },
          s: ['o910715'],
          ph: [{ i: '19910715-1_08', c: cap('水淹村莊（局部）。', 'A flooded village, detail.') }, { i: '19910715-1_05', c: cap('華東賑災的募款箱（局部）。', 'Relief donation boxes for the eastern China floods, detail.') }]
        },
        { k: 'quote', zh: '我現在深深體會說，一粒米中藏日月，諸位了解我的意思嗎？這時候，一粒米大過須彌山。', en: 'I now deeply understand the saying that in one grain of rice lie the sun and moon. Do you all see what I mean? At a time like this, one grain of rice is greater than Mount Sumeru.', who: T('證嚴上人　一九九一年八月二十五日，臺北國父紀念館，慈濟榮譽董事聯誼會', 'Dharma Master Cheng Yen, 25 August 1991, Sun Yat-sen Memorial Hall, Taipei, at a gathering of Tzu Chi honorary board members'), s: ['o910715'] }
      ]
    },
    {
      id: 'r2a', era: 'e90', y: '1991–1993', nav: T('親手交到手上', 'Hand to hand'), ask: T('錢交出去，就算幫到了嗎？', 'Once the money is handed over, has anyone been helped?'),
      b: [
        {
          k: 'story', lay: 'R', date: '1991.08', h: T('走進陌生的制度', 'Into an unfamiliar system'),
          p: [
            T('一九九一年八月，第一批勘災人員從臺北出發，經北京、安徽，到全椒災區。臨行前，證嚴上人不斷叮嚀；王端正後來回憶，那句話是：「是我們自願要去的喔，凡事要忍喔。」', 'In August 1991 the first survey team set out from Taipei, through Beijing and Anhui, to the disaster area in Quanjiao. Before they left, Dharma Master Cheng Yen reminded them again and again. Wang Duanzheng later recalled her words: “We are going of our own accord. Bear with everything.”'),
            T('在陌生的體制裡，慈濟一邊守住「直接將賑災物資送達災民手中的大原則」，一邊「尊重對方的體制及法令，並懷抱最感恩的心態」。', 'Inside an unfamiliar system, Tzu Chi held to “the great principle of delivering relief goods directly to survivors” while “respecting the other side’s system and laws, with a heart of deepest gratitude.”')
          ],
          q: { zh: '在初步接觸的那種心情，老實說有一點害怕，有一點猶豫，有點不確定感。', en: 'In those first contacts, honestly, I felt a little afraid, a little hesitant, a little unsure.', who: T('王端正', 'Wang Duanzheng') },
          s: ['fm140', 'o910715'],
          ph: [{ i: 'r_tdl', c: cap('當時的《慈濟道侶》（局部）。', 'Tzu Chi Companions of the time, detail.') }]
        },
        {
          k: 'rroll', d: '1991', h: T('一行一行勾下去', 'Ticked off line by line'),
          t: T('災戶先造冊，再按名冊逐一濟助。', 'Households were listed first, then helped one by one from the list.'),
          q: { zh: '目前大陸方面已答應將災戶造冊，好讓我們能夠按照名冊逐一對災戶做真正的濟助──這是慈濟一向的「直接救濟」作風。', en: 'The mainland side has now agreed to compile a register of affected households, so that we can give true help to each household according to the list. This is Tzu Chi’s long-standing way of direct relief.', who: SHANGREN },
          note: T('示意。名冊真名不公開。', 'Illustration. Real names on the lists are not made public.'),
          s: ['fm140']
        },
        {
          k: 'story', lay: 'L', date: '1991.10', h: T('天氣已經涼了', 'The weather had already turned cold'),
          p: [
            T('十月，全椒第一次發放，送上救助金和禦寒衣物。衛生衣是臨時買的，顏色不一，沒有標幟，志工要自己燙上去。', 'In October came the first distribution in Quanjiao: relief money and warm clothing. The thermal undershirts were bought at short notice in mixed colours and carried no emblem, so volunteers ironed it on themselves.'),
            T('發放時，有官員一直催老人家快一點。林勝勝師姊把年長的受災鄉親當成自己的母親，在一旁勸著。', 'During the distribution, officials kept urging the elderly to hurry. Volunteer Lin Shengsheng, who saw the elderly survivors as her own mother, spoke up beside them.')
          ],
          q: { zh: '那時候天氣已經涼了，那，上人說臨時買個衛生衣。……把標幟，燙在我們的衛生衣上面。', en: 'The weather had already turned cold, so the Master said to buy thermal undershirts at short notice. … We ironed the emblem onto the undershirts.', who: T('許玉摘', 'Xu Yuzhai') },
          q2: { zh: '我在旁邊我就說不急、不急、慢慢來、慢慢來。結果我這樣講了幾次之後，他們的領導也跟著我說，不急、不急、慢慢來。', en: 'Standing beside them I said, no hurry, no hurry, take your time, take your time. After I had said it a few times, their leader began saying it with me: no hurry, no hurry, take your time.', who: T('林勝勝', 'Lin Shengsheng') },
          s: ['o910715'],
          ph: [{ i: '19910715-1_03', c: cap('報上的「一粒米中藏日月」（局部）。', 'A newspaper headline with the phrase on a grain of rice, detail.') }]
        },
        {
          k: 'story', date: '1992.01.04', h: T('這個房子是您的', 'This house is yours'),
          p: [
            T('財產、房子、農田全被洪水沖光，受災鄉親成了無家可歸的「三光戶」。一九九二年一月四日，全椒慈濟村舉行啟用移交，王端正把證件交到村民手上。', 'Belongings, houses and fields had all been swept away, and survivors became homeless households left with nothing. On 4 January 1992, at the handover of the Tzu Chi village in Quanjiao, Wang Duanzheng placed the papers in villagers’ hands.'),
            T('同年六月六日，二十九個慈濟村 1513 戶領到「土地使用證」及「房屋所有權證」。蓋好房子只是一半，住的人要站得穩，那張紙也要交到手上。', 'On 6 June that year, 1,513 households in 29 Tzu Chi villages received land-use certificates and house ownership certificates. Building was only half the work. For people to stand firm, that sheet of paper had to reach their hands as well.')
          ],
          q: { zh: '這是房屋所有權證，房屋是您的。這裡，土地使用證，你要保管好，不能夠轉讓，不要賣掉。', en: 'This is the house ownership certificate. The house is yours. And here is the land-use certificate. Keep it safe. It cannot be transferred. Do not sell it.', who: T('王端正', 'Wang Duanzheng') },
          s: ['o910715', 'fm140']
        },
        {
          k: 'story', h: T('這一路定下的五個詞', 'Five words settled along the way'),
          p: [T('法脈把華東這一次，記為建立賑災原則的起點。五個詞的次序，照法脈原文。', 'The Dharma Lineage Archive records the eastern China floods as where the relief principles were set. The order of the five words follows that record.')],
          s: ['fm140']
        },
        { k: 'five', items: [T('直接', 'Direct'), T('重點', 'Focused'), T('尊重', 'Respectful'), T('及時', 'Timely'), T('務實', 'Practical')] },
        {
          k: 'story', date: '1993.01.01', h: T('三架小飛機來回三次', 'Three small planes, back and forth three times'),
          p: [
            T('一九九二年八月七日，外蒙紅十字會蘇拉會長到花蓮懇請援助。慈濟籌辦 39 噸生活物資，分 9 架次運抵烏蘭巴托：三架小飛機來回三次，三天內全部運到。志工在當地接應物資、把發放名單造冊。', 'On 7 August 1992, the president of the Mongolian Red Cross came to Hualien to ask for help. Tzu Chi gathered 39 tonnes of daily supplies and flew them to Ulaanbaatar in 9 flights: three small planes went back and forth three times, and all of it arrived within three days. Volunteers on the ground received the goods and compiled the distribution lists.'),
            T('發放在一九九三年元旦。法脈將蒙古援助稱為首次親赴、親手發放的國際援救；大陸賑災另依其原有章節敘述。', 'The distribution took place on New Year’s Day 1993. The Dharma Lineage Archive calls the Mongolia aid the first international relief delivered in person and by hand; the mainland relief is told in its own chapter.')
          ],
          s: ['fm155']
        }
      ]
    },
    {
      id: 'r3a', era: 'e00', y: '2002–2022', nav: T('一站一站走出去', 'One stop at a time'), ask: T('每一站都一樣嗎？', 'Was every stop the same?'),
      b: [
        {
          k: 'rworld', h: T('點一站，看那裡發生的事', 'Tap a stop to see what happened there'),
          t: T('每個地方的災難不同，要做的事也不同。這六站只是其中幾站，不是全部。', 'Every disaster was different, and so was the work. These six are only some of the stops, not all of them.'),
          st: [
            {
              y: '2002', at: [106.8, -6.2], n: T('雅加達', 'Jakarta'), h: T('紅溪河邊的五件事', 'Five tasks beside the Red River'), i: 'r_kali', c: cap('紅溪河，船頭（局部）。', 'The Kali Angke, from the bow of a boat, detail.'),
              p: [
                T('二〇〇二年雅加達大水。在紅溪河的卡布莫拉村，抽水、清掃、消毒、義診、建屋要同時進行，「不能分先後次序來做」。', 'Floods struck Jakarta in 2002. In Kapuk Muara beside the Kali Angke, pumping, cleaning, disinfecting, free clinics and house building had to go on together, and “could not be done one after another.”'),
                T('金卡蓮大愛村二〇〇二年七月動工，五十五棟五層樓公寓，二〇〇三年七月起 1100 戶分批遷入，並為信仰伊斯蘭教的居民設計了祈禱室和往生大體淨身處理室。', 'The Great Love Village at Cengkareng began in July 2002: 55 five-storey blocks. From July 2003, 1,100 households moved in by stages, and prayer rooms and rooms for washing the dead were designed for Muslim residents.')
              ],
              s: ['fm259']
            },
            {
              y: '2004', at: [95.3, 5.5], n: T('亞齊', 'Aceh'), h: T('海嘯之後的屋頂', 'Roofs after the tsunami'), i: 'relief_aceh', c: T('亞齊大愛屋（局部）。', 'A Great Love house in Aceh, detail.'),
              p: [
                T('二〇〇四年十二月二十六日南亞大海嘯，東南亞的慈濟志工第一時間趕到。隔年一月八日，慈濟定下以班達亞齊和斯里蘭卡漢班托塔為援助重點。', 'When the tsunami struck on 26 December 2004, Tzu Chi volunteers in Southeast Asia reached the area at once. On 8 January the next year, Tzu Chi set Banda Aceh and Hambantota in Sri Lanka as its focus.'),
                T('二〇〇五年十二月二十六日，班達亞齊大愛一村首批 160 戶交屋，亞齊總計興建 2,568 戶。二〇〇六年四月十日，漢班托塔第一期 649 戶交屋。第六段再講馬來西亞在這場災難裡做了什麼。', 'On 26 December 2005, the first 160 households in Banda Aceh’s Great Love Village No. 1 received their homes; 2,568 were built in Aceh in all. On 10 April 2006, 649 homes in the first phase at Hambantota were handed over. The sixth stretch tells what Malaysia did in this disaster.')
              ],
              s: ['fm282', 'o050924']
            },
            {
              y: '2008', at: [104, 31], n: T('汶川', 'Wenchuan'), h: T('四天半的教室', 'A classroom in four and a half days'), i: 'r_wc', c: T('四川，從空中看（局部）。取自《慈濟歷史上的今天》。', 'Sichuan from the air, detail. From Tzu Chi, On This Day.'),
              p: [
                T('二〇〇八年汶川強震後，慈濟在羅江縣金山鎮設賑災定點。上人憶及九二一的經驗：「只要四天半就能建設起簡易教室，讓師生持續上課、學習」。', 'After the Wenchuan earthquake of 2008, Tzu Chi set up a relief base in Jinshan, Luojiang County. The Master recalled the 1999 Taiwan earthquake: “In just four and a half days a simple classroom can be built, so teachers and students can keep on learning.”'),
                T('後來援建十三所學校、九十一戶大愛屋，二〇一〇年十一月十九日在洛水中學校區聯合交付。', 'Thirteen schools and 91 Great Love homes followed. The joint handover was held at the Luoshui Middle School campus on 19 November 2010.')
              ],
              s: ['fm324']
            },
            {
              y: '2010', at: [-72.3, 18.5], n: T('海地', 'Haiti'), h: T('市場不穩，就改發糧', 'When the market failed, pay in food'), i: 'r_haiti', c: cap('海地地震後的房屋（局部）。', 'A house after the Haiti earthquake, detail.'),
              p: [
                T('二〇一〇年海地強震。二月八日，賑災團與泰巴爾市神之恩典教會合作啟動「以工代賑」。一週後，當地市場經濟不穩定，改成「以工供糧」。', 'The Haiti earthquake struck in 2010. On 8 February the relief team began cash for work with a church in Tabarre. A week later, because the local market was unstable, the plan became food for work.'),
                T('三月二十七日起，舉辦正式的本土志工培訓。', 'From 27 March, formal training for local volunteers began.')
              ],
              s: ['fm339']
            },
            {
              y: '2011', at: [141.9, 39.3], n: T('日本', 'Japan'), h: T('想去買壽司', 'Wanting to buy sushi'), i: 'r_road', c: T('二〇一一年，車窗外的路牌（局部）。取自《慈濟歷史上的今天》。', 'A road sign seen from a car window, 2011, detail. From Tzu Chi, On This Day.'),
              p: [
                T('二〇一一年六月九日到十二日，首梯見舞金發放在岩手縣釜石、陸前高田。慈濟是直接發放現金。後來十梯共發 96,974 戶，志工 4,283 人次。', 'From 9 to 12 June 2011, the first round of condolence money went out in Kamaishi and Rikuzentakata, Iwate. Tzu Chi gave cash directly. Over ten rounds it reached 96,974 households, with 4,283 volunteer attendances.')
              ],
              q: { zh: '我終於可以去買壽司了。', en: 'At last I can go and buy sushi.', who: T('一位老先生', 'An elderly man') },
              s: ['fm345']
            },
            {
              y: '2022', at: [16.9, 52.4], n: T('波蘭', 'Poland'), h: T('一張卡，自己去買', 'A card, to buy what one needs'), i: 'r_card', c: T('援助烏克蘭難民的卡片（局部）。取自《慈濟歷史上的今天》。', 'A card for Ukrainian refugees, detail. From Tzu Chi, On This Day.'),
              p: [
                T('波蘭原本沒有慈濟據點。二〇二二年三月五日，慈濟在波茲南完成在波蘭的首場發放，由購物卡走到現值卡。', 'Tzu Chi had no base in Poland. On 5 March 2022 it held its first distribution there, in Poznań, moving from shopping cards to cash-value cards.'),
                T('二〇二三年起，波茲南開職能課程、奧坡雷開波蘭語課程；二〇二四年起發醫療卡。漢娜說，餃子同樂會「是提供一個場地，讓他們接觸別人交流經驗」。', 'From 2023, job-skills courses began in Poznań and Polish lessons in Opole; from 2024, medical cards. Hanna said the dumpling gatherings were “to give them a place to meet others and share their experience.”')
              ],
              q: { zh: '如果我們給他一張卡，讓他們可以自己去買需要的東西，至少他可以滿足他自己基本所有的需求。', en: 'If we give them a card so they can go and buy what they need themselves, at least they can meet all their own basic needs.', who: T('張淑兒', 'Zhang Shu’er') },
              s: ['o220224']
            }
          ],
          s: []
        },
        { k: 'photos', ph: [{ i: 'r_plan', c: cap('手和規劃圖（局部）。', 'A hand on a site plan, detail.') }, { i: 'r_ham', c: cap('斯里蘭卡大愛村的屋子（局部）。', 'A house in a Great Love Village in Sri Lanka, detail.') }, { i: '20050924-1_01', c: cap('亞齊，海嘯後的廢墟（局部）。', 'Aceh, ruins after the tsunami, detail.') }] }
      ]
    },
    {
      id: 'r4a', era: 'e00', y: T('現場', 'On site'), nav: T('到了現場', 'On site'), ask: T('到了現場，每天做什麼？', 'Once there, what is done each day?'),
      b: [
        { k: 'quote', zh: '那個地方在受難，我們既然去到那裡，就是表示說我要來跟你共甘同苦。', en: 'That place is suffering. Since we have gone there, it means I have come to share your joys and hardships with you.', who: SHANGREN, s: ['o910715'] },
        {
          k: 'rflow', d: dd('研究歸納', 'Our summary'), h: T('一粒米走到手上', 'How a grain of rice reaches a hand'),
          t: T('一場賑災的工作，整理下來大約是這十格。每一格舉一個實例。', 'The work of one relief effort comes to about these ten steps. Each has one real example.'),
          items: [
            { h: T('通報協調', 'Alert and coordinate'), t: T('二〇一五年尼泊爾強震，花蓮本會成立賑災協調中心，彙整訊息。', 'After the 2015 Nepal earthquake, a relief coordination centre was set up in Hualien to gather information.') },
            { h: T('勘災合規', 'Survey and comply'), t: T('一九九九年土耳其地震，志工先到市政府緊急協調中心告知援助項目，「為了怕資源重疊」。', 'After the 1999 Turkey earthquake, volunteers first told a city emergency centre what they planned, “for fear of overlapping aid.”') },
            { h: T('家訪造冊', 'Visit and list'), t: T('二〇一八年莫三比克，志工來回多次與國家緊急救難中心核對受災名單。', 'In Mozambique in 2018, volunteers went back and forth to check the list of affected people with the national emergency centre.') },
            { h: T('採購打包', 'Buy and pack'), t: T('二〇二三年土耳其賑災，內湖打包物資，林新益在現場指導：「都要分類分好，要一箱一箱裝。」', 'Packing for Turkey at Neihu in 2023, Lin Xinyi directed on site: “Everything must be sorted properly and packed box by box.”') },
            { h: T('運送接應', 'Carry and receive'), t: T('一九九三年外蒙，三架小飛機來回三次，志工在當地接應物資。', 'For Mongolia in 1993, three small planes went back and forth three times, and volunteers received the goods on the ground.') },
            { h: T('現場發放', 'Hand over'), t: T('二〇二三年土耳其，在滿納海國際學校連續舉辦七場發放。', 'In Turkey in 2023, seven distributions in a row were held at the El Menahil International School.') },
            { h: T('熱食醫療', 'Hot meals and care'), t: T('二〇一五年尼泊爾，勘災醫療團分組義診；巴塔普區提供熱食，教當地以工代賑的香積志工煮香積飯。', 'In Nepal in 2015, the survey and medical team held free clinics. In Bhaktapur hot meals were served, and local cash-for-work kitchen volunteers learned to cook instant rice.') },
            { h: T('以工代賑', 'Cash for work'), t: T('二〇一三年海燕風災，上人慈示「以工代賑」是救濟而非僱用；獨魯萬市安妮伯鎮啟動。', 'After Typhoon Haiyan in 2013, the Master made clear that cash for work is relief, not employment. It began in Anibong, Tacloban.') },
            { h: T('安居復學', 'Shelter and school'), t: T('二〇一五年十月，尼泊爾展開偏鄉學校簡易教室援建。', 'In October 2015, simple classrooms for rural schools began going up in Nepal.') },
            { h: T('長期陪伴', 'Stay and pass on'), t: T('二〇一五年六月二十七日，尼泊爾有了本土志工首次主導的發放。', 'On 27 June 2015, Nepal saw its first distribution led by local volunteers.') }
          ],
          note: T('這十格是研究歸納，不是慈濟公布的固定流程。每場災難不一定照這個次序，也不一定十格都有。', 'These ten steps are our own summary, not a fixed process published by Tzu Chi. Not every disaster follows this order or has all ten.'),
          s: ['fm379', 'fm224', 'fm415', 'o230220', 'fm155', 'o230211', 'fm363']
        },
        {
          k: 'rflip', h: T('五件帶去現場的東西', 'Five things carried to the field'), t: T('點一下卡片，翻到背面看規格和來歷。', 'Tap a card to turn it over for its details and history.'),
          items: [
            { n: T('福慧床', 'Fu Hui bed'), i: 'r_bed', b: T('這裡說的是二〇一四年這一代：僅 15 公斤，展開長 202.1、寬 75、高 28 公分，收合約 13.3×75×61.3 公分，承重 150 公斤以上，不需螺絲扳手。二〇一四年二月在菲律賓海燕災區發放，是問世後首次用於國際賑災。', 'This is the 2014 model: only 15 kg; 202.1 × 75 × 28 cm open, about 13.3 × 75 × 61.3 cm folded; holds over 150 kg; no screws or spanners. Distributed in the Typhoon Haiyan area in February 2014, its first use in international relief.'), s: ['fm338'] },
            { n: T('香積飯', 'Jing Si instant rice'), art: 'bag', b: T('把白米變成沖泡式乾燥飯，不是自熱包。只要有乾淨水即能沖泡，用冷開水也可以。', 'White rice made into a dried rice that is soaked, not a self-heating meal. Clean water is all it needs, and even cold water works.'), s: ['c15b', 'c20', 'rice'] },
            { n: T('環保毛毯', 'Eco blanket'), art: 'blanket', b: T('二〇〇六年九月三十日，人援會呈上回收綠色保特瓶製成的長纖毛毯；二〇〇七年四月首次用於國際賑災，送到菲律賓的火災受災鄉親手上。', 'On 30 September 2006, a long-fibre blanket made from recycled green plastic bottles was presented to the Master. In April 2007 it was first used in international relief, for fire survivors in the Philippines.'), s: ['fm304'] },
            { n: T('簡易組合屋', 'Simple prefab house'), art: 'house', b: T('二〇一〇年送到海地的版本：一座約四十公斤，搭配墊高板，一至一個半小時搭好。圖為示意。', 'The version sent to Haiti in 2010: about 40 kg each, used with a raised floor panel, and up in one to one and a half hours. The drawing is an illustration.'), s: ['fm338'] },
            { n: T('現值卡', 'Cash-value card'), art: 'card', b: T('法脈記二〇〇五年美國卡崔娜颶風時，慈濟首次發放現值卡。圖為示意。', 'The Dharma Lineage Archive records that Tzu Chi first gave out cash-value cards after Hurricane Katrina in 2005. The drawing is an illustration.'), s: ['fm293'] }
          ]
        },
        { k: 'photos', ph: [{ i: 'relief_blanket', c: T('毛毯交到手上（局部）。取自《慈濟六十週年影響力報告》。', 'A blanket passed into waiting hands, detail. From the Tzu Chi 60th Anniversary Impact Report.') }, { i: 'r_beds', c: cap('緬甸，收起來的福慧床（局部）。', 'Myanmar, Fu Hui beds folded and stacked, detail.') }, { i: 'r_box2', c: cap('尼泊爾賑災的物資箱（局部）。', 'Relief boxes for Nepal, detail.') }, { i: 'r_scale', c: cap('內湖，過磅的箱子（局部）。', 'Neihu, a box on the scale, detail.') }] }
      ]
    },
    {
      id: 'r5a', era: 'e20', y: '2008–2025', nav: T('鄉親接力付出', 'Local people carry it on'), ask: T('志工走了以後呢？', 'And after the volunteers leave?'),
      b: [
        {
          k: 'story', lay: 'R', date: '2009.10', h: T('這裡是我們自己居住的地方', 'This is where we ourselves live'),
          p: [
            T('二〇〇九年凱莎娜颱風重創菲律賓。十月一日起，慈濟在馬利僅那市啟動「以工代賑」，請居民一起清除淤泥，每人每天工資四百塊菲幣，到十月十八日告一段落，人數突破八萬人次。', 'Typhoon Ketsana struck the Philippines in 2009. From 1 October, Tzu Chi began cash for work in Marikina, inviting residents to clear the mud at 400 pesos a person a day. It ended on 18 October, having passed 80,000 attendances.'),
            T('後來在馬蘭代里，曾經以工代賑的三百位居民主動向志工表示，要捐出一日工資做志工。', 'Later in Malanday, 300 residents who had worked in the programme came forward to give up one day’s pay and serve as volunteers.')
          ],
          q: { zh: '我們不領錢，因為這裡是我們自己居住的地方。', en: 'We won’t take the money, because this is where we ourselves live.', who: T('Roy，馬蘭代里居民', 'Roy, a Malanday resident') },
          s: ['fm332']
        },
        {
          k: 'story', lay: 'L', date: '2008–2013', h: T('慈悲的財產', 'An inheritance of compassion'),
          p: [
            T('二〇〇八年五月，納吉斯風災之後，慈濟動員泰國、馬來西亞、臺灣志工和人醫會前往勘災。同年七月起發放稻種與肥料，幫助一萬五千英畝農田延續耕作。', 'In May 2008, after Cyclone Nargis, Tzu Chi sent volunteers from Thailand, Malaysia and Taiwan with its medical association to survey the damage. From July that year it gave out rice seed and fertiliser, helping 15,000 acres of farmland keep being farmed.'),
            T('兩位農民受到感動，開始日存一把米助人，帶動十五個村莊儲存「米撲滿」。二〇一三年七月二十七日，慈濟緬甸聯絡處成立。', 'Two farmers were moved to set aside a handful of rice each day for others, and fifteen villages took up the rice bank. On 27 July 2013, the Tzu Chi Myanmar liaison office was founded.')
          ],
          q: { zh: '上人如果給我一千塊，很快就會用完了。但是感恩上人給我的是慈悲的財產，一輩子都用不完。', en: 'If the Master had given me a thousand, it would soon have been spent. But I am grateful that what she gave me is an inheritance of compassion that a lifetime cannot use up.', who: T('烏丁屯，緬甸志工', 'A volunteer in Myanmar') },
          s: ['o080504', 'fm323'],
          ph: [{ i: '20080504-1_24', c: cap('緬甸的稻田（局部）。', 'A rice field in Myanmar, detail.') }, { i: '20080504-1_22', c: cap('一把米放進罐子（局部）。', 'A handful of rice going into a jar, detail.') }]
        },
        {
          k: 'story', lay: 'R', date: '2025.03.28', h: T('存米的孩子', 'The child who saved rice'),
          p: [
            T('二〇二五年三月二十八日，緬甸發生規模 7.7 地震。慈濟在震後六個月內，陸續協助 83 所學校完成 247 間簡易教室的援建。', 'A magnitude 7.7 earthquake struck Myanmar on 28 March 2025. Within six months, Tzu Chi helped 83 schools complete 247 simple classrooms.'),
            T('代賑金交到受災的人手上。薩雷寺院學校的師生，也響應存起米撲滿。十七年前的那一把米，還在這片土地上傳著。', 'Cash-for-work pay reached people who had lost much. At a monastery school, teachers and students took up the rice bank too. The handful of rice from seventeen years before was still being passed along in this land.')
          ],
          q: { zh: '地震時，我的妻子傷到了頭和腳，領到代賑金之後，我會帶她去就醫。', en: 'In the earthquake my wife was hurt in the head and feet. Once I have my relief pay, I will take her to the doctor.', who: T('郭昂國勒，參與以工代賑的居民', 'A resident in the cash-for-work programme') },
          q2: { zh: '能夠布施幫助他人，這個概念我很喜歡，所以我才會存米。', en: 'Being able to give and help others: I really like that idea. That is why I save rice.', who: T('密內，學生', 'A student') },
          s: ['o250330', 'tcm'],
          ph: [{ i: 'r_green', c: cap('二〇二五年，緬甸倒塌的樓房（局部）。', 'Myanmar, 2025, a collapsed building, detail.') }, { i: 'relief_class', c: T('緬甸的教室（局部）。', 'A classroom in Myanmar, detail.') }, { i: 'relief_pack', c: T('緬甸，分米（局部）。', 'Myanmar, dividing rice, detail.') }]
        },
        {
          k: 'rrelay', d: '2012–2025', h: T('棒子交到當地人手上', 'The baton passes to local hands'),
          t: T('線從外來的志工手上，慢慢移到當地人手上。', 'The line moves slowly from visiting volunteers to local hands.'),
          q: { zh: '第一步最艱難，但一定要堅持自己的腳步。', en: 'The first step is the hardest, but you must keep to your own stride.', who: T('潘明水，南非慈濟志工', 'Pan Mingshui, Tzu Chi volunteer in South Africa') },
          items: [
            { y: '2012', n: T('麥奎爾‧諾沙，莫三比克', 'Migual Neusa, Mozambique'), a: .12, t: T('「原本不懂我為何要來慈濟學習，如今我卻真正的明白，身為當地人，我更該向慈濟學習如何幫助當地人。」', '“I did not understand why I had come to learn from Tzu Chi. Now I truly see: as a local person, I should learn from Tzu Chi how to help local people.”') },
            { y: '2021', n: T('羅玉珍，受災戶', 'Luo Yuzhen, flood survivor'), a: .34, t: T('二〇二一年底水災，志工到家裡打掃。她捐出五十令吉：「雖然我的生活不好，與其伸手向人拿錢，不如我出錢幫助人。」', 'After the floods of late 2021, volunteers helped clean her home. She gave fifty ringgit: “My life is not easy, but rather than hold out my hand for money, I would sooner give money to help others.”') },
            { y: '2023', n: T('傑內德，土耳其', 'A volunteer in Turkey'), a: .56, t: T('滿納海的老師和校友自發組團，用英語、土耳其語、阿拉伯語當橋梁。「我同時也是慈濟志工，知道發放的內涵與造冊流程」。', 'Teachers and graduates of El Menahil formed their own group and served as a bridge in English, Turkish and Arabic. “I am also a Tzu Chi volunteer, and I know what distributions mean and how the lists are compiled.”') },
            { y: '2025', n: T('庫拉大愛村，莫三比克', 'Cura Great Love Village, Mozambique'), a: .78, t: T('居民參與營造，也培養就業技能。伊代氣旋後的四個大愛村，到 2025 年 6 月 11 日已建成 867 棟交付使用，這一輪庫拉有 171 戶入住。', 'Residents took part in the building and gained skills for work. In the four Great Love Villages after Cyclone Idai, 867 homes had been completed and handed over by 11 June 2025; in this round at Cura, 171 households moved in.') }
          ],
          note: T('這幾位是各自走到這一步的。不是每個受過幫助的人都要這樣走。', 'Each of them came to this in their own way. Not everyone who has been helped needs to walk this path.'),
          s: ['fm468', 'x289', 'o230211', 'tcm']
        },
        { k: 'photos', ph: [{ i: 'r_sack', c: cap('莫三比克，印著 Love from Taiwan 的米袋（局部）。', 'Mozambique, rice sacks marked Love from Taiwan, detail.') }, { i: 'r_vill', c: cap('莫三比克，從空中看大愛村（局部）。', 'Mozambique, a Great Love Village from the air, detail.') }, { i: 'r_roof', c: cap('緬甸，屋架上的鐵皮（局部）。', 'Myanmar, roofing sheets on a frame, detail.') }, { i: 'r_panel', c: cap('緬甸，抬起牆板（局部）。', 'Myanmar, lifting a wall panel, detail.') }] }
      ]
    },
    {
      id: 'r6a', era: 'my', y: T('馬來西亞', 'Malaysia'), nav: T('在馬來西亞', 'In Malaysia'), ask: T('我們馬來西亞呢？', 'And Malaysia?'),
      b: [
        {
          k: 'rties', d: dd('四種角色', 'Four roles'), h: T('從馬來西亞牽出去的線', 'Lines drawn out from Malaysia'),
          t: T('馬來西亞不只是受災的地方，也是出發的地方。截至 2023 年 3 月，雪隆慈濟人參與逾三十多場國際災難援助。', 'Malaysia is not only a place where disaster strikes. It is also a place people set out from. As of March 2023, Tzu Chi members in Selangor and Kuala Lumpur had joined more than thirty international disaster relief efforts.'),
          note: T('地圖為示意，只標幾個案例，不是全部，也不是實際路線。', 'The map is an illustration. It marks a few cases, not all of them, and not actual routes.'),
          s: ['x47', 'x43', 'x44', 'fm379', 'o240223', 'tcm']
        },
        {
          k: 'story', lay: 'R', date: dd('一　國內現場', 'One: at home'), h: T('水來的時候', 'When the water came'),
          p: [
            T('二〇〇四年海嘯那天，馬來西亞的慈濟人兵分三路。一大早緊急召開救援小組，攤開地圖研究路徑；當天就供應熱食，並發放應急金予罹難者家屬。', 'On the day of the 2004 tsunami, Tzu Chi members in Malaysia split into three groups. They met urgently at dawn and spread out a map to study the roads. That same day they brought hot food and gave emergency money to bereaved families.'),
            T('二〇二一年初水患正逢動管令，志工改為逐戶發放和小場次發放，截至 2 月 19 日，各項協助共 3,122 戶次受惠。', 'The floods of early 2021 came under movement controls, so volunteers went from door to door and held small sessions. By 19 February, assistance of all kinds had reached 3,122 household visits.'),
            T('同年年底雪隆大水是另一場災難。志工向居民借了三艘小船，又用七噸大型軍用卡車把熱食送進去；一位榴漣攤主允准攤位做大清掃的臨時行動中心；一位外送員號召同行，把熱食送到偏遠地區的受災鄉親手中。之後依名冊登門訪查，把資料輸入 Zoho 系統，其中還有兩百多筆名單差異，包括重複造冊、查無此人。', 'The great Selangor flood at the end of that year was a separate disaster. Volunteers borrowed three small boats from residents and rode a seven-tonne army truck to bring in hot meals. A durian stall owner lent his stall as a temporary centre for the big clean-up. A delivery rider rallied fellow riders to carry meals to remote survivors. Then volunteers visited homes from the lists and entered the data in Zoho; more than two hundred entries still differed, including duplicates and people who could not be found.')
          ],
          ph: [{ i: 'r_mud', c: T('二〇二一年底水患退去，泡過水的傢俱堆在路邊（局部）。攝影：林振勝。取自《馬來西亞慈濟史 雪隆分會（一）》。', 'After the floods of late 2021, soaked furniture piled by the road, detail. Photo: Lin Zhensheng. From History of Tzu Chi Malaysia: KL & Selangor Branch, vol. 1.') }],
          s: ['fm282', 'fm476', 'x280', 'x286', 'x292']
        },
        {
          k: 'story', lay: 'T', date: dd('二　海外協調', 'Two: coordinating overseas'), h: T('趕往斯里蘭卡', 'Hurrying to Sri Lanka'),
          p: [
            T('海嘯之後，慈濟在泰國曼谷、印尼雅加達、馬來西亞檳城成立救災指揮中心。', 'After the tsunami, Tzu Chi set up relief command centres in Bangkok, Jakarta and Penang.'),
            T('馬六甲分會的劉濟雨 12 月 29 日趕往斯里蘭卡，負起災後總協調的工作；新馬兩地持續支援醫護、訪視、文字與攝影等人力，分批前往，帶動在地志工居家訪視。', 'Liu Jiyu of the Malacca branch hurried there on 29 December to take on overall coordination after the disaster. Both countries kept sending medical, home-visit, writing and photography volunteers in turns, who led local volunteers in visiting homes.')
          ],
          s: ['fm282', 'x44', 'x45']
        },
        {
          k: 'story', lay: 'T', date: dd('三　動員資金與專長', 'Three: funds and skills'), h: T('募款，也教手藝', 'Raising funds, teaching a craft'),
          p: [
            T('二〇〇一年印度大地震，劉濟雨主動爭取由馬來西亞和新加坡承擔災後重建經費籌募。其間動員 8,716 人次志工，與法國關懷組織（Care France）合作，援建 227 間大愛屋，二〇〇二年十月二十三日揭碑。', 'After the 2001 India earthquake, Liu Jiyu asked that Malaysia and Singapore take on raising the funds for rebuilding. The effort drew 8,716 volunteer attendances, and with Care France it built 227 Great Love homes, unveiled on 23 October 2002.'),
            T('二〇一五年尼泊爾強震，六月六日到十日，馬來西亞慈濟志工組成簡易教室組裝團隊，搭起樣品屋，讓承包商學習工法。', 'After the 2015 Nepal earthquake, from 6 to 10 June, Malaysian volunteers formed a team to assemble simple classrooms and put up a sample building so that contractors could learn the method.'),
            T('二〇二五年緬甸地震，物資有馬來西亞空軍運送的接力。馬來西亞志工 5 月 15 日起帶動當地 4 個承包商和以工代賑志工，至 6 月 15 日完成 87 間簡易教室與簡易屋。', 'After the 2025 Myanmar earthquake, the Royal Malaysian Air Force took part in carrying supplies. From 15 May, Malaysian volunteers worked with 4 local contractors and cash-for-work volunteers, and by 15 June had completed 87 simple classrooms and shelters.')
          ],
          note: T('87 間是馬來西亞志工截至 6 月 15 日的進度，已含在全案之中，不是另一個總數。', 'The 87 is the Malaysian volunteers’ progress up to 15 June. It is part of the whole project, not a separate total.'),
          s: ['x43', 'fm379', 'o250330', 'tcm']
        },
        {
          k: 'story', lay: 'T', date: dd('四　本土培力', 'Four: growing local volunteers'), h: T('牧羊女村的灰衣', 'The grey uniform of Shepherdess Village'),
          p: [
            T('自 2023 年起，星馬慈濟團隊深耕印度。在菩提迦耶的牧羊女村，馬來西亞志工羅雅珍對村民說：「如果慈濟在幫助你，那你以後就不要去行乞，好嗎？」', 'From 2023, Tzu Chi teams from Singapore and Malaysia settled in to work in India. In Shepherdess Village at Bodh Gaya, Malaysian volunteer Luo Yazhen said to villagers: “If Tzu Chi is helping you, then do not go begging any more, all right?”'),
            T('村裡的甘滿季 2023 年六十歲，日存一把米，也把吃的分給挨餓的人。2024 年 2 月 23 日，四十六位印度本土志工領受灰衣。同一年，甘滿季的新家遭火，馬來西亞志工陳文忠回憶，最掛心的是那套灰衣白褲。', 'Gain Manjhi of the village, sixty in 2023, set aside a handful of rice each day and shared food with the hungry. On 23 February 2024, 46 local Indian volunteers received their grey uniforms. That same year fire took Gain Manjhi’s new home; Malaysian volunteer Chen Wenzhong recalled that the greatest worry was the grey shirt and white trousers.')
          ],
          q: { zh: '我存一把米，送給窮人，或者如果有一些飢餓的人來，我就會少吃一點，也會分送食品雜貨或薄煎餅，因為我希望他們不要悲傷。', en: 'I save a handful of rice for the poor, and if hungry people come, I eat a little less. I also share groceries or flatbread, because I hope they will not be sad.', who: T('甘滿季', 'Gain Manjhi') },
          q2: { zh: '一場火災就把它給燒了，他是很擔心沒有灰衣、沒有白褲。', en: 'One fire burned it all down, and the worry was having no grey shirt and no white trousers.', who: T('陳文忠回憶甘滿季', 'Chen Wenzhong, recalling Gain Manjhi') },
          s: ['o240223']
        }
      ]
    },
    { id: 'rnum', era: 'num', y: '數字', yen: 'Numbers', h: T('數字裡的國際賑災', 'International relief in numbers'), nav: T('數字', 'Numbers'), b: [{ k: 'ledger' }] },
    { id: 'rall', era: 'all', y: '沿革', yen: 'Timeline', h: T('沿革與影音', 'Timeline and films'), lead: T('六段路之外的日期和原始出處，都在這裡。', 'Dates and original sources beyond the six stretches are all here.'), nav: T('沿革與影音', 'Timeline and films'), b: [{ k: 'films' }, { k: 'records' }, { k: 'sources' }] }
  ];

  CH.blocks = [
    { id: 'r1', y: '1991', h: T('那麼遠的人', 'People so far away'), ch: ['r1a'], cover: '19910715-1_05', tun: 'r_1' },
    { id: 'r2', y: '1991–1993', h: T('親手交到手上', 'Hand to hand'), ch: ['r2a'], cover: '19910715-1_03', tun: 'r_2' },
    { id: 'r3', y: '2002–2022', h: T('一站一站走出去', 'One stop at a time'), ch: ['r3a'], cover: 'r_kali', tun: 'r_3' },
    { id: 'r4', y: T('現場', 'On site'), h: T('到了現場，每天做什麼', 'On site, day by day'), ch: ['r4a'], cover: 'relief_blanket', tun: 'r_4' },
    { id: 'r5', y: '2008–2025', h: T('鄉親接力付出', 'Local people carry it on'), ch: ['r5a'], cover: '20080504-1_24', tun: 'r_5' },
    { id: 'r6', y: T('馬來西亞', 'Malaysia'), h: T('在馬來西亞', 'In Malaysia'), ch: ['r6a'], cover: 'r_ham', tun: 'r_6' }
  ];

  CH.ui = {
    hubK: T('國際賑災', 'International Relief'), hubH: T('六段路，從一個鞋盒大小的捐款盒開始', 'Six stretches, beginning with a box the size of a shoebox'),
    hubS: T('一段一段走。走完一段，就蓋一個章。', 'Walk them one at a time. Each one you finish earns a stamp.'),
    start: T('從這裡開始', 'Start here'), walked: T('走過了', 'Walked'), nextTun: T('下一個時空隧道', 'Next time tunnel'), nextOf: T('下一段', 'Next'),
    back: T('回六段路', 'Back to the six stretches'), road: T('回八大腳印', 'Back to the Eight Footprints'), skip: T('跳過', 'Skip'),
    left: T('這一段還有', 'Still ahead'), leftU: T('個故事', 'stories'), seg: T('第 {n} 段／共 6 段', 'Part {n} of 6'), done: T('走完了這一段', 'You finished this part'),
    recH: T('賑災沿革', 'Timeline')
  };

  CH.ledger = [
    {
      h: T('全球累計', 'Worldwide'),
      rows: [
        { n: '139', u: T('個國家地區', 'countries and regions'), l: T('人道援助足跡', 'Reached by humanitarian aid'), w: T('截至 2025 年 12 月 31 日', 'To 31 December 2025'), s: 'i5', big: 1 },
        { n: '68', u: T('個國家地區', 'countries and regions'), l: T('慈濟人分布', 'Where Tzu Chi people live'), w: T('六十週年影響力報告', '60th anniversary impact report'), s: 'i5' },
        { n: '超過 20,000', nen: 'Over 20,000', u: T('戶', 'households'), l: T('全球住屋援建，15 個國家地區', 'Housing built worldwide, in 15 countries and regions'), w: T('六十週年影響力報告', '60th anniversary impact report'), s: 'i5' },
        { n: '272', u: T('所', 'schools'), l: T('全球學校援建，18 個國家地區', 'Schools built worldwide, in 18 countries and regions'), w: T('六十週年影響力報告', '60th anniversary impact report'), s: 'i5' },
        { n: '1,417,024', u: T('件', 'items'), l: T('賑災毛毯，47 個國家地區。不等於全部由寶特瓶做成', 'Relief blankets in 47 countries and regions. Not all were made from plastic bottles'), w: T('截至 2025 年 12 月 31 日', 'To 31 December 2025'), s: 'i36' }
      ]
    },
    {
      h: T('歷年足跡', 'The footprint over the years'),
      rows: [
        { n: '94', u: T('國', 'countries'), l: T('援助的足跡遍及', 'Reached by aid'), w: T('2015 報告', '2015 report'), s: 'c15a' },
        { n: '95', u: T('國家及地區', 'countries and regions'), l: T('全球慈善關懷足跡', 'Global charity care footprint'), w: T('2017 年底', 'End of 2017'), s: 'c16' },
        { n: '100', u: T('個國家／地區', 'countries / regions'), l: T('全球慈善關懷', 'Global charity care'), w: T('2018–2019 報告', '2018–2019 report'), s: 'c18' },
        { n: '125', u: T('個國家地區', 'countries and regions'), l: T('慈善足跡', 'Charity footprint'), w: T('截至 2021 年 6 月', 'To June 2021'), s: 'r20' },
        { n: '128', u: T('個國家地區', 'countries and regions'), l: T('歷來國際援助', 'International aid to date'), w: T('2021 年報', '2021 annual report'), s: 'r21' },
        { n: '139', u: T('個國家地區', 'countries and regions'), l: T('人道援助足跡', 'Humanitarian aid footprint'), w: T('截至 2025 年 12 月 31 日', 'To 31 December 2025'), s: 'i5' }
      ]
    },
    {
      h: T('個案', 'Single cases'),
      rows: [
        { n: '96,974', u: T('戶', 'households'), l: T('日本 311 見舞金，十梯，志工 4,283 人次', 'Japan 2011 condolence money, ten rounds, 4,283 volunteer attendances'), w: T('2011', '2011'), s: 'fm345' },
        { n: '2,277', u: T('戶', 'households'), l: T('緬甸福種計畫，722 公噸稻種，仰光省丹茵鎮十三個農村。這是 2010 年專案，不是 2008 年整場總量', 'Myanmar rice seed project, 722 tonnes of seed, 13 villages in Thanlyin, Yangon Region. A 2010 project, not the total for 2008'), w: T('2010.04.15–12.31', '15 Apr to 31 Dec 2010'), s: 'fm323' },
        { n: '247', u: T('間', 'classrooms'), l: T('2025 緬甸地震，83 所學校的簡易教室', 'Myanmar earthquake 2025, simple classrooms at 83 schools'), w: T('震後六個月內', 'Within six months of the earthquake'), s: 'o250330' }
      ]
    }
  ];
  CH.ledgerNote = T('歷年足跡的名詞照各年原文，統計方式不完全相同，不能當成一條嚴格連續的線。戶和戶次、人和人次、單年和累計，各按原文，不相加。', 'The terms in the yearly footprint follow each year’s text, and the counting differs a little, so they do not form one strict line. Households and household visits, people and attendances, one year and running totals are kept as written and are not added together.');

  CH.films = [
    { id: 'CSkmVC9ZpBY', zh: '哥奇颶風侵襲孟加拉', en: 'Cyclone in Bangladesh', y: '1991' },
    { id: 'kgH43gone48', zh: '蘇聯解體，蒙古糧荒', en: 'Food shortage in Mongolia', y: '1992' },
    { id: 'CeRqfcRo064', zh: '南亞大海嘯', en: 'The Indian Ocean tsunami', y: '2004' },
    { id: 'w4Hy7QvAnvc', zh: '緬甸納吉斯風災，帶動米撲滿', en: 'Cyclone Nargis and the rice banks', y: '2008' },
    { id: '8XEAPjamSAo', zh: '慈濟研發福慧床', en: 'Developing the Fu Hui bed', y: '2010' },
    { id: 'Oc3IOO9tj6U', zh: '日本三一一複合式大災難', en: 'Japan, 11 March 2011', y: '2011' },
    { id: '-zx7su8cNQA', zh: '尼泊爾強震', en: 'The Nepal earthquake', y: '2015' },
    { id: 'ef8b3GqA_HY', zh: '大馬慈濟人投入緬甸強震救援', en: 'Malaysian volunteers at the Myanmar earthquake', y: '2025' },
    { id: '1FEdvf_8W7E', zh: '微光匯聚成希望：緬甸賑災實錄', en: 'Malaysian and Myanmar volunteers bring beds and supplies to earthquake survivors', y: '2025' },
    { id: 'XJVlsSuixRY', zh: '跨越千年的慈悲約定：尼泊爾', en: 'A promise across a thousand years: Nepal', y: '2026' },
    { id: 'n89qHB-8kUk', zh: '尼泊爾洪災，慈濟總動員', en: 'Tzu Chi in Nepal after the floods', y: '2026' }
  ];

  CH.filters = [['all', T('全部', 'All')], ['start', T('起步', 'First steps')], ['rebuild', T('重建', 'Rebuilding')], ['local', T('在地接棒', 'Local hands')], ['object', T('物件', 'Objects')], ['my', T('馬來西亞', 'Malaysia')]];
  CH.records = [
    ['1991.05.19', 'start', '美國分會、支會和聯絡處發起「援助孟加拉災民運動」。', 'US branches and liaison offices begin the Bangladesh appeal.', 'fm138'],
    ['1991.06.25', 'start', '黃正義代表捐美金十五萬七千一百四十九元予國際紅十字會洛杉磯分會。', 'US$157,149 is given to the Los Angeles chapter of the Red Cross.', 'fm138'],
    ['1991.07.15', 'start', '證嚴上人在彰化公開呼籲發動華東水患賑災。', 'Dharma Master Cheng Yen publicly calls for relief for the eastern China floods, in Changhua.', 'o910715'],
    ['1991.08.11', 'start', '第一梯次人員赴北京拜訪中國抗災賑災協會。', 'The first team visits a Chinese disaster relief association in Beijing.', 'fm140'],
    ['1991.08.15', 'start', '前往安徽全椒勘災。', 'The team goes to Quanjiao, Anhui, to survey the damage.', 'fm140'],
    ['1992.01.04', 'rebuild', '全椒慈濟村舉行啟用移交。', 'The Tzu Chi village in Quanjiao is handed over.', 'o910715'],
    ['1992.06.06', 'rebuild', '二十九個慈濟村 1513 戶領到土地使用證及房屋所有權證。', '1,513 households in 29 villages receive land and house certificates.', 'fm140'],
    ['1992.08.07', 'start', '外蒙紅十字會蘇拉會長到花蓮求援。', 'The president of the Mongolian Red Cross comes to Hualien for help.', 'fm155'],
    ['1993.01.01', 'start', '外蒙發放。', 'Distribution in Mongolia.', 'fm155'],
    ['2001.11.11', 'my', '與法國關懷組織簽約，援建印度古茶拉底省。', 'An agreement with Care France for rebuilding in Gujarat, India.', 'x43'],
    ['2002.07', 'rebuild', '雅加達金卡蓮大愛村動工。', 'Work begins on the Great Love Village at Cengkareng, Jakarta.', 'fm259'],
    ['2002.10.23', 'my', '印度 227 間大愛屋揭碑。', '227 Great Love homes in India are unveiled.', 'x43'],
    ['2003.07', 'rebuild', '金卡蓮大愛村 1100 戶開始分批遷入。', '1,100 households begin moving in by stages at Cengkareng.', 'fm259'],
    ['2004.12.26', 'my', '海嘯當天，馬來西亞慈濟人兵分三路。', 'On the day of the tsunami, Tzu Chi members in Malaysia split into three groups.', 'fm282'],
    ['2004.12.29', 'my', '劉濟雨趕往斯里蘭卡，負起災後總協調的工作。', 'Liu Jiyu hurries to Sri Lanka to take on overall coordination.', 'x44'],
    ['2005', 'object', '美國卡崔娜颶風，首次發放現值卡。', 'Hurricane Katrina: cash-value cards are given out for the first time.', 'fm293'],
    ['2005.01.08', 'rebuild', '以班達亞齊和漢班托塔為援助重點。', 'Banda Aceh and Hambantota are set as the focus.', 'fm282'],
    ['2005.12.26', 'rebuild', '班達亞齊大愛一村 160 戶交屋。', '160 households receive homes in Banda Aceh.', 'fm282'],
    ['2006.04.10', 'rebuild', '漢班托塔第一期 649 戶交屋。', '649 homes in the first phase at Hambantota are handed over.', 'fm282'],
    ['2006.09.30', 'object', '人援會把回收保特瓶製成的長纖毛毯呈給上人。', 'A blanket of recycled bottle fibre is presented to the Master.', 'fm304'],
    ['2007.04', 'object', '環保毛毯首次應用於國際賑災，送往菲律賓。', 'The eco blanket is first used in international relief, in the Philippines.', 'fm304'],
    ['2008.05.07', 'start my', '動員泰國、馬來西亞、臺灣志工和人醫會前往緬甸勘災。', 'Volunteers from Thailand, Malaysia and Taiwan go to Myanmar to survey the damage.', 'fm323'],
    ['2009.10.01', 'local', '馬利僅那市發起以工代賑，10 月 18 日告一段落。', 'Cash for work begins in Marikina, ending on 18 October.', 'fm332'],
    ['2009.12.13', 'rebuild', '亞齊三座大愛村移交印尼政府。', 'Three Great Love Villages in Aceh are handed to the Indonesian government.', 'o050924'],
    ['2010.02.15', 'local', '海地以工代賑改為以工供糧。', 'In Haiti, cash for work becomes food for work.', 'fm339'],
    ['2010.03.27', 'local', '海地開始正式的本土志工培訓。', 'Formal training of local volunteers begins in Haiti.', 'fm339'],
    ['2010.06.01', 'object', '簡易組合屋搭配墊高板送達海地。', 'Simple prefab houses with raised floor panels reach Haiti.', 'fm338'],
    ['2010.11.19', 'rebuild', '汶川十三所學校聯合交付。', 'Thirteen schools in Wenchuan are handed over together.', 'fm324'],
    ['2011.06.09', 'start', '日本首梯見舞金發放，釜石、陸前高田。', 'The first round of condolence money in Japan, at Kamaishi and Rikuzentakata.', 'fm345'],
    ['2012.07.28', 'local', '德本本土幹部研習會，麥奎爾‧諾沙分享。', 'At a local leaders’ training in Durban, Migual Neusa speaks.', 'fm468'],
    ['2013.07.27', 'local', '慈濟緬甸聯絡處成立。', 'The Tzu Chi Myanmar liaison office is founded.', 'o080504'],
    ['2014.02.13', 'object', '福慧床在菲律賓發放，問世後首次用於國際賑災。', 'The Fu Hui bed is first used in international relief, in the Philippines.', 'fm338'],
    ['2015.06.06', 'my', '馬來西亞志工在尼泊爾搭樣品屋，讓承包商學習工法。', 'Malaysian volunteers put up a sample building in Nepal for contractors to learn from.', 'fm379'],
    ['2015.06.27', 'local', '尼泊爾本土志工首次主導發放。', 'Local volunteers in Nepal lead a distribution for the first time.', 'fm379'],
    ['2021.02.19', 'my', '馬來西亞水患，各項協助共 3,122 戶次受惠。', 'Malaysia floods: assistance reaches 3,122 household visits.', 'fm476'],
    ['2021.12.18', 'my', '雪隆大水，志工啟動救援。', 'Selangor floods: volunteers begin relief.', 'x280'],
    ['2022.03.05', 'start', '波茲南，慈濟在波蘭的首場發放。', 'Poznań: Tzu Chi’s first distribution in Poland.', 'o220224'],
    ['2024.02.23', 'local my', '四十六位印度本土志工領受灰衣。', '46 local Indian volunteers receive grey uniforms.', 'o240223'],
    ['2025.03.28', 'rebuild', '緬甸規模 7.7 地震。', 'A magnitude 7.7 earthquake strikes Myanmar.', 'o250330'],
    ['2025.04', 'rebuild local', '緬甸強震後，受災居民以工代賑，為寺院搭建臨時住所。', 'After the Myanmar earthquake, residents take part in cash-for-work, building temporary shelters for monasteries.', 'nCfw'],
    ['2025.05.15', 'my', '馬來西亞志工帶動當地承包商和以工代賑志工搭建，至 6 月 15 日完成 87 間。', 'Malaysian volunteers begin building with local contractors; 87 are done by 15 June.', 'tcm'],
    ['2025.06.11', 'rebuild local', '莫三比克庫拉大愛村交屋，這一輪 171 戶入住。', 'Handover at Cura Great Love Village, Mozambique; 171 households move in this round.', 'tcm'],
    ['2025.09', 'rebuild', '莫三比克最大的瓜拉瓜拉大愛村，與十所學校同步移交。', 'Guara-Guara Great Love Village, the largest in Mozambique, is handed over together with ten schools.', 'o190322'],
    ['2025.09.26', 'rebuild', '馬太鞍溪堰塞湖溢流，泥流重創花蓮光復。慈濟動員全臺上萬名志工；花蓮靜思堂的宗門營改成實務課，600 多位學員走進光復巷弄清淤。', 'The Mataian Creek barrier lake overflows and mud buries Guangfu, Hualien. Tzu Chi mobilises over ten thousand volunteers across Taiwan. A training camp at the Hualien Jing Si Hall turns into practical work, and more than 600 participants go into the lanes of Guangfu to clear the mud.', 'o250928'],
    ['2025.10.04', 'rebuild', '光復開始發放每戶 5 萬元急難慰問金，共嘉惠 2,670 戶受災鄉親。', 'Emergency aid of NT$50,000 per household begins in Guangfu, reaching 2,670 households in all.', 'o250928'],
    ['2026.06.04', 'rebuild', '印尼慈濟與地方政府合作，北亞齊永久屋交屋，首批 40 戶入住。', 'Tzu Chi Indonesia and the local government hand over permanent homes in North Aceh; the first 40 households move in.', 'nAceh']
  ];

  CH.next = { ask: T('不認識的人，也能救嗎？', 'Can we save someone we have never met?'), stop: T('下一站・骨髓捐贈', 'Next stop: Bone Marrow Donation'), href: 'marrow.html', tun: 'r_w' };

  CH.footer = T('本頁為樣板，尚未經馬來西亞慈濟分會審核，未發佈。女孩與媽媽是說故事的人。照片除另有說明外，取自慈濟《歷史上的今天》公開頁面，已裁成局部；標示「示意」的畫面為插畫，非當年實物。「」內為原文照錄。', 'Sample only: not yet reviewed by Tzu Chi Malaysia and not published. The girl and her mother are storytellers. Unless noted, photos are from the public pages of Tzu Chi, On This Day, cropped to details. Scenes marked as illustrations are not real objects of the time. Words inside quotation marks are taken from the sources; their English is a plain translation.');

  /* 隧道：六段走 route，站點照那一段講的地方；進下一站用下一站的 match。dot 深藍、line 麻袋黃 */
  window.TUN_M = window.TUN_M || {}; var TM = window.TUN_M;
  var RT = function (d, zoom, ids, pts) { return { walk: 'route', d: d, zoom: zoom, ids: ids, pts: pts, dot: 'rgba(92,128,184,.55)', line: '#d9b36a', bg: '#0f1826', tint: '#5a7396', a0: 0, a1: .12, ink: '#f7eedd', plate: 'rgba(15,24,38,', pa: .72 }; };
  TM.r_1 = RT(4200, 1, ['r_clip', 'r_recv', 'r_flood'], [[-117.8, 33.7, '爾灣'], [90.4, 23.8, '孟加拉'], [118.1, 32.1, '全椒']]);
  TM.r_2 = RT(4200, 2.4, ['r_box', 'r_grp', 'r_news', 'r_tdl'], [[121.6, 24, '花蓮'], [116.4, 39.9, '北京'], [118.1, 32.1, '全椒'], [106.9, 47.9, '烏蘭巴托']]);
  TM.r_3 = RT(5400, 1.2, ['r_kali', 'r_ruin', 'r_wc', 'r_haiti', 'r_road', 'r_card'], [[106.8, -6.2, '雅加達'], [95.3, 5.5, '班達亞齊'], [104, 31, '汶川'], [-72.3, 18.5, '太子港'], [141.9, 39.3, '釜石'], [16.9, 52.4, '波茲南']]);
  TM.r_4 = RT(3800, 1.7, ['r_scale', 'r_box2', 'r_beds'], [[121.6, 25.08, '內湖'], [85.3, 27.7, '加德滿都'], [96.1, 21.9, '曼德勒']]);
  TM.r_5 = RT(3800, 1.4, ['r_seed', 'r_green', 'r_vill'], [[96.2, 16.8, '仰光'], [96.1, 21.9, '曼德勒'], [34.84, -19.84, '莫三比克']]);
  TM.r_6 = RT(4200, 2.2, ['r_mud', 'r_ham', 'r_fire', 'r_panel'], [[101.7, 3.14, '雪隆'], [81.1, 6.1, '漢班托塔'], [85, 24.7, '菩提迦耶'], [96.1, 21.9, '曼德勒']]);
  TM.r_w = { walk: 'match', d: 4000, hot: '#a81e2c', bg: '#f6f3ee', end: 3, ids: ['r_sack', 'r_roof', 'r_aceh', 'r_can', 'r_blank', 'r_bamboo', 'r_pack'], tint: '#b98a58', a0: .25, a1: .2, ink: '#2b2822', plate: 'rgba(246,243,238,', pa: .72 };

  var api = function () { return CH.api; };
  var fxw = function (cls, b, st) { var A = api(); return '<section class="fx ' + cls + '" data-fx><div class="fx-s"><div class="fx-t">' + (b.d ? '<p class="fx-d">' + b.d + '</p>' : '') + '<h3 class="t">' + A.B(b.h) + '</h3>' + (b.t ? A.B(b.t, 'p') : '') + A.quote(b.q) + '</div>' + st + '<div class="fx-n"><small>' + (b.note ? A.B(b.note) : '') + '</small>' + A.srcs(b.s) + '</div></div></section>'; };

  /* 點陣地圖：用 world.js，x = 經度 + 180，y = 76 − 緯度。box = [西, 北, 東, 南] */
  var mapSVG = function (box, inner) {
    var G = window.WORLD, x0 = box[0] + 180, y0 = G.top - box[1], w = box[2] - box[0], h = box[1] - box[3], d = '';
    G.r.forEach(function (row, y) {
      for (var x = 0; x < G.w; x++) {
        if (!(parseInt(row[x >> 2], 16) >> (3 - x % 4) & 1)) continue;
        var X = x * G.step, Y = y * G.step;
        if (X >= x0 && X <= x0 + w && Y >= y0 && Y <= y0 + h) d += 'M' + X + ' ' + Y + 'h.01';
      }
    });
    return '<svg viewBox="' + x0 + ' ' + y0 + ' ' + w + ' ' + h + '" aria-hidden="true"><path class="md" d="' + d + '" stroke-width="' + (G.step * .56).toFixed(2) + '"/>' + (inner || '') + '</svg>';
  };
  var pos = function (box, p) { return 'left:' + ((p[0] - box[0]) / (box[2] - box[0]) * 100).toFixed(2) + '%;top:' + ((box[1] - p[1]) / (box[1] - box[3]) * 100).toFixed(2) + '%'; };
  var ratio = function (box) { return 'style="--ar:' + ((box[2] - box[0]) / (box[1] - box[3])).toFixed(3) + '"'; };
  /* 把一段路切成小虛線，每段各帶門檻 --a，捲動時一格格畫出去 */
  var dashes = function (a, b, a0, a1, sw) {
    var A = [a[0] + 180, 76 - a[1]], Bp = [b[0] + 180, 76 - b[1]], L = Math.hypot(Bp[0] - A[0], Bp[1] - A[1]), n = Math.max(3, Math.round(L / (sw * 3.4))), h = '';
    for (var i = 0; i < n; i++) {
      var u = i / n, v = (i + .55) / n;
      h += '<line class="ds" stroke-width="' + sw + '" style="--a:' + (a0 + (a1 - a0) * u).toFixed(3) + '" x1="' + (A[0] + (Bp[0] - A[0]) * u).toFixed(2) + '" y1="' + (A[1] + (Bp[1] - A[1]) * u).toFixed(2) + '" x2="' + (A[0] + (Bp[0] - A[0]) * v).toFixed(2) + '" y2="' + (A[1] + (Bp[1] - A[1]) * v).toFixed(2) + '"/>';
    }
    return h;
  };
  var pin = function (box, p, a, lab, side) { var A = api(); return '<span class="pin ' + (side || 'r') + '" style="' + pos(box, p) + ';--a:' + a + '"><i></i><b>' + A.B(lab) + '</b></span>'; };

  var ART = {
    bag: '<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M34 22h52l-6 12 14 70H26l14-70z"/><path d="M40 34h40"/><path d="M50 60l6 3M66 74l6 3M48 84l6 3M68 54l6 3M58 92l6 3"/></svg>',
    blanket: '<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M22 42h76a8 8 0 0 1 0 16H22a8 8 0 0 1 0-16z"/><path d="M22 58h76a8 8 0 0 1 0 16H22a8 8 0 0 1 0-16z"/><path d="M22 74h76a8 8 0 0 1 0 16H22a8 8 0 0 1 0-16z"/></svg>',
    house: '<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M16 56 60 24l44 32"/><path d="M26 50v48h68V50"/><path d="M52 98V70h16v28"/><path d="M12 104h96"/></svg>',
    card: '<svg viewBox="0 0 120 120" aria-hidden="true"><rect x="14" y="34" width="92" height="56" rx="7"/><path d="M14 50h92"/><path d="M26 74h26"/></svg>'
  };

  CH.R = {
    rmap: function (b) {
      var box = [62, 56, 146, -4], tw = [121.5, 25], bj = [116.4, 39.9], qj = [118.1, 32.1], bd = [90.4, 23.8];
      return fxw('fx-rm', b, '<div class="mp-st"><div class="mp" ' + ratio(box) + '>' + mapSVG(box, dashes(tw, bj, .1, .46, .8) + dashes(bj, qj, .5, .76, .8)) +
        pin(box, bd, 0, T('孟加拉　善款轉交', 'Bangladesh: passed on'), 'l') + pin(box, tw, .04, T('臺灣', 'Taiwan')) + pin(box, bj, .46, T('8.11 北京', 'Beijing, 11 Aug')) + pin(box, qj, .76, T('8.15 全椒', 'Quanjiao, 15 Aug')) + '</div></div>');
    },
    rroll: function (b) {
      var rows = '';
      for (var i = 0; i < 9; i++) rows += '<li style="--a:' + (.08 + i * .09).toFixed(2) + ';--w:' + (46 + (i * 37) % 44) + '%"><i class="no"></i><i class="nm"></i><i class="tk"></i></li>';
      return fxw('fx-ro', b, '<div class="ro-st"><ol class="ro" aria-hidden="true">' + rows + '</ol></div>');
    },
    rworld: function (b) {
      var A = api(), box = [-180, 76, 180, -56];
      var dots = b.st.map(function (x, i) { return '<button class="rw-p' + (i ? '' : ' on') + '" data-w="' + i + '" style="' + pos(box, x.at) + '" aria-label="' + x.y + ' ' + x.n.zh + '"><i></i></button>'; }).join('');
      var tabs = b.st.map(function (x, i) { return '<button class="rw-b' + (i ? '' : ' on') + '" data-w="' + i + '" aria-pressed="' + (i === 0) + '"><b>' + x.y + '</b>' + A.B(x.n) + '</button>'; }).join('');
      var cards = b.st.map(function (x, i) { return '<article class="rw-c" data-c="' + i + '"' + (i ? ' hidden' : '') + '><div class="rw-t"><div class="date">' + x.y + '</div><h3>' + A.B(x.h) + '</h3>' + A.paras(x.p) + A.quote(x.q) + A.srcs(x.s) + '</div>' + A.fig({ i: x.i, c: x.c }) + '</article>'; }).join('');
      return '<section class="rw"><h3 class="h4">' + A.B(b.h) + '</h3>' + A.B(b.t, 'p', 'rw-l') + '<div class="mp rw-m" ' + ratio(box) + '>' + mapSVG(box) + dots + '</div><div class="rw-tabs">' + tabs + '</div>' + cards + '</section>';
    },
    rflow: function (b) {
      var A = api();
      var grid = b.items.map(function (x, i) { return '<li style="--a:' + (i / 10 + .02).toFixed(2) + '"><span>' + (i + 1) + '</span>' + A.B(x.h) + '</li>'; }).join('');
      var pane = b.items.map(function (x, i) { return '<div class="rl-c' + (i ? '' : ' on') + '"><b>' + (i + 1) + '</b><div><h4>' + A.B(x.h) + '</h4>' + A.B(x.t, 'p') + '</div></div>'; }).join('');
      var rice = ''; for (var i = 0; i < 24; i++) rice += '<i style="--x:' + (8 + i * 37 % 84) + '%;--a:' + (i / 24).toFixed(2) + '"></i>';
      return fxw('fx-rl', b, '<div class="rl-st"><div class="rl-b" aria-hidden="true"><div class="rl-r">' + rice + '</div><div class="rl-s"><i></i></div></div><ol class="rl-g">' + grid + '</ol><div class="rl-p">' + pane + '</div></div>');
    },
    rflip: function (b) {
      var A = api();
      var card = function (x) {
        var face = x.i ? '<img loading="lazy" src="assets/ph/' + x.i + '.jpg" alt="">' : '<span class="rc-a">' + ART[x.art] + '</span>';
        return '<button class="rc" aria-pressed="false"><span class="rc-i"><span class="rc-f">' + face + '<b>' + A.B(x.n) + '</b></span><span class="rc-k"><b>' + A.B(x.n) + '</b>' + A.B(x.b, 'span', 'rc-t') + '</span></span></button>';
      };
      var src = []; b.items.forEach(function (x) { x.s.forEach(function (k) { if (src.indexOf(k) < 0) src.push(k); }); });
      return '<section class="rcs"><h3 class="h4">' + A.B(b.h) + '</h3>' + A.B(b.t, 'p', 'rw-l') + '<div class="rc-g">' + b.items.map(card).join('') + '</div>' + A.srcs(src) + '</section>';
    },
    rrelay: function (b) {
      var A = api();
      var it = b.items.map(function (x) { return '<li style="--a:' + x.a + '"><b class="y">' + x.y + '</b><h4>' + A.B(x.n) + '</h4>' + A.B(x.t, 'p') + '</li>'; }).join('');
      return fxw('fx-ry', b, '<div class="ry-st"><div class="ry-l" aria-hidden="true"><i></i></div><ol class="ry">' + it + '</ol></div>');
    },
    rties: function (b) {
      var box = [60, 34, 128, -12], kl = [101.7, 3.14], A = [81.1, 6.1], I = [70.1, 23.2], N = [85.3, 27.7], G = [85, 24.7], M = [96.1, 21.9];
      return fxw('fx-rt', b, '<div class="mp-st"><div class="mp" ' + ratio(box) + '>' + mapSVG(box, dashes(kl, I, .06, .24, .7) + dashes(kl, A, .26, .42, .7) + dashes(kl, N, .44, .6, .7) + dashes(kl, G, .62, .76, .7) + dashes(kl, M, .78, .9, .7)) +
        pin(box, kl, 0, T('吉隆坡', 'Kuala Lumpur')) + pin(box, I, .24, T('2001 印度', '2001 India'), 'b') + pin(box, A, .42, T('2004 斯里蘭卡', '2004 Sri Lanka'), 'l') + pin(box, N, .6, T('2015 尼泊爾', '2015 Nepal')) + pin(box, G, .76, T('2023 菩提迦耶', '2023 Bodh Gaya'), 'lu') + pin(box, M, .9, T('2025 緬甸', '2025 Myanmar')) + '</div></div>');
    },
    films: function () {
      var A = api();
      return '<h3 class="h4"><span class="zh">影片</span><span class="en" lang="en">Films</span></h3><div class="ed-fl">' + CH.films.map(function (x) { return '<a href="https://www.youtube.com/watch?v=' + x.id + '" target="_blank" rel="noopener"><b>' + x.y + '</b>' + A.B(x) + '</a>'; }).join('') + '</div>';
    }
  };

  var fx = [], reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, fit = '';
  function measure() { fx.forEach(function (e) { e.classList.remove('flat'); var s = e.querySelector('.fx-s'); var st = e.querySelector('.ry-st,.rl-st,.ro-st'), mp = e.querySelector('.mp-st'); if (reduce || s.scrollHeight > s.clientHeight + 1 || (st && st.scrollHeight > st.clientHeight + 1) || (mp && mp.clientHeight < 200)) { e.classList.add('flat'); e.style.setProperty('--p', 1); } }); }
  function pick(n) {
    [].forEach.call(document.querySelectorAll('.rw-p,.rw-b'), function (x) { var on = x.getAttribute('data-w') === n; x.classList.toggle('on', on); if (x.classList.contains('rw-b')) x.setAttribute('aria-pressed', on); });
    [].forEach.call(document.querySelectorAll('.rw-c'), function (x) { x.hidden = x.getAttribute('data-c') !== n; });
  }
  document.addEventListener('click', function (e) {
    if (!e.target.closest) return;
    var w = e.target.closest('[data-w]'); if (w) { pick(w.getAttribute('data-w')); return; }
    var c = e.target.closest('.rc'); if (c) c.setAttribute('aria-pressed', c.getAttribute('aria-pressed') !== 'true');
  });
  CH.onWire = function () { fx = [].slice.call(document.querySelectorAll('[data-fx]')); fit = ''; if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { fit = ''; CH.onFrame(); }); CH.onFrame(); };
  CH.onFrame = function () {
    var H = innerHeight, k = innerWidth + document.documentElement.getAttribute('data-lang');
    if (k !== fit) { fit = k; measure(); }
    fx.forEach(function (e) {
      var r = e.getBoundingClientRect(); if (r.bottom < -H || r.top > H * 2) return;
      var flat = e.classList.contains('flat'), p = flat ? 1 : Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - H)));
      e.style.setProperty('--p', p.toFixed(4));
      if (e.classList.contains('fx-rl') && !flat) { var n = Math.min(9, Math.floor(p * 10)); if (e._n !== n) { e._n = n; [].forEach.call(e.querySelectorAll('.rl-c'), function (x, i) { x.classList.toggle('on', i === n); }); } }
    });
  };
})();
