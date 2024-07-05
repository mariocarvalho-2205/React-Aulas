import {Link } from "react-router-dom"
import { useContext } from "react"
import { SomeContext } from "../hooks/useContesx"

const Home = () => {

    const {contextValue} = useContext(SomeContext)
  return (
    <div>
        <h1>Home</h1>
        <h3>{contextValue}</h3>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>


    </div>
  )
}

export default Home