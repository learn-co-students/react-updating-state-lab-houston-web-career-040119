// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {

  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  bitrateEvent = () => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resolutionEvent = () => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        video: {resolution: '720p'}
      }
    })
  }


  render() {
    return(
      <div className='YouTube-debugger'>
        <button className='bitrate' onClick={this.bitrateEvent}>Bitrate</button>
        <button className='resolution' onClick={this.resolutionEvent}>Resolution</button>
      </div>
    )
  }

}
