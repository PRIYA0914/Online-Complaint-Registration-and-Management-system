exports.dashboard=(req,res)=>{
    // res.send("User DashBoard")
    // res.send(req.paras);
    // console.log(req.params.id);
    // using params.id -- search in database
    res.render("UserDashboard", { userID: req.params.id });
}