import React, { Component, createRef } from 'react'

const catchAudioEvent = fn => {
  try {
    const promise = fn()
    if (promise && promise.catch) {
      promise && promise.catch(() => {})
    }
  } catch (e) {
    //e
  }
}

class AutoPlayAudio extends Component {
  audioRef = createRef()

  componentDidMount() {
    this.play()
  }
  componentWillUnmount() {  
    this.pause()
  }
  play = () => catchAudioEvent(() => 
    this.audioRef.current.play()
  )
  pause = () => catchAudioEvent(() => 
    this.audioRef.current.pause()
  )

  render() {
    const { src } = this.props
    return (
      <audio 
        ref={this.audioRef}
        src={src}>
      </audio>
    )
  } 
}

export default AutoPlayAudio
