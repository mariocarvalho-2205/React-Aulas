import styles from "./Register.module.css";
import { useState, useEffect } from "react";

// import hooke authentication
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {

  const [ displayName, setDisplayName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ confirmPassword, setConfirmPassword ] = useState("")
  const [ error, setError ] = useState("")

  // importando os dados do hook de autenticação
  const { createUser, error : authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password,
      confirmPassword
    }

    if (password !== confirmPassword ) { 
      setError("As senhas precisam ser iguais!")
      return
    }

    // pegar a resposta 
    const res = await createUser(user)

    console.log(user, "Register")
    setDisplayName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")  
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [ authError ])
 
  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compatilhe sua histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome: </span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>Email: </span>
          <input
            type="email"
            name="email"
            required
            placeholder="email do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmação de senha: </span>
          <input
            type="password"
            name="consifirmPassword"
            required
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn">Cadastrar</button>}
        {loading && <button className="btn" disabled>Aguarde...</button>}
        
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
