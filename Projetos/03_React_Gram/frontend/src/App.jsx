import './App.css'

// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// Hooks
import { useAuth } from './hooks/useAuth'

// pages
import Home from "./pages/Home/Home"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"

// Components
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import EditProfile from './pages/EditProfile/EditProfile'

function App() {

  const { auth, loading } = useAuth()
  // console.log(auth, loading, 'auth e loading no app.jsx')

  if (loading) {
    // console.log(loading, 'dentro do if em app')
    return <p>Carregando...</p>
  }
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={auth ? <Home /> : <Navigate to="/login" />} />
            <Route path="/profile" element={auth ? <EditProfile /> : <Navigate to="/login" />} />
            <Route path="/login" element={!auth ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!auth ? <Register /> : <Navigate to="/" />} />
          </Routes>

        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
