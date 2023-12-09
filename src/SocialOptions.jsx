import React from "react";
import "./social-options.css";

const SocialOptions = ({ src, color }) => {
  return (
    <div className="social-options" style={{ background: "#" + color }}>
      <a href="#">
        <img src={src} alt="Icon" className="social-options__icon" />
      </a>
    </div>
  );
};

export default SocialOptions;
