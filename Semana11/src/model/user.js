const mongoose = require('../config/connection');

const user_schema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model('User', user_schema, 'users');

module.exports = User;
