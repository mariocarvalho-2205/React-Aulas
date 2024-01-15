import './Form.css'
const Form = () => {
  return (
    <div>
        <form>
            <label>
                <span>Nome:</span>
                <input type="text" name='name' placeholder='digite alguma coisa'/>
            </label>
            <input type="submit" value='Enviar'/>
        </form>

    </div>
  )
}

export default Form