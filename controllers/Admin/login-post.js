const Admin=require("../../models/Authentication/Admin-schema")
const Complaints=require("../../models/Complaint-schema")
const mongoose=require("mongoose")
let doc=
Complaints.find((err,docs)=>{
    doc=docs
})
exports.login=(req,res)=>{
    Admin.find((err,docs)=>{
        if(err){
            res.sendStatus(500)
        }else{
            if (docs[0].name===req.body.name && docs[0].password===req.body.password) {
                res.render("AdminDashboard",{complaints:doc})
                // console.log(doc);
            } else {
                res.sendFile(__dirname+"/unauthorized.html")
            }
        }
    })
}