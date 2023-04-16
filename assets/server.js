const express = require("express")
const router = express.Router()

router.get("/bionic-script-logo.png", (req, res)=>{
    res.sendFile(`${__dirname}/bionic-script-logo.png`)
})

module.exports = router