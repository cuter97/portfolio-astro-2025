import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Theme = "theme-light" | "dark" | "system";

type Props = { children?: React.ReactNode };

export function ModeToggle({ children }: Props) {
  // Leer el tema inicial sincrónicamente
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return "system";

    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "theme-light") {
        return stored as Theme;
      }
    } catch (e) {
      // Si falla, usar system
    }
    return "system";
  });

  const [mounted, setMounted] = useState(false);

  // Marcar que el componente está montado
  useEffect(() => {
    setMounted(true);
  }, []);

  // cuando cambie `theme`, aplicamos la clase y guardamos en localStorage
  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    try {
      if (theme === "system") {
        localStorage.removeItem("theme");
      } else {
        localStorage.setItem("theme", theme);
      }
    } catch { }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "dark" ? "theme-light" : "dark";
    const applyTheme = () => setThemeState(newTheme);
    applyTheme();
  };

  // Evitar hydration mismatch mostrando el botón sin handler hasta que esté montado
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="mx-2" disabled>
        {children}
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="mx-2">
      {children}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
