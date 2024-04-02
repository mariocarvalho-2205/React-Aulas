// 1 - Criar o context
import { createContext, useState } from "react";

export const CounterContext = createContext();
/*
O provider vai delimitar onde o contexto é utilizado
será criado uma especia de componente com a prop children
e o provider ira encapsular od demais componentes em que precisamos consultar
ou alterar o valor
geralmente ele fica em app.js ou em index.js
*/


// 2 - Criar o provider
export const CounterContextProvider = ({children}) => {
  const [counter, setCounter] = useState(5);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

