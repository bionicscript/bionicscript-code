const express = require("express")
const app = express()
const homepageRouter = require("./views/homepage/server")
const PORT = process.env.PORT || 3001

app.use(express.json())

app.use("/", homepageRouter)

app.listen(PORT, ()=>{
    console.log(`server is live at ${PORT}`);
})