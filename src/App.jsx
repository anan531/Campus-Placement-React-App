import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddReg from './components/AddReg'
import SearchReg from './components/SearchReg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddReg/>
      <SearchReg/>
    </>
  )
}

export default App
