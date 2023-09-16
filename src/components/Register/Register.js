import { Component } from "react";
import "./register.css"

class Register extends Component{

    state = {
        username: "",
        email: "",
        password: ""
    }
      updateUsername = (event) => {
        this.setState({
             username: event.target.value
             });
      };
    
      updateEmail = (event) => {
        this.setState({
             email: event.target.value
             });
      };
    
      updatePassword = (event) => {
        this.setState({ 
            password: event.target.value
         });
      };

      onSave=()=>{
        console.log(this.state);
      }


    render(){
        return(
<div className="form">
  <div>
      <span>username</span>
     <input 
     type="text" 
     placeholder="Enter Your username"
     onChange={this.updateUsername}
     />
 </div>
 <div>
      <span>email</span>
     <input 
      type="text"
      placeholder="Enter Your email" 
      onChange={this.updateEmail}/>
 </div>
 <div>
      <span>password</span>
     <input 
     type="password"
      placeholder="Enter Your paswword" 
      onChange={this.updatePassword}/>
 </div>
<button className="btn-save" onClick={this.onSave}>Save</button>
</div>
        )
    }
}



export default Register