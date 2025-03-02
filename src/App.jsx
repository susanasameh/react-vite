import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Form } from './components/Form/Form'
import { Products } from './components/products/Products'


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

  return (
    <>

      <Header />
      <Form />
      <Products products={products}/>
    </>
  )
}

export default App
