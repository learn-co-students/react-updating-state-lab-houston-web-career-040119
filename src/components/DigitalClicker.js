// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  clickHandler = () => {
    let newTimes = this.state.timesClicked
    newTimes++
    this.setState({
      timesClicked: newTimes
    })
  };

  render() {
    return (
      <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
    )
  }

}

export default DigitalClicker;
