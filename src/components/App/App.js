
import "./app.css"
import Register from "../Register";
import Userpage from "../Userpage";
import { useState } from "react";
import LocalStorageService from "../../services/LocalStorageService";

function App() {
    const storedData = LocalStorageService.getUserData()
    // const deleteData = LocalStorageService.clearUserData()
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
        <div>
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