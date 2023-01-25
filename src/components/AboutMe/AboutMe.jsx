import React from "react";
import "./Index.css";
import MyFile from "../../assets/myfile.pdf"

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="container">
        <div className="header">
          About<span> Me</span>
        </div>
        <h4>
          I am a skilled Frontend Developer with 3 years of experience in the
          industry. I have a strong background in mobile development and have
          expertise in using React and React Native. I have worked with
          companies such as Prevet (a car vetting platform), Zurichat (a work
          management and organization management platform), and Spikk (a
          platform that manages people's errands and delivers their wants).{" "}
          <br /> <br /> In addition to my experience in the tech industry, I
          also hold a degree in Mechanical Engineering which has given me a
          unique perspective and approach to problem-solving in my field. I am
          passionate about delivering high-quality and user-friendly products
          and am always eager to learn and grow as a developer. I am also an
          active contributor to open-source projects, and am comfortable using
          various frameworks. Overall, I am a skilled developer with a diverse
          set of abilities, and am excited to bring my expertise to new projects
          and challenges.
        </h4>
        <a href={MyFile} download="Ayobami Paul Adegbohungbe Resume" style={{alignItems: "left", display: 'flex'}}>

        <button>Download Resume</button>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
