import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import commentsData from "../utils/commentsData";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const videoParams = searchParams.get("v");
  console.log(videoParams);

  // Have to Dispatch an action only once
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col">
      <div className="pt-20 pl-10">
        <iframe
          className="rounded-xl"
          width="800"
          height="400"
          src={"https://www.youtube.com/embed/" + videoParams}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <CommentsContainer data={commentsData} />
      </div>
    </div>
  );
};

export default WatchPage;
