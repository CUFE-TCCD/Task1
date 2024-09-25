const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const jwtConfig = require("../../infrastructure/config/jwtConfig");

const generateToken = (user) => {
    return jwt.sign({
        id: user._id,
        role: user.role
    },
        jwtConfig.secret,
        { expiresIn: jwtConfig.expiresIn }
    );
};

const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}

const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

const generateResetToken = (user) => {
    return jwt.sign({
        id: user._id,
        resetToken: true
    },
        jwtConfig.secret,
        { expiresIn: "15m" }
    );
}

const validateResetToken = (token) => {
    try {
        const { id, resetToken } = jwt.verify(token, jwtConfig.secret)
        return (resetToken) ? id : null
    } catch (error) {
        console.log(error)
        return null
    }
}

const sendResetTokenEmail = (token) => {
    // To be emplemented later
    console.log(token)
}


module.exports = { generateToken, hashPassword, comparePassword, validateEmail, generateResetToken, sendResetTokenEmail, validateResetToken }
