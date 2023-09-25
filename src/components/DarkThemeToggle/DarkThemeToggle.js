import { useState } from "react";


function DarkThemeToggle(props){

const themeColor = props.themeColor
const themeChange = props.themeChange

const bodyTheme = document.body
bodyTheme.style.backgroundColor = themeColor

    return (
        <label>
        <input type="checkbox" onChange={themeChange}/>
        Change theme
        </label>
    )
}


export default DarkThemeToggle


