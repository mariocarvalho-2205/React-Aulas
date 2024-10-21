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

const userService = {
    profile
}

export default userService;