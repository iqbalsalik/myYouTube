import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_API } from "../utils/headerConstants";
import { closeMenu, toggleTheMenu } from "../utils/toggleMenuSlice";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [comments, setComments] = useState()
  const [searchParam] = useSearchParams();
  const param = searchParam.get("v");
  const title = searchParam.get("title")
  const dispatch = useDispatch();


  const fetchComments = async()=>{
    const data = await fetch("https://www.googleapis.com/youtube/v3/commentThreads?key="+YOUTUBE_API+"&textFormat=plainText&part=snippet&videoId="+param+"&maxResults=50")
    const json = await data.json();
    setComments(json.items)
  }

  dispatch(closeMenu())


  useEffect(()=>{
    fetchComments()
  },[])


  return (
   <div>
     <div className="m-3 p-3">
      <iframe
        width="900"
        height="450"
        src={"https://www.youtube.com/embed/" + param + "?si=ltceF0tc9PoCwtD6"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    <h1 className="font-bold text-lg mx-8">{title}</h1>
    <CommentContainer comments={comments}/>
   </div>
  );
};

export default WatchPage;
