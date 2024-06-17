import React from 'react'
import { PROFILE_LOGO } from '../utils/headerConstants'

const Comments = ({comment}) => {
  const name = comment?.snippet?.topLevelComment?.snippet?.authorDisplayName
  const text = comment?.snippet?.topLevelComment?.snippet?.textDisplay

  return (
    <div className='flex mx-8 my-2 shadow-lg rounded-lg bg-gray-300'>
        <img className="w-8 mx-4 my-auto" src={PROFILE_LOGO} alt="profile" />
        <div>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comments