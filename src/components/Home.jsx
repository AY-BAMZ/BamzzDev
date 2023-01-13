import React, { useState } from "react";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Portfolio from "./Portfolio/Portfolio";
import Skills from "./Skills/Skills";
import Social from "./Social/Social";
import "./Index.css";
import { CgMenuRight } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";

function Home() {
  const [active, setActive] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="home">
      <div className="container">
        <div className="navbar">
          <div onClick={() => setActive(1)} className="logo">
            <img
              src="https://res.cloudinary.com/dmixz7eur/image/upload/v1673583454/my%20portfolio/logo_wzrddg.png"
              alt=""
            />

            <div className="myName">
              <div className="name">Ayobami Paul</div>
              <p>{active}</p>
            </div>
          </div>
          <div className="toggleMenu">
            <div onClick={() => setOpenMenu(true)} className="menu">
              <CgMenuRight />
            </div>
            <div className={openMenu === true ? "menuLinks" : "closeMenu"}>
              <div onClick={() => setOpenMenu(false)} className="close">
                <MdOutlineClose />
                 <p>Close</p>
              </div>
              <div
                onClick={() => {setActive(1); setOpenMenu(false);}}
                className={active === 1 ? "navLinkActive" : "navLink"}
              >
                <li>Home</li>
              </div>
              <div
                onClick={() => {setActive(2); setOpenMenu(false);}}
                className={active === 2 ? "navLinkActive" : "navLink"}
              >
                <li>About Me</li>
              </div>
              <div
                onClick={() => {setActive(3); setOpenMenu(false);}}
                className={active === 3 ? "navLinkActive" : "navLink"}
              >
                <li>Portfolio</li>
              </div>
              <div
                onClick={() => {setActive(4); setOpenMenu(false);}}
                className={active === 4 ? "navLinkActive" : "navLink"}
              >
                <li>Experience</li>
              </div>
              <div
                onClick={() => {setActive(5); setOpenMenu(false);}}
                className={active === 5 ? "navLinkActive" : "navLink"}
              >
                <li>Skills</li>
              </div>
              <div
                onClick={() => {setActive(6); setOpenMenu(false);}}
                className={active === 6 ? "navLinkActive" : "navLink"}
              >
                <li>Contact</li>
              </div>
            </div>
          </div>
          <div className="navLinks">
            <div
              onClick={() => setActive(2)}
              className={active === 2 ? "navLinkActive" : "navLink"}
            >
              <li>About Me</li>
              <div className="activeLine"></div>
            </div>
            <div
              onClick={() => setActive(3)}
              className={active === 3 ? "navLinkActive" : "navLink"}
            >
              <li>Portfolio</li>
              <div className="activeLine"></div>
            </div>
            <div
              onClick={() => setActive(4)}
              className={active === 4 ? "navLinkActive" : "navLink"}
            >
              <li>Experience</li>
              <div className="activeLine"></div>
            </div>
            <div
              onClick={() => setActive(5)}
              className={active === 5 ? "navLinkActive" : "navLink"}
            >
              <li>Skills</li>
              <div className="activeLine"></div>
            </div>
            <div
              onClick={() => setActive(6)}
              className={active === 6 ? "navLinkActive" : "navLink"}
            >
              <li>Contact</li>
              <div className="activeLine"></div>
            </div>
          </div>
        </div>
        <div className="mainContent">
          {active === 1 && <Hero />}
          {active === 2 && <AboutMe />}
          {active === 3 && <Portfolio />}
          {active === 4 && <Experience />}
          {active === 5 && <Skills />}
          {active === 6 && <Contact />}
        </div>
        <div className="social">
          <Social />
        </div>
      </div>
    </div>
  );
}

export default Home;
