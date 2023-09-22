import { Component } from "react";
import "./app.css"
import Register from "../Register";
import Userpage from "../Userpage";
import { saveData, getData, deleteData } from "../../services/localstorage";



class App extends Component {

    state = {
        isRegistered: getData("isRegistered"),
        userData: getData("userdata")
    }


    handleRegistration = (userData) => {

        saveData("isRegistered", true)
        saveData("userdata", userData)

        this.setState({
            isRegistered: true,
            userData,
        })
    }

    onReset = () => {

        const isRegistered = false
        const userData = null

        deleteData("isRegistered")
        deleteData("userdata")

        this.setState({ isRegistered, userData })
    }






    render() {
        const { userData, isRegistered } = this.state
        return (
            <div>
                {isRegistered ?
                    <Userpage userData={userData} onReset={this.onReset} />
                    : <Register handleRegistration={this.handleRegistration} />
                }


            </div>
        )
    }
}

export default App