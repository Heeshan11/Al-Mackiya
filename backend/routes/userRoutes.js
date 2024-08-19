const express = require('express')
const { registerUser, getUser, loginUser } = require('../controllers/userController')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getUser)


module.exports = router