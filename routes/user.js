const express = require('express')
const router = express.Router()

router.use("/x/:id", function(req, res, next) {
    res.render("user/detay")
})
router.use("/x", function(req, res, next) {
    res.render("user/x")
})
router.use("/", function(req, res) {
    res.render("user/index")
})
module.exports = router