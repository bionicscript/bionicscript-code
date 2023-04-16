const wikipedia = require('wikipedia')

wikipedia.default.autocompletions("fa").then((data)=>{
    console.log(data);
})
