import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Produtos from '../src/pages/Produtos'
import About from '../src/pages/About'
import './App.css'

function App() {

  return (
    <>
    <h1>Principal</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/produtos' element={<Produtos />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
