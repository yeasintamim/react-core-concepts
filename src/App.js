import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    {name:'Photoshop',price:'$90'},
    {name:'Illustrator',price:'$9'},
    {name:'PDF Reader',price:'$80'}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
       <p>i am a React Person</p>

      <Product name = {products[0].name} price = {products[0].price}></Product>
        
      </header>
    </div>
  );
}



function Product(props){

  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  return (
    <div style={ productStyle }>
        <h3>Name: {props.name}</h3>
        <h5>{props.price}</h5>
        <button>Buy now</button>

    </div>
  )
}




export default App;





