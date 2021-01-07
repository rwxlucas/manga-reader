const route = require('express').Router()
const mangaController = require('../controllers/mangaController')

// Get mangas
// Manga pages
route.get('/:manga/:chapter', mangaController.getMangaPages)
// Manga info
route.get('/:id', mangaController.getMangaInfo)
// Manga names
route.get('/', mangaController.getMangaNames)

// Upload manga info
route.post('/uploaddata', mangaController.uploadData)


module.exports = route