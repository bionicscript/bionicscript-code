const express = require("express")
const Router = express.Router()

Router.get("/", (req, res)=>{
    res.sendFile(`${__dirname}/index.html`)
})

Router.get("/index.css", (req, res)=>{
    res.sendFile(`${__dirname}/index.css`)
})

Router.get("/index.js", (req, res)=>{
    res.sendFile(`${__dirname}/index.js`)
})


module.exports = Router