// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{
    constructor(props){
        super()
        
    }
    
    render(){
        
        return(
            <button onClick={(e) => this.props.onReceiveCoordinates([e.clientX, e.clientY]) }>Coordinates</button>

        )
    }
}