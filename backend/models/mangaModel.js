const mongoose = require('mongoose')

const Manga = mongoose.model(
    'manga',
    new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        alternative: {
            type: String
        },
        author: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true,
        },
        genres: {
            type: Array,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        updated: {
            type: Date,
            default: Date.now
        },
        views: {
            type: Number,
            default: 0
        }
    })
)

module.exports = Manga