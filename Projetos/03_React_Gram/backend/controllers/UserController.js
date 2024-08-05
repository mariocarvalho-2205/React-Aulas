const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

// Generate user token
const generateToken = (id) => {
	return jwt.sign({ id }, jwtSecret, {
		expiresIn: "7d",
	});
};

// Register User and sign in
const register = async (req, res) => {
	// res.send('Registro')
	const { name, email, password } = req.body;

	// check if user exists
	const user = await User.findOne({ email });

	if (user) {
		res.status(422).json({ errors: ["Por favor, utilize outro e-mail"] });
		return;
	}

	// generate password hash
	const salt = await bcrypt.genSalt();
	const passwordHash = await bcrypt.hash(password, salt);

	// Create user
	const newUser = await User.create({
		name,
		email,
		password: passwordHash,
	});

	// if user was created sucessfully, return the token
	// verifica se o usuario nao foi criado com sucesso
	if (!newUser) {
		res.status(422).json({
			errors: ["Houve um erro, por favor tente mais tarde!"],
		});
		return;
	}

	res.status(201).json({
		_id: newUser._id,
		token: generateToken(newUser._id),
	});
};

// Sign user in
const login = async (req, res) => {
    // res.send("Login")
    const { email, password} = await req.body
    const user = await User.findOne({email})

    // check if user exists
    if(!user) {
        res.status(404).json({
            errors: ["Usuario não encontrado."]
        })
        return
    }

    // check if password matches
    if (!(await bcrypt.compare(password, user.password))) {
        res.status(422).json({errors: ["Senha invalida!"]})
        return
    }

    // return user with token
    res.status(201).json({
		_id: user._id,
        profileImage: user.profileImage,
		token: generateToken(user._id),
	});

}

module.exports = {
	register,
    login
};
