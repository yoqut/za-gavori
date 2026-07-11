// Kategoriya 4 — Son va vaqt ifodasi (kitobning 106–110-betlari)

export default {
  id: "num-time",
  emoji: "🕐",
  title: "Sonlar va vaqt",
  desc: "Soat necha? Qachon tug'ilgansiz? Necha yoshdasiz? Sonlar bilan ot qanday «kelishadi» — shu yerda hal bo'ladi.",
  lessons: [
    /* ---------------------------------------------------------------- */
    {
      id: "numerals-cases",
      title: "Son + ot: qaysi shakl?",
      subtitle: "Rus tilida «5 ta kitob» deyish uchun kitobni to'g'ri shaklga qo'yish kerak. Bu — asosiy qoida.",
      blocks: [
        {
          t: "callout",
          tone: "info",
          title: "Nega bu qoida bor?",
          text: "Bu qadimgi rus tilidan qolgan: «ikkita» so'zi bir vaqtlar «juftlik» degan alohida son shaklini talab qilgan. Bugun mantiq yo'q — faqat naqsh bor. Uni yodlab olsangiz, hech qachon xato qilmaysiz.",
        },
        {
          t: "table",
          caption: "Uchta guruh — oxirgi raqamga qarab",
          head: ["Oxirgi raqam", "Otning shakli", "Misol"],
          rows: [
            ["<b>1</b> (1, 21, 31, 101…)", "bosh kelishik, <b>birlik</b>", "оди́н <b class='hl'>стол</b>, два́дцать оди́н <b class='hl'>стол</b>"],
            ["<b>2, 3, 4</b> (22, 33, 44…)", "qaratqich, <b>BIRLIK</b>", "два <b class='hl'>стола́</b>, три <b class='hl'>стола́</b>"],
            ["<b>5–20</b> va <b>0</b> (25, 30, 100…)", "qaratqich, <b>KO'PLIK</b>", "пять <b class='hl'>столо́в</b>, сто <b class='hl'>столо́в</b>"],
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "11, 12, 13, 14 — tuzoq",
          text: "Oxirgi raqam 1/2/3/4 bo'lsa ham, bu sonlar <b>«-надцать»</b> guruhiga kiradi va <b>ko'plik qaratqich</b> oladi:<br>❌ <s>оди́ннадцать стол</s> · ✅ <b>оди́ннадцать столо́в</b><br>❌ <s>двена́дцать стола́</s> · ✅ <b>двена́дцать столо́в</b><br>Lekin: <b>два́дцать оди́н стол</b> (21 — oxiri toza «1»).",
        },
        {
          t: "table",
          caption: "Uch xil ot, uch guruh",
          head: ["Son", "стол (он)", "кни́га (она́)", "окно́ (оно́)", "студе́нт (он, jonli)"],
          rows: [
            ["1 / 21", "оди́н стол", "одна́ кни́га", "одно́ окно́", "оди́н студе́нт"],
            ["2 / 22", "два стола́", "две кни́ги", "два окна́", "два студе́нта"],
            ["3, 4", "три стола́", "три кни́ги", "три окна́", "четы́ре студе́нта"],
            ["5–20", "пять столо́в", "пять книг", "пять о́кон", "пять студе́нтов"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "«Два» va «две»",
          text: "Faqat 2 (va 22, 32…) jinsga moslashadi:<br><b>два</b> — erkak va o'rta jins (два стола́, два окна́)<br><b>две</b> — ayol jinsi (две кни́ги)<br>«Оди́н» ham moslashadi (оди́н / одна́ / одно́). Qolgan hamma sonlar — o'zgarmaydi.",
        },

        { t: "h", text: "«Ско́лько?» — qancha?" },
        {
          t: "examples",
          items: [
            { ru: "— Ско́лько у вас книг? — У меня́ де́сять книг.", uz: "— Sizda nechta kitob bor? — Menda o'nta kitob bor." },
            { ru: "— Ско́лько сто́ит? — Три́ста рубле́й.", uz: "— Qancha turadi? — Uch yuz rubl." },
            { ru: "В гру́ппе двена́дцать студе́нтов.", uz: "Guruhda o'n ikki talaba bor." },
          ],
        },

        { t: "h", text: "Yosh — «Ско́лько лет?»" },
        {
          t: "callout",
          tone: "info",
          title: "Ikkita qoida birlashadi",
          text: "① Odam <b>jo'nalish kelishigida</b> bo'ladi: <b>Мне</b>, <b>Бра́ту</b>, <b>Ей</b>.<br>② «Год» so'zi <b>son qoidasiga</b> bo'ysunadi:<br>1, 21 → <b>год</b> · 2, 3, 4 → <b>го́да</b> · 5–20 → <b>лет</b>",
        },
        {
          t: "table",
          caption: "Yosh — misollar",
          head: ["Yosh", "Gap"],
          rows: [
            ["1", "Ему́ оди́н <b class='hl'>год</b>."],
            ["3", "Ей три <b class='hl'>го́да</b>."],
            ["7", "Ему́ семь <b class='hl'>лет</b>."],
            ["18", "Мне восемна́дцать <b class='hl'>лет</b>."],
            ["21", "Мне два́дцать оди́н <b class='hl'>год</b>."],
            ["22", "Бра́ту два́дцать два <b class='hl'>го́да</b>."],
            ["25", "Сестре́ два́дцать пять <b class='hl'>лет</b>."],
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "time",
      title: "Vaqt: soat, kun, oy, yil",
      subtitle: "«Qachon?» savoliga javob berishning barcha usullari. Har biri o'z predlogi va kelishigiga ega.",
      blocks: [
        { t: "h", text: "Soat necha? — «Кото́рый час?»" },
        {
          t: "p",
          text: "Eng oson usul — <b>raqam + soat so'zi</b>. Va yana o'sha son qoidasi!",
        },
        {
          t: "table",
          caption: "«Час» so'zining shakllari",
          head: ["Soat", "Rus tilida"],
          rows: [
            ["1:00", "оди́н <b class='hl'>час</b> (yoki shunchaki «час»)"],
            ["2:00 – 4:00", "два / три / четы́ре <b class='hl'>часа́</b>"],
            ["5:00 – 12:00", "пять … двена́дцать <b class='hl'>часо́в</b>"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Daqiqalar",
          text: "Rasmiy va oson usul: <b>соat + daqiqa</b>.<br><b>10:15</b> → «де́сять часо́в пятна́дцать мину́т»<br>«Минута» ham son qoidasiga bo'ysunadi: 1 <b>мину́та</b>, 2–4 <b>мину́ты</b>, 5+ <b>мину́т</b>.",
        },
        {
          t: "callout",
          tone: "info",
          title: "«Когда́?» — «в» + soat",
          text: "<b>— Когда́ уро́к? — В де́сять часо́в.</b> (Soat 10 da)<br>Soat oldidan <b>в</b> qo'yiladi va soat <b>tushum kelishigida</b> bo'ladi — lekin «час» so'zi ko'rinishini o'zgartirmaydi, shuning uchun eslab qolish oson.",
        },
        {
          t: "examples",
          items: [
            { ru: "— Кото́рый час? — Сейча́с три часа́.", uz: "— Soat necha? — Hozir soat uch." },
            { ru: "— Когда́ начина́ется уро́к? — В во́семь часо́в.", uz: "— Dars qachon boshlanadi? — Soat sakkizda." },
            { ru: "Я встаю́ в семь часо́в утра́.", uz: "Men ertalab soat yettida turaman." },
          ],
        },

        { t: "h", text: "Kun qismlari" },
        {
          t: "table",
          caption: "«Когда?» — bu so'zlar predlogsiz ishlatiladi",
          head: ["So'z", "Ma'no", "Misol"],
          rows: [
            ["у́тром", "ertalab", "У́тром я за́втракаю."],
            ["днём", "kunduzi", "Днём я рабо́таю."],
            ["ве́чером", "kechqurun", "Ве́чером я отдыха́ю."],
            ["но́чью", "kechasi", "Но́чью я сплю."],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Bu aslida vosita kelishigi",
          text: "«У́тром» = «у́тро» ning vosita kelishigi. Rus tilida vaqt shu tarzda ham ifodalanadi — predlogsiz. Xuddi shunday: <b>весно́й</b> (bahorda), <b>ле́том</b> (yozda), <b>о́сенью</b> (kuzda), <b>зимо́й</b> (qishda).",
        },

        { t: "h", text: "Hafta kunlari — «в» + tushum kelishigi" },
        {
          t: "table",
          caption: "Кто? Что? → Когда?",
          head: ["Kun", "«Qachon?» shakli"],
          rows: [
            ["понеде́льник", "<b class='hl'>в</b> понеде́льник"],
            ["вто́рник", "<b class='hl'>во</b> вто́рник"],
            ["среда́", "<b class='hl'>в</b> сре́д<b class='hl'>у</b>"],
            ["четве́рг", "<b class='hl'>в</b> четве́рг"],
            ["пя́тница", "<b class='hl'>в</b> пя́тниц<b class='hl'>у</b>"],
            ["суббо́та", "<b class='hl'>в</b> суббо́т<b class='hl'>у</b>"],
            ["воскресе́нье", "<b class='hl'>в</b> воскресе́нье"],
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "«Во вторник», «в» emas",
          text: "«Вторник» ikki undosh bilan boshlanadi (вт-), shuning uchun predlog <b>во</b> ga aylanadi. Xuddi shunday: <b>во Фра́нции</b>, <b>во второ́м</b>.",
        },

        { t: "h", text: "Oylar — «в» + predlog kelishigi" },
        {
          t: "table",
          caption: "Diqqat: oylarda -е qo'shimchasi",
          head: ["Oy", "«Qachon?»", "Oy", "«Qachon?»"],
          rows: [
            ["янва́рь", "в январ<b class='hl'>е́</b>", "ию́ль", "в ию́л<b class='hl'>е</b>"],
            ["февра́ль", "в феврал<b class='hl'>е́</b>", "а́вгуст", "в а́вгуст<b class='hl'>е</b>"],
            ["март", "в ма́рт<b class='hl'>е</b>", "сентя́брь", "в сентябр<b class='hl'>е́</b>"],
            ["апре́ль", "в апре́л<b class='hl'>е</b>", "октя́брь", "в октябр<b class='hl'>е́</b>"],
            ["май", "в ма́<b class='hl'>е</b>", "ноя́брь", "в ноябр<b class='hl'>е́</b>"],
            ["ию́нь", "в ию́н<b class='hl'>е</b>", "дека́брь", "в декабр<b class='hl'>е́</b>"],
          ],
        },
        {
          t: "callout",
          tone: "info",
          title: "Naqsh: kun ≠ oy",
          text: "<b>Kun</b> uchun — tushum kelishigi (в сре́д<b>у</b>).<br><b>Oy</b> uchun — predlog kelishigi (в ма́рт<b>е</b>).<br>Ikkalasida ham predlog «в», lekin kelishik boshqa. Bu tez-tez chalkashtiriladi.",
        },

        { t: "h", text: "Yil — «в» + predlog kelishigi + «году́»" },
        {
          t: "examples",
          items: [
            { ru: "Я роди́лся <b class='hl'>в две ты́сячи пе́рвом году́</b>.", uz: "Men 2001-yilda tug'ilganman." },
            { ru: "Э́то бы́ло <b class='hl'>в про́шлом году́</b>.", uz: "Bu o'tgan yili bo'lgan edi." },
            { ru: "<b class='hl'>В сле́дующем году́</b> я пое́ду в Москву́.", uz: "Kelasi yili men Moskvaga boraman." },
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "Yilda faqat oxirgi son tartib songa aylanadi",
          text: "<b>1995</b> = ты́сяча девятьсо́т девяно́сто <b class='hl'>пя́тый</b> год<br>Faqat «пять» → «пя́тый» bo'ldi. Qolganlari o'zgarmadi.<br>«Qachon?» uchun: <b>в ты́сяча девятьсо́т девяно́сто пя́том году́</b>.",
        },

        { t: "h", text: "Boshqa vaqt ifodalari" },
        {
          t: "vocab",
          items: [
            { ru: "сейча́с", uz: "hozir" },
            { ru: "сего́дня", uz: "bugun" },
            { ru: "вчера́ / за́втра", uz: "kecha / ertaga" },
            { ru: "ра́ньше / пото́м", uz: "avval / keyin" },
            { ru: "всегда́ / никогда́", uz: "har doim / hech qachon" },
            { ru: "ча́сто / ре́дко", uz: "tez-tez / kamdan-kam" },
            { ru: "иногда́", uz: "ba'zan" },
            { ru: "ка́ждый день", uz: "har kuni" },
            { ru: "на про́шлой неде́ле", uz: "o'tgan haftada" },
            { ru: "по́сле уро́ка", uz: "darsdan keyin" },
            { ru: "до обе́да", uz: "tushlikdan oldin" },
            { ru: "че́рез час", uz: "bir soatdan keyin" },
          ],
        },
      ],
    },
  ],
};
