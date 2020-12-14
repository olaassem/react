import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';


const cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);
    console.log(authContext.authenticated);

    useEffect(() => {
        console.log('[cockpit.js] useEffect');
        //http request
        // setTimeout(() => {
        //     alert('saved data to cloud!');
        // }, 1000);

        toggleBtnRef.current.click();

    }, []);

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    } if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}
                ref={toggleBtnRef}
            >
                Toggle Persons
            </button>
            <button onClick={authContext.login}>Log In</button>
        </div>
    );
};

export default React.memo(cockpit);

