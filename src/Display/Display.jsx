import classes from './Display.module.css'

export default function Display({displayText}){
    return(
        <div className={classes.display_container}>
            <p>{displayText}</p>
        </div>
    )
}