import React, { useRef, useState } from "react";
import "./navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  //Code to Toggle/Show Navbar
  const [active, setActive] = useState("navBar");
  const ShowNav = () => {
    setActive("navBar activeNavbar");
  };
  //Code to Remove Navbar
  const RemoveNav = () => {
    setActive("navBar");
  };
  //Code to add Bg color to header
  const [bgHeader, setBgHeader] = useState("header");
  const Bg__Header = () => {
    if (window.scrollY >= 10) {
      setBgHeader("header active__header");
    } else {
      setBgHeader("header");
    }
  };
  window.addEventListener("scroll", Bg__Header);
  // ColorChanger
  const ColorChanger = useRef(null);
  const colors = [
    "#16E0BD",
    "#FAC05E",
    "#DBD053",
    "#E5FCFF",
    "#59C9A5",
    "#05F140",
    "#FFBA08",
  ];
  const HandleChanger = () => {
    const RandomColorGenerator = Math.floor(Math.random() * colors.length);
    ColorChanger.current.style.color = colors[RandomColorGenerator];
  };
  return (
    <section className="navBarSection">
      <div className={bgHeader}>
        <div className="logoDiv">
          <a
            href=""
            className="logo"
            onClick={(e) => {
              e.preventDefault();
            }}>
            <h1
              className="flex heading"
              onClick={HandleChanger}
              ref={ColorChanger}>
              <SiYourtraveldottv className="icon" />
              Sarwan
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="" className="navLinks">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLinks">
                Products
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLinks">
                Resources
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLinks">
                Contact
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLinks">
                Blog
              </a>
            </li>
            <div className="headerBtns flex">
              <button className="btn LoginBtn">
                <a href="#Click">Login</a>
              </button>
              <button className="btn">
                <a href="#">Sign up</a>
              </button>
            </div>
          </ul>
          <div></div>
          <div className="closeNavBar" onClick={RemoveNav}>
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div className="toggleNavBar" onClick={ShowNav}>
          {" "}
          {/* Onclick==>//{()=>{setActive("navBar activeNavbar")}} */}
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
