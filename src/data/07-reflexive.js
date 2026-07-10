// Kategoriya 7 — -ся bilan tugaydigan fe'llar (kitobning 162–171-betlari)

export default {
  id: "reflexive",
  emoji: "🔄",
  title: "-ся fe'llari",
  desc: "Kitobning oxirgi bo'limi. «-ся» qo'shimchasi fe'lni o'ziga qaytaradi, o'zaro qiladi yoki majhulga aylantiradi.",
  lessons: [
    /* ---------------------------------------------------------------- */
    {
      id: "sya-forms",
      title: "«-ся» qanday qo'shiladi",
      subtitle: "Avval shakl, keyin ma'no. Qoida bir qatorda tugaydi.",
      blocks: [
        {
          t: "callout",
          tone: "info",
          title: "«-ся» aslida «себя́»",
          text: "Qadimda «себя́» (o'zini) so'zi fe'l oxiriga yopishib qolgan: <b>мыть себя́ → мы́ться</b> (yuvinmoq). Shuning uchun ko'p hollarda ma'no «o'zini ...moq» bo'ladi.",
        },
        {
          t: "callout",
          tone: "tip",
          title: "Yagona shakl qoidasi",
          text: "Fe'l <b>undosh</b> yoki <b>-ь</b> bilan tugasa → <b>-ся</b><br>Fe'l <b>unli</b> bilan tugasa → <b>-сь</b>",
        },
        {
          t: "table",
          caption: "занима́ться (shug'ullanmoq) — hozirgi zamon",
          head: ["Shaxs", "Shakl", "Nega?"],
          rows: [
            ["я", "занима́<b>ю</b><b class='hl'>сь</b>", "unli (ю) → сь"],
            ["ты", "занима́<b>ешь</b><b class='hl'>ся</b>", "ь → ся"],
            ["он / она́", "занима́<b>ет</b><b class='hl'>ся</b>", "undosh → ся"],
            ["мы", "занима́<b>ем</b><b class='hl'>ся</b>", "undosh → ся"],
            ["вы", "занима́<b>ете</b><b class='hl'>сь</b>", "unli (е) → сь"],
            ["они́", "занима́<b>ют</b><b class='hl'>ся</b>", "undosh → ся"],
          ],
        },
        {
          t: "table",
          caption: "O'tgan zamon",
          head: ["он", "она́", "оно́", "они́"],
          rows: [["занима́л<b class='hl'>ся</b>", "занима́ла<b class='hl'>сь</b>", "занима́ло<b class='hl'>сь</b>", "занима́ли<b class='hl'>сь</b>"]],
        },
        {
          t: "callout",
          tone: "warn",
          title: "Eng muhim cheklov",
          text: "<b>-ся</b> fe'llari <u>hech qachon</u> to'g'ri to'ldiruvchi (tushum kelishigi) qabul qilmaydi.<br>❌ <s>Я занима́юсь спорт.</s><br>✅ <b>Я занима́юсь спо́ртом.</b> (vosita kelishigi)<br><br>Ya'ni «себя» allaqachon to'ldiruvchi o'rnini egallagan.",
        },

        { t: "h", text: "Beshta ma'no guruhi" },
        {
          t: "p",
          text: "Kitob «-ся» fe'llarini beshta guruhga bo'ladi. Ularni bilish shart emas — lekin bilsangiz, notanish fe'lni ko'rganda ma'nosini taxmin qila olasiz.",
        },
        {
          t: "table",
          caption: "Guruhlar",
          head: ["Guruh", "Ma'no", "Misollar"],
          rows: [
            ["<b>1. O'zlik</b><br><small>собственно-возвратные</small>", "harakat o'zining ustida", "мы́ться (yuvinmoq), одева́ться (kiyinmoq), причёсываться (taranmoq), брить<b>ся</b> (soqol olmoq)"],
            ["<b>2. O'zaro</b><br><small>взаимно-возвратные</small>", "ikki kishi bir-biriga", "встреча́ться (uchrashmoq), обнима́ться (quchoqlashmoq), целова́ться (o'pishmoq), ссо́риться (janjallashmoq)"],
            ["<b>3. Umumiy holat</b><br><small>общевозвратные</small>", "his-tuyg'u, holat o'zgarishi", "ра́доваться (xursand bo'lmoq), волнова́ться (hayajonlanmoq), серди́ться (jahli chiqmoq), удивля́ться (hayron bo'lmoq)"],
            ["<b>4. O'rta</b><br><small>средневозвратные</small>", "predmetning doimiy xossasi", "начина́ться (boshlanmoq), конча́ться (tugamoq), открыва́ться (ochilmoq), закрыва́ться (yopilmoq)"],
            ["<b>5. Majhul</b><br><small>пассивные</small>", "ish kimdir tomonidan qilinadi", "стро́иться (qurilmoq), изуча́ться (o'rganilmoq)"],
          ],
        },

        { t: "h", text: "Mashqlar" },
        {
          t: "quiz",
          q: "«Я ___ спо́ртом.» (занима́ться)",
          options: ["занима́юся", "занима́юсь", "занима́ется", "занима́юсся"],
          answer: 1,
          hint: "«Занима́ю» unli (ю) bilan tugadi → «сь».",
        },
        {
          t: "quiz",
          q: "«Ты ___ ка́ждое у́тро.» (умыва́ться)",
          options: ["умыва́ешься", "умыва́ешьсь", "умыва́есься", "умыва́юсь"],
          answer: 0,
          hint: "«Умыва́ешь» ь bilan tugadi → «ся».",
        },
        {
          t: "quiz",
          q: "Qaysi gap NOTO'G'RI?",
          options: ["Я занима́юсь спо́ртом.", "Я занима́юсь спорт.", "Мы встреча́емся ве́чером.", "Она́ ра́дуется."],
          answer: 1,
          hint: "«-ся» fe'li tushum kelishigi olmaydi. «Спо́ртом» (vosita kelishigi) bo'lishi kerak.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Она́ ___ в 7 часо́в.» (просыпа́ться, hozirgi zamon)",
          answer: ["просыпается", "просыпа́ется"],
          hint: "«Она» → просыпа́ет + ся.",
        },
        {
          t: "match",
          q: "Fe'lni ma'no guruhiga ulang",
          pairs: [
            ["одева́ться", "o'zlik"],
            ["встреча́ться", "o'zaro"],
            ["ра́доваться", "holat"],
            ["начина́ться", "o'rta"],
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "sya-pairs",
      title: "«-ся» bor va yo'q: ma'no qanday o'zgaradi",
      subtitle: "Eng foydali dars. Bitta qo'shimcha gapning kim nima qilayotganini butunlay o'zgartiradi.",
      blocks: [
        {
          t: "callout",
          tone: "info",
          title: "Asosiy naqsh",
          text: "<b>-ся siz</b> → harakat <u>boshqa narsaga</u> yo'nalgan (o'timli fe'l).<br><b>-ся bilan</b> → harakat <u>o'ziga</u> qaytgan yoki o'z-o'zidan bo'lyapti (o'timsiz).",
        },
        {
          t: "table",
          caption: "Juftliklarni solishtiring",
          head: ["-ся siz (kimnidir/nimanidir)", "-ся bilan (o'zini / o'z-o'zidan)"],
          rows: [
            ["<b>мыть</b> посу́ду — idish yuvmoq", "<b>мы́ться</b> — yuvinmoq"],
            ["<b>одева́ть</b> ребёнка — bolani kiyintirmoq", "<b>одева́ться</b> — kiyinmoq"],
            ["<b>начина́ть</b> уро́к — darsni boshlamoq", "<b>начина́ться</b> — boshlanmoq"],
            ["<b>конча́ть</b> рабо́ту — ishni tugatmoq", "<b>конча́ться</b> — tugamoq"],
            ["<b>открыва́ть</b> дверь — eshikni ochmoq", "<b>открыва́ться</b> — ochilmoq"],
            ["<b>учи́ть</b> уро́к — darsni yodlamoq", "<b>учи́ться</b> — o'qimoq (talaba bo'lmoq)"],
            ["<b>встреча́ть</b> дру́га — do'stni kutib olmoq", "<b>встреча́ться</b> — uchrashmoq"],
            ["<b>возвраща́ть</b> кни́гу — kitobni qaytarmoq", "<b>возвраща́ться</b> — qaytmoq"],
          ],
        },
        {
          t: "examples",
          items: [
            { ru: "Преподава́тель <b class='hl'>начина́ет</b> уро́к. → Уро́к <b class='hl'>начина́ется</b>.", uz: "O'qituvchi darsni boshlaydi. → Dars boshlanadi." },
            { ru: "Ма́ма <b class='hl'>открыва́ет</b> дверь. → Дверь <b class='hl'>открыва́ется</b>.", uz: "Oyim eshikni ochadi. → Eshik ochiladi." },
            { ru: "Я <b class='hl'>мою</b> ру́ки. → Я <b class='hl'>мо́юсь</b>.", uz: "Men qo'llarimni yuvaman. → Men yuvinaman." },
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Sinash usuli",
          text: "Gapda <b>to'g'ri to'ldiruvchi</b> (кого́? что?) bormi?<br>Bor → <b>-ся siz</b>: <i>Он открыва́ет <u>дверь</u>.</i><br>Yo'q → <b>-ся bilan</b>: <i>Дверь открыва́ется.</i>",
        },

        { t: "h", text: "«Учи́ть», «учи́ться», «изуча́ть» — uchta o'xshash fe'l" },
        {
          t: "table",
          caption: "Boshlovchilarni eng ko'p chalkashtiradigan uchlik",
          head: ["Fe'l", "Ma'no", "Nima keladi keyin?", "Misol"],
          rows: [
            ["<b>учи́ть</b>", "yod olmoq, yodlamoq", "что? (tushum k.)", "Я учу́ но́вые слова́."],
            ["<b>изуча́ть</b>", "chuqur o'rganmoq (fan sifatida)", "что? (tushum k.)", "Я изуча́ю ру́сский язы́к."],
            ["<b>учи́ться</b>", "o'qimoq (o'quvchi bo'lmoq)", "где? yoki + infinitiv", "Я учу́сь в университе́те."],
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "«Учи́ться» dan keyin tushum kelishigi kelmaydi",
          text: "❌ <s>Я учу́сь ру́сский язы́к.</s><br>✅ <b>Я изуча́ю ру́сский язы́к.</b> (o'rganaman)<br>✅ <b>Я учу́сь в университе́те.</b> (universitetda o'qiyman)<br>✅ <b>Я учу́сь говори́ть по-ру́сски.</b> (gapirishni o'rganaman)",
        },

        { t: "h", text: "Kunlik tartib — «-ся» fe'llari amalda" },
        {
          t: "examples",
          items: [
            { ru: "Я <b class='hl'>просыпа́юсь</b> в семь часо́в.", uz: "Men soat yettida uyg'onaman." },
            { ru: "Пото́м я <b class='hl'>умыва́юсь</b> и <b class='hl'>одева́юсь</b>.", uz: "Keyin yuvinaman va kiyinaman." },
            { ru: "Уро́ки <b class='hl'>начина́ются</b> в во́семь три́дцать.", uz: "Darslar sakkiz yarimda boshlanadi." },
            { ru: "Мы <b class='hl'>встреча́емся</b> с друзья́ми ве́чером.", uz: "Do'stlarim bilan kechqurun uchrashamiz." },
            { ru: "Я <b class='hl'>возвраща́юсь</b> домо́й по́здно.", uz: "Uyga kech qaytaman." },
            { ru: "Я <b class='hl'>ложу́сь</b> спать в оди́ннадцать.", uz: "Soat o'n birda uxlashga yotaman." },
          ],
        },

        { t: "h", text: "Faqat «-ся» bilan yashaydigan fe'llar" },
        {
          t: "p",
          text: "Ba'zi fe'llarning <b>-ся siz shakli umuman yo'q</b>. Ular har doim shunday ishlatiladi:",
        },
        {
          t: "vocab",
          items: [
            { ru: "смея́ться", uz: "kulmoq" },
            { ru: "боя́ться", uz: "qo'rqmoq" },
            { ru: "улыба́ться", uz: "jilmaymoq" },
            { ru: "наде́яться", uz: "umid qilmoq" },
            { ru: "нра́виться", uz: "yoqmoq" },
            { ru: "стара́ться", uz: "harakat qilmoq" },
            { ru: "горди́ться", uz: "faxrlanmoq" },
            { ru: "остава́ться", uz: "qolmoq" },
          ],
        },
        {
          t: "callout",
          tone: "info",
          title: "Bu fe'llar qanday kelishik talab qiladi?",
          text: "<b>боя́ться</b> + qaratqich: <i>Я бою́сь соба́к.</i><br><b>горди́ться</b> + vosita: <i>Я горжу́сь бра́том.</i><br><b>занима́ться</b> + vosita: <i>Я занима́юсь спо́ртом.</i><br><b>интересова́ться</b> + vosita: <i>Я интересу́юсь му́зыкой.</i><br><b>нра́виться</b> + jo'nalish: <i>Мне нра́вится кни́га.</i>",
        },

        { t: "h", text: "Mashqlar" },
        {
          t: "quiz",
          q: "«Уро́к ___ в 9 часо́в.» (dars 9 da boshlanadi)",
          options: ["начина́ет", "начина́ется", "начина́ю", "начина́ешь"],
          answer: 1,
          hint: "Darsni hech kim boshlamayapti — u o'zi boshlanadi. Demak «-ся».",
        },
        {
          t: "quiz",
          q: "«Преподава́тель ___ уро́к.» (o'qituvchi darsni boshlaydi)",
          options: ["начина́ется", "начина́ет", "начина́ем", "начина́лся"],
          answer: 1,
          hint: "«Уро́к» — to'g'ri to'ldiruvchi bor, demak «-ся» kerak emas.",
        },
        {
          t: "quiz",
          q: "«Я ___ в университе́те.»",
          options: ["учу́", "изуча́ю", "учу́сь", "учи́ть"],
          answer: 2,
          hint: "«Где?» → учи́ться. «Учу́» va «изуча́ю» dan keyin «nimani» kerak.",
        },
        {
          t: "quiz",
          q: "«Я ___ ру́сский язы́к.»",
          options: ["учу́сь", "изуча́ю", "учу́ся", "занима́юсь"],
          answer: 1,
          hint: "«Ру́сский язы́к» — tushum kelishigi. «-ся» fe'li uni ololmaydi. → изуча́ю.",
        },
        {
          t: "quiz",
          q: "«Я ___ му́зыкой.» (musiqa bilan qiziqaman)",
          options: ["интересу́ю", "интересу́юсь", "интересу́ется", "интересова́ть"],
          answer: 1,
          hint: "«Интересова́ться» + vosita kelishigi (му́зыкой).",
        },
        {
          t: "fill",
          q: "To'ldiring: «Дверь ___.» (открыва́ться, hozirgi zamon)",
          answer: ["открывается", "открыва́ется"],
          hint: "Eshik o'zi ochilyapti → открыва́ется.",
        },
        {
          t: "fill",
          q: "To'ldiring: «Мы ___ ве́чером.» (встреча́ться)",
          answer: ["встречаемся", "встреча́емся"],
          hint: "«Мы» + встреча́ем + ся.",
        },
        {
          t: "match",
          q: "Fe'lni to'g'ri kelishikka ulang",
          pairs: [
            ["боя́ться", "соба́к (qaratqich)"],
            ["занима́ться", "спо́ртом (vosita)"],
            ["нра́виться", "мне (jo'nalish)"],
            ["горди́ться", "бра́том (vosita)"],
          ],
        },
      ],
    },
  ],
};
