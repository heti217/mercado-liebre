const express = require("express");
const app = express();

const path = require('path');

let PORT = 3000

app.listen(PORT, console.log("Listen on port 3000", PORT));

app.use(express.static ("public"))

app.get("/", (req, res) =>{

res.sendFile(path.resolve(__dirname,"./views/home.html"))

})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
})
