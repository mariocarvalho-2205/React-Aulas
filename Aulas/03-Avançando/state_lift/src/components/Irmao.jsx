import React from 'react'

const Irmao = ({handleMsg}) => {
    const mensages = ['oi', 'ola', 'agora']


  return (
    <div>
        <h1>Irmao</h1>
        <button onClick={() => handleMsg(mensages[0])}>1</button>
        <button onClick={() => handleMsg(mensages[1])}>2</button>
        <button onClick={() => handleMsg(mensages[2])}>3</button>
    </div>
  )
}

export default Irmao