import './EditProfile.css'

import { uploads } from '../../utils/config';

// hooks
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// redux
import {profile, resetMessage } from '../../slices/userSlice'

// components
import Message from  '../../components/Message/Message';


const EditProfile = () => {
    const  dispatch = useDispatch()
    const { user, message, error, loading } = useSelector(state => state.user)

    // states

    // load user data
    useEffect(() => {
        dispatch(profile)
    }, [ dispatch ])

    console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault();


    }
    return (
        <div id='edit-profile'>
            <h2>Edite seus dados</h2>
            <p>Adicione uma imagem de perfil e conta mais sobre você...</p>
            {/* preview da imagem */}
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Nome:' />
                <input type='text' placeholder='E-mail:' disabled />
                <label>
                    <span>Imagem do Perfil</span>
                    <input type="file"  />
                </label>
                <label>
                    <span>Bio:</span>
                    <input type="text" placeholder='Descrição do perfil' />
                </label>
                <label>
                    <span>Quer alterar sua senha?</span>
                    <input type="text" placeholder='Digite sua nova senha'/>
                </label>
                <input type="submit" value="Atualizar" />
            </form>
        </div>
    )
}

export default EditProfile