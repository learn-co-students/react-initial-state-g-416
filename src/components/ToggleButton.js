// Component Code Goes Here

import React, { Component } from 'react'

class ToggleButton extends Component {
    constructor() {
        super();
        this.state = {
            isEnabled: false
        }
    }

    switch = () => {
        this.setState({
            isEnabled: !this.state.isEnabled
        })
    }


    render() {
        return (
            <div>
                <button className="toggle-button" onClick={ this.switch }>
                    You toggled me {this.state.isEnabled ? "ON!" : "OFF!"}
                </button>

                <p> {this.state.isEnabled ? "ON!" : "OFF!"} </p>
                
            </div>
        )
    }
}


export default ToggleButton;


