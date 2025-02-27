import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Form } from './components/Form/Form'


function App() {

  const message = 'Hello World'

  return (
    <>
      <h1>{console.log(message)}</h1>
      <Header />
      <Form />
    </>
  )
}

export default App
