const mongoose = require('../config/connection');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    cpf: String,
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
