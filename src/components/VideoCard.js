import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({video}) => {

    const thumbnailImg = video?.snippet?.thumbnails?.high?.url;
    const viewCount = video?.statistics?.viewCount; 
    const title =  video?.snippet?.title
    const id = video.id.videoId? video.id.videoId:video.id
  return (
    <Link to={"/watch?v="+id+"&title="+title}>
    <div className='m-2 p-2 shadow-lg w-56'>
        <img className='w-48 rounded-lg' src={thumbnailImg} alt="thumbnail" />
        
        <h1 className='text-wrap font-bold'>{title}</h1>
        <p>views: {viewCount}</p>
    </div>
    </Link>
  )
}

export default VideoCard