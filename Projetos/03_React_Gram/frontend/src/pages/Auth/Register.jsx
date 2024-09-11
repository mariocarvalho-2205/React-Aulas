import './Auth.css'

// Components
import { Link } from 'react-router-dom';
import Message from '../../components/Message/Message';


// Hooks
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// redux
import { register, reset } from "../../slices/authSlice"

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch()

  const { loading, error } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    // criamos um objeto para atribuir os dados vindo do form
    const user = {
      name,
      email,
      password,
      confirmPassword
    }
    console.log('teste register', user)

    dispatch(register(user))

    // reset form
    // setName('')
    // setEmail('')
    // setPassword('')
    // setConfirmPassword('')
  }
  useEffect(()=> {
    dispatch(reset())
  }, [dispatch])

  return (
    <div id='register'>

      <h2>ReactGram</h2>
      <p>Cadastra-se para ver as fotos dos seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nome' onChange={(e) => setName(e.target.value)} value={name || ''} />
        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email || ''} />
        <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} value={password || ''} />
        <input type="password" placeholder='Confirme a senha' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword || ''} />
        {!loading && <input type="submit" value="Cadastrar" />}
        {loading && <input type="submit" value="Aguarde..." disabled/>}
        {error && <Message msg={error} type='error'/>}
      </form>
      <p>Ja tem conta? <Link to="/login">Clique aqui.</Link></p>
    </div>
  )
}

export default Register