import "./style.css";
import { categories, findLesson, flatLessons, lessonIndex, exerciseCount, totalLessons, totalExercises } from "./data/index.js";
import { renderBlock, renderExercise, isExercise } from "./render.js";
import * as progress from "./progress.js";

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
    bar.append(Object.assign(document.createElement("div"), { className: "cat-title", textContent: cat.title }));
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
      bar.append(btn);
    });
  });

  return bar;
}

/* ---------------- Bosh sahifa ---------------- */

function renderHome() {
  const wrap = document.createElement("div");
  wrap.className = "wrap";

  const done = progress.doneCount();
  const correct = progress.correctCount();

  const hero = document.createElement("div");
  hero.className = "hero";
  hero.innerHTML = `
    <div class="kicker">A1–A2 · Rus tili · To'liq kurs</div>
    <h1>Rus tilini noldan o'rganamiz</h1>
    <p>
      «Русский язык для начинающих» darsligi asosida tuzilgan to'liq kurs.
      Har bir mavzu o'zbek tilida sodda tushuntiriladi, jadvallar bilan mustahkamlanadi
      va darrov mashq qilinadi. Tartib bilan boring — har bir dars oldingisiga tayanadi.
    </p>`;
  wrap.append(hero);

  const stats = document.createElement("div");
  stats.className = "stats";
  stats.innerHTML = `
    <div class="stat"><b>${totalLessons}</b><span>ta dars, ${categories.length} kategoriyada</span></div>
    <div class="stat"><b>${totalExercises}</b><span>ta interaktiv mashq</span></div>
    <div class="stat"><b>${done ? `${done} / ${totalLessons}` : "0"}</b><span>bajarildi · ${correct} to'g'ri javob</span></div>`;
  wrap.append(stats);


  categories.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "cat-card";

    const header = document.createElement("header");
    header.innerHTML = `<span class="emoji">${cat.emoji}</span><h2>${cat.title}</h2>`;
    card.append(header);
    card.append(Object.assign(document.createElement("p"), { textContent: cat.desc }));

    const list = document.createElement("div");
    list.className = "lesson-list";
    cat.lessons.forEach((lesson, i) => {
      const row = document.createElement("button");
      row.className = "lesson-row";
      const saved = progress.getLesson(cat.id, lesson.id);
      const badge = saved?.done
        ? `<span class="badge">${saved.correct}/${saved.total} ✓</span>`
        : `<span class="badge" style="color:var(--ink-faint);background:transparent">${exerciseCount(lesson)} mashq</span>`;
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

  const total = exerciseCount(lesson);
  let answered = 0;
  let correct = 0;
  const wrong = [];

  const pill = document.createElement("span");
  pill.className = "score-pill";
  const updatePill = () => {
    pill.textContent = total
      ? `Mashqlar: ${answered} / ${total} · to'g'ri: ${correct}`
      : "Bu darsda mashq yo'q";
  };
  updatePill();

  /* Xatolar ustida ishlash — dars oxirida paydo bo'ladi. */
  const review = document.createElement("section");
  review.className = "review";

  const buildReview = () => {
    review.replaceChildren();
    if (!wrong.length) {
      review.innerHTML = `
        <div class="callout tip block">
          <b>Dars tugadi — barcha mashq to'g'ri! 🎉</b>
          <span>Xato qilmadingiz, takrorlash uchun hech narsa yo'q. Keyingi darsga o'tishingiz mumkin.</span>
        </div>`;
      return;
    }
    review.append(
      Object.assign(document.createElement("h3"), {
        className: "lesson-h",
        textContent: `Xatolar ustida ishlash (${wrong.length} ta)`,
      }),
    );
    const note = document.createElement("div");
    note.className = "callout warn block";
    note.innerHTML = `<b>Xato qilgan mashqlaringiz</b><span>Ular yangidan berilyapti. Bu urinishlar bahoingizni o'zgartirmaydi — yodlash uchun.</span>`;
    review.append(note);
    // onDone = null: takroriy urinish natijasi hisobga olinmaydi.
    wrong.forEach((b) => review.append(renderExercise(b, null)));
  };

  const onExerciseDone = (block, ok) => {
    answered++;
    if (ok) correct++;
    else wrong.push(block);
    updatePill();
    if (answered === total) {
      progress.saveResult(cat.id, lesson.id, correct, total);
      // Sidebar dagi belgini yangilaymiz, sahifani qayta chizmasdan.
      document.querySelector(".sidebar")?.replaceWith(renderSidebar(route));
      buildReview();
      review.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  lesson.blocks.forEach((b) => {
    const node = renderBlock(b, isExercise(b) ? (ok) => onExerciseDone(b, ok) : undefined);
    wrap.append(node);
  });

  if (total) wrap.append(review);

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

  foot.append(pill);
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
