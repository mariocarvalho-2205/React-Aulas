import { useState } from "react";


const ConditionalRender = () => {

    const [x] = useState(true);
    const num = 9

    return (
        <div>
            <h1>Conditional Render</h1>
            <h3>Isso será exibido</h3>
            {x === true ? <p>"Exibiu"</p>  : <p>"Nao Exibiu"</p>}
            {x && <p>X sendo atravez da consdicional simples</p>}
            {num > 10 ? (
                <p>Num e <strong>maior</strong> que 10</p>
            ) : (
                <p>Num e <strong>menor</strong> que 10</p>
            )}
        </div>
    )
}

export default ConditionalRender;