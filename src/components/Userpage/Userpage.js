import { Component } from "react";
import './userpage.css'
export default class UserPage extends Component {
  render() {
    const { username, email, password } = this.props.userData;
    return (
      <div className="user-page-wrapper">
        <h1>Welcome, <span>{ username }</span>!</h1>
        <h4>Personal info:</h4>
        <div>
          Email: <span>{ email }</span>
        </div>
        <div>
          Password: <span>{ password }</span>
        </div>
        <button className="reset" onClick={this.props.onReset}> Reset</button>
      </div>
    )
  }
}