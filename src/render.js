/* Dars bloklarini DOM ga aylantiradi. */

const el = (tag, cls, html) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html != null) node.innerHTML = html;
  return node;
};

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

/* ---------------- Tashqi API ---------------- */

export function renderBlock(b) {
  const node = renderStatic(b);
  node.classList.add("block");
  return node;
}
