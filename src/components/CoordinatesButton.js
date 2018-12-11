import React from "react";

export default class CoordinatesButton extends React.Component {
  handleEvent = e => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  };

  render() {
    return (
      <div>
        <button onClick={e => this.handleEvent(e)}>button</button>
      </div>
    );
  }
}
