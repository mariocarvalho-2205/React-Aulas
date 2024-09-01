import './Auth.css'

// Components
import  { Link } from 'react-router-dom';

// Hooks
import { useState, useEffect } from 'react';

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('teste register')
  }

  return (
    <div>
      
      <h2>ReactGram</h2>
      <p>Cadastra-se para ver as fotos dos seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nome'/>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Senha'/>
        <input type="password" placeholder='Confirme a senha'/>
        <input type="submit" value="Cadastrar"/>
      </form>
      <p>Ja tem conta? <Link to="/login">Clique aqui.</Link></p>
      </div>
  )
}

export default Register