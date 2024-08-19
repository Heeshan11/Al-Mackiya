const express = require('express')
const router = express.Router()
const { getSts, setSt, updateSt, deleteSt, searchStds } = require('../controllers/studentController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get( getSts).post(protect, setSt)
router.route('/:id').put(protect, updateSt).delete(protect, deleteSt)
router.route('/search').post(protect,searchStds)

module.exports = router