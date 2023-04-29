// const wikipedia = require('wikipedia')
// console.log("hi");
// wikipedia.default.summary("google").then((summary)=>{
//     console.log("hi");
//     console.log(summary)

// }).catch((err)=>{
//     console.log(err);
// })



// // var summary = "niced"

// // summary


// // console.log(Math.floor(5 / 2));






// const fs = require("fs")
// const searches = require("./dataset")
// var counter = 0
// searches.forEach((value, index) => {
//  if(index > 10000 && counter < 10000){
//     fs.appendFile(`${__dirname}/sitemap2.xml`, `
//     <url>
//     <loc>https://bionicscript.com/wikipedia/?search=${value.query}</loc>
//     <lastmod>2023-04-24T14:48:45+00:00</lastmod>
//     <priority>0.80</priority>
//     </url>

//     `, () => {
//         console.log(value.query);
//         counter++
//     })
// }
// })
