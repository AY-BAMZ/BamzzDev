import React from "react";
import "./Index.css";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="image">
          <img
            src="https://res.cloudinary.com/dmixz7eur/image/upload/v1673565815/my_image_bp3cw9.png"
            alt=""
          />
        </div>
        <div className="title">
          <p>
            I am an artistic
            <span>
              
              <TypeAnimation
                sequence={[
                  "frontend developer", // Types 'One'
                  2000, // Waits 1s
                  "mobile developer", // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  "react developer ", 
                  2000, // Waits 2s
                  "react native developer ",// Types 'Three' without deleting 'Two'
                  2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
