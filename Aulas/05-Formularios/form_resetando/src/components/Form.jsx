import { useState } from 'react'

function Form ({ user }) {

    const [ nome, setNome ] = useState(user ? user.nome : '')
    const [ idade, setIdade ] = useState(user ? user.idade : '')
    const [ sexo, setSexo ] = useState(user ? user.sexo : '')


    function handleNome (e) {
        setNome(e.target.value)
    }
    function handleIdade (e) {
        setIdade(e.target.value)
    }
    function handleSexo (e) {
        setSexo(e.target.value)
    }

    function handleSubmitForm (e) {
        e.preventDefault()
        console.log(`Nome: ${nome}, Idade: ${idade}, Sexo: ${sexo}`)
        setNome('')
        setIdade('')
        setSexo('')
    }

    return (
        <>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor="nome">Nome: </label>
                <input type="text" name='nome' value={nome} onChange={handleNome}/>
                <label htmlFor="idade">Idade: </label>
                <input type="text" name='idade' value={idade} onChange={handleIdade}/>
                <label htmlFor="sexo">Sexo: </label>
                <input type="text" name='sexo' value={sexo} onChange={handleSexo}/>

                <input type="submit" value='enviar'/>
            </form>
        </>
    )
}

export default Form