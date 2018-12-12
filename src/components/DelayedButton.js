// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  timeDelay = (e) => {
    e.persist()
    return setTimeout(()=>{
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }

  render(){
    return (
        <button onClick={this.timeDelay}></button>
    )
  }

}
