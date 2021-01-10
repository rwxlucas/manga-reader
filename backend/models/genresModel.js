const mongoose = require('mongoose')

const Genres = mongoose.Schema(
    'genre',
    new mongoose.model({
        name: {
            type: String,
            required: true
        },
        mangas: {
            type: Array
        }
    })
)

module.exports = Genres