const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    username:String,
    userContact:Number,
    useremail:String,
    password:String
})
module.exports=mongoose.model("JwtLogin",userSchema)