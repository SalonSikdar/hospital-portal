import React, { Component } from "react";
import "../styles/login.css";
import "bootswatch/dist/lux/bootstrap.css";

function Login() {
  return (
    <div className="outer-div">
      <div className="login-box">
        <h1>Login/Register</h1>
        <div className="form-group">
          <label for="exampleInputEmail1" className="form-label mt-4">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1" className="form-label mt-4">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <br/>
        <button type="button" className="btn btn-primary">Login</button>
      </div>
    </div>
  );
}

export default Login;
