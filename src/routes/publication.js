const express = require('express')
const router = express.Router()

 const publication = require('../controllers/publication_controller')

router.post('/publication', publication.publication)
router.get('/getPublic', publication.getPublic)
router.get('/orderPublications', publication.orderPublications)

module.exports = router