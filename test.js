const wikipedia = require('wikipedia')
console.log("hi");
wikipedia.default.summary("google").then((summary)=>{
    console.log("hi");
    console.log(summary)

}).catch((err)=>{
    console.log(err);
})



// var summary = "niced"

// summary


// console.log(Math.floor(5 / 2));