import './Form.css'

const Form = () => {
  return (
    <div>
        <form>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name"/>
            </div>
            <button>Enviar</button>
            <input type="submit" value='enviar' />
        </form>
    </div>
  )
}

export default Form