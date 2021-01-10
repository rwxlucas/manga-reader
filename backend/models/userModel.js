const mongoose = require('mongoose')

const User = mongoose.model(
    'user',
    new mongoose.Schema({
        username: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 30,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        email: {
            type: String,
            required: true
        },
        bookmarks: {
            type: Array
        }
    })
)

module.exports = User