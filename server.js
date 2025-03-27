const express = require("express");
const { config } = require("./configuration/config");
const Port = 5000;
const app = express()
const cors = require("cors")
const MRouter = require("./router/router");

app.use(express.json())

app.use(cors())
config()
app.use("/" ,MRouter)
app.listen(Port, ()=>  console.log(`Server is running on port ${Port}`))