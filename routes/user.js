const express = require('express')
const router = express.Router()
const db = require('../data/db.js')


const data = {
    title: "Popüler Konular",
    catagories: ["Science", "Tecnology", "Engineering", "Art", "Mathmatics"],
    blogs: [
        {
            blogid: 1,
            title: "Raspberry Pi",
            explanation: "The Raspberry Pi is a low cost, credit-card sized computer that plugs into a computer monitor or TV, and uses a standard keyboard and mouse",
            image: "1.jpg",
            homepage: true
        },
        {
            blogid: 2,
            title: "Arduino",
            explanation: "Open-source electronic prototyping platform enabling users to create interactive electronic objects.",
            image: "2.jpg",
            homepage: true
        },
        {
            blogid: 3,
            title: "SolidWorks",
            explanation: "SolidWorks is a 3D parametric design software that is used to design all sorts of products such as automobiles, marine equipment, airplane parts, cell phones, cameras, furniture, electrical assemblies, glasses, lighting fixtures, toys, vacuum cleaners, or any other like product you can think of.",
            image: "3.avif",
            homepage: true
        },
        {
            blogid: 4,
            title: "Excel",
            explanation: "Excel is a spreadsheet program from Microsoft and a component of its Office product group for business applications.",
            image: "4.jpg",
            homepage: false
        }
    ]
}
router.use("/x/:id", function(req, res) {
    db.execute("select * from blog")
        .then(result => {
            db.execute("select * from catagory")
                .then(result2 => {
                    res.render("user/x", {
                        title: "Naber",
                        blogs: result,
                        categories: result2

                })
                .catch(err => console.log(err))
            })
        .catch(err => console.log(err))
        })
})

router.use("/x", function(req, res) {
    res.render("user/x")
})

router.use("/", function(req, res) {
    db.execute("select * from blog")
        .then(result => {
            db.execute("select * from catagory")
                .then(result2 => {
                    res.render("user", {
                        title: "Naber",
                        blogs: result[0],
                        catagories: result2[0]

                })
                .catch(err => console.log(err))
            })
        .catch(err => console.log(err))
        })
})
module.exports = router