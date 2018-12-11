import React from 'react'

export default class CoordinatesButton extends React.Component {

    render() {
        return (
            <button onClick={(e) => {
                const coords = [e.clientX, e.clientY]
                this.props.onReceiveCoordinates(coords)
            }}>Coordinates</button>
        )
    }
}