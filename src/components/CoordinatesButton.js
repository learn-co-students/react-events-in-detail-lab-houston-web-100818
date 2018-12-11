import React from 'react'

export default class CoordinateButton extends React.Component {

  constructor(props) {
    super()
  }

  handleClick = (e) => {
    let coords = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coords)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Coordinates Button</button>
      </div>
    )
  }
}
