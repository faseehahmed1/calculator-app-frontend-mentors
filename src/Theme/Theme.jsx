import classes from "./Theme.module.css";
import ReactThreeToggle from "react-three-toggle";
import { useEffect, useState } from "react";

const savedTheme = localStorage.getItem("theme") || (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "theme-two"
      : "theme-three");

export default function Theme() {
  const [theme, setTheme] = useState(savedTheme);
  const [toggleEqualBtnColor, setToggleEqualBtnColor] = useState('');
  const [toggleBgColor, setToggleBgColor] = useState('');

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;

    // Update the CSS variable values after the theme has been applied
    const fetchedToggleEqualBtnColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--toggle-equal-btn")
      .trim();

    const fetchedToggleBgColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--toggle-keypad-bg")
      .trim();

    setToggleEqualBtnColor(fetchedToggleEqualBtnColor);
    setToggleBgColor(fetchedToggleBgColor);

  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  function handleToggleChange(newValue) {
    setTheme(newValue.value);
  }

  return (
    <div className={classes.theme_container}>
      <h1>calc</h1>
      <div className={classes.toggle_container}>
        <div className={classes.toggle}>
          <p></p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p className={classes.span_2}>THEME</p>
          <div className={classes.span_3}>
            <ReactThreeToggle
              initialValue={theme}
              values={[
                { label: "", value: "theme-one" },
                { label: "", value: "theme-two" },
                { label: "", value: "theme-three" },
              ]}
              onChange={handleToggleChange}
              style={{
                wrapperStyle: {
                  border: `none`,
                  backgroundColor: toggleBgColor || "hsl(223, 31%, 20%)",
                },
                selectedStyle: {
                  backgroundColor: toggleEqualBtnColor || "hsl(6, 63%, 50%)",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
