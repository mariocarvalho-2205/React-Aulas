import {forwardRef, useRef, useImperativeHandle } from 'react'

const SomeComponet = forwardRef(( props, ref) => {
    const localInputRef = useRef()
    useImperativeHandle(ref, () => {
        return {
            validate: () =>{
                if (localInputRef.current.value.length === 3) {
                    alert('Texto inserido com sucesso')
                } else {
                    alert('Texto precisa ter 3 caracteres')
                }
            }
        }
    })

  return (
    <div>

        <h2>Some Component Componente Filho</h2>
        <p>Insira 3 caracteres</p>
        <input type="text" ref={localInputRef}/>
    </div>
  )
})

export default SomeComponet