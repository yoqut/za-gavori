// Kategoriya 1 — Kirish grammatika kursi (kitobning 5–23-betlari)

export default {
  id: "intro",
  emoji: "🌱",
  title: "Kirish grammatikasi",
  desc: "Noldan boshlaymiz: ot, olmosh, fe'l, sifat va son. Rus tilining skeleti shu yerda.",
  lessons: [
    /* ---------------------------------------------------------------- */
    {
      id: "noun-gender",
      title: "Ot: kim? nima? va uch jins",
      subtitle: "Har bir rus so'zi «erkak», «ayol» yoki «o'rta» bo'ladi. Buni oxirgi harfdan bilib olasiz.",
      blocks: [
        {
          t: "p",
          text: "Rus tilida gap juda oddiy savol bilan boshlanadi: <b>Кто это?</b> (Bu kim?) yoki <b>Что это?</b> (Bu nima?). Farqi bitta — jonli narsalar uchun <b>кто</b>, jonsiz narsalar uchun <b>что</b>.",
        },
        {
          t: "examples",
          items: [
            { ru: "— Кто это? — Это студент.", uz: "— Bu kim? — Bu talaba." },
            { ru: "— Что это? — Это книга.", uz: "— Bu nima? — Bu kitob." },
            { ru: "— Это книга? — Нет, это не книга. Это тетрадь.", uz: "— Bu kitobmi? — Yo'q, bu kitob emas. Bu daftar." },
          ],
        },
        {
          t: "callout",
          tone: "info",
          title: "Rus tilida «bu ... dir» yo'q",
          text: "«Это студент» — so'zma-so'z «Bu talaba». Hozirgi zamonda <b>«bo'lmoq»</b> fe'li umuman yozilmaydi. O'zbekchadagi «-dir» qo'shimchasini unuting.",
        },

        { t: "h", text: "Otning jinsi (род)" },
        {
          t: "p",
          text: "Endi eng muhim narsa. Har bir ot uchta guruhdan biriga kiradi: <b>erkak jinsi</b> (он), <b>ayol jinsi</b> (она), <b>o'rta jins</b> (оно). Nega kerak? Chunki sifat, o'tgan zamon fe'li va kelishik qo'shimchalari — hammasi jinsga qarab o'zgaradi.",
        },
        {
          t: "p",
          text: "Xushxabar: jinsni <b>so'zning oxirgi harfiga qarab</b> aniqlaysiz. Yodlash shart emas, qoida bor.",
        },
        {
          t: "table",
          caption: "Otning jinsi — oxirgi harfga qarab",
          head: ["Erkak jinsi — ОН", "Ayol jinsi — ОНА", "O'rta jins — ОНО"],
          rows: [
            [
              "undosh bilan tugaydi (Ø)<br>студент, стол, город, друг, каранда́ш",
              "<b class='hl'>-а</b><br>Анн<b class='hl'>а</b>, сестр<b class='hl'>а</b>, ко́мнат<b class='hl'>а</b>, кни́г<b class='hl'>а</b>",
              "<b class='hl'>-о</b><br>окн<b class='hl'>о</b>, посо́льств<b class='hl'>о</b>, сел<b class='hl'>о</b>",
            ],
            [
              "<b class='hl'>-й</b><br>музе<b class='hl'>й</b>, трамва<b class='hl'>й</b>",
              "<b class='hl'>-я</b><br>пе́сн<b class='hl'>я</b>, семь<b class='hl'>я</b>",
              "<b class='hl'>-е</b><br>мо́р<b class='hl'>е</b>, по́л<b class='hl'>е</b>",
            ],
            [
              "<b class='hl'>-ь</b> (ba'zilari)<br>преподава́тел<b class='hl'>ь</b>, слова́р<b class='hl'>ь</b>",
              "<b class='hl'>-ь</b> (ba'zilari)<br>тетра́д<b class='hl'>ь</b>, две́р<b class='hl'>ь</b>",
              "<b class='hl'>-ие</b><br>общежи́т<b class='hl'>ие</b>, упражне́н<b class='hl'>ие</b>",
            ],
            [
              "<b class='hl'>-ий</b><br>планета́р<b class='hl'>ий</b>",
              "<b class='hl'>-ия</b><br>аудито́р<b class='hl'>ия</b>",
              "—",
            ],
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "Yumshoq belgi (-ь) — yagona muammo",
          text: "<b>-ь</b> bilan tugagan so'z ham erkak, ham ayol jinsi bo'lishi mumkin. Buni qoida bilan aniqlab bo'lmaydi — lug'atdan qarab yodlaysiz. Masalan: <b>словарь</b> (он), lekin <b>тетрадь</b> (она).",
        },
        {
          t: "callout",
          tone: "tip",
          title: "Istisnolarni eslab qoling",
          text: "Ma'nosi erkak bo'lsa, oxiri <b>-а/-я</b> bo'lsa ham <b>erkak jinsi</b>: <b>папа, дедушка, юноша, дядя, мужчина</b>.<br>Va ikkita o'rta jins so'z <b>-я</b> bilan tugaydi: <b>имя</b> (ism), <b>время</b> (vaqt).",
        },

        { t: "h", text: "Oila — birinchi lug'at" },
        {
          t: "vocab",
          items: [
            { ru: "де́душка / ба́бушка", uz: "bobo / buvi" },
            { ru: "оте́ц (па́па) / мать (ма́ма)", uz: "ota / ona" },
            { ru: "роди́тели", uz: "ota-onalar" },
            { ru: "муж / жена́", uz: "er / xotin" },
            { ru: "сын / дочь", uz: "o'g'il / qiz (farzand)" },
            { ru: "брат / сестра́", uz: "aka-uka / opa-singil" },
            { ru: "внук / вну́чка", uz: "nabira (o'g'il / qiz)" },
            { ru: "ма́льчик / де́вочка", uz: "o'g'il bola / qiz bola" },
            { ru: "ребёнок → де́ти", uz: "bola → bolalar" },
            { ru: "мужчи́на / же́нщина", uz: "erkak / ayol" },
            { ru: "челове́к → лю́ди", uz: "odam → odamlar" },
            { ru: "семья́", uz: "oila" },
          ],
        },

        { t: "h", text: "Qayerda? — Где?" },
        {
          t: "examples",
          items: [
            { ru: "здесь / тут ≠ там", uz: "bu yerda ≠ u yerda" },
            { ru: "сле́ва ≠ спра́ва", uz: "chapda ≠ o'ngda" },
            { ru: "— Где кни́га? — Кни́га там.", uz: "— Kitob qayerda? — Kitob u yerda." },
            { ru: "— Извини́те, где ру́чка? — Она́ здесь. — Спаси́бо.", uz: "— Kechirasiz, ruchka qayerda? — U bu yerda. — Rahmat." },
          ],
        },

        { t: "h", text: "Mashqlar" },
        {
          t: "quiz",
          q: "Qaysi savolni berasiz: «___ это? — Это преподаватель.»",
          options: ["Кто", "Что", "Где", "Как"],
          answer: 0,
          hint: "«Преподаватель» — bu odam, ya'ni jonli. Jonli narsaga har doim «кто».",
        },
        {
          t: "quiz",
          q: "«Общежитие» (yotoqxona) qaysi jins?",
          options: ["Erkak jinsi (он)", "Ayol jinsi (она)", "O'rta jins (оно)"],
          answer: 2,
          hint: "Oxiri -ие. -о, -е, -ие bilan tugagan otlar — o'rta jins.",
        },
        {
          t: "quiz",
          q: "Qaysi so'z boshqalardan farq qiladi (jinsi bo'yicha)?",
          options: ["ко́мната", "сестра́", "па́па", "кни́га"],
          answer: 2,
          hint: "Hammasi -а bilan tugaydi, lekin «папа» — ota, ya'ni ma'nosi erkak. Shuning uchun u erkak jinsi.",
        },
        {
          t: "match",
          q: "Otni to'g'ri jinsga ulang",
          pairs: [
            ["слова́рь", "он"],
            ["тетра́дь", "она́"],
            ["мо́ре", "оно́"],
            ["трамва́й", "он"],
            ["аудито́рия", "она́"],
          ],
          note: "Diqqat: «словарь» va «тетрадь» ikkalasi ham -ь bilan tugaydi, lekin jinsi har xil.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Мама и папа — это муж и ___.»",
          answer: ["жена", "жена́"],
          hint: "Er va xotin — муж и жена́.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Внук и внучка — это брат и ___.»",
          answer: ["сестра", "сестра́"],
          hint: "Nevara o'g'il va nevara qiz — aka va singil.",
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "noun-number",
      title: "Ot: birlik va ko'plik",
      subtitle: "Bitta stol — стол. Ko'p stol — столы. Qo'shimcha oxirgi harfga bog'liq.",
      blocks: [
        {
          t: "p",
          text: "Ko'plik yasash oson: so'z oxiriga <b>-ы, -и, -а</b> yoki <b>-я</b> qo'shiladi. Qaysi birini tanlash — jinsga va oxirgi harfga bog'liq.",
        },
        {
          t: "table",
          caption: "Erkak va ayol jinsi — ko'plik",
          head: ["Birlik", "Ko'plik", "Qoida"],
          rows: [
            ["студе́нт, стол", "студе́нт<b class='hl'>ы</b>, стол<b class='hl'>ы</b>", "undosh + <b>ы</b>"],
            ["уро́к, врач", "уро́к<b class='hl'>и</b>, врач<b class='hl'>и</b>", "г, к, х va ж, ч, ш, щ dan keyin — <b>и</b>"],
            ["преподава́тель, музе́й", "преподава́тел<b class='hl'>и</b>, музе́<b class='hl'>и</b>", "ь → и, й → и"],
            ["сестра́, кни́га", "сёстр<b class='hl'>ы</b>, кни́г<b class='hl'>и</b>", "а → ы (lekin г,к,х dan keyin и)"],
            ["пе́сня, тетра́дь", "пе́сн<b class='hl'>и</b>, тетра́д<b class='hl'>и</b>", "я → и, ь → и"],
          ],
        },
        {
          t: "table",
          caption: "O'rta jins — ko'plik",
          head: ["Birlik", "Ko'plik", "Qoida"],
          rows: [
            ["окно́, письмо́", "о́кн<b class='hl'>а</b>, пи́сьм<b class='hl'>а</b>", "о → а"],
            ["мо́ре, по́ле", "мор<b class='hl'>я́</b>, пол<b class='hl'>я́</b>", "е → я"],
            ["общежи́тие, зда́ние", "общежи́ти<b class='hl'>я</b>, зда́ни<b class='hl'>я</b>", "ие → ия"],
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "Yodlanadigan istisnolar",
          text: "Bularni qoida bilan chiqarib bo'lmaydi:<br><b>челове́к → лю́ди</b> · <b>ребёнок → де́ти</b> · <b>друг → друзья́</b> · <b>брат → бра́тья</b> · <b>сын → сыновья́</b> · <b>мать → ма́тери</b> · <b>дочь → до́чери</b> · <b>дом → дома́</b> · <b>го́род → города́</b> · <b>учи́тель → учителя́</b>",
        },
        {
          t: "callout",
          tone: "info",
          title: "Umuman o'zgarmaydigan so'zlar",
          text: "Chet tilidan kirgan ba'zi so'zlar hech qachon o'zgarmaydi: <b>ко́фе, метро́, кино́, ра́дио, кафе́, пальто́, такси́</b>. Birlikda ham, ko'plikda ham — bir xil.",
        },

        { t: "h", text: "Mashqlar" },
        {
          t: "quiz",
          q: "«Уро́к» so'zining ko'pligi qaysi?",
          options: ["уро́кы", "уро́ки", "уро́ка", "уро́кя"],
          answer: 1,
          hint: "к harfidan keyin hech qachon «ы» yozilmaydi — faqat «и». Bu imlo qoidasi (г, к, х + и).",
        },
        {
          t: "quiz",
          q: "Qaysi juftlik NOTO'G'RI?",
          options: ["окно́ — о́кна", "мо́ре — моря́", "челове́к — челове́ки", "пе́сня — пе́сни"],
          answer: 2,
          hint: "«Человек» ning ko'pligi — «лю́ди». Bu istisno, yodlash kerak.",
        },
        {
          t: "fill",
          q: "Ko'plikka o'tkazing: «друг» → ___",
          answer: ["друзья", "друзья́"],
          hint: "Istisno so'z: друг → друзья́.",
        },
        {
          t: "fill",
          q: "Ko'plikka o'tkazing: «общежитие» → ___",
          answer: ["общежития", "общежи́тия"],
          hint: "-ие → -ия.",
        },
        {
          t: "match",
          q: "Birlikni ko'plikka ulang",
          pairs: [
            ["ребёнок", "де́ти"],
            ["го́род", "города́"],
            ["врач", "врачи́"],
            ["письмо́", "пи́сьма"],
            ["тетра́дь", "тетра́ди"],
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "pronouns",
      title: "Olmoshlar: я, ты, мой, твой…",
      subtitle: "Shaxs olmoshlari va egalik olmoshlari — gapning eng ko'p ishlatiladigan so'zlari.",
      blocks: [
        { t: "h", text: "Shaxs olmoshlari" },
        {
          t: "table",
          caption: "Kim harakat qilyapti?",
          head: ["Rus tilida", "O'zbekcha", "Izoh"],
          rows: [
            ["я", "men", ""],
            ["ты", "sen", "yaqin odamga, do'stga"],
            ["он / она́ / оно́", "u", "otning jinsiga qarab tanlanadi"],
            ["мы", "biz", ""],
            ["вы", "siz / sizlar", "hurmat uchun ham, ko'plik uchun ham"],
            ["они́", "ular", ""],
          ],
        },
        {
          t: "callout",
          tone: "info",
          title: "«Он» har doim ham «u kishi» emas",
          text: "Rus tilida jonsiz narsa ham «он» yoki «она́» bo'ladi — chunki otning jinsi shunday. <b>Стол — он. Кни́га — она́. Окно́ — оно́.</b> Bu o'zbek tilida g'alati tuyuladi, lekin rus tilida normal.",
        },
        {
          t: "examples",
          items: [
            { ru: "— Кто это? — Это Ви́ктор. — Кто он? — Он студе́нт.", uz: "— Bu kim? — Bu Viktor. — U kim? — U talaba." },
            { ru: "— Где слова́рь? — Он на столе́.", uz: "— Lug'at qayerda? — U stolda. (lug'at = «он»)" },
          ],
        },

        { t: "h", text: "Egalik olmoshlari" },
        {
          t: "p",
          text: "«Mening kitobim» deyish uchun rus tilida <b>egalik olmoshi</b> otning jinsiga moslashadi. Ya'ni «mening» so'zi to'rt xil ko'rinishga ega: <b>мой, моя́, моё, мои́</b>.",
        },
        {
          t: "table",
          caption: "Egalik olmoshlari",
          head: ["Kimniki?", "он", "она́", "оно́", "они́ (ko'plik)"],
          rows: [
            ["mening", "мой брат", "моя́ сестра́", "моё окно́", "мои́ кни́ги"],
            ["sening", "твой брат", "твоя́ сестра́", "твоё окно́", "твои́ кни́ги"],
            ["bizning", "наш брат", "на́ша сестра́", "на́ше окно́", "на́ши кни́ги"],
            ["sizning", "ваш брат", "ва́ша сестра́", "ва́ше окно́", "ва́ши кни́ги"],
            ["uning / ularning", "его́ · её · их", "его́ · её · их", "его́ · её · их", "его́ · её · их"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Eng oson qism",
          text: "<b>его́</b> (uning — erkak), <b>её</b> (uning — ayol), <b>их</b> (ularning) — bular <u>hech qachon o'zgarmaydi</u>. <b>его́ брат, его́ сестра́, его́ кни́ги</b> — hammasi bir xil.",
        },
        {
          t: "callout",
          tone: "warn",
          title: "Diqqat: «его́» — «yevo» deb o'qiladi",
          text: "Rus tilida <b>-ого / -его</b> qo'shimchasidagi <b>г</b> harfi <b>«в»</b> deb talaffuz qilinadi. Yozilishi «его», o'qilishi «yevo».",
        },

        { t: "h", text: "Ko'rsatish olmoshlari" },
        {
          t: "examples",
          items: [
            { ru: "э́тот дом, э́та кни́га, э́то окно́, э́ти кни́ги", uz: "bu uy, bu kitob, bu deraza, bu kitoblar" },
            { ru: "Э́то мой дом. Э́тот дом — мой.", uz: "Bu mening uyim. Bu uy — meniki." },
          ],
        },
        {
          t: "callout",
          tone: "info",
          title: "«Э́то» va «э́тот» ni chalkashtirmang",
          text: "<b>Э́то</b> = «Bu ...». Hech qachon o'zgarmaydi: <i>Это книга. Это стол.</i><br><b>Э́тот / э́та / э́то / э́ти</b> = «bu (aynan shu)» — otga qo'shilib keladi va jinsga moslashadi: <i>Этот стол. Эта книга.</i>",
        },

        { t: "h", text: "Mashqlar" },
        {
          t: "quiz",
          q: "«___ сестра́» — «mening singlim»",
          options: ["мой", "моя́", "моё", "мои́"],
          answer: 1,
          hint: "«Сестра» — ayol jinsi (она), demak «моя́».",
        },
        {
          t: "quiz",
          q: "«Это Анна. ___ книга здесь.» (Bu Anna. Uning kitobi shu yerda.)",
          options: ["его́", "её", "их", "ва́ша"],
          answer: 1,
          hint: "Anna — ayol, demak «её». Diqqat: kitobning jinsi emas, EGASINING jinsi muhim.",
        },
        {
          t: "quiz",
          q: "Qaysi gap noto'g'ri?",
          options: ["Это моё окно́.", "Э́тот дом большо́й.", "Э́то кни́га моя́.", "Э́та кни́га — моя́."],
          answer: 2,
          hint: "So'z tartibi buzilgan. To'g'risi: «Это моя книга» yoki «Эта книга — моя».",
        },
        {
          t: "fill",
          q: "To'ldiring: «Где ___ учебник?» (Sening darsliging qayerda? — учебник = он)",
          answer: ["твой"],
          hint: "«Учебник» — erkak jinsi, demak «твой».",
        },
        {
          t: "match",
          q: "Otni to'g'ri olmosh bilan ulang",
          pairs: [
            ["наш дом", "он"],
            ["на́ша ко́мната", "она́"],
            ["на́ше зда́ние", "оно́"],
            ["на́ши друзья́", "они́"],
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "verb-present",
      title: "Fe'l: hozirgi zamon",
      subtitle: "Rus fe'llari ikki guruhga bo'linadi. Ikkalasining ham qo'shimchalarini bir marta yodlab, minglab fe'lni tuslay olasiz.",
      blocks: [
        {
          t: "p",
          text: "Rus tilida fe'l <b>shaxsga qarab o'zgaradi</b> — я, ты, он uchun har xil oxir. Bu o'zbek tiliga o'xshaydi (o'qiy<b>man</b>, o'qiy<b>san</b>). Farq shundaki, rus tilida ikkita asosiy naqsh bor: <b>I tuslanish</b> va <b>II tuslanish</b>.",
        },

        { t: "h", text: "I tuslanish (-е-)" },
        {
          t: "p",
          text: "Ko'pchilik fe'llar bu guruhda. Odatda <b>-ать / -ять</b> bilan tugaydi. Qo'shimchalarida <b>е</b> harfi bor.",
        },
        {
          t: "table",
          caption: "чита́ть (o'qimoq) — I tuslanish",
          head: ["Shaxs", "Fe'l", "Qo'shimcha"],
          rows: [
            ["я", "чита́<b class='hl'>ю</b>", "-ю"],
            ["ты", "чита́<b class='hl'>ешь</b>", "-ешь"],
            ["он / она́", "чита́<b class='hl'>ет</b>", "-ет"],
            ["мы", "чита́<b class='hl'>ем</b>", "-ем"],
            ["вы", "чита́<b class='hl'>ете</b>", "-ете"],
            ["они́", "чита́<b class='hl'>ют</b>", "-ют"],
          ],
        },
        {
          t: "p",
          text: "Xuddi shunday tuslanadi: <b class='ru'>де́лать</b> (qilmoq), <b class='ru'>рабо́тать</b> (ishlamoq), <b class='ru'>слу́шать</b> (tinglamoq), <b class='ru'>знать</b> (bilmoq), <b class='ru'>понима́ть</b> (tushunmoq), <b class='ru'>отвеча́ть</b> (javob bermoq), <b class='ru'>изуча́ть</b> (o'rganmoq), <b class='ru'>гуля́ть</b> (sayr qilmoq).",
        },

        { t: "h", text: "II tuslanish (-и-)" },
        {
          t: "p",
          text: "Odatda <b>-ить</b> bilan tugaydi (ba'zan -еть). Qo'shimchalarida <b>и</b> harfi bor.",
        },
        {
          t: "table",
          caption: "говори́ть (gapirmoq) — II tuslanish",
          head: ["Shaxs", "Fe'l", "Qo'shimcha"],
          rows: [
            ["я", "говор<b class='hl'>ю́</b>", "-ю"],
            ["ты", "говор<b class='hl'>и́шь</b>", "-ишь"],
            ["он / она́", "говор<b class='hl'>и́т</b>", "-ит"],
            ["мы", "говор<b class='hl'>и́м</b>", "-им"],
            ["вы", "говор<b class='hl'>и́те</b>", "-ите"],
            ["они́", "говор<b class='hl'>я́т</b>", "-ят"],
          ],
        },
        {
          t: "p",
          text: "Xuddi shunday: <b class='ru'>учи́ть</b> (yodlamoq), <b class='ru'>смотре́ть</b> (qaramoq), <b class='ru'>стро́ить</b> (qurmoq), <b class='ru'>кури́ть</b> (chekmoq), <b class='ru'>звони́ть</b> (qo'ng'iroq qilmoq).",
        },
        {
          t: "callout",
          tone: "tip",
          title: "Qanday farqlash kerak?",
          text: "Infinitiv (asl shakl) <b>-ить</b> bilan tugasa — deyarli har doim <b>II tuslanish</b>.<br>Boshqa hamma narsa (<b>-ать, -ять, -еть, -ти, -чь</b>) — odatda <b>I tuslanish</b>.<br>Bu 90% hollarda ishlaydi. Qolgan 10% — istisnolar.",
        },
        {
          t: "callout",
          tone: "warn",
          title: "Muhim istisnolar",
          text: "<b>-ить</b> bilan tugasa ham I tuslanish: <b>жить</b> (я жив<b class='hl'>у́</b>, ты жив<b class='hl'>ёшь</b>), <b>пить</b> (я пь<b class='hl'>ю</b>).<br><b>-ать/-еть</b> bilan tugasa ham II tuslanish: <b>слы́шать, держа́ть, смотре́ть, ви́деть</b>.",
        },

        { t: "h", text: "Yozganda o'zak o'zgaradigan fe'llar" },
        {
          t: "table",
          caption: "Eng ko'p uchraydigan «buzilgan» fe'llar",
          head: ["Infinitiv", "я", "ты", "они́"],
          rows: [
            ["писа́ть (yozmoq)", "пи<b class='hl'>ш</b>у́", "пи́<b class='hl'>ш</b>ешь", "пи́<b class='hl'>ш</b>ут"],
            ["жить (yashamoq)", "жив<b class='hl'>у́</b>", "живёшь", "живу́т"],
            ["идти́ (bormoq)", "ид<b class='hl'>у́</b>", "идёшь", "иду́т"],
            ["люби́ть (sevmoq)", "люб<b class='hl'>л</b>ю́", "лю́бишь", "лю́бят"],
            ["ходи́ть (qatnamoq)", "хо<b class='hl'>ж</b>у́", "хо́дишь", "хо́дят"],
          ],
        },

        { t: "h", text: "Mashqlar" },
        {
          t: "quiz",
          q: "«Мы ___ по-русски.» (Biz ruscha gapiramiz)",
          options: ["говори́м", "говори́те", "говоря́т", "говорю́"],
          answer: 0,
          hint: "«Мы» uchun II tuslanishda qo'shimcha «-им».",
        },
        {
          t: "quiz",
          q: "«Что ты ___?» (Nima qilyapsan?)",
          options: ["де́лаю", "де́лаешь", "де́лает", "де́лают"],
          answer: 1,
          hint: "«Ты» + I tuslanish = «-ешь».",
        },
        {
          t: "quiz",
          q: "«Писать» fe'lida «я» shakli qaysi?",
          options: ["писа́ю", "пишу́", "пису́", "пишю́"],
          answer: 1,
          hint: "О'zak о'zgaradi: с → ш. Va ж, ч, ш, щ dan keyin hech qachon «ю» yozilmaydi — «у» yoziladi.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Они ___ телевизор.» (смотреть)",
          answer: ["смотрят", "смо́трят"],
          hint: "«Смотреть» — istisno, II tuslanish. «Они» uchun «-ят».",
        },
        {
          t: "fill",
          q: "To'ldiring: «Я ___ в Ташкенте.» (жить)",
          answer: ["живу", "живу́"],
          hint: "«Жить» — istisno: я жив-у́.",
        },
        {
          t: "match",
          q: "Fe'lni to'g'ri shaxs bilan ulang",
          pairs: [
            ["чита́ешь", "ты"],
            ["чита́ем", "мы"],
            ["чита́ют", "они́"],
            ["чита́ете", "вы"],
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "verb-past-future",
      title: "Fe'l: o'tgan va kelasi zamon",
      subtitle: "O'tgan zamon shaxsni emas, jinsni ko'rsatadi. Bu rus tilining eng g'alati, lekin eng oson qismi.",
      blocks: [
        { t: "h", text: "O'tgan zamon (прошедшее время)" },
        {
          t: "p",
          text: "Yasash retsepti: infinitivdan <b>-ть</b> ni olib tashlang, o'rniga <b>-л</b> qo'ying. Keyin <b>kim gapiryapti emas, kim haqida gapirilyapti</b> — o'shanga qarab qo'shimcha qo'shing.",
        },
        {
          t: "table",
          caption: "чита́ть → чита́- + л",
          head: ["Kim haqida?", "Shakl", "Misol"],
          rows: [
            ["он (erkak)", "чита́<b class='hl'>л</b>", "Ви́ктор чита́л кни́гу."],
            ["она́ (ayol)", "чита́<b class='hl'>ла</b>", "А́нна чита́ла кни́гу."],
            ["оно́ (o'rta)", "чита́<b class='hl'>ло</b>", "Ра́дио рабо́тало."],
            ["они́ / мы / вы (ko'plik)", "чита́<b class='hl'>ли</b>", "Они́ чита́ли кни́гу."],
          ],
        },
        {
          t: "callout",
          tone: "info",
          title: "Eng muhim tushuncha",
          text: "O'tgan zamonda <b>«я», «ты», «он»</b> uchun alohida qo'shimcha YO'Q. Faqat <b>jins</b> va <b>son</b> muhim.<br>Erkak aytadi: <b>Я чита́л.</b><br>Ayol aytadi: <b>Я чита́ла.</b><br>Bitta so'z — ikki xil, gapirayotgan odamga qarab.",
        },
        {
          t: "callout",
          tone: "warn",
          title: "«Вы» har doim ko'plik",
          text: "Bitta odamga hurmat bilan murojaat qilsangiz ham: <b>Вы чита́ли</b> (чита́ли, «чита́л» emas).",
        },
        {
          t: "examples",
          items: [
            { ru: "Вчера́ я был до́ма.", uz: "Kecha men uyda edim. (erkak gapiryapti)" },
            { ru: "Вчера́ я была́ до́ма.", uz: "Kecha men uyda edim. (ayol gapiryapti)" },
            { ru: "Мы бы́ли в теа́тре.", uz: "Biz teatrda edik." },
            { ru: "Э́то бы́ло интере́сно.", uz: "Bu qiziq edi." },
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "«Быть» — o'tgan zamonda paydo bo'ladi",
          text: "Hozirgi zamonda «bo'lmoq» fe'li yozilmaydi (<i>Я студент</i>), lekin o'tgan zamonda majburiy: <b>был / была́ / бы́ло / бы́ли</b>. Inkori: <b>не́ был, не была́, не́ было, не́ были</b>.",
        },

        { t: "h", text: "Kelasi zamon (будущее время)" },
        {
          t: "p",
          text: "Tugallanmagan fe'l uchun kelasi zamon ikki so'zdan iborat: <b>быть</b> fe'lining tuslangan shakli + <b>infinitiv</b>. Bu ingliz tilidagi «will read» ga juda o'xshaydi.",
        },
        {
          t: "table",
          caption: "чита́ть — kelasi zamon",
          head: ["Shaxs", "Yordamchi", "Asosiy fe'l"],
          rows: [
            ["я", "бу́ду", "чита́ть"],
            ["ты", "бу́дешь", "чита́ть"],
            ["он / она́", "бу́дет", "чита́ть"],
            ["мы", "бу́дем", "чита́ть"],
            ["вы", "бу́дете", "чита́ть"],
            ["они́", "бу́дут", "чита́ть"],
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "Faqat infinitiv!",
          text: "Ikkinchi fe'l <b>hech qachon tuslanmaydi</b>. To'g'ri: <i>Я буду читать</i>. Noto'g'ri: <s>Я буду читаю</s>.",
        },
        {
          t: "examples",
          items: [
            { ru: "За́втра я бу́ду рабо́тать.", uz: "Ertaga men ishlayman." },
            { ru: "Ле́том мы бу́дем отдыха́ть.", uz: "Yozda biz dam olamiz." },
            { ru: "Где вы бу́дете жить?", uz: "Siz qayerda yashaysiz?" },
          ],
        },

        { t: "h", text: "Mashqlar" },
        {
          t: "quiz",
          q: "Anna aytadi: «Вчера я ___ письмо.» (писать)",
          options: ["писа́л", "писа́ла", "писа́ло", "писа́ли"],
          answer: 1,
          hint: "Anna — ayol. Ayol o'zi haqida gapirganda «-ла».",
        },
        {
          t: "quiz",
          q: "«Мы ___ в Москве.» (быть, o'tgan zamon)",
          options: ["был", "была́", "бы́ло", "бы́ли"],
          answer: 3,
          hint: "«Мы» — ko'plik. Ko'plik uchun har doim «-ли».",
        },
        {
          t: "quiz",
          q: "Qaysi gap NOTO'G'RI?",
          options: ["Я бу́ду чита́ть.", "Он бу́дет рабо́тать.", "Они́ бу́дут чита́ют.", "Вы бу́дете отдыха́ть."],
          answer: 2,
          hint: "«Бу́дут» dan keyin faqat infinitiv keladi — «читать», «читают» emas.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Завтра он ___ работать.»",
          answer: ["будет", "бу́дет"],
          hint: "«Он» uchun — бу́дет.",
        },
        {
          t: "fill",
          q: "Viktor haqida: «Виктор ___ дома.» (быть, o'tgan zamon)",
          answer: ["был"],
          hint: "Viktor — erkak, birlik. Qo'shimchasiz: был.",
        },
        {
          t: "match",
          q: "Shaklni egaga ulang",
          pairs: [
            ["рабо́тал", "он"],
            ["рабо́тала", "она́"],
            ["рабо́тали", "они́"],
            ["бу́ду рабо́тать", "я"],
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "adjective",
      title: "Sifat: qanday?",
      subtitle: "Sifat o'zi ta'riflayotgan otga moslashadi — jinsda ham, sonda ham.",
      blocks: [
        {
          t: "p",
          text: "Savol: <b>Како́й? Кака́я? Како́е? Каки́е?</b> — «Qanday?». Sifatning oxiri otning jinsiga qarab o'zgaradi. Bitta «yangi» so'zi to'rt xil yoziladi.",
        },
        {
          t: "table",
          caption: "но́вый (yangi) — asosiy naqsh",
          head: ["Jins", "Savol", "Sifat + ot"],
          rows: [
            ["он", "Како́й?", "но́в<b class='hl'>ый</b> дом"],
            ["она́", "Кака́я?", "но́в<b class='hl'>ая</b> кни́га"],
            ["оно́", "Како́е?", "но́в<b class='hl'>ое</b> окно́"],
            ["они́", "Каки́е?", "но́в<b class='hl'>ые</b> кни́ги"],
          ],
        },
        {
          t: "p",
          text: "Agar urg'u oxirga tushsa, erkak jinsida <b>-о́й</b> bo'ladi: <b class='ru'>большо́й дом, молодо́й челове́к</b>. Qolgan shakllar bir xil: <b class='ru'>больш<span class='hl'>а́я</span>, больш<span class='hl'>о́е</span>, больш<span class='hl'>и́е</span></b>.",
        },
        {
          t: "table",
          caption: "Boshqa naqshlar",
          head: ["Tur", "он", "она́", "оно́", "они́"],
          rows: [
            ["urg'u oxirda", "большо́й", "больша́я", "большо́е", "больши́е"],
            ["yumshoq (-ний)", "си́ний", "си́няя", "си́нее", "си́ние"],
            ["ж,ч,ш,щ,г,к,х dan keyin", "хоро́ший", "хоро́шая", "хоро́шее", "хоро́шие"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Imlo qoidasi ishlayapti",
          text: "«хоро́ш<b>ие</b>» — nega «-ые» emas? Chunki <b>ж, ч, ш, щ, г, к, х</b> dan keyin <b>ы</b> yozilmaydi. Bu qoida ko'plik otlarda ham ko'rgan edingiz (уро́к<b>и</b>).",
        },

        { t: "h", text: "Foydali sifatlar" },
        {
          t: "vocab",
          items: [
            { ru: "но́вый / ста́рый", uz: "yangi / eski" },
            { ru: "большо́й / ма́ленький", uz: "katta / kichik" },
            { ru: "хоро́ший / плохо́й", uz: "yaxshi / yomon" },
            { ru: "интере́сный / ску́чный", uz: "qiziqarli / zerikarli" },
            { ru: "тру́дный / лёгкий", uz: "qiyin / oson" },
            { ru: "краси́вый", uz: "chiroyli" },
            { ru: "молодо́й / ста́рый", uz: "yosh / keksa" },
            { ru: "дорого́й / дешёвый", uz: "qimmat / arzon" },
          ],
        },
        {
          t: "examples",
          items: [
            { ru: "— Како́й э́то дом? — Э́то но́вый дом.", uz: "— Bu qanday uy? — Bu yangi uy." },
            { ru: "У меня́ но́вая маши́на.", uz: "Menda yangi mashina bor." },
            { ru: "Ру́сский язы́к — тру́дный, но интере́сный.", uz: "Rus tili qiyin, lekin qiziqarli." },
          ],
        },
        {
          t: "callout",
          tone: "info",
          title: "Ravish — bir harf farqi",
          text: "Sifatdan ravish yasash uchun oxirini <b>-о</b> ga almashtiring:<br><b>хоро́ший</b> (yaxshi) → <b>хорошо́</b> (yaxshi qilib)<br><b>плохо́й</b> → <b>пло́хо</b> · <b>бы́стрый</b> → <b>бы́стро</b><br><i>Он хоро́ший студе́нт</i> (qanday?) va <i>Он хорошо́ говори́т</i> (qanday qilib?).",
        },

        { t: "h", text: "Mashqlar" },
        {
          t: "quiz",
          q: "«___ кни́га» — «qiziqarli kitob»",
          options: ["интере́сный", "интере́сная", "интере́сное", "интере́сные"],
          answer: 1,
          hint: "«Книга» — ayol jinsi (она), demak «-ая».",
        },
        {
          t: "quiz",
          q: "Qaysi shakl noto'g'ri?",
          options: ["хоро́шие студе́нты", "хоро́шый студе́нт", "хоро́шая кни́га", "хоро́шее окно́"],
          answer: 1,
          hint: "ш dan keyin «ы» yozilmaydi. To'g'risi — «хоро́ший».",
        },
        {
          t: "quiz",
          q: "«Он ___ говорит по-русски.» (хороший)",
          options: ["хоро́ший", "хоро́шая", "хорошо́", "хоро́шие"],
          answer: 2,
          hint: "Bu yerda fe'lni ta'riflayapmiz («qanday qilib gapiradi?»), demak ravish kerak: хорошо́.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Э́то ___ окно́.» (большой)",
          answer: ["большое", "большо́е"],
          hint: "«Окно» — o'rta jins, demak -ое.",
        },
        {
          t: "match",
          q: "Sifatni otga ulang",
          pairs: [
            ["но́вый", "дом"],
            ["но́вая", "маши́на"],
            ["но́вое", "зда́ние"],
            ["но́вые", "кни́ги"],
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "numerals-basic",
      title: "Sonlar 1–1000",
      subtitle: "Sanashni o'rganamiz. Sonlardan keyin ot qanday o'zgarishini keyingi darslarda ko'ramiz.",
      blocks: [
        {
          t: "table",
          caption: "1–20",
          head: ["Son", "Rus tilida", "Son", "Rus tilida"],
          rows: [
            ["1", "оди́н / одна́ / одно́", "11", "оди́ннадцать"],
            ["2", "два / две", "12", "двена́дцать"],
            ["3", "три", "13", "трина́дцать"],
            ["4", "четы́ре", "14", "четы́рнадцать"],
            ["5", "пять", "15", "пятна́дцать"],
            ["6", "шесть", "16", "шестна́дцать"],
            ["7", "семь", "17", "семна́дцать"],
            ["8", "во́семь", "18", "восемна́дцать"],
            ["9", "де́вять", "19", "девятна́дцать"],
            ["10", "де́сять", "20", "два́дцать"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "11–19 — bitta naqsh",
          text: "Hammasi <b>«son + надцать»</b>. Bu qadimgi «на де́сяте» (o'nning ustida) degani. Ya'ni <b>три + надцать = трина́дцать</b> (uch + o'nning ustida = 13).",
        },
        {
          t: "table",
          caption: "O'nliklar, yuzliklar",
          head: ["Son", "Rus tilida", "Son", "Rus tilida"],
          rows: [
            ["30", "три́дцать", "100", "сто"],
            ["40", "со́рок", "200", "две́сти"],
            ["50", "пятьдеся́т", "300", "три́ста"],
            ["60", "шестьдеся́т", "400", "четы́реста"],
            ["70", "се́мьдесят", "500", "пятьсо́т"],
            ["80", "во́семьдесят", "600", "шестьсо́т"],
            ["90", "девяно́сто", "1000", "ты́сяча"],
          ],
        },
        {
          t: "p",
          text: "Murakkab sonlar shunchaki qo'shiladi: <b class='ru'>два́дцать пять</b> (25), <b class='ru'>сто со́рок три</b> (143), <b class='ru'>ты́сяча девятьсо́т девяно́сто пять</b> (1995).",
        },
        {
          t: "callout",
          tone: "warn",
          title: "«Один» va «два» jinsga moslashadi",
          text: "Faqat shu ikkitasi:<br><b>оди́н</b> стол · <b>одна́</b> кни́га · <b>одно́</b> окно́<br><b>два</b> стола́ (он, оно) · <b>две</b> кни́ги (она́)<br>Qolgan sonlar (три, четыре, пять...) o'zgarmaydi.",
        },

        { t: "h", text: "Tartib sonlar" },
        {
          t: "p",
          text: "«Birinchi, ikkinchi...» — bular aslida <b>sifat</b>, shuning uchun jinsga moslashadi: <b class='ru'>пе́рвый уро́к, пе́рвая кни́га, пе́рвое сло́во</b>.",
        },
        {
          t: "table",
          caption: "Tartib sonlar",
          head: ["#", "Rus tilida", "#", "Rus tilida"],
          rows: [
            ["1-", "пе́рвый", "6-", "шесто́й"],
            ["2-", "второ́й", "7-", "седьмо́й"],
            ["3-", "тре́тий", "8-", "восьмо́й"],
            ["4-", "четвёртый", "9-", "девя́тый"],
            ["5-", "пя́тый", "10-", "деся́тый"],
          ],
        },

        { t: "h", text: "Mashqlar" },
        {
          t: "quiz",
          q: "«___ кни́ги» — «ikki kitob»",
          options: ["два", "две", "двe", "оба"],
          answer: 1,
          hint: "«Книга» — ayol jinsi, demak «две». Erkak/o'rta uchun «два».",
        },
        {
          t: "quiz",
          q: "17 rus tilida qanday?",
          options: ["семна́дцать", "семьдеся́т", "семь", "седьмо́й"],
          answer: 0,
          hint: "семь + надцать = семна́дцать.",
        },
        {
          t: "fill",
          q: "Raqamda yozing: «сорок восемь» = ___",
          answer: ["48"],
          hint: "со́рок = 40, во́семь = 8.",
        },
        {
          t: "fill",
          q: "So'z bilan yozing: 90 = ___",
          answer: ["девяносто", "девяно́сто"],
          hint: "Bu istisno — «девятьдесят» emas!",
        },
        {
          t: "match",
          q: "Sonni so'zga ulang",
          pairs: [
            ["40", "со́рок"],
            ["50", "пятьдеся́т"],
            ["90", "девяно́сто"],
            ["200", "две́сти"],
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "lubit-hotet-moch",
      title: "любить, хотеть, мочь",
      subtitle: "Uchta eng kerakli, eng qaysar fe'l. Ular hech qanday qoidaga bo'ysunmaydi — yodlaymiz.",
      blocks: [
        {
          t: "p",
          text: "Bu fe'llar shu qadar ko'p ishlatiladiki, ularni alohida o'rganish kerak. Ikkalasidan keyin ham <b>infinitiv</b> keladi: «Men o'qish<b>ni</b> yaxshi ko'raman».",
        },

        { t: "h", text: "люби́ть — sevmoq, yaxshi ko'rmoq" },
        {
          t: "table",
          caption: "II tuslanish, lekin «я» shaklida -л- paydo bo'ladi",
          head: ["Shaxs", "Shakl"],
          rows: [
            ["я", "люб<b class='hl'>л</b>ю́"],
            ["ты", "лю́бишь"],
            ["он / она́", "лю́бит"],
            ["мы", "лю́бим"],
            ["вы", "лю́бите"],
            ["они́", "лю́бят"],
          ],
        },
        {
          t: "examples",
          items: [
            { ru: "Я люблю́ ру́сский язы́к.", uz: "Men rus tilini yaxshi ko'raman." },
            { ru: "Она́ лю́бит чита́ть.", uz: "U o'qishni yaxshi ko'radi." },
          ],
        },

        { t: "h", text: "хоте́ть — xohlamoq" },
        {
          t: "callout",
          tone: "warn",
          title: "Aralash fe'l",
          text: "«Хотеть» — rus tilidagi eng g'alati fe'l. Birlikda <b>I tuslanish</b> kabi, ko'plikda <b>II tuslanish</b> kabi tuslanadi. Va o'zak ham o'zgaradi: т → ч.",
        },
        {
          t: "table",
          caption: "хоте́ть",
          head: ["Shaxs", "Shakl", "Naqsh"],
          rows: [
            ["я", "хо<b class='hl'>ч</b>у́", "I tur"],
            ["ты", "хо<b class='hl'>ч</b>ешь", "I tur"],
            ["он / она́", "хо<b class='hl'>ч</b>ет", "I tur"],
            ["мы", "хот<b class='hl'>и́м</b>", "II tur"],
            ["вы", "хот<b class='hl'>и́те</b>", "II tur"],
            ["они́", "хот<b class='hl'>я́т</b>", "II tur"],
          ],
        },
        {
          t: "examples",
          items: [
            { ru: "Я хочу́ есть.", uz: "Men ovqat yegim keladi." },
            { ru: "Мы хоти́м отдыха́ть.", uz: "Biz dam olmoqchimiz." },
            { ru: "Что вы хоти́те?", uz: "Nima xohlaysiz?" },
          ],
        },

        { t: "h", text: "мочь — qila olmoq" },
        {
          t: "table",
          caption: "мочь (о'zakda г ↔ ж almashadi)",
          head: ["Shaxs", "Shakl"],
          rows: [
            ["я", "мо<b class='hl'>г</b>у́"],
            ["ты", "мо́<b class='hl'>ж</b>ешь"],
            ["он / она́", "мо́<b class='hl'>ж</b>ет"],
            ["мы", "мо́<b class='hl'>ж</b>ем"],
            ["вы", "мо́<b class='hl'>ж</b>ете"],
            ["они́", "мо́<b class='hl'>г</b>ут"],
          ],
        },
        {
          t: "examples",
          items: [
            { ru: "Я не могу́ говори́ть.", uz: "Men gapira olmayman." },
            { ru: "Вы мо́жете помо́чь?", uz: "Yordam bera olasizmi?" },
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "«мочь» va «уметь» — farqi",
          text: "<b>мочь</b> = imkoniyat bor (<i>Сегодня я не могу — я занят</i> — bugun vaqtim yo'q).<br><b>уме́ть</b> = qila olish ko'nikmasi (<i>Я уме́ю пла́вать</i> — men suza olaman, o'rganganman).",
        },

        { t: "h", text: "Mashqlar" },
        {
          t: "quiz",
          q: "«Я ___ спать.» (хотеть)",
          options: ["хочу́", "хоти́м", "хо́чешь", "хотя́т"],
          answer: 0,
          hint: "«Я» uchun — хочу́ (о'zakda ч).",
        },
        {
          t: "quiz",
          q: "«Мы ___ пойти в кино.» (хотеть)",
          options: ["хо́чем", "хоти́м", "хо́чете", "хочу́"],
          answer: 1,
          hint: "Ko'plikda «хотеть» II tuslanish kabi: хоти́м. «Хочем» degan so'z yo'q.",
        },
        {
          t: "quiz",
          q: "«Они ___ помочь.» (мочь)",
          options: ["мо́жут", "мо́гут", "мо́жете", "могу́"],
          answer: 1,
          hint: "«Они» va «я» da — г (могу́, мо́гут). Qolganlarida — ж.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Я ___ русский язык.» (любить)",
          answer: ["люблю", "люблю́"],
          hint: "«Я» shaklida -л- qo'shiladi: люб-л-ю́.",
        },
        {
          t: "match",
          q: "To'g'ri shaklni toping",
          pairs: [
            ["я + хоте́ть", "хочу́"],
            ["вы + хоте́ть", "хоти́те"],
            ["я + мочь", "могу́"],
            ["ты + мочь", "мо́жешь"],
          ],
        },
      ],
    },
  ],
};
