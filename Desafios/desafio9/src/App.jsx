import { Outlet } from "react-router-dom"
import Navbar from '../src/components/Navbar.jsx'
import "./App.css";

function App() {
  return (
    <>
      <h1>Principal</h1>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
