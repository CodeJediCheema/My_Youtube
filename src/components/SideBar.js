import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const toggleMenuHandler = useSelector((store) => store.app.isMenuOpen);
  // Early return
  if (!toggleMenuHandler) return;
  return (
    <div className="shadow-xl w-44 px-4 ">
      <ul className="py-4 pt-20">
        <li>
          <Link to={"/"}>Home</Link>{" "}
        </li>
        <li> Shorts</li>
        <li> Subscriptions</li>
        <li> Youtube Music</li>
      </ul>
      <hr></hr>
      <ul className="py-4">
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Downloads</li>
      </ul>
      <hr></hr>
      <h1 className="font-bold">Explore</h1>
      <ul className="py-4">
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learning</li>
      </ul>
      <hr></hr>
      <h1 className="font-bold">Subscriptions</h1>
      <ul className="py-4">
        <li>XYZ News</li>
        <li>Team Racing</li>
        <li>Apple</li>
        <li>Google</li>
      </ul>
    </div>
  );
};

export default SideBar;
