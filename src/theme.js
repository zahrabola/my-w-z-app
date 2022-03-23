import { createContext, useState, useEffect } from "react";

const themes = {
  dark: {
    backgroundColor: "#2F496E", //black  dark blue
    color: "#2988BC", //white
  },
  light: {
    backgroundColor: "#2988BC", //white light blue
    color: "#2F496E", //black
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
  };
  const theme = isDark ? themes.dark : themes.light;

  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    setIsDark(isDark);
  }, []);

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
