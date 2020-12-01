import React from 'react';

const person = (props) => {
    const style = {
        backgroundColor: 'lightblue',
        border: '2px black solid',
        width: '50%',
        margin: '10px auto',
        padding: '20px'
    }

    return (
        <div style={style}>
            <p>I am {props.name} and {props.age} years old.</p>
            <button onClick={props.click}>Delete Person</button>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;