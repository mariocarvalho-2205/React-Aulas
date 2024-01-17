import { useState, useEffect } from 'react'

const FormSelect = () => {

    const [ cargos, setCargos ] = useState("")

    function handleSelect(e) {
        setCargos(e.target.value)
    }
    function handleSubmit (e) {
        e.preventDefault()
        console.log(cargos)

    }
  return (
    <div>
        <form onClick={handleSubmit}>
            <label>
                <span>Cargos</span>
                <select name="cargos" onChange={handleSelect}>
                    <option value="advogado">Advogado</option>
                    <option value="engenheiro">Engenheiro</option>
                    <option value="medico">Medico</option>
                </select>
            </label>
            <input type="submit" value='enviar' />
        </form>
        <p>{cargos}</p>
    </div>
  )
}

export default FormSelect