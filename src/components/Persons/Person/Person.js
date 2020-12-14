import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

import classes from './Person.css';


class Person extends Component {
    render() {
    
        console.log('[Person.js] rendering...');

        return (
            <Aux>
                <input 
                    key="i1"
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
                <p key="i2">I am {this.props.name} and {this.props.age} years old.</p>
                <button key="i3" onClick={this.props.click}>Delete Person</button>
                <p key="i4">{this.props.children}</p>
            </Aux>
        )
    }
};

export default withClass(Person, classes.Person);