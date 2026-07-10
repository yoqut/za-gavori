/* Lug'atni data/ ichidagi PDF'lardan qayta yasaydi: `npm run build:dict`
 *
 * Bosqichlar: PDF → matn → tuzilma → src/data/dict-*.js
 * Tuslash mexanizmi src/decline.js dan olinadi — ilova ham o'shani ishlatadi,
 * shuning uchun bu yerda yasalgan narsa brauzerda ko'rinadigan narsa bilan bir xil.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as pdfjs from "pdfjs-dist/legacy/build/pdf.mjs";

import { translit } from "./translit.mjs";
import { overrideFor } from "./overrides.mjs";
import { VERB_UZ } from "./verb-uz.mjs";
import { declineAdjective, declineNoun } from "../../src/decline.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const DATA = path.join(ROOT, "data");
const OUT = path.join(ROOT, "src", "data");

const SOURCES = {
  adjectives: "имя прилагательное 1000(1).pdf",
  nouns: "имя существительное 1000(1).pdf",
  verbs: "спряжение глаголов важно (6).pdf",
};

/* ---------------- PDF → matn ---------------- */

async function pdfPages(file) {
  const data = new Uint8Array(fs.readFileSync(path.join(DATA, file)));
  const doc = await pdfjs.getDocument({ data, useSystemFonts: true }).promise;
  const pages = [];
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const tc = await page.getTextContent();
    pages.push(tc.items.map((it) => (it.str ?? "") + (it.hasEOL ? "\n" : "")).join(""));
  }
  return pages;
}

/* ---------------- «so'z + tarjima» ro'yxatlari ---------------- */

const UZ_ONLY = /[ўқғҳЎҚҒҲ]/; // faqat o'zbek kirillida uchraydigan harflar

function parseWordList(pages) {
  const lines = pages
    .join("\n")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !/^Имя /.test(l));

  const entries = [];
  for (const line of lines) {
    const [first, ...rest] = line.split(/\s+/);
    // Oldingi qatordan ko'chib kelgan tarjima davomi
    if (UZ_ONLY.test(first) && entries.length) {
      entries.at(-1).uzRaw += " " + line;
      continue;
    }
    if (!rest.length) continue;
    entries.push({ ru: first.replace(/[,.]$/, "").toLowerCase(), uzRaw: rest.join(" ") });
  }

  const seen = new Set();
  return entries.filter((e) => (seen.has(e.ru) ? false : (seen.add(e.ru), true)));
}

/* ---------------- Fe'l sahifalari ---------------- */

const PRON = ["Я", "Ты", "Он (она)", "Мы", "Вы", "Они"];

function parseVerbPage(txt) {
  const lines = txt.split("\n").map((l) => l.trim()).filter(Boolean);
  const head = lines.find((l) => /^ИНФИНИТИВ/.test(l));
  if (!head) return null;

  const rest = head.replace(/^ИНФИНИТИВ\s+/, "");
  const nsvM = rest.match(/^(.+?)\s+(I{1,2}),\s*НСВ/);
  if (!nsvM) return null;

  const svM = rest.slice(nsvM[0].length).trim().match(/^(.+?)\s+(I{1,2}),\s*СВ/);
  const hasSv = Boolean(svM);

  const present = PRON.map((p) => {
    const line = lines.find((l) => l.startsWith(p + " ") && !/бу(ду|дешь|дет|дем|дете|дут)/.test(l));
    return line ? line.slice(p.length).trim() : "";
  });

  // "говорил сказал" → НСВ + СВ
  const splitPair = (s) => {
    const t = (s ?? "").trim().split(/\s+/).filter(Boolean);
    if (!hasSv || t.length < 2) return { nsv: t.join(" "), sv: null };
    return { nsv: t.slice(0, -1).join(" "), sv: t.at(-1) };
  };

  const grab = (re) => lines.find((l) => re.test(l))?.replace(re, "").trim();
  const past = {
    m: splitPair(grab(/^Я, ты, он\s+/)),
    f: splitPair(grab(/^Я, ты, она\s+/)),
    n: splitPair(grab(/^Оно\s+/)),
    pl: splitPair(grab(/^Мы, вы, они\s+/)),
  };

  // "Я буду говорить скажу" → СВ kelasi = oxirgi so'z
  const futureSv = hasSv
    ? PRON.map((p) => {
        const line = lines.find((l) => l.startsWith(p + " ") && /бу(ду|дешь|дет|дем|дете|дут)/.test(l));
        return line ? line.trim().split(/\s+/).at(-1) : "";
      })
    : null;

  const impIdx = lines.findIndex((l) => /^ИМПЕРАТИВ/.test(l));
  const imperative = [];
  if (impIdx >= 0) {
    imperative.push(lines[impIdx].replace(/^ИМПЕРАТИВ\s*/, "").trim());
    for (let i = impIdx + 1; i < lines.length; i++) {
      if (/^(настоящее|прошедшее|АКТИВНЫЕ|ПАССИВНЫЕ|ДЕЕПРИЧАСТИЕ|ПАДЕЖНОЕ)/.test(lines[i])) break;
      imperative.push(lines[i].trim());
    }
  }

  // Kelishik boshqaruvi: yangi band "(" yoki bosh harf bilan boshlanadi,
  // qolgan qatorlar oldingisining davomi.
  const govIdx = lines.findIndex((l) => /^ПАДЕЖНОЕ/.test(l));
  const raw = govIdx < 0 ? [] : lines.slice(lines[govIdx + 1] === "УПРАВЛЕНИЕ" ? govIdx + 2 : govIdx + 1);
  const chunks = [];
  for (const line of raw.filter((l) => !/^\d+$/.test(l))) {
    if (/^\(/.test(line) || /^[А-ЯЁ][а-яё]+/.test(line) || !chunks.length) chunks.push(line);
    else chunks[chunks.length - 1] += " " + line;
  }

  // Misol bosh harf bilan boshlanadi — shu tire ajratuvchi hisoblanadi.
  // "Открывать – открыть (что? В.п.) – Я открываю дверь" da birinchisi emas, ikkinchisi.
  const government = chunks
    .map((c) => {
      const m = c.match(/^(.*?)\s+[-–]\s+(?=[А-ЯЁ])(.+)$/);
      return m
        ? { pattern: m[1].trim().replace(/\.$/, ""), example: m[2].trim() }
        : { pattern: c.trim().replace(/\.$/, ""), example: "" };
    })
    .filter((g) => g.pattern);

  const nsv = nsvM[1].trim().toLowerCase();
  return {
    nsv,
    uz: VERB_UZ[nsv] ?? "",
    conj: nsvM[2],
    sv: hasSv ? svM[1].trim().toLowerCase() : null,
    conjSv: hasSv ? svM[2] : null,
    present,
    past,
    futureSv,
    imperative: imperative.join(" · "),
    government,
  };
}

/* ---------------- Yig'ish ---------------- */

const banner = (src) =>
  `// AVTOMATIK YARATILGAN — qo'lda tahrirlamang.\n` +
  `// Manba: data/${src}\n` +
  `// Qayta yasash: npm run build:dict\n\n`;

const write = (file, src, body) => fs.writeFileSync(path.join(OUT, file), banner(src) + body, "utf8");

const adjRaw = parseWordList(await pdfPages(SOURCES.adjectives));
const adjectives = [];
const adjSkipped = [];
for (const { ru, uzRaw } of adjRaw) {
  if (declineAdjective(ru)) adjectives.push({ ru, uz: translit(uzRaw) });
  else adjSkipped.push(ru);
}

const nounRaw = parseWordList(await pdfPages(SOURCES.nouns));
const nouns = [];
const nounSkipped = [];
for (const { ru, uzRaw } of nounRaw) {
  const ov = overrideFor(ru);
  const d = declineNoun(ru, ov);
  const uz = translit(uzRaw);
  if (!d) {
    nounSkipped.push({ ru, uz, note: ov.note ?? "tuslanishi aniq emas" });
    continue;
  }
  const entry = { ru, uz, g: d.gender };
  if (d.anim) entry.a = 1;
  if (ov.gen) entry.gen = ov.gen;
  if (ov.ins) entry.ins = ov.ins;
  if (ov.forms) entry.f = ov.forms;
  nouns.push(entry);
}

const verbs = (await pdfPages(SOURCES.verbs)).map(parseVerbPage).filter(Boolean);

write("dict-adjectives.js", SOURCES.adjectives, `export default ${JSON.stringify(adjectives)};\n`);
write(
  "dict-nouns.js",
  SOURCES.nouns,
  `export default ${JSON.stringify(nouns)};\n\nexport const skipped = ${JSON.stringify(nounSkipped)};\n`,
);
write("dict-verbs.js", SOURCES.verbs, `export default ${JSON.stringify(verbs)};\n`);

console.log(`sifatlar : ${adjectives.length} (${adjSkipped.length} o'tkazib yuborildi: ${adjSkipped.join(", ")})`);
console.log(`otlar    : ${nouns.length} (${nounSkipped.length} jadvalsiz: ${nounSkipped.map((n) => n.ru).join(", ")})`);
console.log(`fe'llar  : ${verbs.length}, boshqaruv bandlari: ${verbs.reduce((n, v) => n + v.government.length, 0)}`);
console.log("\nsrc/data/dict-*.js yangilandi — endi `npm run check` ni ishga tushiring.");
