import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

import classes from './Person.css';


class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }
    
    render() {
        console.log('[Person.js] rendering...');

        return (
            <Aux>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Is Authenticated</p> : <p>Please Log In</p>}
                </AuthContext.Consumer>

                <input 
                    key="i1"
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
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


Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);