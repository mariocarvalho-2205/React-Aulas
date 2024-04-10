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
? 14 - criar os states no form para pegar os dados dos inputs 
? 15 - criar a função asincrona handleSubmit 
? 16 - Colocar no form o onSumbmit{handleSubmit} e nos inputs o onChange{(e) => set(e.target.value)} colocar o value com as variaveis value={}
? 17 - criar objeto dentro da função para pedar os dados do form e setar o error dentro da função
? 18 - Criar o hook para autenticação
    // importar os comando do firebase
    * import {
        getAuth,
        createUserWithEmailAndPassqord,
        signInWithEmailAndPassword,
        updateProfile,
        signOut
    } from "firebase/auth"

    // importar useState e UseEffect
    // Criar a exportar a função de authentication
    * esport const useAuthentication = () => {
        // criar 2 estagios para verificação
        const [ error, setError ] = useState(null)
        const [ loading, setLoading ] = useState(null)

        // criar uma instrução chamada cleanup para nao deixar rescisios de funções
        // e poupar memoria
        const [ cancelled, setCancelled ] = useState(false)

        // pegar autenticação que vem do firebase
        const auth = getAuth()

        // criar uma função para checagem e authenticação e evitar vazamento de memoria
        function checkIfIsCancelled () {
            if (cancelled) {
                return 
            }
        }

        // criar usuario
        const createUser = async (data) => {
            checkIfIsCancelled()

            setLoading(true)
            // checar error
            try {
                // pegar usuarios que chega da função
                // chama a função do firebase
                const {user} = await createUserWithEmailAndPassword(
                    auth,
                    data.email,
                    data.password
                )
                // atualizar usuario
                await updateProfile(user, {
                    displayName: data:displayName
                })


            } catch (error) {
                console.log(error)
                console.lod(typeof error.message)
                
                // tratando erro

                let systemErrorMessage
                if (error.message.includer('Password')) {
                    systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres"
                } else if (error.message.includes("email-already")) {
                    systemErrorMessage = "E-mail ja cadastrado"
                }
            }

            setLoagind(false)
        }
        // colocar o cancelled como true assim que sair dessa pagina
        useEffect(() => {
            return () => setCancelled(true)
        }, [])

        // retornando os dados que veio da api
        return { auth, createUser, error, loading}
        * }
        ! não esquecer de importar o db no hook
? 19 - importar o hook no app
import { useAuthentication } from "../hooks/useAuthentication"
* const { createUser, error: authError, loading } = useAuthentication






*/
