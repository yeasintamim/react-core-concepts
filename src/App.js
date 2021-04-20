import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar','Jafor','Alomgir','Salman']
  return (
    <div className="App">
      <header className="App-header">
       <p>i am a React Person</p>
       <Person nayok= {nayoks[0]} nayika ="Moushumi"></Person>
       <Person nayok = {nayoks[1]} nayika ="Shabana"></Person>
       <Person nayok = {nayoks[2]} nayika ="x1"></Person>
       <Person nayok = {nayoks[3]} nayika ="x2"></Person>
       
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
