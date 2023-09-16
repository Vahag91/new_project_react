import { Component } from "react";
import './userpage.css'


class Userpage extends Component{


    render(){
        const {username,email,password,}= this.props.info
        return(
<div className="userInfo">
    <ul>
        <li> Username -{username}</li>
        <li> Email -{email}</li>
        <li> Password -{password}</li>
    </ul>
</div>
        )
    }
}

export default Userpage