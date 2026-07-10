/* Kelishik trenajyori — tasodifiy savollar, cheksiz mashq.
 * Chalg'ituvchi variantlar o'sha so'zning boshqa kelishik shakllaridan olinadi,
 * shuning uchun ular har doim ishonarli bo'ladi.
 */

import { CASES, nouns, adjectives, casePrefix } from "./data/paradigms.js";
import { shuffle } from "./render.js";

const BEST_KEY = "russian-lessons-trainer-best";

const el = (tag, cls, html) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html != null) node.innerHTML = html;
  return node;
};

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

function readBest() {
  return Number(localStorage.getItem(BEST_KEY) ?? 0);
}

function writeBest(n) {
  try {
    if (n > readBest()) localStorage.setItem(BEST_KEY, String(n));
  } catch {
    /* private rejim */
  }
}

/** Bir xil shakllarni tashlab, 3 tagacha chalg'ituvchi tanlaydi. */
function distractors(allForms, correct) {
  const pool = [...new Set(allForms)].filter((f) => f !== correct);
  return shuffle(pool).slice(0, 3);
}

function nounQuestion() {
  const noun = pick(nouns);
  const caseIdx = 1 + Math.floor(Math.random() * 5); // nom (0) javob bo'lmaydi
  const c = CASES[caseIdx];
  const correct = noun.forms[caseIdx];

  return {
    prompt: `<b class="ru">${noun.w}</b> <span class="dim">— ${noun.uz}, ${noun.gender}${noun.animate ? ", jonli" : ""}</span>`,
    ask: `${c.name} <span class="dim">(${c.uz} · ${c.q})</span>`,
    correct,
    options: shuffle([correct, ...distractors(noun.forms, correct)]),
    explain: `${noun.w} → ${casePrefix[c.id]}${correct}`,
  };
}

function adjectiveQuestion() {
  const adj = pick(adjectives);
  const isFem = Math.random() < 0.5;
  const forms = isFem ? adj.f : adj.m;

  // Tushum kelishigi erkak jinsida jonlilikka bog'liq — chalkashmaslik uchun tashlaymiz.
  const allowed = isFem ? [1, 2, 3, 4, 5] : [1, 2, 4, 5];
  const caseIdx = pick(allowed);
  const c = CASES[caseIdx];
  const correct = forms[caseIdx];

  return {
    prompt: `<b class="ru">${adj.w}</b> <span class="dim">— ${adj.uz}, ${isFem ? "она́" : "он / оно́"}</span>`,
    ask: `${c.name} <span class="dim">(${c.uz} · ${c.q})</span>`,
    correct,
    options: shuffle([correct, ...distractors(forms, correct)]),
    explain: `${adj.w} (${isFem ? "она́" : "он"}) → ${casePrefix[c.id]}${correct}`,
  };
}

function nextQuestion() {
  return Math.random() < 0.65 ? nounQuestion() : adjectiveQuestion();
}

export function renderTrainer() {
  const wrap = el("div", "wrap");

  wrap.append(
    el(
      "div",
      "hero",
      `<h1>Kelishik trenajyori</h1>
       <p>Tasodifiy so'z, tasodifiy kelishik. Darslardagi 200 ga yaqin mashqdan farqli — bu hech qachon tugamaydi.
       Chalg'ituvchi variantlar o'sha so'zning haqiqiy shakllaridan olingan, shuning uchun taxmin qilib bo'lmaydi.</p>`,
    ),
  );

  let asked = 0;
  let correct = 0;
  let streak = 0;

  const stats = el("div", "stats");
  const board = el("div", "quiz");
  wrap.append(stats, board);

  const paintStats = () => {
    const pct = asked ? Math.round((correct / asked) * 100) : 0;
    stats.innerHTML = `
      <div class="stat"><b>${correct} / ${asked}</b><span>to'g'ri javob · ${pct}%</span></div>
      <div class="stat"><b>${streak}</b><span>ketma-ket to'g'ri</span></div>
      <div class="stat"><b>${readBest()}</b><span>eng uzun seriya</span></div>`;
  };

  const paintQuestion = () => {
    const q = nextQuestion();
    board.replaceChildren();
    board.append(el("span", "tag", "Trenajyor"));
    board.append(el("div", "q", `${q.prompt}<br>${q.ask}`));

    const opts = el("div", "opts");
    let answered = false;
    const fb = el("div", "feedback");

    const buttons = q.options.map((text) => {
      const btn = el("button", "opt");
      btn.type = "button";
      btn.append(el("span", null, text));
      btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const ok = text === q.correct;

        buttons.forEach((other, i) => {
          other.disabled = true;
          if (q.options[i] === q.correct) {
            other.classList.add("correct");
            other.append(el("span", "mark", "✓"));
          }
        });
        if (!ok) {
          btn.classList.remove("correct");
          btn.classList.add("wrong");
          btn.append(el("span", "mark", "✗"));
        }

        asked++;
        if (ok) {
          correct++;
          streak++;
          writeBest(streak);
        } else {
          streak = 0;
        }

        fb.className = `feedback show ${ok ? "ok" : "no"}`;
        fb.innerHTML = ok ? "<b>To'g'ri!</b>" : "<b>Noto'g'ri.</b>";
        fb.append(el("div", "hint", q.explain));
        paintStats();

        const next = el("button", "btn", "Keyingi savol →");
        next.type = "button";
        next.addEventListener("click", paintQuestion);
        board.append(next);
        next.focus();
      });
      opts.append(btn);
      return btn;
    });

    board.append(opts, fb);
  };

  paintStats();
  paintQuestion();
  return wrap;
}
