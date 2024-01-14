import { useState } from 'react'
import List from './List'

const Dinamico = () => {
    const [ list ] = useState([
        {
            id: 1,
            nome: 'mario',
            idade: 48,
        },
        {
            id: 2,
            nome: 'joao',
            idade: 19,
        },
        {
            id: 3,
            nome: 'Ady',
            idade: 18,
        },
        {
            id: 4,
            nome: 'Fernando',
            idade: 75,
        },
    ])

  return (
    <div>
        <h1>Lista Dinamica</h1>
        
        {list.map((item) => (
            <List key={item.id} name={item.nome} age={item.idade}/>
        ))}

    </div>
  )
}

export default Dinamico