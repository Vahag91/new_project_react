
import "./app.css"
import Register from "../Register";
import Userpage from "../Userpage";
import { saveData, getData, deleteData } from "../../services/localstorage";
import { useState } from "react";

function App() {

    const [userData, setUserData] = useState(getData("isRegistered"))
    const [isRegistered, setIsRegistered] = useState(getData("userdata"))

    // state = {
    //     isRegistered: getData("isRegistered"),
    //     userData: getData("userdata")
    // }


    const handleRegistration = (userData) => {

        saveData("isRegistered", true)
        saveData("userdata", userData)

        setIsRegistered(true)
        setUserData(userData)

        // this.setState({
        //     isRegistered: true,
        //     userData,
        // })
    }

    const onReset = () => {

        const isRegistered = false
        const userData = null

        deleteData("isRegistered")
        deleteData("userdata")

        setIsRegistered(isRegistered)
        setUserData(userData)

        // this.setState({ isRegistered, userData })
    }


    return (
        <div>
            {isRegistered ?
                <Userpage userData={userData} onReset={onReset} />
                : <Register handleRegistration={handleRegistration} />
            }
        </div>
    )


}

export default App