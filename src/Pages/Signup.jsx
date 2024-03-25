import React from "react";
import "../Styles/login-signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <section>
        <form>
          <div>
            <div className="containerls">
              <div className="header1">
                <div className="text" style={{ backgroundColor: "#60cfa5", color:"black" }}>Sign Up</div>
              </div>

              <div className="textboxes" style={{ backgroundColor: "#60cfa5" }}>
                <div className="input" style={{ width: "400px", height: "40px" }}>
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="input" style={{ width: "400px", height: "40px" }}>
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className="input" style={{ width: "400px", height: "40px" }}>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input" style={{ width: "400px", height: "40px" }}>
                  <input type="password" placeholder="Password" />
                </div>

              </div>
              <span className="check" style={{ backgroundColor: "#60cfa5" }}>
                <input type="checkbox" /> By signing up, I agree with the Terms of Use
                and Privacy Policy
              </span>
              <div className="submit-container">
                <div>
                  <button className="submit">Sign Up</button>
                </div>
              </div>
              <span style={{ backgroundColor: "#60cfa5" }} className="login-signup">
                Already have an account? <Link to="/login" style={{ backgroundColor: "#60cfa5" }}>Login</Link>
              </span>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
export default Signup;
