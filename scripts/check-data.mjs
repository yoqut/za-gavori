/* Dars ma'lumotlarining butunligini tekshiradi: `npm run check`
 * Yangi dars yozganda ishga tushiring.
 */

import { categories, flatLessons } from "../src/data/index.js";
import dictNouns, { skipped as dictSkipped } from "../src/data/dict-nouns.js";
import dictAdjectives from "../src/data/dict-adjectives.js";
import dictVerbs from "../src/data/dict-verbs.js";
import { declineNoun, declineAdjective } from "../src/decline.js";

const errors = [];
const STATIC = ["h", "p", "callout", "examples", "vocab", "dialog", "table"];

/* --- Darslar --- */
const catIds = new Set();
for (const cat of categories) {
  if (catIds.has(cat.id)) errors.push(`kategoriya id takrorlangan: ${cat.id}`);
  catIds.add(cat.id);

  const lessonIds = new Set();
  for (const lesson of cat.lessons) {
    if (lessonIds.has(lesson.id)) errors.push(`dars id takrorlangan: ${cat.id}/${lesson.id}`);
    lessonIds.add(lesson.id);
    if (!lesson.title || !lesson.subtitle) errors.push(`${cat.id}/${lesson.id}: sarlavha yoki tavsif yo'q`);

    lesson.blocks.forEach((b, i) => {
      const at = `${cat.id}/${lesson.id} blok#${i} (${b.t})`;

      if (b.t === "table") {
        const cols = b.head?.length;
        b.rows.forEach((row, r) => {
          if (cols && row.length !== cols) errors.push(`${at}: ${r}-qatorda ${row.length} katak, sarlavhada ${cols}`);
        });
      } else if (!STATIC.includes(b.t)) {
        errors.push(`${at}: noma'lum blok turi`);
      }
    });
  }
}

/* --- Lug'at --- */
const CYRILLIC = /[а-яёА-ЯЁ]/;

for (const n of dictNouns) {
  const at = `lug'at/ot "${n.ru}"`;
  if (!n.uz?.trim()) errors.push(`${at}: tarjima yo'q`);
  if (CYRILLIC.test(n.uz ?? "")) errors.push(`${at}: tarjimada kirill qolgan — "${n.uz}"`);

  const d = n.f ? { forms: n.f } : declineNoun(n.ru, { gender: n.g, anim: Boolean(n.a), gen: n.gen, ins: n.ins });
  if (!d?.forms || d.forms.length !== 6 || d.forms.some((f) => !f)) {
    errors.push(`${at}: mexanizm 6 ta shakl bermadi`);
    continue;
  }
  // Jonli → Вин. = Род.; jonsiz → Вин. = Им. (-а/-я bilan tugagan erkak otlar bundan mustasno)
  if (n.g !== "она́" && !/[ая]$/.test(n.ru)) {
    const expected = n.a ? d.forms[1] : d.forms[0];
    if (d.forms[3] !== expected) errors.push(`${at}: Вин. "${d.forms[3]}", lekin "${expected}" kutilgan`);
  }
}

for (const a of dictAdjectives) {
  const at = `lug'at/sifat "${a.ru}"`;
  if (!a.uz?.trim()) errors.push(`${at}: tarjima yo'q`);
  if (CYRILLIC.test(a.uz ?? "")) errors.push(`${at}: tarjimada kirill qolgan`);
  const d = declineAdjective(a.ru);
  if (!d) errors.push(`${at}: tuslana olmadi`);
  else if ([d.m, d.f, d.n, d.pl].some((set) => set.length !== 6 || set.some((x) => !x)))
    errors.push(`${at}: shakllar to'liq emas`);
}

for (const v of dictVerbs) {
  const at = `lug'at/fe'l "${v.nsv}"`;
  if (!v.uz?.trim()) errors.push(`${at}: tarjima yo'q`);
  if (v.present.length !== 6) errors.push(`${at}: hozirgi zamon 6 shakl emas`);
  if (v.sv && v.futureSv?.length !== 6) errors.push(`${at}: СВ kelasi zamon to'liq emas`);
}

/* --- Natija --- */
console.log(`${categories.length} kategoriya · ${flatLessons.length} dars`);
console.log(
  `lug'at: ${dictVerbs.length} fe'l · ${dictNouns.length} ot · ${dictAdjectives.length} sifat · ` +
    `${dictSkipped.length} ot jadvalsiz`,
);

if (errors.length) {
  console.error(`\n${errors.length} ta xato:`);
  errors.forEach((e) => console.error("  - " + e));
  process.exit(1);
}
console.log("hammasi joyida");
