import { Outlet } from "react-router-dom";
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
    <>
      <AuthProvider value={{ user }}>  {/* Aqui verifica se o usuario está logado  */}
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
