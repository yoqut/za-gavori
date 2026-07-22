import "./style.css";
import { categories, findLesson, flatLessons, lessonIndex, totalLessons } from "./data/index.js";
import { renderBlock } from "./render.js";
import * as progress from "./progress.js";
import { renderThemeSwitch } from "./theme.js";

const app = document.querySelector("#app");

/* ---------------- Router ---------------- */

function parseRoute() {
  const hash = location.hash.replace(/^#\/?/, "");
  if (!hash) return { name: "home" };
  const [kind, catId, lessonId] = hash.split("/");
  if (kind === "dict") return { name: "dict" };
  if (kind === "lesson" && catId && lessonId) return { name: "lesson", catId, lessonId };
  return { name: "home" };
}

const go = (path) => {
  location.hash = path;
};

/* ---------------- Sidebar ---------------- */

function renderSidebar(route) {
  const bar = document.createElement("aside");
  bar.className = "sidebar";

  const brand = document.createElement("div");
  brand.className = "brand";
  brand.innerHTML = `
    <div class="brand-mark">Ру</div>
    <div class="brand-text">
      <strong>Rus tili darslari</strong>
      <span>Boshlang'ich kurs · A1–A2</span>
    </div>`;
  brand.addEventListener("click", () => go("/"));
  bar.append(brand);

  const done = progress.doneCount();
  const pct = Math.round((done / totalLessons) * 100);
  const box = document.createElement("div");
  box.className = "progress-box";
  box.innerHTML = `
    <div class="row"><span>Bajarildi</span><b>${done} / ${totalLessons}</b></div>
    <div class="bar"><i style="width:${pct}%"></i></div>`;
  bar.append(box);
  bar.append(renderThemeSwitch());

  const dictBtn = document.createElement("button");
  dictBtn.className = "nav-item tool-link";
  if (route.name === "dict") dictBtn.classList.add("active");
  dictBtn.innerHTML = `<span class="tick" style="border:0">📖</span><span>Lug'at</span>`;
  dictBtn.addEventListener("click", () => {
    go("/dict");
    bar.classList.remove("open");
  });
  bar.append(dictBtn);

  categories.forEach((cat) => {
    const open = isCatOpen(cat.id, route);

    const header = document.createElement("button");
    header.className = `cat-title${open ? " open" : ""}`;
    const doneInCat = cat.lessons.filter((l) => progress.isDone(cat.id, l.id)).length;
    header.innerHTML = `<span class="chev">▸</span><span class="cat-name">${cat.title}</span><span class="cat-count">${doneInCat}/${cat.lessons.length}</span>`;

    const group = document.createElement("div");
    group.className = `cat-lessons${open ? "" : " collapsed"}`;

    header.addEventListener("click", () => {
      const nowOpen = group.classList.toggle("collapsed") === false;
      header.classList.toggle("open", nowOpen);
      setCatOpen(cat.id, nowOpen);
    });

    cat.lessons.forEach((lesson) => {
      const btn = document.createElement("button");
      btn.className = "nav-item";
      if (progress.isDone(cat.id, lesson.id)) btn.classList.add("done");
      if (route.name === "lesson" && route.catId === cat.id && route.lessonId === lesson.id) {
        btn.classList.add("active");
      }
      btn.innerHTML = `<span class="tick">✓</span><span>${lesson.title}</span>`;
      btn.addEventListener("click", () => {
        go(`/lesson/${cat.id}/${lesson.id}`);
        bar.classList.remove("open");
      });
      group.append(btn);
    });

    bar.append(header, group);
  });

  return bar;
}

/* ---------------- Bo'limlarni ochish/yopish holati ---------------- */

const OPEN_KEY = "russian-lessons-open-cats";

function readOpenCats() {
  try {
    return JSON.parse(localStorage.getItem(OPEN_KEY)) ?? {};
  } catch {
    return {};
  }
}

/** Saqlangan tanlov bo'lsa — o'shani; bo'lmasa, faqat joriy dars bo'limi ochiq. */
function isCatOpen(catId, route) {
  const saved = readOpenCats();
  if (catId in saved) return Boolean(saved[catId]);
  return route.name === "lesson" && route.catId === catId;
}

function setCatOpen(catId, open) {
  const saved = readOpenCats();
  saved[catId] = open;
  try {
    localStorage.setItem(OPEN_KEY, JSON.stringify(saved));
  } catch {
    // localStorage bloklangan — jim o'tamiz
  }
}

/* ---------------- Bosh sahifa ---------------- */

/** O'qilmagan birinchi dars — "davom etish" nuqtasi. Hammasi tugagan bo'lsa null. */
function nextLesson() {
  return flatLessons.find(({ cat, lesson }) => !progress.isDone(cat.id, lesson.id)) ?? null;
}

function renderHome() {
  const wrap = document.createElement("div");
  wrap.className = "wrap";

  const done = progress.doneCount();

  const hero = document.createElement("div");
  hero.className = "hero";
  hero.innerHTML = `
    <div class="kicker">A1–A2 · Rus tili · To'liq kurs</div>
    <h1>Rus tilini noldan o'rganamiz</h1>
    <p>
      «Русский язык для начинающих» darsligi asosida tuzilgan to'liq kurs.
      Har bir mavzu o'zbek tilida sodda tushuntiriladi va jadvallar bilan
      mustahkamlanadi. Bir vaqtda bitta dars — shoshilmang.
    </p>`;
  wrap.append(hero);

  /* Davom etish — o'quvchi butun ro'yxatni emas, faqat keyingi bitta qadamni ko'radi. */
  const next = nextLesson();
  const cont = document.createElement("button");
  cont.className = "continue";
  if (next) {
    cont.innerHTML = `
      <div class="continue-text">
        <span class="continue-label">${done ? "Davom etish" : "Bu yerdan boshlang"}</span>
        <strong>${next.lesson.title}</strong>
        <small>${next.cat.emoji} ${next.cat.title}</small>
      </div>
      <span class="continue-go">▶</span>`;
    cont.addEventListener("click", () => go(`/lesson/${next.cat.id}/${next.lesson.id}`));
  } else {
    cont.classList.add("finished");
    cont.innerHTML = `
      <div class="continue-text">
        <span class="continue-label">Barakalla 🎉</span>
        <strong>Barcha darslar o'qildi</strong>
        <small>Lug'at yoki takror uchun istalgan darsga qayting</small>
      </div>
      <span class="continue-go">✓</span>`;
    cont.addEventListener("click", () => go("/dict"));
  }
  wrap.append(cont);

  const pct = Math.round((done / totalLessons) * 100);
  const stats = document.createElement("div");
  stats.className = "stats";
  stats.innerHTML = `
    <div class="stat"><b>${totalLessons}</b><span>ta dars, ${categories.length} kategoriyada</span></div>
    <div class="stat"><b>${done} / ${totalLessons}</b><span>bajarildi · ${pct}%</span></div>`;
  wrap.append(stats);

  const sectionTitle = document.createElement("h2");
  sectionTitle.className = "home-section";
  sectionTitle.textContent = "Barcha bo'limlar";
  wrap.append(sectionTitle);

  categories.forEach((cat) => {
    const doneInCat = cat.lessons.filter((l) => progress.isDone(cat.id, l.id)).length;
    const allDone = doneInCat === cat.lessons.length;
    /* Faqat joriy (keyingi darsni saqlagan) bo'lim ochiq — qolgani yig'iq. */
    const isCurrent = next != null && next.cat.id === cat.id;

    const card = document.createElement("div");
    card.className = `cat-card${isCurrent ? "" : " collapsed"}`;

    const header = document.createElement("button");
    header.className = "cat-card-head";
    header.innerHTML = `
      <span class="emoji">${cat.emoji}</span>
      <span class="cat-card-title">
        <h2>${cat.title}</h2>
        <small>${cat.desc}</small>
      </span>
      <span class="cat-card-count${allDone ? " done" : ""}">${doneInCat}/${cat.lessons.length}</span>
      <span class="cat-card-chev">▾</span>`;
    header.addEventListener("click", () => card.classList.toggle("collapsed"));
    card.append(header);

    const list = document.createElement("div");
    list.className = "lesson-list";
    cat.lessons.forEach((lesson, i) => {
      const row = document.createElement("button");
      row.className = "lesson-row";
      const saved = progress.getLesson(cat.id, lesson.id);
      const isNext = next != null && next.cat.id === cat.id && next.lesson.id === lesson.id;
      if (isNext) row.classList.add("is-next");
      const badge = saved?.done
        ? `<span class="badge">✓ o'qildi</span>`
        : isNext
          ? `<span class="badge next-badge">keyingi</span>`
          : `<span class="badge" style="color:var(--faint);background:transparent">o'qish</span>`;
      row.innerHTML = `
        <span class="num">${i + 1}</span>
        <span class="name">${lesson.title}<small>${lesson.subtitle}</small></span>
        ${badge}`;
      row.addEventListener("click", () => go(`/lesson/${cat.id}/${lesson.id}`));
      list.append(row);
    });
    card.append(list);
    wrap.append(card);
  });

  const foot = document.createElement("div");
  foot.className = "lesson-foot";
  const resetBtn = document.createElement("button");
  resetBtn.className = "btn ghost";
  resetBtn.textContent = "Progressni tozalash";
  resetBtn.addEventListener("click", () => {
    if (confirm("Barcha natijalar o'chiriladi. Davom etamizmi?")) {
      progress.reset();
      render();
    }
  });
  foot.append(resetBtn);
  wrap.append(foot);

  return wrap;
}

/* ---------------- Dars sahifasi ---------------- */

function renderLessonPage(route) {
  const found = findLesson(route.catId, route.lessonId);
  if (!found) return renderHome();

  const { cat, lesson } = found;
  const wrap = document.createElement("div");
  wrap.className = "wrap";

  const head = document.createElement("div");
  head.className = "lesson-head";
  head.innerHTML = `
    <div class="crumb">${cat.emoji} ${cat.title}</div>
    <h1>${lesson.title}</h1>
    <div class="sub">${lesson.subtitle}</div>`;
  wrap.append(head);

  lesson.blocks.forEach((b) => wrap.append(renderBlock(b)));

  /* Darsni "o'qib chiqdim" tugmasi bilan belgilanadi. */
  const readBox = document.createElement("div");
  readBox.className = "read-done";
  const already = progress.isDone(cat.id, lesson.id);
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = already ? "✓ O'qildi" : "O'qib chiqdim";
  btn.disabled = already;
  btn.addEventListener("click", () => {
    progress.markRead(cat.id, lesson.id);
    btn.textContent = "✓ O'qildi";
    btn.disabled = true;
    document.querySelector(".sidebar")?.replaceWith(renderSidebar(route));
  });
  readBox.append(btn);
  wrap.append(readBox);

  /* Oldingi / keyingi */
  const idx = lessonIndex(cat.id, lesson.id);
  const prev = idx > 0 ? flatLessons[idx - 1] : null;
  const next = idx < flatLessons.length - 1 ? flatLessons[idx + 1] : null;

  const foot = document.createElement("div");
  foot.className = "lesson-foot";

  if (prev) {
    const b = document.createElement("button");
    b.className = "btn ghost";
    b.textContent = "← Oldingi";
    b.addEventListener("click", () => go(`/lesson/${prev.cat.id}/${prev.lesson.id}`));
    foot.append(b);
  }

  foot.append(Object.assign(document.createElement("div"), { className: "spacer" }));

  if (next) {
    const b = document.createElement("button");
    b.className = "btn";
    b.textContent = "Keyingi dars →";
    b.addEventListener("click", () => go(`/lesson/${next.cat.id}/${next.lesson.id}`));
    foot.append(b);
  } else {
    const b = document.createElement("button");
    b.className = "btn";
    b.textContent = "Kurs tugadi 🎉";
    b.addEventListener("click", () => go("/"));
    foot.append(b);
  }

  wrap.append(foot);
  return wrap;
}

/* ---------------- Lug'at (talab bo'yicha yuklanadi) ---------------- */

/**
 * Lug'at ma'lumotlari ~200 kB. Uni asosiy bundlega qo'shmaymiz —
 * faqat "Lug'at" sahifasiga o'tilganda yuklanadi.
 */
function renderDictionaryLazy() {
  const holder = document.createElement("div");
  holder.className = "wrap";
  holder.innerHTML = `<p class="body" style="padding:40px 0">Lug'at yuklanmoqda…</p>`;

  import("./dictionary.js")
    .then(({ renderDictionary }) => {
      // Foydalanuvchi kutayotgan paytda boshqa sahifaga o'tgan bo'lishi mumkin.
      if (!holder.isConnected) return;
      holder.replaceWith(renderDictionary());
    })
    .catch(() => {
      holder.innerHTML = `<div class="callout warn block"><b>Lug'at yuklanmadi</b><span>Sahifani yangilab ko'ring.</span></div>`;
    });

  return holder;
}

/* ---------------- Yig'ish ---------------- */

function render() {
  const route = parseRoute();
  app.replaceChildren();

  const sidebar = renderSidebar(route);
  const main = document.createElement("main");
  main.className = "main";

  const menuBtn = document.createElement("button");
  menuBtn.className = "menu-btn";
  menuBtn.innerHTML = "☰ Darslar";
  menuBtn.addEventListener("click", () => sidebar.classList.toggle("open"));
  main.append(menuBtn);

  if (route.name === "lesson") main.append(renderLessonPage(route));
  else if (route.name === "dict") main.append(renderDictionaryLazy());
  else main.append(renderHome());
  app.append(sidebar, main);
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);
render();
