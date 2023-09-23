import { Component } from "react";
import "./counter.css"


class Counter extends Component {


state = {
    count: 0
}

onPlus =()=>{
    this.setState({
        count: this.state.count +1
    })
}

onMinus =()=>{
    this.setState({
        count: this.state.count -1
    })
}

onChange = (event)=>{
    const value = event.target.value
    this.setState({
        count: value
    })
}
  render (){


  
 const {count} = this.state
    return(
       
        <div className="counter">
            <button className="minus" onClick={this.onMinus}> minus</button>
             <input type="number" placeholder="" value={count} onChange={this.onChange}/>
          <button className="plus" onClick={this.onPlus}>plus</button>
        </div>
    )
  }
}

export default Counter