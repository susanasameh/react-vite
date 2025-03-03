import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Form } from './components/Form/Form'
import { Products } from './components/products/Products'
import { Button } from './components/Button'


function App() {
  const products = [
    {
      title : "Product 1",
      price: 100,
      description: "This is product 1",
      rate : 5
    },
    {
      title : "Product 2",
      price: 200,
      description: "This is product 2",
      rate : 4
    },
    {
      title : "Product 3",
      price: 300,
      description: "This is product 3",
      rate : 3
    }
  ]
//annonymous function
  function sayHello() {
    alert("Hello Susana 🥰");  
    smileFunction();
  }

  //arrow function more than one line
  const smileFunction = () => {
    alert("smile Susana 🥰");
    console.log("you deserve 🥰");  
    smileFunction2();
  }

  //arrow function one line
  const smileFunction2 = () => console.log("🎁");

  const helloFunction = (name) => {
    name =prompt("Please enter your name");
    alert(`Hello ${name} 🥰`);
  }

  return (
    <>

      {/* <Header />
      <Form />
      <Products products={products}/> */}
      {/* <button className='bg-slate-900 text-white px-4 py-2 rounded-lg' type="button" onClick={sayHello}>Click me</button>
      <button className='bg-amber-600 text-white px-4 py-2 rounded-lg' type="button" onClick={() => alert("Hello Susana 🥰")}>arrow function</button>
      <button className='bg-amber-600 text-white px-4 py-2 rounded-lg' type="button" onClick={(e) => console.log(e.target)}>Event Target</button>
      <button style={{backgroundColor : "red"}} type="button" onClick={() => helloFunction()}>Hello Function</button> */}
      {/* <Button
        text="Click Me"
        onClick={sayHello} />
      
      <Button
        text="Click Me 2"
        onClick={helloFunction} /> */}
      
      {/* using span instead of text props*/}
      <Button
        onClick={() => alert("Hello Susana 🥰")} >
        <span>Hello</span>
        </Button>
   
    </>
  )
}

export default App
