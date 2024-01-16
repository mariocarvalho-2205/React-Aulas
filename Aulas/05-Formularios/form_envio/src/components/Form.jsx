import { useState } from 'react'

const Form = () => {

    const [ nome, setNome ] = useState()
    const [ idade, setIdade ] = useState();
    
    function handleNome (e) {
        setNome(e.target.value)
    }

    function handleIdade (e) {
        setIdade(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        setNome(e.target.value)
        console.log('enviando o form', nome, idade)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome: </span>
          <input type="text" name="name" onChange={handleNome} />
        </label>
        <label>
          <span>idade: </span>
          <input type="text" name="idade" onChange={handleIdade} />
        </label>
        <input type="submit" value="Enviar" />
      </form>

    </div>
  );
}

export default Form