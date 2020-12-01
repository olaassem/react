import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons : [
      { name: 'One', age: 1 },
      { name: 'Two', age: 2 },
      { name: 'Three', age: 3 },
    ],
    showPersons: false
  };


  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        { name: newName, age: 1 },
        { name: 'Two', age: 2 },
        { name: 'Three', age: 3000 },
      ]
    })
  };

  nameChangeHandler = (e) => {
    this.setState({
      persons : [
        { name: e.target.value, age: 1 },
        { name: 'Two', age: 2 },
        { name: 'Three', age: 3000 },
      ]
    })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow});
  };

  render() {

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age} 
            />
          })}
        </div> 
      )
    };


    return (
      <div className="App">
        <h1>Hi. This is a React App.</h1>
        <button 
          onClick={this.togglePersonsHandler}>
            Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}
export default App;