import React from "react";
import logo from "../../assets/images/logo.png";
import { FaUser } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";
import "./Nav.css";
const menuChange = (e) => {
  const navBar = document.querySelector(".navbarList");
  const menuIcon = document.querySelector(".menuIcon");
  const timesIcon = document.querySelector(".timesIcon");
  menuIcon.classList.toggle("menuIcon2");
  timesIcon.classList.toggle("timesIcon2");
  navBar.classList.add("verticalMenuBar");
};
const timesChange = (e) => {
  const navBar = document.querySelector(".navbarList");
  const menuIcon = document.querySelector(".menuIcon");
  const timesIcon = document.querySelector(".timesIcon");
  menuIcon.classList.toggle("menuIcon2");
  timesIcon.classList.toggle("timesIcon2");
  navBar.classList.remove("verticalMenuBar");
};

const Navbar = () => {
  return (
    <div>
      <div className="Navbar flex items-center justify-between px-3 py-2 overflow-hidden">
        <div className="Logo self-start">
          <img src={logo} alt="Nothing" width={100} />
        </div>
        <nav className="">
          <ul className="navbarList">
            <li>Home</li>
            <li>About Us</li>
            <li>Template</li>
            <li>Blog</li>
          </ul>
        </nav>
        <div className="icon flex items-center gap-5 self-start">
          <FaUser className="bg-[#00DFC2] text-white p-2 rounded-full text-[40px] max-Xs:text-[30px] " />
          <LuMenu
            className="menuIcon text-3xl "
            onClick={(e) => menuChange(e)}
          />
          <LiaTimesSolid
            className=" timesIcon text-3xl"
            onClick={(e) => timesChange(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
