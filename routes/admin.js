const express = require('express')
const router = express.Router()

router.use("/create", function(req, res, next) {
    res.render("admin/admin-create")
})
router.use("/detay", function(req, res, next) {
    res.render("admin/admin-detay")
})
router.use("/x", function(req, res, next) {
    res.render("admin/admin-x.")
})
module.exports = router