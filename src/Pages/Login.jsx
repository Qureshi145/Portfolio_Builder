import React from "react";
import "../Styles/login-signup.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section>
        <form>
          <div className="bg">
            <div className="containerls">
              <div className="header1">
                <div className="text" style={{ backgroundColor: "#60cfa5", color:"black" }}>Login</div>
              </div>
              <div className="textboxes" style={{ backgroundColor: "#60cfa5" }}>
                <div className="input" style={{ width: "400px", height: "40px" }}>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input" style={{ width: "400px", height: "40px" }}>
                  <input type="password" placeholder="Password" />
                </div>
              </div>
              <span className="check" style={{ backgroundColor: "#60cfa5" }}>
                <input type="checkbox" /> Remember me on this device
              </span>
              <div className="submit-container">
                <div>
                  <button className="submit">Login</button>
                </div>
              </div>
              <span className="login-signup" style={{ backgroundColor: "#60cfa5" }}>
                Don't have an account? <Link to="/signup" style={{ backgroundColor: "#60cfa5" }}>Sign Up</Link>
              </span>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
export default Login;
