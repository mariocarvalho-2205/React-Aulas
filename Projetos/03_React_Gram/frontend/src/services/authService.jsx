import { api, requestConfig } from '../utils/config'

const register = async (data) => {
    const config = requestConfig("POST", data)

    try {
        console.log("Config em AuthServices" , config )
        const res = await fetch(api + "")
        .then((res) => {
            res.json()
            console.log("resposta em register authService", res)
        })
        .catch((err) => {
            err
            console.log("Erro do catch em authServices", err)
        })

        if(res) {
            localStorage.setItem("user", JSON.stringify(res))
        }
        
    } catch (error) {
        console.log('error config em AuthService', error)
    }
}

const authService = {
    register,
}

export default authService