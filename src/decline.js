/* Tuslash mexanizmlari.
 * Tartib: [Им., Род., Дат., Вин., Твор., Предл.]
 */

const VELAR = "кгх";
const SIB = "жчшщ";

/* ------------------------------------------------------------------ */
/*  SIFAT — to'liq qoidaviy, istisnosiz                                */
/* ------------------------------------------------------------------ */

export function declineAdjective(nom) {
  const end = nom.slice(-2);
  if (!["ый", "ий", "ой"].includes(end)) return null;
  const stem = nom.slice(0, -2);
  const last = stem.at(-1);

  // Qattiq/yumshoq/velar/shovqinli sinf
  const soft = end === "ий" && !VELAR.includes(last) && !SIB.includes(last);
  const stressed = end === "ой"; // urg'u qo'shimchada → "о" unlisi
  const sibilant = SIB.includes(last);

  // и/ы tanlovi: yumshoq o'zak, velar va shovqinlidan keyin "и"
  const i = soft || VELAR.includes(last) || sibilant ? "и" : "ы";
  // о/е tanlovi: urg'usiz shovqinlidan keyin "е"
  const o = soft || (sibilant && !stressed) ? "е" : "о";
  const a = soft ? "я" : "а";
  const u = soft ? "ю" : "у";

  const m = [
    nom,
    stem + o + "го",
    stem + o + "му",
    nom, // jonsiz; jonli uchun = Род.
    stem + i + "м",
    stem + o + "м",
  ];
  const f = [
    stem + a + "я",
    stem + o + "й",
    stem + o + "й",
    stem + u + "ю",
    stem + o + "й",
    stem + o + "й",
  ];
  const n = [stem + o + "е", m[1], m[2], stem + o + "е", m[4], m[5]];
  const pl = [
    stem + i + "е",
    stem + i + "х",
    stem + i + "м",
    stem + i + "е", // jonsiz
    stem + i + "ми",
    stem + i + "х",
  ];

  return { m, f, n, pl, mAnim: m[1], plAnim: pl[1] };
}

/* ------------------------------------------------------------------ */
/*  OT                                                                 */
/* ------------------------------------------------------------------ */

/**
 * overrides: { gender, anim, gen, ins, skip, note }
 * Qaytaradi: { forms:[6], gender, anim } yoki null (ishonchsiz).
 */
export function declineNoun(nom, ov = {}) {
  if (ov.skip) return null;
  if (ov.forms) return { forms: ov.forms, gender: ov.gender, anim: Boolean(ov.anim) };

  const w = nom.toLowerCase();
  const last = w.at(-1);
  const stemOf = (n) => w.slice(0, -n);

  const anim = Boolean(ov.anim);
  const acc = (forms) => (anim ? forms[1] : forms[0]);

  /* --- Ayol jinsi: -а --- */
  if (last === "а") {
    const stem = stemOf(1);
    const s = stem.at(-1);
    const gen = ov.gen ?? stem + (VELAR.includes(s) || SIB.includes(s) ? "и" : "ы");
    const ins = ov.ins ?? stem + (SIB.includes(s) || s === "ц" ? "ей" : "ой");
    const f = [w, gen, stem + "е", stem + "у", ins, stem + "е"];
    return { forms: f, gender: "она́", anim };
  }

  /* --- Ayol jinsi: -я / -ия --- */
  if (last === "я") {
    const stem = stemOf(1);
    if (w.endsWith("ия")) {
      const s2 = stemOf(2);
      const f = [w, s2 + "ии", s2 + "ии", s2 + "ию", s2 + "ией", s2 + "ии"];
      return { forms: f, gender: "она́", anim };
    }
    const gen = ov.gen ?? stem + "и";
    const ins = ov.ins ?? stem + "ей";
    const f = [w, gen, stem + "е", stem + "ю", ins, stem + "е"];
    return { forms: f, gender: "она́", anim };
  }

  /* --- O'rta jins --- */
  if (last === "о") {
    const stem = stemOf(1);
    const f = [w, stem + "а", stem + "у", w, stem + "ом", stem + "е"];
    return { forms: f, gender: "оно́", anim: false };
  }
  if (w.endsWith("ие") || w.endsWith("ье")) {
    const s2 = stemOf(2);
    const y = w.endsWith("ье") ? "ь" : "и";
    const f = [w, s2 + y + "я", s2 + y + "ю", w, s2 + y + "ем", s2 + (w.endsWith("ье") ? "ье" : "ии")];
    return { forms: f, gender: "оно́", anim: false };
  }
  if (last === "е") {
    const stem = stemOf(1);
    const f = [w, stem + "я", stem + "ю", w, stem + "ем", stem + "е"];
    return { forms: f, gender: "оно́", anim: false };
  }

  /* --- Yumshoq belgi: jins qoidadan chiqmaydi, override majburiy --- */
  if (last === "ь") {
    if (!ov.gender) return null;
    const stem = stemOf(1);
    if (ov.gender === "она́") {
      const f = [w, stem + "и", stem + "и", w, stem + "ью", stem + "и"];
      return { forms: f, gender: "она́", anim };
    }
    const gen = ov.gen ?? stem + "я";
    const genStem = gen.slice(0, -1); // "дня" → "дн"
    const ins = ov.ins ?? genStem + "ем";
    const f = [w, gen, genStem + "ю", anim ? gen : w, ins, genStem + "е"];
    return { forms: f, gender: "он", anim };
  }

  /* --- Erkak jinsi: -й --- */
  if (last === "й") {
    const stem = stemOf(1);
    if (w.endsWith("ий")) {
      const s2 = stemOf(2);
      const f = [w, s2 + "ия", s2 + "ию", anim ? s2 + "ия" : w, s2 + "ием", s2 + "ии"];
      return { forms: f, gender: "он", anim };
    }
    const f = [w, stem + "я", stem + "ю", anim ? stem + "я" : w, stem + "ем", stem + "е"];
    return { forms: f, gender: "он", anim };
  }

  /* --- Erkak jinsi: undosh --- */
  if (/[бвгджзклмнпрстфхцчшщ]/.test(last)) {
    // Shovqinli/ц oxiri: Твор. urg'uga bog'liq → override majburiy
    if (SIB.includes(last) || last === "ц") {
      if (!ov.ins || !ov.gen) return null;
      const genStem = ov.gen.slice(0, -1);
      const f = [w, ov.gen, genStem + "у", anim ? ov.gen : w, ov.ins, genStem + "е"];
      return { forms: f, gender: "он", anim };
    }
    const gen = ov.gen ?? w + "а";
    const genStem = gen.slice(0, -1);
    const ins = ov.ins ?? genStem + "ом";
    const f = [w, gen, genStem + "у", anim ? gen : w, ins, genStem + "е"];
    return { forms: f, gender: "он", anim };
  }

  return null;
}

/** Har bir kelishik uchun tipik ibora — avtomatik va har doim to'g'ri. */
export function casePhrases(forms, anim) {
  return [
    `э́то ${forms[0]}`,
    `нет ${forms[1]}`,
    `к ${forms[2]}`,
    `${anim ? "ви́жу" : "ви́жу"} ${forms[3]}`,
    `с ${forms[4]}`,
    `о ${forms[5]}`,
  ];
}
