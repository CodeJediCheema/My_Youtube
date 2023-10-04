import React from "react";
import { useSelector } from "react-redux";

const formatViewCount = (viewCount) => {
  if (viewCount >= 1000000) {
    return `${(viewCount / 1000000).toFixed(1)}M views`;
  } else if (viewCount >= 1000) {
    return `${(viewCount / 1000).toFixed(1)}K views`;
  } else {
    return `${viewCount} views`;
  }
};

const VideoCard = ({ data }) => {
  const toggleMenuHandler = useSelector((store) => store.app.isMenuOpen);
  if (!data || data.length === 0) {
    return null;
  }
  const { snippet, statistics } = data;
  const { channelTitle, title, thumbnails } = snippet;
  const viewCountFormatted = formatViewCount(statistics.viewCount);

  return (
    <div className={`p-2 m-2 shadow-lg ${toggleMenuHandler ? "w-64" : "w-72"}`}>
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.high.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCountFormatted} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
