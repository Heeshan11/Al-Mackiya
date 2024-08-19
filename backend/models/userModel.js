const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add a email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    user_name: {
        type: String,
        required: [true, 'Please add a user name']
    }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)