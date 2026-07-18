import { useState, useMemo, useEffect } from "react";
import { ThemeContext } from "./theme-context";

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const value = useMemo(
    () => ({ isDark, toggleTheme: () => setIsDark((prev) => !prev) }),
    [isDark],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
