// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return (
            <button onClick={this.handleClick}>Delay</button>
        )
    }

    handleClick = (e) => {
        e.persist()
        setTimeout(() => {
            this.props.onDelayedClick(e);}, this.props.delay);
    }
    
}