const express = require("express");
const bodyParser = require("body-parser"); // to handle post requests

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public")); // public folder for css and images
app.set("view engine", "ejs"); // seting the engine for ejs
//
app.use("/", require("./routes/home"));
app.use("/user/login", require("./routes/User/login-post"));
app.use("/user/signup", require("./routes/User/signup-post"));
app.use("/officer/login", require("./routes/Officer/login-post"));
app.use("/officer/signup", require("./routes/Officer/signup-post"));
app.use("/admin/login",require("./routes/Admin/login-post"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
