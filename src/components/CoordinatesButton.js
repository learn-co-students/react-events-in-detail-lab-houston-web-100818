// Code CoordinatesButton Component Here
import React, { Component } from "react";

export default class CoordinatesButton extends Component {
    
    getCoords = (e) => {
        let xCoord = e.clientX
        let yCoord = e.clientY
        let coordArray = [xCoord, yCoord]
        this.props.onReceiveCoordinates(coordArray) 
    }

    render() {
        return(
            <button onClick = {this.getCoords}></button>
            
        )
    }
}
