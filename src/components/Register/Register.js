import { Component } from "react";
import "./register.css"
import { FaPlus } from "react-icons/fa6"

class Register extends Component {







    render() {
        const { username, email, password, image } = this.props.info;

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
                        onChange={this.props.onDownload} />
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


