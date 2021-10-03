import React, { useState, useContext } from "react";
// import Box from "@material-ui/core/Box";
// import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import Axios from "axios";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
// import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import { Button,Form,Card } from 'react-bootstrap';
import { makeStyles } from "@material-ui/core/styles";
// import Axios from "axios";
// import { SessionContext, setSessionCookie } from "../components/UserContext";
// import { useHistory } from "react-router";


function Login() {
  
  var UserisRegistered = false;
  const [isRegistered, setRegisterState] = useState(true);
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();
  // const { setSession } = useContext(SessionContext);
  function handleClicked(){
    setRegisterState(!isRegistered);
  }
  async function login(event){
    event.preventDefault();
    console.log("signup is called");
    console.log(document.getElementById("username").value);
    let user={
      username:document.getElementById("username").value,
      password:document.getElementById("password").value
    }
    Axios.post('/api/register',user);
  }
  return (

    <div className="login">
<div className="bglogin"></div>
    <p>Arc</p>
   <div className="loginCard" bg='light' >
   <div className="loginCardbg"></div>
    <form>
  <Form.Group className="mb-3 logingroup textfield" controlId="formBasicEmail">
  <h1 className="logintitle">
                {isRegistered ? "Log In" : "Register"}
              </h1>
    {/* <Form.Label className="loginsubtitle">Email address</Form.Label> */}
    <Form.Control style={{borderRadius:"10px"}} id='username' className="logininput" size="lg" as='input' htmlSize='3' type="email" placeholder="Enter email" />
    <Form.Text className="texto">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3 logingroup textfield" controlId="formBasicPassword">
    {/* <Form.Label>Password</Form.Label> */}
    <Form.Control style={{borderRadius:"10px"}} id='password' className="logininput" size="lg" as='input' type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" style={{color:"#1f5bca"}}label="Click this button to agree on the disclaimer" />
  </Form.Group>
  <div className="d-grid gap-2">
  <Button  onClick={login} style={{fontSize:"1.5rem"}} className="roundCorner" id="test" variant="primary" type="submit" size="lg">
  {isRegistered ? "Log In" : "Register"}
  </Button>
  <div className="link">
                  <Link style={{fontSize:"1.2rem"}} onClick={handleClicked}>
                    {isRegistered ? "Register" : "Login"}
                  </Link>
                </div>
                </div>
</form>
</div>
    </div>
  );
}
export default Login;
