import { Component } from "react";
import "./app.css"
import Register from "../Register";
import Userpage from "../Userpage";


class App extends Component {

    state = {
        isRegistered: false,
        userData: null
    }


    handleRegistration = (userData) => {
        this.setState({
            isRegistered: true,
            userData,
        })
    }

    

    render() {
        const { userData, isRegistered } = this.state
        return (
            <div>
                {isRegistered ?
                    <Userpage userData={userData} />
                    : <Register handleRegistration={this.handleRegistration} />
                }


            </div>
        )
    }
}

export default App