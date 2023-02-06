const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public")); // public folder for css and images
app.set("view engine", "ejs"); // seting the engine for ejs
app.get('/', (req, res) => res.sendFile(__dirname+"/index.html"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))