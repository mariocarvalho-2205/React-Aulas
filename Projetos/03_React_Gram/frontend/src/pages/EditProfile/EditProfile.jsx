import "./EditProfile.css";

import { uploads } from "../../utils/config";

// hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// redux
import { profile, resetMessage, updateProfile } from "../../slices/userSlice";

// components
import Message from "../../components/Message/Message";

const EditProfile = () => {
	const dispatch = useDispatch();
	const { user, message, error, loading } = useSelector(
		(state) => state.user
	);

	// states
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [bio, setBio] = useState("");
	const [previewImage, setPreviewImage] = useState("");
	const [profileImage, setProfileImage] = useState("");

	// load user data
	useEffect(() => {
		dispatch(profile());
	}, [dispatch]);

	console.log(user);

	// Fill form user data
	useEffect(() => {
		if (user) {
			setName(user.name);
			setEmail(user.email);
			setBio(user.bio);
		}
	}, [user]);

	const handleSubmit = async (e) => {
		e.preventDefault();

        // Gather user data from states
        const userData = {
            name,
        }

        if(profileImage) {
            userData.profileImage = profileImage
        }

        if (bio) {
            userData.bio = bio
        }

        if (password) {
            userData.password = password
        }

        // build form data
        const formData = new FormData()

        const userFormData = Object.keys(userData).forEach((key) => {
            formData.append(key, userData[key])
        })

        formData.append('user', userFormData)

        await dispatch(updateProfile(userFormData))

        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000)
	};

	const handleFile = (e) => {
		// image preview
		const image = e.target.files[0];

		setPreviewImage(image);

		// update image state
		setProfileImage(image);
	};

	return (
		<div id="edit-profile">
			<h2>Edite seus dados</h2>
			<p>Adicione uma imagem de perfil e conta mais sobre você...</p>
			{/* preview da imagem */}
			{(previewImage || (user && user.profileImage)) && (
				<img
					className="profile-image"
					src={
						previewImage
							? URL.createObjectURL(previewImage)
							: `${uploads}/users/${user.profileImage}`
					}
					alt={user?.name || "Profile Image"}
				/>
			)}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Nome"
					onChange={(e) => setName(e.target.value)}
					value={name || ""}
				/>
				<input
					type="email"
					placeholder="E-mail"
					disabled
					value={email || ""}
				/>
				<label>
					<span>Imagem do Perfil</span>
					<input type="file" onChange={handleFile} />
				</label>
				<label>
					<span>Bio:</span>
					<input
						type="text"
						placeholder="Descrição do perfil"
						onChange={(e) => setBio(e.target.value)}
						value={bio || ""}
					/>
				</label>
				<label>
					<span>Quer alterar sua senha?</span>
					<input
						type="text"
						placeholder="Digite sua nova senha"
						onChange={(e) => setPassword(e.target.value)}
						value={password || ""}
					/>
				</label>
				{!loading && <input type="submit" value="Atualizar" />}
				{loading && <input type="submit" value="Aguarde..." disabled />}
				{error && <Message msg={error} type="error" />}
                {message && <Message msg={message} type="success" />}
			</form>
		</div>
	);
};

export default EditProfile;
