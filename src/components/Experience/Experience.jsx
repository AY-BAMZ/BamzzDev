import React, { useState } from "react";
import "./Index.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Experience() {
  const [experience, setExperience] = useState(1);
  return (
    <div className="experience">
      <div className="container">
        <div className="header">My <span>Experience</span></div>
        {experience === 1 && (
          <>
            <div className="title">Frontend Developer at prevet</div>
            <div className="location">Prevet - Lagos, Nigeria</div>
            <div className="duration">November 2021 - Present</div>
            <h5>
              <li>
                Developed and maintained the company's website, which receives
                over 30,000 monthly visitors.
              </li>
              <li>
                Collaborated with the design team to create intuitive and
                visually appealing user interfaces for the website and mobile
                apps.
              </li>
              <li>Implemented new features and functionality using ReactJS.</li>
              <li>
                Worked closely with the project manager and other developers to
                plan and prioritize work, and to ensure the timely and
                successful delivery of software
              </li>
            </h5>
          </>
        )}
        {experience === 2 && (
          <>
            <div className="title">
              Mobile (Android and IOS) Developer at Spikk
            </div>
            <div className="location">Spikk - Lagos, Nigeria.</div>
            <div className="duration">January 2022 - Present.</div>
            <h5>
              <li>
                Designed and developed a user-friendly and responsive mobile App
                for the company using React Native.
              </li>
              <li>
                Used React Native to develop and launch a successful mobile app
                for iOS and Android.
              </li>
              <li>
                Worked with the design team to create visually appealing Mobile
                App and user interfaces.
              </li>
              <li>
                Used Redux and React Query to dynamic and interactive features
                with states on the Mobile App.
              </li>
              <li>
                Collaborated with other developers to plan and execute Mobile
                App development projects.
              </li>
            </h5>
          </>
        )}
        <div className="direction">
          <div onClick={() => setExperience(1)} className="arrow">
            <FaChevronLeft className="icon" />
            <p>prev</p>
          </div>
          <div onClick={() => setExperience(2)} className="arrow">
            <p>next</p>
            <FaChevronRight className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
