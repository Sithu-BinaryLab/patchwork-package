import React from "react";
import RadioIcon from "./assets/icons/radio-icon";
import "./SidebarComponent.css"; // Import the CSS file

const SidebarComponent = () => {
  return (
    <div className="sidebar">
      <p className="server-settings">SERVER SETTINGS:</p>
      <div className="border-container">
        <div className="radio-item">
          <RadioIcon />
          <p className="radio-label">Spam Block</p>
        </div>
        <div className="radio-item">
          <RadioIcon />
          <p className="radio-label">Content Moderation</p>
        </div>
        <div className="radio-item">
          <RadioIcon />
          <p className="radio-label">Federation</p>
        </div>
        <div className="ml-4">
          <div className="radio-item">
            <RadioIcon />
            <p className="radio-label">Bluesky</p>
          </div>
          <div className="radio-item">
            <RadioIcon />
            <p className="radio-label">Threads</p>
          </div>
        </div>
        <div className="radio-item">
          <RadioIcon />
          <p className="radio-label">Local Features</p>
        </div>
        <div className="radio-item">
          <RadioIcon />
          <p className="radio-label">User Contact</p>
        </div>
      </div>
      <div className="see-more">See more</div>
    </div>
  );
};

export default SidebarComponent;
