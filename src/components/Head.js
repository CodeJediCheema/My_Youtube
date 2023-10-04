import React from "react";
import { MENU_CDN, USER_ICON, YOUTUBE_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="bg-white shadow-md p-2 flex items-center justify-between fixed w-full">
      <div className="flex items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 mr-2 pl-2 cursor-pointer"
          alt="youtube-menu"
          src={MENU_CDN}
        />
        <a href="/">
          <img className="h-12" alt="youtube-logo" src={YOUTUBE_CDN} />
        </a>
      </div>
      <div className="flex items-center">
        <input
          className="w-96 border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-300 text-white rounded-r-full px-4 py-2 hover:bg-gray-200 focus:outline-none">
          🔍
        </button>
      </div>
      <div className="flex items-center">
        <img className="h-8 pr-2" alt="user-icon" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
