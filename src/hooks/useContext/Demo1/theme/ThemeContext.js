import { createContext } from "react";
const themes = {
  light: {
    btnTextColor: "#000000",
    btnBackground: "#eeeeee",
    headingTextColor: 'red'

  },
  dark: {
    btnTextColor: "#ffffff",
    btnBackground: "#222222",
    headingTextColor: 'blue'
  }
};

const ThemeContext = createContext(themes.light);
export { themes, ThemeContext };
