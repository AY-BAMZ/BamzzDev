import React, { useState } from "react";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Portfolio from "./Portfolio/Portfolio";
import Skills from "./Skills/Skills";
import Social from "./Social/Social";
import "./Index.css";

function Home() {
  const [active, setActive] = useState(1);
  return (
    <div className="home">
      <div className="container">
        <div className="navbar">
          <div onClick={() => setActive(1)} className="logo">
            <img
              src="https://res.cloudinary.com/dmixz7eur/image/upload/v1673557941/logo_ary4sc.png"
              alt=""
            />
            
        <div className="myName">
          <div className="name">Ayobami Paul</div>
          <p>{active}</p>
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
