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
          text: "Kelishikni <b>yodlab</b> emas, <b>ishlatib</b> o'rganasiz. Har darsda jadvalni 10 marta o'qigandan ko'ra, 10 ta gap tuzgan foydali.",
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

        { t: "h", text: "Sifat predlog kelishigida" },
        {
          t: "p",
          text: "Ot o'zgardi — endi uning oldidagi sifat ham o'zgarishi kerak. Yaxshi xabar: sifatda faqat <b>ikkita</b> shakl bor. Erkak va o'rta jins bitta qo'shimchani baham ko'radi.",
        },
        {
          t: "table",
          caption: "Како́й? → О како́м?",
          head: ["Jins", "Bosh kelishik", "Predlog kelishigi", "Qo'shimcha"],
          rows: [
            ["<b>он / оно́</b>", "но́вый, но́вое<br>ру́сский<br>большо́й", "в но́в<b class='hl'>ом</b><br>в ру́сск<b class='hl'>ом</b><br>в больш<b class='hl'>о́м</b>", "<b>-ом</b>"],
            ["", "хоро́ший<br>дома́шний", "в хоро́ш<b class='hl'>ем</b><br>в дома́шн<b class='hl'>ем</b>", "<b>-ем</b><br><small>yumshoq va ж,ч,ш,щ dan keyin</small>"],
            ["<b>она́</b>", "но́вая, ру́сская, больша́я", "в но́в<b class='hl'>ой</b>, в ру́сск<b class='hl'>ой</b>, в больш<b class='hl'>о́й</b>", "<b>-ой</b>"],
            ["", "хоро́шая, дома́шняя", "в хоро́ш<b class='hl'>ей</b>, в дома́шн<b class='hl'>ей</b>", "<b>-ей</b>"],
          ],
        },
        {
          t: "examples",
          items: [
            { ru: "— В како́м до́ме вы живёте? — Мы живём <b class='hl'>в большо́м но́вом до́ме</b>.", uz: "— Qanday uyda yashaysiz? — Katta yangi uyda yashaymiz." },
            { ru: "— В како́й ко́мнате? — <b class='hl'>В большо́й хоро́шей ко́мнате</b>.", uz: "— Qanday xonada? — Katta, yaxshi xonada." },
            { ru: "Преподава́тель расска́зывал <b class='hl'>о вели́ком ру́сском поэ́те</b> Пу́шкине.", uz: "O'qituvchi buyuk rus shoiri Pushkin haqida gapirdi." },
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Sifat nechta bo'lsa ham — hammasi o'zgaradi",
          text: "<b>в большо́м но́вом хоро́шем до́ме</b> — uchala sifat ham <b>-ом</b> oldi. Ular otga ergashadi, bir-biriga emas.",
        },

        { t: "h", text: "Egalik va ko'rsatish olmoshlari" },
        {
          t: "table",
          caption: "мой, наш, э́тот, тот, свой — predlog kelishigida",
          head: ["Olmosh", "он / оно́ (о ком? о чём?)", "она́"],
          rows: [
            ["мой / моё / моя́", "о мо<b class='hl'>ём</b> бра́те", "о мо<b class='hl'>е́й</b> сестре́"],
            ["твой", "о тво<b class='hl'>ём</b>", "о тво<b class='hl'>е́й</b>"],
            ["наш / на́ше / на́ша", "о на́ш<b class='hl'>ем</b>", "о на́ш<b class='hl'>ей</b>"],
            ["ваш", "о ва́ш<b class='hl'>ем</b>", "о ва́ш<b class='hl'>ей</b>"],
            ["э́тот / э́то / э́та", "об э́т<b class='hl'>ом</b> столе́", "об э́т<b class='hl'>ой</b> кни́ге"],
            ["тот / то / та", "о т<b class='hl'>ом</b> до́ме", "о т<b class='hl'>ой</b> маши́не"],
            ["свой / своё / своя́", "о сво<b class='hl'>ём</b>", "о сво<b class='hl'>е́й</b>"],
          ],
        },
        {
          t: "callout",
          tone: "info",
          title: "Naqsh bitta",
          text: "Sifat ham, olmosh ham bir xil ishlaydi: erkak/o'rta → <b>-ом / -ем</b>, ayol → <b>-ой / -ей</b>. Ya'ni <b>в моём но́вом до́ме</b> va <b>в мое́й но́вой ко́мнате</b>.<br>Va <b>его́, её, их</b> — hech qachon o'zgarmaydi: <i>о его́ бра́те, о её сестре́</i>.",
        },
        {
          t: "callout",
          tone: "warn",
          title: "«Свой» nima?",
          text: "«Свой» = «o'zining». Gap egasiga qaytadi:<br><b>Он говори́т о своём бра́те.</b> — U <u>o'zining</u> akasi haqida gapiryapti.<br><b>Он говори́т о его́ бра́те.</b> — U <u>boshqa birovning</u> akasi haqida gapiryapti.<br>O'zbekchada ikkalasi ham «uning akasi» — shuning uchun bu farqni alohida eslab qolish kerak.",
        },
        {
          t: "examples",
          items: [
            { ru: "Э́то моя́ ко́мната. → <b class='hl'>В мое́й ко́мнате</b> есть стол и шкаф.", uz: "Bu mening xonam. → Mening xonamda stol va shkaf bor." },
            { ru: "Э́то наш университе́т. → <b class='hl'>В на́шем университе́те</b> была́ конфере́нция.", uz: "Bu bizning universitetimiz. → Universitetimizda konferensiya bo'ldi." },
          ],
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

        { t: "h", text: "Sifat tushum kelishigida" },
        {
          t: "p",
          text: "Bu yerda ham o'sha jonli/jonsiz bo'linishi ishlaydi — lekin faqat erkak jinsida. Ayol jinsi o'ziga xos <b>-ую / -юю</b> qo'shimchasini oladi.",
        },
        {
          t: "table",
          caption: "Како́й? → Како́го? / Како́й?",
          head: ["Jins", "Bosh kelishik", "Tushum kelishigi", "Qoida"],
          rows: [
            ["<b>он</b> jonsiz", "но́вый стол", "но́вый стол", "<b>o'zgarmaydi</b>"],
            ["<b>он</b> jonli", "но́вый студе́нт", "но́в<b class='hl'>ого</b> студе́нта", "= qaratqich kelishigi"],
            ["<b>она́</b>", "но́вая кни́га<br>хоро́шая<br>дома́шняя", "но́в<b class='hl'>ую</b> кни́гу<br>хоро́ш<b class='hl'>ую</b><br>дома́шн<b class='hl'>юю</b>", "<b>-ую / -юю</b>"],
            ["<b>оно́</b>", "но́вое окно́", "но́вое окно́", "<b>hech qachon o'zgarmaydi</b>"],
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "«-ого» «-ava» deb o'qiladi",
          text: "<b>но́вого</b> → «novava». Yodingizdami, «его́» ham «yevo» edi? Bu bir xil qoida: <b>-ого / -его</b> dagi <b>г</b> har doim <b>«в»</b> deb talaffuz qilinadi.",
        },

        { t: "h", text: "Olmoshlar tushum kelishigida" },
        {
          t: "table",
          caption: "мой, наш, э́тот, свой",
          head: ["Olmosh", "он jonsiz", "он jonli", "она́", "оно́"],
          rows: [
            ["мой", "мой стол", "мо<b class='hl'>его́</b> бра́та", "мо<b class='hl'>ю́</b> сестру́", "моё окно́"],
            ["наш", "наш дом", "на́ш<b class='hl'>его</b> дру́га", "на́ш<b class='hl'>у</b> ко́мнату", "на́ше зда́ние"],
            ["э́тот", "э́тот стол", "э́т<b class='hl'>ого</b> студе́нта", "э́т<b class='hl'>у</b> кни́гу", "э́то окно́"],
            ["тот", "тот дом", "т<b class='hl'>ого́</b> челове́ка", "т<b class='hl'>у</b> маши́ну", "то по́ле"],
            ["свой", "свой стол", "сво<b class='hl'>его́</b> бра́та", "сво<b class='hl'>ю́</b> сестру́", "своё ме́сто"],
          ],
        },
        {
          t: "table",
          caption: "Shaxs olmoshlari",
          head: ["я", "ты", "он / оно́", "она́", "мы", "вы", "они́"],
          rows: [["меня́", "тебя́", "его́ (у него́)", "её (у неё)", "нас", "вас", "их (у них)"]],
        },
        {
          t: "examples",
          items: [
            { ru: "Я чита́ю <b class='hl'>интере́сную кни́гу</b>.", uz: "Men qiziqarli kitob o'qiyapman." },
            { ru: "Я ви́жу <b class='hl'>но́вого студе́нта</b>.", uz: "Men yangi talabani ko'ryapman. (jonli!)" },
            { ru: "Я ви́жу <b class='hl'>но́вый дом</b>.", uz: "Men yangi uyni ko'ryapman. (jonsiz)" },
            { ru: "Я люблю́ <b class='hl'>свою́ семью́</b>.", uz: "Men o'z oilamni sevaman." },
            { ru: "Я хорошо́ зна́ю <b class='hl'>э́того челове́ка</b>.", uz: "Men bu odamni yaxshi bilaman." },
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

        { t: "h", text: "Sifat va olmoshlar jo'nalish kelishigida" },
        {
          t: "table",
          caption: "Како́му? / Како́й?",
          head: ["Jins", "Bosh kelishik", "Jo'nalish kelishigi", "Qo'shimcha"],
          rows: [
            ["<b>он / оно́</b>", "но́вый, но́вое<br>большо́й<br>хоро́ший", "но́в<b class='hl'>ому</b><br>больш<b class='hl'>о́му</b><br>хоро́ш<b class='hl'>ему</b>", "<b>-ому / -ему</b>"],
            ["<b>она́</b>", "но́вая<br>хоро́шая", "но́в<b class='hl'>ой</b><br>хоро́ш<b class='hl'>ей</b>", "<b>-ой / -ей</b>"],
          ],
        },
        {
          t: "table",
          caption: "Olmoshlar",
          head: ["Olmosh", "он / оно́", "она́"],
          rows: [
            ["мой", "мо<b class='hl'>ему́</b> бра́ту", "мо<b class='hl'>е́й</b> сестре́"],
            ["наш", "на́ш<b class='hl'>ему</b>", "на́ш<b class='hl'>ей</b>"],
            ["э́тот", "э́т<b class='hl'>ому</b> студе́нту", "э́т<b class='hl'>ой</b> де́вушке"],
            ["тот", "т<b class='hl'>ому́</b>", "т<b class='hl'>ой</b>"],
            ["свой", "сво<b class='hl'>ему́</b>", "сво<b class='hl'>е́й</b>"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Ayol jinsini bir marta yodlang — to'rt joyda ishlaydi",
          text: "Ayol jinsidagi sifat/olmosh <b>qaratqich, jo'nalish, vosita va predlog</b> kelishiklarida <u>bir xil</u>: <b>но́вой, мое́й, э́той</b>.<br>Ya'ni: <i>у но́вой сестры́ · к но́вой сестре́ · с но́вой сестро́й · о но́вой сестре́</i>.<br>Farqni faqat ot va predlog ko'rsatadi. Bu katta yengillik.",
        },
        {
          t: "examples",
          items: [
            { ru: "Я пишу́ письмо́ <b class='hl'>своему́ ста́ршему бра́ту</b>.", uz: "Men katta akamga xat yozyapman." },
            { ru: "Преподава́тель объясня́ет пра́вило <b class='hl'>но́вому студе́нту</b>.", uz: "O'qituvchi yangi talabaga qoidani tushuntiryapti." },
            { ru: "<b class='hl'>Мое́й мла́дшей сестре́</b> пять лет.", uz: "Mening kichik singlim besh yoshda." },
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

        { t: "h", text: "Sifat va olmoshlar qaratqich kelishigida" },
        {
          t: "table",
          caption: "Како́го? / Како́й?",
          head: ["Jins", "Bosh kelishik", "Qaratqich kelishigi", "Qo'shimcha"],
          rows: [
            ["<b>он / оно́</b>", "но́вый, но́вое<br>большо́й<br>хоро́ший", "но́в<b class='hl'>ого</b><br>больш<b class='hl'>о́го</b><br>хоро́ш<b class='hl'>его</b>", "<b>-ого / -его</b>"],
            ["<b>она́</b>", "но́вая<br>хоро́шая", "но́в<b class='hl'>ой</b><br>хоро́ш<b class='hl'>ей</b>", "<b>-ой / -ей</b>"],
          ],
        },
        {
          t: "table",
          caption: "Olmoshlar",
          head: ["Olmosh", "он / оно́", "она́"],
          rows: [
            ["мой", "мо<b class='hl'>его́</b> бра́та", "мо<b class='hl'>е́й</b> сестры́"],
            ["наш", "на́ш<b class='hl'>его</b>", "на́ш<b class='hl'>ей</b>"],
            ["э́тот", "э́т<b class='hl'>ого</b> го́рода", "э́т<b class='hl'>ой</b> кни́ги"],
            ["тот", "т<b class='hl'>ого́</b>", "т<b class='hl'>ой</b>"],
            ["свой", "сво<b class='hl'>его́</b>", "сво<b class='hl'>е́й</b>"],
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "Tanish shakl",
          text: "<b>но́вого, моего́, э́того</b> — bularni allaqachon <b>tushum kelishigida</b> (jonli otlar bilan) ko'rgan edingiz. Bu tasodif emas: jonli otlarning tushum kelishigi = qaratqich kelishigi.<br>Ya'ni bitta shaklni o'rgansangiz, ikkita joyda ishlatasiz.",
        },
        {
          t: "examples",
          items: [
            { ru: "Э́то кни́га <b class='hl'>моего́ ста́ршего бра́та</b>.", uz: "Bu mening katta akamning kitobi." },
            { ru: "У меня́ нет <b class='hl'>свобо́дного вре́мени</b>.", uz: "Mening bo'sh vaqtim yo'q." },
            { ru: "Я прие́хал <b class='hl'>из ма́ленького го́рода</b>.", uz: "Men kichkina shahardan keldim." },
            { ru: "<b class='hl'>По́сле пе́рвой ле́кции</b> у нас переры́в.", uz: "Birinchi ma'ruzadan keyin bizda tanaffus." },
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

        { t: "h", text: "Sifat va olmoshlar vosita kelishigida" },
        {
          t: "table",
          caption: "Каки́м? / Како́й?",
          head: ["Jins", "Bosh kelishik", "Vosita kelishigi", "Qo'shimcha"],
          rows: [
            ["<b>он / оно́</b>", "но́вый, но́вое<br>большо́й<br>хоро́ший", "но́в<b class='hl'>ым</b><br>больш<b class='hl'>и́м</b><br>хоро́ш<b class='hl'>им</b>", "<b>-ым / -им</b>"],
            ["<b>она́</b>", "но́вая<br>хоро́шая", "но́в<b class='hl'>ой</b><br>хоро́ш<b class='hl'>ей</b>", "<b>-ой / -ей</b>"],
          ],
        },
        {
          t: "table",
          caption: "Olmoshlar",
          head: ["Olmosh", "он / оно́", "она́"],
          rows: [
            ["мой", "мо<b class='hl'>и́м</b> бра́том", "мо<b class='hl'>е́й</b> сестро́й"],
            ["наш", "на́ш<b class='hl'>им</b>", "на́ш<b class='hl'>ей</b>"],
            ["э́тот", "э́т<b class='hl'>им</b> челове́ком", "э́т<b class='hl'>ой</b> кни́гой"],
            ["тот", "т<b class='hl'>ем</b>", "т<b class='hl'>ой</b>"],
            ["свой", "сво<b class='hl'>и́м</b>", "сво<b class='hl'>е́й</b>"],
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "«Тем» — istisno",
          text: "«Тот» olmoshi vosita kelishigida <b>тем</b> bo'ladi, «тым» emas. Bu yagona shunday shakl.",
        },
        {
          t: "examples",
          items: [
            { ru: "Я иду́ в кино́ <b class='hl'>со свои́м ста́ршим бра́том</b>.", uz: "Men katta akam bilan kinoga boryapman." },
            { ru: "Он хо́чет стать <b class='hl'>хоро́шим врачо́м</b>.", uz: "U yaxshi shifokor bo'lmoqchi." },
            { ru: "Я пишу́ <b class='hl'>но́вой ру́чкой</b>.", uz: "Men yangi ruchka bilan yozyapman." },
            { ru: "Ла́мпа <b class='hl'>над э́тим столо́м</b>.", uz: "Chiroq shu stol ustida." },
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
          caption: "Sifat — to'liq jadval",
          head: ["Kelishik", "он / оно́ (но́вый / но́вое)", "она́ (но́вая)"],
          rows: [
            ["Имени́тельный", "но́в<b class='hl'>ый</b> / но́в<b class='hl'>ое</b>", "но́в<b class='hl'>ая</b>"],
            ["Роди́тельный", "но́в<b class='hl'>ого</b>", "но́в<b class='hl'>ой</b>"],
            ["Да́тельный", "но́в<b class='hl'>ому</b>", "но́в<b class='hl'>ой</b>"],
            ["Вини́тельный", "= bosh k. (jonsiz)<br>= qaratqich (jonli)", "но́в<b class='hl'>ую</b>"],
            ["Твори́тельный", "но́в<b class='hl'>ым</b>", "но́в<b class='hl'>ой</b>"],
            ["Предло́жный", "о но́в<b class='hl'>ом</b>", "о но́в<b class='hl'>ой</b>"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Ayol jinsini boshqa qaramasangiz ham bo'ladi",
          text: "Ayol jinsidagi sifat oltita kelishikdan <b>to'rttasida bir xil</b>: <b>но́вой</b>. Faqat bosh (но́вая) va tushum (но́вую) kelishiklari boshqacha.<br>Ya'ni sizga aslida <b>uchta</b> shakl kerak: <b>но́вая, но́вую, но́вой</b>.",
        },
        {
          t: "table",
          caption: "Egalik va ko'rsatish olmoshlari — to'liq",
          head: ["Kelishik", "мой (он)", "моя́ (она́)", "э́тот (он)", "э́та (она́)"],
          rows: [
            ["Имени́тельный", "мой", "моя́", "э́тот", "э́та"],
            ["Роди́тельный", "моего́", "мое́й", "э́того", "э́той"],
            ["Да́тельный", "моему́", "мое́й", "э́тому", "э́той"],
            ["Вини́тельный", "мой / моего́", "мою́", "э́тот / э́того", "э́ту"],
            ["Твори́тельный", "мои́м", "мое́й", "э́тим", "э́той"],
            ["Предло́жный", "о моём", "о мое́й", "об э́том", "об э́той"],
          ],
        },
        {
          t: "callout",
          tone: "info",
          title: "«Твой», «свой», «наш», «ваш»",
          text: "<b>твой</b> va <b>свой</b> aynan <b>мой</b> kabi tuslanadi (твоего́, своего́, твои́м, свои́м…).<br><b>ваш</b> aynan <b>наш</b> kabi (на́шего, ва́шего, на́шим, ва́шим…).<br>Va yana bir marta: <b>его́, её, их</b> — hech qachon o'zgarmaydi.",
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
      ],
    },
  ],
};
