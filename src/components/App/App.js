
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


    const handleRegistration = (userData) => {

        LocalStorageService.saveUserData(userData)
        setIsRegistered(true)
        setUserData(userData)
    }

    const onReset = () => {
        setIsRegistered(false)
        LocalStorageService.clearUserData()
    }

  

    return (
        <DarkThemeToggle>
            {isRegistered ?
                <Userpage
                    userData={userData}
                    onReset={onReset} />
                : <Register
                    handleRegistration={handleRegistration} />
            }
           </DarkThemeToggle> 
     
    )
}

export default App