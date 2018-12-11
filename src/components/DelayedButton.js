import React from 'react'

export default class DelayedButton extends React.Component {
  constructor(props) {
    super()
  }

  handleClick = (event) => {
    setTimeout(
      () => this.props.onDelayedClick(event), this.props.delay
    )
  }

  render() {
    return (
      <div>

        <button onClick={e => setTimeout( () => this.props.onDelayedClick(e), this.props.delay)}>delay</button>
      </div>
    )
  }
}
