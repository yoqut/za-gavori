/* Ot tuslashda mexanizm o'zi hal qila olmaydigan holatlar.
 * gender — -ь bilan tugaganlar uchun majburiy
 * gen/ins — tushuvchi unli yoki urg'uga bog'liq qo'shimcha
 * forms — butunlay tartibsiz so'zlar
 * skip — tuslanmaydigan yoki faqat ko'plikda ishlatiladigan so'zlar
 */

const M = "он";
const F = "она́";

/** -ь bilan tugagan erkak jinsi otlar (qolganlari ayol jinsi). */
const SOFT_MASC = [
  "день", "путь", "уровень", "рубль", "представитель", "писатель", "спектакль",
  "руководитель", "родитель", "автомобиль", "председатель", "парень", "огонь",
  "камень", "контроль", "читатель", "показатель", "корабль", "заместитель",
  "житель", "декабрь", "октябрь", "сентябрь", "январь", "зритель", "стиль",
  "лагерь", "апрель", "князь", "июнь", "дождь", "июль", "секретарь", "царь",
  "ноябрь", "февраль", "двигатель", "водитель", "корень", "следователь",
  "король", "свидетель", "монастырь", "приятель", "производитель",
  "покупатель", "гость",
];

/** Jonli otlar (Вин. = Род.). */
const ANIMATE = [
  "человек", "друг", "ребёнок", "женщина", "отец", "мать", "дочь", "сын", "брат",
  "сестра", "жена", "муж", "родитель", "врач", "студент", "учитель", "писатель",
  "читатель", "зритель", "житель", "гость", "парень", "девушка", "мальчик",
  "товарищ", "немец", "американец", "москвич", "царь", "король", "князь",
  "председатель", "руководитель", "представитель", "заместитель", "секретарь",
  "водитель", "следователь", "свидетель", "приятель", "покупатель",
  "производитель", "птица", "лошадь", "дядя", "тётя", "судья", "владелец",
  "герой", "солдат", "рабочий", "директор", "автор", "художник", "враг",
];

/** Tushuvchi unli: -ец, -ок va -ень guruhi. */
const FLEETING_GEN = {
  конец: "конца", отец: "отца", палец: "пальца", немец: "немца",
  образец: "образца", американец: "американца", владелец: "владельца",
  дворец: "дворца", танец: "танца",
  ребёнок: "ребёнка", порядок: "порядка", рынок: "рынка", рисунок: "рисунка",
  участок: "участка", десяток: "десятка", список: "списка", цветок: "цветка",
  кусок: "куска", звонок: "звонка", подарок: "подарка",
  недостаток: "недостатка", мешок: "мешка", замок: "замка",
  потолок: "потолка", посёлок: "посёлка", песок: "песка", остаток: "остатка",
  день: "дня", парень: "парня", огонь: "огня", камень: "камня",
  корень: "корня", уровень: "уровня",
};

/** Shovqinli/ц bilan tugagan erkak otlar: Твор. urg'uga bog'liq. */
const SIBILANT = {
  конец: { gen: "конца", ins: "концом" },
  отец: { gen: "отца", ins: "отцом" },
  месяц: { gen: "месяца", ins: "месяцем" },
  муж: { gen: "мужа", ins: "мужем" },
  товарищ: { gen: "товарища", ins: "товарищем" },
  палец: { gen: "пальца", ins: "пальцем" },
  врач: { gen: "врача", ins: "врачом" },
  немец: { gen: "немца", ins: "немцем" },
  этаж: { gen: "этажа", ins: "этажом" },
  образец: { gen: "образца", ins: "образцом" },
  американец: { gen: "американца", ins: "американцем" },
  ключ: { gen: "ключа", ins: "ключом" },
  нож: { gen: "ножа", ins: "ножом" },
  владелец: { gen: "владельца", ins: "владельцем" },
  дворец: { gen: "дворца", ins: "дворцом" },
  рубеж: { gen: "рубежа", ins: "рубежом" },
  танец: { gen: "танца", ins: "танцем" },
  москвич: { gen: "москвича", ins: "москвичом" },
};

/** Urg'u qo'shimchada bo'lgani uchun -ой / -ёй oladigan ayol otlar. */
const FEM_STRESSED_INS = {
  душа: "душой",
  земля: "землёй",
  статья: "статьёй",
  семья: "семьёй",
  судья: "судьёй",
};

/** Butunlay tartibsiz — shakllar to'liq beriladi. */
const IRREGULAR = {
  время: ["время", "времени", "времени", "время", "временем", "времени"],
  имя: ["имя", "имени", "имени", "имя", "именем", "имени"],
  мать: ["мать", "матери", "матери", "мать", "матерью", "матери"],
  дочь: ["дочь", "дочери", "дочери", "дочь", "дочерью", "дочери"],
  любовь: ["любовь", "любви", "любви", "любовь", "любовью", "любви"],
  церковь: ["церковь", "церкви", "церкви", "церковь", "церковью", "церкви"],
  путь: ["путь", "пути", "пути", "путь", "путём", "пути"],
  дядя: ["дядя", "дяди", "дяде", "дядю", "дядей", "дяде"],
  судья: ["судья", "судьи", "судье", "судью", "судьёй", "судье"],
};

/** Tuslanmaydigan yoki faqat ko'plikda ishlatiladigan so'zlar. */
const SKIP = {
  кино: "tuslanmaydi (o'zgarmas so'z)",
  кофе: "tuslanmaydi (o'zgarmas so'z, erkak jinsi)",
  глаза: "«глаз» so'zining ko'pligi",
  деньги: "faqat ko'plikda ishlatiladi",
  часы: "«soat» ma'nosida faqat ko'plikda",
  очки: "faqat ko'plikda ishlatiladi",
  сутки: "faqat ko'plikda ishlatiladi",
  господь: "diniy atama, tartibsiz tuslanadi",
};

/** Erkak jinsidagi -я/-а otlar. */
const MASC_A = ["дядя", "судья", "папа", "дедушка", "мужчина", "юноша"];

export function overrideFor(word) {
  const w = word.toLowerCase();
  const ov = {};

  if (SKIP[w]) return { skip: true, note: SKIP[w] };
  if (IRREGULAR[w]) {
    return {
      forms: IRREGULAR[w],
      gender: ["мать", "дочь", "любовь", "церковь"].includes(w) ? F : MASC_A.includes(w) ? M : w === "путь" ? M : "оно́",
      anim: ANIMATE.includes(w),
    };
  }

  if (w.endsWith("ь")) ov.gender = SOFT_MASC.includes(w) ? M : F;
  if (MASC_A.includes(w)) ov.gender = M;
  if (ANIMATE.includes(w)) ov.anim = true;
  if (FLEETING_GEN[w]) ov.gen = FLEETING_GEN[w];
  if (SIBILANT[w]) Object.assign(ov, SIBILANT[w]);
  if (FEM_STRESSED_INS[w]) ov.ins = FEM_STRESSED_INS[w];

  // Erkak jinsi -ь: urg'uli -ём oladiganlar
  // «князь» bu ro'yxatda emas: кня́зем, urg'u o'zakda.
  const SOFT_M_STRESSED = ["рубль", "корабль", "царь", "дождь", "огонь", "день",
    "король", "секретарь", "монастырь", "январь", "февраль",
    "сентябрь", "октябрь", "ноябрь", "декабрь"];
  if (SOFT_M_STRESSED.includes(w)) {
    const gen = ov.gen ?? w.slice(0, -1) + "я";
    ov.ins = gen.slice(0, -1) + "ём";
  }

  return ov;
}

export const stats = {
  softMasc: SOFT_MASC.length,
  animate: ANIMATE.length,
  fleeting: Object.keys(FLEETING_GEN).length,
  sibilant: Object.keys(SIBILANT).length,
  irregular: Object.keys(IRREGULAR).length,
  skip: Object.keys(SKIP).length,
};
