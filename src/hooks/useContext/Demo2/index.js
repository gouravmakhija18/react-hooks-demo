import { useState, useContext, createContext}from 'react';
import "./style.css";

// Create Context at root level
const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("theme1");
  
  function handleChange(e) {
    setTheme(e.target.value);
    e.preventDefault();
  }
  return (
    // use Context.Provider value to pass context to consumer
    <ThemeContext.Provider value={theme}>
      <select onChange={handleChange}>
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
      </select>
      {/* Access context in children component */}
      {children} 
    </ThemeContext.Provider>
  );
}

function Footer() {
  // Get context here and use in this component
  // Important: here we pass full context object
  const theme = useContext(ThemeContext); 
  return (
    <footer className={theme}>useContext demo</footer>
  );
}

function Demo2() {
  return (
    <div className='main-wrapper'>
      <h2>Demo 2</h2>
      <ThemeProvider>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default Demo2;