const express = require('express')
const router = express.Router()
const db = require('../data/db')


router.use("/x/:id", function(req, res) {
    res.render("user/detay")
})
router.use("/x", function(req, res) {
    db.execute("select * from blog")
        .then(result => {
            db.execute("select * from catagory")
                .then(result2 => {
                    res.render("user/x", {
                        title: "Naber",
                        blogs: result[0],
                        catagories: result2[0]

                })
                .catch(err => console.log(err))
            })
        .catch(err => console.log(err))
        })
})
router.use("/", function(req, res) {
    db.execute("select * from blog where anasayfa=1")
        .then(result => {
            db.execute("select * from catagory")
                .then(result => {
                    res.render("user/index", {
                        title: "Anasayfa",
                        blogs: result[0],
                        catagories: result[0]
                    })
                })
        .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
})
module.exports = router