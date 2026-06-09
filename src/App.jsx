// import { useState } from 'react'

import './App.css'
import Contador from './components/Contador.jsx'
import Contador2 from './components/Contador2.jsx'
import Contador3 from './components/Contador3.jsx'

// Componente raíz

function App() {
  // const [count, setCount] = useState(0)

  



  return (
    <>
    {/* Componentes hijos/ Instancias de componentes >>>> Props */}
    <Contador valorDefault = {15} min = {2} max = {20} step = {2}/>
    <Contador2 valorDefault = {15} min = {2} max = {20} step = {2}/>
    <Contador3 valorDefault = {15} min = {2} max = {20} step = {2}/>
    </>
  
  )
}



export default App
