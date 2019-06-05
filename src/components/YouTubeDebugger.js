// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

class YouTubeDebugger extends Component{
    constructor(){
        super(),
        this.state={
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

    event = () =>{
        this.setState({
            ...this.state,
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    other = () =>{
        this.setState({
            settings:{
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }

            }
        })
    }
    render(){
        return(
            <div className='Youtube'>
        <button className= "bitrate" onClick={this.event}>bitrate</button> 
        <button className="resolution" onClick={this.other}>resolution</button>
        </div>

        )}
}
export default YouTubeDebugger