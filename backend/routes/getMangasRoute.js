const route = require('express').Router()
const { getMangasController } = require('../controllers')

// Thumbnail image
route.get('/thumbnail/:manga', getMangasController.getThumb)

// Manga Information

module.exports = route