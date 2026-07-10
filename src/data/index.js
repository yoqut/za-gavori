import intro from "./01-intro.js";
import casesSg from "./02-cases-singular.js";
import casesPl from "./03-cases-plural.js";
import numTime from "./04-numbers-time.js";
import aspect from "./05-aspect.js";
import motion from "./06-motion.js";
import reflexive from "./07-reflexive.js";

export const categories = [intro, casesSg, casesPl, numTime, aspect, motion, reflexive];

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

/** Darsdagi mashqlar soni (quiz / fill / match). */
export function exerciseCount(lesson) {
  return lesson.blocks.filter((b) => b.t === "quiz" || b.t === "fill" || b.t === "match").length;
}

export const totalLessons = flatLessons.length;
export const totalExercises = flatLessons.reduce((n, x) => n + exerciseCount(x.lesson), 0);
