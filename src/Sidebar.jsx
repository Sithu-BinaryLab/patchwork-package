import React from "react";
import RadioIcon from "./assets/icons/radio-icon";

const SidebarComponent = () => {
  return (
    <div className="bg-black py-4">
      <p className="font-bold text-[11px] text-pathwork-label">
        SERVER SETTINGS:
      </p>
      <div className="border border-pathwork-border mt-4 p-3">
        <div className="flex space-x-3">
          <RadioIcon />
          <p className="text-white text-[11px] font-extrabold">Spam Block</p>
        </div>
        <div className="flex space-x-3 my-3">
          <RadioIcon />
          <p className="text-white text-[11px] font-extrabold">
            Content Moderation
          </p>
        </div>
        <div className="flex space-x-3">
          <RadioIcon />
          <p className="text-white text-[11px] font-extrabold">Federation</p>
        </div>
        <div className="ml-4">
          <div className="flex space-x-3 my-3">
            <RadioIcon />
            <p className="text-white text-[11px] font-extrabold">Bluesky</p>
          </div>
          <div className="flex space-x-3">
            <RadioIcon />
            <p className="text-white text-[11px] font-extrabold">Threads</p>
          </div>
        </div>
        <div className="flex space-x-3 my-3">
          <RadioIcon />
          <p className="text-white text-[11px] font-extrabold">
            Local Features
          </p>
        </div>
        <div className="flex space-x-3">
          <RadioIcon />
          <p className="text-white text-[11px] font-extrabold">User Contact</p>
        </div>
      </div>
      <div className="border border-white text-white text-center py-2 font-bold text-community mt-4">
        See more
      </div>
    </div>
  );
};

export default SidebarComponent;
