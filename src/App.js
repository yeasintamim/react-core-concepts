import React from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {

  var person = {
    name : "yeasin motu",
    job : 'Singer'
  }

  var person1 = {
    name : " moti",
    job : 'Dancer'
  }
  var style = {
    color:'red',
    backgroundColor:'yellow'
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>

        <h1 style = {style}>My heading:{person.name +" "+person.job}</h1>
        <h2 style = { {backgroundColor:'cyan',color:'yellow'} } > heading1 :{person1.name +" "+person1.job} </h2>
        <p >My first react paragraph</p>
        
      </header>
    </div>
  );
}

function Person(){
  return <h1>Name:Sakib</h1>
}

export default App;
