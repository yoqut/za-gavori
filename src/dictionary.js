/* Lug'at: fe'llar, otlar, sifatlar.
 * Qatorni bosganda to'liq tuslanish / tuslanish jadvali ochiladi.
 */

import verbs from "./data/dict-verbs.js";
import nouns, { skipped as nounsSkipped } from "./data/dict-nouns.js";
import adjectives from "./data/dict-adjectives.js";
import { declineNoun, declineAdjective } from "./decline.js";

/* Shakllar fayldan emas, mexanizmdan olinadi — bu bundle hajmini keskin kamaytiradi.
 * Tartibsiz so'zlarda tayyor shakllar (entry.f) saqlanadi. */
const nounForms = (item) =>
  item.f ?? declineNoun(item.ru, { gender: item.g, anim: Boolean(item.a), gen: item.gen, ins: item.ins }).forms;

// Har kelishikning o'z rangi bor — dizaynning asosiy g'oyasi.
const CASE_NAMES = [
  ["Имени́тельный", "Bosh", "Кто? Что?", "case-nom"],
  ["Роди́тельный", "Qaratqich", "Кого́? Чего́?", "case-gen"],
  ["Да́тельный", "Jo'nalish", "Кому́? Чему́?", "case-dat"],
  ["Вини́тельный", "Tushum", "Кого́? Что?", "case-acc"],
  ["Твори́тельный", "Vosita", "Кем? Чем?", "case-ins"],
  ["Предло́жный", "Predlog", "О ком? О чём?", "case-prep"],
];

const PRONOUNS = ["я", "ты", "он / она́", "мы", "вы", "они́"];

const el = (tag, cls, html) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html != null) node.innerHTML = html;
  return node;
};

const norm = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").normalize("NFC").replace(/ё/g, "е");

/* ---------------- Tafsilot jadvallari ---------------- */

/** Har bir kelishik uchun tipik ibora — shakllardan avtomatik quriladi. */
function nounPhrase(caseIdx, form, anim) {
  switch (caseIdx) {
    case 0: return `э́то ${form}`;
    case 1: return `нет ${form}`;
    case 2: return `к ${form}`;
    case 3: return `${anim ? "ви́жу" : "ви́жу"} ${form}`;
    case 4: return `с ${form}`;
    default: return `о ${form}`;
  }
}

function nounDetail(item) {
  const forms = nounForms(item);
  const anim = Boolean(item.a);
  const box = el("div", "detail");
  box.append(
    el(
      "div",
      "detail-meta",
      `<span class="pill">${item.g}</span>
       <span class="pill">${anim ? "jonli (кто?)" : "jonsiz (что?)"}</span>`,
    ),
  );

  const wrap = el("div", "table-scroll");
  const table = el("table");
  table.innerHTML = `<thead><tr><th>Kelishik</th><th>Savol</th><th>Shakl</th><th>Ibora</th></tr></thead>`;
  const tb = el("tbody");
  forms.forEach((form, i) => {
    const [ru, uz, q, cls] = CASE_NAMES[i];
    const tr = el("tr");
    tr.innerHTML = `
      <td class="casecell ${cls}">${ru}<br><small>${uz}</small></td>
      <td><small>${q}</small></td>
      <td><b class="ru">${form}</b></td>
      <td><span class="dim">${nounPhrase(i, form, anim)}</span></td>`;
    tb.append(tr);
  });
  table.append(tb);
  wrap.append(table);
  box.append(wrap);

  if (anim) {
    box.append(
      el(
        "div",
        "callout info",
        `<b>Jonli ot</b><span>Shuning uchun tushum kelishigi qaratqich bilan bir xil: <b>${forms[3]}</b>.</span>`,
      ),
    );
  }
  return box;
}

function adjectiveDetail(entry) {
  const item = { ...entry, ...declineAdjective(entry.ru) };
  const box = el("div", "detail");
  const wrap = el("div", "table-scroll");
  const table = el("table");
  table.innerHTML = `<thead><tr><th>Kelishik</th><th>он</th><th>она́</th><th>оно́</th><th>они́</th></tr></thead>`;
  const tb = el("tbody");
  CASE_NAMES.forEach(([ru, uz, , cls], i) => {
    const tr = el("tr");
    tr.innerHTML = `
      <td class="casecell ${cls}">${ru}<br><small>${uz}</small></td>
      <td class="ru">${item.m[i]}</td>
      <td class="ru">${item.f[i]}</td>
      <td class="ru">${item.n[i]}</td>
      <td class="ru">${item.pl[i]}</td>`;
    tb.append(tr);
  });
  table.append(tb);
  wrap.append(table);
  box.append(wrap);
  box.append(el("p", "scrollhint", "← jadvalni yon tomonga suring →"));

  box.append(
    el(
      "div",
      "callout warn",
      `<b>Tushum kelishigi jonlilikka bog'liq</b>
       <span>Jonsiz ot bilan — <b>${item.m[3]}</b> (<i>ви́жу ${item.m[3]} дом</i>).
       Jonli ot bilan — <b>${item.m[1]}</b> (<i>ви́жу ${item.m[1]} студе́нта</i>).
       Ko'plikda ham xuddi shunday: <b>${item.pl[3]}</b> / <b>${item.pl[1]}</b>.</span>`,
    ),
  );
  return box;
}

/**
 * Bo'limlarga ajratilgan ko'rinish: bir vaqtda bitta panel ko'rinadi.
 * defs: [{ id, label, badge?, build: () => Node }]
 */
function sectioned(defs, activeId) {
  const holder = el("div", "sections");
  const bar = el("div", "subtabs");
  const panel = el("div", "subpanel");
  const cache = new Map();

  const show = (def, btn) => {
    bar.querySelectorAll(".subtab").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    if (!cache.has(def.id)) cache.set(def.id, def.build());
    panel.replaceChildren(cache.get(def.id));
  };

  let initial = null;
  defs.forEach((def) => {
    const btn = el("button", "subtab", `${def.label}${def.badge ? ` <span>${def.badge}</span>` : ""}`);
    btn.type = "button";
    btn.addEventListener("click", () => show(def, btn));
    bar.append(btn);
    if (def.id === activeId || !initial) initial = { def, btn };
  });

  holder.append(bar, panel);
  show(initial.def, initial.btn); // birinchi panel darrov ko'rinadi
  return holder;
}

const tableIn = (headHtml, rows) => {
  const wrap = el("div", "table-scroll");
  const table = el("table");
  table.innerHTML = `<thead><tr>${headHtml}</tr></thead>`;
  const tb = el("tbody");
  rows.forEach((r) => tb.append(el("tr", null, r)));
  table.append(tb);
  wrap.append(table);
  return wrap;
};

const AUX = ["бу́ду", "бу́дешь", "бу́дет", "бу́дем", "бу́дете", "бу́дут"];
const PAST_LABELS = { m: "он (я, ты)", f: "она́ (я, ты)", n: "оно́", pl: "мы, вы, они́" };

function verbDetail(item) {
  const box = el("div", "detail");
  // «быть» dan boshqa hamma fe'lda oltala shakl bor. «быть» da faqat «есть».
  const fullPresent = item.present.every(Boolean);
  const svCol = item.sv ? "<th>СВ</th>" : "";

  box.append(
    el(
      "div",
      "detail-meta",
      `<span class="pill">${item.conj} tuslanish</span>
       <span class="pill">НСВ: ${item.nsv}</span>
       ${item.sv ? `<span class="pill">СВ: ${item.sv}</span>` : `<span class="pill dim">juftligi yo'q</span>`}`,
    ),
  );

  const defs = [];

  defs.push({
    id: "present",
    label: "Hozirgi zamon",
    build: () => {
      const box2 = el("div", "panel-body");

      if (!fullPresent) {
        box2.append(
          el(
            "div",
            "callout info",
            `<b>To'liq tuslanmaydi</b>
             <span>Rus tilida hozirgi zamonda «bo'lmoq» fe'li <b>yozilmaydi</b>: <i>Я студе́нт</i> (men talabaman).
             Yagona saqlanib qolgan shakl — <b class="ru">есть</b>, u «bor» ma'nosida ishlatiladi:
             <i>У меня́ <b>есть</b> брат.</i></span>`,
          ),
        );
        return box2;
      }

      box2.append(el("p", "panel-note", `Faqat tugallanmagan turda (НСВ) — <b class="ru">${item.nsv}</b>.`));
      box2.append(
        tableIn(
          "<th>Shaxs</th><th>Shakl</th>",
          PRONOUNS.map((p, i) => `<td>${p}</td><td class="ru">${item.present[i]}</td>`),
        ),
      );
      return box2;
    },
  });

  defs.push({
    id: "past",
    label: "O'tgan zamon",
    build: () => {
      const box2 = el("div", "panel-body");
      box2.append(el("p", "panel-note", "Shaxs emas, <b>jins va son</b> muhim: erkak «-л», ayol «-ла», ko'plik «-ли»."));
      box2.append(
        tableIn(
          `<th>Kim haqida</th><th>НСВ</th>${svCol}`,
          ["m", "f", "n", "pl"].map(
            (k) =>
              `<td>${PAST_LABELS[k]}</td><td class="ru">${item.past[k].nsv}</td>` +
              (item.sv ? `<td class="ru">${item.past[k].sv ?? ""}</td>` : ""),
          ),
        ),
      );
      return box2;
    },
  });

  defs.push({
    id: "future",
    label: "Kelasi zamon",
    build: () => {
      const box2 = el("div", "panel-body");
      box2.append(
        el(
          "p",
          "panel-note",
          item.sv
            ? "НСВ — ikki so'z (<b>быть</b> + infinitiv). СВ — bir so'z, hozirgi zamon qo'shimchalari bilan."
            : "Tugallanmagan tur: <b>быть</b> + infinitiv.",
        ),
      );
      box2.append(
        tableIn(
          `<th>Shaxs</th><th>НСВ (быть + infinitiv)</th>${svCol}`,
          PRONOUNS.map(
            (p, i) =>
              `<td>${p}</td><td class="ru">${AUX[i]} ${item.nsv}</td>` +
              (item.sv ? `<td class="ru">${item.futureSv?.[i] ?? ""}</td>` : ""),
          ),
        ),
      );
      return box2;
    },
  });

  if (item.imperative) {
    defs.push({
      id: "imperative",
      label: "Buyruq",
      build: () => {
        const box2 = el("div", "panel-body");
        box2.append(el("p", "panel-note", "«-те» qo'shilsa — hurmat shakli yoki ko'plik."));
        box2.append(
          tableIn(
            "<th>Shakl</th>",
            item.imperative.split("·").map((s) => `<td class="ru">${s.trim()}</td>`),
          ),
        );
        return box2;
      },
    });
  }

  if (item.government.length) {
    defs.push({
      id: "government",
      label: "Boshqaruv",
      badge: item.government.length,
      build: () => {
        const box2 = el("div", "panel-body");
        box2.append(el("p", "panel-note", "Fe'ldan keyin qaysi kelishik keladi — va tayyor misol."));
        const list = el("div", "examples");
        item.government.forEach((g) => {
          const row = el("div", "item");
          row.append(el("div", "ru", g.pattern));
          if (g.example) row.append(el("div", "uz", g.example));
          list.append(row);
        });
        box2.append(list);
        return box2;
      },
    });
  }

  box.append(sectioned(defs, "present"));
  return box;
}

/* ---------------- Ro'yxat ---------------- */

const TABS = [
  {
    id: "verbs",
    label: "Fe'llar",
    count: verbs.length,
    items: verbs,
    key: (v) => v.nsv,
    sub: (v) => v.uz,
    badge: (v) => (v.sv ? `${v.conj} · СВ ${v.sv}` : `${v.conj} · НСВ`),
    search: (v) => [v.nsv, v.sv ?? "", v.uz],
    detail: verbDetail,
  },
  {
    id: "nouns",
    label: "Otlar",
    count: nouns.length,
    items: nouns,
    key: (n) => n.ru,
    sub: (n) => n.uz,
    badge: (n) => n.g,
    search: (n) => [n.ru, n.uz],
    detail: nounDetail,
  },
  {
    id: "adjectives",
    label: "Sifatlar",
    count: adjectives.length,
    items: adjectives,
    key: (a) => a.ru,
    sub: (a) => a.uz,
    badge: () => "сифат",
    search: (a) => [a.ru, a.uz],
    detail: adjectiveDetail,
  },
];

const PAGE = 60;

export function renderDictionary() {
  const wrap = el("div", "wrap");
  wrap.append(
    el(
      "div",
      "hero",
      `<h1>Lug'at</h1>
       <p>${verbs.length} fe'l, ${nouns.length} ot va ${adjectives.length} sifat — chastota bo'yicha tartiblangan.
       So'z ustiga bosing: fe'l uchun to'liq tuslanish va kelishik boshqaruvi, ot va sifat uchun
       oltala kelishikdagi shakllar ochiladi.</p>`,
    ),
  );

  let activeTab = TABS[0];
  let query = "";
  let shown = PAGE;

  const tabBar = el("div", "tabs");
  const search = el("input", "search");
  search.type = "search";
  search.placeholder = "Ruscha yoki o'zbekcha qidiring…";
  search.autocomplete = "off";

  const info = el("div", "list-info");
  const list = el("div", "dict-list");
  const more = el("button", "btn ghost", "Yana ko'rsatish");
  more.type = "button";

  const matches = () => {
    if (!query) return activeTab.items;
    const q = norm(query);
    return activeTab.items.filter((it) => activeTab.search(it).some((s) => norm(s).includes(q)));
  };

  const paintList = () => {
    const found = matches();
    list.replaceChildren();

    found.slice(0, shown).forEach((it) => {
      const row = el("div", "dict-row");
      const head = el("button", "dict-head");
      head.type = "button";
      head.innerHTML = `
        <span class="dict-word ru">${activeTab.key(it)}</span>
        <span class="dict-uz">${activeTab.sub(it)}</span>
        <span class="dict-badge">${activeTab.badge(it)}</span>
        <span class="dict-caret">▾</span>`;

      let open = false;
      let detail = null;
      head.addEventListener("click", () => {
        open = !open;
        row.classList.toggle("open", open);
        if (open) {
          if (!detail) detail = activeTab.detail(it);
          row.append(detail);
        } else {
          detail?.remove();
        }
      });
      row.append(head);
      list.append(row);
    });

    info.textContent = query
      ? `${found.length} ta natija topildi`
      : `${found.length} ta so'z · chastota bo'yicha`;
    more.style.display = found.length > shown ? "" : "none";
    more.textContent = `Yana ${Math.min(PAGE, found.length - shown)} ta ko'rsatish`;
  };

  TABS.forEach((tab) => {
    const btn = el("button", "tab", `${tab.label} <span>${tab.count}</span>`);
    btn.type = "button";
    if (tab === activeTab) btn.classList.add("active");
    btn.addEventListener("click", () => {
      activeTab = tab;
      shown = PAGE;
      tabBar.querySelectorAll(".tab").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      paintList();
    });
    tabBar.append(btn);
  });

  search.addEventListener("input", () => {
    query = search.value.trim();
    shown = PAGE;
    paintList();
  });
  more.addEventListener("click", () => {
    shown += PAGE;
    paintList();
  });

  wrap.append(tabBar, search, info, list, more);

  wrap.append(
    el(
      "div",
      "callout warn block",
      `<b>Ikki eslatma</b>
       <span>① Lug'at jadvallarida <b>urg'u belgisi yo'q</b> — manba PDF'larda ham yo'q edi. Darslardagi so'zlarda esa urg'u qo'yilgan.<br>
       ② ${nounsSkipped.length} ta ot uchun jadval ko'rsatilmaydi: ular tuslanmaydi yoki faqat ko'plikda ishlatiladi
       (${nounsSkipped.slice(0, 6).map((n) => n.ru).join(", ")}…). Noto'g'ri shakl ko'rsatgandan ko'ra, hech narsa ko'rsatmagan yaxshi.</span>`,
    ),
  );

  paintList();
  return wrap;
}
