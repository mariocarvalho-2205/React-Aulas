import { useState } from 'react'

const Form = () => {

    const [name, setName] = useState()

  return (
    <div>
      <form>
        <label>
          <span>Nome: </span>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      {name}
    </div>
  );
}

export default Form