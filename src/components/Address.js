// Component Code Goes Here

import React, { Component } from 'react'

export default class Address extends Component {
    debugger;
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         fullAddress: `${props.street}, ${props.city}`
    //     }
    // }



    render() {
        return (
            <div className="address">
                {/* {this.state.fullAddress} <br></br> */}
                STREET: {this.props.street} <br></br>
                CITY: {this.props.city} 
            </div>
        )
    }
}





