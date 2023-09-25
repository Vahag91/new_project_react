
import "./app.css"
import Register from "../Register";
import Userpage from "../Userpage";
import DarkThemeToggle from "../DarkThemeToggle/DarkThemeToggle";
import { useState } from "react";
import LocalStorageService from "../../services/LocalStorageService";

function App() {
    const storedData = LocalStorageService.getUserData()
    const [userData, setUserData] = useState(storedData)
    const [isRegistered, setIsRegistered] = useState(!!storedData)
    const [themeColor, setThemeColor] = useState('white')



    const themeChange = (event) => {

        if (event.target.checked) {
            setThemeColor("black")
        } else {
            setThemeColor("white")
        }
    }

    const handleRegistration = (userData) => {

        LocalStorageService.saveUserData(userData)
        setIsRegistered(true)
        setUserData(userData)
    }

    const onReset = () => {
        setIsRegistered(false)
        LocalStorageService.clearUserData()
    }

    // const bodyTheme = document.body
    // bodyTheme.style.backgroundColor = themeColor


    return (
        <div>
            <DarkThemeToggle themeChange={themeChange} themeColor={themeColor} />
            {isRegistered ?
                <Userpage
                    userData={userData}
                    onReset={onReset} />
                : <Register
                    handleRegistration={handleRegistration} />
            }
        </div>
    )
}

export default App