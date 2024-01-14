import React from 'react'

const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissao}</li>
            {idade > 18 && <li>Apto para dirigir </li>}
            <hr />
            
        </ul>
    </>
  )
}

export default UserDetails