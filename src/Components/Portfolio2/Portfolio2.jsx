import React, { useEffect } from "react";
import "./Portfolio2.css";
import man2 from "../../assets/imgs2/man2.jpg";
import pf from "../../assets/imgs2/pf.jpg";
import lmm from "../../assets/imgs2/lmm.jpg";
import blog2 from "../../assets/imgs2/blog2.jpg";
import lpb from "../../assets/imgs2/lpb.jpg";

const Portfolio2 = () => {
  return (
    <div className="PotMain">
      <div className="header2">
        <div>
          <nav style={{ background: "green" }}>
            <ul className="p2ulli" style={{ background: "black" }}>
              <li className="p2ulli">
                <a href="#home" id="home" className="green-a">
                  <b style={{ backgroundColor: "black" }}>Home</b>
                </a>
              </li>
              <li className="p2ulli">
                <a href="#about" className="green-a">
                  <b style={{ backgroundColor: "black" }}>About</b>
                </a>
              </li>
              <li className="p2ulli">
                <a href="#contact" className="green-a">
                  <b style={{ backgroundColor: "black" }}>Contact</b>
                </a>
              </li>
              <li className="p2ulli">
                <a href="#skills" className="green-a">
                  <b style={{ backgroundColor: "black" }}>Skills</b>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div className="inputgreen">
            <h1
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "35px",
                padding: "40px",
                height: "500px",
                minWidth:"200px",
                maxWidth:"850px"
              }}
            >
              Welcome. <br /> I am{" "}
              <span style={{ backgroundColor: "black", color: "green" }}>
                Rice Wood 
              </span>
              , Frontend Web Developer.
            </h1>
            <img
              src={lpb}
              alt="header2"
              className="header2"
              style={{ mixHeight: "200px", maxHeight: "500px",  minWidth:"200px", maxWidth:"850px" }}
            />
          </div>
        </div>

        <div></div>
      </div>
      <div id="about">
        <hr className="hr" />
        <div id="About" className="about-section">
          <div className="image-container">
            <img src={man2} alt="Man" className="man2-image" />
          </div>
          <div className="about-content">
            <span>
              <h1 style={{ color: "green" }}>About Me</h1>
            </span>

            <p style={{ color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae aliquid ad provident aut fuga animi soluta quae eos
              non cupiditate voluptates dolorem, doloremque quos dicta quibusdam
              impedit iure nemo a iste culpa! Quasi quibusdam hic recusandae
              delectus velit officiis explicabo voluptatibus! Nemo esse
              similique, voluptates labore distinctio, placeat explicabo facilis
              molestias, blanditiis culpa iusto voluptatem ratione eligendi a,
              quia temporibus velit vero ipsa sint ex voluptatum expedita
              aliquid! Debitis, nam!
            </p>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="Projects">
        <div className="projects-section">
          <h1 className="section-title">
            <b>My Projects</b>
          </h1>
          <div className="project-gallery">
            <div className="project-item">
              <img
                src={pf}
                alt="Project 1"
                style={{ height: "170px", width: "290px " }}
              />
            </div>
            <div className="project-item">
              <img
                src={lmm}
                alt="Project 2"
                style={{ height: "170px", width: "290px " }}
              />
            </div>
            <div className="project-item">
              <img
                src={blog2}
                alt="Project 3"
                style={{ height: "170px", width: "290px " }}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div id="skills" className="skills-section">
        <h1 className="section-title">
          <b>Skills</b>
        </h1>
        <div className="skill-list">
          <div className="skill">
            <h2>Web Development</h2>
            <input type="range" />
          </div>
          <div className="skill">
            <h2>Graphic Design</h2>
            <input type="range" />
          </div>
          <div className="skill">
            <h2>Game Development</h2>
            <input type="range" />
          </div>
          <div className="skill">
            <h2>MERN Stack</h2>
            <input type="range" />
          </div>
          <div className="skill">
            <h2>JAVA</h2>
            <input type="range" />
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div id="contact">
        <section id="contact" className="contact-section">
          <h1 className="section-title">
            <b>Contact Me</b>
          </h1>
          <form action="" className="contact-form">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <textarea
              name="comment"
              placeholder="Write Something"
              cols="15"
              rows="3"
            ></textarea>
            <input type="submit" value="Send" className="submit-button" />
          </form>
        </section>
      </div>
      <footer className="footer">
        &copy; 2024 Web Developer,{" "}
        <b style={{ backgroundColor: "black" }}>Portfolify</b>. All Rights
        Reserved.
      </footer>
    </div>
  );
};
export default Portfolio2;