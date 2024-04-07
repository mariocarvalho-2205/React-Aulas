/*
// Configuração do firebase no projeto
? 1 - Criar pasta com nome firebase no diretorio raiz do projeto 
? 2 - cria arquivo dentro da pasta com nome de config.js
? 3 - copia o codigo de configuração do firebase
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyDdpR6sHADylkZggYqfV1uA3wkA6BKkAjk",
    authDomain: "miniblog-b34e9.firebaseapp.com",
    projectId: "miniblog-b34e9",
    storageBucket: "miniblog-b34e9.appspot.com",
    messagingSenderId: "120501521573",
    appId: "1:120501521573:web:e96eed4696bddcf518114c"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

? 4 - importar e iniciar o banco de dados firestore no mesmo arquivo de configuração 
    import { getFirestore } from "firebase/firestore" 
    const db = getFirestore(app)
? 5 - exporta o banco de dados do arquivo 
    export { db }

? 6 - instalar o react router dom
? 7 - Importar e Configurar as rotas no arquivo principal
    import { createBrowserRouter, RouterProvider } from 'react-router-dom'

    // configurando as rotas
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>,
            children: [
            {
                path: "/",
                element: <Home />
            }
            ]
        }
    ])

    // chamando o router provider
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>,
    )

? 8 - importar o Outlet no arquivo app e chamar no return 
import { Outlet } from "react-router-dom"

return (
    <>
        <Outlet />    
    </>
)

? 9 - Criar componente Nav e Footer e inserir no app
? 10 - criar pagina para login e para register
? 11 - criar as rotas para as paginas no arquivo main.jsx
? 12 - criar o form no componente
? 13 - o css do form e criado de forma global e somente estilização minima vai no css do componente








*/
