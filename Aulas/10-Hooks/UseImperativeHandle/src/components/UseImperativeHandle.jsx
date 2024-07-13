import { useRef } from 'react'
import SomeComponet from './SomeComponet'

const UseImperativeHandle = () => {
    const inputRef = useRef()

  return (
    <div>
        
        <h3>Use Imperative Handle Componente Pai</h3>

        <SomeComponet ref={inputRef} />
        <button onClick={() => inputRef.current.validate()}>Validar no Comp Filho</button>


    </div>
  )
}

export default UseImperativeHandle