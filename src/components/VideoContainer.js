import React, { useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingVideos } from "../utils/videoSlice";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  // Subscribing to the store

  const dispatch = useDispatch();
  // Fetching the video data
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // Updating the store
    dispatch(addNowPlayingVideos(json.items));
  };
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      <VideoCard />
    </div>
  );
};

export default VideoContainer;
