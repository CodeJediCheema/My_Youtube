import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";

import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);

  // Fetching the video data
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();

    setVideo(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {video.map((videoData) => (
        <Link to={"/watch?v=" + videoData.id}>
          <VideoCard key={videoData.id} data={videoData} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
