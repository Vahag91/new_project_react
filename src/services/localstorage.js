import { Component } from "react";


class LocalStorage extends Component {


    SaveItem = (key, value) => {
        return localStorage.setItem(key, JSON.stringify(value))
    }

    LoadItem = (key) => {
        const data = localStorage.getItem(key)
        return JSON.parse(data)
    }

    clearItem = (key) => {
        localStorage.removeItem(key)
    }

    render() {
        return (
        <div></div>
)
    }
}


export default LocalStorage