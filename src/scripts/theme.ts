const getThemePreference = (): "dark" | "theme-light" => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme") as "dark" | "theme-light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "theme-light";
};

export const applyTheme = () => {
  const isDark = getThemePreference() === "dark";
  document.documentElement.classList[isDark ? "add" : "remove"]("dark");
};

export const observeThemeChanges = () => {
  if (typeof localStorage !== "undefined") {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "theme-light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }
};
