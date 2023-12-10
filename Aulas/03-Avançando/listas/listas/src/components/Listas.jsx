import { useState } from "react";

const Listas = () => {

    let [ list ] = useState([ 'Mario', 'Ady', 'Gabriel', 'Joao'])

    let [ Users ] = useState([
        { id: '1', name: 'mario', age: 48 },
        { id: '2', name: 'joao', age: 60 },
        { id: '3', name: 'ady', age: 35 },
    ])
    return (
        <div className="List">
            <h1>My list</h1>
            <h3>Renderização de lista
                ● Uma outra ação bem comum é renderizar listas de dados no template;
                ● Fazemos isso com os dados com tipo de array;
                ● Utilizando o método map para nos auxiliar;
                ● Além dos dados podemos inserir JSX em cada iteração;
                ● Vamos ver na prática!
                Iterar listas sem a propriedade key nos gera um warning, podemos 
                verificar isso no console;
                <br/>
                Propriedade Key
                ● O React precisa de uma chave única em cada um dos itens iterados;
                ● Isso serve para ajudá-lo na renderização do componente;
                ● Geralmente teremos um array de objetos e podemos colocar key como 
                alguma chave única, como o id de algum dado;
                ● Em último caso devemos utilizar o index do método map;

            </h3>
            <ul>
                {list.map((list, i) => (
                    <li key={i}>{list}</li>
                ))}
            </ul>

            <ul>
                {Users.map((user) => (
                    <li key={user.id}>{user.id} - {user.name} - {user.age}</li>
                ))}
            </ul>

        </div>
    )
}

export default Listas