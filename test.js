const wikipedia = require('wikipedia')
console.log("hi");
wikipedia.default.summary("google").then((summary)=>{
    console.log("hi");
    console.log(summary)

}).catch((err)=>{
    console.log(err);
})