import { Component } from "react";
import "./register.css"

class Register extends Component{

  
 


    render(){
        const { username, email, password } = this.props.info;
        return(
            
<div className="form">
  <div>
      <span>username</span>
     <input 
     name="username"
     type="text" 
     placeholder="Enter Your username"
     onChange={this.props.handleChange}
     value={username}
     />
 </div>
 <div>
      <span>email</span>
     <input 
     name="email"
      type="text"
      placeholder="Enter Your email" 
      onChange={this.props.handleChange}
      value={email}/>
 </div>
 <div>
      <span>password</span>
     <input 
     name="password"
     type="password"
      placeholder="Enter Your paswword"
      value={password} 
      onChange={this.props.handleChange}
     />
 </div>
<button className="btn-save" onClick={this.props.onSave}>Save</button>
</div>
        )
    }
}



export default Register