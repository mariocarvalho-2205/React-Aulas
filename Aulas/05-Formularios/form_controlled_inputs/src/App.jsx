import Form from './components/Form'
import './App.css'

function App() {

  return (
    <>
      <h1>Form Controlled Inputs</h1>
      <Form user={{ name: 'joao', idade: 65 }}/>
    </>
  )
}

export default App
