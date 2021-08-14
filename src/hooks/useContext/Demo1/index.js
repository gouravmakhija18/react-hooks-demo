/**
 * useContext hooks - 
 * It is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level.
 * It returns an object with 2 values: { Provider, Consumer }
 * 
 * How it work?
 * Call useContext, pass in the context object you got from React.createContext, and out pops the value.
 * The only thing to watch out for is that you have to pass the whole context object to useContext – not just the Consumer!
 */
import React, { useState } from "react";
import Toolbar from "./components/Toolbar";
import { ThemeContext, themes } from "./theme/ThemeContext";

const initialThemeDark = false;
function Demo1() {
  const [darkMode, setDarkMode] = useState(initialThemeDark); // default value - true for dark theme, false for light theme
  const theme = darkMode ? themes.dark : themes.light;

  return (
    <>
      <h2>Demo 1</h2>
      <button
        onClick={() => setDarkMode(!darkMode)}
      >
        Toogle Darkmode
      </button>
      
      {/* 
        Use <ThemeContext.Provide value={theme}> wrapper to get theme context inside wrapper component
      */}
      <ThemeContext.Provider value={theme}>
        <h2 style={{ color: theme.headingTextColor }}>
          useContext Hook - Theme Text
        </h2>
        <Toolbar />
      </ThemeContext.Provider>
    </>
  );
}

export default Demo1;