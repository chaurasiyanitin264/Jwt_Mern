import { useState } from "react";
import { Form, Button, Card, InputGroup } from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Login=()=>{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
console.log(email,password)
const handleSubmit=async()=>{
  try {
    let api="https://jwt-mern-hkyo.onrender.com/loginJWT/userlogin";
    const response=await axios.post(api,{email:email,password:password});
   if(response.status==200)
   {
    localStorage.setItem("token",response.data.token)
    alert("Login Successfully")
    console.log(response.data.token)
   navigate("/home")
   }
  } catch (error) {
    console.log(error.response.data.msg)
  }
}

    return(
        <>
          <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
        <Card
          className="p-4 shadow"
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "10px",
            // border:"1px solid #4ca1af",
          }}
        >
          <h2 className="text-center mb-2">Login</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formUsername" >
              <Form.Label className="fw-bold">Enter Email</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  className="form-control"
                  name="email" onChange={(e)=>{setEmail(e.target.value)}}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label className="fw-bold">Password</Form.Label>
              <InputGroup>
                
                <Form.Control
                  type="password"
                  className="form-control"
                 name="password" onChange={(e)=>{setPassword(e.target.value)}}
                />
              </InputGroup>
            </Form.Group>
            <Button
              variant="primary"
              className="w-100"
              type="button"
              style={{
                background: "#fd7f20",
                border: "none",
              }}
             onClick={handleSubmit}
            >
              Login
            </Button>
          </Form>
        </Card>
      </div>
        </>
    )
}
export default Login;