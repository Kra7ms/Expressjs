const express = require('express')
const path = require('path')
const app = express()
const userRoutes = require('./routes/user')
const adminRoutes = require('./routes/admin')
app.set('view engine', 'ejs')
const mysql = require('mysql2')
const config = require('./config')

let connection = mysql.createConnection(config.db)
connection.connect(function(err){
    if(err){
        return console.log(err)
    }
    connection.query("select * from blog", function(err, result){
        console.log(result[0].blogtitle)
    })
    console.log("The MySQL server is connected and ready to use")
})
app.get("view engine")
app.use("/libs", express.static(path.join(__dirname, "node_modules")))
app.use("/static", express.static(path.join(__dirname, "public")))

app.use("/admin", adminRoutes)
app.use(userRoutes)

app.listen(3000, function() {
    console.log("Listing on port 3000")
})