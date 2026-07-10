/* Dars bloklarini DOM ga aylantiradi. Mashqlar shu yerda interaktiv bo'ladi.
 *
 * Har bir mashq ikki rejimda ishlaydi:
 *  - baholanadigan (onDone berilgan) — birinchi urinish natijasi darsga yoziladi;
 *  - mashq uchun (onDone yo'q) — "Qayta urinish" bosilganda shu rejimda qayta chiziladi,
 *    ya'ni takroriy urinishlar bahoni o'zgartirmaydi.
 */

const el = (tag, cls, html) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html != null) node.innerHTML = html;
  return node;
};

/** "прочита́л" va "прочитал" bir xil hisoblansin. */
export function normalize(s) {
  return s
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/́/g, "") // urg'u belgisi
    .replace(/̈/g, "") // ё ustidagi nuqtalar
    .normalize("NFC")
    .replace(/ё/g, "е")
    .replace(/\s+/g, " ");
}

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------------- Statik bloklar ---------------- */

function renderStatic(b) {
  switch (b.t) {
    case "h":
      return el("h3", "lesson-h", b.text);

    case "p":
      return el("p", "body", b.text);

    case "callout": {
      const node = el("div", `callout ${b.tone ?? "info"}`);
      if (b.title) node.append(el("b", null, b.title));
      node.append(el("span", null, b.text));
      return node;
    }

    case "table": {
      // Keng jadval telefonda yon tomonga suriladi — maslahat CSS orqali
      // faqat tor ekranda ko'rinadi.
      const holder = el("div");
      const wrap = el("div", "table-scroll");
      const table = el("table");
      if (b.caption) table.append(el("caption", null, b.caption));
      if (b.head) {
        const thead = el("thead");
        const tr = el("tr");
        b.head.forEach((h) => tr.append(el("th", null, h)));
        thead.append(tr);
        table.append(thead);
      }
      const tbody = el("tbody");
      b.rows.forEach((row) => {
        const tr = el("tr");
        row.forEach((cell) => tr.append(el("td", null, cell)));
        tbody.append(tr);
      });
      table.append(tbody);
      wrap.append(table);
      holder.append(wrap);
      if ((b.head?.length ?? 0) > 2) {
        holder.append(el("p", "scrollhint", "← jadvalni yon tomonga suring →"));
      }
      return holder;
    }

    case "examples": {
      const node = el("div", "examples");
      b.items.forEach((it) => {
        const row = el("div", "item");
        row.append(el("div", "ru", it.ru));
        row.append(el("div", "uz", it.uz));
        node.append(row);
      });
      return node;
    }

    case "vocab": {
      const node = el("div", "vocab");
      b.items.forEach((it) => {
        const cell = el("div", "item");
        cell.append(el("div", "ru", it.ru));
        cell.append(el("div", "uz", it.uz));
        node.append(cell);
      });
      return node;
    }

    case "dialog": {
      const node = el("div", "dialog");
      b.lines.forEach((l) => {
        const line = el("div", "line");
        line.innerHTML = `<div><span class="who">${l.who}</span><span class="ru">${l.ru}</span></div>`;
        line.append(el("div", "uz", l.uz));
        node.append(line);
      });
      return node;
    }

    default:
      return el("div", null, "");
  }
}

/* ---------------- Mashq yordamchilari ---------------- */

function feedbackNode() {
  return el("div", "feedback");
}

function showFeedback(node, ok, hint) {
  node.className = `feedback show ${ok ? "ok" : "no"}`;
  node.innerHTML = ok ? "<b>To'g'ri!</b>" : "<b>Noto'g'ri.</b>";
  if (hint) node.append(el("div", "hint", hint));
}

/** Mashqni yangidan chizadi. Takroriy urinish bahoga ta'sir qilmaydi. */
function addRetry(box, block) {
  const btn = el("button", "btn ghost retry", "↻ Qayta urinish");
  btn.type = "button";
  btn.addEventListener("click", () => box.replaceWith(renderExercise(block, null)));
  box.append(btn);
}

/* ---------------- Mashqlar ---------------- */

function renderQuiz(b, onDone) {
  const box = el("div", "quiz");
  box.append(el("span", "tag", "Test"));
  box.append(el("div", "q", b.q));

  let answered = false;
  const fb = feedbackNode();
  const opts = el("div", "opts");

  const buttons = b.options.map((text, i) => {
    const btn = el("button", "opt");
    btn.type = "button";
    btn.append(el("span", null, text));
    btn.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      const ok = i === b.answer;
      buttons.forEach((other, j) => {
        other.disabled = true;
        if (j === b.answer) {
          other.classList.add("correct");
          other.append(el("span", "mark", "✓"));
        }
      });
      if (!ok) {
        btn.classList.remove("correct");
        btn.classList.add("wrong");
        btn.append(el("span", "mark", "✗"));
      }
      showFeedback(fb, ok, b.hint);
      if (!ok) addRetry(box, b);
      onDone?.(ok);
    });
    opts.append(btn);
    return btn;
  });

  box.append(opts, fb);
  return box;
}

function renderFill(b, onDone) {
  const box = el("div", "quiz");
  box.append(el("span", "tag", "To'ldiring"));
  box.append(el("div", "q", b.q));

  const row = el("div", "fill-row");
  const input = el("input");
  input.type = "text";
  input.placeholder = "Javobingiz…";
  input.autocomplete = "off";
  input.spellcheck = false;

  const btn = el("button", "btn", "Tekshirish");
  btn.type = "button";

  const fb = feedbackNode();
  let answered = false;

  const check = () => {
    if (answered) return;
    const value = normalize(input.value);
    if (!value) return;
    answered = true;
    const ok = b.answer.some((a) => normalize(a) === value);
    input.classList.add(ok ? "correct" : "wrong");
    input.disabled = true;
    btn.disabled = true;
    const hint = ok ? b.hint : `To'g'ri javob: <b>${b.answer[b.answer.length - 1]}</b>. ${b.hint ?? ""}`;
    showFeedback(fb, ok, hint);
    if (!ok) addRetry(box, b);
    onDone?.(ok);
  };

  btn.addEventListener("click", check);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") check();
  });

  row.append(input, btn);
  box.append(row, fb);
  return box;
}

function renderMatch(b, onDone) {
  const box = el("div", "quiz");
  box.append(el("span", "tag", "Juftlang"));
  box.append(el("div", "q", b.q ?? "Mos juftlarni toping"));
  if (b.note) box.append(el("p", "body", b.note));

  const grid = el("div", "match");
  const leftCol = el("div", "col");
  const rightCol = el("div", "col");

  const lefts = b.pairs.map(([l]) => l);
  const rights = shuffle(b.pairs.map(([, r], i) => ({ text: r, i })));

  let selected = null;
  let solved = 0;
  let mistakes = 0;
  let finished = false;

  lefts.forEach((text, i) => {
    const btn = el("button", "cell", text);
    btn.type = "button";
    btn.addEventListener("click", () => {
      if (finished || btn.classList.contains("done")) return;
      if (selected) selected.btn.classList.remove("sel");
      selected = { btn, index: i };
      btn.classList.add("sel");
    });
    leftCol.append(btn);
  });

  rights.forEach(({ text, i }) => {
    const btn = el("button", "cell", text);
    btn.type = "button";
    btn.addEventListener("click", () => {
      if (finished || !selected || btn.classList.contains("done")) return;

      // Bir xil matnli o'ng katak bir nechta bo'lishi mumkin ("он", "она́"),
      // shuning uchun matn bo'yicha ham to'g'ri deb hisoblaymiz.
      const ok = i === selected.index || text === b.pairs[selected.index][1];

      if (ok) {
        selected.btn.classList.remove("sel");
        selected.btn.classList.add("done");
        btn.classList.add("done");
        selected = null;
        solved++;
        if (solved === b.pairs.length) {
          finished = true;
          const clean = mistakes === 0;
          showFeedback(fb, clean, clean ? b.hint : `${mistakes} ta xato bilan yakunladingiz.`);
          if (!clean) addRetry(box, b);
          onDone?.(clean);
        }
      } else {
        mistakes++;
        btn.classList.add("shake");
        selected.btn.classList.add("shake");
        const wrongLeft = selected.btn;
        setTimeout(() => {
          btn.classList.remove("shake");
          wrongLeft.classList.remove("shake", "sel");
        }, 450);
        selected = null;
      }
    });
    rightCol.append(btn);
  });

  const fb = feedbackNode();
  grid.append(leftCol, rightCol);
  box.append(grid, fb);
  return box;
}

/* ---------------- Tashqi API ---------------- */

export function isExercise(b) {
  return b.t === "quiz" || b.t === "fill" || b.t === "match";
}

/** Faqat mashq bloklari uchun. onDone = null bo'lsa, natija hisobga olinmaydi. */
export function renderExercise(b, onDone) {
  if (b.t === "quiz") return renderQuiz(b, onDone);
  if (b.t === "fill") return renderFill(b, onDone);
  if (b.t === "match") return renderMatch(b, onDone);
  throw new Error(`renderExercise: "${b.t}" mashq emas`);
}

export function renderBlock(b, onExerciseDone) {
  if (isExercise(b)) return renderExercise(b, onExerciseDone ?? null);
  const node = renderStatic(b);
  node.classList.add("block");
  return node;
}
