import { useState } from 'react'

const FormTextarea = () => {

    const [ text, setText ] = useState()

    function handleText (e) {
        setText(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        console.log(text)
        setText('')
    }

  return (
    <div>
        <form onClick={handleSubmit}>
            <label>
                <span>Texto:</span>
                <textarea name="text" cols="60" rows="10" onChange={handleText} value={text}></textarea>
            </label>
            <input type="submit" value='enviar' />
        </form>
    </div>
  )
}

export default FormTextarea