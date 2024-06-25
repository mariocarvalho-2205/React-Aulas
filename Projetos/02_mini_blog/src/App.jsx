import { Outlet, Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import "./App.css";

// import AuthProvide
import { AuthProvider } from "./context/AuthContext.jsx";
// import o onAuthStateChanged
import { onAuthStateChanged } from "firebase/auth";

// import hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

// pages
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Log from "./pages/Login/Log.jsx";
import Register from "./pages/Register/Register.jsx";
import CreatePost from "./pages/CreatePost/CreatePost.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Search from "./pages/Search/Search.jsx";
import Post from "./pages/Post/Post.jsx";
import EditPost from "./pages/EditPost/EditPost.jsx";

function App() {

  const [ user, setUser ] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  // verifica se esta autenticado
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [ auth ])

  // verifica se esta carregando o usuario
  if (loadingUser) {
    return <p>Carregando</p>
  }

  return (
    <BrowserRouter>
      <AuthProvider value={{ user }}>
        {" "}
        {/* Aqui verifica se o usuario está logado  */}
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route path="/posts/:id" element={<Post />} />
            <Route
              path="/login"
              element={!user ? <Log /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/" />}
            />
            <Route
              path="/posts/create"
              element={user ? <CreatePost /> : <Navigate to="/login" />}
            />
            <Route
              path="/posts/edit/:id"
              element={user ? <EditPost /> : <Navigate to="/login" />}
            />
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/login" />}
            />
            {/* <Outlet /> */}
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
