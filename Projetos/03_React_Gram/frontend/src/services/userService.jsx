import { api, requestConfig } from '../utils/config'

// Get user details
const profile = async (data, token) => {
    const config = requestConfig('GET', data, token)
    try {
        // console.log(config, ' antes do res')
        const res = await fetch(api + '/users/profile', config)



        return await res.json()

    } catch (error) {
        console.error(error)
    }
}

// update user details
const updateProfile = async (data, token) => {

    const config = requestConfig('PUT', data, token, true)

    try {

        const res = await fetch(api + "/users/", config)
            .then((res) => res.json())
            .catch((err) => err)
        return res
    } catch (error) {
        console.error(error)
    }
}

const userService = {
    profile,
    updateProfile
}

export default userService;