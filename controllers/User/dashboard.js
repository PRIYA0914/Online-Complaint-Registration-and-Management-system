exports.dashboard=(req,res)=>{
    // res.send("User DashBoard")
    // res.send(req.paras);
    // console.log(req.params.id);
    res.render("UserDashboard", { userID: req.params.id });
}