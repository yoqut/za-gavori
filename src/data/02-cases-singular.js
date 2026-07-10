// Kategoriya 2 — Predlog-kelishik tizimi, BIRLIK (kitobning 24–84-betlari)

export default {
  id: "cases-sg",
  emoji: "🧩",
  title: "Kelishiklar — birlik",
  desc: "Rus tilining yuragi. Otning oxiri gapdagi vazifasiga qarab o'zgaradi — 6 ta kelishik, bittalab o'rganamiz.",
  lessons: [
    /* ---------------------------------------------------------------- */
    {
      id: "cases-overview",
      title: "Kelishik nima va nega kerak?",
      subtitle: "Boshlashdan oldin katta rasmni ko'rib olaylik. Bu dars butun bo'limning xaritasi.",
      blocks: [
        {
          t: "p",
          text: "O'zbek tilida ham kelishik bor: <i>kitob, kitob<b>ni</b>, kitob<b>ga</b>, kitob<b>da</b>, kitob<b>dan</b>, kitob<b>ning</b></i>. Ya'ni tushuncha siz uchun yangi emas — so'z oxiri gapdagi vazifasiga qarab o'zgaradi.",
        },
        {
          t: "p",
          text: "Rus tilida ham xuddi shunday, <b>6 ta kelishik</b> bor. Ikkita farq bilan:",
        },
        {
          t: "callout",
          tone: "info",
          title: "Rus kelishigining ikki qiyinligi",
          text: "<b>1.</b> Qo'shimcha otning <b>jinsiga</b> qarab har xil bo'ladi. O'zbekchada «-da» hamma so'zga bir xil qo'shiladi; rus tilida «в столе́», lekin «в кни́ге», «в тетра́ди».<br><b>2.</b> Ko'pincha <b>predlog</b> (в, на, о, к, с...) ham kerak bo'ladi, va qaysi predlog qaysi kelishikni «boshqarishi» yodlanadi.",
        },
        {
          t: "table",
          caption: "6 ta kelishik — umumiy ko'rinish",
          head: ["Kelishik", "Savol", "Asosiy ma'no", "Misol"],
          rows: [
            ["<b>Имени́тельный</b><br>(bosh)", "Кто? Что?", "gap egasi — lug'atdagi shakl", "Э́то <b class='hl'>стол</b>."],
            ["<b>Предло́жный</b><br>(o'rin)", "Где? О ком?", "qayerda; kim haqida", "на <b class='hl'>столе́</b>"],
            ["<b>Вини́тельный</b><br>(tushum)", "Кого́? Что? Куда́?", "to'ldiruvchi; qayoqqa", "Я ви́жу <b class='hl'>стол</b>."],
            ["<b>Да́тельный</b><br>(jo'nalish)", "Кому́? Чему́?", "kimga berilyapti", "Я иду́ к <b class='hl'>врачу́</b>."],
            ["<b>Роди́тельный</b><br>(qaratqich)", "Кого́? Чего́?", "kimniki; yo'q; qayerdan", "У <b class='hl'>бра́та</b> есть..."],
            ["<b>Твори́тельный</b><br>(vosita)", "Кем? Чем?", "nima bilan; kim bilan", "с <b class='hl'>бра́том</b>"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Nega shu tartibda o'rganamiz?",
          text: "Darslik <b>predlog kelishigidan</b> boshlaydi (bosh kelishikdan keyin), chunki u eng oson — deyarli har doim <b>-е</b> qo'shimchasi. Keyin asta-sekin murakkablashadi. Bu tartib maktabdagi «1-2-3-4-5-6» tartibidan yaxshiroq.",
        },
        {
          t: "callout",
          tone: "warn",
          title: "Bitta muhim ogohlantirish",
          text: "Kelishikni <b>yodlab</b> emas, <b>ishlatib</b> o'rganasiz. Har darsda mashqlarni albatta bajaring — jadvalni 10 marta o'qigandan ko'ra, 10 ta gap tuzgan foydali.",
        },
        {
          t: "quiz",
          q: "«Где?» savoliga qaysi kelishik javob beradi?",
          options: ["Именительный", "Предложный", "Винительный", "Творительный"],
          answer: 1,
          hint: "«Где?» — joy. Bu predlog kelishigi (в/на + -е).",
        },
        {
          t: "quiz",
          q: "Rus tilida nechta kelishik bor?",
          options: ["4", "5", "6", "7"],
          answer: 2,
          hint: "Oltita: именительный, родительный, дательный, винительный, творительный, предложный.",
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "prepositional",
      title: "1. Предложный падеж — qayerda?",
      subtitle: "Eng oson kelishik. Deyarli hamma narsa -е ga aylanadi. Va u faqat predlog bilan ishlatiladi.",
      blocks: [
        {
          t: "callout",
          tone: "info",
          title: "Nomi nima uchun shunday?",
          text: "«Предложный» = «predlogli». Bu kelishik <b>hech qachon predlogsiz ishlatilmaydi</b>. Uchta predlog bor: <b>в</b>, <b>на</b>, <b>о</b>.",
        },
        {
          t: "table",
          caption: "Uchta vazifa",
          head: ["Ma'no", "Savol", "Predlog", "Misol"],
          rows: [
            ["Joy", "Где?", "в, на", "в университе́те · на столе́"],
            ["Fikr/nutq mavzusi", "О ком? О чём?", "о (об)", "о сестре́ · об Украи́не"],
            ["Vaqt", "Когда́?", "в, на", "в сентябре́ · на неде́ле"],
          ],
        },

        { t: "h", text: "Qo'shimchalar" },
        {
          t: "table",
          caption: "Bosh kelishik → Predlog kelishigi",
          head: ["Jins", "Bosh kelishik", "Predlog kelishigi", "O'zgarish"],
          rows: [
            ["<b>он</b>", "студе́нт, стол, врач", "о студе́нт<b class='hl'>е</b>, на стол<b class='hl'>е́</b>, о врач<b class='hl'>е́</b>", "+ <b>е</b>"],
            ["", "преподава́тель, музе́й", "о преподава́тел<b class='hl'>е</b>, в музе́<b class='hl'>е</b>", "ь→е, й→е"],
            ["", "планета́рий", "в планета́ри<b class='hl'>и</b>", "ий→<b>ии</b>"],
            ["<b>она́</b>", "сестра́, кни́га", "о сестр<b class='hl'>е́</b>, в кни́г<b class='hl'>е</b>", "а→е"],
            ["", "семья́, пе́сня", "о семь<b class='hl'>е́</b>, в пе́сн<b class='hl'>е</b>", "я→е"],
            ["", "тетра́дь", "в тетра́д<b class='hl'>и</b>", "ь→<b>и</b>"],
            ["", "аудито́рия", "в аудито́ри<b class='hl'>и</b>", "ия→<b>ии</b>"],
            ["<b>оно́</b>", "посо́льство, мо́ре", "в посо́льств<b class='hl'>е</b>, на мо́р<b class='hl'>е</b>", "о→е, е→е"],
            ["", "общежи́тие", "в общежи́ти<b class='hl'>и</b>", "ие→<b>ии</b>"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Qoidani bir jumlaga siqamiz",
          text: "Hamma narsa <b>-е</b>. Uchta holatda esa <b>-и</b>:<br>① ayol jinsi <b>-ь</b> bilan tugasa (тетра́дь → в тетра́д<b>и</b>)<br>② so'z <b>-ий / -ия / -ие</b> bilan tugasa (аудито́рия → в аудито́ри<b>и</b>)<br>③ мать, дочь → о ма́тер<b>и</b>, о до́чер<b>и</b>",
        },
        {
          t: "callout",
          tone: "warn",
          title: "Kichik guruh: -У qo'shimchasi",
          text: "Ba'zi erkak jinsi otlar <b>joy</b> ma'nosida <b>-у́</b> oladi (urg'u bilan):<br>в аэропорт<b class='hl'>у́</b> · в Крым<b class='hl'>у́</b> · на берег<b class='hl'>у́</b> · на мост<b class='hl'>у́</b> · в лес<b class='hl'>у́</b> · в сад<b class='hl'>у́</b> · в шкаф<b class='hl'>у́</b> · на пол<b class='hl'>у́</b> · в угл<b class='hl'>у́</b> · в ряд<b class='hl'>у́</b><br>Lekin <i>mavzu</i> ma'nosida oddiy -е: <b>о ле́се</b> (o'rmon haqida).",
        },

        { t: "h", text: "«В» va «на» — qaysi biri?" },
        {
          t: "p",
          text: "Ikkalasi ham «-da» degani. <b>В</b> = ichida (yopiq joy). <b>На</b> = ustida yoki ochiq joy/tadbir. Lekin bu qoida 100% ishlamaydi — ko'pini yodlash kerak.",
        },
        {
          t: "table",
          caption: "Yodlab olinadigan ro'yxat",
          head: ["Faqat В", "Faqat НА"],
          rows: [
            ["в аудито́рии, в библиоте́ке, в буфе́те, в декана́те, в кафе́, в кла́ссе, в ко́мнате, в коридо́ре, в магази́не, в поликли́нике, в ба́нке, в теа́тре, в университе́те, в шко́ле, в го́роде, в па́рке, в стране́", "на ле́кции, на факульте́те, на уро́ке, на экску́рсии, на выставке, на дискоте́ке, на доске́, на земле́, на мо́ре, на остано́вке, на пло́щади, на ро́дине, на ры́нке, на стене́, на стадио́не, на у́лице, на вокза́ле, на заво́де, на по́чте, на фа́брике"],
          ],
        },
        {
          t: "callout",
          tone: "info",
          title: "Tomonlar — har doim «на»",
          text: "<b>на восто́ке</b> (sharqda), <b>на за́паде</b> (g'arbda), <b>на се́вере</b> (shimolda), <b>на ю́ге</b> (janubda).",
        },
        {
          t: "callout",
          tone: "tip",
          title: "«О» va «об»",
          text: "Keyingi so'z <b>unli</b> bilan boshlansa — <b>об</b>: <i>об Украи́не, об уро́ке, об А́нне</i>.<br>Undosh bilan boshlansa — <b>о</b>: <i>о студе́нте, о кни́ге</i>.",
        },
        {
          t: "examples",
          items: [
            { ru: "— Где ты рабо́таешь? — Я рабо́таю в университе́те.", uz: "— Qayerda ishlaysan? — Universitetda ishlayman." },
            { ru: "Кни́га лежи́т на столе́.", uz: "Kitob stolda yotibdi." },
            { ru: "Мы говори́м о ру́сском языке́.", uz: "Biz rus tili haqida gaplashyapmiz." },
            { ru: "Ле́том я был в Крыму́.", uz: "Yozda men Qrimda edim." },
            { ru: "Я ду́маю о ма́тери.", uz: "Men onam haqida o'ylayapman." },
          ],
        },

        { t: "h", text: "Mashqlar" },
        {
          t: "quiz",
          q: "«Кни́га в ___.» (сумка)",
          options: ["су́мка", "су́мке", "су́мки", "су́мку"],
          answer: 1,
          hint: "Ayol jinsi -а → -е. Va «где?» savoliga javob berayapmiz.",
        },
        {
          t: "quiz",
          q: "«Мы в ___.» (аудитория)",
          options: ["аудито́рие", "аудито́рии", "аудито́рию", "аудито́рия"],
          answer: 1,
          hint: "-ия bilan tugagan so'zlar -ии oladi, -ие emas. Bu tez-tez qilinadigan xato.",
        },
        {
          t: "quiz",
          q: "Qaysi predlog to'g'ri: «Студенты ___ уроке.»",
          options: ["в", "на", "о", "об"],
          answer: 1,
          hint: "«Урок» — har doim «на уроке». Yodlanadigan so'z.",
        },
        {
          t: "quiz",
          q: "«Он рассказывает ___ Украине.»",
          options: ["о", "об", "в", "на"],
          answer: 1,
          hint: "«Украина» unli (У) bilan boshlanadi → «об».",
        },
        {
          t: "fill",
          q: "To'ldiring: «Ру́чка на ___.» (стол)",
          answer: ["столе", "столе́"],
          hint: "Erkak jinsi + е, urg'u oxirga tushadi: на столе́.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Я живу́ в ___.» (общежитие)",
          answer: ["общежитии", "общежи́тии"],
          hint: "-ие → -ии.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Мы говори́м о ___.» (сестра)",
          answer: ["сестре", "сестре́"],
          hint: "-а → -е.",
        },
        {
          t: "match",
          q: "To'g'ri shaklni ulang",
          pairs: [
            ["в шкаф", "в шкафу́"],
            ["в кни́га", "в кни́ге"],
            ["в тетра́дь", "в тетра́ди"],
            ["на мо́ре", "на мо́ре"],
            ["о дочь", "о до́чери"],
          ],
          note: "Chap ustunda — bosh kelishik. O'ngda — predlog kelishigidagi to'g'ri shakl.",
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "accusative",
      title: "2. Винительный падеж — kimni? nimani? qayoqqa?",
      subtitle: "To'g'ri to'ldiruvchi kelishigi. Jonli va jonsiz otlar bu yerda har xil ishlaydi.",
      blocks: [
        {
          t: "table",
          caption: "Asosiy vazifalar",
          head: ["Ma'no", "Savol", "Misol"],
          rows: [
            ["To'g'ri to'ldiruvchi", "Кого́? Что?", "Я чита́ю <b class='hl'>кни́гу</b>."],
            ["Harakat yo'nalishi", "Куда́?", "Я иду́ в <b class='hl'>университе́т</b>."],
            ["Vaqt (davomiylik)", "Как до́лго?", "Я жил там <b class='hl'>год</b>."],
          ],
        },

        { t: "h", text: "Qoida ikkiga bo'linadi" },
        {
          t: "callout",
          tone: "info",
          title: "Eng muhim bo'linish: жи́вое / неживо́е",
          text: "<b>Jonsiz</b> (что?) ot tushum kelishigida <b>o'zgarmaydi</b> — bosh kelishik bilan bir xil.<br><b>Jonli</b> (кого́?) erkak jinsi ot <b>qaratqich kelishigi</b> shaklini oladi (-а/-я).<br>Ayol jinsi otlar esa jonli-jonsizligidan qat'i nazar <b>-у/-ю</b> oladi.",
        },
        {
          t: "table",
          caption: "Tushum kelishigi qo'shimchalari",
          head: ["Jins", "Bosh kelishik", "Tushum kelishigi", "Izoh"],
          rows: [
            ["<b>он</b> jonsiz", "стол, музе́й, слова́рь", "стол, музе́й, слова́рь", "<b>o'zgarmaydi</b>"],
            ["<b>он</b> jonli", "студе́нт, врач", "студе́нт<b class='hl'>а</b>, врач<b class='hl'>а́</b>", "+ а"],
            ["", "преподава́тель", "преподава́тел<b class='hl'>я</b>", "ь → я"],
            ["<b>она́</b>", "кни́га, сестра́", "кни́г<b class='hl'>у</b>, сестр<b class='hl'>у́</b>", "а → <b>у</b>"],
            ["", "пе́сня, семья́", "пе́сн<b class='hl'>ю</b>, семь<b class='hl'>ю́</b>", "я → <b>ю</b>"],
            ["", "тетра́дь, дверь", "тетра́дь, дверь", "<b>o'zgarmaydi</b>"],
            ["<b>оно́</b>", "окно́, мо́ре", "окно́, мо́ре", "<b>hech qachon o'zgarmaydi</b>"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Yaxshi xabar",
          text: "O'rta jins otlar tushum kelishigida <b>hech qachon</b> o'zgarmaydi. Va ayol jinsi <b>-ь</b> bilan tugaganlari ham (тетрадь, дверь, мать... — stop, «мать» istisno: <b>мать → мать</b>, lekin «дочь → дочь»). Ya'ni ish faqat -а/-я va jonli erkaklar bilan.",
        },
        {
          t: "examples",
          items: [
            { ru: "Я чита́ю <b class='hl'>журна́л</b>. (что? jonsiz — o'zgarmadi)", uz: "Men jurnal o'qiyapman." },
            { ru: "Я ви́жу <b class='hl'>студе́нта</b>. (кого́? jonli — +а)", uz: "Men talabani ko'ryapman." },
            { ru: "Я люблю́ <b class='hl'>сестру́</b>. (ayol jinsi — а→у)", uz: "Men singlimni yaxshi ko'raman." },
            { ru: "Я слу́шаю <b class='hl'>му́зыку</b>.", uz: "Men musiqa tinglayapman." },
          ],
        },

        { t: "h", text: "Куда́? — «в» va «на» yana keldi" },
        {
          t: "p",
          text: "Bu yerda mantiq juda toza va uni bir marta tushunsangiz, umrbod eslab qolasiz:",
        },
        {
          t: "table",
          caption: "Где? va Куда́? — juftlik",
          head: ["Savol", "Kelishik", "Misol"],
          rows: [
            ["<b>Где?</b> (qayerda — turibdi)", "Предложный (-е)", "Я в университе́т<b class='hl'>е</b>."],
            ["<b>Куда́?</b> (qayoqqa — ketyapti)", "Винительный (o'zgarmas)", "Я иду́ в университе́т."],
            ["<b>Где?</b>", "Предложный", "Кни́га на стол<b class='hl'>е́</b>."],
            ["<b>Куда́?</b>", "Винительный", "Я кладу́ кни́гу на стол."],
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "Predlog o'zgarmaydi, kelishik o'zgaradi",
          text: "Agar joy «<b>в</b>» bilan bo'lsa — yo'nalish ham «<b>в</b>» bilan. Agar «<b>на</b>» bo'lsa — «<b>на</b>» bilan.<br><i>на уро́к<b>е</b></i> (darsda) → <i>на уро́к</i> (darsga)<br><i>в шко́л<b>е</b></i> (maktabda) → <i>в шко́лу</i> (maktabga)",
        },
        {
          t: "callout",
          tone: "info",
          title: "«Домо́й» va «до́ма» — istisno",
          text: "«Uy» so'zi bu juftlikda predlogsiz ishlaydi:<br><b>до́ма</b> = uyda (где?) · <b>домо́й</b> = uyga (куда?) · <b>из до́ма</b> = uydan",
        },

        { t: "h", text: "Bu fe'llar tushum kelishigini talab qiladi" },
        {
          t: "vocab",
          items: [
            { ru: "чита́ть", uz: "o'qimoq" },
            { ru: "писа́ть", uz: "yozmoq" },
            { ru: "ви́деть", uz: "ko'rmoq" },
            { ru: "слу́шать", uz: "tinglamoq" },
            { ru: "смотре́ть", uz: "tomosha qilmoq" },
            { ru: "люби́ть", uz: "sevmoq" },
            { ru: "знать", uz: "bilmoq" },
            { ru: "изуча́ть", uz: "o'rganmoq" },
            { ru: "покупа́ть", uz: "sotib olmoq" },
            { ru: "де́лать", uz: "qilmoq" },
            { ru: "понима́ть", uz: "tushunmoq" },
            { ru: "встреча́ть", uz: "uchratmoq" },
          ],
        },

        { t: "h", text: "Mashqlar" },
        {
          t: "quiz",
          q: "«Я чита́ю ___.» (книга)",
          options: ["кни́га", "кни́гу", "кни́ге", "кни́ги"],
          answer: 1,
          hint: "Ayol jinsi -а → -у.",
        },
        {
          t: "quiz",
          q: "«Я ви́жу ___.» (студент)",
          options: ["студе́нт", "студе́нта", "студе́нте", "студе́нту"],
          answer: 1,
          hint: "«Студент» — jonli erkak jinsi, demak +а.",
        },
        {
          t: "quiz",
          q: "«Я ви́жу ___.» (стол)",
          options: ["стол", "стола́", "столе́", "столу́"],
          answer: 0,
          hint: "«Стол» — jonsiz. Jonsiz erkak jinsi otlar o'zgarmaydi.",
        },
        {
          t: "quiz",
          q: "«Я иду́ ___.» (школа — maktabga)",
          options: ["в шко́ле", "в шко́лу", "на шко́лу", "в шко́ла"],
          answer: 1,
          hint: "Куда? → tushum kelishigi. «Школа» — «в» bilan, -а → -у.",
        },
        {
          t: "quiz",
          q: "«Мы бы́ли ___.» (урок — darsda edik)",
          options: ["на уро́к", "на уро́ке", "в уро́ке", "в уро́к"],
          answer: 1,
          hint: "«Где?» → predlog kelishigi. Va «урок» har doim «на».",
        },
        {
          t: "fill",
          q: "To'ldiring: «Я люблю́ ___.» (мама)",
          answer: ["маму", "ма́му"],
          hint: "Ayol jinsi: -а → -у.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Он идёт ___.» (уyga — bitta so'z bilan)",
          answer: ["домой", "домо́й"],
          hint: "«Куда?» → домо́й.",
        },
        {
          t: "match",
          q: "Где? yoki Куда́? — to'g'ri shaklni ulang",
          pairs: [
            ["Я живу́ в…", "Москве́"],
            ["Я е́ду в…", "Москву́"],
            ["Кни́га на…", "столе́"],
            ["Положи́ на…", "стол"],
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "dative",
      title: "3. Дательный падеж — kimga?",
      subtitle: "Berish, yordam berish, yoqish, yosh va o'zini his qilish — hammasi shu kelishikda.",
      blocks: [
        {
          t: "table",
          caption: "Asosiy vazifalar",
          head: ["Ma'no", "Savol / predlog", "Misol"],
          rows: [
            ["Adresat (kimga)", "Кому́?", "Я пишу́ <b class='hl'>бра́ту</b>."],
            ["Yosh", "Ско́лько лет?", "<b class='hl'>Бра́ту</b> 20 лет."],
            ["Holat", "—", "<b class='hl'>Мне</b> хо́лодно."],
            ["Yo'nalish (odamga)", "к (ко) + кому́?", "Я иду́ <b class='hl'>к врачу́</b>."],
            ["Bo'ylab / bo'yicha", "по + чему́?", "Я иду́ <b class='hl'>по у́лице</b>."],
          ],
        },
        {
          t: "table",
          caption: "Qo'shimchalar",
          head: ["Jins", "Bosh kelishik", "Jo'nalish kelishigi", "O'zgarish"],
          rows: [
            ["<b>он</b>", "брат, стол", "бра́т<b class='hl'>у</b>, стол<b class='hl'>у́</b>", "+ <b>у</b>"],
            ["", "преподава́тель, музе́й", "преподава́тел<b class='hl'>ю</b>, музе́<b class='hl'>ю</b>", "ь→ю, й→ю"],
            ["<b>она́</b>", "сестра́, кни́га", "сестр<b class='hl'>е́</b>, кни́г<b class='hl'>е</b>", "а→<b>е</b>"],
            ["", "тетра́дь", "тетра́д<b class='hl'>и</b>", "ь→и"],
            ["", "аудито́рия", "аудито́ри<b class='hl'>и</b>", "ия→ии"],
            ["<b>оно́</b>", "окно́, мо́ре", "окн<b class='hl'>у́</b>, мо́р<b class='hl'>ю</b>", "о→у, е→ю"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Xotirada saqlash uchun",
          text: "Erkak va o'rta jins → <b>-у / -ю</b>.<br>Ayol jinsi → <b>-е</b> (predlog kelishigidagi kabi!). Ya'ni <i>сестре́</i> ham «singlisiga», ham «singlisi haqida» (о сестре́) shaklida bir xil ko'rinadi. Predlog va gap mazmuni farqni ko'rsatadi.",
        },

        { t: "h", text: "Olmoshlar jo'nalish kelishigida" },
        {
          t: "table",
          caption: "Bularni yodlash shart — juda ko'p ishlatiladi",
          head: ["Bosh k.", "я", "ты", "он / оно́", "она́", "мы", "вы", "они́"],
          rows: [["Jo'nalish", "мне", "тебе́", "ему́", "ей", "нам", "вам", "им"]],
        },

        { t: "h", text: "Uchta juda muhim konstruksiya" },
        {
          t: "callout",
          tone: "info",
          title: "1. Yosh: «Кому́ ско́лько лет?»",
          text: "Rus tilida «Men 20 yoshdaman» emas, «<b>Menga</b> 20 yil» deyiladi.<br><b>Мне 20 лет.</b> · <b>Бра́ту 25 лет.</b> · <b>Ей 18 лет.</b><br>Sonlardan keyin: 1 — <b>год</b>, 2/3/4 — <b>го́да</b>, 5+ — <b>лет</b>. (21 год, 22 го́да, 25 лет)",
        },
        {
          t: "callout",
          tone: "info",
          title: "2. Holat: «Мне хо́лодно»",
          text: "Sovuq qotsangiz: «<b>Мне</b> хо́лодно» (menga sovuq).<br><b>Мне жа́рко</b> (issiq) · <b>Мне пло́хо</b> (yomon) · <b>Мне ску́чно</b> (zerikarli) · <b>Мне интере́сно</b> (qiziq) · <b>Мне тру́дно</b> (qiyin)",
        },
        {
          t: "callout",
          tone: "info",
          title: "3. Yoqmoq: «нра́виться»",
          text: "«Menga kitob yoqadi» → <b>Мне нра́вится кни́га.</b><br>Diqqat: <b>yoqayotgan narsa gap egasi</b>. Shuning uchun fe'l unga moslashadi:<br><b>Мне нра́вится кни́га.</b> (bitta — нра́вится)<br><b>Мне нра́вятся кни́ги.</b> (ko'p — нра́вятся)<br><b>Мне нра́вится чита́ть.</b> (infinitiv bilan ham)",
        },
        {
          t: "examples",
          items: [
            { ru: "Я звоню́ дру́гу ка́ждый день.", uz: "Men do'stimga har kuni qo'ng'iroq qilaman." },
            { ru: "Преподава́тель объясня́ет студе́нту пра́вило.", uz: "O'qituvchi talabaga qoidani tushuntiryapti." },
            { ru: "За́втра я пойду́ к врачу́.", uz: "Ertaga men shifokorga boraman." },
            { ru: "Мы гуля́ем по па́рку.", uz: "Biz bog' bo'ylab sayr qilyapmiz." },
            { ru: "Ско́лько тебе́ лет? — Мне два́дцать оди́н год.", uz: "Necha yoshdasan? — Men 21 yoshdaman." },
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "Bu fe'llardan keyin — jo'nalish kelishigi",
          text: "<b>дава́ть/дать</b> (bermoq), <b>писа́ть</b> (yozmoq — kimga), <b>звони́ть</b> (qo'ng'iroq qilmoq), <b>помога́ть</b> (yordam bermoq), <b>объясня́ть</b> (tushuntirmoq), <b>говори́ть</b> (aytmoq — kimga), <b>отвеча́ть</b> (javob bermoq), <b>нра́виться</b> (yoqmoq), <b>меша́ть</b> (xalaqit bermoq).",
        },

        { t: "h", text: "Mashqlar" },
        {
          t: "quiz",
          q: "«Я пишу́ ___.» (брат)",
          options: ["брат", "бра́та", "бра́ту", "бра́те"],
          answer: 2,
          hint: "Кому? → erkak jinsi + у.",
        },
        {
          t: "quiz",
          q: "«Я помога́ю ___.» (сестра)",
          options: ["сестру́", "сестре́", "сестры́", "сестро́й"],
          answer: 1,
          hint: "«Помогать» jo'nalish kelishigini talab qiladi. Ayol jinsi -а → -е.",
        },
        {
          t: "quiz",
          q: "«___ 20 лет.» (men 20 yoshdaman)",
          options: ["Я", "Меня́", "Мне", "Мной"],
          answer: 2,
          hint: "Yosh har doim jo'nalish kelishigi bilan: Мне 20 лет.",
        },
        {
          t: "quiz",
          q: "«Мне ___ э́ти кни́ги.»",
          options: ["нра́вится", "нра́вятся", "нра́влюсь", "нра́виться"],
          answer: 1,
          hint: "«Книги» — ko'plik, va u gap egasi. Demak fe'l ko'plikda: нра́вятся.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Я иду́ к ___.» (врач)",
          answer: ["врачу", "врачу́"],
          hint: "«К» + jo'nalish kelishigi. Erkak jinsi + у.",
        },
        {
          t: "fill",
          q: "To'ldiring: «___ хо́лодно.» (menga)",
          answer: ["мне", "Мне"],
          hint: "Holat konstruksiyasi: мне хо́лодно.",
        },
        {
          t: "match",
          q: "Olmoshni jo'nalish kelishigiga ulang",
          pairs: [
            ["я", "мне"],
            ["ты", "тебе́"],
            ["он", "ему́"],
            ["она́", "ей"],
            ["они́", "им"],
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "genitive",
      title: "4. Родительный падеж — kimning? nimaning?",
      subtitle: "Eng ko'p ishlatiladigan va eng ko'p vazifali kelishik. Egalik, yo'qlik, miqdor, «-dan».",
      blocks: [
        {
          t: "callout",
          tone: "warn",
          title: "Bu kelishik uchun vaqt ajrating",
          text: "Родительный — rus tilidagi <b>eng ko'p uchraydigan</b> kelishik. Uning 6 ta asosiy vazifasi bor. Ularni birdaniga emas, bittalab hazm qiling.",
        },
        {
          t: "table",
          caption: "Olti vazifa",
          head: ["#", "Ma'no", "Misol"],
          rows: [
            ["1", "Egalik («-ning»)", "кни́га <b class='hl'>бра́та</b> — akaning kitobi"],
            ["2", "Mavjudlik: <b>у … есть</b>", "У <b class='hl'>меня́</b> есть маши́на."],
            ["3", "Yo'qlik: <b>нет</b>", "У меня́ нет <b class='hl'>маши́ны</b>."],
            ["4", "Miqdor", "мно́го <b class='hl'>студе́нтов</b>, стака́н <b class='hl'>воды́</b>"],
            ["5", "Qayerdan: <b>из, с, от</b>", "Я из <b class='hl'>Узбекиста́на</b>."],
            ["6", "Predloglar: <b>без, для, о́коло, по́сле</b>", "<b class='hl'>по́сле уро́ка</b>"],
          ],
        },

        { t: "h", text: "Qo'shimchalar" },
        {
          t: "table",
          caption: "Bosh kelishik → Qaratqich kelishigi",
          head: ["Jins", "Bosh kelishik", "Qaratqich kelishigi", "O'zgarish"],
          rows: [
            ["<b>он</b>", "студе́нт, стол", "студе́нт<b class='hl'>а</b>, стол<b class='hl'>а́</b>", "+ <b>а</b>"],
            ["", "преподава́тель, музе́й", "преподава́тел<b class='hl'>я</b>, музе́<b class='hl'>я</b>", "ь→я, й→я"],
            ["<b>она́</b>", "сестра́, ко́мната", "сестр<b class='hl'>ы́</b>, ко́мнат<b class='hl'>ы</b>", "а→<b>ы</b>"],
            ["", "кни́га, ру́чка", "кни́г<b class='hl'>и</b>, ру́чк<b class='hl'>и</b>", "г,к,х dan keyin → <b>и</b>"],
            ["", "пе́сня, семья́", "пе́сн<b class='hl'>и</b>, семь<b class='hl'>и́</b>", "я→и"],
            ["", "тетра́дь", "тетра́д<b class='hl'>и</b>", "ь→и"],
            ["<b>оно́</b>", "окно́, мо́ре", "окн<b class='hl'>а́</b>, мо́р<b class='hl'>я</b>", "о→а, е→я"],
          ],
        },

        { t: "h", text: "1. Egalik — «kimning?»" },
        {
          t: "p",
          text: "O'zbekchada «<b>akamning</b> kitobi». Rus tilida tartib teskari: <b class='ru'>кни́га бра́та</b> — «kitob akaning». Egasi <b>keyin</b> keladi va qaratqich kelishigida bo'ladi.",
        },
        {
          t: "examples",
          items: [
            { ru: "Э́то кни́га <b class='hl'>студе́нта</b>.", uz: "Bu talabaning kitobi." },
            { ru: "Центр <b class='hl'>го́рода</b> краси́вый.", uz: "Shahar markazi chiroyli." },
            { ru: "Дверь <b class='hl'>ко́мнаты</b> откры́та.", uz: "Xonaning eshigi ochiq." },
          ],
        },

        { t: "h", text: "2 va 3. «Bor» va «yo'q»" },
        {
          t: "callout",
          tone: "info",
          title: "«У меня́ есть…» konstruksiyasi",
          text: "Rus tilida «menda bor» deyish uchun: <b>у + qaratqich kelishigi + есть + bosh kelishik</b>.<br><b>У меня́ есть брат.</b> — Mening akam bor.<br><b>У бра́та есть маши́на.</b> — Akamning mashinasi bor.",
        },
        {
          t: "callout",
          tone: "warn",
          title: "Inkor: «есть» → «нет» va ot qaratqichga o'tadi",
          text: "Bu rus tilining eng chiroyli qoidalaridan biri:<br>✅ У меня́ есть <b>маши́на</b>. (bosh kelishik)<br>❌ У меня́ нет <b class='hl'>маши́ны</b>. (qaratqich kelishigi!)<br><br>Ya'ni <b>«yo'q» so'zidan keyin ot har doim qaratqich kelishigida</b>.<br>O'tgan zamonda: <b>не́ было</b> + qaratqich. Kelasida: <b>не бу́дет</b> + qaratqich.",
        },
        {
          t: "table",
          caption: "«У кого́?» — olmoshlar",
          head: ["я", "ты", "он / оно́", "она́", "мы", "вы", "они́"],
          rows: [["у меня́", "у тебя́", "у него́", "у неё", "у нас", "у вас", "у них"]],
        },
        {
          t: "callout",
          tone: "tip",
          title: "«н» harfi qayerdan keldi?",
          text: "<b>его́ → у него́</b>, <b>её → у неё</b>, <b>их → у них</b>. Predlogdan keyin 3-shaxs olmoshlariga <b>н-</b> qo'shiladi. Bu barcha predloglar bilan ishlaydi: <i>к нему́, с ним, о нём</i>.",
        },

        { t: "h", text: "4. Miqdor" },
        {
          t: "examples",
          items: [
            { ru: "В гру́ппе мно́го <b class='hl'>студе́нтов</b>.", uz: "Guruhda ko'p talaba bor." },
            { ru: "У меня́ ма́ло <b class='hl'>вре́мени</b>.", uz: "Mening vaqtim kam." },
            { ru: "Ско́лько <b class='hl'>вре́мени</b>?", uz: "Soat necha?" },
            { ru: "Стака́н <b class='hl'>воды́</b>, ча́шка <b class='hl'>ча́я</b>.", uz: "Bir stakan suv, bir piyola choy." },
          ],
        },
        {
          t: "p",
          text: "Shu so'zlardan keyin har doim qaratqich: <b class='ru'>мно́го</b> (ko'p), <b class='ru'>ма́ло</b> (kam), <b class='ru'>ско́лько</b> (qancha), <b class='ru'>немно́го</b> (ozgina), <b class='ru'>не́сколько</b> (bir necha).",
        },

        { t: "h", text: "5. Qayerdan? — «Откуда?»" },
        {
          t: "table",
          caption: "Uchinchi juftlik: Где? — Куда? — Откуда?",
          head: ["Где? (qayerda)", "Куда́? (qayoqqa)", "Отку́да? (qayerdan)"],
          rows: [
            ["<b>в</b> университе́т<b class='hl'>е</b>", "<b>в</b> университе́т", "<b class='hl'>из</b> университе́т<b class='hl'>а</b>"],
            ["<b>на</b> уро́к<b class='hl'>е</b>", "<b>на</b> уро́к", "<b class='hl'>с</b> уро́к<b class='hl'>а</b>"],
            ["<b>у</b> врач<b class='hl'>а́</b>", "<b>к</b> врач<b class='hl'>у́</b>", "<b class='hl'>от</b> врач<b class='hl'>а́</b>"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Mukammal simmetriya",
          text: "Agar joy <b>в</b> bilan bo'lsa — chiqish <b>из</b> bilan.<br>Agar <b>на</b> bilan bo'lsa — chiqish <b>с</b> bilan.<br>Agar odam (<b>к</b>) bo'lsa — chiqish <b>от</b> bilan.<br>Bu uchlik hech qachon aralashmaydi.",
        },

        { t: "h", text: "6. Boshqa predloglar" },
        {
          t: "vocab",
          items: [
            { ru: "без ча́я", uz: "choysiz" },
            { ru: "для дру́га", uz: "do'st uchun" },
            { ru: "о́коло до́ма", uz: "uy yonida" },
            { ru: "по́сле уро́ка", uz: "darsdan keyin" },
            { ru: "до обе́да", uz: "tushlikkacha" },
            { ru: "напро́тив шко́лы", uz: "maktab ro'parasida" },
            { ru: "вме́сто бра́та", uz: "aka o'rniga" },
            { ru: "у окна́", uz: "deraza yonida" },
          ],
        },

        { t: "h", text: "Mashqlar" },
        {
          t: "quiz",
          q: "«Э́то кни́га ___.» (брат — akaning kitobi)",
          options: ["брат", "бра́та", "бра́ту", "бра́том"],
          answer: 1,
          hint: "Egalik → qaratqich kelishigi. Erkak jinsi + а.",
        },
        {
          t: "quiz",
          q: "«У меня́ нет ___.» (машина)",
          options: ["маши́на", "маши́ну", "маши́ны", "маши́не"],
          answer: 2,
          hint: "«Нет» dan keyin har doim qaratqich. Ayol jinsi -а → -ы.",
        },
        {
          t: "quiz",
          q: "«У меня́ нет ___.» (книга)",
          options: ["кни́гы", "кни́ги", "кни́гу", "кни́га"],
          answer: 1,
          hint: "Qaratqichda -а → -ы, LEKIN г dan keyin «ы» yozilmaydi → «и». Yana o'sha imlo qoidasi.",
        },
        {
          t: "quiz",
          q: "«Я иду́ ___ уро́ка.» (darsdan)",
          options: ["из", "с", "от", "у"],
          answer: 1,
          hint: "«На уроке» edi → demak chiqish «с уро́ка».",
        },
        {
          t: "quiz",
          q: "«У ___ есть словарь.» (u — ayol)",
          options: ["её", "неё", "ей", "она́"],
          answer: 1,
          hint: "Predlogdan keyin «н-» qo'shiladi: у неё.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Я прие́хал из ___.» (Узбекистан)",
          answer: ["Узбекистана", "Узбекиста́на"],
          hint: "«Из» + qaratqich. Erkak jinsi + а.",
        },
        {
          t: "fill",
          q: "To'ldiring: «В гру́ппе мно́го ___.» (студенты — ko'plik qaratqich)",
          answer: ["студентов", "студе́нтов"],
          hint: "Ko'plikda erkak jinsi qaratqichi -ов oladi. Bu keyingi bo'limda batafsil.",
        },
        {
          t: "match",
          q: "Predlogni to'g'ri savolga ulang",
          pairs: [
            ["в университе́те", "Где?"],
            ["в университе́т", "Куда́?"],
            ["из университе́та", "Отку́да?"],
            ["у врача́", "Где? (odamda)"],
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "instrumental",
      title: "5. Творительный падеж — kim bilan? nima bilan?",
      subtitle: "Oxirgi kelishik va eng oson qo'shimchalardan biri: -ом / -ой.",
      blocks: [
        {
          t: "table",
          caption: "Asosiy vazifalar",
          head: ["Ma'no", "Savol / predlog", "Misol"],
          rows: [
            ["Birgalik", "с кем?", "Я иду́ <b class='hl'>с бра́том</b>."],
            ["Vosita (nima bilan)", "чем? (predlogsiz)", "Я пишу́ <b class='hl'>ру́чкой</b>."],
            ["Kasb (быть, стать)", "кем?", "Он бу́дет <b class='hl'>врачо́м</b>."],
            ["Joy (predloglar)", "над, под, за, пе́ред, ме́жду, ря́дом с", "<b class='hl'>под столо́м</b>"],
            ["Shug'ullanmoq", "занима́ться чем?", "<b class='hl'>спо́ртом</b>"],
          ],
        },
        {
          t: "table",
          caption: "Qo'shimchalar",
          head: ["Jins", "Bosh kelishik", "Vosita kelishigi", "O'zgarish"],
          rows: [
            ["<b>он</b>", "брат, стол", "бра́т<b class='hl'>ом</b>, стол<b class='hl'>о́м</b>", "+ <b>ом</b>"],
            ["", "преподава́тель, музе́й", "преподава́тел<b class='hl'>ем</b>, музе́<b class='hl'>ем</b>", "ь→ем, й→ем"],
            ["", "врач, това́рищ", "врач<b class='hl'>о́м</b>, това́рищ<b class='hl'>ем</b>", "urg'uga qarab ом/ем"],
            ["<b>она́</b>", "сестра́, кни́га", "сестр<b class='hl'>о́й</b>, кни́г<b class='hl'>ой</b>", "а→<b>ой</b>"],
            ["", "пе́сня, семья́", "пе́сн<b class='hl'>ей</b>, семь<b class='hl'>ёй</b>", "я→ей"],
            ["", "тетра́дь", "тетра́д<b class='hl'>ью</b>", "ь→<b>ью</b>"],
            ["<b>оно́</b>", "окно́, мо́ре", "окн<b class='hl'>о́м</b>, мо́р<b class='hl'>ем</b>", "о→ом, е→ем"],
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "ж, ч, ш, щ, ц dan keyin",
          text: "Urg'u qo'shimchada bo'lsa — <b>о</b>: <i>врач<b>о́м</b>, отц<b>о́м</b></i>.<br>Urg'u o'zakda bo'lsa — <b>е</b>: <i>това́рищ<b>ем</b>, ме́сяц<b>ем</b></i>.<br>Bu qoida sizni ko'p xatodan saqlaydi.",
        },

        { t: "h", text: "Olmoshlar" },
        {
          t: "table",
          head: ["я", "ты", "он / оно́", "она́", "мы", "вы", "они́"],
          rows: [["мной", "тобо́й", "им", "ей", "на́ми", "ва́ми", "и́ми"]],
        },
        {
          t: "callout",
          tone: "tip",
          title: "«со мной», «с ним»",
          text: "Predlog bilan: <b>со мной</b> (men bilan — «с» emas, «со»!), <b>с тобо́й, с ним, с ней, с на́ми, с ва́ми, с ни́ми</b>.",
        },

        { t: "h", text: "«С» bormi yoki yo'qmi? — muhim farq" },
        {
          t: "callout",
          tone: "info",
          title: "Birgalik vs vosita",
          text: "Agar ma'no <b>«birga»</b> bo'lsa — <b>с</b> ishlatiladi:<br><i>Я иду́ <b>с</b> дру́гом.</i> (do'stim bilan birga)<br><br>Agar ma'no <b>«yordamida»</b> bo'lsa — <b>predlogsiz</b>:<br><i>Я пишу́ ру́чкой.</i> (ruchka bilan yozaman — «с ручкой» EMAS)<br><i>Я ем ло́жкой.</i> (qoshiq bilan yeyman)",
        },
        {
          t: "examples",
          items: [
            { ru: "Я живу́ <b class='hl'>с бра́том</b>.", uz: "Men akam bilan yashayman." },
            { ru: "Ко́фе <b class='hl'>с молоко́м</b>, пожа́луйста.", uz: "Sutli qahva, iltimos." },
            { ru: "Он рабо́тает <b class='hl'>инжене́ром</b>.", uz: "U muhandis bo'lib ishlaydi." },
            { ru: "Я хочу́ стать <b class='hl'>врачо́м</b>.", uz: "Men shifokor bo'lmoqchiman." },
            { ru: "Ла́мпа <b class='hl'>над столо́м</b>. Ко́шка <b class='hl'>под столо́м</b>.", uz: "Chiroq stol ustida. Mushuk stol tagida." },
            { ru: "Я занима́юсь <b class='hl'>спо́ртом</b>.", uz: "Men sport bilan shug'ullanaman." },
          ],
        },

        { t: "h", text: "Joy predloglari" },
        {
          t: "vocab",
          items: [
            { ru: "над столо́м", uz: "stol ustida (tegmasdan)" },
            { ru: "под столо́м", uz: "stol tagida" },
            { ru: "за до́мом", uz: "uy orqasida" },
            { ru: "пе́ред до́мом", uz: "uy oldida" },
            { ru: "ме́жду окно́м и две́рью", uz: "deraza va eshik orasida" },
            { ru: "ря́дом с ба́нком", uz: "bank yonida" },
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "«На столе́» va «над столо́м»",
          text: "<b>на столе́</b> = stol ustida, <u>tegib turibdi</u> (predlog kelishigi)<br><b>над столо́м</b> = stol ustida, <u>havoda osilgan</u> (vosita kelishigi)<br>Ikkalasi ham o'zbekcha «stol ustida», lekin ma'no boshqa.",
        },

        { t: "h", text: "Mashqlar" },
        {
          t: "quiz",
          q: "«Я иду́ с ___.» (брат)",
          options: ["брат", "бра́та", "бра́ту", "бра́том"],
          answer: 3,
          hint: "«С кем?» → vosita kelishigi, erkak jinsi + ом.",
        },
        {
          t: "quiz",
          q: "«Я пишу́ ___.» (ручка — ruchka bilan yozaman)",
          options: ["с ру́чкой", "ру́чкой", "ру́чку", "ру́чке"],
          answer: 1,
          hint: "Vosita ma'nosida predlog YO'Q. Faqat «ручкой».",
        },
        {
          t: "quiz",
          q: "«Он рабо́тает ___.» (врач)",
          options: ["врач", "врача́", "врачо́м", "враче́м"],
          answer: 2,
          hint: "Kasb → vosita kelishigi. ч dan keyin urg'u qo'shimchada, demak «о»: врачо́м.",
        },
        {
          t: "quiz",
          q: "«Ко́шка ___ столо́м.» (mushuk stol tagida)",
          options: ["на", "над", "под", "за"],
          answer: 2,
          hint: "Tagida — «под».",
        },
        {
          t: "fill",
          q: "To'ldiring: «Иди́ ___ мной.» (men bilan)",
          answer: ["со"],
          hint: "«Мной» oldidan «с» emas, «со» qo'yiladi — talaffuz qulayligi uchun.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Ко́фе с ___.» (молоко)",
          answer: ["молоком", "молоко́м"],
          hint: "O'rta jins: -о → -ом.",
        },
        {
          t: "match",
          q: "Predlogni ma'noga ulang",
          pairs: [
            ["над", "ustida (havoda)"],
            ["под", "tagida"],
            ["за", "orqasida"],
            ["пе́ред", "oldida"],
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "cases-review",
      title: "Takrorlash: 6 ta kelishik bir jadvalda",
      subtitle: "Hamma narsani bitta joyga yig'amiz. Bu darsni xatcho'p qiling — u sizga doim kerak bo'ladi.",
      blocks: [
        {
          t: "table",
          caption: "To'liq jadval — birlik son",
          head: ["Kelishik", "он (стол)", "он (студе́нт)", "она́ (кни́га)", "она́ (тетра́дь)", "оно́ (окно́)"],
          rows: [
            ["Имени́тельный<br><small>Кто? Что?</small>", "стол", "студе́нт", "кни́га", "тетра́дь", "окно́"],
            ["Роди́тельный<br><small>Кого́? Чего́?</small>", "стол<b class='hl'>а́</b>", "студе́нт<b class='hl'>а</b>", "кни́г<b class='hl'>и</b>", "тетра́д<b class='hl'>и</b>", "окн<b class='hl'>а́</b>"],
            ["Да́тельный<br><small>Кому́? Чему́?</small>", "стол<b class='hl'>у́</b>", "студе́нт<b class='hl'>у</b>", "кни́г<b class='hl'>е</b>", "тетра́д<b class='hl'>и</b>", "окн<b class='hl'>у́</b>"],
            ["Вини́тельный<br><small>Кого́? Что?</small>", "стол", "студе́нт<b class='hl'>а</b>", "кни́г<b class='hl'>у</b>", "тетра́дь", "окно́"],
            ["Твори́тельный<br><small>Кем? Чем?</small>", "стол<b class='hl'>о́м</b>", "студе́нт<b class='hl'>ом</b>", "кни́г<b class='hl'>ой</b>", "тетра́д<b class='hl'>ью</b>", "окн<b class='hl'>о́м</b>"],
            ["Предло́жный<br><small>О ком? О чём?</small>", "о стол<b class='hl'>е́</b>", "о студе́нт<b class='hl'>е</b>", "о кни́г<b class='hl'>е</b>", "о тетра́д<b class='hl'>и</b>", "об окн<b class='hl'>е́</b>"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Naqshlarni ko'ryapsizmi?",
          text: "① <b>Jonsiz erkak</b> va <b>o'rta jins</b> otlar tushum kelishigida bosh kelishik bilan bir xil.<br>② <b>Jonli erkak</b> otlar tushum kelishigida qaratqich bilan bir xil.<br>③ <b>Тетра́дь</b> tipidagi otlar qaratqich, jo'nalish va predlog kelishiklarida bir xil — <b>-и</b>.<br>④ Ayol jinsi <b>-а</b> otlar jo'nalish va predlog kelishiklarida bir xil — <b>-е</b>.",
        },
        {
          t: "table",
          caption: "Olmoshlar — to'liq",
          head: ["", "я", "ты", "он/оно́", "она́", "мы", "вы", "они́"],
          rows: [
            ["Роди́т.", "меня́", "тебя́", "его́ (него́)", "её (неё)", "нас", "вас", "их (них)"],
            ["Да́т.", "мне", "тебе́", "ему́ (нему́)", "ей (ней)", "нам", "вам", "им (ним)"],
            ["Вини́т.", "меня́", "тебя́", "его́ (него́)", "её (неё)", "нас", "вас", "их (них)"],
            ["Твори́т.", "мной", "тобо́й", "им (ним)", "ей (ней)", "на́ми", "ва́ми", "и́ми (ни́ми)"],
            ["Предло́ж.", "обо мне", "о тебе́", "о нём", "о ней", "о нас", "о вас", "о них"],
          ],
        },
        {
          t: "callout",
          tone: "info",
          title: "Qavs ichidagi shakllar",
          text: "Predlogdan keyin 3-shaxs olmoshlariga <b>н-</b> qo'shiladi: <i>у <b>н</b>его́, к <b>н</b>ему́, с <b>н</b>им, о <b>н</b>ём</i>. Predlogsiz — <b>н</b> yo'q: <i>Я ви́жу его́.</i>",
        },
        {
          t: "table",
          caption: "Predloglar qaysi kelishikni «boshqaradi»",
          head: ["Kelishik", "Predloglar"],
          rows: [
            ["Роди́тельный", "из, с, от, у, без, для, о́коло, по́сле, до, про́тив, напро́тив, вме́сто"],
            ["Да́тельный", "к, по"],
            ["Вини́тельный", "в, на (куда?), че́рез, за (nima uchun)"],
            ["Твори́тельный", "с, над, под, за, пе́ред, ме́жду, ря́дом с"],
            ["Предло́жный", "в, на (где?), о (об), при"],
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "«В», «на», «за» — ikki xil ishlaydi",
          text: "Bu predloglar <b>ikkita kelishik</b> bilan kelishi mumkin, va ma'no o'zgaradi:<br><b>в шко́л<span class='hl'>е</span></b> (где? — predlog k.) ↔ <b>в шко́л<span class='hl'>у</span></b> (куда? — tushum k.)<br><b>за до́м<span class='hl'>ом</span></b> (где? — vosita k.) ↔ <b>за дом</b> (куда? — tushum k.)<br>Savol beraverib aniqlang: <b>«где?»</b> yoki <b>«куда?»</b>",
        },

        { t: "h", text: "Aralash mashqlar" },
        {
          t: "quiz",
          q: "«Я живу́ в ___ с ___.» (Москва, брат)",
          options: ["Москве́ … бра́том", "Москву́ … бра́та", "Москве́ … бра́ту", "Москва́ … бра́том"],
          answer: 0,
          hint: "«В» + где? → predlog kelishigi (Москве́). «С кем?» → vosita kelishigi (бра́том).",
        },
        {
          t: "quiz",
          q: "«У ___ нет ___.» (я, время)",
          options: ["меня́ … вре́мя", "мне … вре́мени", "меня́ … вре́мени", "мной … вре́мя"],
          answer: 2,
          hint: "«У» + qaratqich (меня́). «Нет» + qaratqich (вре́мени — istisno so'z).",
        },
        {
          t: "quiz",
          q: "«Я даю́ кни́гу ___.» (сестра)",
          options: ["сестра́", "сестру́", "сестре́", "сестро́й"],
          answer: 2,
          hint: "Kimga beryapman? → jo'nalish kelishigi. Ayol jinsi -а → -е.",
        },
        {
          t: "quiz",
          q: "Qaysi gapda XATO bor?",
          options: [
            "Я иду́ в университе́т.",
            "Я рабо́таю в университе́те.",
            "Я прие́хал из университе́та.",
            "Я ду́маю о университе́те.",
          ],
          answer: 3,
          hint: "«Университет» У (unli) bilan boshlanadi → «об университе́те» bo'lishi kerak.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Он идёт к ___.» (сестра)",
          answer: ["сестре", "сестре́"],
          hint: "«К» + jo'nalish kelishigi, -а → -е.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Кни́га лежи́т на ___.» (стол)",
          answer: ["столе", "столе́"],
          hint: "«Где?» → predlog kelishigi.",
        },
        {
          t: "match",
          q: "Predlogni kelishikka ulang",
          pairs: [
            ["из", "Роди́тельный"],
            ["к", "Да́тельный"],
            ["с (birga)", "Твори́тельный"],
            ["о", "Предло́жный"],
            ["че́рез", "Вини́тельный"],
          ],
        },
      ],
    },
  ],
};
