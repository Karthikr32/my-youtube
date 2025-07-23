import React from 'react'
import './Sidebar.css';
import homeIcon from "../../assets/home.svg";
import exploreIcon from "../../assets/explore.svg";
import subsIcon from "../../assets/subscriptions.svg";
import originIcon from "../../assets/originals.svg";
import musicIcon from "../../assets/youtube-music.svg";
import libraryIcon from "../../assets/library.svg";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="category-block">
        <img src={homeIcon} />
        <div>Home</div>
      </div>

      <div className="category-block">
        <img src={exploreIcon} />
        <div>Explore</div>
      </div>

      <div className="category-block">
        <img src={subsIcon} />
        <div>Subscriptions</div>
      </div>

      <div className="category-block">
        <img src={originIcon} />
        <div>Originals</div>
      </div>

      <div className="category-block">
        <img src={musicIcon} />
        <div>YouTube Music</div>
      </div>

      <div className="category-block">
        <img src={libraryIcon} />
        <div>Library</div>
      </div>
    </div>
  )
}

export default Sidebar
