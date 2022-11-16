const express = require("express");
const app = express();
const path = require('path');
const mainRouter = require("./router/mainRouter")
let PORT = 3000

app.listen(PORT, console.log("Listen on port 3000", PORT));

app.use(express.static ("public"))

app.use("/", mainRouter)