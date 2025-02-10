const express= require("express");
const app= express();
const cors= require("cors");
const mongoose=require("mongoose");
require("dotenv").config();
const bodyparser = require('body-parser');
const port =process.env.PORT ||8000;
const MNDB=process.env.DBCONN;
const UserRoutes=require("./routes/userRoutes");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


mongoose
  .connect(MNDB)
  .then(() => {
    console.log("DB Connected!!!");
  })
  .catch((err) => {
    console.error("DB Connection Error:", err);
  });


app.use("/loginJWT",UserRoutes);


app.listen(port, ()=>{
    console.log("Server run on 8000 port!");
})