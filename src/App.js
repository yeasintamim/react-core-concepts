import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
       <p>i am a React Person</p>
       <Person name="Munna" job ="football"></Person>
       <Person name="Masum" job ="dorsok"></Person>
      </header>
    </div>
  );
}

function Person(props){
  return (
    <div style ={{border:'2px solid gold',width:'400px'}}>
        <h1>My Name: {props.name}</h1>
        <h3>My Profession: {props.job}</h3>
    </div>
  )

}


export default App;





