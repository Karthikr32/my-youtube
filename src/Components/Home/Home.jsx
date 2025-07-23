import React from "react";
import "./Home.css";
import { media } from "../../Utils/data";

const Home = () => {
  return (
    <div className="container-grid">
      {media.map((item) => {
        return (
          <div className="container-one" key={item.id}>
            <a className="all-video-links" href={item.link}>
              <div className="thumbnail-div">
                <img className="thumbnail-1" src={item.thumbnail} />
                <div className="video-time">{item.videoTime}</div>
              </div>

              <div className="div-icon-info">
                <div className="icon-one">
                  <img src={item.icon} />
                </div>

                <div className="mini-info">
                  <p className="para-head">{item.title}</p>
                  <p id="para1">{item.channel}</p>
                  <p id="para2">{item.subCount}</p>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
