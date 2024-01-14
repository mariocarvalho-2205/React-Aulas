import './Text.css'
const Text = () => {
  return (
    <div>
        <h1>h1 de Component</h1>
        <h2>H2 de Component</h2>
        <p>CSS de Componente
            <br/>● O CSS de componente é utilizado para um componente em específico;
            <br/>● Geralmente é criado um arquivo com o mesmo nome do componente 
            e este é importado no componente;
            <br/>● Note que este método não é scoped, ou seja, o CSS vaza para outros 
            componentes se houver uma regra em colisão;
            <br/>● O React já cria um exemplo desta técnica com o App.css/js;
            <br/>● Vamos ver na prática!
        </p>
    </div>
  )
}

export default Text