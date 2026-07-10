const KEY = "russian-lessons-theme";

/** Default — qorong'i. Tizim sozlamasiga qaralmaydi. */
export function getMode() {
  try {
    return localStorage.getItem(KEY) === "light" ? "light" : "dark";
  } catch {
    // localStorage bloklangan (private rejim)
    return "dark";
  }
}

export function setMode(mode) {
  try {
    localStorage.setItem(KEY, mode);
  } catch {
    // jim o'tamiz
  }
  document.documentElement.dataset.theme = mode;
}

const OPTIONS = [
  { mode: "dark", icon: "☾", label: "Qorong'i" },
  { mode: "light", icon: "☀", label: "Yorug'" },
];

/** Sidebar uchun ikki holatli almashtirgich. */
export function renderThemeSwitch() {
  const box = document.createElement("div");
  box.className = "theme-switch";
  box.role = "group";
  box.ariaLabel = "Tema";

  const sync = () => {
    const mode = getMode();
    for (const btn of box.children) {
      btn.setAttribute("aria-pressed", String(btn.dataset.mode === mode));
    }
  };

  OPTIONS.forEach(({ mode, icon, label }) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.mode = mode;
    btn.title = label;
    btn.innerHTML = `<span aria-hidden="true">${icon}</span><span>${label}</span>`;
    btn.addEventListener("click", () => {
      setMode(mode);
      sync();
    });
    box.append(btn);
  });

  sync();
  return box;
}
