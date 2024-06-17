import React from 'react'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard'

const VideoContainer = () => {
  const videos = useSelector(store=>store?.video?.videos);
  
  if (!videos){
    return null;
  }
  
  return (
    <div className='flex flex-wrap'>
      {videos.map(video=> <VideoCard key={video.id.videoId?video.id.videoId:video.id} video={video} />)}
    </div>
  )
}

export default VideoContainer