// Kategoriya 0 — Alifbo va talaffuz.
// Darslikning o'zi bu qismni qamramaydi: uning 4-betida aytilishicha, undan oldin
// alohida "фонетико-грамматический курс" o'qiladi. Shu bo'shliqni to'ldiramiz.

export default {
  id: "alphabet",
  emoji: "🔤",
  title: "Alifbo va talaffuz",
  desc: "Harflarni o'qishni bilmasangiz, grammatika foydasiz. 33 harf, urg'u va rus tilining «yozilgani boshqa, o'qilgani boshqa» qoidalari.",
  lessons: [
    /* ---------------------------------------------------------------- */
    {
      id: "cyrillic",
      title: "Kirill alifbosi: 33 harf",
      subtitle: "Harflarni uch guruhga ajratamiz: tanishlari, aldamchilari va butunlay yangilari.",
      blocks: [
        {
          t: "p",
          text: "Rus alifbosida <b>33 harf</b> bor: 10 unli, 21 undosh va 2 ta tovushsiz belgi. Ko'pchilik uni «juda qiyin» deb o'ylaydi, aslida bir necha kunda o'zlashtiriladi — chunki harflarning uchdan biri sizga allaqachon tanish.",
        },

        { t: "h", text: "1-guruh: lotinchadagidek" },
        {
          t: "p",
          text: "Bu harflar lotinchaga o'xshaydi <b>va</b> xuddi shunday o'qiladi. Ular bilan hech qanday muammo yo'q.",
        },
        {
          t: "table",
          caption: "Bepul harflar",
          head: ["Harf", "O'qilishi", "Misol"],
          rows: [
            ["А а", "a", "м<b class='hl'>а</b>м<b class='hl'>а</b> — «mama»"],
            ["К к", "k", "<b class='hl'>к</b>то — «kto»"],
            ["М м", "m", "<b class='hl'>м</b>ир — «mir»"],
            ["О о", "o", "<b class='hl'>о</b>н — «on»"],
            ["Т т", "t", "<b class='hl'>т</b>ам — «tam»"],
          ],
        },

        { t: "h", text: "2-guruh: aldamchi «do'stlar»" },
        {
          t: "callout",
          tone: "warn",
          title: "Eng ko'p xato shu yerda qilinadi",
          text: "Bu harflar lotinchaga o'xshaydi, lekin <b>butunlay boshqacha</b> o'qiladi. Ularni ongli ravishda qayta o'rganish kerak.",
        },
        {
          t: "table",
          caption: "Ehtiyot bo'ling",
          head: ["Harf", "Ko'rinadi", "Aslida o'qiladi", "Misol"],
          rows: [
            ["В в", "«v»?", "<b class='hl'>v</b>", "<b>в</b>ода́ — «vada»"],
            ["Н н", "«h»?", "<b class='hl'>n</b>", "<b>н</b>ет — «net»"],
            ["Р р", "«p»?", "<b class='hl'>r</b>", "<b>р</b>ука́ — «ruka»"],
            ["С с", "«c»?", "<b class='hl'>s</b>", "<b>с</b>ын — «sin»"],
            ["У у", "«y»?", "<b class='hl'>u</b>", "<b>у</b>рок — «urok»"],
            ["Х х", "«x»?", "<b class='hl'>x</b> (o'zbekcha «x»)", "<b>х</b>леб — «xleb»"],
            ["Е е", "«e»?", "<b class='hl'>ye</b>", "<b>е</b>сть — «yest»"],
            ["Ё ё", "«yo»", "<b class='hl'>yo</b> (har doim urg'uli)", "<b>ё</b>лка — «yolka»"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "«Р» va «Х» o'zbeklarga oson",
          text: "<b>Р</b> — o'zbekcha «r» kabi titroq. <b>Х</b> — o'zbekcha «x» (xona, xat). Ingliz tilida bu tovushlar yo'q, shuning uchun inglizlarga qiyin, sizga esa tabiiy.",
        },

        { t: "h", text: "3-guruh: yangi harflar" },
        {
          t: "table",
          caption: "O'zbek lotin alifbosi bilan solishtirib o'rganamiz",
          head: ["Harf", "O'zbekcha", "Misol", "Harf", "O'zbekcha", "Misol"],
          rows: [
            ["Б б", "b", "<b>б</b>рат", "П п", "p", "<b>п</b>арк"],
            ["Г г", "g", "<b>г</b>од", "Ф ф", "f", "<b>ф</b>ильм"],
            ["Д д", "d", "<b>д</b>ом", "Ц ц", "ts", "<b>ц</b>ентр"],
            ["Ж ж", "j (jurnal)", "<b>ж</b>урна́л", "Ч ч", "ch", "<b>ч</b>ай"],
            ["З з", "z", "<b>з</b>ал", "Ш ш", "sh", "<b>ш</b>ко́ла"],
            ["И и", "i", "<b>и</b>мя", "Щ щ", "shsh (yumshoq)", "<b>щ</b>и"],
            ["Й й", "y (qisqa i)", "мо<b>й</b>", "Э э", "e", "<b>э</b>то"],
            ["Л л", "l", "<b>л</b>ампа", "Ю ю", "yu", "<b>ю</b>г"],
            ["", "", "", "Я я", "ya", "<b>я</b>зы́к"],
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "«Ы» — o'zbek tilida yo'q tovush",
          text: "<b>Ы</b> ni «i» deb o'qimang. U «i» va «u» orasidagi tovush: tilni orqaga tortib «i» ayting.<br>Farqni his qiling: <b>бить</b> (urmoq) va <b>быть</b> (bo'lmoq) — ikki xil so'z.<br>Boshida qiyin, lekin quloq tez o'rganadi.",
        },
        {
          t: "callout",
          tone: "info",
          title: "«Ъ» va «Ь» — tovushi yo'q",
          text: "Bu ikki belgi hech qanday tovush bermaydi. Ular faqat yonidagi harflarga ta'sir qiladi — keyingi darslarda ko'ramiz.<br><b>ь</b> — yumshatish belgisi (мягкий знак)<br><b>ъ</b> — ajratish belgisi (твёрдый знак), juda kam uchraydi",
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "vowels-stress",
      title: "Urg'u va unlilar: yozilgani ≠ o'qilgani",
      subtitle: "Rus tilining eng katta siri: urg'usiz unlilar o'zgaradi. «Молоко» — «malako» deb o'qiladi.",
      blocks: [
        {
          t: "callout",
          tone: "info",
          title: "Nega bu dars muhim",
          text: "Rus tilida <b>urg'u</b> (ударе́ние) so'zning tovushini butunlay o'zgartiradi. Urg'uni bilmasangiz, so'zni to'g'ri o'qiy olmaysiz. Shuning uchun bu saytda hamma so'zda urg'u belgisi qo'yilgan: <b>молоко́</b>.",
        },
        {
          t: "callout",
          tone: "warn",
          title: "Haqiqiy matnlarda urg'u belgisi bo'lmaydi",
          text: "Kitob, gazeta, sayt — hech qayerda urg'u yozilmaydi. Uni <b>so'z bilan birga</b> yodlash kerak, xuddi ingliz tilidagi talaffuz kabi. Lug'atlarda va darsliklarda esa ko'rsatiladi.",
        },

        { t: "h", text: "10 ta unli, 5 juftlik" },
        {
          t: "table",
          caption: "Har bir unlining «qattiq» va «yumshoq» varianti bor",
          head: ["Qattiq", "Yumshoq", "Farqi"],
          rows: [
            ["А", "Я", "я = «ya»"],
            ["О", "Ё", "ё = «yo»"],
            ["У", "Ю", "ю = «yu»"],
            ["Э", "Е", "е = «ye»"],
            ["Ы", "И", "i tovushi"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Yumshoq unlilar ikki ish qiladi",
          text: "① So'z boshida yoki unlidan keyin — <b>«y» tovushi qo'shadi</b>: <b>я</b>зы́к = «yazik», мо<b>я́</b> = «maya».<br>② Undoshdan keyin — <b>«y» qo'shmaydi, undoshni yumshatadi</b>: <b>ня</b>ня = «nyanya», не = «nye» emas, «n'e».",
        },

        { t: "h", text: "Reduksiya: urg'usiz «О» → «А»" },
        {
          t: "callout",
          tone: "warn",
          title: "Eng muhim talaffuz qoidasi",
          text: "Urg'u tushmagan <b>О</b> harfi <b>«a»</b> deb o'qiladi. Bu istisno emas — bu doimiy qoida.",
        },
        {
          t: "table",
          caption: "Yozilishi va o'qilishi",
          head: ["Yozilishi", "O'qilishi", "Ma'nosi"],
          rows: [
            ["мол<b class='hl'>о</b>к<b class='hl'>о́</b>", "мал<b class='hl'>а</b>ко́ — «malako»", "sut"],
            ["хор<b class='hl'>о</b>ш<b class='hl'>о́</b>", "хараш<b class='hl'>о́</b> — «xarasho»", "yaxshi"],
            ["<b class='hl'>о</b>кно́", "акно́ — «akno»", "deraza"],
            ["М<b class='hl'>о</b>сква́", "Масква́ — «Maskva»", "Moskva"],
            ["в<b class='hl'>о</b>да́", "вада́ — «vada»", "suv"],
            ["к<b class='hl'>о́</b>мната", "к<b class='hl'>о́</b>мната", "urg'u О da → o'zgarmaydi"],
          ],
        },
        {
          t: "callout",
          tone: "info",
          title: "Urg'usiz «Е» va «Я» → «И» ga yaqinlashadi",
          text: "<b>сестра́</b> → «sistra» · <b>язы́к</b> → «yizik» · <b>телефо́н</b> → «tilifon»<br>Bu «а→о» qadar keskin emas, lekin quloqqa shunday eshitiladi.",
        },
        {
          t: "callout",
          tone: "tip",
          title: "Bitta so'zda faqat bitta urg'u",
          text: "Va urg'uli unli <b>uzunroq va balandroq</b> aytiladi. Rus tilida urg'u erkin — u har qanday bo'g'inga tusha oladi, hatto so'z shakli o'zgarganda ko'chib ham ketadi:<br><b>рука́</b> (qo'l) → <b>ру́ки</b> (qo'llar) — urg'u joyini o'zgartirdi.",
        },

        { t: "h", text: "Urg'u ma'noni o'zgartirishi mumkin" },
        {
          t: "examples",
          items: [
            { ru: "за́мок — замо́к", uz: "qal'a — qulf" },
            { ru: "пла́чу — плачу́", uz: "yig'layapman — to'layapman" },
            { ru: "у́же — уже́", uz: "torroq — allaqachon" },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "consonants",
      title: "Undoshlar: karaxtlanish va moslashuv",
      subtitle: "So'z oxiridagi «б» — «p» deb o'qiladi. Yana bir necha qoida, keyin o'qishni to'liq bilasiz.",
      blocks: [
        { t: "h", text: "Jarangli va jarangsiz juftliklar" },
        {
          t: "p",
          text: "Rus undoshlarining ko'pi juft bo'lib yashaydi: bir xil og'iz shakli, farq faqat tovush paychalarida.",
        },
        {
          t: "table",
          caption: "6 juftlik — buni bilish keyingi qoida uchun kerak",
          head: ["Jarangli", "Б", "В", "Г", "Д", "Ж", "З"],
          rows: [["Jarangsiz", "П", "Ф", "К", "Т", "Ш", "С"]],
        },

        { t: "h", text: "Qoida 1: so'z oxirida jarangli → jarangsiz" },
        {
          t: "callout",
          tone: "warn",
          title: "Karaxtlanish (оглушение)",
          text: "So'z <b>oxirida</b> jarangli undosh o'z juftiga aylanadi.",
        },
        {
          t: "table",
          head: ["Yozilishi", "O'qilishi", "Ma'nosi"],
          rows: [
            ["хле<b class='hl'>б</b>", "хле<b class='hl'>п</b> — «xlep»", "non"],
            ["го́ро<b class='hl'>д</b>", "го́ра<b class='hl'>т</b> — «gorat»", "shahar"],
            ["дру<b class='hl'>г</b>", "дру<b class='hl'>к</b> — «druk»", "do'st"],
            ["но<b class='hl'>ж</b>", "но<b class='hl'>ш</b> — «nosh»", "pichoq"],
            ["ра<b class='hl'>з</b>", "ра<b class='hl'>с</b> — «ras»", "marta"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Shuning uchun imlo qiyin",
          text: "«Друг» va «друк» bir xil eshitiladi. Qaysi harf yozilishini bilish uchun so'zni <b>o'zgartirib ko'ring</b>: <b>дру<u>г</u>а́</b> (unli oldida «г» aniq eshitiladi) → demak «друг» deb yoziladi.",
        },

        { t: "h", text: "Qoida 2: qo'shni undoshga moslashish" },
        {
          t: "callout",
          tone: "info",
          title: "Assimilyatsiya",
          text: "Jarangsiz undosh oldidan kelgan jarangli — jarangsiz bo'ladi, va aksincha:<br><b>ло́жка</b> → «loshka» (ж → ш, chunki keyingi «к» jarangsiz)<br><b>сдать</b> → «zdat» (с → з, chunki keyingi «д» jarangli)<br><b>вчера́</b> → «fchira» (в → ф)",
        },

        { t: "h", text: "Qoida 3: yodlanadigan uchta istisno" },
        {
          t: "table",
          caption: "Bu so'zlar boshqacha o'qiladi",
          head: ["Yozilishi", "O'qilishi", "Izoh"],
          rows: [
            ["<b class='hl'>что</b>", "«shto»", "ч → ш"],
            ["<b class='hl'>коне́чно</b>", "«kanyeshna»", "ч → ш"],
            ["но́в<b class='hl'>ого</b>, е<b class='hl'>го́</b>", "«novava», «yevo»", "-ого/-его dagi <b>г</b> → <b>в</b>"],
            ["у́чит<b class='hl'>ся</b>, учи́ть<b class='hl'>ся</b>", "«uchitsa»", "-тся / -ться → «tsa»"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "«-ого → -ova» ni allaqachon uchratasiz",
          text: "Kelishiklar bo'limida <b>но́вого, моего́, э́того</b> shakllarini ko'rasiz. Hammasi «-ava» deb o'qiladi. Bu qoidani hozir bilib olsangiz, u yerda oson bo'ladi.",
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "soft-hard",
      title: "Ь, Ъ va imlo qoidalari",
      subtitle: "Tovushsiz ikki belgi va nima uchun «жи» hech qachon «жы» deb yozilmaydi.",
      blocks: [
        { t: "h", text: "Yumshoq belgi — Ь" },
        {
          t: "p",
          text: "<b>Ь</b> ning o'z tovushi yo'q. U <b>oldingi undoshni yumshatadi</b>. Yumshatish — tilning o'rtasini tanglayga yaqinlashtirish; natijada tovush «y» ga ozgina moyil bo'ladi.",
        },
        {
          t: "table",
          caption: "Bitta harf — ikki xil so'z",
          head: ["Qattiq", "Yumshoq", "Farq"],
          rows: [
            ["мат (shahmatda mat)", "мат<b class='hl'>ь</b> (ona)", "т → t'"],
            ["брат (aka)", "брат<b class='hl'>ь</b> (olmoq)", "t → t'"],
            ["у́гол (burchak)", "у́гол<b class='hl'>ь</b> (ko'mir)", "l → l'"],
            ["кров (boshpana)", "кров<b class='hl'>ь</b> (qon)", "v → v'"],
          ],
        },
        {
          t: "callout",
          tone: "info",
          title: "Yumshatishning ikkinchi usuli",
          text: "Undoshni <b>я, е, ё, ю, и</b> unlilari ham yumshatadi:<br><b>та</b> (qattiq) — <b>тя</b> (yumshoq)<br><b>то</b> — <b>тё</b> · <b>ту</b> — <b>тю</b> · <b>тэ</b> — <b>те</b> · <b>ты</b> — <b>ти</b><br>Shuning uchun <b>ты</b> (sen) va <b>ти</b> boshqa-boshqa eshitiladi.",
        },
        {
          t: "callout",
          tone: "tip",
          title: "Nega bu grammatika uchun muhim",
          text: "Yodingizda bo'lsa, <b>-ь</b> bilan tugagan ot ham erkak (<b>слова́рь</b>), ham ayol (<b>тетра́дь</b>) jinsida bo'lardi. Endi tushunarli: <b>ь</b> — tovush emas, jins belgisi ham emas, u faqat yumshatish belgisi.",
        },

        { t: "h", text: "Qattiq belgi — Ъ" },
        {
          t: "callout",
          tone: "info",
          title: "Juda kam uchraydi",
          text: "<b>Ъ</b> faqat prefiks va <b>е, ё, ю, я</b> orasida turadi va ularni <b>ajratadi</b> — ya'ni «y» tovushi saqlanadi:<br><b>объясни́ть</b> = «ab-yasnit» (b va ya alohida)<br><b>съесть</b> = «s-yest» · <b>подъе́зд</b> = «pad-yezd»<br>Butun rus tilida bunday so'zlar bir necha o'nlab.",
        },

        { t: "h", text: "Imlo qoidalari" },
        {
          t: "callout",
          tone: "warn",
          title: "Bu qoidalar butun kurs davomida ishlaydi",
          text: "Ular grammatik emas, <b>imloviy</b>. Ya'ni tovush bir xil, lekin yozilishi majburiy tarzda o'zgaradi. Kelishik qo'shimchalarida bularni doim ko'rasiz.",
        },
        {
          t: "table",
          caption: "Uchta asosiy qoida",
          head: ["Qoida", "To'g'ri", "Noto'g'ri"],
          rows: [
            ["<b>ж, ч, ш, щ, г, к, х</b> dan keyin <b>И</b> yoziladi, <b>Ы</b> emas", "жи́ть, ши́на, кни́ги, уро́ки", "<s>жы́ть, кни́гы</s>"],
            ["<b>ж, ч, ш, щ</b> dan keyin <b>А</b> yoziladi, <b>Я</b> emas", "часть, пло́щадь", "<s>чясть</s>"],
            ["<b>ж, ч, ш, щ</b> dan keyin <b>У</b> yoziladi, <b>Ю</b> emas", "пишу́, молчу́", "<s>пишю́</s>"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Endi tushunasiz, nega shunday",
          text: "<b>уро́к → уро́к<span class='hl'>и</span></b> (nega «-ы» emas? — к dan keyin ы yozilmaydi)<br><b>кни́га → кни́г<span class='hl'>и</span></b> (qaratqichda «-ы» kutilardi, lekin г)<br><b>хоро́ш<span class='hl'>ий</span></b> (nega «-ый» emas? — ш)<br><b>пиш<span class='hl'>у́</span></b> (nega «-ю» emas? — ш)<br><br>Bu bitta qoida — va u kursda o'nlab marta uchraydi.",
        },
        {
          t: "callout",
          tone: "info",
          title: "Yana bir qoida: urg'uga bog'liq О / Е",
          text: "<b>ж, ч, ш, щ, ц</b> dan keyin urg'u <b>tushsa — О</b>, tushmasa — <b>Е</b>:<br><b>врач<span class='hl'>о́м</span></b> (urg'u qo'shimchada) lekin <b>това́рищ<span class='hl'>ем</span></b> (urg'u o'zakda)<br><b>больш<span class='hl'>о́й</span></b> lekin <b>хоро́ш<span class='hl'>ий</span></b>",
        },
      ],
    },
  ],
};
