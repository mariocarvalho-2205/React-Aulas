import { useState } from 'react'

const Form = ({ user }) => {

    const [ nome, setNome ] = useState(user ? user.name : '') // dessa forma podemos receber um valor e adicionar ao form
    const [ idade, setIdade ] = useState(user ? user.idade : '')

    function handleName (e) {
        setNome(e.target.value)
    }

    function handleIdade (e) {
        setIdade(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        console.log(`Nome: ${nome}, Idade: ${idade}`)

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome: </span>
                <input type="text" name='name' onChange={handleName} value={nome}/>
            </label>
            <label>
                <span>Idade: </span>
                <input type="text" name='idade' onChange={handleIdade} value={idade}/>
            </label>
            <input type="submit" value='Enviar' />
            <p>Nome: {nome}, Idade: {idade}</p>



        </form>

    </div>
  )
}

export default Form