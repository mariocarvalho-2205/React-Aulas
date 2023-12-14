import { useState } from "react";

function createInitialState(){
    const initial = [];

    for (let i = 0; i < 30; i++) {
        initial.push({
            id: i,
            text: `Item ${i + 1}`
        });
    }
    return initial;
}

export default function FuncaoInicializadora () {
    const [ todos, setTodos ] = useState(createInitialState);
    const [ text, setText ] = useState('');

    return (
        <div>
            <input 
            value={text} 
            onChange={e => setText(e.target.value)}
            />
            <button onClick={() => {
                setText('');
                setTodos([{
                    id: todos.length,
                    text: text
                }, ...todos]);

            }}>Add

            </button>
            <ul>
                {todos.map(item => (
                    <li key={item.id}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}