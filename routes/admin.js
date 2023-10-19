const express = require('express')
const router = express.Router()
const path = require('path')

router.use("/create", function(req, res, next) {
    res.sendFile(path.join(__dirname, "../views/admin", "admin-create.html"))
})
router.use("/detay", function(req, res, next) {
    res.sendFile(path.join(__dirname, "../views/admin", "admin-detay.html"))
})
router.use("/x", function(req, res, next) {
    res.sendFile(path.join(__dirname, "../views/admin", "admin-x.html"))
})
module.exports = router