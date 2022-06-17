import React, { Component } from "react";
import "../styles/login.css";
import "bootswatch/dist/lux/bootstrap.css";

function Login() {
  return (
    <div className="outer-div">
      <div className="login-box">
        <h1>Login/Register</h1>
        <div class="form-group">
          <label for="exampleInputEmail1" class="form-label mt-4">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="form-label mt-4">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <br/>
        <button type="button" class="btn btn-primary">Login</button>
      </div>
    </div>
  );
}

export default Login;
