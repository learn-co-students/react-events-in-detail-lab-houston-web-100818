// Code DelayedButton Component Here
import React from "react";

export default class DelayedButton extends React.Component {
  delayedTime = e => {
    e.persist();
    setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
  };

  render() {
    return (
      <div>
        <button onClick={e => this.delayedTime(e)}>btn</button>
      </div>
    );
  }
}
