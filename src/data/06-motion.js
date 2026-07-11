// Kategoriya 6 — Harakat fe'llari / Глаголы движения (kitobning 129–161-betlari)

export default {
  id: "motion",
  emoji: "🚶",
  title: "Harakat fe'llari",
  desc: "«Bormoq» so'zi rus tilida o'nlab shaklga ega. Piyodami yoki transportda? Bir marta yoki doim? Prefiks bormi?",
  lessons: [
    /* ---------------------------------------------------------------- */
    {
      id: "motion-basics",
      title: "Prefiksiz: идти́ / ходи́ть, е́хать / е́здить",
      subtitle: "Ikki savol, to'rt fe'l. Piyoda yurasizmi yoki transportda? Bir yo'nalishdami yoki qatnaysizmi?",
      blocks: [
        {
          t: "callout",
          tone: "info",
          title: "Ikki o'lchovli tanlov",
          text: "Rus tilida «bormoq» ni tanlash uchun ikkita savolga javob berasiz:<br><b>1. Qanday?</b> Piyoda (<b>идти́/ходи́ть</b>) yoki transportda (<b>е́хать/е́здить</b>)?<br><b>2. Qachon?</b> Hozir, bir yo'nalishda (<b>идти́/е́хать</b>) yoki muntazam, u yoq-bu yoq (<b>ходи́ть/е́здить</b>)?",
        },
        {
          t: "table",
          caption: "To'rt fe'lning xaritasi",
          head: ["", "I guruh — hozir, bir yo'nalish", "II guruh — muntazam, turli yo'nalish"],
          rows: [
            ["<b>Piyoda</b>", "<b class='hl'>идти́</b><br><i>Сейча́с я иду́ в магази́н.</i>", "<b class='hl'>ходи́ть</b><br><i>Ка́ждый день я хожу́ в магази́н.</i>"],
            ["<b>Transportda</b>", "<b class='hl'>е́хать</b><br><i>Сейча́с я е́ду в Оде́ссу.</i>", "<b class='hl'>е́здить</b><br><i>Ка́ждое ле́то я е́зжу в Оде́ссу.</i>"],
          ],
        },

        { t: "h", text: "Tuslanish" },
        {
          t: "table",
          caption: "Hozirgi zamon",
          head: ["", "идти́", "е́хать", "ходи́ть", "е́здить"],
          rows: [
            ["я", "иду́", "е́ду", "хожу́", "е́зжу"],
            ["ты", "идёшь", "е́дешь", "хо́дишь", "е́здишь"],
            ["он / она́", "идёт", "е́дет", "хо́дит", "е́здит"],
            ["мы", "идём", "е́дем", "хо́дим", "е́здим"],
            ["вы", "идёте", "е́дете", "хо́дите", "е́здите"],
            ["они́", "иду́т", "е́дут", "хо́дят", "е́здят"],
          ],
        },
        {
          t: "table",
          caption: "O'tgan zamon",
          head: ["", "идти́", "е́хать", "ходи́ть", "е́здить"],
          rows: [
            ["он", "<b class='hl'>шёл</b>", "е́хал", "ходи́л", "е́здил"],
            ["она́", "<b class='hl'>шла</b>", "е́хала", "ходи́ла", "е́здила"],
            ["они́", "<b class='hl'>шли</b>", "е́хали", "ходи́ли", "е́здили"],
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "«Идти́» o'tgan zamonda tanib bo'lmas holga keladi",
          text: "<b>идти́ → шёл, шла, шли</b>. O'zak butunlay o'zgaradi. Buni yodlashdan boshqa iloj yo'q — lekin bu eng ko'p ishlatiladigan shakllardan biri, tez o'rganib ketasiz.",
        },

        { t: "h", text: "O'tgan zamonda ma'no farqi" },
        {
          t: "callout",
          tone: "info",
          title: "«Ходи́л» = «был» (bordim va qaytdim)",
          text: "<b>Вчера́ я ходи́л в клуб.</b> = Kecha klubga bordim (va qaytdim). Bu <b>«Вчера́ я был в клу́бе»</b> bilan bir xil ma'no.<br><b>Ле́том я е́здил в Ту́рцию.</b> = Yozda Turkiyaga bordim (va qaytdim).<br><br>Ikkinchi ma'no — takrorlanish: <b>В про́шлом году́ Оле́г ча́сто ходи́л в бассе́йн.</b>",
        },
        {
          t: "callout",
          tone: "tip",
          title: "«Шёл» — jarayon, yo'lda edim",
          text: "<b>Вчера́, когда́ я шёл на по́чту, я встре́тил дру́га.</b><br>= Kecha pochtaga <u>ketayotganimda</u>, do'stimni uchratdim. Hali yetib bormaganman, yo'ldaman.<br><br>Va tabiat hodisalari uchun ham: <b>Вчера́ шёл дождь.</b> (Kecha yomg'ir yog'di.) <b>Идёт снег.</b> (Qor yog'yapti.)",
        },

        { t: "h", text: "Kelasi zamon" },
        {
          t: "p",
          text: "Hammasi НСВ, demak <b>быть + infinitiv</b>: <b class='ru'>бу́ду идти́, бу́ду е́хать, бу́ду ходи́ть, бу́ду е́здить</b>.",
        },
        {
          t: "examples",
          items: [
            { ru: "Когда́ я <b class='hl'>бу́ду идти́</b> домо́й, я куплю́ молоко́.", uz: "Uyga ketayotganimda sut sotib olaman." },
            { ru: "Ле́том я ча́сто <b class='hl'>бу́ду ходи́ть</b> на футбо́л.", uz: "Yozda men tez-tez futbolga boraman." },
            { ru: "В университе́т я <b class='hl'>бу́ду е́здить</b> на метро́.", uz: "Universitetga metroda qatnayman." },
          ],
        },

        { t: "h", text: "Transportda — «на чём?»" },
        {
          t: "callout",
          tone: "info",
          title: "«на» + predlog kelishigi",
          text: "<b>на авто́бусе</b>, <b>на метро́</b>, <b>на маши́не</b>, <b>на по́езде</b>, <b>на такси́</b>, <b>на самолёте</b><br>Yoki vosita kelishigi: <b>по́ездом</b>, <b>самолётом</b>.<br><br>Piyoda esa: <b>пешко́м</b>. <i>Я иду́ пешко́м.</i>",
        },
        {
          t: "callout",
          tone: "warn",
          title: "«В авто́бусе» va «на авто́бусе»",
          text: "<b>Я е́ду на авто́бусе.</b> = Avtobusda ketyapman (transport vositasi sifatida).<br><b>Я сижу́ в авто́бусе.</b> = Avtobus ichida o'tiribman (jismoniy joy).",
        },

        { t: "h", text: "Boshqa harakat fe'llari" },
        {
          t: "table",
          caption: "Xuddi shu naqsh boshqa fe'llarda ham",
          head: ["I guruh (bir yo'nalish)", "II guruh (muntazam)", "Ma'no"],
          rows: [
            ["идти́", "ходи́ть", "piyoda bormoq"],
            ["е́хать", "е́здить", "transportda bormoq"],
            ["бежа́ть", "бе́гать", "yugurmoq"],
            ["лете́ть", "лета́ть", "uchmoq"],
            ["плыть", "пла́вать", "suzmoq"],
            ["нести́", "носи́ть", "olib bormoq (qo'lda)"],
            ["везти́", "вози́ть", "olib bormoq (transportda)"],
            ["вести́", "води́ть", "yetaklab bormoq"],
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "motion-prefix",
      title: "Prefiksli harakat fe'llari",
      subtitle: "при-, у-, в-, вы-, по-, до-, пере-… Bitta prefiks butun ma'noni o'zgartiradi.",
      blocks: [
        {
          t: "callout",
          tone: "info",
          title: "Prefiks qo'shilganda nima bo'ladi?",
          text: "Prefiks qo'shilishi bilan fe'l <b>tur juftligiga</b> aylanadi:<br><b>идти́</b> (I guruh) + при- → <b>прийти́</b> = <b>СВ</b> (tugallangan)<br><b>ходи́ть</b> (II guruh) + при- → <b>приходи́ть</b> = <b>НСВ</b> (takrorlanuvchi)<br><br>Ya'ni «bir yo'nalish / muntazam» qarama-qarshiligi <b>СВ / НСВ</b> qarama-qarshiligiga aylanadi.",
        },
        {
          t: "table",
          caption: "Asosiy prefikslar",
          head: ["Prefiks", "Ma'no", "НСВ", "СВ", "Misol"],
          rows: [
            ["<b>при-</b>", "kelmoq (yetib kelish)", "приходи́ть", "прийти́", "Он <b class='hl'>пришёл</b> домо́й."],
            ["<b>у-</b>", "ketmoq (uzoqlashish)", "уходи́ть", "уйти́", "Он <b class='hl'>ушёл</b> на рабо́ту."],
            ["<b>в- / во-</b>", "kirmoq", "входи́ть", "войти́", "Он <b class='hl'>вошёл</b> в ко́мнату."],
            ["<b>вы-</b>", "chiqmoq", "выходи́ть", "вы́йти", "Он <b class='hl'>вы́шел</b> из ко́мнаты."],
            ["<b>по-</b>", "yo'lga chiqmoq", "—", "пойти́", "Он <b class='hl'>пошёл</b> в кино́."],
            ["<b>под-</b>", "yaqinlashmoq", "подходи́ть", "подойти́", "Он <b class='hl'>подошёл</b> к окну́."],
            ["<b>ото- / от-</b>", "uzoqlashmoq", "отходи́ть", "отойти́", "Он <b class='hl'>отошёл</b> от окна́."],
            ["<b>пере-</b>", "kesib o'tmoq", "переходи́ть", "перейти́", "Он <b class='hl'>перешёл</b> у́лицу."],
            ["<b>до-</b>", "yetib bormoq", "доходи́ть", "дойти́", "Он <b class='hl'>дошёл</b> до угла́."],
            ["<b>за-</b>", "kirib o'tmoq", "заходи́ть", "зайти́", "Он <b class='hl'>зашёл</b> в магази́н."],
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "«Идти́» prefiks bilan yozilishi o'zgaradi",
          text: "при + идти́ = <b>прийти́</b> (не «приидти»)<br>у + идти́ = <b>уйти́</b><br>в + идти́ = <b>войти́</b><br>вы + идти́ = <b>вы́йти</b><br>по + идти́ = <b>пойти́</b><br><br>O'tgan zamonda esa «шёл» asosi qoladi: <b>пришёл, ушёл, вошёл, вы́шел, пошёл</b>.",
        },

        { t: "h", text: "Prefiks va predlog juftligi" },
        {
          t: "callout",
          tone: "tip",
          title: "Prefiks o'z predlogini «tortadi»",
          text: "Har bir prefiksga mos predlog bor. Buni bilsangiz, gap o'zi tuzuladi:<br><b>в</b>-ходи́ть <b>в</b> ко́мнату (kirmoq — nimaga)<br><b>вы</b>-ходи́ть <b>из</b> ко́мнаты (chiqmoq — nimadan)<br><b>под</b>-ходи́ть <b>к</b> окну́ (yaqinlashmoq — nimaga)<br><b>от</b>-ходи́ть <b>от</b> окна́ (uzoqlashmoq — nimadan)<br><b>до</b>-ходи́ть <b>до</b> угла́ (yetib bormoq — nimagacha)<br><b>при</b>-ходи́ть <b>в / к</b> (kelmoq)<br><b>у</b>-ходи́ть <b>из / от</b> (ketmoq)",
        },

        { t: "h", text: "«Пойти́» — alohida hikoya" },
        {
          t: "callout",
          tone: "info",
          title: "«Пошёл» = yo'lga chiqdi va hali qaytmadi",
          text: "<b>— Куда́ пошёл Жан? — Он пошёл в кино́.</b><br>Jan kinoga ketdi — <u>va hali u yerda</u>. Qaytmagan.<br><br>Solishtiring:<br><b>Он ходи́л в кино́.</b> = bordi va qaytdi (hozir shu yerda).<br><b>Он пошёл в кино́.</b> = ketdi (hozir bu yerda yo'q).",
        },
        {
          t: "examples",
          items: [
            { ru: "Я <b class='hl'>прихожу́</b> домо́й в шесть часо́в. (НСВ — har kuni)", uz: "Men uyga soat oltida kelaman." },
            { ru: "Вчера́ я <b class='hl'>пришёл</b> домо́й по́здно. (СВ — bir marta)", uz: "Kecha uyga kech keldim." },
            { ru: "Он <b class='hl'>вы́шел</b> из до́ма и <b class='hl'>пошёл</b> на рабо́ту.", uz: "U uydan chiqdi va ishga ketdi." },
            { ru: "Студе́нт <b class='hl'>вошёл</b> в аудито́рию.", uz: "Talaba auditoriyaga kirdi." },
            { ru: "<b class='hl'>Перейди́те</b> у́лицу на зелёный свет.", uz: "Ko'chani yashil chiroqda kesib o'ting." },
          ],
        },

        { t: "h", text: "Transport bilan: -е́хать / -езжа́ть" },
        {
          t: "table",
          caption: "Xuddi shu prefikslar, boshqa o'zak",
          head: ["Prefiks", "НСВ", "СВ", "Ma'no"],
          rows: [
            ["при-", "приезжа́ть", "прие́хать", "kelmoq (transportda)"],
            ["у-", "уезжа́ть", "уе́хать", "ketmoq"],
            ["в-", "въезжа́ть", "въе́хать", "kirmoq"],
            ["вы-", "выезжа́ть", "вы́ехать", "chiqmoq"],
            ["по-", "—", "пое́хать", "yo'lga chiqmoq"],
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "НСВ shakli «-езжа́ть»",
          text: "Diqqat: <b>приезжа́ть</b>, «приехать» ning НСВ shakli — <b>«приезди́ть» emas</b>. Bu o'zak faqat prefiks bilan ishlatiladi.",
        },
        {
          t: "examples",
          items: [
            { ru: "Я <b class='hl'>прие́хал</b> из Узбекиста́на.", uz: "Men O'zbekistondan keldim." },
            { ru: "Он <b class='hl'>уе́хал</b> в Москву́.", uz: "U Moskvaga ketdi." },
            { ru: "Ка́ждый год ко мне <b class='hl'>приезжа́ют</b> друзья́.", uz: "Har yili menikiga do'stlarim kelishadi." },
          ],
        },
      ],
    },
  ],
};
