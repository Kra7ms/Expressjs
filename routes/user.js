const express = require('express')
const router = express.Router()
const path = require('path')

router.use("/x/:id", function(req, res, next) {
    res.sendFile(path.join(__dirname, "../views/files", "detay.html"))
})
router.use("/x", function(req, res, next) {
    res.sendFile(path.join(__dirname, "../views/files", "x.html"))
})
router.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/files", "index.html"))
})
module.exports = router