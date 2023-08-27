import classes from './App.module.css'
import Theme from './Theme/Theme.jsx'
import Display from './Display/Display.jsx'
import Keypad from './Keypad/Keypad.jsx'
import {useState} from 'react'

function App() {
  const [displayText, setDisplayText] = useState("")
  console.log(displayText)

  return (
    <div className={classes.container}>
    <Theme/>
    <Display displayText={displayText}/>
    <Keypad setDisplayText={setDisplayText} displayText={displayText}/>
    </div>
  )
}

export default App
