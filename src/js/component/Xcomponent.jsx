import React from 'react';
import PropTypes from 'prop-types';
export class Xcomponent extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            theValue : 'Bye'
            
        };
    }
        
    render(){
        return (
            <div>
                <span>{this.props.city} {this.state.theValue}</span>
                <button onClick={ () => this.setState({theValue: "hello"}) } >
                    Change to Hello
                </button>
                <button onClick={ () => this.setState({theValue: "Soccer"}) } >
                Change to Soccer
                </button>
            </div>
        );
    }
}

Xcomponent.propTypes = {
    city : PropTypes.string
};