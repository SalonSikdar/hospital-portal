import React, { useState } from "react";
import "../styles/login.css";
import "bootswatch/dist/lux/bootstrap.css";
import _ from "lodash";

function Login() {
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Submit clicked");
    //encode password email here
    //call API to verify password
    //on success response show alert
    if (_.isEmpty(email)) {
      alert("Email is empty");
    } else {
      if (_.isEmpty(password)) {
        alert("Password is Empty");
      } else {
        alert("Login Successful");
      }
    }
  };

  return (
    <div className="outer-div">
      <div className="login-box">
        <h1>Login/Register</h1>
        <div className="form-group" onSubmit={handleSubmit}>
          <label className="form-label mt-4">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label className="form-label mt-4">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => handleSubmit()}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
