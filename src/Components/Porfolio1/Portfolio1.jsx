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
              <a href="#home" className="max-xsm:text-[13px] text-[20px]">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="max-xsm:text-[13px] text-[20px]">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="max-xsm:text-[13px] text-[20px]">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#skill" className="max-xsm:text-[13px] text-[20px]">
                Skills
              </a>
            </li>
          </ul>
        </nav>
        <div className="userInfo" id="home">
          <h1 className="text-[44px] max-xms:text-[20px]">
            Hi <br />I am <span>John Deo</span>
          </h1>
          <p className=" text-[20px] max-xsm:text-[17px]">
            Frontend Web Developer
          </p>
          <button className="text-[12px]">Visit My Work</button>
        </div>
      </div>
      <div
        id="About"
        className="flex p-5 justify-center max-md:flex-col max-md:justify-center max-md:items-center"
      >
        <div className=" max-w-[40%]">
          <img src={man} alt="Man" className="w-full" />
        </div>
        <div className="max-w-[60%] p-8 max-md:p-3 max-md:max-w-full ">
          <h1 className=" max-md:text-center">About Me</h1>
          <p className="max-md:text-justify">
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
          <div className="flex gap-4 max-md:flex-col p-3 justify-center items-center">
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
      <div className="skills p-5" id="skill">
        <h1 className="text-center font-bold text-[40px] my-5 text-[royalblue]">
          Skills
        </h1>
        <div className="flex gap-16 max-lg:flex-col justify-center items-center">
          <div className="max-w-[40%] max-lg:max-w-[50%]">
            <img src={img} alt="img" className="w-full shadow-2xl rounded-lg" />
          </div>
          <div className="self-start w-full max-lg:max-w-[90%]">
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
      <section id="contact" className="my-4 ">
        <div>
          <p className="text-center text-[#888] text-[20px]">
            How can you communicate?
          </p>
          <h6 className="text-[royalblue] text-center font-bold my-2 text-[40px] max-xsm:text-[25px]">
            Contact Me
          </h6>
          <form action="" className="contact-form w-full mt-3 p-4">
            <div className="flex flex-col gap-4 justify-center items-center ">
              <div className="flex gap-4 max-xms:flex-col justify-center w-full">
                <div className="">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="max-xms:w-[100%]"
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    requried
                    className="max-xms:w-[100%]"
                  />
                </div>
              </div>
              <div className="w-full">
                <textarea
                  name="comment"
                  placeholder="Write Something"
                  className="w-full mx-auto p-1 focus:outline-none"
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
      <footer className=" mt-6 bg-black flex justify-center items-center min-h-[65px] text-white text-center text-[23px] py-[10px] 0px max-md:text-[15px] max-xssm:text-[10px]">
        &copy; Copyright abcWebdeveloper.com All right Reserved 2024-2030{" "}
      </footer>
    </div>
  );
};

export default Portfolio1;
