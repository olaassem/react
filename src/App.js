import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons : [
      { id:'154sd', name: 'One', age: 1 },
      { id:'1gree', name: 'Two', age: 2 },
      { id:'19iuj', name: 'Three', age: 3 },
    ],
    showPersons: false
  }


  nameChangedHandler = (e, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person =  {
      ...this.state.persons[personIndex]
    }

    person.name= e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow});
  }


  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
    console.log('clicked!!!')
  }


  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(e) => this.nameChangedHandler(e, person.id)}
            />
          })}
        </div> 
      )

      style.backgroundColor = 'red';
    };


    return (
      <div className="App">
        <h1>Hi. This is a React App.</h1>
        <button
          style={style} 
          onClick={this.togglePersonsHandler}
        >
            Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}
export default App;