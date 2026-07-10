const KEY = "russian-lessons-progress-v1";

/**
 * Saqlanadigan shakl:
 * { "catId/lessonId": { done: true, correct: 5, total: 7 } }
 */
function read() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) ?? {};
  } catch {
    return {};
  }
}

function write(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // localStorage bloklangan bo'lsa (private rejim) — jim o'tamiz
  }
}

const key = (catId, lessonId) => `${catId}/${lessonId}`;

export function getLesson(catId, lessonId) {
  return read()[key(catId, lessonId)] ?? null;
}

export function isDone(catId, lessonId) {
  return Boolean(getLesson(catId, lessonId)?.done);
}

export function saveResult(catId, lessonId, correct, total) {
  const data = read();
  data[key(catId, lessonId)] = { done: true, correct, total };
  write(data);
}

export function doneCount() {
  return Object.values(read()).filter((x) => x.done).length;
}

export function correctCount() {
  return Object.values(read()).reduce((n, x) => n + (x.correct ?? 0), 0);
}

export function reset() {
  write({});
}
