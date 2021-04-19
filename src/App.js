import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>i am a React Person</p>
       <Person></Person>
       <Person></Person>
       <Person></Person>
      </header>
    </div>
  );
}

function Person(){

  const personStyle={

     border:'2px solid red',
     margin:'10px'
  }
  return <div style={personStyle}>
  <h1>Name: Sakib</h1>
  <h3>Hero of the Year</h3>
  </div>
}

export default App;
