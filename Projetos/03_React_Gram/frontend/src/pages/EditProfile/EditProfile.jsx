import './EditProfile.css'

import { uploads } from '../../utils/config';

// hooks
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// redux
import { profile, resetMessage } from '../../slices/userSlice'

// components
import Message from '../../components/Message/Message';


const EditProfile = () => {
    const dispatch = useDispatch()
    const { user, message, error, loading } = useSelector(state => state.user)

    // states
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profileImage, setProfileImage] = useState('')
    const [bio, setBio] = useState('')
    const [previewImage, setPreviewImage] = useState('')


    // load user data
    useEffect(() => {
        dispatch(profile())
    }, [dispatch])


    // Fill form user data
    useEffect(() => {
        if (user) {
            setName(user.name)
            setEmail(user.email)
            setBio(user.bio)
        }
    }, [user])
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleFile = () => {
        // image preview
        const image = e.target.files[0]

        setPreviewImage(image)

        // update image state
        setImageProfile(image)
    }

    return (
        <div id='edit-profile'>
            <h2>Edite seus dados</h2>
            <p>Adicione uma imagem de perfil e conta mais sobre você...</p>
            {/* preview da imagem */}
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Nome' onChange={(e) => setName(e.target.value)} value={name || ""} />
                <input type='email' placeholder='E-mail' disabled value={email || ""} />
                <label>
                    <span>Imagem do Perfil</span>
                    <input type="file" />
                </label>
                <label>
                    <span>Bio:</span>
                    <input type="text" placeholder='Descrição do perfil' onChange={(e) => setBio(e.target.value)} value={bio || ""} />
                </label>
                <label>
                    <span>Quer alterar sua senha?</span>
                    <input type="text" placeholder='Digite sua nova senha' onChange={(e) => setPassword(e.target.value)} value={password || ""} />
                </label>
                <input type="submit" value="Atualizar" />
            </form>
        </div>
    )
}

export default EditProfile