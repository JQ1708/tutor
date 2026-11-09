/* 慈善站全部文字都在這裡。大組開會後改字，只改這個文件。
   敘述語氣照 內容/慈濟文字特點.md。「」內的原話一律照出處，不改。
   p: 段落　more: 「讀全文」裡的段落　s: 出處　ph: 照片 {i:文件名, c:圖注} */
(function () {
  var T = function (zh, en) { return { zh: zh, en: en }; };
  var otd = function (d, t) { /* d = 19660414 */
    var s = d.slice(0, 4) + '.' + d.slice(4, 6) + '.' + d.slice(6, 8);
    return { zh: '《慈濟歷史上的今天》' + s, en: 'Tzu Chi, On This Day, ' + s, url: 'https://tzuchiculture.org/tzuchi_60th_anniversary/onthisday/onthisday_' + d + '-1/' };
  };
  var fm = function (n, t) { return { zh: '慈濟法脈資料庫 ' + n + '〈' + t + '〉', en: 'Tzu Chi Dharma Lineage Archive, no. ' + n }; };
  var xl = function (p) { /* 雪隆史第一冊，印刷頁碼 */
    return { zh: '《馬來西亞慈濟史 雪隆分會（一）》頁 ' + p.replace(/, /g, '、'), en: 'History of Tzu Chi Malaysia: KL & Selangor Branch, vol. 1, p. ' + p };
  };
  var S = {
    o230220: otd('20230220'),
    o230913: otd('20230913'),
    xl2914: { zh: '《馬來西亞慈濟史 雪隆分會（二）》頁 914', en: 'History of Tzu Chi Malaysia: KL & Selangor Branch, vol. 2, p. 914' },
    nLAfire: { zh: '慈濟美國〈慈濟美國圓滿第一輪山火賑災發放〉2025.01.21', en: 'Tzu Chi USA: first round of wildfire distributions, 21 Jan 2025', url: 'https://tzuchi.us/zh/blog/press-release-la-wild-fire-first-distribution-jan-2025' },
    nMiri: { zh: '馬來西亞慈濟〈愛心相伴 驅散心霾〉', en: 'Tzu Chi Malaysia news report on the Miri distribution', url: 'https://www.tzuchi.my/zh/慈济新知/慈济报导/社区志工纪实/cat/慈善纪实/爱心相伴-驱散心霾' },
    nBintulu: { zh: '馬來西亞慈濟〈用祝福與愛 與你跨越災難〉2025.02.23', en: 'Tzu Chi Malaysia news report on the Bintulu distribution, 23 Feb 2025', url: 'https://tzuchi.my/zh/慈济新知/慈济报导/社区志工纪实/cat/慈善纪实/用祝福与爱-与你跨越灾难' },
    nRoh: { zh: '慈濟全球網〈A Long Road to Canada for a Paralyzed Rohingya Refugee〉2026.08.19', en: 'Tzu Chi Global: A Long Road to Canada for a Paralyzed Rohingya Refugee, 19 Aug 2026', url: 'https://global.tzuchi.org/a-long-road-to-canada-for-a-paralyzed-rohingya-refugee' },
    nPutra: { zh: '慈濟馬來西亞〈布高原氣爆發放　走在最前做到最後〉', en: 'Tzu Chi Malaysia: distribution after the Putra Heights gas explosion', url: 'https://tzuchi.my/zh/%E6%85%88%E6%B5%8E%E6%96%B0%E7%9F%A5/%E6%85%88%E6%B5%8E%E6%8A%A5%E5%AF%BC/%E7%A4%BE%E5%8C%BA%E5%BF%97%E5%B7%A5%E7%BA%AA%E5%AE%9E/cat/%E6%85%88%E5%96%84%E7%BA%AA%E5%AE%9E/%E5%B8%83%E9%AB%98%E5%8E%9F%E6%B0%94%E7%88%86%E5%8F%91%E6%94%BE-%E8%B5%B0%E5%9C%A8%E6%9C%80%E5%89%8D%E5%81%9A%E5%88%B0%E6%9C%80%E5%90%8E' },
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
    fm_tour: fm('00056', '全臺訪貧複查十天'), fm46: fm('00046', '花蓮市成功街大火，奠定救災原則'), fm59: fm('00059', '賽洛瑪颱風重創南臺灣'), fm60: fm('00060', '花蓮縣瑞穗大火'),
    fm294: fm('00294', '雪隆分會與UNHCR展開難民關懷'), fm468: fm('00468', '莫三比克分會獲准於當地註冊立案'),
    csr1819: T('《2018–2019 年慈濟永續報告書》', 'Tzu Chi Sustainability Report 2018–2019'), xl102: xl('102, 103'),
    ac: T('《竹筒歲月・六十影響報告書》社區篇', 'Tzu Chi 60th Anniversary Impact Report, Community'),
    exg: { zh: '慈濟六十特展・全球數據圖（統計至 2026.02）', en: 'Tzu Chi 60th Anniversary Exhibition, global figures (to Feb 2026)' },
    ext: { zh: '慈濟六十特展・臺灣數據圖（統計至 2025.12）', en: 'Tzu Chi 60th Anniversary Exhibition, Taiwan figures (to Dec 2025)' },
    org: { zh: '慈濟基金會〈經濟補助與心靈關懷〉2025', en: 'Tzu Chi Foundation, financial and care figures 2025' },
    my3: { zh: '馬來西亞慈濟報導 2025.11.02', en: 'Tzu Chi Malaysia report, 2 Nov 2025' },
    xlsb: xl('55–57, 64–67'), xlpt: xl('144–152, 156'), xldv: xl('82, 84–86'), xlgy: xl('133–134'), xlfl: xl('279–290'),
    xlbr: xl('111–112'), xllg: xl('182'), xlmh: xl('207–208'), xlfs: xl('250–251'),
    mystory: (window.SRC && window.SRC.my) || T('馬來西亞慈濟報導', 'Tzu Chi Malaysia report')
  };

  var CH = window.CH = { S: S };

  CH.hero = {
    film: T('媽媽，慈濟是什麼？', 'Mama, what is Tzu Chi?'),
    stop: T('第一站', 'First stop'),
    title: T('慈善', 'Charity'),
    sub: T('一九六六年，三十支竹筒，每人每天五毛錢。<br>截至二〇二五年底，慈善足跡累計觸及一百三十九個國家地區。',
           'In 1966: thirty bamboo banks, fifty cents a day each.<br>By the end of 2025, this charity work had reached 139 countries and regions.'),
    watch: T('看影片　10 分 39 秒', 'Watch the film · 10 min 39 s'),
    read: T('走這六段路', 'Walk the six stretches'),
    ai: T('AI 情境重建，非當年攝影', 'AI reconstruction, not a historical photograph')
  };

  CH.river = {
    a: T('這一張一張，都是真實走過的日子。', 'Every one of these is a day that truly happened.'),
    b: T('走了六十年，走到最開始。', 'Sixty years back, to where it began.')
  };

  CH.chapters = [

  /* ───────── 一九六六 ───────── */
  { id: 'c66', era: 'e60', y: '1966', nav: T('每天五毛錢', 'Fifty cents a day'),
    b: [
      { k: 'sheet' },
      { k: 'story', lay: 'R', date: '1966', h: T('一時找不到五百位，就從三十位開始', 'Start with thirty'),
        ph: [{ i: '19660414-1_02', c: T('硬幣投入竹筒。', 'A coin going into the bamboo bank.') }],
        p: [
          T('這年初春，證嚴上人在鳳林的醫院門口，見到地上一攤血。一位原住民婦女繳不起保證金，未獲收治。上人發願：五百個人，就有一千隻手、一千隻眼，隨處聞聲救苦。',
            'Early that spring, in Fenglin, the Master saw a pool of blood at a hospital entrance. An Indigenous woman had been turned away because her family could not pay the deposit. She made a vow: five hundred people would mean a thousand hands and a thousand eyes, ready to answer suffering wherever it was.'),
          T('一時找不到五百位，就以現有的三十位開始。一九六六年四月十四日，農曆三月二十四，「佛教克難慈濟功德會」在花蓮佳民村普明寺成立。',
            'Five hundred could not be found at once, so they began with the thirty there were. On 14 April 1966 the Tzu Chi Merit Association was founded at Pu Ming Temple in Jiamin Village, Hualien.')
        ],
        more: [
          T('當時有人質疑：連兩三元的車錢都沒有，怎麼做救濟工作？上人提出的辦法是兩筆：寺中六位常住眾，每人每天多做一雙嬰兒鞋；三十位家庭主婦，每人每天買菜前先投五毛錢到竹筒。',
            'Someone asked how she could run a relief effort without even NT$2 or 3 for bus fare. Her answer had two parts: the six resident members would each make one more pair of baby shoes every day, and thirty women would each drop fifty cents into a bamboo bank before going to market.')
        ],
        s: ['fm27', 'fm28', 'fm31'] },
      { k: 'acct', h: T('克難時期的賬', 'The accounts of the early days'),
        rows: [
          [T('嬰兒鞋　六人，每人每天一雙，一雙四元', 'Baby shoes: six people, one pair each a day, NT$4 a pair'), T('每天 24 元，每月 720 元', 'NT$24 a day, NT$720 a month')],
          [T('竹筒　三十支，每人每天五毛', 'Bamboo banks: thirty, fifty cents each a day'), T('每天 15 元，每月 450 元', 'NT$15 a day, NT$450 a month')]
        ],
        sum: [T('每月合計', 'Each month'), T('1,170 元', 'NT$1,170')], s: ['fm27', 'fm31'] },
      { k: 'coin' },
      { k: 'story', lay: 'L', date: '1966', h: T('為什麼不一個月交十五元？', 'Why not NT$15 once a month?'),
        ph: [{ i: '19660414-1_04', c: T('硬幣。', 'Coins.') }],
        p: [T('有人問，一天五毛，一個月十五元，何不月底一次交？上人的回答，慈濟人至今常常提起。',
              'Some asked: fifty cents a day is NT$15 a month, so why not pay once at the end of the month? The Master’s answer is still told today.')],
        q: { zh: '我說我會算啦，我懂啦，但是我只要求你，每天五毛，總而言之我要你天天一念善心，每天一念善心', en: 'I can do the sum, I understand. But all I ask is fifty cents every day. What I want is for you to have one kind thought, every single day.', who: T('證嚴上人', 'Dharma Master Cheng Yen') },
        q2: { zh: '月捐一次，只發一次善念；日存五毛，則是日日發心。', en: 'Give once a month, and one kind thought arises once. Save fifty cents a day, and the heart is moved every day.', who: T('證嚴法師慈示', 'Dharma Master Cheng Yen') },
        s: ['o660414', 'a1'] }
    ] },

  /* ───────── 最早的照顧戶 ───────── */
  { id: 'c67', era: 'e60', y: '1966–67', nav: T('最早的照顧戶', 'The first care recipients'),
    ask: T('媽媽，省下來的錢，給了誰？', 'Mama, who did the saved money go to?'),
    h: T('最早的照顧戶', 'The first care recipients'),
    lead: T('照顧戶，是慈濟長期濟助的家庭。一九六七年七月二十日，《慈濟》月刊創刊，頭版刊的不是功德會，是一位老人家。',
            'Care recipients are the households Tzu Chi looks after over the long term. When the Tzu Chi Monthly first appeared on 20 July 1967, its front page was not about the association. It was about one old woman.'),
    b: [
      { k: 'story', lay: 'R', date: '1966.06', h: T('林曾', 'Lin Zeng'),
        ph: [{ i: '19670720-1_00', c: T('《慈濟》創刊號頭版，標題〈寡居貧病老婦林曾獲慈濟會長期救助〉。', 'Front page of the first issue: “Widowed, poor and ailing, Lin Zeng receives long-term aid from Tzu Chi.”') }],
        p: [
          T('林曾老太太八十六歲，從福建來臺尋夫，丈夫已往生，獨居花蓮市場小巷，一間三榻榻米大的小屋。一九六六年二月起，陳貞如與妹妹陳雪卿每日為她送菜飯，不論刮風下雨。',
            'Lin Zeng was eighty-six. She had come from Fujian looking for her husband and found he was gone. She lived alone in a three-tatami room in an alley by the Hualien market. From February 1966, Chen Zhenru and her sister Chen Xueqing brought her meals every day, in wind or rain.'),
          T('同年六月，功德會開始每月濟助三百元。林曾老太太成為慈濟第一位長期照顧戶。',
            'That June the association began giving her NT$300 each month. She became Tzu Chi’s first long-term care recipient.')
        ],
        more: [
          T('一九六九年六月，濟助增至每月四百元。林網重義務照料，李天送醫師義診。一九七〇年二月三日，林曾老太太往生，功德會補助治喪費四百八十五元。',
            'In June 1969 the monthly aid rose to NT$400. Lin Wangzhong looked after her without pay and Dr Li Tiansong treated her free of charge. She passed away on 3 February 1970, and the association paid NT$485 towards her funeral.')
        ],
        s: ['fm36', 'o670720'] },
      { k: 'story', lay: 'L', date: '1966.05', h: T('盧丹桂', 'Lu Dangui'),
        ph: [{ i: '19670701-1_00', c: T('早年的手寫個案記錄。', 'An early handwritten case record.') }],
        p: [
          T('菜販盧丹桂，五個孩子的媽媽，因青光眼失明，無法工作。鄰居李時拿一本孩子寫字的簿子，在菜市場向買菜的人募款，再找到功德會。這是慈濟第一例醫療個案。李時後來成為慈濟第六號委員（勸募善款、訪視個案的早期慈濟人）。',
            'Lu Dangui sold vegetables and had five children. Glaucoma took her sight and she could no longer work. Her neighbour Li Shi took a child’s exercise book to the market, asked shoppers for donations, then came to the association. It became Tzu Chi’s first medical case. Li Shi later became Commissioner No. 6.'),
          T('功德會成立才一個月，仍臨時發動募款，送她到宜蘭羅東開刀。一九六七年一月，盧女士往生。上人深感愧疚，自此定下複查：每三個月回訪一次，發放之後，持續關懷。',
            'The association was only a month old, yet it raised the money and sent her to Luodong for surgery. In January 1967 she passed away. The Master felt deep remorse, and from then on a rule stood: every case is visited again every three months. Giving aid does not end the care.')
        ],
        q: { zh: '感覺很愧疚，所以我們又開始了說，三個月要複查(回訪)一次，這就是經一事長一智。', en: 'I felt deep remorse. So we began to say: every three months there must be a return visit. That is how we learned from what happened.', who: T('證嚴上人', 'Dharma Master Cheng Yen') },
        more: [
          T('盧女士往生後，慈濟持續關懷這個家庭，直到家境改善。一九八五年，她的先生黃隣祥生活並不富裕，仍捐出善款，助建慈濟醫院。',
            'After she passed away, Tzu Chi kept caring for the family until life improved. In 1985 her husband, Huang Linxiang, though far from well off, gave a donation towards building the Tzu Chi hospital.')
        ],
        s: ['o670701', 'fm37'] },
      { k: 'story', lay: 'T', date: '1967.12.15', h: T('李阿拋', 'Li A-pao'),
        p: [
          T('李阿拋老人家八十一歲，雙眼失明，住在木瓜溪旁傾斜的茅草屋，以三粒石頭搭小灶。德慈法師回憶：「上人看到這樣很不忍心」。南華站站長張榮華捐出甘蔗園十坪地，慈濟蓋起一間五坪的空心磚屋，三扇窗，鐵皮屋頂。十一月一日動土，十二月十五日完工入厝。',
            'Li A-pao was eighty-one and blind. He lived in a leaning thatched hut by the Mugua River and cooked on three stones. Master De Ci recalled that the Master could not bear to see it. Stationmaster Zhang Ronghua gave ten ping of sugar-cane land, and Tzu Chi built a five-ping hollow-brick house with three windows and an iron roof. Work began on 1 November, and he moved in on 15 December.'),
          T('這是慈濟的第一間永久屋。截至二〇二六年二月，慈濟已在十九個國家援建超過二萬六千戶永久住宅。',
            'It was Tzu Chi’s first permanent house. By February 2026 Tzu Chi had built more than 26,000 permanent homes in nineteen countries.')
        ],
        note: T('上人後來回憶為四坪、里長撥地，此處依當年記載。', 'The Master later recalled four ping on land allotted by the village chief. This account follows the record of the time.'),
        s: ['fm39', 'o750905', 'exg'] }
    ] },

  /* ───────── 1969–1979 ───────── */
  { id: 'c69', era: 'e70', y: '1969–79', nav: T('親手送到', 'Delivered by hand'),
    ask: T('媽媽，住得很遠的人呢？', 'Mama, what about people who live far away?'),
    h: T('親手送到', 'Delivered by hand'),
    lead: T('一九六〇年代末，慈濟人從花蓮走向臺東，再走遍全島。物資親手送到，名冊一戶一戶造。',
            'From the end of the 1960s, Tzu Chi volunteers went beyond Hualien to Taitung, then around the island. Aid was delivered by hand, and the lists were drawn up household by household.'),
    b: [
      { k: 'rec', items: [
        { d: '1969.02.09', zh: '普明寺首次冬令發放（每年歲末給照顧戶的慰問），嘉惠四十戶、二百多人。每人新衣一件、紅包五十元，每戶棉被一條，並備素筵。', en: 'First winter distribution at Pu Ming Temple, an annual year-end visit to care recipients. Forty households, over 200 people. A new garment and NT$50 each, a quilt for each household, and a vegetarian meal.' },
        { d: '1969.10.16', zh: '艾爾西颱風過後，臺東大南村大火，燒毀一百四十八戶。慈濟以二萬餘元購置毛毯，親手送到每一戶。這是慈濟第一次大型賑災。', en: 'After Typhoon Elsie, a fire in Danan Village, Taitung, destroyed 148 households. Tzu Chi spent over NT$20,000 on blankets and delivered one to each household by hand. It was Tzu Chi’s first large-scale relief.' },
        { d: '1970.01.30', zh: '靜思精舍（上人與弟子修行的道場）賑濟二百餘人，此後每年舉辦，並增每月常態發放。', en: 'Relief for over 200 people at the Jing Si Abode, held every year afterwards and joined by regular monthly distributions.' }
      ], s: ['fm43', 'fm45'] },
      { k: 'story', lay: 'T', date: '1970.11.27', h: T('名冊之外的十六戶', 'Sixteen households off the list'),
        p: [
          T('一九七〇年十一月二十七日晚上，花蓮成功街大火，延燒仁愛街、福建街，七十多戶、三百多人無家可歸。十二月六日，慈濟依市公所的災戶名冊，為七十二戶致送慰問金。',
            'On the night of 27 November 1970 a fire on Chenggong Street in Hualien spread to two more streets and left over seventy households, more than 300 people, without a home. On 6 December Tzu Chi gave relief money to the 72 households on the city office’s list.'),
          T('可是有十六戶不在名冊上，他們沒有報戶口。警察機關和市公所查過，他們確實住在那裡，受災屬實。十二月十日，慈濟補發了慰問金。',
            'But sixteen households were not on the list, because they had never registered there. The police and the city office confirmed that they lived there and had lost their homes. On 10 December Tzu Chi gave them relief money too.')
        ],
        s: ['fm46'] },
      { k: 'story', lay: 'W', date: '1973.10', h: T('娜拉風災', 'Typhoon Nora'),
        ph: [{ i: '19731024-1_01', c: T('洪水沖毀屋舍。', 'A house swept by floodwater.') }, { i: '19731024-1_02', c: T('斷橋。', 'A broken bridge.') }, { i: '19731024-1_04', c: T('打包毛毯。', 'Packing blankets.') }],
        p: [T('風災過後，一百多位委員沿門募款，嘉惠六百七十一個家庭。勘災（實地查看災情）、造冊、發放，這套做法自此定下。',
              'After the storm, more than a hundred commissioners went door to door to raise funds and helped 671 families. Assess, list, distribute: the method was set from this time on.')],
        s: ['o731024'] },
      { k: 'story', lay: 'R', date: '1975.08', h: T('妮娜小築', 'Nina Cottages'),
        ph: [{ i: '19750905-1_07', c: T('早年援建的房屋。', 'Houses built in the early years.') }],
        p: [
          T('一九七五年八月三日，強烈颱風妮娜登陸花蓮，新城、秀林受災最重。九月五日，《慈濟》月刊一〇七期刊出上人親撰的捐助啟示。',
            'On 3 August 1975 the severe Typhoon Nina struck Hualien, with Xincheng and Xiulin worst hit. On 5 September, issue 107 of the Tzu Chi Monthly carried an appeal written by the Master herself.'),
          T('找地不易，精舍挪出自己的土地。同年十二月動土，翌年三月完工，安置寡母孤女。一九七六年六月，「康樂小築」安頓無力重建、單身無依的長者。住戶陳才爺爺在此住到一百零四歲。',
            'Land was hard to find, so the Abode gave up its own. Work began that December and finished the following March, housing widows and their daughters. In June 1976 Kangle Cottages took in elderly people living alone who could not rebuild. One resident, Grandpa Chen Cai, lived there to the age of 104.')
        ],
        q: { zh: '要找土地不容易，所以上人說要趕快蓋，要不然那些災民怎麼辦，所以才把精舍的土地挪出來，說我們後面的土地來蓋6棟，給那些孤兒跟寡婦。', en: 'Land was not easy to find, so the Master said we must build quickly, or what would those people do? So the Abode’s own land was set aside: six houses on the land behind us, for the orphans and widows.', who: T('德慈法師', 'Master De Ci') },
        s: ['o750905', 'fm55'] },
      { k: 'rec', items: [
        { d: '1976.12.04', zh: '上人和委員搭一部遊覽車，十天環島訪貧（至 12 月 13 日），複查一百二十戶，張有傳醫師隨車義診。一路陪著走的，是豐濱的遊覽車司機黃海松、遊覽小姐黃秀梅，看了一戶又一戶，兩位各捐出三千元和一千二百元。', en: 'The Master and commissioners took one coach on a ten-day journey round the island to visit people in need, to 13 December. 120 households were reviewed, with Dr Zhang Youchuan seeing patients along the way. The driver Huang Haisong and coach attendant Huang Xiumei, from Fengbin, stayed with them throughout. After seeing one home after another, they gave NT$3,000 and NT$1,200 of their own.' }
      ], s: ['fm_tour'] },
      { k: 'story', lay: 'T', date: '1977.04', h: T('自己的家也燒了', 'Her own home burned too'),
        p: [T('一九七七年四月十一日，花蓮瑞穗大火，七十九戶全被燒毀。當時瑞穗只有兩位慈濟委員，其中的林秋英，自己也是受災戶。她放下面目全非的家當，先去協助其他受災戶，直到全部安頓妥善。許多受災鄉親因此加入慈濟。',
              'On 11 April 1977 a fire in Ruisui, Hualien, destroyed all 79 households on the street. There were only two Tzu Chi commissioners in Ruisui, and one of them, Lin Qiuying, had lost her own home. She left what remained of her belongings and went to help the others until all were settled. Many of those affected went on to join Tzu Chi.')],
        s: ['fm60'] },
      { k: 'rec', items: [
        { d: '1977.07', zh: '賽洛瑪、薇拉颱風接連過境。委員分組逐戶勘查，九月發放。賑濟完成後，屏東、高雄、基隆仍有五十二戶需要長期濟助：災難過去了，慈濟人的關懷還在繼續。', en: 'Typhoons Thelma and Vera struck in turn. Commissioners surveyed each household, and aid went out in September. Afterwards 52 households in Pingtung, Kaohsiung and Keelung still needed long-term care. The storm had passed, and the care went on.' }
      ], s: ['fm59'] }
    ] },

  /* ───────── 1980 年代 ───────── */
  { id: 'c80', era: 'e80', y: '1978–89', nav: T('滴水成河', 'Drops become a river'),
    ask: T('媽媽，錢從哪裡來？', 'Mama, where did the money come from?'),
    h: T('滴水成河', 'Drops become a river'),
    lead: T('截至一九八三年，救濟金額總計一億五千多萬元，濟助全臺一千多戶、三千多人。慈濟的紀錄寫到這筆數字時說：「都源自於每人點滴的力量，這即是滴水成河的例證」。',
            'By 1983 relief had reached over NT$150 million, for more than a thousand households and three thousand people across Taiwan. Tzu Chi’s records say of this figure that it all came from each person’s small strength, an example of drops forming a river.'),
    b: [
      { k: 'story', lay: 'R', date: '1978.09', tall: 1, h: T('一個超越天堂的地方', 'A place beyond heaven'),
        ph: [{ i: '19860309-1_05', c: T('棲蓮精舍蓮友的捐款賬冊，姓名已虛化。', 'The donation ledger of the Qilian Hall members, names blurred.') }, { i: '19860309-1_07', c: T('賬冊特寫，姓名已虛化。', 'The ledger, close up, names blurred.') }],
        p: [
          T('新莊樂生療養院，住著漢生病（痲瘋病）院友。院內念佛會會長金義楨為修繕院舍四處求援。一九七八年九月，上人首次來到樂生。',
            'Losheng Sanatorium in Xinzhuang was home to people with Hansen’s disease. Jin Yizhen, head of its Buddhist group, was seeking help to repair the buildings. In September 1978 the Master came to Losheng for the first time.'),
          T('慈濟隨後整修房屋，設癱瘓病房，每月補貼人力和加菜金，這是一個團體照顧戶。一九八〇年十月二十七日，聽聞慈濟要蓋醫院，全體蓮友（念佛會成員）發心募集六萬一千九百元。受助的人，成了捐助的人。',
            'Tzu Chi repaired the buildings, set up a ward for those paralysed, and paid each month for carers and better meals. On 27 October 1980, hearing that Tzu Chi meant to build a hospital, the residents raised NT$61,900 among themselves. Those receiving help had become those giving it.'),
          T('一九八三年十二月，院友正式婉謝慈濟的幫助。雙眼全盲的宋金緣老菩薩（慈濟對年長者的尊稱）發起「賣心蓮」，一朵一萬元，義賣所得捐助建院。對這些老人家而言，那往往是一生積攢的棺材本。',
            'In December 1983 the residents formally declined further aid. Song Jinyuan, an elder who was fully blind, began selling “heart lotuses” at NT$10,000 each to fund the hospital. For these elders, that money was often what they had saved for their own coffins.')
        ],
        q: { zh: '上人只問，我能夠幫你們做什麼呢？', en: 'The Master only asked: what can I do to help you?', who: T('樂生院友 金義楨', 'Jin Yizhen, Losheng resident') },
        q2: { zh: '捐這一萬元是來這裡住很久，每天存一點存一點，當時是存下來做棺材本。', en: 'This ten thousand came from living here a long time, saving a little every day. I had been saving it for my coffin.', who: T('樂生院友 杜銀花', 'Du Yinhua, Losheng resident') },
        more: [
          T('一九八二年，金義楨號召蓮友月捐百元，做慈濟會員。一九八六年三月九日，宋金緣、陳小蘭將義賣「心蓮」所得和個人積蓄，分別捐出一百二十萬元及十萬元。',
            'In 1982 Jin Yizhen urged residents to become Tzu Chi members at NT$100 a month. On 9 March 1986, Song Jinyuan and Chen Xiaolan gave NT$1.2 million and NT$100,000 from the lotus sales and their own savings.'),
          T('院友林葉說：「以前健康的人看我們這種病的人，不是當做一個人看，就是比看到鬼還要怕。」',
            'Resident Lin Ye said that healthy people used to look at those with this disease as if they were not people at all, and feared them more than ghosts.'),
          T('二〇二六年，依金義楨遺願，他守護五十多年的于右任墨寶捐出義賣，護持新泰靜思堂興建。',
            'In 2026, as Jin Yizhen had wished, the calligraphy he guarded for over fifty years was given for auction to help build the Xintai Jing Si Hall.')
        ],
        s: ['fm93', 'o860309'] },
      { k: 'quote', big: 1, zh: '在師父的心目中，你們不是被隔離，是外面的人被你們隔離。因為外面的汙濁，不應該進入這清淨的地方。', en: 'In my heart, you are not the ones shut away. It is the people outside who are shut away from you, because the impurity outside should not enter this pure place.', who: T('證嚴上人，一九八六年三月九日於樂生', 'Dharma Master Cheng Yen at Losheng, 9 March 1986'), s: ['o860309'] },
      { k: 'photos', lay: 'one', ph: [{ i: '19860309-1_08', c: T('一九八六年的日曆，與院友的捐款物件。', 'A 1986 calendar with items donated by residents.') }] },
      { k: 'rec', items: [
        { d: '1980.01.16', zh: '為籌建花蓮慈濟醫院，「財團法人臺灣省佛教慈濟慈善事業基金會」立案。', en: 'The Tzu Chi Foundation is registered, in order to build the Hualien hospital.' },
        { d: '1984.01.07', zh: '慈濟臺東分會報告，長期濟助戶總計九十二戶。', en: 'The Taitung office reports 92 households in long-term care.' },
        { d: '1989', zh: '上人說，全臺每月有一萬多人需要生活補助；會員已有三十萬。', en: 'The Master notes that over ten thousand people in Taiwan need monthly living aid, and that Tzu Chi now has three hundred thousand members.' }
      ], s: ['fm65', 'fm77'] },
      { k: 'quote', zh: '在不影響每個人生活的情況之下，做個能救人的人。', en: 'Without disturbing anyone’s daily life, be someone who can save a person.', who: T('證嚴上人，一九八五年', 'Dharma Master Cheng Yen, 1985'), s: ['fm32'] }
    ] },

  /* ───────── 1990 年代 ───────── */
  { id: 'c91', era: 'e90', y: '1991–99', nav: T('一粒米中藏日月', 'A grain of rice'),
    ask: T('媽媽，外國的人也幫嗎？', 'Mama, do they help people in other countries too?'),
    h: T('一粒米中藏日月', 'Sun and moon in a grain of rice'),
    lead: T('一九九一年起，慈濟人的腳步走出臺灣。哪裡有苦難，哪裡就有慈濟人。',
            'From 1991, Tzu Chi’s steps went beyond Taiwan. Wherever there was suffering, Tzu Chi volunteers went.'),
    b: [
      { k: 'story', lay: 'W', date: '1991.07', h: T('華東水患', 'The East China floods'),
        ph: [{ i: '19910715-1_08', c: T('水淹村莊。', 'A flooded village.') }, { i: '19910715-1_05', c: T('賑災箱：「一元不算少，千元不算多」。', 'A relief box: “One dollar is not too little, a thousand not too much.”') }, { i: '19910715-1_00', c: T('發放現場，志工與鄉親。', 'Volunteers and villagers at a distribution.') }],
        p: [
          T('這年五、六月，華東華中洪澇，十九個省份、兩億兩千多萬人受災。七月十五日，上人在彰化公開呼籲賑災。當時兩岸相對疏離，在臺灣發起大陸賑災募款，困難重重，慈濟人首次走上街頭募款。',
            'That May and June, floods struck nineteen provinces across eastern and central China, affecting over 220 million people. On 15 July, in Changhua, the Master publicly called for relief. Relations across the strait were distant and raising funds in Taiwan for the mainland was hard. Tzu Chi volunteers took to the streets to raise funds for the first time.'),
          T('賑災定下五項原則：直接、重點、尊重、及時、務實。此後援建三省四縣十一所學校、慈濟新村三千多戶、敬老院一百五十八間。',
            'Five principles were set for relief: direct, focused, respectful, timely, practical. Tzu Chi went on to build eleven schools, over three thousand homes and 158 rooms for the elderly across three provinces and four counties.')
        ],
        q: { zh: '賑災要救的是無辜災民，不是政黨；我們應以誠意感化民眾冷漠的心。', en: 'Relief is meant to save innocent people, not political parties. We should move cold hearts with sincerity.', who: T('證嚴上人', 'Dharma Master Cheng Yen') },
        s: ['fm140', 'o910715'] },
      { k: 'five', items: [T('直接', 'Direct'), T('重點', 'Focused'), T('尊重', 'Respectful'), T('及時', 'Timely'), T('務實', 'Practical')] },
      { k: 'quote', big: 1, zh: '我現在深深體會說，一粒米中藏日月，諸位瞭解我的意思嗎？這時候，一粒米大過須彌山。', en: 'I now deeply understand that the sun and moon are held in one grain of rice. Do you see what I mean? At a time like this, one grain of rice is greater than Mount Sumeru.', who: T('證嚴上人，一九九一年八月二十五日', 'Dharma Master Cheng Yen, 25 August 1991'), s: ['o910715'] },
      { k: 'photos', lay: 'three', ph: [{ i: '19910715-1_03', c: T('報上的「一粒米中藏日月」。', 'A newspaper headline with the phrase.') }, { i: '19910715-1_18', c: T('發放前核對名冊。', 'Checking the list before a distribution.') }, { i: '19910715-1_21', c: T('援建的房舍。', 'Homes built with Tzu Chi’s help.') }] },
      { k: 'rec', items: [
        { d: '1991.05', zh: '哥奇颶風重創孟加拉。美國慈濟人發起「一人一元美金」，上人發起「一人省下一個麵包錢」。六月二十五日，捐贈美金十五萬七千一百四十九元予紅十字會。', en: 'A cyclone devastates Bangladesh. Tzu Chi USA launches “one person, one dollar”; the Master asks each person to save the price of one bread roll. On 25 June, US$157,149 goes to the Red Cross.' },
        { d: '1992', zh: '援助蒙古，第一次由慈濟志工親手發放的國際援助。', en: 'Aid to Mongolia: the first international relief handed out in person by Tzu Chi volunteers.' }
      ], s: ['fm138'] },
      { k: 'story', lay: 'L', date: '1995.02.18', h: T('尼泊爾的一千八百戶', 'Eighteen hundred homes in Nepal'),
        ph: [{ i: '19950218-1_10', c: T('頭頂建材的婦女。', 'Women carrying building materials on their heads.') }, { i: '19950218-1_05', c: T('跨河的吊索。', 'A cable across a river.') }],
        p: [
          T('一九九三年七、八月，尼泊爾水患，超過四十萬人受災。工地不通車，以牛車搬運，當地婦女用炒菜鍋盛水泥砂石，頭頂磚塊，一同建村。一九九五年二月十八日，三座慈濟村一千四百戶揭碑；六月十九日，第四座四百戶交屋，共一千八百戶。',
            'Floods in July and August 1993 affected over 400,000 people in Nepal. Materials came by ox cart. Local women carried cement and sand in cooking pots and bricks on their heads, building alongside everyone else. On 18 February 1995 three villages of 1,400 homes were unveiled; a fourth of 400 followed on 19 June, 1,800 in all.'),
          T('二〇一五年尼泊爾強震後，慈濟人回訪，當年的慈濟村安好。',
            'After the 2015 earthquake, volunteers went back. The villages built all those years before were still standing.')
        ],
        s: ['o950218'] },
      { k: 'story', lay: 'R', date: '1996', h: T('從社區做起', 'Starting in the neighbourhood'),
        p: [T('一九九六年賀伯颱風，全臺受災。上人呼籲「社區志工」：就近服務，守望相助。十二月二十二日，從花蓮吉安北昌村、新城佳林村開始推動。慈濟人不只是從遠處趕來，許多志工就住在鄉親身邊，左鄰右舍彼此照應。',
              'Typhoon Herb struck Taiwan in 1996. The Master called for “community volunteers”: serve those close by and watch over one another. On 22 December it began in Beichang and Jialin villages, Hualien. Volunteers did not only rush in from afar. Many lived right next door to those they helped.')],
        s: ['fm196'] },
      { k: 'story', lay: 'W', date: '1999.09.21', h: T('九二一', 'The 921 earthquake'),
        ph: [{ i: '19990921-1_01', c: T('倒塌的建築。', 'A collapsed building.') }, { i: '19990921-1_05', c: T('師姊為鄉親煮食。', 'Tzu Chi sisters cooking for those affected.') }, { i: '19990921-1_07', c: T('搭建組合屋。', 'Putting up prefabricated homes.') }, { i: '19990921-1_23', c: T('孩子在讀書。', 'Children reading.') }],
        p: [T('九二一地震後，慈濟人煮熱食、搭大愛屋（臨時住宅），並承擔五十一所學校的「希望工程」援建。',
              'After the earthquake, Tzu Chi volunteers cooked hot meals, put up temporary Great Love homes, and took on the rebuilding of fifty-one schools, the Project Hope.')],
        s: ['fm219'] }
    ] },

  /* ───────── 2000 年代 ───────── */
  { id: 'c00', era: 'e00', y: '2000–15', nav: T('安身、安心、安生活', 'Home, heart, livelihood'),
    ask: T('媽媽，災難過去以後呢？', 'Mama, what happens after the disaster is over?'),
    h: T('安身、安心、安生活', 'Home, heart, livelihood'),
    lead: T('發放之後，還有下一步：住的地方、孩子的學校、一家人的生計。',
            'After the aid come the next steps: a place to live, a school for the children, a way to earn a living.'),
    b: [
      { k: 'story', lay: 'W', date: '2003.07.18', h: T('印尼紅溪河', 'The Red River, Jakarta'),
        ph: [{ i: '20030718-1_01', c: T('紅溪河。', 'The Kali Angke, “Red River”.') }, { i: '20030718-1_09', c: T('清理河道。', 'Clearing the river.') }, { i: '20030718-1_13', c: T('大愛村的婦女做回收。', 'Women sorting recycling at the Great Love Village.') }],
        p: [
          T('雅加達紅溪河畔，被稱為「雅加達黑色心臟」。二〇〇二年初大水，鄉親在水中苦熬將近一個月。慈濟提出五管齊下：抽水、打掃、消毒、義診、建屋。二〇〇三年七月十八日，金卡蓮大愛一村入厝，一千一百戶拿到鑰匙。',
            'The banks of the Kali Angke were known as “the black heart of Jakarta”. In early 2002 floods left residents living in the water for almost a month. Tzu Chi answered on five fronts: pumping, cleaning, disinfecting, free clinics, and new housing. On 18 July 2003, 1,100 households received the keys to the Cengkareng Great Love Village.'),
          T('村內設義診中心，二〇〇六年升格為海外第一所慈濟醫院，又辦大愛學校。當年河邊打赤腳的孩子，有人考上大學，有人回母校任教。',
            'A clinic opened in the village and in 2006 became the first Tzu Chi hospital outside Taiwan. A school followed. Of the children who once went barefoot by the river, some went to university and some came back to teach.')
        ],
        q: { zh: '安身，安身就是讓他有居住的地方；安生活的生，我要讓他有生活的條件，要他能夠以後有工作做；要安心，讓他們裡面，他們的父母親，能夠讓孩子去讀書什麼的，都會安心。', en: 'A settled home means a place to live. A settled livelihood means the means to live and work in future. A settled heart means parents who can send their children to school with peace of mind.', who: T('印尼分會副執行長 郭再源，憶述上人的慈示', 'Guo Zaiyuan, Tzu Chi Indonesia, recalling the Master’s guidance') },
        q2: { zh: '我一直哭，因為我真的很感動，希望我這分喜悅，能夠讓幫助我的人也很幸福', en: 'I kept crying because I was so moved. I hope this joy of mine can bring happiness to the people who helped me too.', who: T('大愛一村居民 杜蒂', 'Duti, resident of the Great Love Village') },
        s: ['o030718'] },
      { k: 'rec', items: [
        { d: '2000', zh: '貴州長期扶困，於花溪、羅甸、紫雲等地建九個慈濟新村，四百多戶。', en: 'Long-term aid in Guizhou: nine Tzu Chi villages in Huaxi, Luodian, Ziyun and other places, more than 400 homes.' },
        { d: '2004.12.26', zh: '南亞大海嘯。慈濟於印尼亞齊及斯里蘭卡援建大愛村，共三千三百多戶，並援建學校。', en: 'The Indian Ocean tsunami. Tzu Chi builds Great Love Villages in Aceh and Sri Lanka, over 3,300 homes, along with schools.' }
      ], s: ['fm239', 'fm282'] },
      { k: 'photos', lay: 'three', ph: [{ i: '20050924-1_01', c: T('海嘯後的廢墟。', 'Ruins after the tsunami.') }, { i: '20050924-1_06', c: T('大愛村的藍色屋頂。', 'The blue roofs of a Great Love Village.') }, { i: '20050924-1_13', c: T('村中的一對夫婦。', 'A couple in the village.') }] },
      { k: 'story', lay: 'R', date: '2009', h: T('莫拉克與以工代賑', 'Morakot, and work for relief'),
        ph: [{ i: '20090806-1_13', c: T('大愛村。', 'A Great Love Village.') }, { i: '20090806-1_06', c: T('涉水搬運物資。', 'Carrying supplies through water.') }],
        p: [
          T('二〇〇九年八月莫拉克風災，慈濟啟動長期復建「六安計畫」，援建六座大愛村，一千三百〇二戶。',
            'After Typhoon Morakot in August 2009, Tzu Chi built six Great Love Villages with 1,302 homes.'),
          T('同年九月，菲律賓凱莎娜颱風。慈濟啟動「以工代賑」（請受災鄉親一同清理家園，並給予酬勞），鄉親不只領取援助，也親手重建。此後海地、尼泊爾、緬甸都沿用。',
            'That September, after Typhoon Ketsana in the Philippines, Tzu Chi began “work for relief”: people affected were paid to clean up their own neighbourhoods, rebuilding with their own hands. The approach was later used in Haiti, Nepal and Myanmar.')
        ],
        s: ['fm329', 'fm332'] },
      { k: 'rec', items: [
        { d: '2010.01', zh: '海地強震。以工供糧，推動返校，援建學校、幼兒園。', en: 'Haiti earthquake. Food for work, a return-to-school programme, and new schools and kindergartens.' },
        { d: '2013.11', zh: '菲律賓海燕風災。於獨魯萬市援建大愛村與簡易教室。', en: 'Typhoon Haiyan. Great Love Villages and simple classrooms in Tacloban.' },
        { d: '2015.04', zh: '尼泊爾強震。義診、以工代賑，搭建簡易教室。', en: 'Nepal earthquake. Free clinics, work for relief, and simple classrooms.' }
      ], s: ['fm339', 'fm363', 'fm379'] }
    ] },

  /* ───────── 同一分心 ───────── */
  { id: 'cheart', era: 'heart', y: '1966→2026', nav: T('同一分心', 'The same heart'),
    ask: T('媽媽，受幫助的人後來怎樣了？', 'Mama, what became of the people who were helped?'),
    h: T('同一分心', 'The same heart'),
    lead: T('六十年前，花蓮的家庭主婦每天省五毛錢。四十多年後，緬甸的農人每天存一把米。再後來，非洲賴索托的村民存起了玉米。',
            'Sixty years ago, housewives in Hualien saved fifty cents a day. Over forty years later, farmers in Myanmar saved a handful of rice a day. Then villagers in Lesotho, in Africa, began saving maize.'),
    b: [
      { k: 'chain', items: [
        { y: '1966', w: T('花蓮', 'Hualien'), t: T('五毛錢', 'Fifty cents'), i: '20121001-1_09', c: T('竹筒', 'Bamboo bank') },
        { y: '2008', w: T('緬甸', 'Myanmar'), t: T('一把米', 'A handful of rice'), i: '20080504-1_22', c: T('米撲滿', 'Rice bank') },
        { y: '2013', w: T('賴索托', 'Lesotho'), t: T('玉米、高粱', 'Maize and sorghum'), i: '20101030-1_10', c: T('賴索托的玉米田。', 'A maize field in Lesotho.') }
      ] },
      { k: 'story', lay: 'R', date: '2006.10.26', h: T('回歸竹筒歲月', 'Back to the bamboo bank'),
        p: [T('慈濟四十週年之際，上人在志工早會提出「回歸竹筒歲月」。竹筒再度走進一個個家庭。',
              'As Tzu Chi turned forty, the Master asked volunteers to return to the bamboo-bank days. The banks went back into homes.')],
        q: { zh: '我希望現在開始發起善的動力，發起回歸四十年前的竹筒歲月。', en: 'I hope that from now we start a movement of goodness, a return to the bamboo-bank days of forty years ago.', who: T('證嚴上人', 'Dharma Master Cheng Yen') },
        q2: { zh: '一般人都認為慈濟很有錢，其實不是有錢，是有心。', en: 'Most people think Tzu Chi has a lot of money. It is not money that it has, but heart.', who: T('證嚴上人', 'Dharma Master Cheng Yen') },
        s: ['fm297'] },
      { k: 'story', lay: 'W', date: '2008.05', h: T('緬甸的一把米', 'A handful of rice in Myanmar'),
        ph: [{ i: '20080504-1_13', c: T('扛米的鄉親。', 'Carrying sacks of rice.') }, { i: '20080504-1_15', c: T('手捧稻種。', 'Rice seed in cupped hands.') }, { i: '20080504-1_14', c: T('抱著稻草的農人。', 'A farmer with an armful of straw.') }],
        p: [
          T('二〇〇八年五月，納吉斯風災重創緬甸。五月十五日，慈濟首度發放，嘉惠二百二十五戶，計九百六十七人。其後發放稻種和肥料，讓農人重新下田。村民原有「存米供佛」的習俗。',
            'In May 2008 Cyclone Nargis devastated Myanmar. On 15 May, Tzu Chi’s first distribution reached 225 households, 967 people. Rice seed and fertiliser followed so that farmers could plant again. Villagers already had a custom of setting rice aside as an offering.'),
          T('農人烏閔壽煮飯前先抓一把米存起來，成為緬甸米撲滿第一人。二〇一〇年，農民烏丁屯響應，捐出一畝田的收成作慈濟福田。日存一把米，從此帶動十五個村莊儲存「米撲滿」。',
            'A farmer, U Myint Soe, set aside a handful before cooking and became Myanmar’s first rice saver. In 2010 another farmer followed, giving the harvest of one field to Tzu Chi. Saving a handful a day went on to spread to fifteen villages.')
        ],
        q: { zh: '我是一個貧窮人，一次捐不出很多錢，只能在煮飯前，從要吃的米中拿出一把米存起來。等你們來，我會去把米賣掉，把錢投進竹筒內。', en: 'I am a poor man and cannot give much money at once. All I can do is take a handful from the rice I am about to cook and save it. When you come, I will sell the rice and put the money in the bamboo bank.', who: T('緬甸農民 烏閔壽', 'U Myint Soe, farmer, Myanmar') },
        s: ['fm323', 'o160327'] },
      { k: 'story', lay: 'L', date: '2016.03.27', tall: 1, h: T('米撲滿回娘家', 'The rice comes home'),
        ph: [{ i: '20160327-1_02', c: T('一把一把的米，倒入鍋中。', 'Handful after handful, poured into the pot.') }, { i: '20160327-1_03', c: T('瑞那滾村的鄉親。', 'The people of Shwe Na Gwin.') }],
        p: [
          T('二〇一五年八月緬甸水患，九月起發放稻種。岱枝縣農人烏善丁在說明會上聽到「日存一把米」，請購五十個塑膠桶。志工先給了十個，其餘他自掏腰包補齊，挨家挨戶傳遞。',
            'After the floods of August 2015, seed distributions began that September. At one briefing, a farmer in Taikkyi heard about saving a handful of rice a day and asked for fifty plastic pails. Volunteers gave him ten; he paid for the rest himself and took them from house to house.'),
          T('二〇一六年三月二十七日，瑞那滾村（緬語「金耳環」）首次米撲滿回娘家（米會員把每天存下的米匯集起來，幫助更需要的人），九十戶米會員，兩大袋，九十六點四公斤。',
            'On 27 March 2016, the rice saved in Shwe Na Gwin, “golden earring” in Burmese, came home for the first time: ninety member households, two great sacks, 96.4 kilograms.'),
          T('二〇二二年，已帶動二百二十五個村莊，濟助超過三千戶困難家庭。二〇二五年，米會員超過三萬八千戶。',
            'By 2022 it had spread to 225 villages and helped over three thousand struggling families. By 2025 there were over 38,000 rice member households.')
        ],
        q: { zh: '每天存一把米，就是每天發善念', en: 'Saving a handful of rice each day is having a kind thought each day.', who: T('烏善丁', 'The farmer who began it in Taikkyi') },
        q2: { zh: '心裡祝福我的這一把米，能幫助更多有需要的人。', en: 'In my heart I bless this handful of rice, that it may help more people in need.', who: T('多丹丹乃', 'His wife') },
        more: [T('八十二歲的農民烏山丁說：「離世前也想跟大家一起行善，多多少少出一分力。」二〇二四年，烏善丁與妻女三人皆受證成為慈濟志工。',
                 'A farmer of eighty-two said that before leaving this world he too wanted to do good with everyone, and give what strength he could. In 2024 the Taikkyi farmer, his wife and his daughter all became certified Tzu Chi volunteers.')],
        s: ['o160327'] },
      { k: 'story', lay: 'T', date: '2012.07', h: T('我更該學', 'All the more reason to learn'),
        p: [T('二〇一二年七月，莫三比克青年麥奎爾．諾沙，隨蔡岱霖搭十個小時的巴士，到南非德本認識慈濟。他跟著志工下鄉訪視，看見「他們不是用物資去關懷，而是用『心』去關懷」。',
              'In July 2012 Migual Neusa, a young man from Mozambique, rode a bus for ten hours with Cai Dailin to Durban in South Africa to learn about Tzu Chi. He went out on home visits with the volunteers and saw that they cared “not with goods, but with the heart”.')],
        q: { zh: '身為當地人，我更該向慈濟學習如何幫助當地人。', en: 'As a local, I have all the more reason to learn from Tzu Chi how to help local people.', who: T('莫三比克志工 麥奎爾．諾沙', 'Migual Neusa, volunteer, Mozambique') },
        s: ['fm468'] },
      { k: 'story', lay: 'T', date: '2013.01', h: T('賴索托的玉米', 'Maize in Lesotho'),
        p: [
          T('二〇〇九年十一月，慈濟捐玉米種子予五百二十戶馬都崁農民。翌年豐收，農民自發捐出作物；九月風災，三十一戶受災鄉親領到的玉米粉，就是這些農民所捐。',
            'In November 2009 Tzu Chi gave maize seed to 520 farming households in Matukeng. After the next year’s good harvest the farmers chose to give back, and the maize meal handed to thirty-one storm-hit households that September was what they had given.'),
          T('二〇一三年一月，當地志工聽到緬甸米撲滿，因賴索托不產稻米，發願做「玉米撲滿」。此後帶動四十七個村落存玉米、高粱，濟助貧戶。',
            'In January 2013 local volunteers heard about Myanmar’s rice banks. Lesotho grows no rice, so they vowed to start maize banks. Forty-seven villages came to save maize and sorghum for households in need.')
        ],
        s: ['fm406'] },
      { k: 'quote', big: 1, zh: '竹筒歲月啟悲心，人多、力大，福就大，不論貧富貴賤，金錢多寡，一人一日一善行，滴水成河、粒米成籮，匯聚愛的力量，將慈善清流，救助苦難眾生。', en: 'The bamboo-bank years awaken compassion. Many people bring great strength and great blessings. Rich or poor, with much or little, one person, one good deed, one day: drops become a river, grains fill a basket, and love gathers to bring relief to all who suffer.', who: T('證嚴法師', 'Dharma Master Cheng Yen'), s: ['a1'] }
    ] },

  /* ───────── 2016–2026 ───────── */
  { id: 'c20', era: 'e20', y: '2020–26', nav: T('走進去', 'Walking in'),
    ask: T('媽媽，現在還有人這樣做嗎？', 'Mama, are people still doing this now?'),
    h: T('走進去', 'Walking in'),
    lead: T('上人說：「苦難的人走不出來，有福的人要走進去。」', 'The Master said: “Those who suffer cannot walk out. Those who are blessed must walk in.”'),
    b: [
      { k: 'story', lay: 'T', date: '2013', h: T('一箱蝸牛', 'A box of snails'),
        p: [
          T('二〇一三年，臺南有一個小學三年級的孩子，爸爸中風，話說不清楚了。他唯一傾訴的對象，是養在頂樓的一箱蝸牛。',
            'In 2013 a third-grader in Tainan had a father who could no longer speak clearly after a stroke. The only one he talked to was a box of snails he kept on the roof.'),
          T('鄰居是慈濟志工，發現了，通報社工，一起來訪視。志工從蝸牛聊起，慢慢和孩子說上了話。知道他功課落後，志工邀成功大學的慈青開了課輔班。六年裡，他四次獲得慈濟的新芽獎學金。',
            'A neighbour who was a Tzu Chi volunteer noticed and told the social workers, and they visited together. The volunteers began with the snails, and slowly the boy began to talk. When they learned he had fallen behind at school, they asked Tzu Chi Collegiate Association students at National Cheng Kung University to start a tutoring class. Over six years he received Tzu Chi’s New Sprouts scholarship four times.')
        ],
        s: ['csr1819'] },
      { k: 'story', lay: 'R', date: '2020.01.15', h: T('安穩家園．美善社區', 'Safe homes, good neighbourhoods'),
        ph: [{ i: '20200115-1_09', c: T('長者扶著新裝的扶手。', 'An elder holding a newly fitted handrail.') }, { i: '20200115-1_05', c: T('師兄安裝扶手。', 'A volunteer fitting a handrail.') }],
        p: [
          T('二〇二〇年一月十五日，慈濟啟動「安美」專案，為失能及獨居長者量身改造浴廁、加裝扶手和座椅。三月十九日，首例在嘉義市完工，王女士說：「這樣更方便，比較不會跌倒。」',
            'On 15 January 2020 Tzu Chi began a project to refit bathrooms, handrails and seats for elders living alone or with disabilities. The first was finished in Chiayi on 19 March. “This is much easier,” said Ms Wang. “I am less likely to fall.”'),
          T('二〇二二至二〇二四年，修繕七千九百四十三戶，走過二百三十五個鄉鎮，投入五萬四千九百〇五人次志工。遠至澎湖、馬祖，建材跳島運送。',
            'From 2022 to 2024, 7,943 homes were repaired across 235 townships, with 54,905 volunteer shifts. The work reached Penghu and Matsu, with materials shipped from island to island.')
        ],
        more: [T('同在臺中北屯，山坡上住著一位獨居的阿嬤。廁所在屋外三十多公尺的陡坡上，要過小鐵橋，沿路沒有燈，也沒有欄杆。她曾經兩次在夜裡走去如廁，被毒蛇咬傷。志工要幫她改，她一再婉拒，請兒子女兒來勸，她才點頭。慈濟人為她修補屋頂，在屋角裝設衛浴，讓她在家安心洗澡、如廁。',
                 'Also in Beitun, Taichung, a grandmother lived alone on a hillside. Her toilet was more than thirty metres away down a steep slope, across a small iron bridge, with no lights and no railing. Twice, walking there at night, she was bitten by a venomous snake. She kept declining help until her son and daughter came to persuade her. Volunteers then mended her roof and built a bathroom in a corner of the house.'),
               T('臺中北屯八十多歲的徐玉秀阿媽，老屋需要修繕，志工與她溝通了三個月、施工八天，每天往返五六十公里。志工蔡明模對她說：「你不給我施工，我看我晚上回去會睡不著，會失眠。」',
                 'In Taichung, Grandma Xu Yuxiu, in her eighties, took three months of talking and eight days of work, with volunteers driving fifty or sixty kilometres each day. Volunteer Cai Mingmo told her he would not be able to sleep if she did not let him do the work.')],
        s: ['fm456', 'o200115', 'ac'] },
      { k: 'rec', items: [
        { d: '2020–2022', zh: '新冠疫情期間，全球防疫物資五千二百二十七萬件，送往九十八個國家地區。', en: 'During the Covid-19 pandemic, 52.27 million items of protective supplies went to 98 countries and regions.' }
      ], s: ['a2'] },
      { k: 'story', lay: 'W', full: 1, date: '2025.03.28', h: T('緬甸強震', 'The Myanmar earthquake'),
        ph: [{ i: '20250330-1_07', c: T('等候發放的長隊。', 'A long line waiting for aid.') }, { i: '20250330-1_19', c: T('師姊與婦女一同舀米。', 'A volunteer and a woman scooping rice together.') }, { i: '20250330-1_16', c: T('簡易教室。', 'A simple classroom.') }, { i: '20250330-1_17', c: T('孩子。', 'Children.') }],
        p: [
          T('二〇二五年三月二十八日，緬甸規模七點七強震，實皆省、曼德勒重創，約三千八百人罹難，約六萬棟建築倒塌。仰光志工組勘災團，趕赴六百二十公里外的曼德勒。物資短缺，志工一家店一家店地買。',
            'On 28 March 2025 a magnitude 7.7 earthquake struck Myanmar, devastating Sagaing and Mandalay. About 3,800 people died and about 60,000 buildings fell. Volunteers from Yangon set out for Mandalay, 620 kilometres away. Supplies were short, so they bought them shop by shop.'),
          T('首波大型發放濟助五千戶，馬來西亞空軍接力運送物資。以工代賑邀約鄉親為寺院搭建臨時住所，震後六個月內協助八十三所學校完成二百四十七間簡易教室。物資嘉惠近二十二萬人。',
            'The first large distribution reached 5,000 households, with the Royal Malaysian Air Force helping to carry supplies. People were paid to build temporary shelters for monasteries, and within six months 247 simple classrooms stood at 83 schools. Nearly 220,000 people received material aid.'),
          T('受助的鄉親，也有人手心向下（從領受轉為付出）。薩雷寺院學校的師生響應米撲滿，每天存下一把米。學生密內說：「能夠佈施幫助他人，這個概念我很喜歡，所以我才會存米。」',
            'Some of those helped turned to helping. At one monastery school, teachers and pupils joined the rice banks, saving a handful each day. “I like the idea of being able to give and help others,” said one pupil, “so I save rice.”')
        ],
        q: { zh: '我們一家一點、一家鋪子一點一點這樣買。', en: 'We bought a little at each shop, one shop after another.', who: T('緬甸志工 姜榮華', 'Jiang Ronghua, volunteer, Myanmar') },
        s: ['o250330'] }
    ] },

  /* ───────── 在馬來西亞 ───────── */
  { id: 'cmy', era: 'my', y: '馬來西亞', yen: 'Malaysia', nav: T('在馬來西亞', 'In Malaysia'),
    ask: T('媽媽，我們這裡也有嗎？', 'Mama, is it here too?'),
    h: T('在馬來西亞', 'In Malaysia'),
    lead: T('一九九一年七月，馬來西亞首例慈善個案在亞依淡開案。三十多年來，慈濟人的足跡遍及半島和東馬，馬六甲、檳城、雪隆、吉打今有四個分會。',
            'The first charity case in Malaysia opened in Ayer Itam in July 1991. In the thirty-odd years since, volunteers have worked across the peninsula and East Malaysia, and there are now four branches: Melaka, Penang, Selangor and Kuala Lumpur, and Kedah.'),
    b: [
      { k: 'rec', items: [
        { d: '1991.07', zh: '馬來西亞首例慈善個案，亞依淡打槍鋪廉價組屋的羅合海。慈濟給予經濟補助，直至一九九三年其長女有能力承擔家計後結案。', en: 'First charity case in Malaysia: Luo Hehai of Ayer Itam. Tzu Chi gave financial aid until 1993, when his eldest daughter could support the family.' },
        { d: '1992.10.10', zh: '馬六甲首例機構關懷，馬接峇汝安老院開案，慈濟人每週一次前往。', en: 'First institutional care in Melaka: the Rumah Sejahtera old folks’ home at Machap Baru. Volunteers go every week.' },
        { d: '1993.03.04', zh: '眼盲的鄭金龍老先生，成為馬六甲慈濟首位照顧戶，慈濟協助蓋屋，長期關懷。', en: 'Zheng Jinlong, blind and poorly housed, becomes the first care recipient in Melaka. Tzu Chi helps build him a home and stays with him.' }
      ], s: ['fm145'] },
      { k: 'story', lay: 'R', date: '1994.04.10', h: T('馬六甲第一次現場發放', 'The first distribution in Melaka'),
        ph: [{ i: '19940410-1_00', c: T('橫幅：「慈濟功德會馬六甲第一次現場發放」。', 'Banner: Tzu Chi’s first on-site distribution in Melaka.') }, { i: '19940410-1_12', c: T('扶長者下樓。', 'Helping an elder down the stairs.') }],
        p: [
          T('一九八八年，劉濟雨與簡慈露到馬六甲設廠。一九九二年，簡慈露返臺，到靜思精舍尋根。第一個關懷的個案是鄭金龍，老人家住在煤炭間，以舊門板架在四張椅子上當床。慈濟人為他蓋起愛心屋。',
            'In 1988 Liu Jiyu and Jian Cilu came to Melaka to set up a factory. In 1992 Jian Cilu went back to Taiwan to find the roots of Tzu Chi. Their first case was Zheng Jinlong, who lived in a coal shed and slept on an old door laid across four chairs. Volunteers built him a house.'),
          T('一九九四年四月十日，效法臺灣本會，馬六甲舉行首次現場發放。此後每月第二個星期日，每次近百位志工。照顧戶來到會所相聚，這一天有醫生，也有剪髮。',
            'On 10 April 1994, following the Taiwan model, Melaka held its first on-site distribution. It has since been held on the second Sunday of each month, with close to a hundred volunteers. Care recipients gather at the centre, and on that day there are doctors and haircuts too.')
        ],
        q: { zh: '他們會跟我們講說，一個月三十天，來慈濟這一天，就值得回去。在多留那29天，守在那空屋子的寂寞，最期待就是，來期待發放這一天', en: 'They would tell us: of thirty days in a month, this one day at Tzu Chi makes it worth going back, to stay those other twenty-nine in the loneliness of an empty house. This is the day they look forward to most.', who: T('馬六甲志工 簡慈露', 'Jian Cilu, Melaka volunteer') },
        q2: { zh: '一個月來一次什麼都有，醫生也有，剪頭髮也有。', en: 'Come once a month and there is everything. There is a doctor, and even a haircut.', who: T('照顧戶', 'A care recipient') },
        s: ['o940410', 'fm145'] },
      { k: 'photos', lay: 'three', ph: [{ i: '19940410-1_02', c: T('義診。', 'A free clinic.') }, { i: '19940410-1_10', c: T('居家訪視。', 'A home visit.') }, { i: '19940410-1_11', c: T('馬接峇汝安老院。', 'The old folks’ home at Machap Baru.') }] },
      { k: 'story', lay: 'L', date: '1993–1997', h: T('檳城', 'Penang'),
        ph: [{ i: '19930613-1_09', c: T('Buddhist Tzu-Chi Dialysis Centre 招牌。', 'The Buddhist Tzu-Chi Dialysis Centre sign.') }],
        p: [
          T('葉慈靖因工作調派檳城，把慈濟帶到這裡。一九九三年五月，十八位檳城志工回花蓮尋根。八月十一日，檳城聯絡處成立。一九九七年升格為馬來西亞分會。',
            'Ye Cijing came to Penang for work and brought Tzu Chi with her. In May 1993 eighteen Penang volunteers went to Hualien to find their roots. The Penang liaison office opened on 11 August, and in 1997 it became the Malaysia branch.'),
          T('一九九七年八月三日，全馬第一家由非政府組織營運、費用全免的洗腎中心啟用。志工林慈心說：「我們就從頭做到尾，不是說只幫助一次罷了」。',
            'On 3 August 1997 Malaysia’s first dialysis centre run by a non-governmental organisation and free of charge opened. “We do it from start to finish,” said volunteer Lin Cixin. “It is not a matter of helping just once.”')
        ],
        q: { zh: '馬來西亞對我來說，是很遙遠；對你們來說，是很近。但是對我來說，更是貼(心)。有形的是很遠，無形的是很近，知道嗎？', en: 'To me Malaysia is very far; to you it is very near. But to me it is closer still, in the heart. In form it is far. Beyond form it is near. Do you understand?', who: T('證嚴上人', 'Dharma Master Cheng Yen') },
        s: ['o930613'] },
      { k: 'story', lay: 'L', date: '1994–2010', h: T('雙溪毛糯的竹筒', 'The bamboo banks of Sungai Buloh'),
        ph: [{ i: 'xl1_0066_1', c: T('「2005年1月30日慈濟舉辦歲末發放，院友們感恩慈濟的幫助，也捐出積蓄回饋。」（局部，只留手與捐款箱。照片：劉玉麗；《馬來西亞慈濟史 雪隆分會（一）》頁 65）', '“On 30 January 2005, at Tzu Chi’s year-end distribution, residents gave from their savings in thanks for the help they had received.” (Detail: hands and donation box only. Photo: Liu Yuli; History of Tzu Chi Malaysia: KL & Selangor Branch, vol. 1, p. 65)') }],
        p: [
          T('雪蘭莪州的雙溪毛糯麻瘋病院創立於一九三〇年，收容麻瘋病（漢生病）患者。一九九四年一月十六日，慈濟志工應院區內靜修院邀約，首次走入訪視。院友長期遭社會歧視，起初心存戒備。隔年開始，志工固定每月前往，發放物資、義剪、按摩，協助清掃，維修房屋和輪椅。',
            'The Sungai Buloh leprosy settlement in Selangor was founded in 1930 to house people with Hansen’s disease. On 16 January 1994 Tzu Chi volunteers first visited, at the invitation of a Buddhist retreat inside the grounds. Long shunned by society, the residents were wary at first. From the following year volunteers came every month, bringing supplies, cutting hair, giving massages, cleaning, and repairing houses and wheelchairs.'),
          T('「你們對我們這麼好，我們能回報什麼？」院友路士譚問志工。志工宋進滿述說慈濟的因緣，告訴他每天存下一角錢，就可以做善事幫助人。志工再到病院時，路士譚立刻布施三令吉，成為慈濟在病院的第一個會員，還召集十多位院友一起加入。',
            '“You are so good to us. What can we give back?” resident Lu Shitan asked the volunteers. Volunteer Song Jinman told him how Tzu Chi began, and that ten sen saved each day could be used to help others. When the volunteers next came, Lu gave three ringgit, becoming Tzu Chi’s first member at the settlement, and he gathered more than ten fellow residents to join.'),
          T('院友有的靠政府補助，有的靠打零工、賣花卉維生，一令吉、一令吉地攢錢。一九九九年臺灣九二一大地震，志工前來關懷時，院友早已拿著竹筒排好隊。二〇一〇年的歲末祝福（年終祝福聚會），院友聽到慈濟正為海地籌募賑災款項，有人義賣盆栽，有人捐出存款。',
            'Some residents lived on government aid, others on odd jobs and selling flowers, saving one ringgit at a time. After Taiwan’s 921 earthquake in 1999, the residents were already lined up with their bamboo banks when the volunteers arrived. At the year-end gathering of 2010, hearing that Tzu Chi was raising funds for Haiti, some sold potted plants and some gave their savings.')
        ],
        q: { zh: '一角錢也可以做善事，我們都可以做到啊！', en: 'Even ten sen can do good. All of us can do that!', who: T('院友 路士譚', 'Lu Shitan, resident') },
        q2: { zh: '能捐才是福氣，幫助人是不講次數的。', en: 'Being able to give is the blessing. Helping people is not something you keep count of.', who: T('院友 錦緞', 'Jinduan, resident') },
        more: [
          T('二〇〇三年三月九日，院區首次舉辦共修聯誼會，之後每月一次，並安排臺灣樂生療養院的病友林葉分享克服病症的經驗。數十位院友發心加入會員。',
            'On 9 March 2003 the settlement held its first fellowship gathering, which then met monthly. Lin Ye, a patient from Losheng Sanatorium in Taiwan, was invited to speak about overcoming the disease. Dozens of residents chose to become members.')
        ],
        s: ['xlsb'] },
      { k: 'story', lay: 'R', date: '2003–2022', h: T('比打士的待產之家', 'A home for waiting mothers in Pitas'),
        ph: [{ i: 'xl1_0152_1', c: T('「生命關懷之家竣工啟用。」（局部，人物和標誌已裁去。照片：華景耀；《馬來西亞慈濟史 雪隆分會（一）》頁 151）', '“The Home of Life Care is completed and opened.” (Detail, people and emblem cropped out. Photo: Hua Jingyao; History of Tzu Chi Malaysia: KL & Selangor Branch, vol. 1, p. 151)') }],
        p: [
          T('沙巴比打士的山區，孕婦產檢有時要步行兩天山路、穿越溪河。依當時的法條，未到臨盆時間的孕婦不具備病人身分，無法享有床位。護士法麗達回憶，她曾安排一位孕婦到哥打馬魯都診療所待產，因床位不足又被遣送回家，事後追蹤，對方已因難產往生。駐診醫師鄭榮輝向慈濟提出「待產之家」的構想。',
            'In the hills of Pitas, Sabah, expectant mothers sometimes walked two days and forded rivers to reach a check-up. Under the rules of the time, a woman not yet due did not count as a patient and could have no bed. One nurse recalled sending a mother to wait at the Kota Marudu clinic, only for her to be sent home for lack of beds. When the nurse followed up, the mother had died in childbirth. The resident doctor, Zheng Ronghui, proposed a “waiting home” to Tzu Chi.'),
          T('志工覓得離比打士診療所五分鐘車程的高腳屋（架高的木屋），向屋主租下。二〇〇三年獲衛生部批准，五月一日啟用，可容納八名待產婦，第二天迎來第一位準媽媽；七月二十九日命名「慈濟生命關懷之家」（Rumah Penyayang Tzu Chi）。鄉村護士依政府醫院的標準鑑定高危險孕婦，憑醫師簽核的表格免費入住；志工跟隨鄉村護士進入部落，以四輪驅動車接送。',
            'Volunteers found a house on stilts five minutes’ drive from the Pitas clinic and rented it from the owner. The Ministry of Health approved the plan in 2003. The home opened on 1 May with room for eight, and its first mother arrived the next day. On 29 July it was named Rumah Penyayang Tzu Chi. Village nurses assessed high-risk pregnancies by government hospital standards, and a form signed by a doctor gave a free place. Volunteers went with the nurses into the villages and drove the women out by four-wheel drive.'),
          T('高腳屋逐漸老舊，孕婦上下樓梯不便。二〇一三年五月十六日動工改建平房，二〇一四年一月一日落成，有十個床位。截至二〇二二年，接待待產孕婦二千零四十一人次，迎接新生兒一千六百五十八名。',
            'The house aged, and the stairs were hard for pregnant women. Work on a single-storey building began on 16 May 2013, and it was finished on 1 January 2014 with ten beds. By 2022 the home had received expectant mothers 2,041 times and welcomed 1,658 newborns.')
        ],
        q: { zh: '我們不只是專注在孕婦的身體狀況，也要照顧她們的心。我的任務是二十四小時待命，因為孕婦生產不分晝夜，但我願意奉獻我的時間給慈濟。', en: 'We do not focus only on the mothers’ bodies. We must care for their hearts too. My task is to be on call twenty-four hours a day, because babies come day or night, but I am willing to give my time to Tzu Chi.', who: T('露茜，隔壁雜貨店的老闆娘，負責孕婦登記入住和照顧', 'The shopkeeper next door, who took charge of registering and caring for the mothers') },
        more: [
          T('來自邁旦村的萊娜，是首批入住的婦女之一，當時懷著第六胎。她回憶某一次生產，是在十二歲女兒陪同下，凌晨兩點打著火把，翻山越嶺走了五小時，才搭上貨車，到接近市區的地方接受巡迴醫師助產。順利生產後，她歡喜返回部落，也把這個家介紹給部落的媽媽們。',
            'One of the first women to stay was carrying her sixth child. She remembered an earlier birth: at two in the morning, with her twelve-year-old daughter beside her, she walked five hours over the hills by torchlight before a lorry took her near town, where a visiting doctor helped her deliver. After a safe birth here she went home glad, and told the other mothers of her village about the home.'),
          T('亞庇路途遙遠，志工無法經常前來，便請隔壁雜貨店的老闆娘露茜協助。五十歲的她為了接送孕婦去考駕照，又學了好幾種方言，主動烹煮三餐。二〇一五年七月三十一日，一位初為人母的媽媽請志工替女兒取名慈喜（Chelsea），紀念這個家第一千個生命誕生。',
            'Kota Kinabalu was far away and volunteers could not come often, so they asked the shopkeeper next door to help. At fifty she took a driving test so she could carry mothers to hospital, learned several local languages, and took on the cooking herself. On 31 July 2015 a first-time mother asked the volunteers to name her daughter. The name, Ci Xi (Chelsea), marked the joy of the thousandth life born through this home.')
        ],
        s: ['xlpt'] },
      { k: 'story', lay: 'T', date: '2008.01.03', h: T('我也要上學', 'I want to go to school too'),
        p: [
          T('二〇〇八年一月三日，吉隆坡安邦蓮花苑，社區難民學校開學了，這是聯合國難民署和慈濟合作，為難民孩子辦的學校。一個十一歲半的小女孩，揹起了書包。以前每天早上，她看著學生巴士在家附近繞，跟媽媽說：「我也要上學。」',
            'On 3 January 2008 a community refugee school opened at Ampang in Kuala Lumpur, run by the UNHCR together with Tzu Chi. A girl of eleven and a half put on a school bag. Every morning before that, she had watched the school bus circle near her home and told her mother: “I want to go to school too.”')
        ],
        q: { zh: '我們不能給孩子什麼，只要孩子長大以後，即使父母不在了，他們依然能靠著知識，擁有生活的能力、走出自己的未來，就是我們最感安慰的事。', en: 'We cannot give our children anything. If they grow up able to live by what they know, and walk into their own future even when their parents are gone, that is our greatest comfort.', who: T('難民孩子的母親', 'A refugee mother') },
        s: ['fm294'] },
      { k: 'story', lay: 'T', date: '2012–2018', h: T('江可俐', 'Jiang Keli'),
        p: [
          T('吉隆坡的江可俐，父母靠輪椅代步，以製藤為生。中學五年，她都領慈濟的助學金。二〇一二年，她要讀大學先修班，一年學費七千令吉，付不出來，苦惱要不要先去打工。她向慈濟申請，評估之後，慈濟繼續補助。',
            'Jiang Keli of Kuala Lumpur grew up with parents who used wheelchairs and made a living from rattan. For five years of secondary school she received Tzu Chi’s education aid. In 2012 she was accepted for a pre-university course at RM7,000 a year, could not pay, and wondered whether to work first. She applied to Tzu Chi, and after assessment the aid continued.'),
          T('二〇一八年，她畢業，成為合格的中醫師。工作穩定之後，她抽假日到吉隆坡義診中心輪值門診。',
            'She graduated in 2018 as a qualified Chinese medicine physician. Once her work was steady, she began giving her days off to the clinic rota at the Kuala Lumpur free clinic.')
        ],
        s: ['xl102'] },
      { k: 'story', lay: 'T', date: '2014.07', h: T('成績單和竹筒', 'Report cards and bamboo banks'),
        p: [T('二〇一四年七月，雪隆分會的新芽助學金發放典禮上，受惠的學生也認領竹筒，約好四個月後，把成績單、親子聯絡簿和竹筒，一起帶回吉隆坡靜思堂。',
              'At the Selangor and Kuala Lumpur branch’s New Sprouts bursary ceremony in July 2014, the students who received aid also took home bamboo banks. They agreed to bring back their report cards, parent-teacher books and banks to the Kuala Lumpur Jing Si Hall four months later.')],
        q: { zh: '看到這一次回來的孩子們，每一個都會投竹筒，真的很感動。', en: 'Seeing the children who came back this time, every one of them dropping coins into a bamboo bank, was truly moving.', who: T('志工 劉豐鎂', 'Liu Fengmei, volunteer') },
        s: ['xl102'] },
      { k: 'story', lay: 'L', date: '2010–2014', h: T('屠妖節發放', 'The Deepavali distribution'),
        ph: [{ i: 'xl1_0086_1', c: T('「2013年10月27日，雪隆志工走入印度廟舉辦屠妖節發放。」（局部，人物已裁去。照片：林思源；《馬來西亞慈濟史 雪隆分會（一）》頁 85）', '“On 27 October 2013, Selangor and Kuala Lumpur volunteers went to a Hindu temple to hold a Deepavali distribution.” (Detail, people cropped out. Photo: Lin Siyuan; History of Tzu Chi Malaysia: KL & Selangor Branch, vol. 1, p. 85)') }],
        p: [
          T('屠妖節是印裔最重要的節日，慈濟的發放日定在每年十月至十一月間。二〇〇八年，志工因新芽助學金（慈濟資助清寒學生的助學金）家訪，走入多間印裔學校和家庭，也邀請印裔照顧戶參加歲末發放。但華印兩裔飲食習慣、過年習俗不同，節目又以華語為主，印裔照顧戶較難有參與感。二〇一〇年九月開始，雪隆分會另設屠妖節發放，十月三十一日首次為印裔照顧戶舉辦。',
            'Deepavali is the most important festival for Malaysian Indians, and Tzu Chi holds its distribution between October and November each year. In 2008, home visits for the New Sprouts bursary, Tzu Chi’s aid for needy students, took volunteers into many Indian schools and homes, and Indian care recipients were invited to the year-end distribution. But food and new-year customs differed, and the programme was mostly in Mandarin, so it was hard for them to feel part of it. From September 2010 the Selangor and Kuala Lumpur branch set up a separate Deepavali distribution, first held for Indian care recipients on 31 October.'),
          T('二〇一三年，一位沙登區的慈濟委員帶動志工走入沙登印度廟拜訪，近百位印裔居民成為慈濟會員，廟方委員會主席也表示能借出廟內空間作發放場地。該年十七場發放，從事前討論、場地、報到登記、翻譯、司儀到搬運物資，主要由印度學校教職人員和家長接力完成，共嘉惠一千一百二十四戶印裔家庭。',
            'In 2013 a Tzu Chi commissioner in Serdang led volunteers on a visit to the Hindu temple there. Nearly a hundred Indian residents became Tzu Chi members, and the chairman of the temple committee offered its space for the distribution. That year’s seventeen sessions, from planning, venue and registration to translation, emceeing and moving supplies, were carried mainly by teachers and parents of Indian schools. In all, 1,124 Indian households were served.'),
          T('二〇一四年，發放遷至靜思堂舉辦，志工帶著親子體驗為父母浴足、奉茶。在印裔社會裡，浴足代表崇高和尊敬，只有在婚嫁時，孩子拜別父母才會用牛奶為父母洗腳。一個成員多為華人的佛教團體，為印裔族群舉辦印度教傳統慶典並不容易，志工從摸索中學習，年年改進。',
            'In 2014 the distribution moved to the Jing Si Hall, and volunteers guided children in washing their parents’ feet and serving them tea. In Indian society, washing the feet is a mark of high respect; only at a wedding, when taking leave of their parents, do children wash their parents’ feet with milk. For a Buddhist group whose members are mostly Chinese, holding a traditional Hindu celebration was not easy. Volunteers learned as they went and improved each year.')
        ],
        s: ['xldv'] },
      { k: 'story', lay: 'R', date: '2000–2021', h: T('加雅島', 'Gaya Island'),
        ph: [{ i: 'xl1_0135_1', c: T('「2008年11月，加雅島發生火災，燒毀逾四十間木屋。」（局部，遠處人影已裁去。照片：劉宏業；《馬來西亞慈濟史 雪隆分會（一）》頁 134）', '“In November 2008 a fire on Gaya Island destroyed more than forty wooden houses.” (Detail, distant figures cropped out. Photo: Liu Hongye; History of Tzu Chi Malaysia: KL & Selangor Branch, vol. 1, p. 134)') }],
        p: [
          T('加雅島距亞庇約十分鐘船程，島上約九百多戶。一九七〇年代起，陶蘇格人和巴瑤族等為躲避菲律賓南部戰爭遷徙到此，搭起水上木屋。書中記載，他們並非大馬公民，無法享有醫療、教育及合法工作的權利。',
            'Gaya Island lies about ten minutes by boat from Kota Kinabalu and has over nine hundred households. From the 1970s Tausug, Bajau and other people fleeing war in the southern Philippines came here and built wooden houses over the water. The book records that they were not Malaysian citizens and had no right to health care, education or legal work.'),
          T('二〇〇〇年一月，一場火災殃及三十多間海上木屋。亞庇志工勘災（到現場查看災情），發放三千五百令吉與四十包衣物。這是慈濟首次走入加雅島，也是首次有慈善團體主動伸援。',
            'In January 2000 a fire reached more than thirty houses on the water. Kota Kinabalu volunteers went to assess the damage and gave out RM3,500 and forty bags of clothing. It was Tzu Chi’s first time on Gaya Island, and the first time any charity had come forward to help.'),
          T('二〇〇八年十一月，甘榜洛烏萊（洛烏萊村）火災燒毀逾四十間木屋，三百多人無家可歸，志工再度前往發放。二〇二〇年五月，疫情期間的行動管制令（限制民眾外出的全國措施）使島民無法出外工作，亞庇志工三次渡海急難發放，嘉惠二百一十八戶、共一千三百五十八人。二〇二一年三月，村子再遭大火，燒毀七十間木屋，慈濟援助七十四戶。',
            'In November 2008 a fire in Kampung Lok Urai destroyed over forty houses and left more than three hundred people homeless, and volunteers came again. In May 2020, when the pandemic movement control order kept islanders from going out to work, Kota Kinabalu volunteers crossed the water three times with emergency aid for 218 households, 1,358 people. In March 2021 fire struck the village again, destroying seventy houses, and Tzu Chi helped 74 households.')
        ],
        s: ['xlgy'] },
      { k: 'story', lay: 'W', date: '2017.03.06', h: T('沙巴的孩子', 'The children of Sabah'),
        ph: [{ i: '20170306-1_01', c: T('水上屋。', 'Stilt houses on the water.') }, { i: '20170306-1_08', c: T('排隊的學童。', 'Pupils in line.') }, { i: '20170306-1_19', c: T('寫字的男孩。', 'A boy writing.') }],
        p: [
          T('斗湖甘榜狄丁岸，住著從菲律賓、印尼逃難而來的無國籍移民，曾被當地人視為「黑區」。二〇〇三年大火後發放，二〇一二年首場義診，慈濟人一次一次走進去。鄉親口袋裡沒有錢，就回房裡找，有時找到兩毛、五毛，交給志工。',
            'Kampung Titingan in Tawau is home to stateless migrants who fled the Philippines and Indonesia, and local people once avoided it as a “black area”. Tzu Chi went in after a fire in 2003, held its first clinic there in 2012, and kept returning. People with empty pockets went back into their rooms, searched, and handed volunteers the twenty or fifty sen they found.'),
          T('二〇一七年三月六日，試辦無國籍學習中心，初期五十位孩童。截至二〇二五年，沙巴三所學習中心有三百七十九位學生。',
            'On 6 March 2017 a trial learning centre for stateless children opened with fifty pupils. By 2025 three centres in Sabah had 379 pupils.')
        ],
        q: { zh: '我記得我們第一天上課，我們是八點，我們的學生六點就到了。', en: 'I remember our first day of class. We started at eight. Our pupils arrived at six.', who: T('志工 梁菁華', 'Liang Jinghua, volunteer') },
        q2: { zh: '帶著一顆好的心去幫他們的，所以為什麼要怕。', en: 'We went with a good heart to help them, so why be afraid?', who: T('志工 羅珍愛', 'Luo Zhen’ai, volunteer') },
        s: ['o170306'] },
      { k: 'story', lay: 'L', date: '2021.12', h: T('雪隆水災', 'The Selangor and Kuala Lumpur floods'),
        ph: [{ i: 'xl1_0286_1', c: T('「水患退去，許多被大水浸泡過的大型傢俱被丟棄在路邊，志工安排多輛大型卡車及推土機前來清理。」（局部，人物已裁去。照片：林振勝；《馬來西亞慈濟史 雪隆分會（一）》頁 285）', '“As the water receded, large pieces of soaked furniture were left at the roadside, and volunteers arranged lorries and bulldozers to clear them.” (Detail, people cropped out. Photo: Lin Zhensheng; History of Tzu Chi Malaysia: KL & Selangor Branch, vol. 1, p. 285)') }],
        p: [
          T('二〇二一年十二月十八日，單日雨量超越一個月總和，全國共二百一十個災區，雪蘭莪州九縣中八縣淪陷。當天，巴生志工成立水災行動指揮小組，在環保站烹煮熱食，用四輪驅動車運入災區。一天動員五十位志工、十二輛四輪驅動車，發放二千份熱食，其中八百份由兩家素食餐廳免費供應；隔天共發出六千六百九十七份便當。',
            'On 18 December 2021 more rain fell in one day than in a normal month. There were 210 disaster areas across the country, and eight of Selangor’s nine districts went under. That day Klang volunteers set up a flood command group, cooked at a recycling centre and took meals in by four-wheel drive. In one day fifty volunteers and twelve vehicles delivered two thousand hot meals, eight hundred of them given free by two vegetarian restaurants. The next day 6,697 lunch boxes went out.'),
          T('皇家武裝部隊以七噸軍用卡車協助把物資運入災區。一位榴槤攤主騰出大部分空間，作為臨時行動中心和熱食定點。食物外送員薩拉胡定號召同行，把熱食送到偏遠地區。',
            'The Malaysian Armed Forces helped carry supplies in on seven-tonne trucks. A durian seller nearby gave up most of the stall’s space as a temporary base and meal point. Food delivery rider Salahuddin rallied his fellow riders to take hot meals to remote areas.'),
          T('十二月二十四至二十六日大清掃，動員超過六千六百人次志工。二十五日，莎亞南太子園聚集二千五百位來自雪隆、檳城、吉打、怡保、新山、馬六甲等地的志工與會眾，還有三百名軍人。二〇二二年一月一日、二日，二千人次志工走入雪隆十三個災區，完成一萬零七百七十一戶造冊（逐戶登記），籌備祝福金發放。',
            'The great clean-up of 24 to 26 December drew over 6,600 volunteer turnouts. On the 25th, 2,500 volunteers and members from Selangor, Kuala Lumpur, Penang, Kedah, Ipoh, Johor Bahru and Melaka gathered in one Shah Alam neighbourhood, with three hundred soldiers. On 1 and 2 January 2022, volunteers made two thousand turnouts into thirteen flooded areas and registered 10,771 households, house by house, for cash aid.')
        ],
        q: { zh: '雖然我的生活不好，與其伸手向人拿錢，不如我出錢幫助人。', en: 'My life is not good, but rather than holding out my hand for money, I would sooner give money to help others.', who: T('受災鄉親 羅玉珍，捐出五十令吉時說', 'Luo Yuzhen, whose home was flooded, on giving fifty ringgit') },
        more: [
          T('造冊時，志工走進完全沒有任何團體關心的太子園 E 區，發現這裡的外籍勞工急需援助，臨時發放物資。從急難發放、熱食、人醫往診、清掃、造冊到祝福金發放，這場援助長達兩個多月。',
            'While registering, volunteers went into a section no group had yet reached, found foreign workers there in urgent need, and gave out supplies on the spot. From emergency aid, meals, doctors’ visits and cleaning to registration and cash aid, the relief lasted more than two months.')
        ],
        s: ['xlfl'] },
      { k: 'story', lay: 'T', h: T('蒲種的一對母女', 'A mother and daughter in Puchong'),
        p: [
          T('蒲種的林淑芬，起初以為慈濟是詐騙。疫情時家裡負擔不起補習費，女兒魏芷晴參加「愛·伴學」，當時連鏡頭都不敢打開。後來，芷晴站上臺當司儀，母女一起到環保點（資源回收點）付出。',
            'Lin Shufen of Puchong first took Tzu Chi for a scam. In the pandemic the family could not afford tuition, and her daughter Wei Zhiqing joined the I-Didik learning programme, too shy at first even to turn on her camera. Later, Zhiqing stood on stage as an emcee, and mother and daughter now give their time at a recycling point together.'),
          T('森美蘭、馬六甲、柔佛三州的助學，截至二〇二五年累計五萬六千七百四十九名學生，一千五百三十二萬令吉。',
            'In Negeri Sembilan, Melaka and Johor, education aid had reached 56,749 students and RM15.32 million by 2025.')
        ],
        s: ['mystory', 'my3'] },
      { k: 'story', lay: 'T', date: '2025.04.20', h: T('走在最前，做到最後', 'First to arrive, there to the end'),
        p: [T('二〇二五年四月一日，雪蘭莪布特拉高原發生氣爆。志工當天勘災，到清真寺設立的疏散中心關懷，接著逐戶家訪造冊，依屋損輕重評估。四月二十日，在梳邦大班鎮慈濟共修處分三場發放祝福金，以現值卡嘉惠 226 戶家庭。', 'On 1 April 2025, a gas explosion struck Putra Heights in Selangor. Volunteers assessed the damage that day, gave care at an evacuation centre set up at a mosque, then visited each household and recorded the damage. On 20 April, at a Tzu Chi centre in Subang, three distributions of cash-value cards reached 226 families.')],
        q: { zh: '慈濟人的關懷是一股很大的精神支持，讓我們可以向前看。', en: 'Tzu Chi’s care is a great spiritual support. It lets us look ahead.', who: T('羅永輝，居民', 'A resident of Putra Heights') },
        s: ['nPutra'] },
      { k: 'vids', ids: [['DcSw8PD24dQ', T('水災過後愛延續　竹筒回娘家', 'After the floods, the bamboo banks come home')], ['6adIh2JbZpY', T('竹筒歲月啟善念　翻轉手心種福田', 'From receiving to giving: the bamboo banks in Malaysia')]] }
    ] },

  /* ───────── 數字 ───────── */
  { id: 'cnum', era: 'num', y: '數字', yen: 'Numbers', nav: T('數字', 'Numbers'),
    ask: T('媽媽，這些年加起來有多少？', 'Mama, how much does it all add up to?'),
    h: T('數字裡的慈善', 'Charity in numbers'),
    lead: T('從第一本手寫的賬冊起，慈濟每一筆都記下來。這一頁只列查得到出處的數字：單年的寫單年，累計的寫累計，不同算法的不相加。',
            'From the first handwritten ledger, Tzu Chi has kept a record of every sum. This page lists only figures with a published source. One-year figures are marked as such, and figures counted differently are not added together.'),
    b: [{ k: 'spend' }, { k: 'ledger' }] },

  /* ───────── 我也可以嗎 ───────── */
  { id: 'cyou', era: 'you', y: '今天', yen: 'Today', nav: T('我也可以嗎', 'Can I too?'),
    ask: T('媽媽，我也可以嗎？', 'Mama, can I do it too?'),
    b: [{ k: 'you' }] },

  /* ───────── 沿革 ───────── */
  { id: 'call', era: 'all', y: '沿革', yen: 'Timeline', nav: T('沿革與影音', 'Timeline and films'),
    h: T('沿革與影音', 'Timeline and films'),
    lead: T('慈善沿革與影片，都可以自己翻。', 'The record and the films, for you to browse.'),
    b: [{ k: 'films' }, { k: 'records' }, { k: 'sources' }] }
  ];

  /* 1966 報頭版：繁體，版式沿用 era1960.html */
  CH.sheet = {
    mast: '一九六六', date: '中華民國五十五年春<br>臺灣　花蓮',
    img: 'assets/era/street_dots.jpg', cap: '情境重建，非當年攝影', alt: '一九六六年前後花蓮街角的情境畫面',
    head: '每天省下五毛錢', small: '三十位家庭主婦，一人一支竹筒',
    col: [
      '一九六六年春，花蓮。一位年輕的出家人即將離開，三十位弟子不捨，聯名上書慰留。證嚴上人說，要留下，每人每天須存五毛錢行善。',
      '竹竿鋸成竹筒，一人一支。每天提菜籃出門之前，先把買菜錢省下的五毛投進去。她們到了市場，遇到朋友就說：<b>「我今天買菜要省五毛錢。」</b>',
      '話就這樣一個傳一個。另一邊，六位常住眾（住在寺中修行的人）每人每天多做一雙嬰兒鞋。兩筆合計，一個月一千一百七十元，是慈濟最早的基金。'
    ],
    en: '<b>SPRING 1966 · HUALIEN, TAIWAN</b>&ensp;A young nun was about to leave. Thirty women signed a letter asking her to stay. If you want me to stay, she said, each of you must save fifty cents a day to do good. At the market they told their friends: “Today I’m saving fifty cents from the groceries.”'
  };

  CH.ledger = [
    { h: T('全球', 'Worldwide'), rows: [
      { n: '139', u: T('個國家地區', 'countries and regions'), l: T('慈善足跡累計觸及', 'reached by Tzu Chi’s charity work'), w: T('截至 2025.12.31', 'to 31 Dec 2025'), s: 'a2', big: 1 },
      { n: '超過 2.6 萬', nen: 'Over 26,000', u: T('戶', 'homes'), l: T('永久住宅，援建於 19 國', 'permanent homes built in 19 countries'), w: T('統計至 2026.02', 'to Feb 2026'), s: 'exg', big: 1 },
      { n: '超過 16 萬', nen: 'Over 160,000', u: T('公噸', 'tonnes'), l: T('發放大米，20 個國家地區', 'of rice distributed in 20 countries and regions'), w: T('統計至 2026.02', 'to Feb 2026'), s: 'exg', big: 1 },
      { n: '32,658,740', u: T('人次受益', 'instances of people served'), l: T('全球慈善援助', 'charity aid worldwide'), w: T('2025 單年', '2025 alone'), s: 'a2', big: 1 },
      { n: '20,240,110', u: T('人次', 'volunteer shifts'), l: T('全球投入志工，志工分布 68 個國家地區', 'worldwide; volunteers in 68 countries and regions'), w: T('2025 單年', '2025 alone'), s: 'a2' },
      { n: '超過 26 萬', nen: 'Over 260,000', u: T('公斤', 'kg'), l: T('米撲滿存下的大米', 'of rice saved in rice banks'), w: '', s: 'a1' }
    ] },
    { h: T('臺灣', 'Taiwan'), rows: [
      { n: '322,936', u: T('戶次', 'household visits'), l: T('弱勢家庭扶助，22 縣市', 'support for families in need, 22 counties and cities'), w: T('2025 單年', '2025 alone'), s: 'ext', big: 1 },
      { n: '17,201', u: T('件', 'cases'), l: T('急難補助', 'emergency aid'), w: T('2025 單年', '2025 alone'), s: 'org' },
      { n: '13,343', u: T('件', 'cases'), l: T('提報個案', 'new cases reported'), w: T('2025 單年', '2025 alone'), s: 'org' },
      { n: '8,699', u: T('戶', 'homes'), l: T('居家安全改善與房屋修繕', 'home safety and repairs'), w: T('2025', '2025'), s: 'ext' },
      { n: '221,901', u: T('人次', 'instances'), l: T('弱勢兒少扶助', 'support for children and youth'), w: T('2025', '2025'), s: 'ext' },
      { n: '26,507', u: T('人次', 'instances'), l: T('獎助學補助', 'scholarships and study aid'), w: T('2025', '2025'), s: 'ext' },
      { n: '67,607', u: T('間', 'shops'), l: T('富有愛心店，全臺 22 縣市', '“Rich in Love” shops across 22 counties and cities'), w: T('至 2026.03.08', 'to 8 Mar 2026'), s: 'a1' }
    ] },
    { h: T('馬來西亞', 'Malaysia'), rows: [
      { n: '56,749', u: T('名學生', 'students'), l: T('森美蘭、馬六甲、柔佛三州助學累計，共 1,532 萬令吉', 'education aid in three states, RM15.32 million in all'), w: T('截至 2025', 'to 2025'), s: 'my3' },
      { n: '379', u: T('位學生', 'pupils'), l: T('沙巴三所學習中心', 'at three learning centres in Sabah'), w: T('截至 2025', 'to 2025'), s: 'o170306' },
      { n: '2,041', u: T('人次', 'stays'), l: T('比打士慈濟生命關懷之家接待待產孕婦；迎接新生兒 1,658 名', 'by expectant mothers at the Pitas home, with 1,658 newborns welcomed'), w: T('截至 2022', 'to 2022'), s: 'xlpt' },
      { n: '超過 6,600', nen: 'Over 6,600', u: T('人次', 'volunteer turnouts'), l: T('雪隆水災三天大清掃動員志工', 'at the three-day clean-up after the Selangor and Kuala Lumpur floods'), w: T('2021.12.24–26', '24–26 Dec 2021'), s: 'xlfl' }
    ] },
    { h: T('這些錢從哪裡來', 'Where the money comes from'), rows: [
      { n: '93%', u: T('', ''), l: T('捐款人次中，1,000 元以下所佔比例（按人次；金額佔 28%）', 'of donations were NT$1,000 or less, by number; they make up 28% of the amount'), w: T('2024', '2024'), s: 'a1', big: 1 }
    ] }
  ];
  CH.ledgerNote = T('戶次：同一戶一年內多次受助，每次都算一次。人次同理。', 'Household visits and instances count each occasion of help, so one household or person may be counted more than once in a year.');
  CH.ledgerOld = [
    [T('1969.02.09　首次冬令發放', '9 Feb 1969, first winter distribution'), T('40 戶', '40 households')],
    [T('截至 1983　救濟金額總計', 'Relief to 1983'), T('1 億 5 千多萬元', 'over NT$150 million')]
  ];

  CH.you = {
    lines: [
      T('可以。', 'Yes, you can.'),
      T('當年的家庭主婦，每天省五毛錢。緬甸的農人，每天存一把米。二〇二四年，慈濟的捐款人次裡，九成三在一千元以下。', 'The housewives of those days saved fifty cents a day. Farmers in Myanmar save a handful of rice. In 2024, 93 of every 100 donations to Tzu Chi were NT$1,000 or less.'),
      T('不必等到有錢，不必等到有空。只要一念心，就可以開始。', 'There is no need to wait for money or for time. One kind thought is enough to begin.')
    ],
    q: { zh: '一分發心，就有一分力量。', en: 'One measure of resolve brings one measure of strength.', who: T('證嚴上人', 'Dharma Master Cheng Yen'), s: 'fm32' },
    links: [
      { zh: '馬來西亞慈濟', en: 'Tzu Chi Malaysia', url: 'https://www.tzuchi.my/' }
    ],
    linkNote: T('報名志工、本地分會的入口，待分會確認後補上。', 'Links for volunteering and local branches will be added once confirmed by the Malaysia branch.')
  };

  /* 數字和沿革放在六段路下面，跟醫療同一結構 */
  CH.page = { after: ['cnum', 'call'] };

  /* 六段路：只重組現成章節，不改內容。cover 是段首照片，tun 是這段的時空隧道 */
  CH.blocks = [
    { id: 'b1', y: '1966–67', h: T('竹筒歲月', 'The Bamboo Bank Years'), ch: ['c66', 'c67'], cover: '19660414-1_02', tun: 'back', ask: T('媽媽，慈濟是怎麼開始的？', 'Mama, how did Tzu Chi begin?') },
    { id: 'b2', y: '1969–89', h: T('親手送到', 'Delivered by Hand'), ch: ['c69', 'c80'], cover: '19731024-1_01', tun: 'road' },
    { id: 'b3', y: '1991–2015', h: T('走出臺灣', 'Beyond Taiwan'), ch: ['c91', 'c00'], cover: '20050924-1_06', tun: 'far' },
    { id: 'b4', y: '1966→2026', h: T('同一分心', 'One Heart'), ch: ['cheart', 'c20'], cover: '20080504-1_13', tun: 'heart' },
    { id: 'b5', y: T('馬來西亞', 'Malaysia'), h: T('在馬來西亞', 'In Malaysia'), ch: ['cmy'], cover: '20170306-1_01', tun: 'my' },
    { id: 'b6', y: T('今天', 'Today'), h: T('我也可以嗎', 'Can I Too?'), ch: ['cyou'], cover: '19860309-1_05', tun: 'ledger' }
  ];
  CH.ui = {
    hubK: T('慈善', 'Charity'), hubH: T('六段路，從竹筒走到今天', 'Six stretches of road, from a bamboo bank to today'),
    hubS: T('一段一段走。走完一段，就蓋一個章。', 'Walk them one at a time. Each one you finish earns a stamp.'),
    start: T('從這裡開始', 'Start here'), walked: T('走過了', 'Walked'), nextTun: T('下一個時空隧道', 'Next time tunnel'),
    nextOf: T('下一段', 'Next'), back: T('回六段路', 'Back to the six stretches'), road: T('回八大腳印', 'Back to the Eight Footprints'),
    skip: T('跳過', 'Skip'), left: T('這一段還有', 'Still ahead'), leftU: T('個故事', 'stories'), seg: T('第 {n} 段／共 6 段', 'Part {n} of 6'), done: T('走完了這一段', 'You finished this part')
  };
  /* 竹筒互動：數字全部來自上方「克難時期的賬」 */
  CH.coin = {
    h: T('一天五毛，存起來是多少？', 'What does fifty cents a day become?'),
    tap: T('投下五毛', 'Drop in fifty cents'),
    s0: T('每天買菜前，先投五毛。按一下，投下今天的五毛。', 'Before going to market each day, fifty cents first. Press once to drop in today’s.'),
    s1: T('三十支竹筒，一天十五元。', 'Thirty bamboo banks: NT$15 a day.'),
    s2: T('一個月，四百五十元。', 'One month: NT$450.'),
    s3: T('再加上六個人做嬰兒鞋的七百二十元，每個月一千一百七十元，慈濟就從這裡開始。', 'With NT$720 from six people sewing baby shoes, NT$1,170 a month. Tzu Chi began here.'),
    again: T('再投一次', 'Again')
  };
  /* 十年支出，單位億元。出處與口徑見 內容/慈善數據_全表.md */
  CH.spend = {
    h: T('這十年，每一年用在慈善的錢', 'What each of these ten years spent on charity'),
    big: T('超過新臺幣 600 億元', 'Over NT$60 billion'),
    sub: T('2016–2025 這十年，臺灣與國際慈善支出。', 'Charity spending in Taiwan and abroad, 2016–2025.'),
    unit: T('億元', '×100 million NT$'),
    rows: [[2016, 46.33], [2017, 54.52], [2018, 38.95], [2019, 42.05], [2020, 52.32], [2021, 111.65], [2022, 61.14], [2023, 64.47], [2024, 70.9], [2025, 87.5]],
    mark: { 2021: T('含 BNT 疫苗採購捐贈', 'Includes the BNT vaccine purchase and donation') },
    note: T('取自慈濟基金會歷年年報與慈善年度報告。不含教育志業、業務發展基金提撥與海外當地自行支出；各年報告分類略有不同，2025 年為年報圖表讀數。', 'From Tzu Chi Foundation annual and charity reports. Excludes the education mission, transfers to the operating fund and spending raised overseas; categories vary slightly by year; the 2025 figure is read from the report’s chart.'),
    table: T('看數字表', 'Show the table')
  };
  CH.next = {
    ask: T('媽媽，沒有錢，醫院就不救嗎？', 'Mama, if people have no money, won’t the hospital save them?'),
    stop: T('下一站・醫療', 'Next stop: Medicine'),
    href: 'medical.html', tun: 'm_hall'
  };

  CH.footer = T('本頁為樣板，尚未經馬來西亞慈濟分會審核，未發佈。女孩與媽媽是說故事的人。照片除另有說明外，取自慈濟《歷史上的今天》公開頁面；標示「情境重建」的畫面由 AI 依史料生成，非當年攝影。「」內為原文照錄。',
                'Sample only: not yet reviewed by Tzu Chi Malaysia and not published. The girl and her mother are storytellers. Unless stated otherwise, photographs come from Tzu Chi’s public On This Day pages. Images marked as reconstructions are AI-generated from the record and are not historical photographs.');

  /* 慈善沿革沿革：t 決定 filter */
  CH.filters = [['all', T('全部', 'All')], ['first', T('第一次', 'Firsts')], ['care', T('照顧', 'Care')], ['home', T('建屋', 'Homes')], ['relief', T('賑災', 'Relief')], ['system', T('制度', 'Systems')], ['my', T('馬來西亞', 'Malaysia')]];
  CH.records = [
    ['1966.04.14', 'first system', '佛教克難慈濟功德會於花蓮佳民村普明寺成立，三十支竹筒，每人每日五毛。', 'The association is founded at Pu Ming Temple, Hualien, with thirty bamboo banks at fifty cents a day each.', 'fm27'],
    ['1966.05', 'first care', '李時提報盧丹桂，第一例醫療個案，同年七月送羅東開刀。', 'Li Shi reports Lu Dangui, the first medical case. She goes to Luodong for surgery that July.', 'o670701'],
    ['1966.06', 'first care', '林曾老太太成為第一位長期照顧戶，每月濟助三百元。', 'Lin Zeng becomes the first long-term care recipient, at NT$300 a month.', 'fm36'],
    ['1967', 'system', '建立複查制度，每三個月回訪一次。', 'The follow-up system begins: a return visit every three months.', 'fm37'],
    ['1967.07.20', 'first system', '《慈濟》月刊創刊。', 'The Tzu Chi Monthly is first published.', 'o670720'],
    ['1967.12.15', 'first home', '第一間永久屋完工入厝：李阿拋老人家的五坪空心磚屋，十一月一日動土。', 'The first permanent house, five ping of hollow brick, is finished for Li A-pao. Work began on 1 November.', 'fm39'],
    ['1969.02.09', 'first care', '普明寺首次冬令發放，嘉惠四十戶、二百多人。', 'First winter distribution at Pu Ming Temple: forty households, over 200 people.', 'fm43'],
    ['1969.10.16', 'first relief', '艾爾西颱風，臺東大南村大火燒毀一百四十八戶，首次大型賑災。', 'After Typhoon Elsie, a fire destroys 148 households in Danan: the first large-scale relief.', 'fm45'],
    ['1970.01.30', 'care', '靜思精舍賑濟二百餘人，此後每年舉辦，並增每月常態發放。', 'Relief for over 200 people at the Jing Si Abode, repeated every year, with regular monthly distributions added.', 'fm43'],
    ['1970.11.27', 'relief', '花蓮成功街大火，慈濟依名冊致送七十二戶，再補發未報戶口的十六戶。', 'Fire on Chenggong Street, Hualien: 72 households on the list receive relief money, then sixteen unregistered households too.', 'fm46'],
    ['1971.11.11', 'home', '娜定颱風後，買地建屋三間，名「嘉里小築」。', 'After Typhoon Nadine, land is bought and three houses are built at Jiali.', 'fm_nadine'],
    ['1973.10', 'relief system', '娜拉風災，一百多位委員沿門募款，嘉惠六百七十一個家庭，勘災、造冊、發放自此定下。', 'Typhoon Nora: over a hundred commissioners raise funds door to door and help 671 families. Assessment, listing and distribution become the method.', 'o731024'],
    ['1975.12', 'home', '妮娜颱風後於精舍土地動土「妮娜小築」，翌年三月完工。', 'After Typhoon Nina, Nina Cottages are begun on the Abode’s land and finished the following March.', 'o750905'],
    ['1976.06', 'home care', '「康樂小築」安頓無力重建、單身無依的長者。', 'Kangle Cottages take in elders living alone who cannot rebuild.', 'o750905'],
    ['1976.12.04', 'care', '十天環島訪貧，複查一百二十戶，張有傳醫師隨車義診。', 'A ten-day journey round the island: 120 households reviewed, with Dr Zhang Youchuan seeing patients.', 'fm_tour'],
    ['1977.04.11', 'relief', '花蓮瑞穗大火，七十九戶燒毀。委員林秋英自己受災，仍先安頓其他鄉親。', 'Fire in Ruisui, Hualien: 79 households destroyed. Commissioner Lin Qiuying, who lost her own home, helps the others first.', 'fm60'],
    ['1977.07', 'relief care', '賽洛瑪、薇拉颱風，賑濟後五十二戶轉為長期濟助。', 'Typhoons Thelma and Vera. After the relief, 52 households move into long-term care.', 'fm59'],
    ['1978.09', 'care', '上人首次探訪樂生療養院，隨後整修房屋，設癱瘓病房。', 'The Master first visits Losheng Sanatorium. Tzu Chi repairs the buildings and sets up a ward.', 'fm93'],
    ['1980.01.16', 'system', '財團法人臺灣省佛教慈濟慈善事業基金會立案。', 'The Tzu Chi Foundation is registered.', 'fm65'],
    ['1980.10.27', 'care', '樂生院友募集六萬一千九百元，響應慈濟醫院籌建。', 'Losheng residents raise NT$61,900 for the planned hospital.', 'fm93'],
    ['1991.05', 'relief', '孟加拉風災，美國發起「一人一元美金」，上人發起「一人省下一個麵包錢」。', 'Bangladesh cyclone: “one person, one dollar” in the USA, and “save the price of a bread roll” from the Master.', 'fm138'],
    ['1991.07', 'first my care', '馬來西亞首例慈善個案，亞依淡羅合海。', 'First charity case in Malaysia: Luo Hehai of Ayer Itam.', 'fm145'],
    ['1991.07.15', 'relief first', '上人呼籲賑濟華東水患，慈濟人首次上街募款。', 'The Master calls for relief for the East China floods, and volunteers raise funds on the streets for the first time.', 'o910715'],
    ['1992', 'relief first', '援助蒙古，第一次由慈濟志工親手發放的國際援助。', 'Aid to Mongolia: the first international relief handed out in person by volunteers.', 'fm138'],
    ['1992.10.10', 'my care', '馬六甲首例機構關懷，馬接峇汝安老院開案。', 'First institutional care in Melaka, at the old folks’ home at Machap Baru.', 'fm145'],
    ['1993.03.04', 'my care home', '鄭金龍老先生成為馬六甲慈濟首位照顧戶，慈濟協助蓋屋。', 'Zheng Jinlong becomes the first care recipient in Melaka, and Tzu Chi helps build his home.', 'fm145'],
    ['1993.08.11', 'my system', '檳城聯絡處成立。', 'The Penang liaison office opens.', 'o930613'],
    ['1994.01.16', 'my care', '慈濟志工首次走入雪蘭莪州雙溪毛糯麻瘋病院訪視，隔年開始固定每月前往。', 'Volunteers first visit the Sungai Buloh leprosy settlement in Selangor, and from the following year come every month.', 'xlsb'],
    ['1994.04.10', 'my first care', '馬六甲首次現場發放，此後每月第二個星期日。', 'First on-site distribution in Melaka, then every second Sunday of the month.', 'o940410'],
    ['1995.02.18', 'home relief', '尼泊爾三座慈濟村一千四百戶揭碑；六月第四座四百戶交屋。', 'Three villages of 1,400 homes unveiled in Nepal; a fourth of 400 follows in June.', 'o950218'],
    ['1996.12.22', 'system', '從花蓮吉安北昌村、新城佳林村開始推動社區志工。', 'Community volunteering begins in Beichang and Jialin villages, Hualien.', 'fm196'],
    ['1997.08.03', 'my first care', '全馬第一家由非政府組織營運、費用全免的洗腎中心啟用。', 'Malaysia’s first free dialysis centre run by a non-governmental organisation opens.', 'o930613'],
    ['1999.09.21', 'relief home', '九二一地震，慈濟承擔五十一所學校援建。', 'The 921 earthquake. Tzu Chi takes on the rebuilding of fifty-one schools.', 'fm219'],
    ['2000', 'home', '貴州九個慈濟新村，四百多戶。', 'Nine Tzu Chi villages in Guizhou, over 400 homes.', 'fm239'],
    ['2000.01', 'my relief', '加雅島火災，亞庇志工勘災發放，這是慈濟首次走入加雅島。', 'After a fire on Gaya Island, Kota Kinabalu volunteers assess the damage and give aid: Tzu Chi’s first time on the island.', 'xlgy'],
    ['2000.06.15', 'my care', '沙巴原住民村的新吊橋「慈濟大愛橋」啟用，慈濟承擔建設費用，與村民合力建造，耗時十八天。', 'A new suspension bridge opens at an indigenous village in Sabah. Tzu Chi paid for it and villagers built it with volunteers in eighteen days.', 'xlbr'],
    ['2003.05.01', 'my care', '沙巴比打士的待產之家啟用，同年七月二十九日命名「慈濟生命關懷之家」。', 'The waiting home for mothers opens in Pitas, Sabah, and is named Rumah Penyayang Tzu Chi on 29 July.', 'xlpt'],
    ['2003.07.18', 'home', '印尼金卡蓮大愛一村入厝，一千一百戶。', 'The Cengkareng Great Love Village, Jakarta: 1,100 households move in.', 'o030718'],
    ['2004.12.26', 'relief home', '南亞大海嘯，於亞齊及斯里蘭卡援建大愛村三千三百多戶。', 'Indian Ocean tsunami: over 3,300 homes built in Aceh and Sri Lanka.', 'fm282'],
    ['2005.07.10', 'my care', '吉隆坡慈濟人第一次在冷京扣留營舉辦義診，並協助修復廢棄古井，改善用水。', 'Kuala Lumpur volunteers hold their first free clinic at the Lenggeng detention camp, and repair a disused well to improve the water supply.', 'xllg'],
    ['2006.10.26', 'system', '上人提出「回歸竹筒歲月」。', 'The Master calls for a return to the bamboo-bank days.', 'fm297'],
    ['2008.05.15', 'relief', '緬甸納吉斯風災，首度發放嘉惠二百二十五戶，計九百六十七人。', 'Cyclone Nargis, Myanmar: the first distribution reaches 225 households, 967 people.', 'fm323'],
    ['2009.08', 'relief home', '莫拉克風災，援建六座大愛村，一千三百〇二戶。', 'Typhoon Morakot: six Great Love Villages, 1,302 homes.', 'fm329'],
    ['2009.09', 'relief system', '菲律賓凱莎娜颱風，啟動以工代賑。', 'Typhoon Ketsana, Philippines: work for relief begins.', 'fm332'],
    ['2010.10.31', 'my care', '雪隆分會首次為印裔照顧戶舉辦屠妖節發放。', 'The Selangor and Kuala Lumpur branch holds its first Deepavali distribution for Indian care recipients.', 'xldv'],
    ['2013.01', 'care', '賴索托發願做玉米撲滿，帶動四十七個村落。', 'Lesotho volunteers vow to save maize. Forty-seven villages take part.', 'fm406'],
    ['2014.03.08', 'my relief', '馬航 MH370 客機失聯，雪隆分會接獲馬航請求，志工到機場電話服務中心二十四小時輪班接聽家屬來電，並陪伴家屬。', 'Flight MH370 goes missing. At Malaysia Airlines’ request, volunteers take shifts round the clock at the airport call centre to answer families’ calls, and stay beside the families.', 'xlmh'],
    ['2016.03.27', 'first care', '緬甸瑞那滾村首次米撲滿回娘家，九十戶，九十六點四公斤。', 'The rice of Shwe Na Gwin comes home for the first time: ninety households, 96.4 kg.', 'o160327'],
    ['2017.03.06', 'my care', '沙巴斗湖試辦無國籍學習中心，初期五十位孩童。', 'A trial learning centre for stateless children opens in Tawau, Sabah, with fifty pupils.', 'o170306'],
    ['2020.01.15', 'home care', '「安穩家園．美善社區」專案啟動。', 'The Safe Homes, Good Neighbourhoods project begins.', 'o200115'],
    ['2020.03.18', 'my care', '馬來西亞實施行動管制令第一天，雪隆志工在吉隆坡靜思堂啟動製作防護面罩；中南馬及東馬據點陸續加入，截至二〇二二年累計超過十八萬個。', 'On the first day of Malaysia’s movement control order, volunteers begin making face shields at the Jing Si Hall in Kuala Lumpur. Other centres join in, and by 2022 the total passes 180,000.', 'xlfs'],
    ['2021.12.18', 'my relief', '雪隆水災，巴生志工當天成立水災行動指揮小組；十二月二十四至二十六日大清掃，動員超過六千六百人次志工。', 'Floods in Selangor and Kuala Lumpur. Klang volunteers form a command group that day; the clean-up of 24 to 26 December draws over 6,600 volunteer turnouts.', 'xlfl'],
    ['2022.03.11–20', 'relief', '援助烏克蘭行動動員逾 2,400 人次，打包逾 2 萬箱物資。', 'The Ukraine aid effort draws over 2,400 turnouts and packs more than 20,000 boxes of supplies.', 'o230220'],
    ['2023.02.09–20', 'relief', '土耳其賑災物資在慈濟內湖聯絡處整理裝箱，志工與社會大眾逾 1 萬 1 千人次投入，裝箱逾 3 萬 4 千箱。', 'Supplies for Turkey are sorted and packed at the Tzu Chi Neihu office. Volunteers and the public put in over 11,000 turnouts and fill more than 34,000 boxes.', 'o230220'],
    ['2023.04.15', 'my care system', '雪隆慈濟推動「Kita 1 Keluarga 3.0 守望相助」紓困計劃，持續關懷生計受疫情影響的家庭。', 'Tzu Chi in Kuala Lumpur and Selangor runs the Kita 1 Keluarga 3.0 programme, continuing to care for families whose livelihoods the pandemic affected.', 'xl2914'],
    ['2024.10.27', 'home', '印度思龍加村 36 間大愛屋完成移交。', '36 Great Love houses are handed over in a village in India.', 'o230913'],
    ['2025.01.18', 'relief', '洛杉磯山火第一輪發放，慈濟美國在聖谷愛滿地、西洛杉磯兩個聯絡處同時舉辦，分別嘉惠 50 戶與 37 戶。', 'First round of distributions after the Los Angeles wildfires: Tzu Chi USA serves 50 households at its San Gabriel Valley service centre and 37 at West Los Angeles.', 'nLAfire'],
    ['2025.02.23', 'my relief', '砂拉越美里豪雨成災，又逢土石流，志工在兩地舉辦祝福金發放，嘉惠 526 戶。', 'After floods and landslides in Miri, Sarawak, volunteers hold distributions at two sites, reaching 526 households.', 'nMiri'],
    ['2025.02.23', 'my relief first', '慈濟首次在民都魯舉辦大型發放，兩場水災祝福金發放嘉惠 1,742 個家庭。', 'Tzu Chi’s first large distribution in Bintulu: two sessions after the floods reach 1,742 families.', 'nBintulu'],
    ['2025.03.28', 'relief', '緬甸規模七點七強震，首波大型發放濟助五千戶。', 'Magnitude 7.7 earthquake in Myanmar: the first large distribution reaches 5,000 households.', 'o250330'],
    ['2025.04.20', 'my relief', '布特拉高原氣爆後，雪隆志工逐戶家訪造冊，分三場發放祝福金，嘉惠 226 戶。', 'After the Putra Heights gas explosion, volunteers in Selangor and Kuala Lumpur visit each household, then hold three distributions reaching 226 families.', 'nPutra'],
    ['2026.04.12', 'my care', '加影的安養院裡，志工來和一位癱瘓的羅興亞難民話別。六年來，志工為他送日用品和藥物；兩天後，他啟程赴加拿大，與十四年未見的家人團聚。', 'At a nursing home in Kajang, volunteers say goodbye to a paralysed Rohingya refugee. For six years a volunteer has brought him daily necessities and medicine. Two days later he leaves for Canada, to rejoin the family he has not seen in fourteen years.', 'nRoh']
  ];
})();
