const express = require("express")
const router = express.Router()
const wikipedia = require("wikipedia")

router.get("/autocomplete", (req, res) => {
    wikipedia.default.autocompletions(req.query.query, { limit: 10 }).then((suggestions) => {
        let suuggestionKeywords = ``
        suggestions.forEach((value) => {
            suuggestionKeywords = suuggestionKeywords + `
            <p onclick="selectWikipediaSearchSuggestion('${value}')">
            <span class="fa fa-search"></span> ${value}
           </p>
            `
        })

        res.json({ data: suuggestionKeywords })

    }).catch((err) => {
        console.log(err);
    })
})


router.get("/", (req, res) => {

    wikipedia.default.content(req.query.search).then((summary) => {

        console.log(summary);


        var mapedarray = String(summary).split(" ").map((string, index) => {

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


            if(string == "See" && array[index + 1] == "also"){
                continueCompliling = false
                return `</p>`
            }

            if(continueCompliling == true){
                return string
            }

            if(continueCompliling == false){
                return ``
            }
        })


        // res.send(finlaArray)


        var html = ''

        finalarray2.forEach((string) => {
            html = html + string + " "
        })

        res.send(html)



    }).catch((err) => {
        console.log(err);
    })

    console.log(req.query);
})


module.exports = router