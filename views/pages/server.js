const express = require("express")
const router = express.Router()

router.get("/about", (req, res)=>{
    res.sendFile(`${__dirname}/about.html`)
})

router.get("/contact", (req, res)=>{
    res.sendFile(`${__dirname}/contact.html`)
})

router.get("/disclaimer", (req, res)=>{
    res.sendFile(`${__dirname}/disclaimer.html`)
})

router.get("/privacy", (req, res)=>{
    res.sendFile(`${__dirname}/privacy.html`)
})

router.get("/termsandconditions", (req, res)=>{
    res.sendFile(`${__dirname}/termsandconditions.html`)
})

router.get("/index.css", (req, res)=>{
    res.sendFile(`${__dirname}/index.css`)
})

module.exports = router