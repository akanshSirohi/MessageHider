const mongoose = require('mongoose');

const DataDecSchema = new mongoose.Schema({
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

const DataDec = mongoose.model('data_decoded',DataDecSchema);
module.exports = DataDec;