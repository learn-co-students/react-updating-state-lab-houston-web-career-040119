// Code DigitalClicker Component Here

import React, {Component} from 'react'

class DigitalClicker extends Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    click = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    render() {
        return(
            <div>
                <label>times: {this.state.timesClicked}</label>
                <button onClick={this.click}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker