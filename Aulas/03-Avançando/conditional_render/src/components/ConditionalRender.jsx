import { useState } from "react";


const ConditionalRender = () => {

    const [x] = useState(true);
    const num = 9
    const [ name, setName ] = useState('Mario')
    return (
        <div>
            <h1>Conditional Render</h1>
            <h3>Isso será exibido</h3>
                {x === true ? <p>"Exibiu"</p>  : <p>"Nao Exibiu"</p>}
                {x && <p>X sendo atravez da consdicional simples</p>}
            <h2>If ternario</h2>
                {num > 10 ? (
                    <p>Num e <strong>maior</strong> que 10</p>
                ) : (
                    <p>Num e <strong>menor</strong> que 10</p>
                )}

            <p>Meu nome é {name}</p>
            <button onClick={(e) => (setName('Sergio'))}>Mudei o nome acima para Sergio</button>


        </div>
    )
}

export default ConditionalRender;