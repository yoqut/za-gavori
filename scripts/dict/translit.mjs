/* O'zbek kirill → o'zbek lotin. Manba PDF'lardagi tarjimalar kirillcha. */

const MAP = {
  ў: "o'", Ў: "O'",
  қ: "q", Қ: "Q",
  ғ: "g'", Ғ: "G'",
  ҳ: "h", Ҳ: "H",
  а: "a", б: "b", в: "v", г: "g", д: "d",
  ж: "j", з: "z", и: "i", й: "y", к: "k",
  л: "l", м: "m", н: "n", о: "o", п: "p",
  р: "r", с: "s", т: "t", у: "u", ф: "f",
  х: "x", ц: "ts", ч: "ch", ш: "sh",
  ъ: "'", ы: "i", ь: "",
  э: "e", ю: "yu", я: "ya", ё: "yo",
  А: "A", Б: "B", В: "V", Г: "G", Д: "D",
  Ж: "J", З: "Z", И: "I", Й: "Y", К: "K",
  Л: "L", М: "M", Н: "N", О: "O", П: "P",
  Р: "R", С: "S", Т: "T", У: "U", Ф: "F",
  Х: "X", Ц: "Ts", Ч: "Ch", Ш: "Sh",
  Ъ: "'", Ы: "I", Ь: "",
  Э: "E", Ю: "Yu", Я: "Ya", Ё: "Yo",
};

const VOWELS = "аеёиоуўэюяАЕЁИОУЎЭЮЯ";

export function translit(s) {
  let out = "";
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "е" || ch === "Е") {
      // so'z boshida yoki unlidan keyin "ye", aks holda "e"
      const prev = s[i - 1];
      const start = i === 0 || !/[а-яёўқғҳА-ЯЁЎҚҒҲ]/.test(prev ?? "");
      const afterVowel = prev && VOWELS.includes(prev);
      const ye = start || afterVowel;
      out += ch === "Е" ? (ye ? "Ye" : "E") : ye ? "ye" : "e";
      continue;
    }
    out += MAP[ch] ?? ch;
  }
  return out
    .replace(/\s+/g, " ")
    .replace(/\s+,/g, ",")
    .trim();
}
