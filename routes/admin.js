const express = require('express')
const router = express.Router()
const path = require('path')

router.use("/admin/create", function(req, res, next) {
    res.sendFile(path.join(__dirname, "../views/admin", "admin-create.html"))
})
router.use("/admin/detay", function(req, res, next) {
    res.sendFile(path.join(__dirname, "../views/admin", "admin-detay.html"))
})
router.use("/admin/x", function(req, res, next) {
    res.sendFile(path.join(__dirname, "../views/admin", "admin-x.html"))
})
module.exports = router