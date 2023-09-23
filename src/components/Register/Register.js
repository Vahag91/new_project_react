import { useState } from "react";
import { validateEmail, validatePassword } from "../../utils/validator";
import { FaPlus } from "react-icons/fa6"
import './register.css'




function Register(props) {

  const handleRegistration = props.handleRegistration
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
    image: "",
  })
  const [validationErrors, setValidationErrors] = useState({})
  const { username, email, password, image } = userInfo

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    })
  }

  const handleRegister = () => {

    if (!validateEmail(email)) {
      setValidationErrors({
        ...validationErrors,
        email: 'Please enter a valid email.'
      });
    }

    if (!validatePassword(password)) {
      setValidationErrors({
        ...validationErrors,
        password: 'Password must contain letters, numbers and be at least 6 characters long.'
      });
    }

    if (username.trim().length < 3) {
      setValidationErrors({
        ...validationErrors,
        username: 'Username is required.'
      });
    }


    if (Object.keys(validationErrors).length === 0) {
      handleRegistration({ username, email, password })

      setUserInfo({
        username: '',
        email: '',
        password: '',
        image: "",
      })
      setValidationErrors({})
    } else {
      setValidationErrors({ ...validationErrors })
    }
  }

  const onDownload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = (event) => {
      setUserInfo({
        ...userInfo,
        image: event.target.result
      })
    }
    reader.readAsDataURL(file)

  }


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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={onDownload} />
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
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  )
}




export default Register





