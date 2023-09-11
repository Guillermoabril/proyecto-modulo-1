const express = require('express')
const router = express.Router()

const product_cont = require('../controllers/product_control')

router.post('/newprod', product_cont.create_product)
router.get('/getprod', product_cont.getProducts)

module.exports = router