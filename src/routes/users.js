const express = require('express')
const router = express.Router()

const user_cont = require('../controllers/user-controller')

router.post('/register', user_cont.create_user)
router.get('/users', user_cont.get_all_users)


module.exports = router