const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET

const generateToken = (id) => {


    return token = jwt.sign(
        {
        id,
        },
        jwtSecret,
        {
        expiresIn: "1d",
        }
    );
};

module.exports = generateToken
