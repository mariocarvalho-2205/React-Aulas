import { Link } from'react-router-dom'
import React from 'react'

const Home = () => {
  return (
    <div>
        <h2>Home</h2>
        <Link to="/about">About</Link>
    </div>
  )
}

export default Home