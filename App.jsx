import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Ourfood from './Components/Ourfood'
import About from './Components/About'
import Signup from './Components/Signup'
import Home from './Components/Home'
import { useState } from 'react'

function App() {
 const [num,setNum] = useState(0)
 const addi = ()=>{
  setNum(num+1)
 }

  return (
    <>
      <BrowserRouter>
      <Header num={num} />
      <Routes>
        <Route path='/' element={<Home addi = {addi}  />} ></Route>
        <Route path='/about' element={<About/>}  />
        <Route path='/ourfood' element={<Ourfood/>}  />
      <Route path='/signup' element={<Signup/>}  />
    
      </Routes>  
      <Footer />  
      </BrowserRouter>
    </>
  )
}

export default App
