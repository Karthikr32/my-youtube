import React from "react";
import "./Navbar.css";
import search from "../../assets/search.svg";
import threeBars from "../../assets/hamburger-menu.svg";
import logo from "../../assets/youtube-logo.svg";
import logo2 from "../../assets/logo.jpeg";
import voiceIcon from "../../assets/voice-search-icon.svg";
import uploadIcon from "../../assets/upload.svg";
import appsIcon from "../../assets/youtube-apps.svg";
import notificationIcon from "../../assets/notifications.svg";

const Navbar = () => {
  return (
    <div>
      <div className="header-Section">
        <div className="left-Section">
          <img className="three-Bars" src={threeBars} />
          <img className="youtube-logo" src={logo} />
          <img className="youtube-logo2" src={logo2} />
        </div>

        <div className="mid-Section">
          <input className="search-bar" type="search" placeholder="Search" />

          <div className="div-tooltip">
            <button className="search-but">
              <img className="search-icon" src={search} />
            </button>
            <div className="tooltip">Search</div>
          </div>

          <div className="div-tooltip">
            <button className="voice-but">
              <img className="voice-icon" src={voiceIcon} />
            </button>
            <div className="tooltip">Search with your Voice</div>
          </div>
        </div>

        <div className="right-Section">
          <div className="div-tooltip">
            <img className="create" src={uploadIcon} />
            <div className="tooltip">Create</div>
          </div>

          <div className="div-tooltip">
            <img className="boxes" src={appsIcon} />
            <div className="tooltip">Youtube Apps</div>
          </div>

          <div className="div-tooltip">
            <div className="notifications">
              <img className="notification-bell" src={notificationIcon} />
              <div className="notification-num">3</div>
              <div className="tooltip">Notifications</div>
            </div>
          </div>

          <div className="div-tooltip">
            <div className="profile">K</div>
            <div className="tooltip">Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
