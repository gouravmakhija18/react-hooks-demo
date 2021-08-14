import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

function ThemedButton() {
  /**
   * We have not passed theme in props but we are using useContext to get theme value.
   * Whenever theme value update in provider button will show updated theme changes here
   */
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme.btnTextColor,
        color: theme.btnBackground,
        padding: 10
      }}
    >
      I am styled by theme context!
    </button>
  );
}
export default ThemedButton;