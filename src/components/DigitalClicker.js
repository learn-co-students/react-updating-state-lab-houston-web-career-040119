// Code DigitalClicker Component Here
import React, {Component} from 'react';

class DigitalClicker extends Component{
    constructor(){
        super(),
        this.state={
            timesClicked: 0
        }
    }

    event = () => {
        
        let newClick = this.state.timesClicked + 1
        this.setState({
            timesClicked: newClick
        })
    }
    render(){
        return <button onClick={this.event} >{this.state.timesClicked}</button>
    }
}
export default DigitalClicker