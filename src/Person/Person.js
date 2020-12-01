import React from 'react';


const person = (props) => {
    return (
        <div>
            <p>I am {props.name} and {props.age} years old.</p>
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;