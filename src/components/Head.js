import React, { useEffect, useState } from "react";
import {
  MENU_CDN,
  USER_ICON,
  YOUTUBE_CDN,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestions(json[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="bg-white p-4 shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src={MENU_CDN}
        />
        <a href="/" className="ml-2">
          <img className="h-8" alt="youtube-logo" src={YOUTUBE_CDN} />
        </a>
      </div>
      <div className="flex items-center flex-grow">
        <div className="relative w-full pl-60">
          <input
            className="px-5 py-2 w-1/2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            placeholder="Search on YouTube"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 focus:outline-none">
            Search
          </button>
          {showSuggestions && (
            <div className="absolute mt-2 w-[26rem] bg-white border border-gray-300 rounded-lg shadow-lg">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <img className="h-8 ml-4 cursor-pointer" alt="user" src={USER_ICON} />
    </div>
  );
};

export default Head;
