import React, {useState} from "react";
import "./Login.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Login() {
	 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const signIn = e =>{
	 e.preventDefault();
	 
 }

 const register =e =>{
	 e.preventDefault();
	 
 }


  return (

    
	  <div className="login">
        
		<Link to="/">
        <img
          className="login_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
		</Link>

          <Col md={{span: 6, offset: 3}}>
		  <div className="login__container">
		  	  <h1>Sign in</h1>
<form>
<h5>E-mail</h5>
<input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

<h5>Password</h5>
<input type="text" value={password} onChange={e => setPassword(e.target.value)}/>

<button className="login__signinBtn" onClick={signIn} type="submit">Sign In</button>
</form>
<p> 
By signing-in you agree to the AMAZON FAKE CLONE conditions of use & Sale.
 Please see our Privacy Notice
,Our Cookies Notice and our Interest-Based Ads Notice
</p>
<Button className="login__registerBtn" type="submit" onClick={register}>Create your amazon account</Button>
		  </div>
	
		  </Col>
       
</div>
     
    
  );
}

export default Login;
