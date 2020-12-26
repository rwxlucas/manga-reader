const route = require('express').Router()
const { userController } = require('../controllers')
const { checkDuplicate } = require('../middlewares/verifySignUp')

route.post('/signup', [checkDuplicate], userController.signUp)
route.post('/signin', [], userController.signIn)

module.exports = route