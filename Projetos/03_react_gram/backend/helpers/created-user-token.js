const jwt = require("jsonwebtoken");

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
