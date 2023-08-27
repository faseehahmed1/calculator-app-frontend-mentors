import classes from "./Keypad.module.css";
import clsx from "clsx";
import KEYPAD from "../DATA.js";
import { evaluate } from "mathjs";

export default function Keypad({ setDisplayText, displayText }) {
  try {
    console.log(evaluate("5*"));
  } catch (error) {
    console.error("error");
  }

  function handleUserInput(value) {
    if (value === "RESET") {
        setDisplayText("");
        return;
      }
    if(displayText === "Infinity") return;
    if (value === "=") {
      if (!isNaN(parseInt(displayText.at(-1), 10))) {
        try {
          setDisplayText(evaluate(displayText).toString());
        } catch (error) {
          console.error("error");
        }
      }
      return;
    }
    if (value === "DEL") {
      setDisplayText((prev) => prev.slice(0, -1));
      return;
    }

    // a number
    if (!isNaN(parseInt(value, 10))) {
      setDisplayText((prev) => prev + value);
    }
    // a operator and x convert
    else if (isNaN(parseInt(value, 10))) {
        
        if(!isNaN(parseInt(displayText.at(-1), 10))){
            if(value === "x"){
                value = "*"
            }
            setDisplayText((prev) => prev + value)
        }
        else if(displayText.at(-1) !== '.' && value === '.'){
            setDisplayText((prev) => prev + value)
        }
    }
  }

  return (
    <div className={classes.keypad_container}>
      {KEYPAD.map((item, index) => {
        const buttonClass = clsx([classes.btn], {
          [classes.del_reset_btn]: item.class === "del_reset_btn",
          [classes.equal_btn]: item.class === "equal_btn",
          [classes.span_2]: item.spanClass === "span_2",
        });
        return (
          <button
            value={item.value}
            onClick={(e) => handleUserInput(e.target.value)}
            key={index}
            className={buttonClass}
          >
            {item.value}
          </button>
        );
      })}
    </div>
  );
}
