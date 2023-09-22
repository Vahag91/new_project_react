import { Component } from "react";
import { validateEmail, validatePassword } from "../../utils/validator";
import { FaPlus } from "react-icons/fa6"
import './register.css'


export default class RergisterPage extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    image: "",
    validationErrors: {}
  }



  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleRegister = () => {
    const { username, email, password } = this.state;
    const validationErrors = {}

    if (!validateEmail(email)) {
      validationErrors.email = 'Please enter a valid email.'
    }
    if (!validatePassword(password)) {
      validationErrors.password = 'Password must contain letters, numbers and bet at least 6 characters long.'
      console.log(validationErrors.password);
    }
    if (username.trim().length < 3) {
      validationErrors.username = 'Username is required.'
    }
    if (Object.keys(validationErrors).length === 0) {
      this.props.handleRegistration({ username, email, password })

      this.setState({
        username: '',
        email: '',
        password: '',
        image: "",
        validationErrors: {}
      })
    } else {
      this.setState({ validationErrors })
    }
  }

  onDownload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = (e) => {
      this.setState({
        image: e.target.result
      })

    }
    reader.readAsDataURL(file)

  }
  render() {
    const { username, email, password, image, validationErrors } = this.state;
    const style = {
      visibility: image ? "visible" : "hidden"
    }
    return (
      <div className="register-page-wrapper">
        <h1>Register page</h1>
        <div className="register-form">
          <div className="register-input">
            <label htmlFor="username">Username:</label>

            <input
              type="text"
              name="username"
              placeholder="Username"
              id="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div className="register-input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="register-input">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div className="file">
            <button>
              <label
                className="inputLabel"
                htmlFor="inputFile">
                <span className="icon"><FaPlus /></span>
                <span className="text">Upload</span>
              </label>
            </button>
            <img src={image} alt="preview" style={style} />
            <input
              className="inputFile"
              type="file"
              id="inputFile"
              name="inputFile"
              onChange={this.onDownload} />
          </div>
          {
            Object.keys(validationErrors).length ? (
              <div className="error-alert">
                <span>{validationErrors.email}</span>
                <span>{validationErrors.password}</span>
                <span>{validationErrors.username}</span>
              </div>
            ) : null
          }
          <button
            className="register-btn"
            onClick={this.handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    )
  }
}