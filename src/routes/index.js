const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.html')
})

router.get('/ups...', (req, res) => {
    res.render('error.html')
})

module.exports = router