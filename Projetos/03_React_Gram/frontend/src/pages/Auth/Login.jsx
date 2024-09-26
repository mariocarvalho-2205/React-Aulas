import "./Auth.css"

// Components
import { Link } from 'react-router-dom';
import Message from '../../components/Message/Message'

// Hooks
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

// redux

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('teste login')
  }

  return (
    <div id="login">
      <h2>ReactGram</h2>
      <p>Faça o login para ver as fotos dos seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Senha' />
        <input type="submit" value="Entrar" />
      </form>
      <p>Ja tem cadastro? <Link to="/register">Clique aqui.</Link></p>
    </div>
  )
}

export default Login