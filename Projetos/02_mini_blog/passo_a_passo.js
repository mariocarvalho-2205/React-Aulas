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
? 20 - Criar o contexto para fazer a diferenciação de usuario
// criar pasta chamada context e dentro dela o arquivo AuthContext.jsx
// importar o useContext e o createContext
// criar o contexto
* const AuthContext =createContext()
// criar o provider e exportar a função
* export function AuthProvider ({ children, value }) {
* return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
* }

// criar hook para pegar o contexto
* export function useAuthValue() {
*     return useContext(AuthContext)
* }

? 21 - Inserir o context no app englobando tudo
* import { AuthProvider } from "../context/AuthContext"
? 22 - importar o onAuthStateChanged para mapear o login do usuario
* import { onAuthStateChanged } from "firebase/auth"
? 24 - importar tambem o useState e o useEffect junto com o authtentication
* import { useState, useEffect } from "react";
* import { useAuthentication } from "../hooks/useAuthentication";
// criar a função para verificar se o usuario está logado
// cria o user e recebe a autencicação do firebase
  const [ user, setUser ] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  // verifica se esta autenticado
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [ auth ])

  // verifica se esta carregando o usuario
  if (loadingUser) {
    return <p>Carregando</p>
  }
? 25 - verifica se o usuario esta logado no AuthProvider no app
* <AuthProvider value={{ user }}>
? no navbar recebe o authenticatio e o useAuthValue para verificar se o usuario esta logado e muda o navbar
* import { useAuthValue } from "../hooks/useAuthentication"
* import { useAuththenticatio } from "../hooks/useAuthentication"
// pega o usuario no navbar com o authvalue
* const { user } = useAuthValue()
// faz a validação na li, se estiver autenticado, exibi ou nao
{!user && (
    <>
    <li>
        <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? styles.active : "")}
        >
        Entrar
        </NavLink>
    </li>
    <li>
        <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? styles.active : "")}
        >
        Cadastrar
        </NavLink>
    </li>
    </>
)}

? 26 - criar paginas de CreatePost e dashboard e criar as rotas no main
// usar a mesma no navbar logica para o register e o 
// login sendo que inversa para exibir o dashboard e o createpost







*/
