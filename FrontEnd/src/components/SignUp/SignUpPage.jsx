import React, { useState } from "react";
import axios from "axios";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputChangeHandler = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userData);
    axios.post("http://localhost:8080/api/signup", userData).then(resp => {
        alert(resp.data.message);
    })
  };
  return (
    <div className="sign-up-container">
      <div className="sign-up-form-container">
        <h2>Sign Up</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={inputChangeHandler}
            placeholder="Enter name"
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={inputChangeHandler}
            placeholder="Enter email"
          />
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={inputChangeHandler}
            placeholder="Create your password"
          />
          <input
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={inputChangeHandler}
            placeholder="Confirm your password"
          />
          <div className="buttons">
            <button type="submit">sign up</button>
            <p className="login-text">Already have an account?</p>
            <button disabled="disabled">sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
