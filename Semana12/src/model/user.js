const mongoose = require('../config/connection');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cpf: String,
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
