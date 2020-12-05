import React from 'react';

import classes from './Person.css';


const person = (props) => {
    return (
        <div className={classes.Person}>
            <input 
                type="text" 
                onChange={props.changed} 
                value={props.name}
            />
            <p>I am {props.name} and {props.age} years old.</p>
            <button onClick={props.click}>Delete Person</button>
            <p>{props.children}</p>
        </div>
    )
};

export default person;