import Form from './components/Form'
import './App.css'

function App() {

  return (
    <>
      <h1>Form - Resetando Formulario</h1>
      <Form user={{ nome: 'Mario Carvalho', idade: 48, sexo: 'Masculino'}}/>
    </>
  )
}

export default App
