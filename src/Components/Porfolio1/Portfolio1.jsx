import React from "react";
import man from "../../assets/imgs/man.png";
import "./Potfolio.css";
import folio from "../../assets/imgs/folio-1.jpg";
// import folio1 from "../../assets/imgs/folio-2.jpg";
// import folio2 from "../../assets/imgs/folio-3.jpg";
import img from "../../assets/imgs/img-2.jpg";
const Portfolio1 = () => {
  return (
    <div className="PotMain">
      <div className="header">
        <nav className="navBar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
          </ul>
        </nav>
        <div className="userInfo">
          <h2>Hi!</h2>
          <h1>
            I am <span>John Deo</span>
          </h1>
          <p>Frontend Web Developer</p>
          <button>Visit My Work</button>
        </div>
      </div>
      <div id="About" className="flex p-5 justify-center flex-wrap">
        <div className=" max-w-[40%]">
          <img src={man} alt="Man" className="w-full" />
        </div>
        <div className="max-w-[60%] p-8">
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae aliquid ad provident aut fuga animi soluta quae eos non
            cupiditate voluptates dolorem, doloremque quos dicta quibusdam
            impedit iure nemo a iste culpa! Quasi quibusdam hic recusandae
            delectus velit officiis explicabo voluptatibus! Nemo esse similique,
            voluptates labore distinctio, placeat explicabo facilis molestias,
            blanditiis culpa iusto voluptatem ratione eligendi a, quia
            temporibus velit vero ipsa sint ex voluptatum expedita aliquid!
            Debitis, nam!
          </p>
        </div>
      </div>
      <div className="Projects p-5">
        <div>
          <h1 className="text-center font-bold text-[40px] my-5 text-[royalblue]">
            My Projects
          </h1>
          <div className="flex gap-4">
            <a href="#">
              <img src={folio} alt="img1" />
            </a>
            <a href="#">
              <img src={folio} alt="img2" />
            </a>
            <a href="#">
              <img src={folio} alt="img1" />
            </a>
            <a href="#">
              <img src={folio} alt="img1" />
            </a>
          </div>
        </div>
      </div>
      <div className="skills p-5">
        <h1 className="text-center font-bold text-[40px] my-5 text-[royalblue]">
          Skills
        </h1>
        <div className="flex gap-16">
          <div className="max-w-[40%]">
            <img src={img} alt="img" className="w-full shadow-2xl rounded-lg" />
          </div>
          <div className="self-start w-full">
            <div className="skill1">
              {" "}
              <h1>Web developer</h1>
              <input type="range" />
            </div>
            <div className="skill2">
              {" "}
              <h1>Graphic Designer</h1>
              <input type="range" />
            </div>
            <div className="skill3">
              {" "}
              <h1>Game Developer</h1>
              <input type="range" />
            </div>
            <div className="skill4">
              {" "}
              <h1>MERN developer</h1>
              <input type="range" />
            </div>
            <div className="skill5">
              {" "}
              <h1>JAVA developer</h1>
              <input type="range" />
            </div>
          </div>
        </div>
      </div>
      <section id="contact" className="my-4">
        <div className=" text-center">
          <p className="text-center text-[#888] text-[20px]">
            How can you communicate?
          </p>
          <h6 className="text-[royalblue] text-center font-bold my-2 text-[40px] ">
            Contact Me
          </h6>
          <form action="" className="contact-form mt-3">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="flex gap-4">
                <div className="">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="">
                  <input type="email" placeholder="Enter Email" requried />
                </div>
              </div>
              <div className="">
                <textarea
                  name="comment"
                  placeholder="Write Something"
                  cols={54}
                  rows={10}
                ></textarea>
              </div>
              <div className="">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-outline-primary rounded"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
      <footer className=" mt-6 bg-black flex justify-center items-center min-h-[65px] text-white text-center text-[23px] py-10px 0px">
        &copy; Copyright abcWebdeveloper.com All right Reserved 2024-2030{" "}
      </footer>
    </div>
  );
};

export default Portfolio1;
