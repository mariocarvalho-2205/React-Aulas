import {db} from "../firebase/config"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth"

import { useState, useEffect } from "react"

export const useAuthentication = () => {

    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(null)

    // cleanup
    // deal with memory leak
    const [ cancelled, setCancelled ] = useState(false)

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
        setError(null)

        try {
            // criar usuario
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            // valida usuario
            await updateProfile( user, {
                displayName: data.displayName
            })
        } catch (error) {

            console.log(error)
            // console.log(typeof error.message)

            // tratando mensagem de error
            let systemErrorMessage

            if (error.message.includes("password")) {
                systemErrorMessage = "A senha precisa ter pelo menos 6 caracteres"
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "e-mail já cadastrado"
            } else {
                systemErrorMessage = "Ocorreu erro, por favor tente mais tarde"
            }

            setError(systemErrorMessage)
        }
        
        setLoading(false)

    }

    // logout - sign out
    const logout = async () => {
        checkIfIsCancelled()
        signOut(auth)
    }

    // login - sign in
    const login = async (data) => {
        checkIfIsCancelled()
        setLoading(true)
        setError(null)

        try {
            // login
            await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            setLoading(false)
        } catch (error) {
            console.log(error.message)
            setError(true)
            let systemErrorMessage;
            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuário não encontrado"
            } else if (error.message.includes("credential")) {
                systemErrorMessage = "Usuário não encontrado! Verifique sua senha e seu email";
            } else {
                systemErrorMessage = "Ocorreu erro, por favor tente mais tarde."
            }
            setError(systemErrorMessage)
            
        }
        setLoading(false)

    }

    // colocar o cancelled como true assim que sair dessa pagina
    useEffect(() => {
        return () => setCancelled(true)
    }, [])


    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }


} 