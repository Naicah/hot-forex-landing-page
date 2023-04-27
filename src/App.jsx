import { useState } from 'react'
import Header from './components/Header'
import Tool from './components/Tool'
import Form from './components/Form'
import Feature from './components/Features'
import Info from './components/Info'
import './App.css'
import './scss/main.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Tool/>
      <Form/>
      <Feature/>
      <Info/>
    </>
  )
}

export default App
