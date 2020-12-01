import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      { name: 'One', age: 1 },
      { name: 'Two', age: 2 },
      { name: 'Three', age: 3 },
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        { name: newName, age: 1 },
        { name: 'Two', age: 2 },
        { name: 'Three', age: 3000 },
      ]
    })
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

  render() {
    return (
      <div className="App">
        <h1>Hi. This is a React App.</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Olos Bolos')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}> 
            I am first
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
          changed={this.nameChangeHandler}> 
            I am second
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}> 
            I am third
        </Person>
      </div>
    );
  }
}

export default App;
