import { createContext } from "react";

export const themes = {
  light: {
    id: "light",
    foreground: "#000",
    background: "#fff",
  },
  dark: {
    id: "dark",
    foreground: "#fff",
    background: "#000",
  },
};

export const ThemeContext = createContext(null);
