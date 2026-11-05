/* 慈善站全部文字都在这里。大组开会后改字，只改这个文件。
   叙述语气照 内容/慈济文字特点.md。「」内的原话一律照出处，不改。
   p: 段落　more: 「读全文」里的段落　s: 出处　ph: 照片 {i:文件名, c:图注} */
(function () {
  var T = function (zh, en) { return { zh: zh, en: en }; };
  var otd = function (d, t) { /* d = 19660414 */
    var s = d.slice(0, 4) + '.' + d.slice(4, 6) + '.' + d.slice(6, 8);
    return { zh: '《慈濟歷史上的今天》' + s, en: 'Tzu Chi, On This Day, ' + s, url: 'https://tzuchiculture.org/tzuchi_60th_anniversary/onthisday/onthisday_' + d + '-1/' };
  };
  var fm = function (n, t) { return { zh: '慈濟法脈資料庫 ' + n + '〈' + t + '〉', en: 'Tzu Chi Dharma Lineage Archive, no. ' + n }; };
  var S = {
    fm27: fm('00027', '三十位家庭主婦慰留上人'), fm28: fm('00028', '一攤血事件'), fm31: fm('00031', '增製嬰兒鞋，護持慈善救濟'), fm32: fm('00032', '竹筒歲月'),
    fm36: fm('00036', '第一例長期照顧戶'), fm37: fm('00037', '建立濟貧「複查」制度'), fm39: fm('00039', '第一間永久屋'),
    fm43: fm('00043', '第一次舉行冬令發放'), fm45: fm('00045', '艾爾西颱風，首次大型賑災'), fm55: fm('00055', '妮娜風災重創，為孤兒寡母建房'),
    fm65: fm('00065', '成立佛教慈濟慈善事業基金會'), fm77: fm('00077', '滴水成河，粒米成籮'), fm93: fm('00093', '樂生療養院「賣心蓮」活動'),
    fm138: fm('00138', '哥奇颶風侵襲孟加拉'), fm140: fm('00140', '中國大陸華東、華中水患'), fm145: fm('00145', '馬來西亞慈濟人開始個案訪視'),
    fm196: fm('00196', '賀伯颱風重創臺灣，推動「社區志工」'), fm219: fm('00219', '九二一大地震'), fm239: fm('00239', '中國大陸貴州長期扶困計畫'),
    fm282: fm('00282', '南亞大海嘯'), fm297: fm('00297', '回歸竹筒歲月，樹立慈濟新年輪'), fm323: fm('00323', '緬甸納吉斯風災，帶動米撲滿'),
    fm329: fm('00329', '莫拉克風災'), fm332: fm('00332', '菲律賓凱莎娜颱風，啟動「以工代賑」'), fm339: fm('00339', '海地太子港強震'),
    fm343: fm('00343', '提天下菜籃，擔天下米籮'), fm363: fm('00363', '菲律賓海燕風災'), fm379: fm('00379', '尼泊爾強震，慈濟「返佛國、膚震殤」'), fm406: fm('00406', '賴索托推廣竹筒歲月、糧食撲滿'),
    fm451: fm('00451', '新型冠狀病毒（COVID-19）肆虐全球'), fm456: fm('00456', '啟動「安穩家園．美善社區」慈善專案'),
    o660414: otd('19660414', '竹筒歲月'), o670701: otd('19670701', '盧丹桂'), o670720: otd('19670720', '《慈濟》創刊'), o731024: otd('19731024', '娜拉風災'),
    o750905: otd('19750905', '妮娜風災重創，為孤兒寡母建房'), o860309: otd('19860309', '樂生療養院'), o910715: otd('19910715', '華東賑災'),
    o930613: otd('19930613', '檳城'), o940410: otd('19940410', '馬六甲首次現場發放'), o950218: otd('19950218', '尼泊爾慈濟村'),
    o030718: otd('20030718', '印尼紅溪河'), o160327: otd('20160327', '緬甸米撲滿回娘家'), o170306: otd('20170306', '沙巴無國籍學習中心'),
    o200115: otd('20200115', '安穩家園．美善社區'), o250330: otd('20250330', '緬甸強震'),
    a1: T('《竹筒歲月・六十影響報告書》行動一', 'Tzu Chi 60th Anniversary Impact Report, Action 1'),
    a2: T('《竹筒歲月・六十影響報告書》行動二', 'Tzu Chi 60th Anniversary Impact Report, Action 2'),
    ac: T('《竹筒歲月・六十影響報告書》社區篇', 'Tzu Chi 60th Anniversary Impact Report, Community'),
    exg: { zh: '慈濟六十特展・全球數據圖（統計至 2026.02）', en: 'Tzu Chi 60th Anniversary Exhibition, global figures (to Feb 2026)' },
    ext: { zh: '慈濟六十特展・台灣數據圖（統計至 2025.12）', en: 'Tzu Chi 60th Anniversary Exhibition, Taiwan figures (to Dec 2025)' },
    org: { zh: '慈濟基金會〈經濟補助與心靈關懷〉2025', en: 'Tzu Chi Foundation, financial and care figures 2025' },
    my3: { zh: '馬來西亞慈濟報導 2025.11.02', en: 'Tzu Chi Malaysia report, 2 Nov 2025' },
    mystory: (window.SRC && window.SRC.my) || T('馬來西亞慈濟報導', 'Tzu Chi Malaysia report')
  };

  var CH = window.CH = { S: S };

  CH.hero = {
    film: T('妈妈，慈济是什么？', 'Mama, what is Tzu Chi?'),
    stop: T('第一站', 'First stop'),
    title: T('慈善', 'Charity'),
    sub: T('一九六六年，三十支竹筒，每人每天五毛钱。<br>截至二〇二五年底，慈善足迹累计触及一百三十九个国家地区。',
           'In 1966: thirty bamboo banks, fifty cents a day each.<br>By the end of 2025, this charity work had reached 139 countries and regions.'),
    watch: T('看影片　3 分 27 秒', 'Watch the film · 3 min 27 s'),
    read: T('往下读', 'Read on'),
    ai: T('AI 情境重建，非当年摄影', 'AI reconstruction, not a historical photograph')
  };

  CH.river = {
    a: T('这一张一张，都是真实走过的日子。', 'Every one of these is a day that truly happened.'),
    b: T('走了六十年，走到最开始。', 'Sixty years back, to where it began.')
  };

  CH.chapters = [

  /* ───────── 一九六六 ───────── */
  { id: 'c66', era: 'e60', y: '1966', nav: T('每天五毛钱', 'Fifty cents a day'),
    b: [
      { k: 'sheet' },
      { k: 'story', lay: 'R', date: '1966', h: T('一时找不到五百位，就从三十位开始', 'Start with thirty'),
        ph: [{ i: '19660414-1_02', c: T('硬币投入竹筒。', 'A coin going into the bamboo bank.') }],
        p: [
          T('这年初春，上人在凤林的医院门口，见到地上一摊血。一位原住民妇女缴不起保证金，未获收治。上人发愿：五百个人，就有一千只手、一千只眼，随处闻声救苦。',
            'Early that spring, in Fenglin, the Master saw a pool of blood at a hospital entrance. An Indigenous woman had been turned away because her family could not pay the deposit. She made a vow: five hundred people would mean a thousand hands and a thousand eyes, ready to answer suffering wherever it was.'),
          T('一时找不到五百位，就以现有的三十位开始。一九六六年四月十四日，农历三月二十四，「佛教克难慈济功德会」在花莲佳民村普明寺成立。',
            'Five hundred could not be found at once, so they began with the thirty there were. On 14 April 1966 the Tzu Chi Merit Association was founded at Pu Ming Temple in Jiamin Village, Hualien.')
        ],
        more: [
          T('当时有人质疑：连两三元的车钱都没有，怎么做救济工作？上人提出的办法是两笔：寺中六位常住众，每人每天多做一双婴儿鞋；三十位婦女，每人每天买菜前先投五毛钱到竹筒。',
            'Someone asked how she could run a relief effort without even NT$2 or 3 for bus fare. Her answer had two parts: the six resident members would each make one more pair of baby shoes every day, and thirty women would each drop fifty cents into a bamboo bank before going to market.')
        ],
        s: ['fm27', 'fm28', 'fm31'] },
      { k: 'acct', h: T('克难时期的账', 'The accounts of the early days'),
        rows: [
          [T('婴儿鞋　六人，每人每天一双，一双四元', 'Baby shoes: six people, one pair each a day, NT$4 a pair'), T('每天 24 元，每月 720 元', 'NT$24 a day, NT$720 a month')],
          [T('竹筒　三十支，每人每天五毛', 'Bamboo banks: thirty, fifty cents each a day'), T('每天 15 元，每月 450 元', 'NT$15 a day, NT$450 a month')]
        ],
        sum: [T('每月合计', 'Each month'), T('1,170 元', 'NT$1,170')], s: ['fm27', 'fm31'] },
      { k: 'story', lay: 'L', date: '1966', h: T('为什么不一个月交十五元？', 'Why not NT$15 once a month?'),
        ph: [{ i: '19660414-1_04', c: T('硬币。', 'Coins.') }],
        p: [T('有人问，一天五毛，一个月十五元，何不月底一次交？上人的回答，后来成为慈济最常被提起的一段话。',
              'Some asked: fifty cents a day is NT$15 a month, so why not pay once at the end of the month? The Master’s answer is still told today.')],
        q: { zh: '我說我會算啦，我懂啦，但是我只要求你，每天五毛，總而言之我要你天天一念善心，每天一念善心', en: 'I can do the sum, I understand. But all I ask is fifty cents every day. What I want is for you to have one kind thought, every single day.', who: T('證嚴上人', 'Dharma Master Cheng Yen') },
        q2: { zh: '月捐一次，只發一次善念；日存五毛，則是日日發心。', en: 'Give once a month, and one kind thought arises once. Save fifty cents a day, and the heart is moved every day.', who: T('證嚴法師慈示', 'Dharma Master Cheng Yen') },
        s: ['o660414', 'a1'] }
    ] },

  /* ───────── 最早的照顾户 ───────── */
  { id: 'c67', era: 'e60', y: '1966–67', nav: T('最早的照顾户', 'The first care recipients'),
    ask: T('妈妈，省下来的钱，给了谁？', 'Mama, who did the saved money go to?'),
    h: T('最早的照顾户', 'The first care recipients'),
    lead: T('照顾户，是慈济长期济助的家庭。一九六七年七月二十日，《慈濟》月刊创刊，头版刊的不是功德会，是一位老人家。',
            'Care recipients are the households Tzu Chi looks after over the long term. When the Tzu Chi monthly first appeared on 20 July 1967, its front page was not about the association. It was about one old woman.'),
    b: [
      { k: 'story', lay: 'R', date: '1966.06', h: T('林曾', 'Lin Zeng'),
        ph: [{ i: '19670720-1_00', c: T('《慈濟》创刊号头版，标题〈寡居貧病老婦林曾獲慈濟會長期救助〉。', 'Front page of the first issue: “Widowed, poor and ailing, Lin Zeng receives long-term aid from Tzu Chi.”') }],
        p: [
          T('林曾老太太八十六岁，从福建来台寻夫，丈夫已不在，独居花莲市场小巷三榻榻米的破屋。一九六六年二月起，陈贞如与妹妹陈雪卿每日为她送菜饭，不论刮风下雨。',
            'Lin Zeng was eighty-six. She had come from Fujian looking for her husband and found he was gone. She lived alone in a broken three-tatami room in an alley by the Hualien market. From February 1966, Chen Zhenru and her sister Chen Xueqing brought her meals every day, in wind or rain.'),
          T('同年六月，功德会开始每月济助三百元。林曾老太太成为慈济第一位长期照顾户。',
            'That June the association began giving her NT$300 each month. She became Tzu Chi’s first long-term care recipient.')
        ],
        more: [
          T('一九六九年六月，济助增至每月四百元。林網重义务照料，李天送医师义诊。一九七〇年二月三日，林曾老太太往生，功德会补助治丧费四百八十五元。',
            'In June 1969 the monthly aid rose to NT$400. Lin Wangzhong looked after her without pay and Dr Li Tiansong treated her free of charge. She passed away on 3 February 1970, and the association paid NT$485 towards her funeral.')
        ],
        s: ['fm36', 'o670720'] },
      { k: 'story', lay: 'L', date: '1966.05', h: T('盧丹桂', 'Lu Dangui'),
        ph: [{ i: '19670701-1_00', c: T('早年的手写个案记录。', 'An early handwritten case record.') }],
        p: [
          T('菜贩卢丹桂，五个孩子的妈妈，因青光眼失明，无法工作。邻居李时拿一本孩子写字的簿子，在菜市场向买菜的人募款，再找到功德会。这是慈济第一例医疗个案。李时后来成为慈济第六号委员。',
            'Lu Dangui sold vegetables and had five children. Glaucoma took her sight and she could no longer work. Her neighbour Li Shi took a child’s exercise book to the market, asked shoppers for donations, then came to the association. It became Tzu Chi’s first medical case. Li Shi later became Commissioner No. 6.'),
          T('功德会成立才一个月，仍临时发动募款，送她到宜兰罗东开刀。一九六七年一月，卢女士往生。上人深感愧疚，自此定下复查：每三个月回访一次，不是发放完就结束。',
            'The association was only a month old, yet it raised the money and sent her to Luodong for surgery. In January 1967 she passed away. The Master felt deep remorse, and from then on a rule stood: every case is visited again every three months. Giving aid does not end the care.')
        ],
        q: { zh: '感覺很愧疚，所以我們又開始了說，三個月要複查(回訪)一次，這就是經一事長一智。', en: 'I felt deep remorse. So we began to say: every three months there must be a return visit. That is how we learned from what happened.', who: T('證嚴上人', 'Dharma Master Cheng Yen') },
        more: [
          T('卢女士往生后，慈济持续关怀这个家庭，直到家境改善。一九八五年，她的先生黄隣祥生活并不富裕，仍捐出善款，助建慈济医院。',
            'After she passed away, Tzu Chi kept caring for the family until life improved. In 1985 her husband, Huang Linxiang, though far from well off, gave a donation towards building the Tzu Chi hospital.')
        ],
        s: ['o670701', 'fm37'] },
      { k: 'story', lay: 'T', date: '1967.11.01', h: T('李阿拋', 'Li A-pao'),
        p: [
          T('李阿拋老人家八十一岁，双眼失明，住在木瓜溪旁倾斜的茅草屋，以三粒石头搭小灶。德慈法师回忆：「上人看到這樣很不忍心」。南华站站长张荣华捐出甘蔗园十坪地，慈济盖起一间五坪的空心砖屋，三扇窗，铁皮屋顶。',
            'Li A-pao was eighty-one and blind. He lived in a leaning thatched hut by the Mugua River and cooked on three stones. Master De Ci recalled that the Master could not bear to see it. Stationmaster Zhang Ronghua gave ten ping of sugar-cane land, and Tzu Chi built a five-ping hollow-brick house with three windows and an iron roof.'),
          T('这是慈济的第一间永久屋。截至二〇二六年二月，慈济已在十九个国家援建二万六千一百〇六户永久住宅。',
            'It was Tzu Chi’s first permanent house. By February 2026 Tzu Chi had built 26,106 permanent homes in nineteen countries.')
        ],
        note: T('上人后来回忆为四坪、里长拨地，此处依当年记载。', 'The Master later recalled four ping on land allotted by the village chief. This account follows the record of the time.'),
        s: ['fm39', 'o750905', 'exg'] }
    ] },

  /* ───────── 1969–1979 ───────── */
  { id: 'c69', era: 'e70', y: '1969–79', nav: T('亲手送到', 'Delivered by hand'),
    ask: T('妈妈，住得很远的人呢？', 'Mama, what about people who live far away?'),
    h: T('亲手送到', 'Delivered by hand'),
    lead: T('一九六〇年代末，慈济人从花莲走向台东，再走遍全岛。物资亲手送到，名册一户一户造。',
            'From the end of the 1960s, Tzu Chi volunteers went beyond Hualien to Taitung, then around the island. Aid was delivered by hand, and the lists were drawn up household by household.'),
    b: [
      { k: 'rec', items: [
        { d: '1969.02.09', zh: '普明寺首次冬令发放（每年岁末给照顾户的慰问），嘉惠四十户、二百多人。每人新衣一件、红包五十元，每户棉被一条，并备素筵。', en: 'First winter distribution at Pu Ming Temple, an annual year-end visit to care recipients. Forty households, over 200 people. A new garment and NT$50 each, a quilt for each household, and a vegetarian meal.' },
        { d: '1969.10.16', zh: '艾尔西台风过后，台东大南村大火，烧毁一百四十八户。慈济以二万余元购置毛毯，亲手送到每一户。这是慈济第一次大型赈灾。', en: 'After Typhoon Elsie, a fire in Danan Village, Taitung, destroyed 148 households. Tzu Chi spent over NT$20,000 on blankets and delivered one to each household by hand. It was Tzu Chi’s first large-scale relief.' },
        { d: '1970.01.30', zh: '静思精舍赈济二百余人，此后每年举办，并增每月常态发放。', en: 'Relief for over 200 people at the Jing Si Abode, held every year afterwards and joined by regular monthly distributions.' }
      ], s: ['fm43', 'fm45'] },
      { k: 'story', lay: 'W', date: '1973.10', h: T('娜拉风灾', 'Typhoon Nora'),
        ph: [{ i: '19731024-1_01', c: T('洪水冲毁屋舍。', 'A house swept by floodwater.') }, { i: '19731024-1_02', c: T('断桥。', 'A broken bridge.') }, { i: '19731024-1_04', c: T('打包毛毯。', 'Packing blankets.') }],
        p: [T('风灾过后，一百多位委员沿门募款，帮助六百七十一个家庭。勘灾、造册、发放，这套做法自此定下。',
              'After the storm, more than a hundred commissioners went door to door to raise funds and helped 671 families. Assess, list, distribute: the method was set from this time on.')],
        s: ['o731024'] },
      { k: 'story', lay: 'R', date: '1975.08', h: T('妮娜小築', 'Nina Cottages'),
        ph: [{ i: '19750905-1_07', c: T('早年援建的房屋。', 'Houses built in the early years.') }],
        p: [
          T('一九七五年八月三日，强烈台风妮娜登陆花莲，新城、秀林受灾最重。九月五日，《慈濟》月刊一〇七期刊出上人亲撰的捐助启示。',
            'On 3 August 1975 the severe Typhoon Nina struck Hualien, with Xincheng and Xiulin worst hit. On 5 September, issue 107 of the Tzu Chi monthly carried an appeal written by the Master herself.'),
          T('找地不易，精舍挪出自己的土地。同年十二月动土，翌年三月完工，安置寡母孤女。一九七六年六月，「康樂小築」收容无力重建、单身无依的长者。住户陈才爷爷在此住到一百零四岁。',
            'Land was hard to find, so the Abode gave up its own. Work began that December and finished the following March, housing widows and their daughters. In June 1976 Kangle Cottages took in elderly people living alone who could not rebuild. One resident, Grandpa Chen Cai, lived there to the age of 104.')
        ],
        q: { zh: '要找土地不容易，所以上人說要趕快蓋，要不然那些災民怎麼辦，所以才把精舍的土地挪出來，說我們後面的土地來蓋6棟，給那些孤兒跟寡婦。', en: 'Land was not easy to find, so the Master said we must build quickly, or what would those people do? So the Abode’s own land was set aside: six houses on the land behind us, for the orphans and widows.', who: T('德慈法師', 'Master De Ci') },
        s: ['o750905', 'fm55'] },
      { k: 'rec', items: [
        { d: '1976.12.04', zh: '十天环岛访贫（至 12 月 13 日），复查一百二十户，张有传医师随车义诊。', en: 'A ten-day journey round the island to visit people in need, to 13 December. 120 households reviewed, with Dr Zhang Youchuan seeing patients along the way.' }
      ], s: ['fm_tour'] }
    ] },

  /* ───────── 1980 年代 ───────── */
  { id: 'c80', era: 'e80', y: '1978–89', nav: T('滴水成河', 'Drops become a river'),
    ask: T('妈妈，钱从哪里来？', 'Mama, where did the money come from?'),
    h: T('滴水成河', 'Drops become a river'),
    lead: T('截至一九八三年，救济金额总计一亿五千多万元，济助全台一千多户、三千多人。法脉记下这笔数字时写道：「都源自於每人點滴的力量，這即是滴水成河的例證」。',
            'By 1983 relief had reached over NT$150 million, for more than a thousand households and three thousand people across Taiwan. The archive says of this figure that it all came from each person’s small strength, an example of drops forming a river.'),
    b: [
      { k: 'story', lay: 'R', date: '1978.09', tall: 1, h: T('一个超越天堂的地方', 'A place beyond heaven'),
        ph: [{ i: '19860309-1_05', c: T('棲蓮精舍莲友的捐款账册。', 'The donation ledger of the Qilian Hall members.') }, { i: '19860309-1_07', c: T('账册特写。', 'The ledger, close up.') }],
        p: [
          T('新庄乐生疗养院，住着汉生病（痲瘋病）院友。院内念佛会会长金義楨为修缮院舍四处求援。一九七八年九月，上人首次来到乐生。',
            'Losheng Sanatorium in Xinzhuang was home to people with Hansen’s disease. Jin Yizhen, head of its Buddhist group, was seeking help to repair the buildings. In September 1978 the Master came to Losheng for the first time.'),
          T('慈济随后整修房屋，设瘫痪病房，每月补贴人力和加菜金，这是一个团体照顾户。一九八〇年十月二十七日，听闻慈济要盖医院，全体莲友发心募集六万一千九百元。受助的人，成了捐助的人。',
            'Tzu Chi repaired the buildings, set up a ward for those paralysed, and paid each month for carers and better meals. On 27 October 1980, hearing that Tzu Chi meant to build a hospital, the residents raised NT$61,900 among themselves. Those receiving help had become those giving it.'),
          T('一九八三年十二月，院友正式婉谢慈济的帮助。双眼全盲的宋金緣老菩萨（慈济对年长者的尊称）发起「卖心莲」，一朵一万元，义卖所得捐助建院。对这些老人家而言，那往往是一生积攒的棺材本。',
            'In December 1983 the residents formally declined further aid. Song Jinyuan, an elder who was fully blind, began selling “heart lotuses” at NT$10,000 each to fund the hospital. For these elders, that money was often what they had saved for their own coffins.')
        ],
        q: { zh: '上人只問，我能夠幫你們做什麼呢？', en: 'The Master only asked: what can I do to help you?', who: T('樂生院友 金義楨', 'Jin Yizhen, Losheng resident') },
        q2: { zh: '捐這一萬元是來這裡住很久，每天存一點存一點，當時是存下來做棺材本。', en: 'This ten thousand came from living here a long time, saving a little every day. I had been saving it for my coffin.', who: T('樂生院友 杜銀花', 'Du Yinhua, Losheng resident') },
        more: [
          T('一九八二年，金義楨号召莲友月捐百元，做慈济会员。一九八六年三月九日，宋金緣、陳小蘭将义卖「心莲」所得和个人积蓄，分别捐出一百二十万元及十万元。',
            'In 1982 Jin Yizhen urged residents to become Tzu Chi members at NT$100 a month. On 9 March 1986, Song Jinyuan and Chen Xiaolan gave NT$1.2 million and NT$100,000 from the lotus sales and their own savings.'),
          T('院友林葉说：「以前健康的人看我們這種病的人，不是當做一個人看，就是比看到鬼還要怕。」',
            'Resident Lin Ye said that healthy people used to look at those with this disease as if they were not people at all, and feared them more than ghosts.'),
          T('二〇二六年，依金義楨遗愿，他守护五十多年的于右任墨宝捐出义卖，护持新泰静思堂兴建。',
            'In 2026, as Jin Yizhen had wished, the calligraphy he guarded for over fifty years was given for auction to help build the Xintai Jing Si Hall.')
        ],
        s: ['fm93', 'o860309'] },
      { k: 'quote', big: 1, zh: '在師父的心目中，你們不是被隔離，是外面的人被你們隔離。因為外面的汙濁，不應該進入這清淨的地方。', en: 'In my heart, you are not the ones shut away. It is the people outside who are shut away from you, because the impurity outside should not enter this pure place.', who: T('證嚴上人，一九八六年三月九日於樂生', 'Dharma Master Cheng Yen at Losheng, 9 March 1986'), s: ['o860309'] },
      { k: 'photos', lay: 'one', ph: [{ i: '19860309-1_08', c: T('一九八六年的日历，与院友的捐款物件。', 'A 1986 calendar with items donated by residents.') }] },
      { k: 'rec', items: [
        { d: '1980.01.16', zh: '为筹建花莲慈济医院，「财团法人台湾省佛教慈济慈善事业基金会」立案。', en: 'The Tzu Chi Foundation is registered, in order to build the Hualien hospital.' },
        { d: '1984.01.07', zh: '慈济台东分会报告，长期济助户总计九十二户。', en: 'The Taitung office reports 92 households in long-term care.' },
        { d: '1989', zh: '上人说，全台每月有一万多人需要生活补助；会员已有三十万。', en: 'The Master notes that over ten thousand people in Taiwan need monthly living aid, and that Tzu Chi now has three hundred thousand members.' }
      ], s: ['fm65', 'fm77'] },
      { k: 'quote', zh: '在不影響每個人生活的情況之下，做個能救人的人。', en: 'Without disturbing anyone’s daily life, be someone who can save a person.', who: T('證嚴上人，一九八五年', 'Dharma Master Cheng Yen, 1985'), s: ['fm32'] }
    ] },

  /* ───────── 1990 年代 ───────── */
  { id: 'c91', era: 'e90', y: '1991–99', nav: T('一粒米中藏日月', 'A grain of rice'),
    ask: T('妈妈，外国的人也帮吗？', 'Mama, do they help people in other countries too?'),
    h: T('一粒米中藏日月', 'Sun and moon in a grain of rice'),
    lead: T('一九九一年起，慈济人的脚步走出台湾。哪里有苦难，哪里就有慈济人。',
            'From 1991, Tzu Chi’s steps went beyond Taiwan. Wherever there was suffering, Tzu Chi volunteers went.'),
    b: [
      { k: 'story', lay: 'W', date: '1991.07', h: T('华东水患', 'The East China floods'),
        ph: [{ i: '19910715-1_08', c: T('水淹村庄。', 'A flooded village.') }, { i: '19910715-1_05', c: T('赈灾箱：「一元不算少，千元不算多」。', 'A relief box: “One dollar is not too little, a thousand not too much.”') }, { i: '19910715-1_00', c: T('发放现场，志工与乡亲。', 'Volunteers and villagers at a distribution.') }],
        p: [
          T('这年五、六月，华东华中洪涝，十九个省份、两亿两千多万人受灾。七月十五日，上人在彰化公开呼吁赈灾。当时两岸相对疏离，在台湾发起大陆赈灾募款，困难重重，慈济人首次走上街头募款。',
            'That May and June, floods struck nineteen provinces across eastern and central China, affecting over 220 million people. On 15 July, in Changhua, the Master publicly called for relief. Relations across the strait were distant and raising funds in Taiwan for the mainland was hard. Tzu Chi volunteers took to the streets to raise funds for the first time.'),
          T('赈灾定下五项原则：直接、重点、尊重、及时、务实。此后援建三省四县十一所学校、慈济新村三千多户、敬老院一百五十八间。',
            'Five principles were set for relief: direct, focused, respectful, timely, practical. Tzu Chi went on to build eleven schools, over three thousand homes and 158 rooms for the elderly across three provinces and four counties.')
        ],
        q: { zh: '賑災要救的是無辜災民，不是政黨；我們應以誠意感化民眾冷漠的心。', en: 'Relief is meant to save innocent people, not political parties. We should move cold hearts with sincerity.', who: T('證嚴上人', 'Dharma Master Cheng Yen') },
        s: ['fm140', 'o910715'] },
      { k: 'five', items: [T('直接', 'Direct'), T('重点', 'Focused'), T('尊重', 'Respectful'), T('及时', 'Timely'), T('务实', 'Practical')] },
      { k: 'quote', big: 1, zh: '我現在深深體會說，一粒米中藏日月，諸位了解我的意思嗎？這時候，一粒米大過須彌山。', en: 'I now deeply understand that the sun and moon are held in one grain of rice. Do you see what I mean? At a time like this, one grain of rice is greater than Mount Sumeru.', who: T('證嚴上人，一九九一年八月二十五日', 'Dharma Master Cheng Yen, 25 August 1991'), s: ['o910715'] },
      { k: 'photos', lay: 'three', ph: [{ i: '19910715-1_03', c: T('报上的「一粒米中藏日月」。', 'A newspaper headline with the phrase.') }, { i: '19910715-1_18', c: T('发放前核对名册。', 'Checking the list before a distribution.') }, { i: '19910715-1_21', c: T('援建的房舍。', 'Homes built with Tzu Chi’s help.') }] },
      { k: 'rec', items: [
        { d: '1991.05', zh: '哥奇飓风重创孟加拉。美国慈济人发起「一人一元美金」，上人发起「一人省下一个面包钱」。六月二十五日，捐赠美金十五万七千一百四十九元予红十字会。', en: 'A cyclone devastates Bangladesh. Tzu Chi USA launches “one person, one dollar”; the Master asks each person to save the price of one bread roll. On 25 June, US$157,149 goes to the Red Cross.' },
        { d: '1992', zh: '援助蒙古，第一次由慈济志工亲手发放的国际援助。', en: 'Aid to Mongolia: the first international relief handed out in person by Tzu Chi volunteers.' }
      ], s: ['fm138'] },
      { k: 'story', lay: 'L', date: '1995.02.18', h: T('尼泊尔的一千八百户', 'Eighteen hundred homes in Nepal'),
        ph: [{ i: '19950218-1_10', c: T('头顶建材的妇女。', 'Women carrying building materials on their heads.') }, { i: '19950218-1_05', c: T('跨河的吊索。', 'A cable across a river.') }],
        p: [
          T('一九九三年七、八月，尼泊尔水患，超过四十万人受灾。工地不通车，以牛车搬运，当地妇女用炒菜锅盛水泥砂石，头顶砖块，一同建村。一九九五年二月十八日，三座慈济村一千四百户揭碑；六月十九日，第四座四百户交屋，共一千八百户。',
            'Floods in July and August 1993 affected over 400,000 people in Nepal. Materials came by ox cart. Local women carried cement and sand in cooking pots and bricks on their heads, building alongside everyone else. On 18 February 1995 three villages of 1,400 homes were unveiled; a fourth of 400 followed on 19 June, 1,800 in all.'),
          T('二〇一五年尼泊尔强震后回访，当年的慈济村安好。',
            'After the 2015 earthquake, volunteers went back. The villages built all those years before were still standing.')
        ],
        s: ['o950218'] },
      { k: 'story', lay: 'R', date: '1996', h: T('从社区做起', 'Starting in the neighbourhood'),
        p: [T('一九九六年贺伯台风，全台受灾。上人呼吁「社区志工」：就近服务，守望相助。十二月二十二日，从花莲吉安北昌村、新城佳林村开始推动。慈济人不再只是从远处赶来，而是住在受苦的人隔壁。',
              'Typhoon Herb struck Taiwan in 1996. The Master called for “community volunteers”: serve those close by and watch over one another. On 22 December it began in Beichang and Jialin villages, Hualien. Volunteers would no longer only rush in from afar. They would live next door.')],
        s: ['fm196'] },
      { k: 'story', lay: 'W', date: '1999.09.21', h: T('九二一', 'The 921 earthquake'),
        ph: [{ i: '19990921-1_01', c: T('倒塌的建筑。', 'A collapsed building.') }, { i: '19990921-1_05', c: T('师姊为乡亲煮食。', 'Tzu Chi sisters cooking for those affected.') }, { i: '19990921-1_07', c: T('搭建组合屋。', 'Putting up prefabricated homes.') }, { i: '19990921-1_23', c: T('孩子在读书。', 'Children reading.') }],
        p: [T('九二一地震后，慈济人煮热食、搭大爱屋，并承担五十一所学校的「希望工程」援建。',
              'After the earthquake, Tzu Chi volunteers cooked hot meals, put up temporary Great Love homes, and took on the rebuilding of fifty-one schools, the Project Hope.')],
        s: ['fm219'] }
    ] },

  /* ───────── 2000 年代 ───────── */
  { id: 'c00', era: 'e00', y: '2000–15', nav: T('安身、安心、安生活', 'Home, heart, livelihood'),
    ask: T('妈妈，灾难过去以后呢？', 'Mama, what happens after the disaster is over?'),
    h: T('安身、安心、安生活', 'Home, heart, livelihood'),
    lead: T('发放之后，还有下一步：住的地方、孩子的学校、一家人的生计。',
            'After the aid come the next steps: a place to live, a school for the children, a way to earn a living.'),
    b: [
      { k: 'story', lay: 'W', date: '2003.07.18', h: T('印尼红溪河', 'The Red River, Jakarta'),
        ph: [{ i: '20030718-1_01', c: T('红溪河。', 'The Kali Angke, “Red River”.') }, { i: '20030718-1_09', c: T('清理河道。', 'Clearing the river.') }, { i: '20030718-1_13', c: T('大爱村的妇女做回收。', 'Women sorting recycling at the Great Love Village.') }],
        p: [
          T('雅加达红溪河畔，被称为「雅加达黑色心脏」。二〇〇二年初大水，乡亲在水中苦熬将近一个月。慈济提出五管齐下：抽水、打扫、消毒、义诊、建屋。二〇〇三年七月十八日，金卡莲大爱一村入厝，一千一百户拿到钥匙。',
            'The banks of the Kali Angke were known as “the black heart of Jakarta”. In early 2002 floods left residents living in the water for almost a month. Tzu Chi answered on five fronts: pumping, cleaning, disinfecting, free clinics, and new housing. On 18 July 2003, 1,100 households received the keys to the Cengkareng Great Love Village.'),
          T('村内设义诊中心，二〇〇六年升格为海外第一所慈济医院，又办大爱学校。当年河边打赤脚的孩子，有人考上大学，有人回母校任教。',
            'A clinic opened in the village and in 2006 became the first Tzu Chi hospital outside Taiwan. A school followed. Of the children who once went barefoot by the river, some went to university and some came back to teach.')
        ],
        q: { zh: '安身，安身就是讓他有居住的地方；安生活的生，我要讓他有生活的條件，要他能夠以後有工作做；要安心，讓他們裡面，他們的父母親，能夠讓孩子去讀書什麼的，都會安心。', en: 'A settled home means a place to live. A settled livelihood means the means to live and work in future. A settled heart means parents who can send their children to school with peace of mind.', who: T('印尼分會副執行長 郭再源，憶述上人的慈示', 'Guo Zaiyuan, Tzu Chi Indonesia, recalling the Master’s guidance') },
        q2: { zh: '我一直哭，因為我真的很感動，希望我這分喜悅，能夠讓幫助我的人也很幸福', en: 'I kept crying because I was so moved. I hope this joy of mine can bring happiness to the people who helped me too.', who: T('大愛一村居民 杜蒂', 'Duti, resident of the Great Love Village') },
        s: ['o030718'] },
      { k: 'rec', items: [
        { d: '2000', zh: '贵州长期扶困，于花溪、罗甸、紫云等地建九个慈济新村，四百多户。', en: 'Long-term aid in Guizhou: nine Tzu Chi villages in Huaxi, Luodian, Ziyun and other places, more than 400 homes.' },
        { d: '2004.12.26', zh: '南亚大海啸。慈济于印尼亚齐及斯里兰卡援建大爱村，共三千三百多户，并援建学校。', en: 'The Indian Ocean tsunami. Tzu Chi builds Great Love Villages in Aceh and Sri Lanka, over 3,300 homes, along with schools.' }
      ], s: ['fm239', 'fm282'] },
      { k: 'photos', lay: 'three', ph: [{ i: '20050924-1_01', c: T('海啸后的废墟。', 'Ruins after the tsunami.') }, { i: '20050924-1_06', c: T('大爱村的蓝色屋顶。', 'The blue roofs of a Great Love Village.') }, { i: '20050924-1_13', c: T('村中的一对夫妇。', 'A couple in the village.') }] },
      { k: 'story', lay: 'R', date: '2009', h: T('莫拉克与以工代赈', 'Morakot, and work for relief'),
        ph: [{ i: '20090806-1_13', c: T('大爱村。', 'A Great Love Village.') }, { i: '20090806-1_06', c: T('涉水搬运物资。', 'Carrying supplies through water.') }],
        p: [
          T('二〇〇九年八月莫拉克风灾，慈济启动「六安计划」，援建六座大爱村，一千三百〇二户。',
            'After Typhoon Morakot in August 2009, Tzu Chi built six Great Love Villages with 1,302 homes.'),
          T('同年九月，菲律宾凯莎娜台风。慈济启动「以工代赈」（请受灾乡亲一同清理家园，并给予酬劳），乡亲不只领取援助，也亲手重建。此后海地、尼泊尔、缅甸都沿用。',
            'That September, after Typhoon Ketsana in the Philippines, Tzu Chi began “work for relief”: people affected were paid to clean up their own neighbourhoods, rebuilding with their own hands. The approach was later used in Haiti, Nepal and Myanmar.')
        ],
        s: ['fm329', 'fm332'] },
      { k: 'rec', items: [
        { d: '2010.01', zh: '海地强震。以工供粮，推动返校，援建学校、幼儿园。', en: 'Haiti earthquake. Food for work, a return-to-school programme, and new schools and kindergartens.' },
        { d: '2013.11', zh: '菲律宾海燕风灾。于独鲁万市援建大爱村与简易教室。', en: 'Typhoon Haiyan. Great Love Villages and simple classrooms in Tacloban.' },
        { d: '2015.04', zh: '尼泊尔强震。义诊、以工代赈，搭建简易教室。', en: 'Nepal earthquake. Free clinics, work for relief, and simple classrooms.' }
      ], s: ['fm339', 'fm363', 'fm379'] }
    ] },

  /* ───────── 同一分心 ───────── */
  { id: 'cheart', era: 'heart', y: '1966→2026', nav: T('同一分心', 'The same heart'),
    ask: T('妈妈，受帮助的人后来怎样了？', 'Mama, what became of the people who were helped?'),
    h: T('同一分心', 'The same heart'),
    lead: T('六十年前，花莲的家庭主妇每天省五毛钱。四十多年后，缅甸的农人每天存一把米。再后来，非洲赖索托的村民存起了玉米。',
            'Sixty years ago, housewives in Hualien saved fifty cents a day. Over forty years later, farmers in Myanmar saved a handful of rice a day. Then villagers in Lesotho, in Africa, began saving maize.'),
    b: [
      { k: 'chain', items: [
        { y: '1966', w: T('花莲', 'Hualien'), t: T('五毛钱', 'Fifty cents'), i: '20121001-1_09', c: T('竹筒', 'Bamboo bank') },
        { y: '2008', w: T('缅甸', 'Myanmar'), t: T('一把米', 'A handful of rice'), i: '20080504-1_22', c: T('米扑满', 'Rice bank') },
        { y: '2013', w: T('赖索托', 'Lesotho'), t: T('玉米、高粱', 'Maize and sorghum'), i: '20101030-1_10', c: T('赖索托的玉米田。', 'A maize field in Lesotho.') }
      ] },
      { k: 'story', lay: 'R', date: '2006.10.26', h: T('回归竹筒岁月', 'Back to the bamboo bank'),
        p: [T('慈济四十周年之际，上人在志工早会提出「回归竹筒岁月」。竹筒再度走进一个个家庭。',
              'As Tzu Chi turned forty, the Master asked volunteers to return to the bamboo-bank days. The banks went back into homes.')],
        q: { zh: '我希望現在開始發起善的動力，發起回歸四十年前的竹筒歲月。', en: 'I hope that from now we start a movement of goodness, a return to the bamboo-bank days of forty years ago.', who: T('證嚴上人', 'Dharma Master Cheng Yen') },
        q2: { zh: '一般人都認為慈濟很有錢，其實不是有錢，是有心。', en: 'Most people think Tzu Chi has a lot of money. It is not money that it has, but heart.', who: T('證嚴上人', 'Dharma Master Cheng Yen') },
        s: ['fm297'] },
      { k: 'story', lay: 'W', date: '2008.05', h: T('缅甸的一把米', 'A handful of rice in Myanmar'),
        ph: [{ i: '20080504-1_13', c: T('扛米的乡亲。', 'Carrying sacks of rice.') }, { i: '20080504-1_15', c: T('手捧稻种。', 'Rice seed in cupped hands.') }, { i: '20080504-1_14', c: T('抱着稻草的农人。', 'A farmer with an armful of straw.') }],
        p: [
          T('二〇〇八年五月，纳吉斯风灾重创缅甸。五月十五日，慈济首度发放，嘉惠二百二十五户，计九百六十七人。其后发放稻种和肥料，让农人重新下田。村民原有「存米供佛」的习俗。',
            'In May 2008 Cyclone Nargis devastated Myanmar. On 15 May, Tzu Chi’s first distribution reached 225 households, 967 people. Rice seed and fertiliser followed so that farmers could plant again. Villagers already had a custom of setting rice aside as an offering.'),
          T('农人烏閔壽成为缅甸米扑满第一人。二〇一〇年，农民烏丁屯响应，捐出一亩田的收成作慈济福田。日存一把米，从此带动十五个村庄储存「米扑满」。',
            'A farmer, U Myint Soe, became Myanmar’s first rice saver. In 2010 another farmer followed, giving the harvest of one field to Tzu Chi. Saving a handful a day went on to spread to fifteen villages.')
        ],
        q: { zh: '我是一個貧窮人，一次捐不出很多錢，只能在煮飯前，從要吃的米中拿出一把米存起來。等你們來，我會去把米賣掉，把錢投進竹筒內。', en: 'I am a poor man and cannot give much money at once. All I can do is take a handful from the rice I am about to cook and save it. When you come, I will sell the rice and put the money in the bamboo bank.', who: T('緬甸農民 烏閔壽', 'U Myint Soe, farmer, Myanmar') },
        s: ['fm323', 'o160327'] },
      { k: 'story', lay: 'L', date: '2016.03.27', tall: 1, h: T('米扑满回娘家', 'The rice comes home'),
        ph: [{ i: '20160327-1_02', c: T('一把一把的米，倒入锅中。', 'Handful after handful, poured into the pot.') }, { i: '20160327-1_03', c: T('瑞那滚村的乡亲。', 'The people of Shwe Na Gwin.') }],
        p: [
          T('二〇一五年八月缅甸水患，九月起发放稻种。岱枝县农人烏善丁在说明会上听到「日存一把米」，请购五十个塑胶桶。志工先给了十个，其余他自掏腰包补齐，挨家挨户传递。',
            'After the floods of August 2015, seed distributions began that September. At one briefing, a farmer in Taikkyi heard about saving a handful of rice a day and asked for fifty plastic pails. Volunteers gave him ten; he paid for the rest himself and took them from house to house.'),
          T('二〇一六年三月二十七日，瑞那滚村（缅语「金耳环」）首次米扑满回娘家，九十户米会员，两大袋，九十六点四公斤。',
            'On 27 March 2016, the rice saved in Shwe Na Gwin, “golden earring” in Burmese, came home for the first time: ninety member households, two great sacks, 96.4 kilograms.'),
          T('二〇二二年，已带动二百二十五个村庄，帮助超过三千户困难家庭。二〇二五年，米会员超过三万八千户。',
            'By 2022 it had spread to 225 villages and helped over three thousand struggling families. By 2025 there were over 38,000 rice member households.')
        ],
        q: { zh: '每天存一把米，就是每天發善念', en: 'Saving a handful of rice each day is having a kind thought each day.', who: T('烏善丁', 'The farmer who began it in Taikkyi') },
        q2: { zh: '心裡祝福我的這一把米，能幫助更多有需要的人。', en: 'In my heart I bless this handful of rice, that it may help more people in need.', who: T('多丹丹乃', 'His wife') },
        more: [T('八十二岁的农民烏山丁说：「離世前也想跟大家一起行善，多多少少出一分力。」二〇二四年，烏善丁与妻女三人皆受证成为慈济志工。',
                 'A farmer of eighty-two said that before leaving this world he too wanted to do good with everyone, and give what strength he could. In 2024 the Taikkyi farmer, his wife and his daughter all became certified Tzu Chi volunteers.')],
        s: ['o160327'] },
      { k: 'story', lay: 'T', date: '2013.01', h: T('赖索托的玉米', 'Maize in Lesotho'),
        p: [
          T('二〇〇九年十一月，慈济捐玉米种子予五百二十户马都崁农民。翌年丰收，农民自发捐出作物；九月风灾，三十一户受灾户领到的玉米粉，就是这些农民所捐。',
            'In November 2009 Tzu Chi gave maize seed to 520 farming households in Matukeng. After the next year’s good harvest the farmers chose to give back, and the maize meal handed to thirty-one storm-hit households that September was what they had given.'),
          T('二〇一三年一月，当地志工听到缅甸米扑满，因赖索托不产稻米，发愿做「玉米扑满」。此后带动四十七个村落存玉米、高粱，济助贫户。',
            'In January 2013 local volunteers heard about Myanmar’s rice banks. Lesotho grows no rice, so they vowed to start maize banks. Forty-seven villages came to save maize and sorghum for households in need.')
        ],
        s: ['fm406'] },
      { k: 'quote', big: 1, zh: '竹筒歲月啟悲心，人多、力大，福就大，不論貧富貴賤，金錢多寡，一人一日一善行，滴水成河、粒米成籮，匯聚愛的力量，將慈善清流，救助苦難眾生。', en: 'The bamboo-bank years awaken compassion. Many people bring great strength and great blessings. Rich or poor, with much or little, one person, one good deed, one day: drops become a river, grains fill a basket, and love gathers to bring relief to all who suffer.', who: T('證嚴法師', 'Dharma Master Cheng Yen'), s: ['a1'] }
    ] },

  /* ───────── 2016–2026 ───────── */
  { id: 'c20', era: 'e20', y: '2020–26', nav: T('走进去', 'Walking in'),
    ask: T('妈妈，现在还有人这样做吗？', 'Mama, are people still doing this now?'),
    h: T('走进去', 'Walking in'),
    lead: T('苦難的人走不出來，有福的人要走進去。', 'Those who suffer cannot walk out. Those who are blessed must walk in.'),
    b: [
      { k: 'story', lay: 'R', date: '2020.01.15', h: T('安穩家園．美善社區', 'Safe homes, good neighbourhoods'),
        ph: [{ i: '20200115-1_09', c: T('长者扶着新装的扶手。', 'An elder holding a newly fitted handrail.') }, { i: '20200115-1_05', c: T('师兄安装扶手。', 'A volunteer fitting a handrail.') }],
        p: [
          T('二〇二〇年一月十五日，慈济启动「安美」专案，为失能及独居长者量身改造浴厕、加装扶手和座椅。三月十九日，首例在嘉义市完工，王女士说：「這樣更方便，比較不會跌倒。」',
            'On 15 January 2020 Tzu Chi began a project to refit bathrooms, handrails and seats for elders living alone or with disabilities. The first was finished in Chiayi on 19 March. “This is much easier,” said Ms Wang. “I am less likely to fall.”'),
          T('二〇二二至二〇二四年，修缮七千九百四十三户，走过二百三十五个乡镇，投入五万四千九百〇五人次志工。澎湖、马祖也到了，建材跳岛运送。',
            'From 2022 to 2024, 7,943 homes were repaired across 235 townships, with 54,905 volunteer shifts. The work reached Penghu and Matsu, with materials shipped from island to island.')
        ],
        more: [T('台中北屯八十多岁的徐玉秀阿妈，志工沟通三个月、施工八天，每天往返五六十公里。志工蔡明模对她说：「你不給我施工，我看我晚上回去會睡不著，會失眠。」',
                 'In Taichung, Grandma Xu Yuxiu, in her eighties, took three months of talking and eight days of work, with volunteers driving fifty or sixty kilometres each day. Volunteer Cai Mingmo told her he would not be able to sleep if she did not let him do the work.')],
        s: ['fm456', 'o200115', 'ac'] },
      { k: 'rec', items: [
        { d: '2020–2022', zh: '新冠疫情期间，全球防疫物资五千二百二十七万件，送往九十八个国家地区。', en: 'During the Covid-19 pandemic, 52.27 million items of protective supplies went to 98 countries and regions.' }
      ], s: ['a2'] },
      { k: 'story', lay: 'W', full: 1, date: '2025.03.28', h: T('缅甸强震', 'The Myanmar earthquake'),
        ph: [{ i: '20250330-1_07', c: T('等候发放的长队。', 'A long line waiting for aid.') }, { i: '20250330-1_19', c: T('师姊与妇女一同舀米。', 'A volunteer and a woman scooping rice together.') }, { i: '20250330-1_16', c: T('简易教室。', 'A simple classroom.') }, { i: '20250330-1_17', c: T('孩子。', 'Children.') }],
        p: [
          T('二〇二五年三月二十八日，缅甸规模七点七强震，实皆省、曼德勒重创，约三千八百人罹难，约六万栋建筑倒塌。仰光志工组勘灾团，赶赴六百二十公里外的曼德勒。物资短缺，志工一家店一家店地买。',
            'On 28 March 2025 a magnitude 7.7 earthquake struck Myanmar, devastating Sagaing and Mandalay. About 3,800 people died and about 60,000 buildings fell. Volunteers from Yangon set out for Mandalay, 620 kilometres away. Supplies were short, so they bought them shop by shop.'),
          T('首波大型发放济助五千户，马来西亚空军接力运送物资。以工代赈邀约居民为寺院搭建临时住所，震后六个月内协助八十三所学校完成二百四十七间简易教室。物资援助近二十二万人。',
            'The first large distribution reached 5,000 households, with the Royal Malaysian Air Force helping to carry supplies. People were paid to build temporary shelters for monasteries, and within six months 247 simple classrooms stood at 83 schools. Nearly 220,000 people received material aid.'),
          T('受助的乡亲，也有人手心向下。萨雷寺院学校的师生响应米扑满，每天存下一把米。学生密內说：「能夠布施幫助他人，這個概念我很喜歡，所以我才會存米。」',
            'Some of those helped turned to helping. At one monastery school, teachers and pupils joined the rice banks, saving a handful each day. “I like the idea of being able to give and help others,” said one pupil, “so I save rice.”')
        ],
        q: { zh: '我們一家一點、一家鋪子一點一點這樣買。', en: 'We bought a little at each shop, one shop after another.', who: T('緬甸志工 姜榮華', 'Jiang Ronghua, volunteer, Myanmar') },
        s: ['o250330'] }
    ] },

  /* ───────── 在马来西亚 ───────── */
  { id: 'cmy', era: 'my', y: '马来西亚', yen: 'Malaysia', nav: T('在马来西亚', 'In Malaysia'),
    ask: T('妈妈，我们这里也有吗？', 'Mama, is it here too?'),
    h: T('在马来西亚', 'In Malaysia'),
    lead: T('一九九一年七月，马来西亚首例慈善个案在亚依淡开案。三十多年来，慈济人的足迹遍及半岛和东马，马六甲、槟城、雪隆、吉打今有四个分会。',
            'The first charity case in Malaysia opened in Ayer Itam in July 1991. In the thirty-odd years since, volunteers have worked across the peninsula and East Malaysia, and there are now four branches: Melaka, Penang, Selangor and Kuala Lumpur, and Kedah.'),
    b: [
      { k: 'rec', items: [
        { d: '1991.07', zh: '马来西亚首例慈善个案，亚依淡打枪铺廉价组屋的罗合海。慈济给予经济补助，直至一九九三年其长女有能力承担家计后结案。', en: 'First charity case in Malaysia: Luo Hehai of Ayer Itam. Tzu Chi gave financial aid until 1993, when his eldest daughter could support the family.' },
        { d: '1992.10.10', zh: '马六甲首例机构关怀，马接峇汝安老院开案，慈济人每周一次前往。', en: 'First institutional care in Melaka: the Rumah Sejahtera old folks’ home at Machap Baru. Volunteers go every week.' },
        { d: '1993.03.04', zh: '眼盲的郑金龙老先生，成为马六甲慈济首位照顾户，慈济协助盖屋，长期关怀。', en: 'Zheng Jinlong, blind and poorly housed, becomes the first care recipient in Melaka. Tzu Chi helps build him a home and stays with him.' }
      ], s: ['fm145'] },
      { k: 'story', lay: 'R', date: '1994.04.10', h: T('马六甲第一次现场发放', 'The first distribution in Melaka'),
        ph: [{ i: '19940410-1_00', c: T('横幅：「慈濟功德會馬六甲第一次現場發放」。', 'Banner: Tzu Chi’s first on-site distribution in Melaka.') }, { i: '19940410-1_12', c: T('扶长者下楼。', 'Helping an elder down the stairs.') }],
        p: [
          T('一九八八年，劉濟雨与簡慈露到马六甲设厂。一九九二年，簡慈露返台寻根。第一个关怀的个案是郑金龙，老人家住在煤炭间，以旧门板架在四张椅子上当床。慈济人为他盖起爱心屋。',
            'In 1988 Liu Jiyu and Jian Cilu came to Melaka to set up a factory. In 1992 Jian Cilu went back to Taiwan to find the roots of Tzu Chi. Their first case was Zheng Jinlong, who lived in a coal shed and slept on an old door laid across four chairs. Volunteers built him a house.'),
          T('一九九四年四月十日，效法台湾本会，马六甲举行首次现场发放。此后每月第二个星期日，每次近百位志工。照顾户来到会所相聚，这一天有医生，也有剪发。',
            'On 10 April 1994, following the Taiwan model, Melaka held its first on-site distribution. It has since been held on the second Sunday of each month, with close to a hundred volunteers. Care recipients gather at the centre, and on that day there are doctors and haircuts too.')
        ],
        q: { zh: '他們會跟我們講說，一個月三十天，來慈濟這一天，就值得回去。在多留那29天，守在那空屋子的寂寞，最期待就是，來期待發放這一天', en: 'They would tell us: of thirty days in a month, this one day at Tzu Chi makes it worth going back, to stay those other twenty-nine in the loneliness of an empty house. This is the day they look forward to most.', who: T('馬六甲志工 簡慈露', 'Jian Cilu, Melaka volunteer') },
        q2: { zh: '一個月來一次什麼都有，醫生也有，剪頭髮也有。', en: 'Come once a month and there is everything. There is a doctor, and even a haircut.', who: T('照顧戶', 'A care recipient') },
        s: ['o940410', 'fm145'] },
      { k: 'photos', lay: 'three', ph: [{ i: '19940410-1_02', c: T('义诊。', 'A free clinic.') }, { i: '19940410-1_10', c: T('居家访视。', 'A home visit.') }, { i: '19940410-1_11', c: T('马接峇汝安老院。', 'The old folks’ home at Machap Baru.') }] },
      { k: 'story', lay: 'L', date: '1993–1997', h: T('槟城', 'Penang'),
        ph: [{ i: '19930613-1_09', c: T('Buddhist Tzu-Chi Dialysis Centre 招牌。', 'The Buddhist Tzu-Chi Dialysis Centre sign.') }, { i: '19930613-1_03', c: T('马来西亚早期志工。', 'Early volunteers in Malaysia.') }],
        p: [
          T('葉慈靖因工作调派槟城，把慈济带到这里。一九九三年五月，十八位槟城志工回花莲寻根。八月十一日，槟城联络处成立。一九九七年升格为马来西亚分会。',
            'Ye Cijing came to Penang for work and brought Tzu Chi with her. In May 1993 eighteen Penang volunteers went to Hualien to find their roots. The Penang liaison office opened on 11 August, and in 1997 it became the Malaysia branch.'),
          T('一九九七年八月三日，全马第一家由非政府组织营运、费用全免的洗肾中心启用。志工林慈心说：「我們就從頭做到尾，不是說只幫助一次罷了」。',
            'On 3 August 1997 Malaysia’s first dialysis centre run by a non-governmental organisation and free of charge opened. “We do it from start to finish,” said volunteer Lin Cixin. “It is not a matter of helping just once.”')
        ],
        q: { zh: '馬來西亞對我來說，是很遙遠；對你們來說，是很近。但是對我來說，更是貼(心)。有形的是很遠，無形的是很近，知道嗎？', en: 'To me Malaysia is very far; to you it is very near. But to me it is closer still, in the heart. In form it is far. Beyond form it is near. Do you understand?', who: T('證嚴上人', 'Dharma Master Cheng Yen') },
        s: ['o930613'] },
      { k: 'story', lay: 'W', date: '2017.03.06', h: T('沙巴的孩子', 'The children of Sabah'),
        ph: [{ i: '20170306-1_01', c: T('水上屋。', 'Stilt houses on the water.') }, { i: '20170306-1_08', c: T('排队的学童。', 'Pupils in line.') }, { i: '20170306-1_19', c: T('写字的男孩。', 'A boy writing.') }],
        p: [
          T('斗湖甘榜狄丁岸，住着从菲律宾、印尼逃难而来的无国籍移民，曾被当地人视为「黑区」。二〇〇三年大火发放，二〇一二年首场义诊，慈济人一次一次走进去。乡亲口袋里没有钱，就回房里找，有时找到两毛、五毛，交给志工。',
            'Kampung Titingan in Tawau is home to stateless migrants who fled the Philippines and Indonesia, and local people once avoided it as a “black area”. Tzu Chi went in after a fire in 2003, held its first clinic there in 2012, and kept returning. People with empty pockets went back into their rooms, searched, and handed volunteers the twenty or fifty sen they found.'),
          T('二〇一七年三月六日，试办无国籍学习中心，初期五十位孩童。截至二〇二五年，沙巴三所学习中心有三百七十九位学生。',
            'On 6 March 2017 a trial learning centre for stateless children opened with fifty pupils. By 2025 three centres in Sabah had 379 pupils.')
        ],
        q: { zh: '我記得我們第一天上課，我們是八點，我們的學生六點就到了。', en: 'I remember our first day of class. We started at eight. Our pupils arrived at six.', who: T('志工 梁菁華', 'Liang Jinghua, volunteer') },
        q2: { zh: '帶著一顆好的心去幫他們的，所以為什麼要怕。', en: 'We went with a good heart to help them, so why be afraid?', who: T('志工 羅珍愛', 'Luo Zhen’ai, volunteer') },
        s: ['o170306'] },
      { k: 'story', lay: 'T', h: T('蒲种的一对母女', 'A mother and daughter in Puchong'),
        p: [
          T('蒲种的林淑芬，起初以为慈济是诈骗。疫情时家里负担不起补习费，女儿魏芷晴参加「爱·伴学」，起初连镜头都不敢打开。后来，芷晴站上台当司仪，母女一起到环保点付出。',
            'Lin Shufen of Puchong first took Tzu Chi for a scam. In the pandemic the family could not afford tuition, and her daughter Wei Zhiqing joined the I-Didik learning programme, too shy at first even to turn on her camera. Later, Zhiqing stood on stage as an emcee, and mother and daughter now give their time at a recycling point together.'),
          T('森美兰、马六甲、柔佛三州的助学，截至二〇二五年累计五万六千七百四十九名学生，一千五百三十二万令吉。',
            'In Negeri Sembilan, Melaka and Johor, education aid had reached 56,749 students and RM15.32 million by 2025.')
        ],
        s: ['mystory', 'my3'] },
      { k: 'vids', ids: [['DcSw8PD24dQ', T('水灾过后爱延续　竹筒回娘家', 'After the floods, the bamboo banks come home')], ['6adIh2JbZpY', T('竹筒岁月启善念　翻转手心种福田', 'From receiving to giving: the bamboo banks in Malaysia')]] }
    ] },

  /* ───────── 数字 ───────── */
  { id: 'cnum', era: 'num', y: '2026', nav: T('账本', 'The ledger'),
    ask: T('妈妈，这些年加起来有多少？', 'Mama, how much does it all add up to?'),
    h: T('账本', 'The ledger'),
    lead: T('从第一本手写的账册起，慈济每一笔都记下来。这一页只列查得到出处的数字：单年的写单年，累计的写累计，不同算法的不相加。',
            'From the first handwritten ledger, Tzu Chi has kept a record of every sum. This page lists only figures with a published source. One-year figures are marked as such, and figures counted differently are not added together.'),
    b: [{ k: 'ledger' }] },

  /* ───────── 我也可以吗 ───────── */
  { id: 'cyou', era: 'you', y: '今天', yen: 'Today', nav: T('我也可以吗', 'Can I too?'),
    ask: T('妈妈，我也可以吗？', 'Mama, can I do it too?'),
    b: [{ k: 'you' }] },

  /* ───────── 全记录 ───────── */
  { id: 'call', era: 'all', y: '全记录', yen: 'Archive', nav: T('全记录与影片', 'Full record and films'),
    h: T('全记录', 'The full record'),
    lead: T('慈善沿革与影片，都可以自己翻。', 'The record and the films, for you to browse.'),
    b: [{ k: 'films' }, { k: 'records' }, { k: 'sources' }] }
  ];

  /* 1966 报头版：繁体，版式沿用 era1960.html */
  CH.sheet = {
    mast: '一九六六', date: '中華民國五十五年春<br>台灣　花蓮',
    img: 'assets/era/street_dots.jpg', cap: '情境重建，非當年攝影', alt: '一九六六年前後花蓮街角的情境畫面',
    head: '每天省下五毛錢', small: '三十位家庭主婦，一人一支竹筒',
    col: [
      '一九六六年春，花蓮。一位年輕的出家人即將離開，三十位弟子不捨，聯名上書慰留。上人說，要留下，每人每天須存五毛錢行善。',
      '竹竿鋸成竹筒，一人一支。每天提菜籃出門之前，先把買菜錢省下的五毛投進去。她們到了市場，遇到朋友就說：<b>「我今天買菜要省五毛錢。」</b>',
      '話就這樣一個傳一個。另一邊，六位常住眾每人每天多做一雙嬰兒鞋。兩筆合計，一個月一千一百七十元，是慈濟最早的基金。'
    ],
    en: '<b>SPRING 1966 · HUALIEN, TAIWAN</b>&ensp;A young nun was about to leave. Thirty women signed a letter asking her to stay. If you want me to stay, she said, each of you must save fifty cents a day to do good. At the market they told their friends: “Today I’m saving fifty cents from the groceries.”'
  };

  CH.ledger = [
    { h: T('全球', 'Worldwide'), rows: [
      { n: '139', u: T('个国家地区', 'countries and regions'), l: T('慈善足迹累计触及', 'reached by Tzu Chi’s charity work'), w: T('截至 2025.12.31', 'to 31 Dec 2025'), s: 'a2', big: 1 },
      { n: '26,106', u: T('户', 'homes'), l: T('永久住宅，援建于 19 国', 'permanent homes built in 19 countries'), w: T('统计至 2026.02', 'to Feb 2026'), s: 'exg', big: 1 },
      { n: '超过 16 万', nen: 'Over 160,000', u: T('公吨', 'tonnes'), l: T('发放大米，20 个国家地区', 'of rice distributed in 20 countries and regions'), w: T('统计至 2026.02', 'to Feb 2026'), s: 'exg', big: 1 },
      { n: '32,658,740', u: T('人次受益', 'instances of people served'), l: T('全球慈善援助', 'charity aid worldwide'), w: T('2025 单年', '2025 alone'), s: 'a2', big: 1 },
      { n: '20,240,110', u: T('人次', 'volunteer shifts'), l: T('全球投入志工，志工分布 68 个国家地区', 'worldwide; volunteers in 68 countries and regions'), w: T('2025 单年', '2025 alone'), s: 'a2' },
      { n: '超过 26 万', nen: 'Over 260,000', u: T('公斤', 'kg'), l: T('米扑满存下的大米', 'of rice saved in rice banks'), w: '', s: 'a1' }
    ] },
    { h: T('台湾', 'Taiwan'), rows: [
      { n: '322,936', u: T('户次', 'household visits'), l: T('弱势家庭扶助，22 县市', 'support for families in need, 22 counties and cities'), w: T('2025 单年', '2025 alone'), s: 'ext', big: 1 },
      { n: '17,201', u: T('件', 'cases'), l: T('急难补助', 'emergency aid'), w: T('2025 单年', '2025 alone'), s: 'org' },
      { n: '13,343', u: T('件', 'cases'), l: T('提报个案', 'new cases reported'), w: T('2025 单年', '2025 alone'), s: 'org' },
      { n: '8,699', u: T('户', 'homes'), l: T('居家安全改善与房屋修缮', 'home safety and repairs'), w: T('2025', '2025'), s: 'ext' },
      { n: '221,901', u: T('人次', 'instances'), l: T('弱势儿少扶助', 'support for children and youth'), w: T('2025', '2025'), s: 'ext' },
      { n: '26,507', u: T('人次', 'instances'), l: T('奖助学补助', 'scholarships and study aid'), w: T('2025', '2025'), s: 'ext' },
      { n: '67,607', u: T('间', 'shops'), l: T('富有爱心店，全台 22 县市', '“Rich in Love” shops across 22 counties and cities'), w: T('至 2026.03.08', 'to 8 Mar 2026'), s: 'a1' }
    ] },
    { h: T('马来西亚', 'Malaysia'), rows: [
      { n: '56,749', u: T('名学生', 'students'), l: T('森美兰、马六甲、柔佛三州助学累计，共 1,532 万令吉', 'education aid in three states, RM15.32 million in all'), w: T('截至 2025', 'to 2025'), s: 'my3' },
      { n: '379', u: T('位学生', 'pupils'), l: T('沙巴三所学习中心', 'at three learning centres in Sabah'), w: T('截至 2025', 'to 2025'), s: 'o170306' }
    ] },
    { h: T('这些钱从哪里来', 'Where the money comes from'), rows: [
      { n: '93%', u: T('', ''), l: T('捐款人次中，1,000 元以下所占比例（按人次；金额占 28%）', 'of donations were under NT$1,000, by number; they make up 28% of the amount'), w: T('2024', '2024'), s: 'a1', big: 1 }
    ] }
  ];
  CH.ledgerNote = T('户次：同一户一年内多次受助，每次都算一次。人次同理。', 'Household visits and instances count each occasion of help, so one household or person may be counted more than once in a year.');
  CH.ledgerOld = [
    [T('1969.02.09　首次冬令发放', '9 Feb 1969, first winter distribution'), T('40 户', '40 households')],
    [T('截至 1983　救济金额总计', 'Relief to 1983'), T('1 亿 5 千多万元', 'over NT$150 million')]
  ];

  CH.you = {
    lines: [
      T('可以。', 'Yes, you can.'),
      T('当年的家庭主妇，每天省五毛钱。缅甸的农人，每天存一把米。今天，慈济的捐款人次里，九成三每次不到一千元。', 'The housewives of those days saved fifty cents a day. Farmers in Myanmar save a handful of rice. Today, 93 of every 100 donations to Tzu Chi are under NT$1,000.'),
      T('不必等到有钱，不必等到有空。只要一念心，就可以开始。', 'There is no need to wait for money or for time. One kind thought is enough to begin.')
    ],
    q: { zh: '一分發心，就有一分力量。', en: 'One measure of resolve brings one measure of strength.', who: T('證嚴上人', 'Dharma Master Cheng Yen'), s: 'fm32' },
    links: [
      { zh: '马来西亚慈济', en: 'Tzu Chi Malaysia', url: 'https://www.tzuchi.my/' }
    ],
    linkNote: T('报名志工、本地分会的入口，待分会确认后补上。', 'Links for volunteering and local branches will be added once confirmed by the Malaysia branch.')
  };

  CH.next = {
    ask: T('妈妈，没有钱，医院就不救吗？', 'Mama, if people have no money, won’t the hospital save them?'),
    stop: T('下一站・医疗　制作中', 'Next stop: Medicine · in progress')
  };

  CH.footer = T('本页为样板，尚未经马来西亚慈济分会审核，未发布。女孩与妈妈是说故事的人。照片除另有说明外，取自慈济《歷史上的今天》公开页面；标示「情境重建」的画面由 AI 依史料生成，非当年摄影。「」内为原文照录。',
                'Sample only: not yet reviewed by Tzu Chi Malaysia and not published. The girl and her mother are storytellers. Unless stated otherwise, photographs come from Tzu Chi’s public On This Day pages. Images marked as reconstructions are AI-generated from the record and are not historical photographs.');

  /* 慈善沿革全记录：t 决定 filter */
  CH.filters = [['all', T('全部', 'All')], ['first', T('第一次', 'Firsts')], ['care', T('照顾', 'Care')], ['home', T('建屋', 'Homes')], ['relief', T('赈灾', 'Relief')], ['system', T('制度', 'Systems')], ['my', T('马来西亚', 'Malaysia')]];
  CH.records = [
    ['1966.04.14', 'first system', '佛教克难慈济功德会于花莲佳民村普明寺成立，三十支竹筒，每人每日五毛。', 'The association is founded at Pu Ming Temple, Hualien, with thirty bamboo banks at fifty cents a day each.', 'fm27'],
    ['1966.05', 'first care', '李时提报卢丹桂，第一例医疗个案，同年七月送罗东开刀。', 'Li Shi reports Lu Dangui, the first medical case. She goes to Luodong for surgery that July.', 'o670701'],
    ['1966.06', 'first care', '林曾老太太成为第一位长期照顾户，每月济助三百元。', 'Lin Zeng becomes the first long-term care recipient, at NT$300 a month.', 'fm36'],
    ['1967', 'system', '建立复查制度，每三个月回访一次。', 'The follow-up system begins: a return visit every three months.', 'fm37'],
    ['1967.07.20', 'first system', '《慈濟》月刊创刊。', 'The Tzu Chi monthly is first published.', 'o670720'],
    ['1967.11.01', 'first home', '第一间永久屋：李阿拋老人家的五坪空心砖屋。', 'The first permanent house, five ping of hollow brick, for Li A-pao.', 'fm39'],
    ['1969.02.09', 'first care', '普明寺首次冬令发放，嘉惠四十户、二百多人。', 'First winter distribution at Pu Ming Temple: forty households, over 200 people.', 'fm43'],
    ['1969.10.16', 'first relief', '艾尔西台风，台东大南村大火烧毁一百四十八户，首次大型赈灾。', 'After Typhoon Elsie, a fire destroys 148 households in Danan: the first large-scale relief.', 'fm45'],
    ['1970.01.30', 'care', '静思精舍赈济二百余人，此后每年举办，并增每月常态发放。', 'Relief for over 200 people at the Jing Si Abode, repeated every year, with regular monthly distributions added.', 'fm43'],
    ['1971.11.11', 'home', '娜定台风后，买地建屋三间，名「嘉里小筑」。', 'After Typhoon Nadine, land is bought and three houses are built at Jiali.', 'fm_nadine'],
    ['1973.10', 'relief system', '娜拉风灾，一百多位委员沿门募款，帮助六百七十一个家庭，勘灾、造册、发放自此定下。', 'Typhoon Nora: over a hundred commissioners raise funds door to door and help 671 families. Assessment, listing and distribution become the method.', 'o731024'],
    ['1975.12', 'home', '妮娜台风后于精舍土地动土「妮娜小築」，翌年三月完工。', 'After Typhoon Nina, Nina Cottages are begun on the Abode’s land and finished the following March.', 'o750905'],
    ['1976.06', 'home care', '「康樂小築」收容无力重建、单身无依的长者。', 'Kangle Cottages take in elders living alone who cannot rebuild.', 'o750905'],
    ['1976.12.04', 'care', '十天环岛访贫，复查一百二十户，张有传医师随车义诊。', 'A ten-day journey round the island: 120 households reviewed, with Dr Zhang Youchuan seeing patients.', 'fm_tour'],
    ['1978.09', 'care', '上人首次探访乐生疗养院，随后整修房屋，设瘫痪病房。', 'The Master first visits Losheng Sanatorium. Tzu Chi repairs the buildings and sets up a ward.', 'fm93'],
    ['1980.01.16', 'system', '财团法人台湾省佛教慈济慈善事业基金会立案。', 'The Tzu Chi Foundation is registered.', 'fm65'],
    ['1980.10.27', 'care', '乐生院友募集六万一千九百元，响应慈济医院筹建。', 'Losheng residents raise NT$61,900 for the planned hospital.', 'fm93'],
    ['1991.05', 'relief', '孟加拉风灾，美国发起「一人一元美金」，上人发起「一人省下一个面包钱」。', 'Bangladesh cyclone: “one person, one dollar” in the USA, and “save the price of a bread roll” from the Master.', 'fm138'],
    ['1991.07', 'first my care', '马来西亚首例慈善个案，亚依淡罗合海。', 'First charity case in Malaysia: Luo Hehai of Ayer Itam.', 'fm145'],
    ['1991.07.15', 'relief first', '上人呼吁赈济华东水患，慈济人首次上街募款。', 'The Master calls for relief for the East China floods, and volunteers raise funds on the streets for the first time.', 'o910715'],
    ['1992', 'relief first', '援助蒙古，第一次由慈济志工亲手发放的国际援助。', 'Aid to Mongolia: the first international relief handed out in person by volunteers.', 'fm138'],
    ['1992.10.10', 'my care', '马六甲首例机构关怀，马接峇汝安老院开案。', 'First institutional care in Melaka, at the old folks’ home at Machap Baru.', 'fm145'],
    ['1993.03.04', 'my care home', '郑金龙老先生成为马六甲慈济首位照顾户，慈济协助盖屋。', 'Zheng Jinlong becomes the first care recipient in Melaka, and Tzu Chi helps build his home.', 'fm145'],
    ['1993.08.11', 'my system', '槟城联络处成立。', 'The Penang liaison office opens.', 'o930613'],
    ['1994.04.10', 'my first care', '马六甲首次现场发放，此后每月第二个星期日。', 'First on-site distribution in Melaka, then every second Sunday of the month.', 'o940410'],
    ['1995.02.18', 'home relief', '尼泊尔三座慈济村一千四百户揭碑；六月第四座四百户交屋。', 'Three villages of 1,400 homes unveiled in Nepal; a fourth of 400 follows in June.', 'o950218'],
    ['1996.12.22', 'system', '从花莲吉安北昌村、新城佳林村开始推动社区志工。', 'Community volunteering begins in Beichang and Jialin villages, Hualien.', 'fm196'],
    ['1997.08.03', 'my first care', '全马第一家由非政府组织营运、费用全免的洗肾中心启用。', 'Malaysia’s first free dialysis centre run by a non-governmental organisation opens.', 'o930613'],
    ['1999.09.21', 'relief home', '九二一地震，慈济承担五十一所学校援建。', 'The 921 earthquake. Tzu Chi takes on the rebuilding of fifty-one schools.', 'fm219'],
    ['2000', 'home', '贵州九个慈济新村，四百多户。', 'Nine Tzu Chi villages in Guizhou, over 400 homes.', 'fm239'],
    ['2003.07.18', 'home', '印尼金卡莲大爱一村入厝，一千一百户。', 'The Cengkareng Great Love Village, Jakarta: 1,100 households move in.', 'o030718'],
    ['2004.12.26', 'relief home', '南亚大海啸，于亚齐及斯里兰卡援建大爱村三千三百多户。', 'Indian Ocean tsunami: over 3,300 homes built in Aceh and Sri Lanka.', 'fm282'],
    ['2006.10.26', 'system', '上人提出「回归竹筒岁月」。', 'The Master calls for a return to the bamboo-bank days.', 'fm297'],
    ['2008.05.15', 'relief', '缅甸纳吉斯风灾，首度发放嘉惠二百二十五户，计九百六十七人。', 'Cyclone Nargis, Myanmar: the first distribution reaches 225 households, 967 people.', 'fm323'],
    ['2009.08', 'relief home', '莫拉克风灾，援建六座大爱村，一千三百〇二户。', 'Typhoon Morakot: six Great Love Villages, 1,302 homes.', 'fm329'],
    ['2009.09', 'relief system', '菲律宾凯莎娜台风，启动以工代赈。', 'Typhoon Ketsana, Philippines: work for relief begins.', 'fm332'],
    ['2013.01', 'care', '赖索托发愿做玉米扑满，带动四十七个村落。', 'Lesotho volunteers vow to save maize. Forty-seven villages take part.', 'fm406'],
    ['2016.03.27', 'first care', '缅甸瑞那滚村首次米扑满回娘家，九十户，九十六点四公斤。', 'The rice of Shwe Na Gwin comes home for the first time: ninety households, 96.4 kg.', 'o160327'],
    ['2017.03.06', 'my care', '沙巴斗湖试办无国籍学习中心，初期五十位孩童。', 'A trial learning centre for stateless children opens in Tawau, Sabah, with fifty pupils.', 'o170306'],
    ['2020.01.15', 'home care', '「安稳家园．美善社区」专案启动。', 'The Safe Homes, Good Neighbourhoods project begins.', 'o200115'],
    ['2025.03.28', 'relief', '缅甸规模七点七强震，首波大型发放济助五千户。', 'Magnitude 7.7 earthquake in Myanmar: the first large distribution reaches 5,000 households.', 'o250330']
  ];
})();
