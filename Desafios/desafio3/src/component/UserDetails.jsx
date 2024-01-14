import React from 'react'

const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <>
        <ul>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            {idade >= 18 ? (
              <p style={{color: 'green'}}><b>Apto para tirar a carteira.</b></p>
            ) : (
              <p style={{color: 'red'}}><b>Ainda não tem idade para tirar carteira</b></p>
            )}
            <hr />
        </ul>
    </>
  )
}

export default UserDetails