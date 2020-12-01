import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons : [
      { name: 'One', age: 1 },
      { name: 'Two', age: 2 },
      { name: 'Three', age: 3 },
    ]
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons : [
        { name: 'One Million', age: 1 },
        { name: 'Two', age: 2 },
        { name: 'Three', age: 3000 },
      ]
    })
  }



  return (
    <div className="App">
      <h1>Hi. This is a React App.</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}> I am first</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> I am second</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}> I am second</Person>
    </div>
  );

}

export default app;