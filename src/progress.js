const KEY = "russian-lessons-progress-v1";

/**
 * Saqlanadigan shakl:
 * { "catId/lessonId": { done: true, read: true } }
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

/** Darsni "o'qib chiqdim" deb belgilaydi. */
export function markRead(catId, lessonId) {
  const data = read();
  data[key(catId, lessonId)] = { done: true, read: true };
  write(data);
}

export function doneCount() {
  return Object.values(read()).filter((x) => x.done).length;
}

export function reset() {
  write({});
}
