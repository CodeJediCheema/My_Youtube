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

const VideoCard = () => {
  const videoData = useSelector((store) => store?.videos?.nowPlayingVideos);

  if (!videoData || videoData.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {videoData.map((video) => {
        const { snippet, statistics } = video;
        const { channelTitle, title, thumbnails } = snippet;
        const viewCountFormatted = formatViewCount(statistics.viewCount);

        return (
          <div
            key={video.id}
            className="w-52 bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              className="w-full h-40 object-cover"
              alt="video"
              src={thumbnails.high.url}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-gray-500">{channelTitle}</p>
              <p className="text-gray-500">{viewCountFormatted}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoCard;
