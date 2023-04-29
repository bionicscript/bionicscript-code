const express = require("express")
const router = express.Router()
const wikipedia = require("wikipedia")

router.get("/index.js", (req, res) => {
    res.sendFile(`${__dirname}/index.js`)
})

router.get("/index.css", (req, res) => {
    res.sendFile(`${__dirname}/index.css`)
})

router.get("/autocomplete", (req, res) => {
    wikipedia.default.autocompletions(req.query.query, { limit: 10 }).then((suggestions) => {
        let suuggestionKeywords = ``
        suggestions.forEach((value) => {
            suuggestionKeywords = suuggestionKeywords + `
            <p onclick="selectWikipediaSearchSuggestion('${value}');searchWikipedia()">
            <span class="fa fa-search"></span> ${value}
           </p>
            `
        })

        res.json({ data: suuggestionKeywords })

    }).catch((err) => {
        console.log(err);
        res.send("Error")
    })
})


router.get("/", (req, res) => {

    wikipedia.default.summary(req.query.search).then((summary) => {

        const articleImage = `<img src="${summary.originalimage.source}">`
        const articleHeading = `<h1>${summary.titles.normalized}</h1>`

        var articleDescription = summary.extract.split(" ").map((string) => {

            if (string.length % 2 == 0 && string.includes('<p>') == false && string.includes('</p><h2>') == false && string.includes('</h2><p>') == false && string.includes('<p><h3>') == false && string.includes('</h3><p>') == false && string.includes('</p><h4>') == false && string.includes('</h4><p>') == false && string.includes('</p><h5>') == false && string.includes('</h5><p>') == false && string.includes('</p>') == false) {
                var firstPart = string.substring(0, (string.length / 2))
                var secondPart = string.substring((string.length / 2), string.length)

                return `<span class="bionic-word"><span class="bioic-bold">${firstPart}</span><span class="bionic-light">${secondPart}</span></span>`
            }

            if (string.length % 2 != 0 && string.includes('<p>') == false && string.includes('</p><h2>') == false && string.includes('</h2><p>') == false && string.includes('<p><h3>') == false && string.includes('</h3><p>') == false && string.includes('</p><h4>') == false && string.includes('</h4><p>') == false && string.includes('</p><h5>') == false && string.includes('</h5><p>') == false && string.includes('</p>') == false) {
                var firstPart = string.substring(0, Math.floor(string.length / 2) + 1)
                var secondPart = string.substring(Math.floor(string.length / 2) + 1, string.length)

                return `<span class="bionic-word"><span class="bioic-bold">${firstPart}</span><span class="bionic-light">${secondPart}</span></span>`
            }

            return string

        })

        var bionicdescription = ``
        articleDescription.forEach((string) => {
            bionicdescription = bionicdescription + string + " "
        })

        articleDescription = `<p >${summary.description}</p>`

        const articleSummary = `<p class='wikipedia-article-summary'>${bionicdescription}</p>`
        const articleIntro = articleHeading + articleDescription + articleSummary + articleImage




        wikipedia.default.content(req.query.search).then((content) => {
            var mapedarray = String(content).split(" ").map((string, index) => {

                var string = string

                if (string.includes(`\n\n\n`)) {
                    string = string.replace(`\n\n\n`, ' ')

                }

                if (string.includes(`\n\n`)) {
                    string = string.replace(`\n\n`, ' ')
                }

                if (string.includes(`\n`)) {
                    string = string.replace(`\n`, ' ')
                }

                return string

            })

            var finlaArray = mapedarray.join(" ").split(" ")
            var doubleEqualTo = 0
            var tripleEqualTo = 0
            var quadrupleEqualTo = 0
            var QuintupleEqualTO = 0
            var continueCompliling = true
            var finalarray2 = finlaArray.map((string, index, array) => {

                if (index == 0) {
                    return `<p>${string}`
                }

                if (string == `==` && doubleEqualTo % 2 == 0 && continueCompliling) {
                    doubleEqualTo++
                    return `</p><h2>`
                }

                if (string == `==` && doubleEqualTo % 2 != 0 && continueCompliling) {
                    doubleEqualTo++
                    return `</h2><p>`
                }

                if (string == `===` && tripleEqualTo % 2 == 0 && continueCompliling) {
                    tripleEqualTo++
                    return `<p><h3>`
                }

                if (string == `===` && tripleEqualTo % 2 != 0 && continueCompliling) {
                    tripleEqualTo++
                    return `</h3><p>`
                }

                if (string == `====` && quadrupleEqualTo % 2 == 0 && continueCompliling) {
                    quadrupleEqualTo++
                    return `</p><h4>`
                }

                if (string == `====` && quadrupleEqualTo % 2 != 0 && continueCompliling) {
                    quadrupleEqualTo++
                    return `</h4><p>`
                }

                if (string == `=====` && QuintupleEqualTO % 2 == 0 && continueCompliling) {
                    QuintupleEqualTO++
                    return `</p><h5>`
                }

                if (string == `=====` && QuintupleEqualTO % 2 != 0 && continueCompliling) {
                    QuintupleEqualTO++
                    return `</h5><p>`
                }


                if (string == "See" && array[index + 1] == "also") {
                    continueCompliling = false
                    return `</p>`
                }

                if (continueCompliling == true) {
                    return string
                }

                if (continueCompliling == false) {
                    return ``
                }
            })

            finalarray2 = finalarray2.map((string) => {

                if (string.length % 2 == 0 && string.includes('<p>') == false && string.includes('</p><h2>') == false && string.includes('</h2><p>') == false && string.includes('<p><h3>') == false && string.includes('</h3><p>') == false && string.includes('</p><h4>') == false && string.includes('</h4><p>') == false && string.includes('</p><h5>') == false && string.includes('</h5><p>') == false && string.includes('</p>') == false) {
                    var firstPart = string.substring(0, (string.length / 2))
                    var secondPart = string.substring((string.length / 2), string.length)

                    return `<span class="bionic-word"><span class="bioic-bold">${firstPart}</span><span class="bionic-light">${secondPart}</span></span>`
                }

                if (string.length % 2 != 0 && string.includes('<p>') == false && string.includes('</p><h2>') == false && string.includes('</h2><p>') == false && string.includes('<p><h3>') == false && string.includes('</h3><p>') == false && string.includes('</p><h4>') == false && string.includes('</h4><p>') == false && string.includes('</p><h5>') == false && string.includes('</h5><p>') == false && string.includes('</p>') == false) {
                    var firstPart = string.substring(0, Math.floor(string.length / 2) + 1)
                    var secondPart = string.substring(Math.floor(string.length / 2) + 1, string.length)

                    return `<span class="bionic-word"><span class="bioic-bold">${firstPart}</span><span class="bionic-light">${secondPart}</span></span>`
                }

                return string

            })



            var html = ''

            finalarray2.forEach((string) => {
                html = html + string + " "

            })


            res.render(`${__dirname}/index.hbs`, {
                title: summary.titles.normalized + " | Bionic Text",
                description: summary.extract,
                articleSummary: articleIntro,
                content: html
            })

        }).catch((err) => {
            console.log(err);
        res.send("Error")

        })
    }).catch((err) => {
        console.log(err);
        res.send("Error")

    })

})


module.exports = router