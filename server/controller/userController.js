const UserModel = require("../models/userModels")
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
const Registration = async (req, res) => {
  const { name, contact, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8)
  // console.log(hashedPassword);
  const userRegistration = UserModel.create({
    username: name,
    userContact: contact,
    useremail: email,
    password: hashedPassword
  })
res.status(200).send({msg:"Registration successfully"})
}

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
const UserLogin = await UserModel.findOne({ useremail: email });
    if (!UserLogin) {
      return res.status(400).json({ msg: "Invalid Email" });
    }
    // Compare password
    const isMatch = await bcrypt.compare(password, UserLogin.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Password" });
    }
    // Generate token
    const token = jwt.sign({ id: UserLogin._id }, process.env.TOKEN_KEY, {
      expiresIn: "3d", 
    });
  //  console.log(token)
    return res.status(200).json({token:token});
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};
const UserAuth=async(req,res)=>{
  const token = req.header("auth-token");
  // console.log(token)
  const decoded = jwt.verify(token, process.env.TOKEN_KEY);
  const user = await UserModel.findById(decoded.id);
  res.status(200).send(user);
}
module.exports = {
  Registration,
  Login,
  UserAuth
}