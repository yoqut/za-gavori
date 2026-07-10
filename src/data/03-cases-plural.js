// Kategoriya 3 — Predlog-kelishik tizimi, KO'PLIK (kitobning 85–105-betlari)

export default {
  id: "cases-pl",
  emoji: "👥",
  title: "Kelishiklar — ko'plik",
  desc: "Yaxshi xabar: ko'plikda jins ahamiyatini yo'qotadi. Yomon xabar: qaratqich kelishigi biroz qiynaydi.",
  lessons: [
    /* ---------------------------------------------------------------- */
    {
      id: "gen-plural",
      title: "Ko'plik: Родительный падеж",
      subtitle: "Ko'plikning eng qiyin qismi. Uni birinchi qilib yengib olamiz — qolgani bulardan keyin oson tuyuladi.",
      blocks: [
        {
          t: "callout",
          tone: "info",
          title: "Nega bu birinchi dars?",
          text: "Ko'plikning boshqa to'rt kelishigi bittadan qo'shimchaga ega (<b>-ам, -ами, -ах</b>) — bir kunda o'rganiladi. Qaratqich kelishigi esa <b>uch xil</b> qo'shimchaga ega. Shuning uchun undan boshlaymiz.",
        },
        {
          t: "table",
          caption: "Uchta qo'shimcha, uchta yo'l",
          head: ["Bosh kelishik (birlik)", "Qaratqich (ko'plik)", "Qoida"],
          rows: [
            ["студе́нт, стол", "студе́нт<b class='hl'>ов</b>, стол<b class='hl'>о́в</b>", "erkak, undosh bilan → <b>-ов</b>"],
            ["врач, това́рищ", "врач<b class='hl'>е́й</b>, това́рищ<b class='hl'>ей</b>", "erkak, ж/ч/ш/щ → <b>-ей</b>"],
            ["преподава́тель, слова́рь", "преподава́тел<b class='hl'>ей</b>, словар<b class='hl'>е́й</b>", "erkak, -ь → <b>-ей</b>"],
            ["музе́й, планета́рий", "музе́<b class='hl'>ев</b>, планета́ри<b class='hl'>ев</b>", "erkak, -й → <b>-ев</b>"],
            ["кни́га, ко́мната", "книг<b class='hl'>Ø</b>, ко́мнат<b class='hl'>Ø</b>", "ayol -а → <b>qo'shimchasiz!</b>"],
            ["тетра́дь, дверь", "тетра́д<b class='hl'>ей</b>, двер<b class='hl'>е́й</b>", "ayol -ь → <b>-ей</b>"],
            ["аудито́рия", "аудито́ри<b class='hl'>й</b>", "-ия → <b>-ий</b>"],
            ["окно́, ме́сто", "о́кон<b class='hl'>Ø</b>, мест<b class='hl'>Ø</b>", "o'rta -о → <b>qo'shimchasiz!</b>"],
            ["общежи́тие, зда́ние", "общежи́ти<b class='hl'>й</b>, зда́ни<b class='hl'>й</b>", "-ие → <b>-ий</b>"],
            ["мо́ре, по́ле", "мор<b class='hl'>е́й</b>, пол<b class='hl'>е́й</b>", "o'rta -е → <b>-ей</b>"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Uch qatorli xotira formulasi",
          text: "<b>-ов / -ев</b> → erkak jinsi (undosh yoki -й)<br><b>-ей</b> → hamma «yumshoq» narsalar (-ь, va ж/ч/ш/щ)<br><b>Ø (nol)</b> → ayol -а va o'rta -о<br><br>Ya'ni: <i>студентов, врачей, книг</i>.",
        },
        {
          t: "callout",
          tone: "warn",
          title: "«Nol qo'shimcha» va yugurma unli",
          text: "Ayol/o'rta jins so'z qo'shimchasiz qolganda, oxirida ikkita undosh to'planib qolsa — orasiga <b>о</b> yoki <b>е</b> qo'shiladi (talaffuz uchun):<br><b>окно́ → о́к<span class='hl'>о</span>н</b> · <b>ру́чка → ру́ч<span class='hl'>е</span>к</b> · <b>де́вушка → де́вуш<span class='hl'>е</span>к</b> · <b>сестра́ → сест<span class='hl'>ё</span>р</b> · <b>студе́нтка → студе́нт<span class='hl'>о</span>к</b>",
        },
        {
          t: "callout",
          tone: "warn",
          title: "Yodlanadigan istisnolar",
          text: "<b>челове́к → люде́й</b> · <b>ребёнок → дете́й</b> · <b>друг → друзе́й</b> · <b>брат → бра́тьев</b> · <b>сын → сынове́й</b> · <b>мать → матере́й</b> · <b>дочь → дочере́й</b> · <b>год → лет</b><br><br>Va qo'shimchasiz qoladiganlar: <b>раз → раз</b>, <b>челове́к → челове́к</b> (son bilan: <i>пять челове́к</i>).",
        },

        { t: "h", text: "Qayerda kerak bo'ladi?" },
        {
          t: "p",
          text: "Birlikdagi bilan bir xil vazifalar — lekin eng ko'p <b>miqdor</b> va <b>yo'qlik</b> uchun ishlatiladi.",
        },
        {
          t: "examples",
          items: [
            { ru: "В гру́ппе мно́го <b class='hl'>студе́нтов</b>.", uz: "Guruhda ko'p talaba bor." },
            { ru: "В го́роде мно́го <b class='hl'>музе́ев</b>.", uz: "Shaharda ko'p muzey bor." },
            { ru: "У меня́ нет <b class='hl'>друзе́й</b> здесь.", uz: "Bu yerda do'stlarim yo'q." },
            { ru: "На столе́ пять <b class='hl'>книг</b>.", uz: "Stolda beshta kitob bor." },
            { ru: "Здесь ма́ло <b class='hl'>де́вушек</b>.", uz: "Bu yerda qizlar kam." },
          ],
        },

        { t: "h", text: "Sonlardan keyin qaysi shakl?" },
        {
          t: "callout",
          tone: "info",
          title: "Rus tilining eng mashhur qoidasi",
          text: "<b>1</b> (va 21, 31...) → bosh kelishik, birlik: <i>оди́н <b>студе́нт</b></i><br><b>2, 3, 4</b> (va 22, 23...) → <b>qaratqich, BIRLIK</b>: <i>два <b>студе́нта</b></i><br><b>5–20</b> (va 25, 30...) → <b>qaratqich, KO'PLIK</b>: <i>пять <b>студе́нтов</b></i><br><br>Ya'ni sanoq oxirgi raqamga qarab qaraladi. <i>21 студе́нт, 22 студе́нта, 25 студе́нтов.</i>",
        },
        {
          t: "table",
          caption: "Bitta ot, uch xil shakl",
          head: ["Son", "стол", "кни́га", "окно́"],
          rows: [
            ["1, 21, 31", "стол", "кни́га", "окно́"],
            ["2, 3, 4", "стол<b class='hl'>а́</b>", "кни́г<b class='hl'>и</b>", "окн<b class='hl'>а́</b>"],
            ["5–20, 25…", "стол<b class='hl'>о́в</b>", "книг", "о́кон"],
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "11–14 — tuzoq",
          text: "«11, 12, 13, 14» oxiri 1,2,3,4 bo'lsa ham — <b>ko'plik qaratqich</b> oladi:<br><b>оди́ннадцать студе́нтов</b>, <b>двена́дцать книг</b>.<br>Sabab: bu sonlar «-надцать» bilan tugaydi, ya'ni 5–20 guruhida.",
        },

        { t: "h", text: "Mashqlar" },
        {
          t: "quiz",
          q: "«В гру́ппе мно́го ___.» (студенты)",
          options: ["студе́нты", "студе́нтов", "студе́нтам", "студе́нтах"],
          answer: 1,
          hint: "«Много» + ko'plik qaratqich. Erkak jinsi undosh bilan → -ов.",
        },
        {
          t: "quiz",
          q: "«У меня́ нет ___.» (книги)",
          options: ["кни́гов", "книг", "кни́ги", "кни́гей"],
          answer: 1,
          hint: "Ayol jinsi -а → qo'shimchasiz. Faqat «книг».",
        },
        {
          t: "quiz",
          q: "«В го́роде мно́го ___.» (врачи)",
          options: ["враче́й", "врачо́в", "врач", "врача́м"],
          answer: 0,
          hint: "ч bilan tugaydi → -ей.",
        },
        {
          t: "quiz",
          q: "«Здесь пять ___.» (окно)",
          options: ["окно́в", "о́кон", "о́кна", "о́кней"],
          answer: 1,
          hint: "O'rta jins -о → qo'shimchasiz, va yugurma «о» qo'shiladi: о́кон.",
        },
        {
          t: "quiz",
          q: "«Я ви́жу два ___.» (стол)",
          options: ["стол", "стола́", "столо́в", "столы́"],
          answer: 1,
          hint: "2, 3, 4 dan keyin — qaratqich BIRLIK: стола́.",
        },
        {
          t: "quiz",
          q: "«В ко́мнате двена́дцать ___.» (стул — stul)",
          options: ["сту́ла", "сту́лья", "сту́льев", "стул"],
          answer: 2,
          hint: "12 — «надцать» guruhida, demak ko'plik qaratqich. «Стул → сту́лья → сту́льев» (istisno).",
        },
        {
          t: "fill",
          q: "To'ldiring: «У меня́ нет ___.» (друзья — do'stlarim yo'q)",
          answer: ["друзей", "друзе́й"],
          hint: "Istisno: друг → друзья́ → друзе́й.",
        },
        {
          t: "fill",
          q: "To'ldiring: «В кла́ссе мно́го ___.» (девушки)",
          answer: ["девушек", "де́вушек"],
          hint: "Nol qo'shimcha + yugurma «е»: де́вушек.",
        },
        {
          t: "match",
          q: "Ko'plik qaratqich shaklini toping",
          pairs: [
            ["стол", "столо́в"],
            ["врач", "враче́й"],
            ["кни́га", "книг"],
            ["музе́й", "музе́ев"],
            ["зда́ние", "зда́ний"],
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "acc-plural",
      title: "Ko'plik: Винительный падеж",
      subtitle: "Yana o'sha jonli/jonsiz bo'linishi — lekin bu safar hamma jinslar uchun.",
      blocks: [
        {
          t: "callout",
          tone: "info",
          title: "Bitta qoida, ikki natija",
          text: "<b>Jonsiz</b> (что?) → bosh kelishik bilan bir xil.<br><b>Jonli</b> (кого́?) → <b>qaratqich kelishigi</b> bilan bir xil.<br><br>Birlikda bu faqat erkak jinsiga tegishli edi. Ko'plikda esa <b>hamma jinsga</b> tegishli.",
        },
        {
          t: "table",
          caption: "Jonsiz — o'zgarmaydi",
          head: ["Bosh kelishik", "Tushum kelishigi", "Misol"],
          rows: [
            ["столы́", "столы́", "Я ви́жу столы́."],
            ["кни́ги", "кни́ги", "Я чита́ю кни́ги."],
            ["о́кна", "о́кна", "Я мо́ю о́кна."],
          ],
        },
        {
          t: "table",
          caption: "Jonli — qaratqich shaklini oladi",
          head: ["Bosh kelishik", "Tushum kelishigi", "Misol"],
          rows: [
            ["студе́нты", "студе́нт<b class='hl'>ов</b>", "Я ви́жу студе́нтов."],
            ["врачи́", "врач<b class='hl'>е́й</b>", "Я зна́ю враче́й."],
            ["сёстры", "сест<b class='hl'>ёр</b>", "Я люблю́ сестёр."],
            ["де́ти", "дет<b class='hl'>е́й</b>", "Я ви́жу дете́й."],
            ["друзья́", "друз<b class='hl'>е́й</b>", "Я жду друзе́й."],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Amaliy xulosa",
          text: "Agar oldingi darsni o'zlashtirgan bo'lsangiz, bu darsda <b>yangi qo'shimcha yo'q</b>. Faqat savol bering: «Bu jonlimi?» Agar ha — qaratqich shaklini oling. Agar yo'q — hech narsa qilmang.",
        },
        {
          t: "examples",
          items: [
            { ru: "Я ви́жу <b class='hl'>дома́</b> и <b class='hl'>маши́ны</b>.", uz: "Men uylarni va mashinalarni ko'ryapman. (jonsiz)" },
            { ru: "Я ви́жу <b class='hl'>студе́нтов</b> и <b class='hl'>студе́нток</b>.", uz: "Men talabalarni (o'g'il/qiz) ko'ryapman. (jonli)" },
            { ru: "Я приглаша́ю <b class='hl'>друзе́й</b> в го́сти.", uz: "Men do'stlarimni mehmonga taklif qilaman." },
            { ru: "Роди́тели лю́бят <b class='hl'>дете́й</b>.", uz: "Ota-onalar bolalarni sevadi." },
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "«Куда́?» ko'plikda ham ishlaydi",
          text: "<b>Я иду́ в магази́ны.</b> (do'konlarga) — jonsiz, o'zgarmadi.<br><b>Мы е́дем на экску́рсии.</b> (ekskursiyalarga)",
        },

        { t: "h", text: "Mashqlar" },
        {
          t: "quiz",
          q: "«Я ви́жу ___.» (столы)",
          options: ["столы́", "столо́в", "стола́м", "стола́х"],
          answer: 0,
          hint: "«Стол» — jonsiz. O'zgarmaydi.",
        },
        {
          t: "quiz",
          q: "«Я ви́жу ___.» (студенты)",
          options: ["студе́нты", "студе́нтов", "студе́нтам", "студе́нтами"],
          answer: 1,
          hint: "«Студент» — jonli. Qaratqich shakli: студе́нтов.",
        },
        {
          t: "quiz",
          q: "«Мать лю́бит ___.» (дети)",
          options: ["де́ти", "дете́й", "де́тям", "детя́ми"],
          answer: 1,
          hint: "Bolalar — jonli. дет-е́й.",
        },
        {
          t: "quiz",
          q: "«Я чита́ю ___.» (книги)",
          options: ["кни́ги", "книг", "кни́гам", "кни́гами"],
          answer: 0,
          hint: "Kitob jonsiz → o'zgarmaydi.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Я жду ___.» (друзья — do'stlarimni kutyapman)",
          answer: ["друзей", "друзе́й"],
          hint: "Jonli → qaratqich shakli: друзе́й.",
        },
        {
          t: "match",
          q: "To'g'ri tushum kelishigi shaklini ulang",
          pairs: [
            ["Я ви́жу… (дома́)", "дома́"],
            ["Я ви́жу… (врачи́)", "враче́й"],
            ["Я ви́жу… (кни́ги)", "кни́ги"],
            ["Я ви́жу… (сёстры)", "сестёр"],
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "dat-instr-prep-plural",
      title: "Ko'plik: -ам, -ами, -ах",
      subtitle: "Rus tilidagi eng adolatli qoida. Jo'nalish, vosita va predlog kelishiklari — uchtasi ham bitta naqsh.",
      blocks: [
        {
          t: "callout",
          tone: "tip",
          title: "Nihoyat oson qism",
          text: "Ko'plikda bu uch kelishik <b>jinsga umuman qaramaydi</b>. Stol ham, kitob ham, deraza ham — bir xil qo'shimcha oladi. Faqat «yumshoq» so'zlar uchun <b>-я-</b> varianti bor.",
        },
        {
          t: "table",
          caption: "Uchta kelishik, uchta qo'shimcha",
          head: ["Kelishik", "Savol", "Qattiq", "Yumshoq", "Misol"],
          rows: [
            ["<b>Да́тельный</b>", "Кому́?", "<b class='hl'>-ам</b>", "<b class='hl'>-ям</b>", "студе́нт<b>ам</b>, преподава́тел<b>ям</b>"],
            ["<b>Твори́тельный</b>", "Кем? Чем?", "<b class='hl'>-ами</b>", "<b class='hl'>-ями</b>", "студе́нт<b>ами</b>, преподава́тел<b>ями</b>"],
            ["<b>Предло́жный</b>", "О ком? Где?", "<b class='hl'>-ах</b>", "<b class='hl'>-ях</b>", "о студе́нт<b>ах</b>, о преподава́тел<b>ях</b>"],
          ],
        },
        {
          t: "table",
          caption: "Bitta so'zning hamma shakllari",
          head: ["", "стол", "кни́га", "окно́", "тетра́дь"],
          rows: [
            ["Bosh k. (ko'plik)", "столы́", "кни́ги", "о́кна", "тетра́ди"],
            ["Да́тельный", "стол<b class='hl'>а́м</b>", "кни́г<b class='hl'>ам</b>", "о́кн<b class='hl'>ам</b>", "тетра́д<b class='hl'>ям</b>"],
            ["Твори́тельный", "стол<b class='hl'>а́ми</b>", "кни́г<b class='hl'>ами</b>", "о́кн<b class='hl'>ами</b>", "тетра́д<b class='hl'>ями</b>"],
            ["Предло́жный", "о стол<b class='hl'>а́х</b>", "о кни́г<b class='hl'>ах</b>", "об о́кн<b class='hl'>ах</b>", "о тетра́д<b class='hl'>ях</b>"],
          ],
        },
        {
          t: "callout",
          tone: "info",
          title: "Qachon «-ям / -ями / -ях»?",
          text: "Agar so'z <b>-ь, -й, -я, -е, -ие</b> bilan tugagan bo'lsa (ya'ni «yumshoq»):<br><b>тетра́дь → тетра́дям</b> · <b>музе́й → музе́ям</b> · <b>пе́сня → пе́сням</b> · <b>мо́ре → моря́м</b> · <b>общежи́тие → общежи́тиям</b>",
        },
        {
          t: "callout",
          tone: "warn",
          title: "Uchta istisno",
          text: "<b>лю́ди → лю́дям, людьми́, о лю́дях</b><br><b>де́ти → де́тям, детьми́, о де́тях</b><br><b>дочь → дочеря́м, дочерьми́, о дочеря́х</b><br>Vosita kelishigida ular <b>-ьми</b> oladi, <b>-ями</b> emas.",
        },
        {
          t: "examples",
          items: [
            { ru: "Преподава́тель объясня́ет пра́вило <b class='hl'>студе́нтам</b>.", uz: "O'qituvchi talabalarga qoidani tushuntiryapti. (кому?)" },
            { ru: "Я звоню́ <b class='hl'>роди́телям</b> ка́ждый день.", uz: "Men ota-onamga har kuni qo'ng'iroq qilaman." },
            { ru: "Я иду́ в кино́ <b class='hl'>с друзья́ми</b>.", uz: "Men do'stlarim bilan kinoga boryapman. (с кем?)" },
            { ru: "Мы говори́м <b class='hl'>о фи́льмах</b>.", uz: "Biz filmlar haqida gaplashyapmiz. (о чём?)" },
            { ru: "Кни́ги лежа́т <b class='hl'>на сто́лах</b>.", uz: "Kitoblar stollarda yotibdi. (где?)" },
            { ru: "Он гуля́ет <b class='hl'>по у́лицам</b> го́рода.", uz: "U shahar ko'chalari bo'ylab sayr qilyapti. (по + jo'nalish)" },
          ],
        },

        { t: "h", text: "Olmoshlar ko'plikda" },
        {
          t: "table",
          head: ["Kelishik", "мы", "вы", "они́"],
          rows: [
            ["Да́тельный", "нам", "вам", "им (к ним)"],
            ["Твори́тельный", "на́ми", "ва́ми", "и́ми (с ни́ми)"],
            ["Предло́жный", "о нас", "о вас", "о них"],
          ],
        },

        { t: "h", text: "Mashqlar" },
        {
          t: "quiz",
          q: "«Я пишу́ ___.» (друзья)",
          options: ["друзе́й", "друзья́м", "друзья́ми", "друзья́х"],
          answer: 1,
          hint: "Кому? → jo'nalish kelishigi ko'plikda: -ям.",
        },
        {
          t: "quiz",
          q: "«Я иду́ с ___.» (друзья)",
          options: ["друзья́м", "друзья́ми", "друзе́й", "друзья́х"],
          answer: 1,
          hint: "С кем? → vosita kelishigi: -ями.",
        },
        {
          t: "quiz",
          q: "«Мы говори́м о ___.» (студенты)",
          options: ["студе́нтам", "студе́нтами", "студе́нтах", "студе́нтов"],
          answer: 2,
          hint: "О ком? → predlog kelishigi: -ах.",
        },
        {
          t: "quiz",
          q: "«Он игра́ет с ___.» (дети)",
          options: ["детя́ми", "детьми́", "де́тям", "дете́й"],
          answer: 1,
          hint: "«Дети» — istisno. Vosita kelishigida детьми́.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Кни́ги лежа́т на ___.» (столы)",
          answer: ["столах", "стола́х"],
          hint: "Где? → predlog kelishigi ko'plikda: -ах.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Я звоню́ ___.» (родители)",
          answer: ["родителям", "роди́телям"],
          hint: "«Родитель» yumshoq (-ь), demak -ям.",
        },
        {
          t: "match",
          q: "Kelishikni qo'shimchaga ulang",
          pairs: [
            ["Кому́?", "-ам / -ям"],
            ["Кем? Чем?", "-ами / -ями"],
            ["О ком? Где?", "-ах / -ях"],
            ["Кого́? Чего́?", "-ов / -ей / Ø"],
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "plural-review",
      title: "Takrorlash: ko'plikning to'liq jadvali",
      subtitle: "Barcha kelishiklar, barcha jinslar — bitta ekranda.",
      blocks: [
        {
          t: "table",
          caption: "Ko'plik — to'liq jadval",
          head: ["Kelishik", "студе́нт (он, jonli)", "стол (он, jonsiz)", "кни́га (она́)", "окно́ (оно́)"],
          rows: [
            ["Имени́тельный", "студе́нт<b class='hl'>ы</b>", "стол<b class='hl'>ы́</b>", "кни́г<b class='hl'>и</b>", "о́кн<b class='hl'>а</b>"],
            ["Роди́тельный", "студе́нт<b class='hl'>ов</b>", "стол<b class='hl'>о́в</b>", "книг", "о́кон"],
            ["Да́тельный", "студе́нт<b class='hl'>ам</b>", "стол<b class='hl'>а́м</b>", "кни́г<b class='hl'>ам</b>", "о́кн<b class='hl'>ам</b>"],
            ["Вини́тельный", "студе́нт<b class='hl'>ов</b> ⚠", "стол<b class='hl'>ы́</b>", "кни́г<b class='hl'>и</b>", "о́кн<b class='hl'>а</b>"],
            ["Твори́тельный", "студе́нт<b class='hl'>ами</b>", "стол<b class='hl'>а́ми</b>", "кни́г<b class='hl'>ами</b>", "о́кн<b class='hl'>ами</b>"],
            ["Предло́жный", "о студе́нт<b class='hl'>ах</b>", "о стол<b class='hl'>а́х</b>", "о кни́г<b class='hl'>ах</b>", "об о́кн<b class='hl'>ах</b>"],
          ],
        },
        {
          t: "callout",
          tone: "info",
          title: "⚠ nima degani",
          text: "Faqat <b>jonli</b> otlar tushum kelishigida qaratqich shaklini oladi. «Столы» jonsiz — shuning uchun tushum kelishigida ham «столы́».",
        },
        {
          t: "callout",
          tone: "tip",
          title: "Uch jumlali xulosa",
          text: "① Jo'nalish, vosita, predlog — <b>har doim -ам / -ами / -ах</b>. Jinsni unuting.<br>② Tushum — <b>jonli bo'lsa qaratqich, jonsiz bo'lsa bosh kelishik</b>.<br>③ Qaratqich — <b>yagona qiyin joy</b>: -ов / -ей / nol.",
        },
        {
          t: "table",
          caption: "Eng ko'p ishlatiladigan istisnolar — to'liq",
          head: ["Birlik", "Bosh k. (ko'p.)", "Qaratqich (ko'p.)", "Vosita (ko'p.)"],
          rows: [
            ["челове́к", "лю́ди", "люде́й", "людьми́"],
            ["ребёнок", "де́ти", "дете́й", "детьми́"],
            ["друг", "друзья́", "друзе́й", "друзья́ми"],
            ["брат", "бра́тья", "бра́тьев", "бра́тьями"],
            ["сын", "сыновья́", "сынове́й", "сыновья́ми"],
            ["мать", "ма́тери", "матере́й", "матеря́ми"],
            ["дочь", "до́чери", "дочере́й", "дочерьми́"],
            ["год", "го́ды", "лет", "года́ми"],
          ],
        },

        { t: "h", text: "Aralash mashqlar" },
        {
          t: "quiz",
          q: "«В университе́те мно́го ___.» (преподаватели)",
          options: ["преподава́телей", "преподава́телов", "преподава́телям", "преподава́тели"],
          answer: 0,
          hint: "«Много» + qaratqich. -ь bilan tugaydi → -ей.",
        },
        {
          t: "quiz",
          q: "«Я говорю́ с ___.» (люди)",
          options: ["людя́ми", "людьми́", "люде́й", "лю́дям"],
          answer: 1,
          hint: "«Люди» — istisno: vosita kelishigida людьми́.",
        },
        {
          t: "quiz",
          q: "«Он живёт в ___.» (Ташкент) — «Мы говори́м о ___.» (города)",
          options: ["Ташке́нте … города́х", "Ташке́нт … города́м", "Ташке́нте … городо́в", "Ташке́нту … города́х"],
          answer: 0,
          hint: "Ikkalasi ham predlog kelishigi: birlikda -е, ko'plikda -ах.",
        },
        {
          t: "quiz",
          q: "«Ма́ма лю́бит свои́х ___.» (дети)",
          options: ["де́ти", "дете́й", "де́тям", "детьми́"],
          answer: 1,
          hint: "Tushum kelishigi + jonli → qaratqich shakli: дете́й.",
        },
        {
          t: "quiz",
          q: "«Мне 20 ___.»",
          options: ["год", "го́да", "лет", "го́ды"],
          answer: 2,
          hint: "20 — «5+» guruhida, demak ko'plik qaratqich. «Год» ning bu shakli — «лет» (istisno).",
        },
        {
          t: "fill",
          q: "To'ldiring: «У меня́ два ___.» (брат)",
          answer: ["брата", "бра́та"],
          hint: "2, 3, 4 dan keyin — birlik qaratqich: бра́та.",
        },
        {
          t: "fill",
          q: "To'ldiring: «У меня́ пять ___.» (брат)",
          answer: ["братьев", "бра́тьев"],
          hint: "5+ dan keyin — ko'plik qaratqich: бра́тьев (istisno).",
        },
        {
          t: "match",
          q: "Istisnolarni ulang",
          pairs: [
            ["челове́к (5+)", "люде́й"],
            ["ребёнок (5+)", "дете́й"],
            ["друг (5+)", "друзе́й"],
            ["год (5+)", "лет"],
          ],
        },
      ],
    },
  ],
};
