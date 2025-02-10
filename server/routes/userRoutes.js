const express=require("express");
const route=express.Router();
const UserController=require("../controller/userController")

route.post("/registration",UserController.Registration)
route.post("/userlogin",UserController.Login)
route.post("/userauth",UserController.UserAuth)
module.exports=route;