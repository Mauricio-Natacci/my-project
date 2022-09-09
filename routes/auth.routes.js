const express = require('express')

const AuthController = require('../controllers/auth.controller')

const router = express.Router()

router.get('/signup', AuthController.getSignup)

router.get('/login', AuthController.getLogin)

module.exports = router
