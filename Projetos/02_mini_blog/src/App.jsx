import { Outlet } from "react-router-dom";
// components
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer"
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
          <div className="container">
            <Outlet />
          </div>
      <Footer />
    </>
  );
}

export default App;
