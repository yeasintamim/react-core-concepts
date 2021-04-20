import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>i am a React Person</p>
       <Person nayok= "Rubel" nayika ="Moushumi"></Person>
       <Person nayok = "Jasim" nayika ="Shabana"></Person>
       <Person nayok = "y1" nayika ="x1"></Person>
       <Person nayok = "y2" nayika ="x2"></Person>
       <Person nayok = "y3" nayika ="x3"></Person>
      </header>
    </div>
  );
}

function Person(props){

  const personStyle={

     border:'2px solid red',
     margin:'10px'
  }
  return <div style={personStyle}>
  <h1>Name  : {props.nayok}</h1>
  <h3>Hero of {props.nayika}</h3>
  </div>
}

export default App;
