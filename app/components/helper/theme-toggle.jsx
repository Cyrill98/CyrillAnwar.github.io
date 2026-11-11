"use client";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    setTheme(next);
  };

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Dark mode" : "Light mode"}
      className={`rounded-full p-2 text-fg/80 transition-colors duration-200 hover:bg-fg/5 hover:text-accent ${className}`}
    >
      {theme === null ? <span className="block h-[18px] w-[18px]" /> : isLight ? <FiMoon size={18} /> : <FiSun size={18} />}
    </button>
  );
}

export default ThemeToggle;
