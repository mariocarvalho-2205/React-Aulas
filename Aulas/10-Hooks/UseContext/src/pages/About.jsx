import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { SomeContext } from "../hooks/useContesx"

const About = () => {
    const {contextValue} = useContext(SomeContext)
  return (
    <div>
        <h1>About</h1>
        <h3>{contextValue}</h3>
        <Link to="/">Home</Link>
    </div>
  )
}

export default About