import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from "../src/pages/Home";
import Produto from "../src/pages/Produto";
import Produtos from "../src/pages/Produtos";
import About from "../src/pages/About";
import Info from "../src/pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
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
        path: "/produtos",
        element: <Produtos />
      },
      {
        path: "/produtos/:id",
        element: <Produto />
      },
      {
        path: "/produtos/:id/info",
        element: <Info />
      },
      {
        path: "/search",
        element: <Search />
      },
    ]
  },
  

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
