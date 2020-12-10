import React, { Component } from 'react';

import classes from './Person.css';


class Person extends Component {
    render() {
    
        console.log('[Person.js] rendering...');

        return (
            <div className={classes.Person}>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
                <p>I am {this.props.name} and {this.props.age} years old.</p>
                <button onClick={this.props.click}>Delete Person</button>
                <p>{this.props.children}</p>
            </div>
        )
    }
};

export default Person;