const express = require('express')
const router = express.Router()
const path = require('path')

router.use("/x/:id", function(req, res, next) {
    res.sendFile(path.join(__dirname, "../views/user", "detay.html"))
})
router.use("/x", function(req, res, next) {
    res.sendFile(path.join(__dirname, "../views/user", "x.html"))
})
router.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/user", "index.html"))
})
module.exports = router