const route = require('express').Router()
const { userController } = require('../controllers')
const { checkDuplicate } = require('../middlewares/verifySignUp')

route.post('/signup', [checkDuplicate], userController.signUp)
route.post('/signin', [], userController.signIn)

// Get bookmarks
route.get('/bookmarks/:username', userController.getBookmarks)
// Upload bookmarks
route.post('/bookmarks', userController.uploadBookmarks)

module.exports = route