import React from 'react';


const userInput = (props) => {

    const style = {
        border: '5px solid green'
    };


    return (
        <div className="Input">
            <input 
                type="text" 
                onChange={props.changed} 
                value={props.currentName}
                style={style}
            />
        </div>
    )
};

export default userInput;