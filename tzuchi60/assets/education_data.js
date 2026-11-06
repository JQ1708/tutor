/* 教育站資料：結構照 medical_data.js。效果在 CH.R，翻書隧道在 tunnel.js 的 book */
(function () {
  var T = function (zh, en) { return { zh: zh, en: en }; };
  var otd = function (d) { var s = d.slice(0, 4) + '.' + d.slice(4, 6) + '.' + d.slice(6, 8); return { zh: '《慈濟歷史上的今天》' + s, en: 'Tzu Chi, On This Day, ' + s, url: 'https://tzuchiculture.org/tzuchi_60th_anniversary/onthisday/onthisday_' + d + '-1/' }; };
  var fm = function (n, t) { return { zh: '慈濟法脈資料庫 ' + n + '〈' + t + '〉', en: 'Tzu Chi Dharma Lineage Archive, no. ' + n }; };
  var xl = function (p) { return { zh: '《馬來西亞慈濟史 雪隆分會》（1）頁 ' + p.replace(/, /g, '、'), en: 'History of Tzu Chi Malaysia: Selangor and Kuala Lumpur Branch, vol. 1, p. ' + p }; };
  var S = {
    fm114: fm('00114', '籌設慈濟護專'), fm115: fm('00115', '慈濟護專創校'), fm172: fm('00172', '慈濟醫學院創校'), fm152: fm('00152', '慈濟教師聯誼會成立'),
    fm219: fm('00219', '九二一大地震'), fm221: fm('00221', '社會的希望在人才，人才的希望在教育'), fm233: fm('00233', '慈濟大學附屬中小學創校'),
    fm258: fm('00258', '慈濟大學首創「大體模擬手術教學」'), fm295: fm('00295', '泰國清邁慈濟學校創校'), fm312: fm('00312', '臺南慈濟中小學創校'),
    fm367: fm('00367', '啟動減災希望工程，重建老舊校舍'), fm381: fm('00381', '土耳其慈濟開辦「滿納海中小學」'), fm465: fm('00465', '馬來西亞吉隆坡慈濟國際學校創校'),
    fm232: fm('00232', '教育完全化'), fm386: fm('00386', '上人獲泰國納里宣大學授予榮譽博士'), o970907: otd('19970907'), o121001: otd('20121001'),
    tcuu: { zh: '慈濟大學・教學單位', en: 'Tzu Chi University: academic units', url: 'https://www.tcu.edu.tw/p/412-1033-4801.php' },
    o880326: otd('19880326'), o920723: otd('19920723'), o941016: otd('19941016'), o990921: otd('19990921'), o050516: otd('20050516'), o160312: otd('20160312'),
    i5: { zh: '慈濟六十週年影響力報告・教育', en: 'Tzu Chi 60th anniversary impact report: education', url: 'https://60impact.tzuchi.org.tw/' },
    i0: { zh: '慈濟六十週年影響力報告・故事', en: 'Tzu Chi 60th anniversary impact report: stories', url: 'https://60impact.tzuchi.org.tw/' },
    tced: { zh: '慈濟教育志業網站・統計資料', en: 'Tzu Chi Education: statistics', url: 'https://tcedu.org.tw/統計資料/' },
    tzed: { zh: '慈濟教聯會平台・關於我們', en: 'Tzu Chi teachers’ platform: about', url: 'https://tzueducation.org.tw/about.aspx' },
    tcu: { zh: '慈濟大學護理學系・系史', en: 'Tzu Chi University, Department of Nursing: history', url: 'https://nc.tcu.edu.tw/p/412-1014-4932.php?Lang=zh-tw' },
    rep: { zh: '慈濟基金會年度報告 2021–2025', en: 'Tzu Chi Foundation annual reports, 2021 to 2025' },
    mycz: { zh: '馬來西亞慈濟〈慈济助学耕心田 爱灌希望育未来〉2025.11.02', en: 'Tzu Chi Malaysia news report, 2 Nov 2025', url: 'https://tzuchi.my/zh/慈济新知/慈济报导/社区志工纪实/cat/慈善纪实/慈济助学耕心田爱灌希望育未来' },
    xlhh: xl('393–397'), xlmm: xl('436–441'), xlts: xl('401'), xlbd: xl('411–412'), xlsl: xl('178–179, 412'), xlkd: xl('465–471'), xlsc: xl('479–485'), xlfd: xl('487–490')
  };
  var CH = window.CH = { S: S };
  var SHANGREN = T('證嚴上人', 'Dharma Master Cheng Yen');

  /* 教育新裁的圖：尺寸給版面用，隧道的頁面圖在 river/ed_*.jpg */
  var P = window.PHS = window.PHS || {};
  var SZ = { hero_e: [1600, 900], e_gate: [1280, 659], e_site: [1200, 681], e_sign: [760, 1071], e_med: [1000, 890], e_hall: [1000, 1159], e_frame: [1200, 894], e_steel: [1200, 719], e_new: [1100, 695], e_cm: [1280, 720], e_cmb: [1200, 694], e_book: [1000, 914], e_ping: [1100, 765], e_kl: [900, 874], e_ctr: [1100, 321], e_sink: [800, 791], e_board: [900, 375], e_talk: [1000, 300], e_water: [760, 671] };
  Object.keys(SZ).forEach(function (k) { P[k] = SZ[k]; });
  /* 第一項是印在書頁上的年份，0 表示年份未確證，不印 */
  var YR = { hero: 0, gate: 0, site: 0, sign: 1988, med: 0, hall: 1999, frame: 1999, steel: 0, 'new': 0, cm: 0, cmb: 0, book: 1999, ping: 2016, kl: 2020, ctr: 2007, sink: 0, board: 0, talk: 1996, water: 0 };
  var KEY = { hero: 'hero_e' };
  window.RIVER_M = (window.RIVER_M || []).concat(Object.keys(YR).map(function (k) { var z = SZ[KEY[k] || 'e_' + k]; return [YR[k], 'ed_' + k, Math.round(z[0] / z[1] * 300)]; }));

  CH.page = { key: 'education', pre: 'e', title: '教育｜媽媽，醫院蓋好了，照顧病人的人才，從哪裡來？', still: 'hero_e', noDoor: 1, after: ['enum', 'eall'] };

  CH.hero = {
    film: T('媽媽，醫院蓋好了，照顧病人的人才，從哪裡來？', 'Mama, the hospital is built. Where will the people to care for the patients come from?'),
    stop: T('第三站', 'Third stop'), title: T('教育', 'Education'),
    sub: T('從幼兒園、小學、中學到大學，一格一格連起來。<br>教的是專業，也是怎樣待人。', 'From kindergarten, primary and secondary school to university, one step joined to the next.<br>Teaching a profession, and how to treat people.'),
    watch: T('看影片　10 分 11 秒', 'Watch the film · 10 min 11 s'), read: T('走這六段路', 'Walk the six stretches'),
    ai: T('慈濟護專校舍局部　取自《慈濟歷史上的今天》', 'Part of the nursing college, from Tzu Chi, On This Day')
  };

  CH.chapters = [
    /* ───── 第一段 ───── */
    { id: 'e1a', era: 'e80', y: '1988–89', nav: T('山腳下的一所學校', 'A school at the foot of the mountains'),
      ask: T('媽媽，醫院蓋好了，照顧病人的人才，從哪裡來？', 'Mama, the hospital is built. Where will the people to care for the patients come from?'),
      b: [
        { k: 'story', lay: 'L', date: '1988', h: T('十二所護專，都在西部', 'Twelve nursing colleges, all in the west'),
          ph: [{ i: 'e_gate', c: T('花蓮山腳下的慈濟護專校舍局部。確切拍攝日期不詳。取自《慈濟歷史上的今天》。', 'Part of the Tzu Chi nursing college at the foot of the mountains in Hualien. Exact date unknown. From Tzu Chi, On This Day.') }],
          p: [T('當時，臺灣有十二所護專，都在西部。東部缺少職業學校，也缺少就業的機會；花蓮慈濟醫院啟業之後，同樣缺少醫護人員。', 'At the time, Taiwan had twelve nursing colleges, and all of them were in the west. The east was short of vocational schools and short of work, and once the Tzu Chi hospital in Hualien opened, it was short of nurses as well.'),
            T('一九八八年三月二十六日，慈濟基金會向教育部提出申請，要在花蓮設立一所護理專科學校。校地在花蓮市建國路，共十公頃，離慈濟醫院約三公里。學校全部採公費，免繳學雜費，使家庭清寒的少女也有深造的機會。', 'On 26 March 1988 the Tzu Chi Foundation applied to the Ministry of Education to found a nursing college in Hualien. The site was ten hectares on Jianguo Road, about three kilometres from the hospital. Every place would be publicly funded, with no tuition or fees, so that girls from families of limited means could also study further.')],
          q: { zh: '首要目的當然是為了東部的少女。', en: 'The first purpose, of course, was the young women of the east.', who: SHANGREN },
          q2: { zh: '再加上慈濟醫院成立以後，也缺少醫護人員。', en: 'And after the Tzu Chi hospital was founded, it too was short of medical staff.', who: SHANGREN },
          s: ['fm115'] },
        { k: 'story', lay: 'R', date: '1988.04.30', h: T('自己來培養', 'Training their own'),
          ph: [{ i: 'e_sign', c: T('一九八八年，碎石工地上立著「參加開工典禮」的引導牌。局部，已裁去遠處人影。取自《慈濟歷史上的今天》。', '1988: a sign on the gravel site directs guests to the groundbreaking. Detail, with distant figures cropped out. From Tzu Chi, On This Day.') }],
          p: [T('慈濟護專籌備委員會召開第一次會議，由前臺大醫院院長楊思標任召集人，與慈院院長杜詩綿、副院長曾文賓等十一位組成委員會。七月三十一日，學校舉行開工典禮。', 'The preparatory committee held its first meeting. Yang Szu-piao, former superintendent of National Taiwan University Hospital, took the chair, and eleven people including hospital superintendent Tu Shih-mien and deputy Tseng Wen-pin formed the committee. The groundbreaking followed on 31 July.'),
            T('楊思標在訪談中說明，這時不只東部，連西部都在鬧護士荒。學校希望培養的人才，能在東部生根。', 'Yang explained in an interview that the shortage of nurses had by then reached the west as well as the east. The hope was that the people the school trained would put down roots in the east.')],
          q: { zh: '護士難招，不得不趕快自己來培養人才。', en: 'Nurses were hard to recruit. There was nothing for it but to hurry and train our own.', who: T('楊思標　慈濟護專首任校長', 'Yang Szu-piao, the college’s first president') },
          s: ['fm115'] },
        { k: 'rec', items: [
          { d: '1988.03.26', zh: '慈濟基金會向教育部提出慈濟護專申請設立。', en: 'The foundation applies to the Ministry of Education to establish the college.' },
          { d: '1988.04.30', zh: '籌備委員會召開第一次會議。', en: 'The preparatory committee holds its first meeting.' },
          { d: '1988.07.31', zh: '慈濟護專開工典禮。', en: 'Groundbreaking.' },
          { d: '1989.02.27', zh: '教育部批准慈濟護專籌設計劃書。', en: 'The ministry approves the founding plan.' },
          { d: '1989.06.12', zh: '教育部函准立案，核定二年制日間部護科二班，參加聯合招生考試。', en: 'Registration is approved: two classes of the two-year day nursing course, recruited through the joint entrance examination.' },
          { d: '1989.09.17', zh: '創校開學典禮；楊思標為首任校長。', en: 'The opening ceremony; Yang Szu-piao is the first president.' }
        ], s: ['fm115'] },
        { k: 'roll', bare: 1, h: T('慈濟護專　第一屆', 'Tzu Chi nursing college, first class'), cover: T('點名冊', 'Class register'), u: T('位新生', 'new students'),
          t: T('一九八九年九月十七日，全省各地兩萬餘位委員、會員到場，迎接一百零七位新生。', 'On 17 September 1989, more than twenty thousand commissioners and members from across Taiwan came to welcome 107 new students.'),
          note: T('示意圖，非當年名冊。', 'An illustration, not the original register.'), s: ['fm115'] },
        { k: 'story', lay: 'T', date: '1989', h: T('人生哲學', 'The philosophy of life'),
          p: [T('籌備課程的時候，護理專業之外，還特別開了「人生哲學」，由洪簡靜惠老師擔任。報導裡寫著，這是「為了追尋完美的生命意義」。',
                'When the courses were planned, a class on the philosophy of life was set aside beyond nursing itself, taught by Hung Chien Ching-hui. The report says it was “in pursuit of a full meaning of life”.')],
          s: ['fm115'] },
        { k: 'story', lay: 'T', h: T('一畢業就有工作', 'A job on graduation'),
          p: [T('公費生的學雜費全免，畢業後必須在慈濟醫院服務滿兩年。慈濟護專另有原住民學生免費就讀的政策。', 'Publicly funded students paid no tuition or fees, and on graduating had to serve two full years at the Tzu Chi hospital. The college also let Indigenous students study free of charge.'),
            T('太魯閣族的黃小英，父親打臨時工，每學期三萬多元的學雜費，是很大的負擔。成為公費生的兩年，她很少跟家裏拿錢；後來服務於慈院神經外科病房。那兩年的服務義務，對她是一種保障和安定。她是萬榮鄉西林村第一位就讀慈濟護專的學生，媽媽逢人就鼓勵前往就讀。據她粗略估計，村內讀護專的約有十五人。', 'Huang Hsiao-ying, who is Truku, had a father in casual work, and fees of over NT$30,000 a term weighed heavily. For her two funded years she rarely asked her family for money, and she went on to work on the hospital’s neurosurgery ward. The two-year service, to her, meant security. She was the first from Xilin village in Wanrong to attend the college, and her mother encouraged everyone she met to apply. By her rough count, about fifteen from the village had gone to the college.'),
            T('五專部的太魯閣族學生正建梅，父親是水泥工，母親做麵攤生意，在家排行老二。免費就學的政策，讓父母不用再為她的學雜生活費發愁。', 'Cheng Chien-mei, a Truku student in the five-year course, was the second child of a construction worker and a noodle-stall owner. The free-study policy spared her parents the worry of paying for her schooling and upkeep.'),
            T('這就是創校的用意：增加東部少女就學、就業的機會，也培養能在東部生根的護理人才。', 'This was what the school was founded for: more chances for the young women of the east to study and to work, and nurses who would stay.')],
          q: { zh: '現在我一畢業就有工作，又能減輕家裏的負擔，沒有浪費一點時間為自己的前途徬徨。', en: 'Now I have a job the moment I graduate, and I can lighten the load at home. I have not wasted a moment worrying about my future.', who: T('黃小英　慈濟醫院護士', 'Huang Hsiao-ying, nurse at the Tzu Chi hospital') },
          q2: { zh: '除了學雜費全免外，每月還有三千元的生活補助費。', en: 'As well as having all fees waived, we get a living allowance of three thousand dollars a month.', who: T('正建梅　五專部學生', 'Cheng Chien-mei, five-year course student') },
          note: T('兩位的話出自慈濟刊物報導。', 'Both quotations come from a Tzu Chi periodical.'),
          s: ['fm115'] }
      ] },

    /* ───── 第二段 ───── */
    { id: 'e2a', era: 'e80', y: '1989', nav: T('懿德母姊', 'Mothers and sisters'),
      ask: T('媽媽，護士只要會打針、換藥就好了嗎？', 'Mama, does a nurse only need to know injections and dressings?'),
      b: [
        { k: 'story', lay: 'T', date: '1989.10.25', h: T('三位委員，九位學生', 'Three commissioners, nine students'),
          p: [T('開學後一個多月，慈濟「懿德母姊會」成立。懿德，是女人的德行。三十六位慈濟資深委員分為十二組，一百零七位學生也分為十二組，每三位委員照顧、輔導九位學生。', 'A little over a month after term began, the Yide Mothers and Sisters Association was formed. Yide means a woman’s virtue. Thirty-six senior commissioners were divided into twelve groups, and so were the 107 students, so that each three commissioners looked after nine students.'),
            T('除了專業，懿德母姊也帶學生去看貧戶，幫阿公、阿婆打掃，把環境整理好。學校教她們的職業功能，也教她們慈濟的精神。', 'Alongside their professional training, the mothers and sisters took students to visit families in need, to clean and tidy for the elderly. The school taught the work, and it taught the spirit of Tzu Chi.')],
          q: { zh: '年老的就像是母親，年輕的就像是自己的姊妹', en: 'The older ones are like mothers, and the younger ones like one’s own sisters.', who: SHANGREN },
          s: ['fm115'] },
        { k: 'signs', bare: 1, d: '1989.11.23', h: T('用手唱校歌', 'Singing the school song with their hands'),
          t: T('懿德母姊與學生第一次課外輔導，臺北慈濟人暱稱「紀媽咪」的靜暘委員，帶領學生以手語演出護專校歌。', 'At the first activity with the students, Commissioner Jing Yang, known in Taipei as Mummy Ji, led them in performing the college song in sign.'),
          q: T('連校長、多位老師、甚至上人也舉起手，跟著比畫。', 'Even the president, several teachers and the Master raised their hands and followed along.'),
          who: T('《慈濟道侶》82 期，1989.12.04', 'Tzu Chi Companions, no. 82, 4 Dec 1989'),
          note: T('示意畫面，非校歌實際手勢。', 'An illustration, not the actual signs of the song.'), s: ['fm115'] },
        { k: 'story', lay: 'T', h: T('一年十個學生', 'Ten students a year'),
          p: [T('公費的擔子不輕。培養一位學生，一年約需十二萬元。一位陳老先生向上人問起能為護專負擔些什麼，聽了之後，表示一年要負擔十位學生的全部費用。一所學校，就這樣由許多人一起撐起來。', 'Public funding was no small load. One student cost about NT$120,000 a year. An elderly Mr Chen asked the Master what he could take on for the college, and on hearing the answer offered to meet all the costs of ten students a year. A school was carried in this way, by many people together.')],
          q: { zh: '要培養一個學生一年約需十二萬元啊！', en: 'To train one student takes about one hundred and twenty thousand dollars a year!', who: SHANGREN },
          note: T('這裡記的是他當時的發心，後續情形原文未載。', 'This records what he offered at the time. The source does not say what followed.'),
          s: ['fm115'] }
      ] },
    { id: 'e2b', era: 'e90', y: '1990–2003', nav: T('醫學院', 'The medical school'),
      ask: T('媽媽，護士有了，醫生呢？', 'Mama, now there are nurses. What about doctors?'),
      b: [
        { k: 'story', lay: 'L', date: '1990.09.19', h: T('自己揉土、拉胚', 'Kneading their own clay'),
          ph: [{ i: 'e_med', c: T('慈濟醫學院校舍施工，鷹架和綠網還沒有拆。局部。取自《慈濟歷史上的今天》。', 'The medical school under construction, scaffolding and netting still up. Detail. From Tzu Chi, On This Day.') }],
          p: [T('佛教慈濟醫學院籌備委員會成立，在慈院第一會議室召開首次會議。委員都是臨床醫師，對人事規劃、建築設計、課程編排不曾專研。為了吸收各醫院的優缺點，大家決議實地走訪觀摩國內各大醫療院所。', 'The preparatory committee for the Tzu Chi College of Medicine was formed and met for the first time in the hospital’s first meeting room. Its members were all practising doctors with no training in staffing, architecture or curriculum, so they resolved to visit medical institutions around Taiwan and learn from their strengths and weaknesses.'),
            T('會中，上人以「自己揉土、拉胚、窯燒出的杯子，喝起來比較甜」為喻。一九九二年三月二十八日動土，一九九四年十月十六日創校開學。', 'At the meeting the Master offered a comparison: a cup you knead, throw and fire yourself tastes sweeter to drink from. Ground was broken on 28 March 1992, and the college opened on 16 October 1994.')],
          q: { zh: '唯有自己多充實、蒐集資料，並藉助團體的分工合作，才能克竟其功。', en: 'Only by building up our own knowledge, gathering material and dividing the work as a team could we see it through.', who: T('籌備委員會首次會議紀事', 'Report of the committee’s first meeting') },
          s: ['fm172', 'o941016'] },
        { k: 'story', lay: 'T', h: T('鯉魚潭', 'Liyu Lake'),
          p: [T('大學預定地的事，花蓮縣長到精舍，問是否可以換個地方，列舉了三塊土地，其中一塊在鯉魚潭附近，風景美麗，近百甲。上人繞潭一圈，看那些山和清澈的潭水，實在是念書的好地方。看過之後，上人說這個地方用不得。委員問為什麼，是不是不喜歡。', 'The Hualien County magistrate came to the Abode to ask whether the university site might be moved, and listed three plots of land. One lay near Liyu Lake, close to a hundred hectares of fine scenery. The Master went around the lake and saw the mountains and the clear water: truly a fine place to study. Afterwards she said it could not be used. Commissioners asked why, and whether she disliked it.')],
          q: { zh: '我太喜歡了，就是因為我太喜歡它，所以不忍心佔有它、破壞它！', en: 'I like it too much. It is because I like it so much that I cannot bear to occupy it and damage it!', who: SHANGREN },
          s: ['fm172'] },
        { k: 'story', lay: 'T', date: '2002.05.27–30', h: T('怎樣學', 'How to learn'),
          p: [T('慈濟大學進行全臺首創的「大體模擬手術教學」。大體老師是捐出自己遺體、讓學生學習的人；課程結束後，師生為五位大體老師舉辦感恩追思會。二〇〇三年九月，模擬實境教學手術室和追思堂啟用。', 'Tzu Chi University ran Taiwan’s first simulated surgery course using donated bodies. Those who give their bodies for students to learn from are honoured as teachers. When the course ended, a memorial service of thanks was held for the five of them. A simulated operating theatre and a memorial hall opened in September 2003.'),
            T('學的不只是手術。「醫師還要全程參與人文儀式，與家屬對談，了解大體老師的生平和願望」，先認識這個人，再學習技術。', 'What is learned is more than surgery. Doctors “also take part in the whole humanistic ceremony and talk with the family, learning about the teacher’s life and wishes.” They come to know the person before they learn the technique.')],
          q: { zh: '尤其是與老師及同學們的緊密互動，有一家人的感覺，是我學習生涯中難忘的經驗。', en: 'Above all the close bond with teachers and classmates felt like family. It is something I will not forget from my years of study.', who: T('林佳慧　慈濟大學護理研究所學生', 'Lin Chia-hui, graduate nursing student, Tzu Chi University') },
          s: ['fm258', 'fm172'] },
        { k: 'story', lay: 'T', h: T('不只有醫學', 'More than medicine'),
          p: [T('一九九四年，慈濟醫學院開學，同一年，護理研究所也開始招生。二〇〇〇年，醫學院改制，成為慈濟大學。今天的慈濟大學，不只有醫學：護理、藥學、公衛、社工、心理、傳播、語文、資工、永續防災，都在這裡。',
                'In 1994 the Tzu Chi medical college opened, and that same year its graduate nursing institute took its first students. In 2000 the college became Tzu Chi University. Today it is more than medicine: nursing, pharmacy, public health, social work, psychology, communication, languages, computing and disaster resilience are all here.'),
            T('當年的護專，後來成了科技大學。二〇二四年，兩校合而為一。從五專到博士班，都在這一所大學裡。',
              'The nursing college later became a university of science and technology. In 2024 the two merged. From five-year diplomas to doctorates, all are in this one university.')],
          s: ['fm172', 'tcu', 'tcuu'] },
        { k: 'rec', items: [
          { d: '1994.10.16', zh: '慈濟醫學院創校開學。', en: 'Tzu Chi College of Medicine opens.' },
          { d: '1998.08.01', zh: '慈濟醫學院更名為「慈濟醫學暨人文社會學院」。', en: 'It is renamed Tzu Chi College of Medicine and Humanities.' },
          { d: '1999.08.01', zh: '慈濟護專獲准改制為「慈濟技術學院」。', en: 'The nursing college becomes Tzu Chi College of Technology.' },
          { d: '2000.08.01', zh: '慈濟醫學暨人文社會學院改制為「慈濟大學」。', en: 'The medical college becomes Tzu Chi University.' },
          { d: '2015', zh: '慈濟技術學院改制為慈濟科技大學。', en: 'The College of Technology becomes Tzu Chi University of Science and Technology.' },
          { d: '2024.08.01', zh: '慈濟科技大學與慈濟大學合併。', en: 'The two universities merge.' }
        ], s: ['fm172', 'tcu', 'i0', 'o880326'] }
      ] },

    /* ───── 第三段 ───── */
    { id: 'e3a', era: 'e90', y: '1990–99', nav: T('教聯會', 'Teachers’ association'),
      ask: T('媽媽，不是慈濟的學校，也能教這些嗎？', 'Mama, can schools that aren’t Tzu Chi schools teach this too?'),
      b: [
        { k: 'story', lay: 'T', date: '1990.10.13', h: T('老師走進來', 'The teachers come'),
          p: [T('下午兩點，慈濟文化中心首次召開北區「慈濟教師專業聯誼會」，由發起人之一陳美羿老師主持。多位老師上臺分享，怎樣把慈濟精神帶入校園。', 'At two in the afternoon, the first northern gathering of teachers met at the Tzu Chi cultural centre, chaired by one of its initiators, the teacher Chen Mei-yi. One after another, teachers described how they were bringing the spirit of Tzu Chi into their schools.'),
            T('百齡國小唐世真老師，時常朗讀慈濟世界小菩薩的故事給學生聽。埔墘國小的校長，帶領一百多位老師前往花蓮參訪。老師們在自己的教室裏，各自開始。', 'At Bailing Elementary, Tang Shih-chen often read children’s Tzu Chi stories aloud to her class. The principal of Puqian Elementary led more than a hundred teachers on a visit to Hualien. Each of them began in their own classroom.')],
          q: { zh: '不只是慈濟需要老師，老師更需要慈濟。', en: 'It is not only that Tzu Chi needs teachers. Teachers need Tzu Chi even more.', who: T('蕭春梅　天母國小老師', 'Hsiao Chun-mei, teacher, Tianmu Elementary School') },
          s: ['fm152'] },
        { k: 'cans', bare: 1, h: T('一個愛心筒', 'A coin tin for love'),
          t: T('桃園南崁國小黃素緞老師，為培養學生「日行一善」的慈悲心念，在班上設置一個愛心筒，向學生闡釋省下吃零食的錢，可幫助窮苦貧困者的意義。', 'To help her pupils form the habit of “one good deed a day”, Huang Su-tuan of Nankan Elementary in Taoyuan set up a coin tin in her classroom, and explained what the money saved from snacks could mean for people in hardship.'),
          note: T('示意畫面，錢幣數量不代表實際金額。', 'An illustration. The number of coins does not represent a real sum.'), s: ['fm152'] },
        { k: 'story', lay: 'R', date: '1992.07.23', h: T('教聯會成立', 'The association is founded'),
          ph: [{ i: 'e_book', c: T('靜思語教學教材《大愛引航》封面。取自《慈濟歷史上的今天》。', 'Cover of Great Love Guiding the Way, a Jing Si Aphorisms teaching text. From Tzu Chi, On This Day.') }],
          p: [T('「慈濟教師聯誼會」（簡稱教聯會）正式成立。靜思語是上人的短句開示，老師們把它編成教材，帶進課堂；一九九九年五月三十一日，教聯會編訂的靜思語教學教材《大愛引航》，由靜思文化正式出版。', 'The Tzu Chi Teachers’ Association was formally founded. Jing Si Aphorisms are the Master’s short teachings, and teachers worked them into lessons. On 31 May 1999 the association’s teaching text, Great Love Guiding the Way, was published.'),
            T('自一九九三年起，又針對兒童、青少年、家長開辦系列課程，其中的大愛媽媽成長班，培訓家長走進校園。時至今日，全球已在九個國家地區成立教聯會。', 'From 1993 a series of courses began for children, teenagers and parents, among them the Da Ai Mothers’ classes. Today teachers’ associations exist in nine countries and regions.')],
          s: ['fm152', 'tzed', 'o920723'] }
      ] },
    { id: 'e3b', era: 'e00', y: '1999–2007', nav: T('從幼稚園到大學', 'From kindergarten to university'),
      ask: T('媽媽，慈濟自己也有小學嗎？', 'Mama, does Tzu Chi have its own primary schools too?'),
      b: [
        { k: 'quote', big: 1, zh: '什麼是完全教育呢？就是從幼稚園、小學、國中、高中到大學，完全連貫。', en: 'What is a complete education? From kindergarten, primary, junior high and senior high to university, wholly connected.', who: SHANGREN, s: ['fm232'] },
        { k: 'story', lay: 'T', date: '2000.08', h: T('我上大學了', 'I’m at university!'),
          p: [T('一九九九年七月十一日，花蓮的慈濟中小學動工。二〇〇〇年八月底，開學了。部分校舍還沒有完成，就先借慈濟大學的教室上課。一年級的小朋友開心地說：「我上大學了！」小學生和大學生能齊聚一堂上課，緣分難得。',
                'Work on the Tzu Chi primary and secondary schools in Hualien began on 11 July 1999. At the end of August 2000 they opened. Part of the campus was not finished, so classes borrowed rooms at Tzu Chi University. The first graders said happily, “I’m at university!” Primary pupils and university students sharing one campus was a rare affinity.')],
          s: ['fm233'] },
        { k: 'story', lay: 'T', date: '2000', h: T('反哺', 'What the child gave back'),
          p: [T('一位徐媽媽，在家教孩子靜思語。有一次孩子犯錯，她發了脾氣。孩子道歉之後，對她說：「不要拿別人的錯誤來懲罰自己。」她說，這是「教學相長」，和孩子一起成長。',
                'A mother surnamed Xu taught her child Jing Si Aphorisms at home. Once, when the child did wrong, she lost her temper. After apologising, the child told her, “Don’t punish yourself for someone else’s mistake.” She said teaching and learning had grown together, and she was growing with her child.')],
          s: ['fm233'] },
        { k: 'story', lay: 'T', date: '2000', h: T('還有四年就退休', 'Four years from retirement'),
          p: [T('蘇啟民老師，還有四年就可以從公立學校退休，夫妻倆還是放棄北部熟悉的環境，來到慈濟任教。',
                'Teacher Su Chi-min was four years from retiring from the public schools. The couple still left the familiar north to teach at Tzu Chi.')],
          q: { zh: '老師應具備一顆柔軟的心，尊重孩子的差異性，耐心等待孩子成長，對孩子永不放棄！', en: 'A teacher should have a soft heart, respect each child’s differences, wait patiently for them to grow, and never give up on them.', who: T('蘇啟民老師', 'Su Chi-min, teacher') },
          s: ['fm233'] },
        { k: 'story', lay: 'T', date: '2000.10.28', h: T('教育完全化', 'Education at every stage'),
          p: [T('慈濟教育完全化慶祝活動進行揭碑剪綵。「慈濟為臺灣第一所達成教育完全化的機構。」從托兒所到大學，一條學習的路接了起來。', 'A celebration marked education at every stage. “Tzu Chi is the first institution in Taiwan to reach education at every stage.” From nursery to university, one path of learning now ran unbroken.'),
            T('慈濟大學校長藍忠孚說明，所謂「教育完全化」，是要培育學生大愛精神，這是一個全人教育；以醫師而言，只看到「病」而看不到「人」，不是慈濟教育所期待的。', 'Lan Chung-fu, the university’s president, explained that this meant cultivating great love in students, an education of the whole person. A doctor who sees only the illness and not the patient is not what Tzu Chi education hopes for.')],
          s: ['fm233'] },
        { k: 'rec', items: [
          { d: '1999.07.11', zh: '慈濟醫學暨人文社會學院附設實驗中小學暨幼稚園舉行動工典禮。', en: 'Groundbreaking for the affiliated experimental primary and secondary schools and kindergarten.' },
          { d: '2000.08', zh: '花蓮慈濟附屬中小學招生入學。', en: 'The affiliated schools in Hualien take their first pupils.' },
          { d: '2002.08.30', zh: '慈大實小附幼開學，八月一日招生。', en: 'The attached kindergarten opens, having enrolled from 1 August.' },
          { d: '2005.06.25', zh: '臺南慈濟中小學動土。', en: 'Groundbreaking for the Tainan Tzu Chi schools.' },
          { d: '2007.08.01', zh: '臺南慈濟中小學創校。', en: 'The Tainan Tzu Chi schools are founded.' }
        ], s: ['fm233', 'fm312'] },
        { k: 'story', lay: 'T', date: '2007', h: T('臺南的孩子', 'The children of Tainan'),
          p: [T('二〇〇七年，在臺南市政府和地方人士的邀請下，臺南的慈濟小學和中學也開學了。這裡的孩子，學茶道、花道、手語，也讀靜思語。',
                'In 2007, at the invitation of the Tainan city government and local people, Tzu Chi primary and secondary schools opened in Tainan too. Children here learn tea, flower arranging and sign language, and read Jing Si Aphorisms.')],
          s: ['fm312'] }
      ] },

    /* ───── 第四段 ───── */
    { id: 'e4a', era: 'e00', y: '1999–2016', nav: T('教育不能放鬆', 'Education cannot be let go'),
      ask: T('媽媽，學校倒了，怎麼辦？', 'Mama, what happens when the school falls down?'),
      b: [
        { k: 'story', lay: 'L', date: '1999.10', h: T('三十間組合宿舍', 'Thirty prefabricated dormitories'),
          ph: [{ i: 'e_hall', c: T('九二一地震後受損的校舍走廊。局部，學校名稱未載。取自《慈濟歷史上的今天》。', 'A damaged school corridor after the 21 September earthquake. Detail; the school is not named. From Tzu Chi, On This Day.') }],
          p: [T('一九九九年九月二十一日地震之後，許多學校面臨重建或遷校。十月五日，慈濟著手「希望工程」的復建與認養事宜。沿革記載，上人認為「社會的希望在教育，所以教育不能中斷」。', 'After the earthquake of 21 September 1999, many schools faced rebuilding or relocation. On 5 October, Tzu Chi began work on its Project Hope. The record notes the Master’s view: society’s hope lies in education, so education must not stop.'),
            T('十月七日，慈濟營建人員到南投竹山高中實地測量，將搭建三十間組合宿舍，十一日動工。這是希望工程援建災區學校的第一步。', 'On 7 October, Tzu Chi’s construction staff surveyed Zhushan Senior High School in Nantou for thirty prefabricated dormitories, and work began on the 11th. This was the first step of Project Hope in the disaster area.')],
          q: { zh: '校長，教育很重要，遇到了九二一這樣的事，教育還是不能放鬆。', en: 'Principal, education matters. Even when something like the 921 earthquake happens, education still cannot be let go.', who: T('證嚴上人　2012 年志工早會，憶及當年與臺中新社國小黃世忠校長的談話', 'Dharma Master Cheng Yen, recalling in 2012 her words to Principal Huang Shih-chung of Xinshe Elementary, Taichung') },
          s: ['fm219', 'fm221'] },
        { k: 'rise', bare: 1, a: 'e_hall', b2: 'e_new', y: T('1999 年 9 月 21 日之後', 'After 21 September 1999'),
          n: '51', u: T('所學校', 'schools'), t: T('最終，慈濟援建九二一希望工程共有五十一所學校。', 'In the end, Tzu Chi built fifty-one schools under Project Hope after the earthquake.'),
          note: T('先是受損校舍局部，後是希望工程校舍局部。校名未載，兩張不是同一所學校。', 'First a damaged school, then a Project Hope school, both in detail. Neither is named, and they are not the same school.'), s: ['fm219', 'o990921'] },
        { k: 'story', lay: 'R', date: '2000.01–04', h: T('陪到重建完成', 'Staying until the rebuilding is done'),
          ph: [{ i: 'e_steel', c: T('希望工程校舍的鋼構與吊車。局部，學校名稱和施工日期未載。取自《慈濟歷史上的今天》。', 'Steel frame and crane at a Project Hope school. Detail; school and date not given. From Tzu Chi, On This Day.') }],
          p: [T('校舍之外，還有人。二〇〇〇年一月八日，慈濟教聯會九十八位老師首次拜會南投國小、大成國小、竹山國小及東勢國小。一月二十二日，教聯會計畫長期陪伴災區學校完成重建，在臺中分會首度舉辦「福田續緣」聯誼會，召募一百多位退休教職員加入。', 'Beyond the buildings there were the people. On 8 January 2000, ninety-eight teachers of the association made their first visit to four elementary schools. On 22 January, planning to stay with the schools until rebuilding was complete, the association held a first gathering in Taichung and recruited more than a hundred retired teachers and staff.'),
            T('三月二十五日起，教聯會前往中部十四所中小學，舉辦為期三個月的師親生成長班。四月十日，豐原市豐東國中舉行校舍重建動工典禮，是希望工程援建學校中率先興建的一所。', 'From 25 March the association ran three-month classes for teachers, parents and pupils at fourteen schools in central Taiwan. On 10 April, Fengdong Junior High in Fengyuan held its groundbreaking, the first of the Project Hope schools to be built.')],
          s: ['fm219'] },
        { k: 'story', lay: 'L', date: '2016.03.12', h: T('減災希望工程', 'Project Hope for disaster reduction'),
          ph: [{ i: 'e_ping', c: T('屏東「減災希望工程」校舍局部。取自《慈濟歷史上的今天》。', 'Part of a school in Pingtung’s disaster reduction project. From Tzu Chi, On This Day.') }],
          p: [T('希望工程沒有停在地震之後。二〇一四年，慈濟啟動減災希望工程，在高雄、苗栗、臺東、花蓮、屏東五縣市，展開二十六所老舊校舍重建。二月十三日，慈濟認養屏東縣五所老舊學校；二〇一六年三月十二日，五校校舍在屏東市公正國中舉行聯合啟用儀式。', 'Project Hope did not end with the earthquake. In 2014 Tzu Chi began rebuilding twenty-six ageing schools in five counties and cities: Kaohsiung, Miaoli, Taitung, Hualien and Pingtung. On 13 February it took on five schools in Pingtung, and on 12 March 2016 their new buildings opened together at Gongzheng Junior High.')],
          s: ['fm367', 'o160312'] }
      ] },

    /* ───── 第五段 ───── */
    { id: 'e5a', era: 'e20', y: '1997–2025', nav: T('海外的學校', 'Schools abroad'),
      ask: T('媽媽，沒有學校的地方呢？', 'Mama, what about places with no school at all?'),
      b: [
        { k: 'story', lay: 'T', date: '1994.09.10', h: T('週末的教室', 'Weekend classrooms'),
          p: [T('一九九四年九月十日，第一所慈濟人文學校，在美國洛杉磯開學，第一次招生就有三百四十人報名。週末的教室裡，海外的孩子學中文，上課前先學靜思語。',
                'On 10 September 1994 the first Tzu Chi humanities school opened in Los Angeles, and 340 children signed up in the first intake. In weekend classrooms, children overseas learned Chinese, and began each lesson with Jing Si Aphorisms.'),
            T('志工王梅英，堅持讓女兒週末來上課。女兒讀大三時，抱著她說了一句話。',
              'Wang Mei-ying, a volunteer, kept her daughter coming every weekend. In her third year at college, the daughter hugged her and said this.')],
          q: { zh: '媽媽，還好你堅持讓我一直在這邊讀慈濟，我才發現，中文對我真的很重要。', en: 'Mama, I’m glad you kept me at Tzu Chi all along. Now I see how much Chinese matters to me.', who: T('王梅英的女兒', 'Wang Mei-ying’s daughter') },
          s: ['o970907'] },
        { k: 'story', lay: 'L', date: '2005.05', h: T('海外第一所', 'The first abroad'),
          ph: [{ i: 'e_cm', c: T('泰國清邁慈濟學校鳥瞰。拍攝日期未載。取自《慈濟歷史上的今天》。', 'Aerial view of the Tzu Chi School in Chiang Mai, Thailand. Date not given. From Tzu Chi, On This Day.') }, { i: 'e_cmb', c: T('清邁慈濟學校校舍局部。取自《慈濟歷史上的今天》。', 'Part of the school buildings. From Tzu Chi, On This Day.') }],
          p: [T('一九九七年，慈濟「泰北三年扶困計劃」結束，轉而著手當地的教育問題，成立建校籌備會。二〇〇二年四月二十七日，泰國清邁慈濟學校小學部動工，這是慈濟於海外興辦的第一所學校。', 'In 1997 Tzu Chi’s three-year aid project in northern Thailand ended, and attention turned to local schooling. A preparatory committee was formed, and on 27 April 2002 work began on the primary section of the Tzu Chi School in Chiang Mai, the first school Tzu Chi founded abroad.'),
            T('二〇〇五年五月十四日上午八時，五十九位學生從十位老師手中接下課本，完成啟蒙儀式；沿革記五月十六日小學部正式開學。二〇〇八年三月十五日，首屆三十六位畢業生完成小學學業。二〇一二年五月三十一日，中學部校舍落成啟用。', 'At eight on the morning of 14 May 2005, fifty-nine pupils took their books from the hands of ten teachers in an opening ceremony; the school’s record gives 16 May as the first day of classes. On 15 March 2008 the first thirty-six pupils completed primary school, and the secondary buildings opened on 31 May 2012.')],
          s: ['fm295', 'o050516'] },
        { k: 'story', lay: 'T', date: '2007.11', h: T('大廚的理髮社', 'The head cook’s barber club'),
          p: [T('清邁慈濟學校的大廚蘇文天，當了六年級「理髮社」的指導老師。十二位學生利用午休時間練習，後來已能獨當一面，到熱水塘的安養院，為爺爺們理髮。',
                'Su Wentian, the head cook at the Chiang Mai school, became the teacher of a sixth-grade barber club. Twelve pupils practised in their lunch breaks, until they could work on their own, cutting the hair of old men at a care home.')],
          q: { zh: '他們會幫老人家理髮、搥背、打掃，且都很有禮貌，實在是充滿希望。', en: 'They cut the old people’s hair, pat their backs, clean, and are so polite. It is truly full of hope.', who: SHANGREN },
          s: ['fm295'] },
        { k: 'story', lay: 'T', date: '2015.10.18', h: T('全場翻譯', 'Interpreting for the room'),
          p: [T('清邁慈濟中學第一屆畢業生劉志達，後來到慈濟大學讀英美語文學系。二〇一五年十月十八日，泰國貴賓來到花蓮，大二的他，擔任全場翻譯。',
                'Liu Chih-ta, of the first class to graduate from the Chiang Mai secondary school, went on to read English at Tzu Chi University. On 18 October 2015 guests from Thailand came to Hualien, and the second-year student interpreted for the whole gathering.')],
          s: ['fm386'] },
        { k: 'story', lay: 'T', date: '2015', h: T('沙漠中的泉源', 'A spring in the desert'),
          p: [T('二〇一五年一月二十三日，土耳其慈濟志工協助敘利亞籍主麻教授，在蘇丹加濟市成立滿納海中小學，土耳其第一所半公立敘利亞中小學。阿拉伯文 Menahel，字義是「沙漠中的泉源」，象徵知識如泉湧。', 'On 23 January 2015, Tzu Chi volunteers in Türkiye helped the Syrian professor Juma found the Menahel School in Sultangazi, the first semi-public Syrian school in the country. Menahel in Arabic means a spring in the desert, a sign of knowledge flowing without end.'),
            T('校區借用土耳其一般學校，上午是土耳其學生上課，下午由敘利亞籍教師為敘利亞學生授課。當時約有一千八百位學子。有些難民子弟需要在工廠工作或留在家裏做手工補貼家計，慈濟發給家庭生活補助金，約等於打工費用，讓他們能專心求學。', 'The school borrowed Turkish school buildings, with Turkish pupils in the morning and Syrian pupils in the afternoon, taught by Syrian teachers. There were about 1,800 students then. Some children had been working in factories or doing piecework at home to help their families, so Tzu Chi gave a family allowance roughly equal to those wages, so that they could concentrate on school.'),
            T('十四歲的加桑曾在鞋廠工作，願望是當一位工程師。有了補助，三兄妹終於能去滿納海學校讀書。', 'Ghassan, fourteen, had worked in a shoe factory and hoped to become an engineer. With the support, he and his two siblings could at last go to Menahel.')],
          q: { zh: '我會很認真讀書，但如果有多餘的時間我還是會去打工，幫忙承擔家裏的費用，減輕母親的負擔。', en: 'I will study very hard, but if I have spare time I will still go out to work, to help with the family’s costs and lighten my mother’s load.', who: T('加桑', 'Ghassan') },
          s: ['fm381'] },
        { k: 'rec', items: [
          { d: '2017.08.09', zh: '慈濟承租大樓作為滿納海學校校舍，九月二十五日正式開學。', en: 'Tzu Chi leases a building for the school, which opens there on 25 September.' },
          { d: '2018.11.26', zh: '獲土耳其教育部核准成立，改稱「滿納海國際學校」。', en: 'Approved by the Turkish Ministry of Education and renamed Menahel International School.' }
        ], s: ['fm381'] },
        { k: 'lights', bare: 1, n: 272, big: T('超過 272 所', 'More than 272'), t: T('截至二〇二五年底，慈濟在全球十八個國家地區援建超過兩百七十二所學校。', 'By the end of 2025, Tzu Chi had helped build more than 272 schools in 18 countries and regions.'),
          note: T('一點代表一所學校，排列不代表地理位置。', 'Each dot is one school. Their arrangement does not show geography.'), s: ['i5'] }
      ] },
    { id: 'e5b', era: 'my', y: '1998–2006', nav: T('山上的宿舍', 'Dormitories in the hills'),
      ask: T('媽媽，我們這裡，也有走很遠才到學校的孩子嗎？', 'Mama, are there children here who walk a long way to school?'),
      b: [
        { k: 'story', lay: 'T', date: '1998–2006', h: T('沙巴蘭巴達', 'Lanbada, Sabah'),
          p: [T('一九九八年，沙巴志工因義診之緣，接觸當地原住民杜順族。孩子要走八到十個小時的山路，才能到達當地唯一的正規小學蘭巴達，家長只能讓孩子寄宿學校旁的簡陋宿舍。宿舍沒有水、電、供食，孩子們常以鹽巴配飯充飢。志工隨即協助修繕宿舍，並提供生活物資。', 'In 1998, a free clinic brought Sabah volunteers into contact with the Dusun people. The only regular primary school, at Lanbada, lay eight to ten hours’ walk away by mountain path, so children boarded in a rough dormitory beside it, with no water, electricity or meals. They often ate rice with salt. Volunteers repaired the building and brought supplies.'),
            T('二〇〇三年，沙巴大學慈青（慈濟的大專青年）梁慧敏等人啟動「原住民清寒寄宿生關懷及領養計劃」，每月送物資、輔導課業。這裡的領養是宿舍關懷計劃，不是法律上的收養。截至二〇〇六年，沙大慈青共關懷哥打馬魯都、根地咬及科優露三地六間中小學宿舍，幫助原住民學童讀到高中畢業、進入護士學院，「甚至有兩位考上沙巴大學，也加入慈青的行列」。', 'In 2003 the Tzu Chi Collegiate Youth at Universiti Malaysia Sabah, prompted by Liang Huimin, began a care and sponsorship plan for Indigenous boarders, bringing supplies and tutoring every month. Here “sponsorship” means caring for the dormitories, not legal adoption. By 2006 they served six school dormitories in Kota Marudu, Keningau and Kiulu, and helped children finish secondary school and enter nursing college. Two “won places at Universiti Malaysia Sabah and joined the Collegiate Youth themselves.”')],
          s: ['xlbd'] },
        { k: 'story', lay: 'T', date: '2005–06', h: T('士拉央', 'Selayang'),
          p: [T('士拉央緬甸難民宗教學校的孩童，出生在馬來西亞，但礙於難民身分，無法接受國民正規教育。二〇〇五年七月，慈濟吉隆坡支會補助學校場地租金及教師薪資。慈青學長和拉曼大學慈青也到校教學，協助輔導課業。', 'The children of the Myanmar refugee religious school in Selayang were born in Malaysia, but as refugees they could not enter the national school system. In July 2005, Tzu Chi’s Kuala Lumpur office began paying the school’s rent and teachers’ salaries. Senior Collegiate Youth and students from Universiti Tunku Abdul Rahman came to teach and to help with homework.'),
            T('二〇〇六年起，慈青每月兩次赴校教學。教聯會的老師考慮他們也要以課業為重，一同投入承擔。李思齊認為，孩子們缺少的只是一個機會。', 'From 2006 they came twice a month. The teachers’ association, aware that the students had their own studies, joined in and shared the load. The children, Li Siqi felt, lacked only a chance.')],
          q: { zh: '教導孩子們寫字，握住他們的手，和他們一起溫習課業，那種感覺，是非常特別的。', en: 'Teaching the children to write, holding their hands, going over their lessons with them: the feeling is very special.', who: T('李思齊　慈青', 'Li Siqi, Tzu Chi Collegiate Youth') },
          s: ['xlsl'] }
      ] },

    /* ───── 第六段 ───── */
    { id: 'e6a', era: 'my', y: '1995–2019', nav: T('好話一句', 'A good word'),
      ask: T('媽媽，馬來西亞的老師，也走進來了嗎？', 'Mama, did the teachers in Malaysia come too?'),
      b: [
        { k: 'story', lay: 'T', date: '1995–96', h: T('好話一句', 'A good word'),
          ph: [{ i: 'e_talk', c: T('1996年4月20日，馬六甲教聯會於吉隆坡巴生中華獨立中學主辦靜思語教學心得講座。（局部。照片：馬六甲分會提供）', '20 April 1996: the Malacca Teachers’ Association holds a talk on teaching with Jing Si Aphorisms at Chung Hua Independent High School, Klang. (Detail. Photo: Malacca Branch)') }],
          p: [T('一九九五年八月，臺灣教聯會老師來到馬來西亞各地，推廣靜思語教學。九月二日，海外第一個教聯會在馬六甲成立。一九九六年七月七日，吉隆坡慈濟教聯會也正式成立。', 'In August 1995 teachers from Taiwan travelled across Malaysia to share teaching with Jing Si Aphorisms. On 2 September, the first overseas teachers’ association was founded in Malacca, and the Kuala Lumpur association followed on 7 July 1996.'),
            T('起步並不順利。「靜思語」三字在一般學校常被誤會，一位教師用一句「口說好話如口吐蓮花」，家長認為蓮花代表佛教，到學校抗議。後來，老師們把靜思語教學改稱「好話一句教學」，繼續以交流和教學成果，取得學校和家長的認同。', 'The start was not smooth. The name was often misunderstood in ordinary schools. One teacher’s line about good words being like lotus flowers from the mouth brought parents to the school in protest, since the lotus stood for Buddhism to them. The teachers renamed the work “A Good Word” teaching, and went on winning the understanding of schools and parents through exchange and results.')],
          q: { zh: '我始終認為真金不怕洪爐火，好的東西終究會被接納。', en: 'I have always believed that true gold fears no furnace. Good things will be accepted in the end.', who: T('李潔雲　吉隆坡教聯會教師', 'Li Jieyun, Kuala Lumpur Teachers’ Association') },
          s: ['fm465', 'fm152', 'xlhh'] },
        { k: 'story', lay: 'T', date: '2005.03.05', h: T('大愛媽媽走進教室', 'Da Ai Mothers in the classroom'),
          p: [T('吉隆坡大愛媽媽首屆成長班開課，「共有59位學員」，學習用故事、話劇、手語和美勞陪孩子認識好話。推動小組奔走吉隆坡和巴生的華小，十月八日，首次進入十五碑聖德華小。', 'The first Da Ai Mothers’ class in Kuala Lumpur began with 59 participants, learning to share good words with children through stories, drama, sign and craft. The team went from school to school in Kuala Lumpur and Klang, and on 8 October entered their first, the Shengde Chinese primary school.'),
            T('初期常在禮堂面對上百名學生，檢討之後，二〇〇七年起改為小班制。她們又設計好話箱，讓學生把讚美、肯定與感恩寫下投入。進校的學校，至二〇一九年時增加至十三所。', 'At first they often faced a hall of a hundred or more, and from 2007, after review, they moved into classes. They also made a box where pupils could post notes of praise and thanks. By 2019 the schools they visited had grown to thirteen.')],
          s: ['xlmm'] },
        { k: 'story', lay: 'L', date: '2014–15', h: T('放下藤鞭', 'Laying down the cane'),
          ph: [{ i: 'e_board', c: T('吉隆坡志工林泰伸前往士拉央宗教學校，投入難民教育。（局部。照片：李文傑）', 'Kuala Lumpur volunteer Lin Taishen teaching refugee children at the religious school in Selayang. (Detail. Photo: Li Wenjie)') }],
          p: [T('教聯會教師林泰伸校長，是吉隆坡第一屆靜思語種子老師成長教室的學員。認識靜思語之後，他不再採用藤鞭教育。二〇一四年七月退休，十月加入馬來文翻譯團隊。志工多次試讀、回饋，二〇一五年九月，馬來文靜思語正式出版。', 'Principal Lin Taishen was in the first training class for Jing Si Aphorisms teachers in Kuala Lumpur. After encountering the aphorisms, he stopped using the cane. He retired in July 2014 and in October joined the Malay translation team. After rounds of test readings by volunteers, the Malay edition appeared in September 2015.'),
            T('退休之後，他又走進士拉央宗教學校，投入難民教育。', 'After retiring he also went to the religious school in Selayang, to teach refugee children.')],
          q: { zh: '我就是相信上人所說的，能付出是一種福報，所以我把壓力變成一種推動力。', en: 'I simply believe what the Master says, that being able to give is a blessing, so I turned the pressure into something that moved me forward.', who: T('林泰伸', 'Lin Taishen') },
          s: ['xlts'] }
      ] },
    { id: 'e6b', era: 'my', y: '2001–2014', nav: T('大愛幼兒園', 'Da Ai kindergartens'),
      ask: T('媽媽，這麼小的孩子，要學什麼？', 'Mama, what do children so small need to learn?'),
      b: [
        { k: 'story', lay: 'T', date: '2012.10', h: T('奶瓶裝米', 'Baby bottles full of rice'),
          p: [T('二〇〇一年起，馬來西亞也有了慈濟的幼兒園。家長把孩子送來接受人文薰陶，也開始期待更完善的教育體系。',
                'From 2001, Malaysia too had Tzu Chi kindergartens. Parents sent their children for a humanities grounding, and began to hope for a fuller school system.'),
            T('二〇一二年十月，檳城、峇六拜、北海、高淵四所大愛幼兒園，推動「奶瓶米撲滿」。孩子把不再用的奶瓶，拿來裝米。三十位孩子戒掉了奶瓶，大家一共募集了七十四桶米撲滿，用來籌募教育中心和洗腎中心的建設基金。',
              'In October 2012 four Da Ai kindergartens, in Penang, Bayan Lepas, Butterworth and Nibong Tebal, ran a baby-bottle rice bank. The children filled the bottles they no longer used with rice. Thirty children gave up the bottle, and together they gathered 74 buckets, to help raise funds for an education centre and a dialysis centre.')],
          q: { zh: '有一些他6歲的時候，還會使用奶瓶，來喝奶，這習慣不可以把它帶到小學。', en: 'Some still drink milk from a bottle at six. That habit can’t come with them to primary school.', who: T('大愛幼兒園老師 張麗婷', 'Zhang Liting, Da Ai kindergarten teacher') },
          s: ['fm465', 'o121001'] },
        { k: 'story', lay: 'L', date: '2007.01.01', h: T('一間排屋', 'A terrace house'),
          ph: [{ i: 'e_ctr', c: T('2007年1月1日，吉隆坡首間大愛兒童教育中心於班丹英達啟用。（局部。照片：李文傑）', '1 January 2007: Kuala Lumpur’s first Da Ai Children’s Education Centre opens in Pandan Indah. (Detail. Photo: Li Wenjie)') }, { i: 'e_sink', c: T('老師們教導學童如何珍惜水資源，強調良好生活教育的養成。（局部。照片：顏倩妮）', 'Teachers show the children how to value water, building good habits for daily life. (Detail. Photo: Yan Qianni)') }],
          p: [T('二〇〇四年，吉隆坡慈濟人期盼設立大愛兒童教育中心，但在寸土寸金的市中心，適合的地點不易找到。郭家坤夫婦了解教育理念後，無償提供班丹英達的雙層排屋。老師到馬六甲大愛幼兒園實習，志工按幼兒的需要裝修：矮洗手盆、迷你馬桶、隔音門窗。二〇〇七年一月一日，中心啟用，「專為四歲至六歲幼兒量身訂造」。', 'In 2004, Tzu Chi volunteers in Kuala Lumpur hoped to open a children’s education centre, but a suitable site in the costly city was hard to find. Having understood the idea, Guo Jiakun and his wife offered a double-storey terrace house in Pandan Indah free of charge. Teachers trained at the Da Ai kindergarten in Malacca, and volunteers fitted it out for small children: low basins, tiny toilets, soundproof doors and windows. It opened on 1 January 2007, tailored to children of four to six.'),
            T('二〇一三年一月，中心更名大愛幼兒園；二〇一四年六月，甲洞大愛幼兒園開課。', 'The centre became a Da Ai kindergarten in January 2013, and Kepong followed in June 2014.')],
          s: ['xlkd'] },
        { k: 'story', lay: 'R', h: T('一碗鹽巴飯', 'A bowl of rice with salt'),
          ph: [{ i: 'e_water', c: T('學童觀看中國甘肅乾旱影片，在惜水體驗課程讓孩子們親自擔水，瞭解日常生活中滴水得來不易。（局部。照片：羅秀蓮）', 'After a film on drought in Gansu, China, the children carry water themselves and learn how hard each drop is to come by. (Detail. Photo: Luo Xiulian)') }],
          p: [T('課程不只認字。孩子親自擔水，學習重複用水；回到家，「在幫媽媽洗菜時，孩子還會提醒媽媽，剩下的水能澆花」。老師發現許多孩子挑食，便以鹽巴飯代替營養午餐，透過影片讓孩子知道沙巴山區原住民孩童的寄宿生活，學習珍惜每一餐，也感恩有上學的機會。山上的宿舍，就這樣走進了吉隆坡幼兒園的課堂。', 'Lessons go beyond letters. The children carry water and learn to use it twice, and at home, “helping their mothers wash vegetables, the children remind them that the leftover water can go on the flowers.” Seeing how many were picky eaters, teachers replaced lunch with rice and salt and showed a film about Indigenous boarders in the Sabah hills, so the children would value each meal and be grateful for school. The dormitories in the hills reach a kindergarten classroom in Kuala Lumpur.')],
          s: ['xlkd'] }
      ] },
    { id: 'e6c', era: 'my', y: '2015–2025', nav: T('吉隆坡慈濟國際學校', 'Tzu Chi International School Kuala Lumpur'),
      ask: T('媽媽，幼兒園畢業以後呢？', 'Mama, what comes after kindergarten?'),
      b: [
        { k: 'story', lay: 'T', date: '2016–18', h: T('五元便當、椰漿飯', 'Five-ringgit lunches and nasi lemak'),
          p: [T('幼兒園之後，家長和老師希望人文教育能接下去。一所學校，要靠眾人一點一滴蓋起來。', 'Parents and teachers wanted this education to continue after kindergarten. A school had to be built drop by drop, by many hands.'),
            T('志工胡桂雲二〇一六年八月起推動每份五元的素食愛心便當，所得援助水災；在閩南語中，「5元」音近「有緣」。二〇一七年籌募建校基金後，她把義賣所得全數捐給建校基金。', 'From August 2016 the volunteer Hu Guiyun sold five-ringgit vegetarian lunches for flood relief. In Hokkien, “five ringgit” sounds like “having an affinity”. Once the school fund began in 2017, she gave all the proceeds to it.'),
            T('謝曉秋鼓勵母親劉泗妹以素食義賣響應。一生沒有機會受教育的劉泗妹，製作素參峇辣椒醬、阿雜，後來的素粽與椰漿飯也常搶購一空。醫師林連水的病人拉克瑪妮聽聞義賣，「一家七人徹夜未眠，準備500份椰漿飯」。', 'Xie Xiaoqiu encouraged her mother, Liu Simei, to take part with vegetarian food. Having never had the chance of schooling herself, she made sambal and acar, and later her rice dumplings and nasi lemak sold out too. A patient of Dr Lin Lianshui heard about the sale, and “her family of seven stayed up all night preparing 500 packets of nasi lemak.”')],
          q: { zh: '只要我還健在，就算吉隆坡慈濟國際學校已經落成，或我已經圓滿榮董，我都要繼續募款。', en: 'As long as I am alive, even after the school is finished, I will keep on raising funds.', who: T('劉泗妹', 'Liu Simei') },
          s: ['xlfd', 'xlsc'] },
        { k: 'story', lay: 'L', date: '2020.01.06', h: T('開學', 'First day'),
          ph: [{ i: 'e_kl', c: T('2020年1月6日，吉隆坡慈濟國際學校啟用開學。（局部。照片：莊貴賀）', '6 January 2020: Tzu Chi International School Kuala Lumpur opens. (Detail. Photo: Zhuang Guihe)') }],
          p: [T('二〇一五年十二月二日，馬來西亞政府將吉隆坡市土地批准予雪隆慈濟分會辦校；二〇一六年三月十八日取得教育部的國際學校辦校准證。二〇一七年九月十六日動土，占地三點一公頃。二〇二〇年一月六日開學，首批迎來七百五十名學生。', 'On 2 December 2015 the Malaysian government approved land in Kuala Lumpur for the school, and on 18 March 2016 the Ministry of Education granted a permit for an international school. Ground was broken on 16 September 2017 on 3.1 hectares. It opened on 6 January 2020 with 750 students.'),
            T('開學才兩個多月，疫情和行動管制令就讓學校停課。老師重新排時間表，研究教學軟體，把課搬到線上。音樂、美術、體育和人文課都保留下來，每週還有一堂心理輔導；圖書館開了得來速，讓學生借書。', 'Barely two months later, the pandemic and the Movement Control Order closed the school. Teachers redrew the timetable, learned new software and moved lessons online. Music, art, sport and humanities all stayed, with a weekly counselling lesson, and the library opened a drive-through for borrowing.')],
          note: T('首屆學生七百五十位；校舍全部竣工後，預計可容納三千五百位學生。', 'The first intake was 750 pupils. Once fully built, the school is expected to hold 3,500.'),
          s: ['fm465', 'xlsc'] },
        { k: 'online', bare: 1, q: T('同時，校方要求，師生在家中線上學習，仍必須穿制服、梳妝整齊。', 'At the same time, the school required teachers and students learning online at home still to wear uniform and be neatly groomed.'),
          who: T('《馬來西亞慈濟史 雪隆分會》', 'History of Tzu Chi Malaysia'), note: T('示意畫面，人物只畫輪廓。', 'An illustration. Figures are outlines only.'), s: ['xlsc'] },
        { k: 'story', lay: 'T', date: '2020.09', h: T('在家裏下廚', 'Cooking at home'),
          p: [T('學校舉辦素食烹飪比賽，學生事先錄下自己下廚的過程，交由評審篩選。校長林秀莉在頒獎典禮上對學生說了這句話。', 'The school held a vegetarian cooking contest. Students recorded themselves at the stove for the judges. At the prize-giving, Principal Lin Xiuli said these words to them.')],
          q: { zh: '你們勇於接受挑戰，而且都做得非常棒，你們讓我很震撼。', en: 'You took on the challenge bravely and you all did wonderfully. You have amazed me.', who: T('林秀莉　吉隆坡慈濟國際學校校長（2020 年 9 月大愛新聞，見慈濟法脈資料庫 00465）', 'Lin Xiuli, principal (Da Ai News, Sept 2020; Dharma Lineage Archive no. 00465)') },
          s: ['fm465'] },
        { k: 'story', lay: 'T', date: '1997–2025', h: T('讀下去', 'Staying in school'),
          p: [T('校舍之外，還有許多孩子要靠一筆助學金才讀得下去。慈濟獎助學金計劃自一九九七年推動，截至二〇二五年，累計惠及森美蘭、馬六甲及柔佛三州共五萬六千七百四十九名學生，發放總金額達一千五百三十二萬令吉。二〇二五年十一月二日，馬六甲又有六百零九位來自各族群的中小學生受惠。', 'Beyond the schools are the many children who stay in class because of a bursary. Tzu Chi’s bursary plan began in 1997, and by 2025 had reached 56,749 students in Negeri Sembilan, Malacca and Johor, with RM15.32 million given out. On 2 November 2025 in Malacca, 609 more primary and secondary pupils of every community received theirs.'),
            T('商學系三年級的白雯詩，二十三歲，每週工作四天，二〇二四年二月起獲得補助。她也參與食物銀行的服務。受過幫助的人，也開始幫助別人。', 'Bai Wenshi, twenty-three and in her third year of business studies, works four days a week and has had support since February 2024. She also serves at a food bank. Those who have been helped begin to help others.')],
          q: { zh: '幫助別人，其實也讓自己變得更有力量。', en: 'Helping others also makes you stronger yourself.', who: T('白雯詩　大學生', 'Bai Wenshi, university student') },
          s: ['mycz'] },
        { k: 'story', lay: 'T', h: T('我聽得懂', 'Now I understand'),
          p: [T('學校之外，還有課輔班。馬六甲的一位五年級孩子這樣說。',
                'Outside the schools there are tutoring classes. A fifth grader in Melaka put it this way.')],
          q: { zh: '老師教得比較慢，我聽得懂；小班教學我也敢問問題。', en: 'The teacher goes slowly, so I understand. In a small class I dare to ask questions.', who: T('馬六甲課輔班學生', 'A pupil at the Melaka tutoring class') },
          s: ['mycz'] }
      ] },

    /* ───── 數字、全記錄 ───── */
    { id: 'enum', era: 'num', y: '數字', yen: 'Numbers', h: T('數字裡的教育', 'Education in numbers'), nav: T('數字', 'Numbers'),
      b: [
        { k: 'ledger' },
        { k: 'dist', h: T('教育機構全球分布', 'Tzu Chi education institutions worldwide'), w: T('統計截至 2024.12.31', 'to 31 Dec 2024'), my: T('其中在馬來西亞', 'of which in Malaysia'), all: T('全球', 'Worldwide'),
          note: T('各類性質不同，不相加成一個總數。', 'These are different kinds of institution and are not added into one total.'), s: ['tced'],
          rows: [[T('人文學校', 'Humanities schools'), 36, 0], [T('幼兒園', 'Kindergartens'), 25, 10], [T('中小學', 'Primary and secondary schools'), 7, 1], [T('安親班', 'After-school care'), 4, 4], [T('高中', 'Senior high schools'), 2, 0], [T('托兒所', 'Nurseries'), 2, 0], [T('大學', 'University'), 1, 0], [T('中醫學院', 'College of Chinese Medicine'), 1, 0], [T('小學', 'Primary school'), 1, 0], [T('靜思華語學院', 'Jing Si Chinese language school'), 1, 0]] },
        { k: 'bars', h: T('臺灣獎助學金受惠人次', 'Scholarships and bursaries in Taiwan: recipients'), u: T('人次', 'person-times'), s: ['rep'], rows: [[2022, 22913], [2023, 23976], [2024, 31871], [2025, 26507]] },
        { k: 'bars', h: T('臺灣獎助學金支出', 'Scholarships and bursaries in Taiwan: spending'), u: T('新臺幣元', 'NT$'), s: ['rep'], rows: [[2021, 440225846], [2022, 411088465], [2023, 389801439], [2024, 379913037], [2025, 343282753]] },
        { k: 'bars', h: T('教育志業支出', 'Education mission: spending'), u: T('新臺幣元', 'NT$'), s: ['rep'], rows: [[2021, 829869834], [2022, 715452701], [2023, 842754777], [2024, 840886980], [2025, 716312976]] }
      ] },
    { id: 'eall', era: 'all', y: '全記錄', yen: 'Archive', h: T('全記錄', 'The full record'), lead: T('六段路之外的日期和原始出處，都在這裡。', 'Dates and original sources beyond the six stretches are all here.'), nav: T('全記錄與影片', 'Archive and films'),
      b: [{ k: 'films' }, { k: 'records' }, { k: 'sources' }] }
  ];

  CH.blocks = [
    { id: 'e1', y: '1988–89', h: T('山腳下的一所學校', 'A school at the foot of the mountains'), ch: ['e1a'], cover: 'e_gate', tun: 'e_b1' },
    { id: 'e2', y: '1989–2003', h: T('學會專業，也學會待人', 'Learning a profession, and how to treat people'), ch: ['e2a', 'e2b'], cover: 'e_med', tun: 'e_b2' },
    { id: 'e3', y: '1990–2007', h: T('走進每一間教室', 'Into every classroom'), ch: ['e3a', 'e3b'], cover: 'e_book', tun: 'e_b3' },
    { id: 'e4', y: '1999–2016', h: T('教育不能放鬆', 'Education cannot be let go'), ch: ['e4a'], cover: 'e_frame', tun: 'e_b4' },
    { id: 'e5', y: '1997–2025', h: T('一張可以讀書的桌子', 'A desk to study at'), ch: ['e5a', 'e5b'], cover: 'e_cm', tun: 'e_b5' },
    { id: 'e6', y: T('馬來西亞', 'Malaysia'), h: T('在馬來西亞', 'In Malaysia'), ch: ['e6a', 'e6b', 'e6c'], cover: 'e_kl', tun: 'e_b6' }
  ];
  CH.ui = {
    hubK: T('教育', 'Education'), hubH: T('六段路，從護專走到吉隆坡', 'Six stretches, from a nursing college to Kuala Lumpur'),
    hubS: T('一段一段走。走完一段，就蓋一個章。', 'Walk them one at a time. Each one you finish earns a stamp.'),
    start: T('從這裡開始', 'Start here'), walked: T('走過了', 'Walked'), nextTun: T('下一個時空隧道', 'Next time tunnel'), nextOf: T('下一段', 'Next'),
    back: T('回六段路', 'Back to the six stretches'), road: T('回八大腳印', 'Back to the Eight Footprints'), skip: T('跳過', 'Skip'),
    left: T('這一段還有', 'Still ahead'), leftU: T('個故事', 'stories'), seg: T('第 {n} 段／共 6 段', 'Part {n} of 6'), done: T('走完了這一段', 'You finished this part'),
    recH: T('教育沿革', 'Timeline')
  };

  CH.ledger = [
    { h: T('起步', 'The start'), rows: [
      { n: '107', u: T('位', 'students'), l: T('慈濟護專首屆新生', 'First intake of the nursing college'), w: T('1989', '1989'), s: 'fm115', big: 1 }
    ] },
    { h: T('慈濟大學、慈大附中、臺南慈中', 'Tzu Chi University and its schools'), rows: [
      { n: '8,916', u: T('位學生', 'students'), l: T('慈濟大學 4,994、慈大附中 1,991、臺南慈中 1,931', 'University 4,994; Hualien schools 1,991; Tainan schools 1,931'), w: T('2025 學年度，截至 2025.09.30', '2025 school year, to 30 Sep 2025'), s: 'tced', big: 1 },
      { n: '781', u: T('位教師', 'teachers'), l: T('慈濟大學 492、慈大附中 145、臺南慈中 144', 'University 492; Hualien schools 145; Tainan schools 144'), w: T('2025 學年度，截至 2025.09.30', '2025 school year, to 30 Sep 2025'), s: 'tced' },
      { n: '660', u: T('位職員', 'staff'), l: T('慈濟大學 556、慈大附中 65、臺南慈中 39', 'University 556; Hualien schools 65; Tainan schools 39'), w: T('2025 學年度，截至 2025.09.30', '2025 school year, to 30 Sep 2025'), s: 'tced' },
      { n: '55,318', u: T('位', 'graduates'), l: T('歷屆畢業生：慈濟大學 36,578、慈大附中 9,679、臺南慈中 9,061；慈大與慈濟科大 2024 年合併，畢業生合併計算', 'All graduates: University 36,578; Hualien schools 9,679; Tainan schools 9,061. Figures for the two universities merged in 2024 are combined'), w: T('截至 2026.06.30', 'to 30 Jun 2026'), s: 'tced', big: 1 },
      { n: '2,351', u: T('位', 'graduates'), l: T('2025 學年度畢業生：慈濟大學 1,310、慈大附中 529、臺南慈中 512', '2025 school year graduates: University 1,310; Hualien schools 529; Tainan schools 512'), w: T('2025 學年度', '2025 school year'), s: 'tced' }
    ] },
    { h: T('援建學校', 'Schools built'), rows: [
      { n: '51', u: T('所', 'schools'), l: T('九二一希望工程援建', 'Project Hope after the 1999 earthquake'), w: T('1999 年起', 'from 1999'), s: 'fm219', big: 1 },
      { n: '超過 272', nen: 'Over 272', u: T('所', 'schools'), l: T('全球 18 個國家地區援建', 'Built in 18 countries and regions'), w: T('截至 2025 年底', 'to end 2025'), s: 'i5', big: 1 }
    ] },
    { h: T('馬來西亞', 'Malaysia'), rows: [
      { n: '56,749', u: T('名學生', 'students'), l: T('森美蘭、馬六甲、柔佛三州助學累計受惠', 'Reached by bursaries in Negeri Sembilan, Malacca and Johor'), w: T('1997 年起，截至 2025 年', '1997 to 2025'), s: 'mycz', big: 1 },
      { n: '1,532 萬', nen: 'RM15.32 million', u: T('令吉', 'ringgit'), l: T('上述三州發放總金額', 'Total given out in those three states'), w: T('截至 2025 年', 'to 2025'), s: 'mycz' },
      { n: '750', u: T('位', 'students'), l: T('吉隆坡慈濟國際學校首屆招收', 'First intake of the Kuala Lumpur school'), w: T('2020.01', 'Jan 2020'), s: 'xlsc' },
      { n: '13', u: T('所', 'schools'), l: T('吉隆坡大愛媽媽進校的學校', 'Schools visited by Da Ai Mothers in Kuala Lumpur'), w: T('至 2019 年', 'to 2019'), s: 'xlmm' }
    ] }
  ];
  CH.ledgerNote = T('人次：同一人多次受惠，每次都算一次。三州助學的「名學生」，原文未說明是否已跨年去重。各項來源和統計範圍不同，不互相加總。本頁不列全球與全馬助學總數，以及教聯會人數，目前查不到確值。', 'Person-times count each occasion, so one person may be counted more than once. The source for the three-state bursaries does not say whether students are de-duplicated across years. Sources and scopes differ, so figures are not added together. Worldwide and all-Malaysia bursary totals and association membership are left out, as no firm figures are available.');

  CH.films = [
    { id: 'iw7aKjxEgqQ', zh: '籌設慈濟護專', en: 'Planning the nursing college', y: '1988' },
    { id: 'CYFJp71G8jE', zh: '慈濟護專創校', en: 'The nursing college opens', y: '1989' },
    { id: '6f0NSdMs3Oc', zh: '慈濟教師聯誼會成立', en: 'The Teachers’ Association is founded', y: '1992' },
    { id: '9WtwGThB9lE', zh: '九二一大地震', en: 'The 921 earthquake', y: '1999' },
    { id: 'oDmH4B90NQQ', zh: '慈濟大學首創「大體模擬手術教學」', en: 'Simulated surgery teaching begins', y: '2002' },
    { id: 'SXVYH8HBNvQ', zh: '泰國清邁慈濟學校創校', en: 'The Tzu Chi School in Chiang Mai', y: '2005' },
    { id: 'bfDHNZyw9l0', zh: '土耳其慈濟開辦「滿納海中小學」', en: 'The Menahel School in Türkiye', y: '2015' },
    { id: '23SXzZSSLD8', zh: '馬來西亞吉隆坡慈濟國際學校創校', en: 'Tzu Chi International School Kuala Lumpur', y: '2020' }
  ];

  CH.filters = [['all', T('全部', 'All')], ['first', T('第一次', 'Firsts')], ['school', T('建校', 'Schools')], ['teach', T('老師', 'Teachers')], ['quake', T('九二一', 'Earthquake')], ['abroad', T('海外', 'Abroad')], ['my', T('馬來西亞', 'Malaysia')]];
  CH.records = [
    ['1988.03.26', 'first school', '慈濟基金會向教育部提出慈濟護專申請設立。', 'The foundation applies to establish the nursing college.', 'fm115'],
    ['1988.07.31', 'school', '慈濟護專開工典禮。', 'Groundbreaking of the nursing college.', 'fm115'],
    ['1989.06.12', 'school', '慈濟護專奉教育部函准立案。', 'The college’s registration is approved.', 'fm115'],
    ['1989.09.17', 'first school', '慈濟護專舉行創校開學典禮。', 'The nursing college opens.', 'fm115'],
    ['1989.10.25', 'first', '慈濟「懿德母姊會」成立。', 'The Yide Mothers and Sisters Association is formed.', 'fm115'],
    ['1990.09.19', 'school', '佛教慈濟醫學院籌備委員會正式成立。', 'The preparatory committee for the medical college is formed.', 'fm172'],
    ['1990.10.13', 'first teach', '首次召開北區「慈濟教師專業聯誼會」。', 'The first northern gathering of teachers.', 'fm152'],
    ['1992.03.28', 'school', '慈濟醫學院舉行動土典禮。', 'Groundbreaking of the medical college.', 'fm172'],
    ['1992.07.23', 'teach', '慈濟教師聯誼會正式成立。', 'The Teachers’ Association is founded.', 'fm152'],
    ['1994.09.10', 'first abroad', '第一所慈濟人文學校在美國洛杉磯開學。', 'The first Tzu Chi humanities school opens in Los Angeles.', 'o970907'],
    ['1994.10.16', 'school', '慈濟醫學院創校開學。', 'The medical college opens.', 'fm172'],
    ['1995.09.02', 'first teach my', '海外第一個慈濟教師聯誼會在馬六甲成立。', 'The first overseas Teachers’ Association is founded in Malacca.', 'fm152'],
    ['1996.07.07', 'teach my', '吉隆坡慈濟教聯會正式成立。', 'The Kuala Lumpur Teachers’ Association is founded.', 'xlhh'],
    ['1999.05.31', 'teach', '靜思語教學教材《大愛引航》出版。', 'Great Love Guiding the Way is published.', 'fm152'],
    ['1999.07.11', 'school', '附設實驗中小學暨幼稚園動工典禮。', 'Groundbreaking of the affiliated schools.', 'fm233'],
    ['1999.10.07', 'quake', '慈濟營建人員前往竹山高中測量，將搭建三十間組合宿舍；十一日動工。', 'Survey at Zhushan Senior High for thirty prefabricated dormitories; work begins on the 11th.', 'fm219'],
    ['1999.10.29', 'quake', '啟動「災後重建安心計劃籌備會議」，籌備志工陪伴災區校園師生。', 'Planning begins for volunteers to stay with schools in the disaster area.', 'fm219'],
    ['2000.01.22', 'quake teach', '教聯會首度舉辦「福田續緣」聯誼會，召募一百多位退休教職員。', 'The association recruits over a hundred retired teachers and staff.', 'fm219'],
    ['2000.04.10', 'quake school', '豐東國中舉行校舍重建動工典禮。', 'Fengdong Junior High holds its groundbreaking.', 'fm219'],
    ['2000.08.01', 'school', '慈濟醫學暨人文社會學院改制為慈濟大學。', 'The medical college becomes Tzu Chi University.', 'fm172'],
    ['2000.08.30', 'first school', '花蓮慈濟附屬中小學開學，部分校舍未完成，先借慈濟大學教室上課。', 'The Hualien primary and secondary schools open, borrowing university classrooms.', 'fm233'],
    ['2000.10.28', 'first school', '慈濟教育完全化慶祝活動。', 'Celebration of education at every stage.', 'fm233'],
    ['2001', 'my', '馬來西亞開始設立慈濟幼兒園。', 'Tzu Chi kindergartens begin in Malaysia.', 'fm465'],
    ['2002.04.27', 'first abroad school', '慈濟於海外興辦的第一所學校，泰國清邁慈濟學校小學部動工。', 'Work begins on Tzu Chi’s first school abroad, in Chiang Mai.', 'fm295'],
    ['2002.05.27', 'first', '慈濟大學進行全臺首創的大體模擬手術教學（至五月三十日）。', 'Taiwan’s first simulated surgery course (to 30 May).', 'fm258'],
    ['2002.08.30', 'school', '慈大實小附幼開學。', 'The attached kindergarten opens.', 'fm233'],
    ['2003', 'my', '沙大慈青啟動原住民清寒寄宿生關懷及領養計劃。', 'Sabah youth begin the care plan for Indigenous boarders.', 'xlbd'],
    ['2005.03.05', 'first my', '吉隆坡大愛媽媽首屆成長班。', 'The first Da Ai Mothers’ class in Kuala Lumpur.', 'xlmm'],
    ['2005.05.16', 'abroad school', '泰國清邁慈濟學校小學部正式開學。', 'The Chiang Mai primary section opens.', 'fm295'],
    ['2005.10.08', 'my', '吉隆坡大愛媽媽首次入校。', 'Da Ai Mothers enter their first school in Kuala Lumpur.', 'xlmm'],
    ['2007.01.01', 'my', '吉隆坡首間大愛兒童教育中心於班丹英達啟用。', 'Kuala Lumpur’s first children’s education centre opens in Pandan Indah.', 'xlkd'],
    ['2007.08.01', 'school', '臺南慈濟中小學創校。', 'The Tainan schools are founded.', 'fm312'],
    ['2007.11', 'abroad', '清邁慈濟學校成立六年級理髮社，由大廚蘇文天指導。', 'The Chiang Mai school starts a sixth-grade barber club, led by its head cook.', 'fm295'],
    ['2012.10.01', 'my', '檳城等四所大愛幼兒園推動奶瓶米撲滿（至十月二十二日）。', 'Four Da Ai kindergartens in northern Malaysia run the baby-bottle rice bank (to 22 October).', 'o121001'],
    ['2014.02.13', 'school', '慈濟認養屏東縣五所老舊學校。', 'Tzu Chi takes on five ageing schools in Pingtung.', 'fm367'],
    ['2015.01.23', 'abroad school', '土耳其慈濟志工協助成立滿納海中小學。', 'The Menahel School is founded in Türkiye.', 'fm381'],
    ['2015.09', 'my teach', '馬來文靜思語正式出版。', 'The Malay Jing Si Aphorisms is published.', 'xlts'],
    ['2015.12.02', 'my school', '馬來西亞政府將吉隆坡市土地批准予雪隆慈濟分會辦校。', 'Land in Kuala Lumpur is approved for the school.', 'fm465'],
    ['2016.03.12', 'school', '屏東「減災希望工程」五所學校聯合啟用。', 'The five Pingtung schools open.', 'fm367'],
    ['2017.09.16', 'my school', '吉隆坡慈濟國際學校動土。', 'Groundbreaking of the Kuala Lumpur school.', 'fm465'],
    ['2018.11.26', 'abroad', '滿納海學校改稱滿納海國際學校。', 'Menahel becomes an international school.', 'fm381'],
    ['2020.01.06', 'my school', '吉隆坡慈濟國際學校啟用開學。', 'The Kuala Lumpur school opens.', 'fm465'],
    ['2020.06.12', 'my', '吉隆坡慈濟國際學校因疫情停課，規劃線上課程。', 'The Kuala Lumpur school closes for the pandemic and plans online lessons.', 'fm465'],
    ['2024.08.01', 'school', '慈濟科技大學與慈濟大學合併。', 'The two universities merge.', 'o880326'],
    ['2025.11.02', 'my', '馬六甲六百零九位中小學生受惠助學金。', '609 pupils receive bursaries in Malacca.', 'mycz']
  ];

  CH.next = {
    ask: T('大家為什麼拍手？', 'Why is everyone clapping?'),
    stop: T('下一站・環保', 'Next stop: Environmental Protection'),
    href: 'environment.html'
  };
  CH.footer = T('本頁為樣板，尚未經馬來西亞慈濟分會審核，未發佈。女孩與媽媽是說故事的人。照片除另有說明外，取自慈濟《歷史上的今天》公開頁面，已裁成無人局部；標示「示意」的畫面為插畫，非當年實物。「」內為原文照錄。', 'Sample only: not yet reviewed by Tzu Chi Malaysia and not published. The girl and her mother are storytellers. Unless stated otherwise, photographs come from Tzu Chi’s public On This Day pages and are cropped to details without people. Images marked as illustrations are drawings, not historical objects. Words inside quotation marks are reproduced from the sources.');

  /* 翻書隧道：全用 walk:'book'。dir 1 往回翻，-1 往前翻 */
  window.TUN_M = window.TUN_M || {};
  var TM = window.TUN_M;
  var bk = function (dir, ids, x) { var o = { walk: 'book', dir: dir, d: 3400, ids: ids.map(function (i) { return 'ed_' + i; }), bg: '#1a120a', tint: '#b58a3e', a0: 0, a1: .12, ink: '#f7eedd', plate: 'rgba(26,18,10,', pa: .72 }; if (x) Object.keys(x).forEach(function (k) { o[k] = x[k]; }); return o; };
  TM.e_b1 = bk(1, ['kl', 'ctr', 'ping', 'new', 'frame', 'hall', 'book', 'med', 'gate', 'sign'], { d: 3900 });
  TM.e_b2 = bk(-1, ['sign', 'site', 'hero', 'gate', 'med', 'book']);
  TM.e_b3 = bk(-1, ['med', 'book', 'talk', 'board', 'sink', 'ctr']);
  TM.e_b4 = bk(-1, ['frame', 'hall', 'steel', 'cmb', 'new', 'ping']);
  TM.e_b5 = bk(-1, ['steel', 'cmb', 'new', 'cm', 'ping', 'kl']);
  TM.e_b6 = bk(-1, ['talk', 'board', 'ctr', 'sink', 'water', 'kl']);

  /* 六個滾動效果、統計圖、影片清單 */
  var api = function () { return CH.api; };
  var cells = function (n) { var s = ''; for (var i = 0; i < n; i++) s += '<i style="--i:' + i + '"></i>'; return s; };
  var hand = function (x, y, a, sp, m) {
    var f = '', k;
    for (k = 0; k < 4; k++) { var an = (k - 1.5) * sp * Math.PI / 180, L = 40 - Math.abs(k - 1.5) * 5, bx = (k - 1.5) * 9; f += 'M' + bx + ' -18L' + (bx + Math.sin(an) * L).toFixed(1) + ' ' + (-18 - Math.cos(an) * L).toFixed(1); }
    f += 'M16 4L' + (16 + Math.cos(sp * Math.PI / 180) * 26).toFixed(1) + ' ' + (4 - Math.sin(sp * Math.PI / 180) * 26).toFixed(1);
    return '<g transform="translate(' + x + ' ' + y + ') rotate(' + a + ') scale(' + (m ? -1 : 1) + ' 1)"><rect x="-18" y="-20" width="36" height="42" rx="15"/><path d="' + f + '"/></g>';
  };
  /* 六個格子：兩隻手的位置，只是舞動的感覺，不對應實際手語 */
  var POSES = [[[66, 110, -14, 8, 0], [134, 110, 14, 8, 1]], [[62, 84, -30, 16, 0], [138, 84, 30, 16, 1]], [[82, 108, 28, 5, 0], [118, 108, -28, 5, 1]], [[60, 66, -8, 20, 0], [140, 120, 62, 10, 1]], [[100, 92, 0, 6, 0], [100, 126, 180, 6, 1]], [[48, 66, -38, 22, 0], [152, 66, 38, 22, 1]]];
  var person = function (x, y, s, c) { return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="' + c + '"><circle cy="-30" r="15"/><path d="M-30 22c0-26 12-36 30-36s30 10 30 36z"/></g>'; };
  CH.R = {
    roll: function (b) {
      var A = api();
      return '<section class="fx fx-rl" data-fx data-n="107" data-a=".2" data-b=".78"><div class="fx-s"><div class="rl-bk"><div class="rl-pg"><p class="rl-h">' + A.B(b.h) + '</p><div class="rl-g" aria-hidden="true">' + cells(107) + '</div><p class="rl-n"><b data-c>107</b> ' + A.B(b.u) + '</p></div><div class="rl-cv" aria-hidden="true">' + A.B(b.cover) + '</div></div>' +
        '<div class="rl-t">' + A.B(b.t, 'p') + '<small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></section>';
    },
    signs: function (b) {
      var A = api();
      var fr = POSES.map(function (p) { return '<svg viewBox="0 0 200 170" aria-hidden="true">' + hand.apply(null, p[0]) + hand.apply(null, p[1]) + '</svg>'; }).join('');
      return '<section class="fx fx-sg" data-fx><div class="fx-s"><div class="sg-top"><p class="sg-d">' + b.d + '</p><h3 class="t">' + A.B(b.h) + '</h3>' + A.B(b.t, 'p', 'sg-p') + '</div>' +
        '<div class="sg-w"><div class="sg-r">' + fr + '</div></div><div class="sg-b"><blockquote class="q"><p class="zh">「' + b.q.zh + '」</p><p class="en" lang="en">“' + b.q.en + '”</p><cite>' + A.B(b.who) + '</cite></blockquote><small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></section>';
    },
    cans: function (b) {
      var A = api(), c = '', i;
      for (i = 0; i < 36; i++) c += '<i style="--i:' + i + ';--x:' + ((i * 37) % 62 - 31) + 'px;--y:' + Math.floor(i / 3) * 15 + 'px"></i>';
      return '<section class="fx fx-cn" data-fx><div class="fx-s"><div class="cn-w"><div class="cn-can" aria-hidden="true"><div class="cn-in">' + c + '</div></div><div class="cn-t"><h3 class="t">' + A.B(b.h) + '</h3>' + A.B(b.t, 'p') + '<small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></div></section>';
    },
    rise: function (b) {
      var A = api();
      return '<section class="fx fx-ri" data-fx><div class="fx-s"><img class="ri-a" src="assets/ph/' + b.a + '.jpg" alt=""><img class="ri-b" src="assets/ph/' + b.b2 + '.jpg" alt=""><div class="ri-y">' + A.B(b.y) + '</div>' +
        '<div class="ri-t"><p class="ri-n"><b>' + b.n + '</b> ' + A.B(b.u) + '</p>' + A.B(b.t, 'p') + '<small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></section>';
    },
    lights: function (b) {
      var A = api();
      return '<section class="fx fx-lt" data-fx data-n="' + b.n + '" data-a=".06" data-b=".82"><div class="fx-s"><div class="lt-w"><div class="lt-g" aria-hidden="true">' + cells(b.n) + '</div><div class="lt-t"><p class="lt-n">' + A.B(b.big) + '</p>' + A.B(b.t, 'p') + '<small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></div></section>';
    },
    online: function (b) {
      var A = api(), room = '', tiles = '', r, c, n = 0;
      for (r = 0; r < 2; r++) for (c = 0; c < 4; c++) room += '<g>' + person(150 + c * 112 - r * 6, 196 + r * 94, r ? 1.1 : .95, '#6b5a43') + '<rect x="' + (112 + c * 112 - r * 6) + '" y="' + (214 + r * 94) + '" width="' + (r ? 86 : 76) + '" height="9" rx="3" fill="#a98a5e"/></g>';
      for (n = 0; n < 9; n++) tiles += '<div class="ol-c' + (n === 4 ? ' tc' : '') + '" style="--i:' + n + '"><svg viewBox="-50 -56 100 84" aria-hidden="true">' + person(0, 0, 1, n === 4 ? '#e0b56a' : '#c7d3c7') + '<path d="M-9 -14L0 2L9 -14" fill="none" stroke="#1d2a24" stroke-width="3" stroke-linejoin="round"/></svg></div>';
      return '<section class="fx fx-ol" data-fx><div class="fx-s"><div class="ol-s"><svg class="ol-a" viewBox="0 0 640 340" aria-hidden="true"><rect x="170" y="26" width="300" height="90" rx="4" fill="#3d5a4b"/>' + room + '</svg><div class="ol-b">' + tiles + '</div></div>' +
        '<div class="ol-t"><blockquote class="q"><p class="zh">「' + b.q.zh + '」</p><p class="en" lang="en">“' + b.q.en + '”</p><cite>' + A.B(b.who) + '</cite></blockquote><small>' + A.B(b.note) + '</small>' + A.srcs(b.s) + '</div></div></section>';
    },
    dist: function (b) {
      var A = api(), mx = 36;
      return '<div class="ed-ch"><h3>' + A.B(b.h) + '</h3><p class="ed-w">' + A.B(b.w) + '</p><p class="ed-k"><span><i class="k1"></i>' + A.B(b.all) + '</span><span><i class="k2"></i>' + A.B(b.my) + '</span></p>' +
        b.rows.map(function (r) {
          return '<div class="ed-r"><span class="ed-l">' + A.B(r[0]) + '</span><span class="ed-b"><i class="k1" style="width:' + (r[1] / mx * 100).toFixed(1) + '%"></i>' + (r[2] ? '<i class="k2" style="width:' + (r[2] / mx * 100).toFixed(1) + '%"></i>' : '') + '</span><b>' + r[1] + (r[2] ? '<small>' + r[2] + '</small>' : '') + '</b></div>';
        }).join('') + A.B(b.note, 'p', 'ed-n') + A.srcs(b.s) + '</div>';
    },
    bars: function (b) {
      var A = api(), mx = Math.max.apply(null, b.rows.map(function (r) { return r[1]; }));
      return '<div class="ed-ch"><h3>' + A.B(b.h) + '</h3><p class="ed-w">' + A.B(b.u) + '</p>' +
        b.rows.map(function (r) { return '<div class="ed-r yr"><span class="ed-l">' + r[0] + '</span><span class="ed-b"><i class="k1" style="width:' + (r[1] / mx * 100).toFixed(1) + '%"></i></span><b>' + r[1].toLocaleString('en-US') + '</b></div>'; }).join('') + A.srcs(b.s) + '</div>';
    },
    films: function () {
      var A = api();
      return '<h3 class="h4"><span class="zh">影片</span><span class="en" lang="en">Films</span></h3><div class="ed-fl">' + CH.films.map(function (x) {
        return '<a href="https://www.youtube.com/watch?v=' + x.id + '" target="_blank" rel="noopener"><b>' + x.y + '</b>' + A.B(x) + '</a>';
      }).join('') + '</div>';
    }
  };

  var fx = [], reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  /* 螢幕太矮、一屏放不下文字時，這一格改成照順序讀完，不釘住 */
  var fit = '';
  function measure() {
    fx.forEach(function (e) {
      e.classList.remove('flat');
      var s = e.querySelector('.fx-s');
      if (reduce || s.scrollHeight > s.clientHeight + 1) e.classList.add('flat');
    });
  }
  CH.onWire = function () {
    fx = [].slice.call(document.querySelectorAll('[data-fx]')); fit = '';
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { fit = ''; CH.onFrame(); });
    CH.onFrame();
  };
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
