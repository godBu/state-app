import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
      numbers: [1, 2, 3, 4, 5, 6, 7],
      currentNumber: ""
  }

  saveNumberHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      currentNumber: event.target.value
    })  
  }

  addNumberHandler = () => {
    this.setState({
      numbers: [...this.state.numbers, this.state.currentNumber],
      currentNumber: ""
    })
  }

  render() {
  const eachNumber = this.state.numbers.map((number, index) => {
  return <li key={index}>{number}</li>
  })

  return (
    <div className="App">
      <ul>
      {eachNumber}
      </ul>
      <input value={this.state.currentNumber} onChange={this.saveNumberHandler} />
      <button onClick={this.addNumberHandler}>Click to change numbers</button>
    </div>

  );
  }
}

export default App;

//import logo from './logo.svg';
//import Person from './Components/Person';
/*
*Class components are stateful components
*Functional components are stateless compenents
*/
//   persons: [
//     { /*id:1,*/ name: "Bubu", age: 28 },                
//     { /*id:2,*/ name: "Jack", age: 8 },
//     { /*id:3,*/ name: "Horseman", age: 65 }
//    ] 
//const individuals = this.state.persons.map((person, index) => {
//return <Person /*id={person.id}*/ name={person.name} age={person.age} key={index}/>

/*individuals*/
/*<Person name="Ebuka" age={28}/>
<Person name={this.state.persons.name} age={this.state.persons.age} />*/

/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/