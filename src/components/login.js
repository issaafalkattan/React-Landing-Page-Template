import React, { useState, useContext } from "react";
// import Box from "@material-ui/core/Box";
// import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
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
  return (

    <div className="login">
<div class="bglogin"></div>
    <p>Arc</p>
   <Card className="loginCard" bg='light' >
    <Form>
  <Form.Group className="mb-3 textfield" controlId="formBasicEmail">
  <h1 className="logintitle">
                {isRegistered ? "Log In" : "Register"}
              </h1>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3 textfield" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Click this button to agree on the disclaimer" />
  </Form.Group>
  <div className="d-grid gap-2">
  <Button  variant="primary" type="submit" size="lg">
  {isRegistered ? "Login" : "Register"}
  </Button>
  <div className="link">
                  <Link onClick={handleClicked}>
                    {isRegistered ? "Register" : "Login"}
                  </Link>
                </div>
                </div>
</Form>
</Card>
    </div>
  );
}
export default Login;
