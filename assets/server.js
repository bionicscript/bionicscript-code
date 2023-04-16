const express = require("express")
const router = express.Router()

router.get("/bionic-script-logo.png", (req, res)=>{
    res.sendFile(`${__dirname}/bionic-script-logo.png`)
})

router.get("/bionic-script-logo.ico", (req, res)=>{
    res.sendFile(`${__dirname}/bionic-script-logo.ico`)

})

router.get("/wikipedia-icon.png", (req, res)=>{
    res.sendFile(`${__dirname}/wikipedia-icon.png`)
})

module.exports = router