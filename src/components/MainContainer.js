import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { YOUTUBE_API } from '../utils/headerConstants'
import { addVideos } from '../utils/movieSlice'
import { openMenu } from '../utils/toggleMenuSlice'
import ButtonContainer from './ButtonContainer'
import VideoContainer from './VideoContainer'

const MainContainer = () => {

    const dispatch = useDispatch()

    const fetchVideo = async()=>{
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_API);

        const json = await data.json();

        dispatch(addVideos(json.items))
        
    }

    const videos = useSelector(store=>store?.video?.videos);
    dispatch(openMenu())

    useEffect(()=>{
        {!videos && fetchVideo()}
    },[])


  return (
    <div>
        <ButtonContainer/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer