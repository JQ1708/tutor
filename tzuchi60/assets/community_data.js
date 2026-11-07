/* 社區志工站：內容、圖片尺寸、隧道參數、六個滾動效果。charity.js 共用；這個檔只放本站的東西 */
(function () {
  var T = function (zh, en) { return { zh: zh, en: en }; };
  var otd = function (d, tail) { var s = d.slice(0, 4) + '.' + d.slice(4, 6) + '.' + d.slice(6, 8); return { zh: '《慈濟歷史上的今天》' + s, en: 'Tzu Chi, On This Day, ' + s, url: 'https://tzuchiculture.org/tzuchi_60th_anniversary/onthisday/onthisday_' + d + (tail === undefined ? '-1' : tail) + '/' }; };
  var fm = function (n, t) { return { zh: '慈濟法脈資料庫 ' + n + '〈' + t + '〉', en: 'Tzu Chi Dharma Lineage Archive, no. ' + n }; };
  var xl = function (v, p) { return { zh: '《馬來西亞慈濟史 雪隆分會》（' + v + '）頁 ' + p, en: 'History of Tzu Chi Malaysia: Selangor and Kuala Lumpur Branch, vol. ' + v + ', p. ' + p }; };
  var im = function (z, e) { return { zh: '慈濟六十週年影響力報告・' + z, en: 'Tzu Chi 60th anniversary impact report: ' + e, url: 'https://60impact.tzuchi.org.tw/' }; };

  var S = {
    nBeds: { zh: '慈濟全球網〈New beds bring comfort to Selangor Care Home〉', en: 'Tzu Chi Global: New beds bring comfort to Selangor Care Home', url: 'https://global.tzuchi.org/new-beds-bring-comfort-to-selangor-care-home' },
    f145: fm('00145', '馬來西亞慈濟人開始個案訪視'),
    f146: fm('00146', '日本分會於東京成立'),
    f169: fm('00169', '香港聯絡處於灣仔成立'),
    f196: fm('00196', '賀伯颱風重創臺灣，推動「社區志工」'),
    f202: fm('00202', '溫妮颱風造成傷亡慘重'),
    f219: fm('00219', '九二一大地震'),
    f265: fm('00265', '四法四門'),
    f329: fm('00329', '莫拉克風災'),
    f378: fm('00378', '環保站加入「社區照顧關懷據點」'),
    f385: fm('00385', '史瓦帝尼牧師受證，酋長捐地建社區中心'),
    f440: fm('00440', '首間社區長照機構日照中心成立'),
    f451: fm('00451', '新型冠狀病毒（COVID-19）肆虐全球'),
    f456: fm('00456', '啟動「安穩家園．美善社區」慈善專案'),
    f457: fm('00457', '獲內政部消防署核定為防災士培訓機構'),
    o030831: otd('20030831'), o200115: otd('20200115'),
    ist: im('故事', 'stories'), ico: im('社區網絡的深耕共伴', 'community networks'), ia3: im('行動三', 'Action 3'),
    r24: { zh: '《慈濟 2024 年報》PDF 頁 7', en: 'Tzu Chi Annual Report 2024, PDF p. 7' },
    x17: xl(1, '22'), x123: xl(1, '23'), x127: xl(1, '27'), x165: xl(1, '65'),
    x2612: xl(2, '612'), x2635: xl(2, '635–636'), x2637: xl(2, '637–638'), x2640: xl(2, '640'), x2662: xl(2, '662')
  };
  var CH = window.CH = { S: S };
  var SR = function (d, e) { return T('證嚴上人，' + d, 'Dharma Master Cheng Yen, ' + e); };

  /* 圖片：尺寸登記到 PHS；隧道圖登記到 RIVER_M。攝影年都不詳，一律 0 不印 */
  var P = window.PHS = window.PHS || {};
  var SZ = {
    hero_c: [1600, 900], comm_kl: [857, 587], comm_night: [394, 194], comm_bags: [300, 190], '20200115-1_09': [570, 321],
    c_legs: [884, 249], c_pot: [720, 555], c_lamp: [800, 450], c_win: [800, 450], c_bento: [800, 450]
  };
  Object.keys(SZ).forEach(function (k) { P[k] = SZ[k]; });
  window.RIVER_M = (window.RIVER_M || []).concat([
    [0, 'mc_win', 533], [0, 'mc_lamp', 533], [0, 'mc_door', 533], [0, 'mc_bento', 533], [0, 'mc_tape', 533], [0, 'mc_grip', 533],
    [0, 'mc_rail', 533], [0, 'mc_kl', 438], [0, 'mc_flood', 1065], [0, 'mc_hotel', 397], [0, 'mc_village', 1183], [0, 'mc_rubble', 236],
    [0, 'mc_steel', 398], [0, 'mc_pot', 389], [0, 'mc_wall', 214], [0, 'mc_fans', 654], [0, 'mc_night', 609], [0, 'mc_bags', 474]
  ]);

  CH.page = { key: 'community', pre: 'c', title: '社區志工｜那我們隔壁的阿婆呢？', still: 'hero_c', noDoor: 1, noFilm: 1, after: ['cnum', 'call'] };

  CH.hero = {
    film: T('那我們隔壁的阿婆呢？', 'And what about the old lady next door?'),
    stop: T('第七站', 'Seventh stop'), title: T('社區志工', 'Community Volunteerism'),
    sub: T('颱風過後，志工從遠處趕來，受災戶的鄰居卻無法及時關心。<br>從此，慈濟人按住處分組，把關懷帶回自己住的街上。', 'After a typhoon, volunteers rushed in from far away, yet the neighbours of those affected could not reach them in time.<br>From then on, Tzu Chi volunteers were grouped by where they live, and brought their care home to their own street.'),
    watch: T('影片製作中', 'Film in production'), read: T('走這六段路', 'Walk the six stretches'),
    ai: T('窗、燈、門和扶手是示意插畫，不是實景', 'The windows, lamp, door and handrail are illustrations, not a real street')
  };

  var otdC = function (z, e) { return T(z + '取自《慈濟歷史上的今天》，拍攝日未載。', e + ' From Tzu Chi, On This Day; date of photograph not given.'); };
  var DY = T('《慈濟道侶》279 期，一九九七年九月一日', 'Tzu Chi Companions, no. 279, 1 September 1997');

  CH.chapters = [
    /* 1 從遠處趕來 */
    { id: 'c1a', era: 'e90', y: '1996', nav: T('從遠處趕來', 'Rushing in from afar'), ask: T('那我們隔壁的阿婆呢？', 'And what about the old lady next door?'), b: [
      { k: 'far', bare: 1, h: T('人到了，路不熟', 'They arrived, but did not know the way'),
        lead: T('一九九六年賀伯颱風過後，臺北縣板橋市嚴重淹水。當地和外縣市的志工前往救援，卻也在陌生的環境裡摸索。', 'After Typhoon Herb in 1996, Banqiao in Taipei County was badly flooded. Local volunteers and others from outside the county went to help, and found themselves feeling their way through unfamiliar streets.'),
        from: T('外縣市', 'Another county'), to: T('自己住的街', 'Your own street'),
        note: T('地圖是示意，不是當年的路線。', 'The map is an illustration, not the route taken at the time.'),
        s: ['f196'] },
      { k: 'story', lay: 'T', date: '1996', h: T('分組跟著人，不跟著地方', 'Groups followed people, not places'),
        p: [T('早期慈濟的志工網絡依人際關係形成，各分組的成員橫跨不同的地理區域，人力的集結費時。', 'In the early years, Tzu Chi’s volunteer network grew through personal ties. Members of one group lived across different areas, and it took time to bring people together.'),
          T('賀伯颱風造成中南部海水倒灌，南投縣山洪爆發，多人遭土石流活埋。慈濟人跨縣市援助，受災戶的鄰居卻無法及時關心。', 'Typhoon Herb drove seawater inland in central and southern Taiwan, and flash floods in Nantou County buried many people under mudslides. Tzu Chi volunteers crossed county lines to help, yet the neighbours of those affected could not reach them in time.'),
          T('有此經驗，上人提出醞釀已久的構想，將志工編組改由以社區為單位，也期盼提倡「里仁為美」的美德，讓關懷的風氣在鄰里間滋長。', 'With this experience, Master Cheng Yen put forward an idea she had long been considering: to organise volunteers by community, and to encourage the old virtue of a good neighbourhood, so that care could grow among neighbours.')],
        q: { zh: '唯有對當地熟悉，平日磨合出彼此的默契，才能在急難發生的當下，做最有效率的動員。', en: 'Only by knowing a place well, and building an understanding with one another day by day, can people mobilise most effectively when an emergency strikes.', who: T('《慈濟月刊》625 期〈鄰里互助的價值〉，二〇一八年十二月一日', 'Tzu Chi Monthly, no. 625, 1 December 2018') },
        s: ['f196', 'ist'] }
    ] },
    { id: 'c1b', era: 'heart', y: '1996.12', nav: T('先去敦親睦鄰', 'Neighbours first'), b: [
      { k: 'quote', big: 1, zh: '我們應該以身作則先去敦親睦鄰，左鄰右舍若無法敦睦，你想去愛更遠的人怎麼可能？', en: 'We should lead by example and first get along with our neighbours. If you cannot live in harmony with those on either side of you, how could you hope to love people farther away?', who: SR('一九九六年十二月十四日', '14 December 1996'), s: ['f196'] },
      { k: 'story', lay: 'T', date: '1996.12.14', h: T('天天碰面的人', 'The people you see every day'),
        p: [T('這一天是慈濟北區委員聯誼座談。上人談到，現代的社區左鄰右舍互不相識，聽到樓上有人求救，也不敢探頭看看。', 'That day, Tzu Chi commissioners of the northern region met for a discussion. Master Cheng Yen spoke of modern neighbourhoods where people do not know those next door, and where someone hearing a cry for help upstairs dares not even look out.'),
          T('有人告訴上人，從近鄰做起較困難，因為天天會碰面，容易暴露個人的缺點。', 'Someone told her it was harder to begin with close neighbours, because you see them every day and your faults are easily exposed.')],
        q: { zh: '就因為如此，所以更應該從敦親睦鄰做起，請左鄰右舍大家來督促，自己就會提高警惕心注意言行。', en: 'It is for this very reason that we should begin with our neighbours. Ask those around you to keep you on your toes, and you will be more careful in what you say and do.', who: SR('一九九六年十二月十四日', '14 December 1996') },
        q2: { zh: '社區就是我們修行的好道場', en: 'The community is our good place of practice.', who: SR('一九九六年十二月十四日', '14 December 1996') },
        s: ['f196'] }
    ] },

    /* 2 回到住的地方 */
    { id: 'c2a', era: 'e90', y: '1996–1997', nav: T('按住處分組', 'Grouped by address'), ask: T('住得近，就認識了嗎？', 'Does living nearby mean you know each other?'), b: [
      { k: 'story', lay: 'T', date: '1996.12.22', h: T('從兩個村開始', 'It began in two villages'),
        p: [T('一九九六年十二月二十二日，慈濟「推展社區志工計畫」首先從花蓮縣吉安鄉北昌村、新城鄉佳林村推動，包括健康照顧、環保、社區綠化等。', 'On 22 December 1996, Tzu Chi’s community volunteer plan began in Beichang Village in Ji’an and Jialin Village in Xincheng, both in Hualien County. It covered health care, recycling, and greening the neighbourhood.')],
        s: ['f196'] },
      { k: 'street', bare: 1, h: T('按住處，重新分組', 'Regrouped by where they live'),
        lead: T('一九九七年二月起，全省慈濟人進行分區改組。', 'From February 1997, Tzu Chi volunteers across Taiwan were reorganised by area.'),
        q: { zh: '以志工所居住的區域來畫分組別，藉由距離的拉近，凝聚同區慈濟人的向心力', en: 'Groups were drawn according to where volunteers live, so that shorter distances would bring volunteers in the same area closer together.', who: DY },
        a: T('改組前：依人際關係', 'Before: by personal ties'), b2: T('改組後：依住處', 'After: by address'),
        note: T('窗和顏色是示意。一九九七年二月是這份記錄所寫的改組起點，本頁不把它寫成全臺統一的成立日。', 'The windows and colours are illustrations. February 1997 is the starting point given in this record. This page does not treat it as a single founding date for all of Taiwan.'),
        s: ['f202'] },
      { k: 'story', lay: 'T', date: '1997.10.09', h: T('改組不是一紙名單', 'More than a new list of names'),
        p: [T('第一波組織調整，讓志工面臨許多情感的牽絆。部分志工因為不能與舊屬資深委員同組活動感到失落，擔任組長的志工面對新委員加入，也有些惶恐。', 'The first round of changes tugged at many ties of feeling. Some volunteers felt a sense of loss at no longer working with the senior commissioners they had known, and some group leaders felt uneasy as new commissioners joined them.'),
          T('上人在臺北分會與北區各區組長座談，提出「合作觀」、「學習觀」、「製造觀」勉勵眾人，希望大家分工合作，放下身段，懂得引導新人。', 'Meeting group leaders of the northern region at the Taipei branch, Master Cheng Yen encouraged everyone with three outlooks: cooperation, learning, and bringing in new people. She hoped they would share the work, set aside their standing, and learn to guide newcomers.')],
        s: ['f196'] }
    ] },
    { id: 'c2b', era: 'e00', y: '2003', nav: T('像一個球', 'Like a ball'), b: [
      { k: 'story', lay: 'T', date: '2003', h: T('沒有上一層', 'No level above'),
        p: [T('二〇〇三年，上人正式宣布調整志工組織架構，以合心、和氣、互愛、協力為名，實施功能分組。八月三十一日至九月七日，上人行腳全臺，向弟子宣布這項更動。', 'In 2003, Master Cheng Yen formally announced a new structure for volunteers, named Harmony of Hearts, Peace, Mutual Love, and Joint Effort, with groups organised by function. From 31 August to 7 September she travelled around Taiwan and announced the change to her disciples.'),
          T('四組的分工是「合心承擔傳承、和氣負責布達、互愛進行規畫、協力落實執行」。', 'The division of work was this: Harmony of Hearts carries on the legacy, Peace passes on information, Mutual Love does the planning, and Joint Effort puts things into practice.')],
        q: { zh: '「合心、和氣、互愛、協力」就像一個球，合心不一定在上面，不是一階一階，也不是上一層，所以沒有「上面的這麼說」，而是一層一層合心，合抱起來就是圓的，是真的平等。', en: 'Harmony of Hearts, Peace, Mutual Love and Joint Effort are like a ball. Harmony of Hearts is not necessarily on top. It is not a staircase, nor a level above, so there is no such thing as “those above said so”. Layer by layer, hearts come together, and held together they form a sphere. That is true equality.', who: SR('二〇〇三年七月二十七日', '27 July 2003') },
        s: ['f265', 'o030831'] },
      { k: 'story', lay: 'T', date: '2003', h: T('二十個人', 'Twenty people'),
        p: [T('協力組是慈濟志工團體中的最小單位。', 'The Joint Effort team is the smallest unit among Tzu Chi volunteers.')],
        q: { zh: '一組協力組若超過二十人就要分組，帶起來才會很溫馨。組長要瞭解這二十個人的家庭背景、心態等等。像媽媽照顧幾個孩子，或是一個姊姊帶幾個弟弟、妹妹一樣，關懷他的心理，關懷他的行動，要很有家的味道，小組愈小愈精，關懷愈密。', en: 'If a Joint Effort team has more than twenty people, it should divide, so that leading it stays warm. The leader should know these twenty people’s family background and state of mind, like a mother looking after a few children, or an elder sister with her younger brothers and sisters. Care about how they feel and what they do. It should feel like home. The smaller the group, the finer it is, and the closer the care.', who: SR('二〇〇三年七月二十七日', '27 July 2003') },
        s: ['f265', 'x2635'] },
      { k: 'rec', items: [
        { d: '1997.08', zh: '香港分會遷往九龍塘，灣仔舊會址改為共修處，作為港島區志工開會共修的處所。', en: 'The Hong Kong branch moves to Kowloon Tong. Its old premises in Wan Chai become a place for Hong Kong Island volunteers to meet and practise.' },
        { d: '2012.06.12', zh: '東京八王子僅十坪大的「百草園」共修處啟用，是東京除了分會之外的第一個社區道場。', en: 'A small practice space of ten ping, the Hundred Herbs Garden, opens in Hachioji, Tokyo. It is the first community practice centre in Tokyo apart from the branch office.' }
      ], s: ['f169', 'f146'] }
    ] },

    /* 3 平常的日子 */
    { id: 'c3a', era: 'e90', y: '1998–2015', nav: T('東家和西家', 'East house, west house'), ask: T('沒有颱風的日子，他們做什麼？', 'And on days with no typhoon, what do they do?'), b: [
      { k: 'story', lay: 'T', date: '1998–1999', h: T('東家和西家', 'East house, west house'),
        p: [T('一九九八年四月三十日，談到臺灣社會高齡化和獨居老人的問題，上人說：', 'On 30 April 1998, speaking about Taiwan’s ageing society and older people living alone, Master Cheng Yen said:')],
        q: { zh: '我一直思考著，如何使老人在人生的最後，過著有尊嚴的生活。', en: 'I have been thinking about how older people can live with dignity in the last part of their lives.', who: SR('一九九八年四月三十日', '30 April 1998') },
        more: [T('《衲履足跡》記下她的想法：人人互為親人，平時相互關懷，有事則相互幫助。西家的人因忙碌而無法照顧家中老人時，東家就能前往關懷。', 'The record of her travels sets down her thinking: people treat one another as family, look out for one another in ordinary times, and help when something happens. When the family to the west is too busy to look after an older person, the family to the east can go and see them.'),
          T('隔年五月，慈濟擴大社區獨居老人關懷行動，結合「社區志工」制度，與臺北市政府推動「臺北市獨居長者照顧方案」。', 'In May the following year, Tzu Chi widened its care for older people living alone, using its community volunteer system, and worked with the Taipei City Government on a care programme for them.')],
        q2: { zh: '事實上，健康的老人也可以當志工。', en: 'In fact, healthy older people can be volunteers too.', who: SR('一九九八年四月三十日', '30 April 1998') },
        s: ['f196'] },
      { k: 'clock', bare: 1, h: T('雙和的一天', 'A day at Shuanghe'),
        lead: T('二〇一五年，慈濟環保站加入社區照顧關懷據點。以雙和聯絡處為例，每天是這樣過的。', 'In 2015, Tzu Chi recycling stations joined the community care centre scheme. The Shuanghe office shows what a day looks like.'),
        steps: [T('量血壓', 'Blood pressure checks'), T('上午十點，健康操', '10 a.m. exercises'), T('問卷，了解健康情況', 'A questionnaire on health'), T('一起做環保', 'Recycling together'), T('午餐共餐', 'Lunch together')],
        note: T('鐘和窗是示意。原文只寫明上午十點，其餘是原文列舉的先後，不是時間表。', 'The clock and window are illustrations. The source gives only the time of 10 a.m. The rest follow the order in which it lists them, and are not a timetable.'),
        s: ['f378'] },
      { k: 'story', lay: 'T', date: '2015', h: T('與人群互動', 'Being among people'),
        p: [T('四大服務寫得很平實：「環保回收護大地」、「陪伴關懷不孤單」、「健康促進身體好」、「幸福共餐沒煩惱」。', 'The four services are put plainly: recycling to protect the earth, company so no one is lonely, activities to stay healthy, and a shared meal without worries.')],
        q: { zh: '我們的長照方法，就是盡量讓老人家與人群互動，也讓他們覺得生活有尊嚴。', en: 'Our approach to long-term care is to help older people be among others as much as possible, and to feel that their lives have dignity.', who: T('證嚴上人，《證嚴法師衲履足跡》冬之卷', 'Dharma Master Cheng Yen, from the record of her travels, winter volume') },
        s: ['f378'] }
    ] },
    { id: 'c3b', era: 'e20', y: '2019–2020', nav: T('當地陪伴當地', 'Local people, local elders'), b: [
      { k: 'story', lay: 'T', date: '2019.07.13', h: T('這邊有這麼多朋友', 'So many friends here'),
        p: [T('二〇一九年七月十三日，慈濟基金會第一間社區長照機構日照中心在苗栗園區成立。本頁不把它當作慈濟照顧長者的起點。', 'On 13 July 2019, the Tzu Chi Foundation’s first community long-term care day centre opened at its Miaoli campus. This page does not treat it as the start of Tzu Chi’s care for older people.')],
        q: { zh: '他們以前可能在家裡，就覺得比較孤獨，可是到這邊來就有這麼多朋友。', en: 'At home they may have felt rather lonely, but here they have so many friends.', who: T('吳琦瑋，苗栗日照中心照服員', 'Wu Qi-wei, care worker at the Miaoli day centre') },
        q2: { zh: '當地菩薩陪伴當地的長者，期待我們身心靈，都讓他們很安穩自在。', en: 'Local bodhisattvas keep local elders company. We hope that in body, mind and spirit, they can feel settled and at ease.', who: SR('二〇一九年七月十三日', '13 July 2019') },
        s: ['f440'] },
      { k: 'obj', o: 'win', c: T('窗是示意。', 'The window is an illustration.') },
      { k: 'story', lay: 'T', date: '2020', h: T('不會打字，就用說的', 'If you cannot type, speak'),
        p: [T('馬來西亞從三月十八日起實施行動管制令，慈濟大型活動暫停。芙蓉的慈濟志工黃秀珍和媽媽，每晚上線和法親一起共修。', 'Malaysia’s movement control order began on 18 March, and large Tzu Chi activities stopped. In Seremban, the volunteer Huang Xiu-zhen and her mother went online each evening to practise with Dharma companions.'),
          T('「老菩薩」是慈濟人對年長志工的敬稱。', '“Elder bodhisattva” is how Tzu Chi people respectfully address older volunteers.')],
        q: { zh: '許多老菩薩不會在群組平臺打字，資深的法親鼓勵他們採用錄音方式發表聞法心得', en: 'Many elder bodhisattvas could not type in the group chat, so senior Dharma companions encouraged them to share what they had learned by voice recording.', who: T('黃秀珍，《慈濟》月刊 642 期，二〇二〇年五月一日', 'Huang Xiu-zhen, Tzu Chi Monthly, no. 642, 1 May 2020') },
        s: ['f451'] }
    ] },

    /* 4 災難來的時候 */
    { id: 'c4a', era: 'e90', y: '1997–1999', nav: T('好厝邊', 'Good neighbours'), ask: T('燈都滅了，怎麼辦？', 'When the lights go out, what then?'), b: [
      { k: 'story', lay: 'T', date: '1997.08.18', h: T('居民搬來鍋碗瓢盆', 'Residents brought their pots and pans'),
        p: [T('一九九七年八月十八日，溫妮颱風帶來豪雨，汐止林肯大郡擋土牆崩塌，造成二十八人死亡，近五十人輕重傷，兩百戶房屋毀損。', 'On 18 August 1997, heavy rain from Typhoon Winnie brought down a retaining wall at the Lincoln Mansions in Xizhi. Twenty-eight people died, nearly fifty were injured, and two hundred homes were damaged.'),
          T('慈濟志工正式區域化的時間不算長，成效已在這次風災中顯現。內湖、士林、新莊的災情，均由當區委員就近動員協助。', 'Tzu Chi volunteers had not been organised by area for long, but the results showed in this storm. In Neihu, Shilin and Xinzhuang, commissioners of each area mobilised on the spot.')],
        q: { zh: '在地緣人脈上的優勢，省下不少人員調度的時間，而熱食烹煮供應，也因平日即掌握區域內各項資源，熟悉市場、超商所在，採買、運送過程迅速完成', en: 'Being on the spot and knowing people saved much of the time needed to deploy volunteers. Hot meals too were supplied quickly, because volunteers already knew the local resources and where the markets and shops were, and buying and delivery were soon done.', who: DY },
        more: [T('林肯大郡災變一發生，住在社區內的黃明輝聯合鄰居加入搶救，也立即聯絡汐止地區慈濟人前來支援。', 'When the Lincoln Mansions disaster struck, Huang Ming-hui, who lived in the complex, joined neighbours in the rescue and immediately called Tzu Chi volunteers in Xizhi for support.'),
          T('得知師兄姊為煮食的器具傷神，當地居民主動搬來家中的鍋碗瓢盆，甚至加入烹煮行列。這份報導稱趕來的慈濟人是「好厝邊」，厝邊是閩南語的鄰居。', 'Hearing that the volunteers were short of cooking gear, residents brought pots and pans from home, and some joined in the cooking. The report called the volunteers who came “good neighbours”.')],
        s: ['f202'] },
      { k: 'dark', bare: 1, h: T('一九九九年九月二十一日', '21 September 1999'),
        q: { zh: '互報平安後，鄰近災區的志工即刻摸黑前往勘察，幹部們則成立救災中心匯整各地災情，調度志工採補運送物資、前往醫院發放慰問金應急，或至殯儀館助念、撫慰家屬。', en: 'Once they had told one another they were safe, volunteers near the disaster areas set out at once in the dark to survey the damage. Team leaders set up relief centres to gather reports, and sent volunteers to buy and deliver supplies, to hospitals to give out emergency funds, or to funeral homes to chant and comfort families.', who: T('《慈濟道侶》329 期，一九九九年十月一日', 'Tzu Chi Companions, no. 329, 1 October 1999') },
        note: T('街和窗是示意，不是當晚的實景。', 'The street and windows are illustrations, not the scene that night.'),
        s: ['f219'] },
      { k: 'photos', lay: 'one', ph: [{ i: 'c_pot', c: otdC('九二一之後，師姊為鄉親煮食。大鍋局部。', 'After the 21 September earthquake, Tzu Chi sisters cook for people affected. Detail of the pots.') }] },
      { k: 'story', lay: 'T', date: '1999.09.24', h: T('平時熟悉鄰里', 'Knowing the neighbourhood in ordinary times'),
        p: [T('地震後第三天，上人趕赴臺中，肯定慈濟人平時落實社區志工，熟悉鄰里、主動關懷，因此才能在這次災變中迅速動員。', 'On 24 September, Master Cheng Yen hurried to Taichung. She affirmed that because Tzu Chi people had put the community volunteer system into practice, knew their neighbourhoods and reached out in ordinary times, they were able to mobilise quickly in this disaster.'),
          T('九二一的記錄這樣總結：「落實社區志工，發揮了互助合作的功能。」', 'The record of the earthquake sums it up: putting community volunteering into practice brought mutual help and cooperation into play.')],
        s: ['f196', 'f219'] }
    ] },
    { id: 'c4b', era: 'e20', y: '2009–2024', nav: T('防災也回到社區', 'Preparedness comes home'), b: [
      { k: 'story', lay: 'T', date: '2009.08.13', h: T('約八千人的一天', 'A day of about eight thousand'),
        p: [T('八八水災後，慈濟發起全臺志工馳援。各區志工響應，跨縣市前往關懷、協助清掃。二〇〇九年八月十三日這一天，動員志工約八千人。', 'After the Typhoon Morakot floods, Tzu Chi called on volunteers across Taiwan. Volunteers from each area crossed county lines to offer care and help clean up. On 13 August 2009 alone, about eight thousand volunteers were mobilised.'),
          T('同一段時間，救災協調中心也持續與各社區、山區、沿海地區保持聯繫，並注意社區狀況。', 'In the same period, the relief coordination centre stayed in contact with communities, mountain areas and the coast, and kept watch on conditions in each community.')],
        s: ['f329'] },
      { k: 'photos', lay: 'one', ph: [{ i: 'c_legs', c: otdC('八八水災，志工涉水搬運物資。局部。', 'Volunteers carry supplies through water after the Typhoon Morakot floods. Detail.') }] },
      { k: 'story', lay: 'T', date: '2020', h: T('放在門外的口罩', 'Masks left outside the door'),
        p: [T('二〇二〇年，新冠疫情蔓延。歐美的華裔慈濟志工減少外出，不論是否熟悉裁縫，都開始縫製布口罩。許多當地民眾也加入為社區長者縫製口罩的行列。', 'In 2020, as COVID-19 spread, ethnic Chinese Tzu Chi volunteers in Europe and America went out less, and whether or not they knew how to sew, began making cloth masks. Many local residents joined them in sewing masks for older people in their communities.'),
          T('新製的口罩透過郵寄發送，或放置門外供人取用。', 'The new masks were sent by post, or left outside the door for people to take.')],
        s: ['f451'] },
      { k: 'story', lay: 'T', date: '2019–2024', h: T('平時先學', 'Learning in ordinary times'),
        p: [T('二〇一九年十一月二十八日，慈濟與新北市政府合作，首次協辦防災士培訓課程，共五百三十七人通過培訓。二〇二〇年七月二日，慈濟基金會獲內政部消防署核定為防災士培訓機構，七月十九日在高雄靜思堂辦理第一期課程。', 'On 28 November 2019, Tzu Chi worked with the New Taipei City Government to co-host disaster preparedness training for the first time, and 537 people passed. On 2 July 2020, the Tzu Chi Foundation was approved by the National Fire Agency as a training body, and held its first course at the Kaohsiung Jing Si Hall on 19 July.'),
          T('防災士的課程「學科、術科雙軌併進，還有課後測驗，全部完成才可取得防災士合格證書。」', 'The course for disaster preparedness officers combines classroom and practical work, with a test at the end, and a certificate is given only when all of it is complete.'),
          T('截至二〇二四年，慈濟自辦或與外單位協辦培訓了 18,359 位防災士，參與對象包含慈濟志工與一般民眾。', 'By 2024, Tzu Chi had trained 18,359 preparedness officers, on its own or with other bodies. They include both Tzu Chi volunteers and members of the public.')],
        s: ['f457', 'ico'] }
    ] },

    /* 5 一支扶手之前 */
    { id: 'c5a', era: 'e20', y: '2020–2021', nav: T('從門口到床邊', 'From the door to the bed'), ask: T('阿婆不想改，可以嗎？', 'What if the old lady doesn’t want it changed?'), b: [
      { k: 'rail', bare: 1, h: T('一支扶手之前', 'Before one handrail'),
        steps: [[T('里鄰提報', 'Neighbourhood referral'), T('里長、鄰長提報', 'Borough and neighbourhood chiefs report')], [T('一起丈量', 'Measuring together'), T('社工偕同志工走進家戶', 'A social worker and volunteers go in')], [T('本人同意', 'Consent'), T('住在裡面的人點頭', 'The person who lives there says yes')], [T('施工試用', 'Fitting and trying'), T('依身高和習慣，再扶扶看', 'Fitted to height and habit, then tried')], [T('完工清掃', 'Clearing up'), T('家具復位，大掃除', 'Furniture back, a good clean')]],
        note: T('平面圖是示意。這五步是本頁依報導整理的順序，不是專案公告的流程表。', 'The floor plan is an illustration. These five steps are this page’s summary of reports, not an official procedure.'),
        s: ['ico', 'f456'] },
      { k: 'story', lay: 'T', date: '2020', h: T('走進家門', 'Through the door'),
        p: [T('二〇二〇年一月，慈濟基金會推出「安穩家園．美善社區」專案，簡稱安美，關懷偏鄉和獨居長者的居家安全。', 'In January 2020, the Tzu Chi Foundation launched its Safe Homes, Good Communities project, known for short as Anmei, to look after home safety in remote areas and for older people living alone.'),
          T('透過里長、鄰長提報，協助獨居長者、兩老相依、隔代教養、身心障礙者及經濟弱勢者。社工偕同志工走進家戶實地丈量，裝置安全扶手、無障礙坡道、止滑措施，改善照明。', 'Through referrals by borough and neighbourhood chiefs, the project helps older people living alone, elderly couples, grandparents raising grandchildren, people with disabilities, and households in financial difficulty. A social worker and volunteers go in to measure, then fit handrails, ramps and non-slip surfaces, and improve the lighting.'),
          T('基隆海濱里，里長提報了兩戶。志工提前會勘，除了原本要裝的扶手，還發現阿嬤家照明設備不足，再幫她的廁所裝了電燈。', 'In Haibin Borough in Keelung, the borough chief referred two households. Volunteers visited ahead of time. Besides the planned handrail, they saw that one grandmother’s home lacked light, and also put a lamp in her toilet.')],
        s: ['f456', 'ico'] },
      { k: 'obj', o: 'tape', c: T('卷尺是示意。', 'The tape measure is an illustration.') },
      { k: 'story', lay: 'T', date: '2020', h: T('點頭的是住在裡面的人', 'The one who nods is the one who lives there'),
        p: [T('臺中北屯東山里有一位阿嬤，屋頂破漏，廁所在三十餘公尺的陡坡上。她雖然覺得害怕，但認為不需要改變，一再婉拒志工的好意。', 'A grandmother in Dongshan Borough, Beitun, Taichung, had a leaking roof and a toilet more than thirty metres up a steep slope. Though it frightened her, she felt nothing needed changing, and declined the volunteers’ offer again and again.'),
          T('志工沒有替她決定，而是聯絡她的兒子和女兒來溝通。「經聯絡兒子及女兒來勸說，終於獲得阿嬤首肯。」', 'The volunteers did not decide for her. They contacted her son and daughter, who came to talk with her, and in the end she gave her consent.')],
        s: ['f456'] },
      { k: 'story', lay: 'T', date: '2021.05.03', h: T('送便當的時候看見', 'Seen while bringing lunch'),
        p: [T('新北貢寮的志工，利用送餐、家訪的時候，留意獨居長者的居家環境。天天為一位九十多歲的阿嬤送便當來，除了話家常，也看見阿嬤的困擾。', 'Volunteers in Gongliao, New Taipei, watch the homes of older people living alone when they deliver meals and visit. Bringing lunch every day to a grandmother in her nineties, they chatted with her, and also saw what troubled her.'),
          T('前門、後門都有高低階，廁所馬桶旁和每天上下的樓梯也要扶。志工依照阿嬤的身高和使用習慣裝上扶把。', 'There were steps at the front and back doors, and she needed support beside the toilet and on the stairs she used every day. The volunteers fitted the rails to her height and her habits.')],
        s: ['f456'] },
      { k: 'obj', o: 'bento', c: T('便當是示意。', 'The lunch box is an illustration.') },
      { k: 'photos', lay: 'one', ph: [{ i: '20200115-1_09', c: otdC('白牆上的扶手和手，局部。', 'A handrail on a white wall, and a hand. Detail.') }] },
      { k: 'story', lay: 'T', date: '2021.03.29', h: T('最後一件事', 'The last job'),
        p: [T('臺北萬華一戶兩老的家，鋪好止滑地板和扶手之後，志工再動員做家具的復位和大掃除。「包括衛浴、廚房、牆壁、門縫等支微細節處，志工都沒忽略」。', 'At the home of an elderly couple in Wanhua, Taipei, once the non-slip floor and handrails were in, volunteers returned to put the furniture back and clean the house. Bathroom, kitchen, walls, even the gaps around the doors: they missed nothing.')],
        s: ['f456'] }
    ] },
    { id: 'c5b', era: 'heart', y: '2020–2025', nav: T('一戶一戶', 'One home at a time'), b: [
      { k: 'story', lay: 'T', date: '2020.05', h: T('學生也來了', 'Students came too'),
        p: [T('二〇二〇年五月十六、二十三日，花蓮壽豐的兩天訪查分成十組，訪視五個村落。每組三至四位同學，跟著一位營繕專業的師兄及訪視師姊。', 'On 16 and 23 May 2020, a two-day survey in Shoufeng, Hualien, split into ten groups and visited five villages. Each group had three or four students, with a Tzu Chi brother skilled in building work and a sister experienced in home visits.'),
          T('現場的記錄不再是紙筆，而是利用 APP 軟體，訪視成員在現場即可決定修繕內容。', 'Notes were no longer taken with pen and paper but with an app, and the visiting team could decide on the repairs on the spot.')],
        note: T('手機畫面裡有個案資料，本頁不放。', 'Phone screens show details of the people visited, so this page does not show them.'),
        s: ['f456'] },
      { k: 'story', lay: 'T', date: '2021–2023', h: T('跳島', 'Island hopping'),
        p: [T('二〇二一年三月十九日，安美專案在澎湖縣啟動。二〇二三年五月二日，延伸到馬祖。', 'On 19 March 2021, the project began in Penghu County. On 2 May 2023, it reached Matsu.')],
        q: { zh: '師姑師伯收集完貨(材料)之後，會搭著船，載著他們的工具，就我們講的跳島的方式，進到離島地區。', en: 'Once the volunteers have gathered the materials, they take boats, carrying their tools, and go out to the outlying islands by what we call island hopping.', who: T('李冠蓓，慈濟慈發處社工', 'Li Guan-bei, Tzu Chi social worker') },
        s: ['o200115'] },
      { k: 'story', lay: 'T', date: '2025.10', h: T('一戶一戶', 'One home at a time'),
        p: [T('從二〇二〇年專案啟動，到二〇二五年十月底，遍及全臺 22 個縣市、299 個鄉鎮。超過 10 萬 4 千人次的志工投入，為 16,167 戶家庭完成了修繕。', 'From the start of the project in 2020 to the end of October 2025, it reached 299 townships in 22 counties and cities across Taiwan. More than 104,000 volunteer shifts completed repairs for 16,167 households.')],
        q: { zh: '之前復健後要從地上起身，都得辛苦拉著床緣，現在輕輕一拉扶手就能站起來。門檻處也有扶手可攙扶，安全又方便。', en: 'After my physiotherapy I used to struggle up from the floor by pulling on the edge of the bed. Now one light pull on the handrail and I can stand. There is a handrail at the doorstep too. It is safe and convenient.', who: T('吳淑女，七十四歲的慈濟志工', 'Wu Shu-nu, a 74-year-old Tzu Chi volunteer') },
        s: ['o200115', 'ico'] },
      { k: 'quote', big: 1, zh: '你扶扶看，好嗎？（好。）有讚嗎？（讚！）', en: 'Try holding it, all right? (All right.) Is it good? (Good!)', who: T('志工與長者，二〇二一年五月三日大愛新聞', 'A volunteer and an older resident, Da Ai News, 3 May 2021'), s: ['f456'] }
    ] },

    /* 6 在馬來西亞 */
    { id: 'c6a', era: 'my', y: '1993–2006', nav: T('一間廚房', 'A kitchen'), ask: T('我們這裡也有嗎？', 'Do we have this here too?'), b: [
      { k: 'story', lay: 'T', date: '1993.10.14', h: T('修一間廚房', 'Repairing a kitchen'),
        p: [T('一九九三年十月十四日，馬六甲慈濟人為貧病的李先生一家修建廚房，因而感動鄰居捐助建材。', 'On 14 October 1993, Tzu Chi volunteers in Melaka rebuilt the kitchen of Mr. Li’s family, who were poor and unwell. Their neighbours were moved to donate building materials.'),
          T('那時「社區志工」還沒有提出，鄰里之間的這分互助，已經在這裡發生。', 'The community volunteer idea had not yet been put forward, yet this kind of help between neighbours was already happening here.')],
        s: ['f145'] },
      { k: 'rec', items: [
        { d: '1996.02', zh: '吉隆坡聯絡處正式成立。同書年表另記為一九九五年。', en: 'The Kuala Lumpur liaison office is formally founded. A chronology in the same history gives 1995.' },
        { d: '1996.10.20', zh: '濟雨師兄發心提供的吉隆坡聯絡處新會所，舉行成立典禮。', en: 'A ceremony opens the liaison office’s new premises, offered by Brother Ji-yu.' },
        { d: '2006', zh: '古晉落實社區化。', en: 'Kuching organises by community.' }
      ], s: ['x17', 'x127', 'f145', 'x2662'] },
      { k: 'story', lay: 'T', date: '2006', h: T('各自的社區', 'Each in their own neighbourhood'),
        p: [T('早期，古晉志工每月輪流在同一個社區做環保。二〇〇六年落實社區化後，每月同時在各自的社區做環保，由此也接引了許多志工和會員。', 'In the early years, Kuching volunteers took turns each month to do recycling in one neighbourhood. After organising by community in 2006, they did recycling in their own neighbourhoods at the same time each month, and this brought in many volunteers and members.')],
        s: ['x2662'] },
      { k: 'story', lay: 'T', date: '雙溪毛糯', h: T('不講次數', 'Not counting the times'),
        p: [T('在雙溪毛糯痲瘋病院，志工告訴院友，每天存下一角錢，就可以做善事幫助人。院友奔走相告，響應竹筒歲月。居住在小木屋的老人家感恩慈濟人的長期幫助，覺得能回饋付出，更積極共襄盛舉。', 'At the Sungai Buloh leprosy settlement, volunteers told residents that saving ten sen a day was enough to do good. Residents spread the word and joined in the bamboo bank saving. The elders in the small wooden houses, grateful for Tzu Chi’s long years of help, were glad to give back, and took part all the more.')],
        q: { zh: '能捐才是福氣，幫助人是不講次數的。', en: 'Being able to give is the real blessing. Helping others is not something you count.', who: T('院友錦緞', 'Jin-duan, a resident') },
        s: ['x165'] }
    ] },
    { id: 'c6b', era: 'my', y: '2007–2025', nav: T('下班以後', 'After work'), b: [
      { k: 'night', bare: 1, h: T('下班以後', 'After work'),
        lead: T('大多數志工和民眾白天要上班，下班後才有時間做環保。二〇〇七年底，雪隆慈濟開始嘗試夜間環保，當時環保站較少，也沒有回收商願意夜晚來載，推行不易。雙溪毛糯的志工把一棟雙層店屋裝修成環保站，也是如此。', 'Most volunteers and residents work during the day, and have time for recycling only after work. In late 2007, Tzu Chi in Selangor and Kuala Lumpur began trying evening recycling. There were few stations then, and no collector willing to come at night, so it was not easy. It was the same when volunteers in Sungai Buloh turned a two-storey shophouse into a station.'),
        q: { zh: '大多數的志工都是上班族，只能利用下班或假日的時間整理', en: 'Most of the volunteers were office workers, and could only do the work after hours or on holidays.', who: T('《馬來西亞慈濟史 雪隆分會》（2）', 'History of Tzu Chi Malaysia: Selangor and Kuala Lumpur Branch, vol. 2') },
        note: T('店屋和燈是示意。截至二〇二二年，雪隆分會轄下約一半的環保站都帶動夜間環保。', 'The shophouses and lights are illustrations. By 2022, about half the stations under the branch were running evening recycling.'),
        s: ['x2637', 'x2640'] },
      { k: 'story', lay: 'T', date: '2010–2011', h: T('一個協力組，一個環保站', 'One team, one station'),
        p: [T('二〇一〇年十一月，雪隆分會執行長簡慈露走訪社區各環保站。十八日到吉隆坡的郊外嶺環保站，看到志工與社區居民互相關心，和樂融融。', 'In November 2010, branch CEO Jian Ci-lu visited recycling centres in the community. On the 18th she came to the Jiaowailing station in Kuala Lumpur, and saw volunteers and residents looking out for one another in harmony.'),
          T('十一月二十九日，她回到臺灣，向上人發願，喊出「一協一站」：期盼以慈濟志工團體中的最小單位，一個協力組負責一個環保站，做為努力的方向。', 'On 29 November, back in Taiwan, she made a vow to Master Cheng Yen and called out the goal of one team, one station: the hope that the smallest unit among volunteers, a Joint Effort team, would take charge of one station. It was a direction to work toward.'),
          T('這是努力的方向，不是全部社區都已做到。環保站的故事，環保那一站已經講過，這裡看的是誰在動手：住在附近、下了班的人。', 'This was a goal, not a claim that every community had got there. The stories of the stations themselves are told at the recycling stop. What matters here is who did the work: people who live nearby, after their day’s job.')],
        s: ['x2635'] },
      { k: 'cards', ph: [{ i: 'comm_night', c: T('大城堡環保站夜景，局部。照片：李文傑。', 'The Dachengbao station at night. Detail. Photo: Li Wen-jie.') }, { i: 'comm_bags', c: T('夜間環保，局部。照片：李文傑。', 'Evening recycling. Detail. Photo: Li Wen-jie.') }], s: ['x2637'] },
      { k: 'photos', lay: 'one', ph: [{ i: 'comm_kl', c: T('吉隆坡靜思堂外觀。二〇一〇年九月十六日動土，二〇一四年五月十一日啟用。照片：朱國財。', 'The Kuala Lumpur Jing Si Hall from outside. Ground was broken on 16 September 2010, and it opened on 11 May 2014. Photo: Zhu Guo-cai.') }] },
      { k: 'story', lay: 'T', date: '2022', h: T('那我們隔壁的阿婆呢？', 'And what about the old lady next door?'),
        p: [T('截至二〇二二年，雪隆分會及轄下據點有志工 10,087 人，受證慈誠、委員 3,101 人。這是雪隆及轄下的數字，不是全馬。古晉支會轄下約有三百位志工。', 'By 2022, the Selangor and Kuala Lumpur branch and its local offices had 10,087 volunteers, including 3,101 certified commissioners and Faith Corps members. These are branch figures, not figures for all of Malaysia. The Kuching branch had about three hundred volunteers.')],
        s: ['x123', 'x2662'] },
      { k: 'story', lay: 'T', date: '2025.07.15', h: T('把床換好', 'New beds'),
        p: [T('二〇二五年七月十五日，二百五十位志工來到雪蘭莪新古毛的 Taman Sinar Harapan 關懷機構，把四十張不鏽鋼病床組裝後送入院舍，另帶來三十二張防水床墊、四十九個防水枕頭。慈濟自一九九六年起持續關懷這裡。志工平日到場，看見舊床鏽蝕、部分院友沒有床褥，便依院友的需要籌備替換。', 'On 15 July 2025, 250 volunteers came to the Taman Sinar Harapan care home in Kuala Kubu Bharu, Selangor. They assembled 40 stainless steel beds and brought them in, with 32 waterproof mattresses and 49 waterproof pillows. Tzu Chi has cared for this home since 1996. On their regular visits, volunteers had seen rusted beds and residents without mattresses, and prepared the replacements around what residents needed.'),
          T('六段路走下來，慈濟人把關懷帶回自己住的社區。從平日認識鄰里做起，人人都能付出一分關懷。', 'After six stretches, Tzu Chi volunteers have carried care back to the communities where they live. Starting by knowing one’s neighbours, everyone can offer care.')],
        s: ['nBeds'] }
    ] },

    { id: 'cnum', era: 'num', y: '數字', yen: 'Numbers', h: T('數字裡的社區志工', 'Community volunteers in numbers'), nav: T('數字', 'Numbers'), b: [{ k: 'ledger' }] },
    { id: 'call', era: 'all', y: '沿革', yen: 'Timeline', h: T('沿革與影音', 'Timeline and films'), lead: T('六段路之外的日期和原始出處，都在這裡。', 'Dates and original sources beyond the six stretches are all here.'), nav: T('沿革與影音', 'Timeline and films'), b: [{ k: 'films' }, { k: 'records' }, { k: 'sources' }] }
  ];

  CH.blocks = [
    { id: 'c1', y: '1996', h: T('從遠處趕來', 'Rushing in from afar'), ch: ['c1a', 'c1b'], cover: 'c_lamp', tun: 'c_b1' },
    { id: 'c2', y: '1996–2003', h: T('回到住的地方', 'Back to where you live'), ch: ['c2a', 'c2b'], cover: 'c_win', tun: 'c_b2' },
    { id: 'c3', y: '1998–2020', h: T('平常的日子', 'Ordinary days'), ch: ['c3a', 'c3b'], cover: 'c_bento', tun: 'c_b3' },
    { id: 'c4', y: '1997–2024', h: T('災難來的時候', 'When disaster comes'), ch: ['c4a', 'c4b'], cover: 'c_legs', tun: 'c_b4' },
    { id: 'c5', y: '2020–2025', h: T('一支扶手之前', 'Before one handrail'), ch: ['c5a', 'c5b'], cover: '20200115-1_09', tun: 'c_b5' },
    { id: 'c6', y: '1993–2025', h: T('在馬來西亞', 'In Malaysia'), ch: ['c6a', 'c6b'], cover: 'comm_kl', tun: 'c_b6' }
  ];

  CH.ui = {
    hubK: T('社區志工', 'Community Volunteerism'), hubH: T('六段路，從遠處走回自己住的街', 'Six stretches, from far away back to your own street'), hubS: T('一段一段走。走完一段，就蓋一個章。', 'Walk them one at a time. Each one you finish earns a stamp.'),
    start: T('從這裡開始', 'Start here'), walked: T('走過了', 'Walked'), nextTun: T('下一個時空隧道', 'Next time tunnel'), nextOf: T('下一段', 'Next'), back: T('回六段路', 'Back to the six stretches'), road: T('回八大腳印', 'Back to the Eight Footprints'),
    skip: T('跳過', 'Skip'), left: T('這一段還有', 'Still ahead'), leftU: T('個故事', 'stories'), seg: T('第 {n} 段／共 6 段', 'Part {n} of 6'), done: T('走完了這一段', 'You finished this part'), recH: T('社區志工沿革', 'Timeline')
  };

  var W25 = T('截至 2025-12-31', 'As of 31 December 2025'), W24 = T('2024 年報', 'Annual Report 2024'), WA = T('2020 至 2025-10 底', '2020 to end October 2025'), WX = T('截至 2022，雪隆分會及轄下', 'As of 2022, branch and local offices'), WK = T('截至 2022，古晉支會轄下', 'As of 2022, Kuching branch');
  CH.ledger = [
    { h: T('受證的人', 'Certified volunteers'), rows: [
      { n: '102,911', u: T('人', 'people'), l: T('全球歷年受證志工，不等於全部社區志工，也不是現時活躍人數', 'Certified volunteers worldwide over the years. Not all community volunteers, and not the number active today'), w: W25, s: 'ia3', big: 1 },
      { n: '82,870', u: T('人', 'people'), l: T('其中臺灣', 'Of these, Taiwan'), w: W25, s: 'ia3' },
      { n: '20,041', u: T('人', 'people'), l: T('其中海外', 'Of these, overseas'), w: W25, s: 'ia3' }
    ] },
    { h: T('平常的日子，臺灣', 'Ordinary days, Taiwan'), rows: [
      { n: '93,127', u: T('人次', 'visits'), l: T('社區照顧關懷據點服務，13 縣市', 'Community care centre services, 13 counties and cities'), w: T('2024 單年', '2024 alone'), s: 'r24', big: 1 },
      { n: '21', u: T('處', 'sites'), l: T('長照 A 單位，10 縣市', 'Long-term care A units, 10 counties and cities'), w: W24, s: 'r24' },
      { n: '10', u: T('處', 'sites'), l: T('長照 B 居家機構，10 縣市', 'Long-term care B home-care agencies, 10 counties and cities'), w: W24, s: 'r24' },
      { n: '6', u: T('處', 'sites'), l: T('長照 B 綜合機構，4 縣市', 'Long-term care B multi-service agencies, 4 counties and cities'), w: W24, s: 'r24' },
      { n: '105', u: T('處', 'sites'), l: T('長照 C 關懷據點，16 縣市', 'Long-term care C care points, 16 counties and cities'), w: W24, s: 'r24' }
    ] },
    { h: T('一支扶手之前，臺灣', 'Before one handrail, Taiwan'), rows: [
      { n: '16,167', u: T('戶', 'households'), l: T('安美專案完成修繕的家庭', 'Households with repairs completed under the project'), w: WA, s: 'o200115', big: 1 },
      { n: '超過 10 萬 4 千', nen: 'Over 104,000', u: T('人次', 'volunteer shifts'), l: T('投入的志工', 'Volunteers taking part'), w: WA, s: 'o200115' },
      { n: '22', u: T('縣市', 'counties and cities'), l: T('安美專案遍及', 'Reached by the project'), w: WA, s: 'o200115' },
      { n: '299', u: T('鄉鎮', 'townships'), l: T('安美專案遍及', 'Reached by the project'), w: WA, s: 'o200115' }
    ] },
    { h: T('平時先學，臺灣', 'Learning first, Taiwan'), rows: [
      { n: '18,359', u: T('位', 'people'), l: T('自辦或協辦培訓的防災士，含一般民眾', 'Preparedness officers trained by or with Tzu Chi, including members of the public'), w: T('2019 開辦至 2024', '2019 to 2024'), s: 'ico', big: 1 },
      { n: '537', u: T('人', 'people'), l: T('首次協辦培訓通過，雙和靜思堂', 'Passed the first co-hosted course, Shuanghe Jing Si Hall'), w: T('2019-11-28、29', '28–29 November 2019'), s: 'f457' }
    ] },
    { h: T('在馬來西亞：雪隆及轄下，不是全馬', 'In Malaysia: this branch only, not the whole country'), rows: [
      { n: '10,087', u: T('人', 'people'), l: T('志工', 'Volunteers'), w: WX, s: 'x123', big: 1 },
      { n: '3,101', u: T('人', 'people'), l: T('受證慈誠、委員', 'Certified Faith Corps members and commissioners'), w: WX, s: 'x123' },
      { n: '676,486', u: T('人', 'people'), l: T('會員', 'Members'), w: WX, s: 'x123' },
      { n: '97', u: T('個', 'centres'), l: T('環保站', 'Recycling centres'), w: WX, s: 'x2637' },
      { n: '17', u: T('個', 'stations'), l: T('環保教育站', 'Recycling education stations'), w: WX, s: 'x2637' },
      { n: '348', u: T('個', 'points'), l: T('環保點', 'Recycling points'), w: WX, s: 'x2612' }
    ] },
    { h: T('在馬來西亞：古晉', 'In Malaysia: Kuching'), rows: [
      { n: '4', u: T('間', 'centres'), l: T('環保站', 'Recycling centres'), w: WK, s: 'x2662' },
      { n: '27', u: T('個', 'points'), l: T('社區環保點', 'Community recycling points'), w: WK, s: 'x2662' },
      { n: '約 300', nen: 'About 300', u: T('位', 'people'), l: T('志工', 'Volunteers'), w: WK, s: 'x2662' }
    ] }
  ];
  CH.ledgerNote = T('這些數字年份、範圍和單位都不同，各自獨立，不相加。戶不等於人，人次不等於人數，雪隆及轄下不等於全馬。全馬的總數，本頁暫缺。', 'These figures cover different years, scopes and units. Each stands alone and they should not be added up. A household is not a person, a visit or shift is not a person, and one branch is not all of Malaysia. This page has no national total for Malaysia.');

  CH.films = [
    { id: 'VIzdkYJVEIU', zh: '賀伯颱風', en: 'Typhoon Herb', y: '1996' },
    { id: 'l0fVU0Ljj54', zh: '溫妮颱風', en: 'Typhoon Winnie', y: '1997' },
    { id: '9WtwGThB9lE', zh: '九二一大地震', en: 'The 21 September earthquake', y: '1999' },
    { id: 'K9xLhCqpxtc', zh: '四法', en: 'The four principles', y: '2003' },
    { id: 'N7PcGxuFN4k', zh: '四門', en: 'The four groups', y: '2003' },
    { id: 'RwYr8dLjSlk', zh: '社區照顧關懷據點', en: 'Community care centres', y: '2015' },
    { id: 'MNoACTB8ltU', zh: '苗栗日照中心', en: 'Miaoli day centre', y: '2019' },
    { id: '7F3Z8388YUk', zh: '安美專案', en: 'Safe Homes, Good Communities', y: '2020' },
    { id: 'yucGJvnD0rc', zh: '吉蘭丹靜思堂築願之路', en: 'Building towards a Jing Si Hall in Kelantan', y: '2025' },
    { id: 'WYsxB8keMCY', zh: '慈濟光隆日照中心', en: 'The Guanglong day-care centre', y: '2026' },
    { id: 'CMsH-GYxNn0', zh: '慈濟長者學堂', en: 'A senior learning programme in Melaka', y: '2026' },
    { id: 'EjutwnrNWys', zh: '馬六甲環保教育站蔬食義賣', en: 'A vegetarian charity sale at a Recycling Education Centre in Melaka', y: '2026' }
  ];
  CH.filters = [['all', T('全部', 'All')], ['org', T('組織', 'Organisation')], ['day', T('平常的日子', 'Ordinary days')], ['dis', T('災難與防災', 'Disaster and preparedness')], ['home', T('居家安全', 'Home safety')], ['my', T('馬來西亞', 'Malaysia')], ['over', T('其他海外', 'Other overseas')]];
  CH.records = [
    ['1993.10.14', 'my', '馬六甲慈濟人為貧病的李先生一家修建廚房，感動鄰居捐助建材。', 'Melaka volunteers rebuild the kitchen of Mr. Li’s family, and neighbours donate building materials.', 'f145'],
    ['1996.02', 'my', '吉隆坡聯絡處正式成立。年表另記為一九九五年。', 'The Kuala Lumpur liaison office is formally founded. A chronology gives 1995.', 'x17'],
    ['1996.08.07', 'org', '上人赴各地關懷災情，呼籲推動「社區志工」理念。', 'Master Cheng Yen visits disaster areas and calls for the community volunteer idea.', 'f196'],
    ['1996.10.20', 'my', '吉隆坡聯絡處新會所舉行成立典禮。', 'A ceremony opens the new premises of the Kuala Lumpur liaison office.', 'f145'],
    ['1996.12.10', 'org', '上人呼籲以社區為單位的慈濟志工服務計畫。', 'Master Cheng Yen calls for a volunteer service plan based on the community.', 'f196'],
    ['1996.12.14', 'org', '北區委員聯誼座談，上人談慈濟福田回歸社區。', 'At a northern commissioners’ meeting, Master Cheng Yen speaks about bringing Tzu Chi’s work home to the community.', 'f196'],
    ['1996.12.22', 'org', '「推展社區志工計畫」首先從花蓮縣北昌村、佳林村推動。', 'The community volunteer plan begins in Beichang and Jialin villages, Hualien County.', 'f196'],
    ['1997.02', 'org', '全省慈濟人開始分區改組。', 'Volunteers across Taiwan begin regrouping by area.', 'f202'],
    ['1997.03.07', 'org', '全省社區工作推展研討會。宗教室主任黃思賢與資深委員靜暘師姊談到「社區志工人人當，家家戶戶人人安」的理想。', 'A meeting on community work. Huang Si-xian, head of the religious affairs office, and senior commissioner Sister Jing-yang speak of an ideal: everyone a community volunteer, every household at peace.', 'f196'],
    ['1997.08', 'over', '香港灣仔舊會址改為灣仔共修處。', 'The old Wan Chai premises in Hong Kong become a practice space.', 'f169'],
    ['1997.08.18', 'dis', '汐止林肯大郡擋土牆崩塌，當區志工就近動員。', 'A retaining wall collapses at the Lincoln Mansions in Xizhi, and nearby volunteers mobilise.', 'f202'],
    ['1997.10.09', 'org', '上人提出「合作觀」、「學習觀」、「製造觀」。', 'Master Cheng Yen sets out the three outlooks of cooperation, learning and bringing in new people.', 'f196'],
    ['1998.04.30', 'day', '上人談老人問題，談到健康的老人也可以當志工。', 'Master Cheng Yen speaks about older people, and says healthy older people can be volunteers too.', 'f196'],
    ['1999.05', 'day', '與臺北市政府推動「臺北市獨居長者照顧方案」。', 'Work with the Taipei City Government on a care programme for older people living alone.', 'f196'],
    ['1999.09.21', 'dis', '九二一大地震，鄰近災區的志工摸黑前往勘察。', 'The 21 September earthquake. Volunteers near the disaster areas go out in the dark to survey the damage.', 'f219'],
    ['2003.07.27', 'org', '東區慈誠委員幹部會議，上人以球比喻四合一。', 'At an eastern region meeting, Master Cheng Yen likens the four-in-one structure to a ball.', 'f265'],
    ['2003.08.31', 'org', '八月三十一日至九月七日，上人行腳全臺，宣布組織架構更動。', 'From 31 August to 7 September, Master Cheng Yen travels around Taiwan and announces the change of structure.', 'o030831'],
    ['2005.01.30', 'my', '歲末發放，雙溪毛糯院友捐出積蓄回饋。', 'At a year-end distribution, residents at Sungai Buloh give from their savings.', 'x165'],
    ['2006', 'my', '古晉落實社區化，每月同時在各自的社區做環保。', 'Kuching organises by community, and volunteers recycle in their own neighbourhoods at the same time each month.', 'x2662'],
    ['2007 年底', 'my', '雪隆慈濟開始嘗試夜間環保。', 'Tzu Chi in Selangor and Kuala Lumpur begins trying evening recycling.', 'x2637'],
    ['2009.08.13', 'dis', '八八水災，當日動員志工約八千人。', 'After the Typhoon Morakot floods, about eight thousand volunteers are mobilised on this day.', 'f329'],
    ['2010.11.18', 'my', '簡慈露參訪吉隆坡郊外嶺環保站。', 'Jian Ci-lu visits the Jiaowailing recycling centre in Kuala Lumpur.', 'x2635'],
    ['2010.11.29', 'my', '簡慈露向上人發願「一協一站」。', 'Jian Ci-lu vows to Master Cheng Yen: one team, one station.', 'x2635'],
    ['2011.04.17', 'my', '雙溪毛糯太子園環保站啟用，是「一協一站」推動後的第一個環保站。', 'The first station under one team, one station opens in Sungai Buloh.', 'x2640'],
    ['2012.06.12', 'over', '東京百草園共修處啟用。', 'The Hundred Herbs Garden practice space opens in Tokyo.', 'f146'],
    ['2015.05.27', 'day', '慈濟與花蓮市公所合作，在主和社區活動中心成立花蓮市第一個社區關懷據點。', 'With the Hualien City Office, Tzu Chi sets up the city’s first community care centre.', 'f378'],
    ['2015.09.09', 'day', '慈濟配合衛福部設立「社區照顧關懷據點」，第一階段將成立五十處。新北市雙和聯絡處舉行揭牌儀式。', 'Tzu Chi works with the health ministry to set up community care centres, with fifty planned for the first phase. The Shuanghe office holds an unveiling.', 'f378'],
    ['2016.10.06', 'over', '慈濟社區中心在史瓦帝尼動工，當時國名史瓦濟蘭。十一月十九日啟用，十一月二十五日移交本土幹部管理。', 'A Tzu Chi community centre begins construction in Eswatini, then called Swaziland. It opens on 19 November and passes to local leaders on 25 November.', 'f385'],
    ['2019.07.13', 'day', '慈濟基金會第一間社區長照機構日照中心在苗栗園區成立。', 'The Tzu Chi Foundation’s first community long-term care day centre opens in Miaoli.', 'f440'],
    ['2019.11.28', 'dis', '首次協辦防災士培訓，五百三十七人通過。', 'First co-hosted preparedness course, passed by 537 people.', 'f457'],
    ['2020.01.15', 'home', '推出「安穩家園．美善社區」專案。', 'The Safe Homes, Good Communities project is launched.', 'f456'],
    ['2020.03.19', 'home', '首例居家安全改善於嘉義市完工。', 'The first home safety repair is completed in Chiayi City.', 'f456'],
    ['2020.05.12', 'home', '正式推出「居家安全」Line 系統，隨後居家安全管理系統 APP 也相繼上線。', 'A home safety system on Line is formally launched, and a management app follows.', 'o200115'],
    ['2020.07.02', 'dis', '獲內政部消防署核定為防災士培訓機構。', 'Approved by the National Fire Agency as a training body.', 'f457'],
    ['2020', 'home', '居家修繕個案徐玉秀家，歷經三個月的溝通與長達八天的施工。', 'A home repair case: the Xu home took three months of talks and eight days of work.', 'o200115'],
    ['2021.03.19', 'home', '安美專案在澎湖縣啟動。', 'The project begins in Penghu County.', 'o200115'],
    ['2023.05.02', 'home', '安美專案延伸到馬祖。', 'The project reaches Matsu.', 'o200115'],
    ['2025.07.15', 'my', '250 位志工為新古毛 Taman Sinar Harapan 關懷機構送入 40 張不鏽鋼病床。', '250 volunteers bring 40 stainless steel beds to the Taman Sinar Harapan care home in Kuala Kubu Bharu.', 'nBeds'],
    ['2025.10', 'home', '遍及 22 個縣市、299 個鄉鎮，16,167 戶完成修繕。', 'Reaches 299 townships in 22 counties and cities, with repairs completed for 16,167 households.', 'o200115']
  ];

  CH.next = { ask: T('媽媽，這些你怎麼都知道？', 'Mum, how do you know all this?'), stop: T('下一站・人文', 'Next stop: Humanistic Culture'), href: 'culture.html', tun: 'c_u' };
  CH.footer = T('本頁為樣板，尚未經馬來西亞慈濟分會審核，未發佈。女孩與媽媽是說故事的人。照片除另有說明外，取自慈濟《歷史上的今天》公開頁面，已裁成無人臉的局部，拍攝年份多未載明；馬來西亞的照片取自《馬來西亞慈濟史 雪隆分會》。入口、封面、隧道和標示「示意」的窗、燈、門、便當、卷尺、扶手是插畫，不是實物。「」內為原文照錄，英文為本頁翻譯，僅供閱讀。', 'This page is a draft. It has not been reviewed by the Tzu Chi Malaysia branch and is not published. The girl and her mother are storytellers. Unless stated otherwise, photographs come from the public Tzu Chi, On This Day pages and are cropped to details without faces; most do not give a year. Photographs from Malaysia come from the History of Tzu Chi Malaysia: Selangor and Kuala Lumpur Branch. The windows, lamps, doors, lunch box, tape measure and handrails on the entrance, covers, tunnels and anything marked as an illustration are drawings, not real objects. Text in quotation marks is reproduced from the original Chinese, and the English is this page’s translation, for reading only.');

  /* 隧道：六段都走 lights，參數各不相同；去人文那條走 reel */
  window.TUN_M = window.TUN_M || {};
  var TM = window.TUN_M;
  var lt = function (d, ids, bg, tint, warm, fx, a1) { return { walk: 'lights', d: d, ids: ids.map(function (i) { return 'mc_' + i; }), bg: bg, tint: tint, a0: 0, a1: a1, ink: '#f7eedd', plate: 'rgba(14,18,28,', pa: .72, warm: warm, fx: fx }; };
  TM.c_b1 = lt(3600, ['lamp', 'door', 'win', 'flood', 'grip'], '#0e1424', '#c9a56a', '#f2c46b', .5, .12);
  TM.c_b2 = lt(3200, ['win', 'door', 'village', 'fans', 'lamp', 'grip'], '#121a2e', '#d6b878', '#f5d58a', .3, .1);
  TM.c_b3 = lt(3800, ['bento', 'win', 'fans', 'pot', 'door'], '#131a2c', '#d9b98c', '#ffd9a0', .7, .14);
  TM.c_b4 = lt(4000, ['rubble', 'steel', 'hotel', 'flood', 'pot', 'wall', 'lamp'], '#0b0f1a', '#b98a5c', '#e8a85a', .5, .08);
  TM.c_b5 = lt(3000, ['rail', 'tape', 'grip', 'door', 'bento', 'wall'], '#141a26', '#d8c79a', '#f7e3a8', .62, .12);
  TM.c_b6 = lt(3400, ['night', 'bags', 'kl', 'lamp', 'win'], '#0d1620', '#b8b078', '#f0bd62', .4, .1);
  TM.c_u = { walk: 'reel', dir: 1, d: 3400, ids: ['win', 'bento', 'lamp', 'tape', 'door', 'rail', 'grip', 'kl', 'pot', 'wall', 'fans', 'steel'].map(function (i) { return 'mc_' + i; }), bg: '#0d0c0b', tint: '#efe7d6', a0: 0, a1: .08, ink: '#f7f2e6', plate: 'rgba(13,12,11,', pa: .74 };

  /* 自定義區塊 */
  var api = function () { return CH.api; };
  var R = CH.R = {};
  var fxq = function (q) { return api().quote(q); };
  var H3 = function (b) { return '<h3>' + api().B(b.h) + '</h3>'; };
  var tail = function (b) { var A = api(); return '<small>' + A.B(b.note) + '</small>' + A.srcs(b.s); };
  var wrap = function (c, w, inner, x) { return '<section class="fx fx-' + c + '" data-fx' + (x || '') + '><div class="fx-s"><div class="' + w + '">' + inner + '</div></div></section>'; };

  /* 1 長箭頭一路縮短，落到一條街 */
  R.far = function (b) {
    var A = api(), st = '', i;
    for (i = 0; i < 9; i++) st += '<path d="M' + (i * 44 + 8) + ' 0V240"/><path d="M0 ' + (i * 30 + 6) + 'H400"/>';
    return wrap('fr', 'fr-w', '<div class="fr-o" aria-hidden="true"><div class="fr-m"><svg viewBox="0 0 400 240"><g class="fr-g">' + st + '</g><path class="fr-s" d="M92 196H226"/><path class="fr-a" pathLength="1" d="M372 18C330 74 300 40 262 92S212 138 160 186"/><circle class="fr-h" cx="160" cy="190" r="6"/></svg></div><b class="fr-l1">' + A.B(b.from) + '</b><b class="fr-l2">' + A.B(b.to) + '</b></div><div class="fr-t">' + H3(b) + '<p>' + A.B(b.lead) + '</p>' + tail(b) + '</div>');
  };

  /* 2 一條街的窗，顏色從混雜換成按樓分組 */
  R.street = function (b) {
    var A = api(), g = '', h, i, x = 11;
    for (h = 0; h < 4; h++) {
      g += '<div class="sr-h">';
      for (i = 0; i < 12; i++) { x = (x * 1103515245 + 12345) % 2147483648; g += '<i class="c' + (x >> 8) % 4 + ' d' + h + '" style="--i:' + (i + h * 2) + '"></i>'; }
      g += '</div>';
    }
    return wrap('sr', 'sr-w', '<div class="sr-o"><div class="sr-g" aria-hidden="true">' + g + '</div><div class="sr-l"><b class="sr-a">' + A.B(b.a) + '</b><b class="sr-b">' + A.B(b.b2) + '</b></div></div><div class="sr-t">' + H3(b) + '<p>' + A.B(b.lead) + '</p>' + fxq(b.q) + tail(b) + '</div>');
  };

  /* 3 鐘走一圈，窗裡的東西跟著換 */
  var ICO = [
    '<path d="M60 96C22 70 16 46 28 34c12-12 26-6 32 6 6-12 20-18 32-6 12 12 6 36-32 62z"/><path class="ln" d="M24 62h24l6-14 10 26 6-12h26"/>',
    '<circle cx="60" cy="24" r="11"/><path d="M60 38c-10 0-14 6-14 16l-22-22-7 7 27 29v44h12V86h8v26h12V68l27-29-7-7-22 22c0-10-4-16-14-16z"/>',
    '<path d="M30 12h60v96H30z"/><path class="ln" d="M42 34h36M42 52h36M42 70h24"/>',
    '<path d="M50 10h20v14l8 14v70H42V38l8-14z"/><path class="ln" d="M42 60h36"/>',
    '<path d="M18 44h84v8c0 28-18 46-42 46S18 80 18 52z"/><path class="ln" d="M42 32c0-10 8-10 8-20M66 32c0-10 8-10 8-20"/>'
  ];
  R.clock = function (b) {
    var A = api();
    var sc = ICO.map(function (s, i) { return '<svg viewBox="0 0 120 120" style="--i:' + i + '">' + s + '</svg>'; }).join('');
    var ls = b.steps.map(function (x, i) { return '<li style="--i:' + i + '">' + A.B(x) + '</li>'; }).join('');
    return wrap('ck', 'ck-w', '<div class="ck-o" aria-hidden="true"><div class="ck-d"><i></i><u></u></div><div class="ck-n">' + sc + '</div></div><div class="ck-t">' + H3(b) + '<p>' + A.B(b.lead) + '</p><ol class="ck-l">' + ls + '</ol>' + tail(b) + '</div>');
  };

  /* 4 全街熄燈，再一盞接一盞亮回來 */
  R.dark = function (b) {
    var g = '', i, j, t, N = 45, o = [], x = 5;
    for (i = 0; i < N; i++) o[i] = i;
    for (i = N - 1; i > 0; i--) { x = (x * 1103515245 + 12345) % 2147483648; j = x % (i + 1); t = o[i]; o[i] = o[j]; o[j] = t; }
    for (i = 0; i < N; i++) g += '<i style="--i:' + o[i] + '"></i>';
    return wrap('dk', 'dk-w', '<div class="dk-g" aria-hidden="true">' + g + '</div>' + H3(b) + fxq(b.q) + tail(b));
  };

  /* 5 一條線從門口走到床邊，每一步標一件事 */
  R.rail = function (b) {
    var A = api();
    var pts = [[38, 148], [116, 148], [116, 92], [196, 92], [262, 44]];
    var dots = pts.map(function (p, i) { return '<g class="rl-n" style="--i:' + i + '"><circle cx="' + p[0] + '" cy="' + p[1] + '" r="11"/><text x="' + p[0] + '" y="' + (p[1] + 4) + '">' + (i + 1) + '</text></g>'; }).join('');
    var ls = b.steps.map(function (x, i) { return '<li style="--i:' + i + '"><b>' + (i + 1) + '</b><span class="rd-a">' + A.B(x[0]) + '</span><span class="rd-b">' + A.B(x[1]) + '</span></li>'; }).join('');
    return wrap('rl', 'rl-w', '<div class="rl-o" aria-hidden="true"><svg viewBox="0 0 300 190"><path class="rl-wall" d="M8 8H292V182H70M30 182H8V8"/><path class="rl-in" d="M150 8V70M150 118V182"/><rect class="rl-bed" x="218" y="20" width="62" height="96" rx="4"/><rect class="rl-pil" x="226" y="27" width="46" height="18" rx="3"/><path class="rl-door" d="M30 182A40 40 0 0 1 70 142"/><path class="rl-door2" d="M30 182V142"/><path class="rl-bar" d="M160 130H212"/><path class="rl-tape" d="M84 170H138"/><path class="rl-ln" pathLength="1" d="M38 176V148H116V92H196L262 44"/>' + dots + '</svg></div><div class="rl-t">' + H3(b) + '<ol class="rl-g">' + ls + '</ol>' + tail(b) + '</div>');
  };

  /* 6 夜裡，一排店屋的燈亮起來 */
  R.night = function (b) {
    var A = api(), g = '', i;
    for (i = 0; i < 6; i++) g += '<div class="nt-h" style="--i:' + i + '"><i></i><i></i><u></u></div>';
    return wrap('nt', 'nt-w', '<div class="nt-g" aria-hidden="true"><span class="nt-m"></span>' + g + '</div>' + H3(b) + '<p>' + A.B(b.lead) + '</p>' + fxq(b.q) + tail(b));
  };

  /* 示意物件：純 CSS */
  var OBJ = {
    win: '<div class="ob-win"><i></i><i></i></div>',
    tape: '<div class="ob-tape"><i></i><u></u></div>',
    bento: '<div class="ob-bento"><i></i><i></i><i></i></div>'
  };
  R.obj = function (b) { return '<figure class="ob">' + OBJ[b.o] + '<figcaption>' + api().B(b.c) + '</figcaption></figure>'; };

  /* 小卡：原圖太小，按原尺寸放，不放大 */
  R.cards = function (b) {
    var A = api();
    return '<div class="cd">' + b.ph.map(function (p) { var z = P[p.i]; return '<figure><img src="assets/ph/' + p.i + '.jpg" width="' + z[0] + '" height="' + z[1] + '" loading="lazy" alt=""><figcaption>' + A.B(p.c) + '</figcaption></figure>'; }).join('') + '</div>' + A.srcs(b.s);
  };

  R.films = function () {
    var A = api();
    return '<h3 class="h4"><span class="zh">影片</span><span class="en" lang="en">Films</span></h3><p class="ku-n">' + A.B(T('下面只列外部連結，本頁未逐段看過。', 'These are outside links only. This page has not reviewed them scene by scene.')) + '</p><div class="ku-fl">' + CH.films.map(function (x) { return '<a href="https://www.youtube.com/watch?v=' + x.id + '" target="_blank" rel="noopener"><b>' + x.y + '</b>' + A.B(T(x.zh, x.en)) + '</a>'; }).join('') + '</div>';
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
    });
  };
})();
