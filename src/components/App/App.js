import { Component } from "react";
import "./app.css"
import Register from "../Register";
import Userpage from "../Userpage";

class App extends Component{

    state = {
        username:"",
        email:"",
        password:"",
        done: true
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
        
      }


      onSave=()=>{
        this.setState({
            done: !this.state.done
        })
        console.log(this.state);
      }

      pageWrapper = ()=>{

      }

    render(){
        const {done}=this.state
        return(
            <div>
                { done ?    <Register
        info={this.state}
        handleChange={this.handleChange}
        onSave={this.onSave}/>:<Userpage info={this.state}/>}
    
        
        </div>
        )
    }
}

export default App