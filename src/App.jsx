import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddReg from './components/AddReg'
import SearchReg from './components/SearchReg'
import DelReg from './components/DelReg'
import ViewReg from './components/ViewReg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>

<Route path="/" element={<AddReg/>}/>
<Route path="/delete" element={<DelReg/>}/>
<Route path="/search" element={<SearchReg/>}/>
<Route path="/view" element={<ViewReg/>}/>

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
