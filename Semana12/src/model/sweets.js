const mongoose = require('../config/connection');

const sweets = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
        min: 0.25,
    },
    categories: {
        type: String,
        enum: ["Bolo", "Docinho", "Torta"],
        required: true,
    }
});

const Sweets = mongoose.model('Sweets', sweets);

module.exports = Sweets;
