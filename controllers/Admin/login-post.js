const Admin=require("../../models/Authentication/Admin-schema")
const mongoose=require("mongoose")
exports.login=(req,res)=>{
    Admin.find((err,docs)=>{
        if(err){
            res.sendStatus(500)
        }else{
            if (docs[0].name===req.body.name && docs[0].password===req.body.password) {
                res.sendStatus(200)
            } else {
                res.sendFile(__dirname+"/unauthorized.html")
            }
        }
    })
}