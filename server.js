const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const assetsRouter = require('./assets/server')
const homepageRouter = require("./views/homepage/server")
const bionicRouter = require("./views/bionic/server")

app.set('view engine', 'hbs');

const PORT = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", homepageRouter)
app.use("/assets", assetsRouter)
app.use("/bionic", bionicRouter)

app.listen(PORT, ()=>{
    console.log(`server is live at ${PORT}`)
})