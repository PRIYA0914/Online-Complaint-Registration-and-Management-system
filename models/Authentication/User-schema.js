const mongoose=require("mongoose")
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true //  must be unique
  },
  password: String,
  email:String
});
module.exports=mongoose.model("UserAuth",userSchema)