import { useState } from 'react'
import Saludo from './Saludo';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Bienvenido a React con Vite</h1>
      <Saludo nombre="Mia" />
      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
    </div>
  )
}

export default App
