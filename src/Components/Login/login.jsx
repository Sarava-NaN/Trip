import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [active2, setActive2] = useState("login_form hidden");
  const Active = (props) => {
    setActive2("login_form show");
  };
  return (
    <>
      <div className={active2} id="Click">
        <span className="borderline"></span>
        <div className="box">
          <form action="">
            <h2>LOGIN:</h2>
            <div className="inputBox">
              <input type="text" required />
              <span>User Name:</span> <i></i>
            </div>
            <div className="inputBox">
              <input
                type="password"
                maxLength={10}
                minLength={8}
                // placeholder="Password"
                required
              />
              <span>Password:</span> <i></i>
            </div>
            <div className="links">
              <a href="#">Forgot Password</a>
              <a href="">Sign Up</a>
            </div>
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
