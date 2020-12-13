import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

  // static getDerivedStateFromComponent(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
     return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(){
    console.log('[Persons.js] componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map( ( person, index ) => {       
      return (
        <Person
          click={() => this.props.clicked(index)} 
          name={person.name} 
          age={person.age} 
          key={person.id}
          changed={(e) => this.props.changed(e, person.id)}
        />
      );
    });
  }
}

export default Persons;