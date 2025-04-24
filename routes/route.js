const express = require("express")
const router = express.Router()
const {getdata} = require('../controllers/controller')

router.get('/getdata', getdata)

module.exports = router