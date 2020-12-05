import React from 'react';
import Radium from 'radium';


const person = (props) => {
    const style = {
        border: '2px black solid',
        width: '50%',
        margin: '10px auto',
        padding: '20px'
    }

    return (
        <div style={style}>
            <input type="text" onChange={props.changed} value={props.name}/>
            <p>I am {props.name} and {props.age} years old.</p>
            <button onClick={props.click}>Delete Person</button>
            <p>{props.children}</p>
        </div>
    )
};

export default Radium(person);