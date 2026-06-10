const mongoose = require('../config/connection');

const historicoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    sweet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sweets',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    total: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const Historico = mongoose.model('Historico', historicoSchema, 'historicos');

module.exports = Historico;
