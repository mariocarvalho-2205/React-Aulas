import React from 'react'
import { useState } from 'react'


const Form = () => {


    const [ nome, setNome ] = useState()
    const [ idade, setIdade ] = useState()

    function handleName (e) {
        console.log(e.target.value)
        setNome(e.target.value)
    }

    function handleIdade (e) {
        setIdade(e.target.value)
    }


  return (
    <div>
        <form >

            <label>
                <span>Nome: </span>
                <input type="text" name='name' placeholder='digite alguma coisa' onChange={handleName}/>
            </label>
            <label>
                <span>Idade: </span>
                <input type="text" name='idade' placeholder='digite alguma coisa' onChange={handleIdade}/>
            </label>
            <button type='submit'>Enviar</button>
        </form>
        <p>Nome: {nome} - Idade: {idade}</p>

    </div>
  )
}

export default Form