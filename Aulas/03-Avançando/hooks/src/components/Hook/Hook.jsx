import { useState } from 'react';

const Hook = () => {
    let numData = 10
    console.log(numData)

    let [number, setNumber] = useState(30)
    let [ num, setNum ] = useState(2)

    return (
        <div>
            <h1>Hook</h1>
            <h4>Recursos do React que tem diversas funções;
                ● Como: guardar e alterar o estado de algum dado na nossa aplicação;
                ● Todos os hooks começam com use, por exemplo: useState;
                ● Podemos criar os nossos hooks, isso é chamado de custom hook;
                ● Os hooks precisam ser importados;
                ● Geralmente são úteis em todas as aplicações, utilizaremos diversos ao 
                longo do curso;
                <hr />
                useState hook
                ● O hook de useState é um dos mais utilizados;
                ● Utilizamos para gerenciar o estado de algum dado, variáveis não 
                funcionam corretamente, o componente não re-renderiza;
                ● Para guardar o dado definimos o nome da variável e para alterar vamos 
                utilizar setNome, onde nome é o nome do nosso dado;
                ● Vamos ver na prática!
            </h4>

            <h4>Valor da Variavel {numData}</h4>
            <button onClick={() => numData = 25}>Muda a variavel</button>
            <h4>Valor do state {number}</h4>
            <button onClick={() => setNumber(number + 1)}>Muda a variavel</button>
            <h4>Valor do state {num}</h4>
            <button onClick={() => setNum(num + num)}>Muda a variavel</button>
        </div>
    )
}

export default Hook