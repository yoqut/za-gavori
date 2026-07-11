// Kategoriya 5 — Fe'l turlari / Виды глагола (kitobning 111–128-betlari)

export default {
  id: "aspect",
  emoji: "⚡",
  title: "Fe'l turlari (вид)",
  desc: "Rus tilining eng o'ziga xos hodisasi. «Men o'qidim» va «Men o'qib bo'ldim» — ikki xil fe'l. Buni tushunsangiz, rus tilida o'ylay boshlaysiz.",
  lessons: [
    /* ---------------------------------------------------------------- */
    {
      id: "aspect-basics",
      title: "НСВ va СВ: nima farqi bor?",
      subtitle: "Har bir rus fe'li juftlik bo'lib yashaydi. Bittasi jarayonni, ikkinchisi natijani bildiradi.",
      blocks: [
        {
          t: "callout",
          tone: "info",
          title: "Eng oddiy tushuntirish",
          text: "<b>Несоверше́нный вид (НСВ)</b> — «Что де́лать?» — <u>jarayon</u>, takrorlanish, odat. Natija muhim emas.<br><b>Соверше́нный вид (СВ)</b> — «Что <u>с</u>де́лать?» — <u>natija</u>, bir marta, tugallangan.<br><br>Bitta savol o'zi ayirmani ko'rsatadi: savolda <b>«с»</b> harfi bormi?",
        },
        {
          t: "table",
          caption: "Juftliklar",
          head: ["НСВ (jarayon)", "СВ (natija)", "Ma'no"],
          rows: [
            ["чита́ть", "<b class='hl'>про</b>чита́ть", "o'qimoq"],
            ["де́лать", "<b class='hl'>с</b>де́лать", "qilmoq"],
            ["писа́ть", "<b class='hl'>на</b>писа́ть", "yozmoq"],
            ["учи́ть", "<b class='hl'>вы</b>учить", "yodlamoq"],
            ["гото́вить", "<b class='hl'>при</b>гото́вить", "tayyorlamoq"],
            ["смотре́ть", "<b class='hl'>по</b>смотре́ть", "tomosha qilmoq"],
            ["реша́ть", "реши́ть", "hal qilmoq"],
            ["изуча́ть", "изучи́ть", "o'rganmoq"],
            ["получа́ть", "получи́ть", "olmoq"],
            ["объясня́ть", "объясни́ть", "tushuntirmoq"],
            ["брать", "взять", "olmoq (butunlay boshqa so'z!)"],
            ["говори́ть", "сказа́ть", "gapirmoq / aytmoq"],
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Juftlik qanday yasaladi — uch usul",
          text: "<b>1. Prefiks qo'shish:</b> чита́ть → <b>про</b>чита́ть (eng ko'p uchraydi)<br><b>2. Qo'shimchani qisqartirish:</b> реш<b>а́</b>ть → реш<b>и́</b>ть<br><b>3. Boshqa so'z:</b> брать → взять, говори́ть → сказа́ть<br><br>Uchinchi usul yodlanadi — mantiq yo'q.",
        },

        { t: "h", text: "Eng muhim narsa: zamonlar" },
        {
          t: "callout",
          tone: "warn",
          title: "СВ da hozirgi zamon YO'Q",
          text: "Mantiqiy: agar ish tugallangan bo'lsa, u <b>hozir</b> sodir bo'lolmaydi. Shuning uchun:<br><b>НСВ</b> → o'tgan, <u>hozirgi</u>, kelasi (3 zamon)<br><b>СВ</b> → o'tgan, kelasi (2 zamon)<br><br>Va СВ ning kelasi zamoni <b>hozirgi zamon shakliga o'xshaydi</b> — bu boshlovchilarni chalkashtiradi.",
        },
        {
          t: "table",
          caption: "чита́ть (НСВ) va прочита́ть (СВ) — hamma zamonlar",
          head: ["Zamon", "НСВ — чита́ть", "СВ — прочита́ть"],
          rows: [
            [
              "<b>Hozirgi</b>",
              "я чита́ю<br>ты чита́ешь<br>он чита́ет<br>мы чита́ем<br>вы чита́ете<br>они́ чита́ют",
              "<b class='hl'>— yo'q —</b>",
            ],
            [
              "<b>O'tgan</b>",
              "он чита́л<br>она́ чита́ла<br>они́ чита́ли",
              "он прочита́л<br>она́ прочита́ла<br>они́ прочита́ли",
            ],
            [
              "<b>Kelasi</b>",
              "я <b class='hl'>бу́ду</b> чита́ть<br>ты <b class='hl'>бу́дешь</b> чита́ть<br>он <b class='hl'>бу́дет</b> чита́ть<br>…",
              "я прочита́<b class='hl'>ю</b><br>ты прочита́<b class='hl'>ешь</b><br>он прочита́<b class='hl'>ет</b><br>…",
            ],
          ],
        },
        {
          t: "callout",
          tone: "warn",
          title: "Diqqat: «прочита́ю» — bu KELASI zamon",
          text: "<b>чита́ю</b> = hozir o'qiyapman (НСВ, hozirgi)<br><b>прочита́ю</b> = o'qib chiqaman (СВ, <u>kelasi</u>)<br><br>Ikkalasining oxiri bir xil («-ю»), lekin zamoni butunlay boshqa. Farq — prefiksda. Bu — eng ko'p qilinadigan xatolardan biri.",
        },

        { t: "h", text: "Dialoglarda ko'ramiz" },
        {
          t: "dialog",
          lines: [
            { who: "—", ru: "Оле́г, что ты де́лал вчера́ ве́чером?", uz: "Oleg, kecha kechqurun nima qilding? (jarayon haqida so'rayapti)" },
            { who: "—", ru: "Я чита́л кни́гу.", uz: "Kitob o'qidim. (band edim, natija noma'lum)" },
            { who: "—", ru: "Ты прочита́л кни́гу?", uz: "Kitobni o'qib tugatdingmi? (natija so'ralyapti)" },
            { who: "—", ru: "Да, прочита́л. О́чень интере́сная кни́га.", uz: "Ha, o'qib bo'ldim. Juda qiziqarli kitob." },
          ],
        },
        {
          t: "dialog",
          lines: [
            { who: "—", ru: "Ты смотре́л но́вый фильм?", uz: "Yangi filmni ko'rganmisan? (umuman)" },
            { who: "—", ru: "Нет, ещё не посмотре́л.", uz: "Yo'q, hali ko'rib ulgurmadim." },
            { who: "—", ru: "А я уже́ посмотре́л. Непло́хой фильм.", uz: "Men esa ko'rib bo'ldim. Yomon film emas." },
          ],
        },
        {
          t: "callout",
          tone: "tip",
          title: "Ikkita signal so'z",
          text: "<b>уже́</b> (allaqachon) va <b>ещё не</b> (hali emas) — deyarli har doim <b>СВ</b> bilan. Natija haqida gapiryapmiz.<br><b>ча́сто, всегда́, ка́ждый день, обы́чно, до́лго</b> — deyarli har doim <b>НСВ</b>. Takrorlanish yoki davomiylik.",
        },
      ],
    },

    /* ---------------------------------------------------------------- */
    {
      id: "aspect-usage",
      title: "Qaysi turni qachon ishlatish?",
      subtitle: "Nazariya tushunarli, amaliyot qiyin. Mana aniq qoidalar va tez-tez uchraydigan holatlar.",
      blocks: [
        {
          t: "table",
          caption: "НСВ tanlanadi, agar…",
          head: ["Holat", "Misol"],
          rows: [
            ["Jarayon (nima qilayotgan edi?)", "Вчера́ я <b class='hl'>чита́л</b> весь ве́чер."],
            ["Takrorlanish, odat", "Я <b class='hl'>чита́ю</b> ка́ждый день."],
            ["Umumiy fakt (bo'lganmi?)", "Ты <b class='hl'>смотре́л</b> э́тот фильм?"],
            ["Ikki ish parallel ketyapti", "Когда́ я <b class='hl'>шёл</b> домо́й, я <b class='hl'>ду́мал</b> о рабо́те."],
            ["Inkor: umuman qilmadim", "Я не <b class='hl'>чита́л</b> э́ту кни́гу."],
          ],
        },
        {
          t: "table",
          caption: "СВ tanlanadi, agar…",
          head: ["Holat", "Misol"],
          rows: [
            ["Natija bor, tugallandi", "Я <b class='hl'>прочита́л</b> кни́гу."],
            ["Bir marta, aniq payt", "Вчера́ я <b class='hl'>написа́л</b> письмо́."],
            ["Ketma-ket harakatlar", "Я <b class='hl'>встал</b>, <b class='hl'>умы́лся</b> и <b class='hl'>по́шёл</b> на рабо́ту."],
            ["Bir ish boshqasini uzdi", "Когда́ я чита́л, друг <b class='hl'>позвони́л</b>."],
            ["Inkor: ulgurmadim", "Я ещё не <b class='hl'>прочита́л</b> кни́гу."],
          ],
        },
        {
          t: "callout",
          tone: "info",
          title: "Ikki inkorning farqi — muhim nozik joy",
          text: "<b>Я не чита́л э́ту кни́гу.</b> (НСВ) = Men bu kitobni <u>umuman o'qimaganman</u>. Qo'limga olmadim.<br><b>Я не прочита́л э́ту кни́гу.</b> (СВ) = Men bu kitobni <u>o'qib tugatmadim</u>. Boshladim, lekin tugatmadim.<br><br>Bitta «не», ikki xil ma'no.",
        },
        {
          t: "callout",
          tone: "warn",
          title: "«Когда́» gaplarida — juda muhim",
          text: "<b>Когда́ я чита́л, друг позвони́л.</b><br>(НСВ + СВ) — men o'qiyotgan <u>paytda</u>, do'stim qo'ng'iroq qildi. Bittasi fon, ikkinchisi hodisa.<br><br><b>Когда́ я прочита́л кни́гу, я по́шёл спать.</b><br>(СВ + СВ) — avval o'qib bo'ldim, <u>keyin</u> uxlashga bordim. Ketma-ketlik.",
        },

        { t: "h", text: "Fe'llardan keyin qaysi tur?" },
        {
          t: "callout",
          tone: "tip",
          title: "Bu fe'llardan keyin faqat НСВ infinitivi",
          text: "<b>начина́ть / нача́ть</b> (boshlamoq), <b>продолжа́ть</b> (davom ettirmoq), <b>конча́ть / ко́нчить</b> (tugatmoq), <b>переста́ть</b> (to'xtatmoq), <b>люби́ть</b> (yaxshi ko'rmoq), <b>учи́ться</b> (o'rganmoq)<br><br>✅ Я <b>на́чал чита́ть</b>. · ❌ <s>Я на́чал прочита́ть.</s><br>Mantiq: «tugatishni boshlash» mumkin emas.",
        },

        { t: "h", text: "Buyruq maylida (императив)" },
        {
          t: "table",
          caption: "Bu yerda tur ma'noni butunlay o'zgartiradi",
          head: ["Shakl", "Ma'no"],
          rows: [
            ["<b>Чита́йте!</b> (НСВ)", "O'qing! (jarayon boshlansin, taklif)"],
            ["<b>Прочита́йте!</b> (СВ)", "O'qib chiqing! (natija kerak, aniq buyruq)"],
            ["<b>Не чита́йте!</b> (НСВ)", "O'qimang! (taqiq)"],
            ["<b>Не прочита́йте…</b>", "❌ deyarli ishlatilmaydi"],
          ],
        },
        {
          t: "callout",
          tone: "info",
          title: "Buyruq shakli qanday yasaladi",
          text: "«Они́» shaklini oling, qo'shimchani olib tashlang:<br><b>чита́<span class='hl'>ют</span></b> → чита́- → <b>чита́<span class='hl'>й</span>!</b> / <b>чита́<span class='hl'>йте</span>!</b><br><b>говор<span class='hl'>я́т</span></b> → говор- → <b>говор<span class='hl'>и́</span>!</b> / <b>говор<span class='hl'>и́те</span>!</b><br>«-те» qo'shsangiz — hurmatli yoki ko'plik shakli.",
        },

        { t: "h", text: "Amaliy dialoglar" },
        {
          t: "dialog",
          lines: [
            { who: "—", ru: "Ты изуча́ешь ру́сский язы́к и́ли украи́нский?", uz: "Rus tilini o'rganyapsanmi yoki ukrain tilini? (НСВ — jarayon)" },
            { who: "—", ru: "Сейча́с я изуча́ю ру́сский. Ра́ньше я изуча́л украи́нский.", uz: "Hozir rus tilini o'rganyapman. Avval ukrain tilini o'rgangan edim." },
          ],
        },
        {
          t: "dialog",
          lines: [
            { who: "—", ru: "На уро́ке преподава́тель объясня́л но́вое пра́вило.", uz: "Darsda o'qituvchi yangi qoidani tushuntirayotgan edi. (НСВ — jarayon)" },
            { who: "—", ru: "А что де́лали студе́нты?", uz: "Talabalar-chi, nima qilishardi?" },
            { who: "—", ru: "Слу́шали. Когда́ он объясни́л пра́вило, они́ на́чали писа́ть.", uz: "Tinglashdi. U qoidani tushuntirib bo'lgach (СВ — natija), yoza boshlashdi." },
          ],
        },
      ],
    },
  ],
};
