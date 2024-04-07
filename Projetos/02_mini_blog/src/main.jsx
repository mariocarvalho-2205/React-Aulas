import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import router dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// pages
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Log from './pages/Login/Log.jsx'
import Register from './pages/Register/Register.jsx'



// config routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/login",
        element: <Log />
      },
      {
        path: "register",
        element: <Register />
      }
      
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
