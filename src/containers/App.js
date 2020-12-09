import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'; 


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
  }


  render() {

    let persons = null;
    let btnClasses = [classes.Button]

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div> 
      );

      btnClasses.push(classes.Red)
    };


    const assignedClasses= [];

    if (this.state.persons.length <= 2) {
        assignedClasses.push(classes.red);
    } if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi. This is a React App.</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClasses.join(' ')}
          onClick={this.togglePersonsHandler}
          alt={this.state.showPersons}
        >
            Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;