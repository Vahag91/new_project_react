import { useState } from "react";
import "./darkthemetoggle.css"

function DarkThemeToggle({ children }) {

    const [themeColor, setThemeColor] = useState(false)



    const themeChange = () => {
        setThemeColor((prev) => !prev)
    }



    return (

        <div className={themeColor ? "dark-theme app" : "ligth-theme app"}>
            <label>
                <input type="checkbox" onChange={themeChange} />
                Change theme
            </label>
            {children}
        </div>
    )
}


export default DarkThemeToggle


