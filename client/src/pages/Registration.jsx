import { useState } from "react";
import { Form, Button, Card, InputGroup } from "react-bootstrap";
import axios from "axios";
const Registration=()=>{
    const [input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}))
        console.log(input)
    }
     const handleSubmit=async()=>{
        try {
            let api="http://localhost:8000/loginJWT/registration";
            const response=await axios.post(api,input);
            alert(response.data.msg)
        } catch (error) {
            console,log(error)
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
              <Form.Label className="fw-bold">Enter Name</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  className="form-control"
                  name="name" onChange={handleInput}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formUsername" >
              <Form.Label className="fw-bold">Enter Contact No.</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  className="form-control"
                  name="contact" onChange={handleInput}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUsername" >
              <Form.Label className="fw-bold">Enter Email</Form.Label>
              <InputGroup>
                <Form.Control
                  type="email"
                  className="form-control"
                  name="email" onChange={handleInput}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label className="fw-bold">Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type="password"
                  className="form-control"
                  name="password" onChange={handleInput}
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
export default Registration;