
import './userpage.css'




function Userpage(props) {

const { username, email, password } = props.userData
const onReset = props.onReset
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
        <button className="reset" onClick={onReset}> Reset</button>
      </div>
    )
  }




export default Userpage
