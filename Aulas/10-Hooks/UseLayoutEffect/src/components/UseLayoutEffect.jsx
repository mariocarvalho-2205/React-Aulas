import { useLayoutEffect, useState, useEffect } from 'react'

const UseLayoutEffect = () => {
    const [ name, setName ] = useState('Algum Nome')

    useEffect(() => {
        console.log('2')
        setName('Outro NOme')
    }, [])

    useLayoutEffect(() => {  // é usado quando precisamos que alguma coisa seja exibido em primeiro lugar na renderização antes de qualquer outra coisa
        console.log('1')
        setName('Mudou de nome')
    }, [])

    console.log(name)
  return (
    <div>
        
        <h1>UseLayoutEffec</h1>
        <h3>Nome: {name}</h3>


    </div>
  )
}

export default UseLayoutEffect