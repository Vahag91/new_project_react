import { Component } from "react";
import "./register.css"

class Register extends Component {
  
    state = {
        image: ""
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
        const { username, email, password } = this.props.info;
        const { image } = this.state
        const style = {
            visibility: image ? "visible" : "hidden"
        }
        return (

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
                        value={email} />
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
                <div className="file">
                    <button>
                        <label
                            className="inputLabel"
                            htmlFor="inputFile"> Upload</label>
                    </button>
                    <img src={this.state.image} alt="preview" style={style} />
                    <input
                        className="inputFile"
                        type="file"
                        id="inputFile"
                        name="inputFile"
                        onChange={this.onDownload} />
                </div>
                <button
                    className="btn-save"
                    onClick={this.props.onSave}
                >Save
                </button>
            </div>
        )
    }
}



export default Register


