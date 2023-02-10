const User=require("../../models/Authentication/User-schema")
const mongoose=require("mongoose")
exports.signup_post =  (req, res) => {
  const user = new User({
      username: req.body.username,
      password: req.body.password,
  });
  user.save( (err,docs) => {
     if (!err) {
       console.log("user successfully saved to DB");
    //    res.redirect("/sub-pages/user/login.html");
     }
   });
};
