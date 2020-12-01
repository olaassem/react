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
  }


  nameChangeHandler = (e) => {
    this.setState({
      persons : [
        { name: e.target.value, age: 1 },
        { name: 'Two', age: 2 },
        { name: 'Three', age: 3000 },
      ]
    })
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

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
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