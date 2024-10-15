import { api, requestConfig } from '../utils/config'

// Get user details
const profile = async (data, token) => {
    const config = requestConfig('GET', data, token)

    try {
        // console.log(config, ' antes do res')
        const res = await fetch(api + '/users/profile', config)
            .then((res) => res.json())
            .catch(err => console.error(err, 'useSercvice dentro no catch do fetch'))

        // console.log(res, 'res no useService')

        return res
    } catch (error) {
        console.error(error)
    }
}

const userService = {
    profile
}

export default userService;