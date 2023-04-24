const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

router.get("/index.css", (req, res) => {
    res.sendFile(`${__dirname}/index.css`)
})

router.get("/index.js", (req, res) => {
    res.sendFile(`${__dirname}/index.js`)
})

router.post("/", (req, res) => {
    const articleHeading = `<h1>${req.body.title}</h1>`
    const articleSummary = `<p class='wikipedia-article-summary'>${req.body.description}</p>`
    var content = `<p>`
    String(req.body.text).split(" ").map((string, index, array) => {
        if (index != array.length - 1) {
            return string.replace(`\r\n`, `</p><p>`)
        }

        if (index == array.length - 1) {
            return string.replace(`\r\n`, `</p>`)
        }

    }).forEach((string) => {
        content = content + string + " "
    })

    console.log(content);

    const bionicText = content.split(" ").map((string)=>{
        if (string.length % 2 == 0 && string.includes('<p>') == false && string.includes('</p><h2>') == false && string.includes('</h2><p>') == false && string.includes('<p><h3>') == false && string.includes('</h3><p>') == false && string.includes('</p><h4>') == false && string.includes('</h4><p>') == false && string.includes('</p><h5>') == false && string.includes('</h5><p>') == false  && string.includes('</p>') == false) {
            var firstPart = string.substring(0, (string.length / 2))
            var secondPart = string.substring((string.length / 2), string.length)
    
            return `<span class="bionic-word"><span class="bioic-bold">${firstPart}</span><span class="bionic-light">${secondPart}</span></span>`
        }
    
        if (string.length % 2 != 0 && string.includes('<p>') == false && string.includes('</p><h2>') == false && string.includes('</h2><p>') == false && string.includes('<p><h3>') == false && string.includes('</h3><p>') == false && string.includes('</p><h4>') == false && string.includes('</h4><p>') == false && string.includes('</p><h5>') == false && string.includes('</h5><p>') == false  && string.includes('</p>') == false) {
            var firstPart = string.substring(0, Math.floor(string.length / 2) + 1)
            var secondPart = string.substring(Math.floor(string.length / 2) + 1, string.length)
            
            return `<span class="bionic-word"><span class="bioic-bold">${firstPart}</span><span class="bionic-light">${secondPart}</span></span>`
        }

        return string
    })

    var finalBionicText = ``

    bionicText.forEach((string, index)=>{
        finalBionicText = finalBionicText + string + " "
    })


    res.render(`${__dirname}/index.hbs`, {
        articleHeadingAndDescription: articleHeading + articleSummary,
        content: finalBionicText,


    })
})

module.exports = router
