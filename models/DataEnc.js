const mongoose = require('mongoose');

const DataEncSchema = new mongoose.Schema({
    secret: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const DataEnc = mongoose.model('data_encoded',DataEncSchema);
module.exports = DataEnc;