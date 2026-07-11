import alphabet from "./00-alphabet.js";
import intro from "./01-intro.js";
import casesSg from "./02-cases-singular.js";
import casesPl from "./03-cases-plural.js";
import numTime from "./04-numbers-time.js";
import aspect from "./05-aspect.js";
import motion from "./06-motion.js";
import reflexive from "./07-reflexive.js";
import reading from "./08-reading.js";

export const categories = [alphabet, intro, casesSg, casesPl, numTime, aspect, motion, reflexive, reading];

/** Barcha darslar — tekis ro'yxat, "oldingi / keyingi" tugmalari uchun. */
export const flatLessons = categories.flatMap((cat) =>
  cat.lessons.map((lesson) => ({ cat, lesson })),
);

export function findLesson(catId, lessonId) {
  return flatLessons.find((x) => x.cat.id === catId && x.lesson.id === lessonId) ?? null;
}

export function lessonIndex(catId, lessonId) {
  return flatLessons.findIndex((x) => x.cat.id === catId && x.lesson.id === lessonId);
}

export const totalLessons = flatLessons.length;
