const express = require('express')
const router = express.Router()

const data = {
    title: "Anasayfa",
    catagories: ["Ahmet", "Mahmut", "Neriman", "Can", "Tarık"],
    blogs: [
        {
            blogid: 1,
            blogtitle: "Raspberry Pi",
            blogexplanation: "Raspberry Pi explanation",
            image: "1.jpg",
            anasayfa: true,
        },
        {
            blogid: 2,
            blogtitle: "Arduino",
            blogexplanation: "Arduino explanation",
            image: "2.jpg",
            anasayfa: true
        },
        {
            blogid: 3,
            blogtitle: "Solidworks",
            blogexplanation: "Solidworks explanation",
            image: "3.avif",
            anasayfa: false
        }
    ]
}

router.use("/x/:id", function(req, res, next) {
    res.render("user/detay")
})
router.use("/x", function(req, res, next) {
    res.render("user/x", data)
})
router.use("/", function(req, res) {
    res.render("user/index", data)
})
module.exports = router