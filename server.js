const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = process.env.PORT || 3001


const assetsRouter = require('./assets/server')
const homepageRouter = require("./views/homepage/server")
const bionicRouter = require("./views/bionic/server")
const wikipediaRouter = require("./views/wikipedia/server")
const pagesRouter = require("./views/pages/server")

app.set('view engine', 'hbs');


app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", homepageRouter)
app.use("/assets", assetsRouter)
app.use("/bionic", bionicRouter)
app.use("/wikipedia", wikipediaRouter)
app.use("/p", pagesRouter)


server.listen(PORT, ()=>{
    console.log(`server is live at ${PORT}`)
})
