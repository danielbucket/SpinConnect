const express = require('express')
const router = express.Router()
const spinConnect_endPoints = require('./endpoints/spinConnect_endPoints')

router.use('/login_user', spinConnect_endPoints.userLogin)

module.exports = router