import React from "react";
import "./Index.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="header">
          My <span>Portfolio</span>
        </div>

        <div className="row">
          <a href="https://www.zuri.chat/">
            <div className="content">
              <button className="button">View Now</button>
              <div className="box">
                <img
                  src="https://res.cloudinary.com/dmixz7eur/image/upload/v1673579632/my%20portfolio/Frame_787_pgqy61.png"
                  alt=""
                />
                <div className="title">Zuri Chat</div>
              </div>
            </div>
          </a>
          <a href="https://cashaam.com/">
            <div className="content">
              <button className="button">View Now</button>
              <div className="box">
                <img
                  src="https://res.cloudinary.com/dmixz7eur/image/upload/v1675671257/my%20portfolio/Frame_788_kq8ywm.png"
                  alt=""
                />
                <div className="title">Cashaam</div>
              </div>
            </div>
          </a>
          <a href="https://www.rescope.earth/">
            <div className="content">
              <button className="button">View Now</button>
              <div className="box">
                <img
                  src="https://res.cloudinary.com/dmixz7eur/image/upload/v1673576774/my%20portfolio/Frame_780_xusmpl.png"
                  alt=""
                />
                <div className="title">Re Scope</div>
              </div>
            </div>
          </a>
          <a href="https://prevets.com/">
            <div className="content">
              <button className="button">View Now</button>
              <div className="box">
                <img
                  src="https://res.cloudinary.com/dmixz7eur/image/upload/v1673576774/my%20portfolio/Frame_785_iwdp49.png"
                  alt=""
                />
                <div className="title">Prevet</div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="content">
              <button className="button">View Now</button>
              <div className="box">
                <img
                  src="https://res.cloudinary.com/dmixz7eur/image/upload/v1673579846/my%20portfolio/real_home_y9anua.png"
                  alt=""
                />
                <div className="title">Real Home</div>
              </div>
            </div>
          </a>
          <a href="">
            <div className="content">
              <button className="button">View Now</button>
              <div className="box">
                <img
                  src="https://res.cloudinary.com/dmixz7eur/image/upload/v1673580083/my%20portfolio/cover_image_ilxnss.jpg"
                  alt=""
                />
                <div className="title">E-Chef</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
