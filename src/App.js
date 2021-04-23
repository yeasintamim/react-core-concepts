import React, { useState } from 'react';
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

       <Counter></Counter>

      <Product name = {products[0].name} price = {products[0].price}></Product>
      <Product name = {products[1].name} price = {products[1].price}></Product>
      <Product name = {products[2].name} price = {products[2].price}></Product>

      </header>
    </div>
  );
}



function Counter(){
  const [count,setCount] = useState(10);
  
 
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() =>  setCount ( count+1) }>Increase</button>
      <button onClick={() =>   setCount(count - 1)}>Decrease</button>
    </div>
  )

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





