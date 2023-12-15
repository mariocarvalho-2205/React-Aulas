import React from 'react'

const UserNameProps = ({name, sobrenome, age, family}) => {
  return (
    <div>
        <h1>UserNameProps</h1>
        <h2>O nome do usuario é: {name}, o sobrenome é {sobrenome} e sua idade é {age}</h2>
        <h3>Vem da familia {family}</h3>

    </div>
  )
}

export default UserNameProps