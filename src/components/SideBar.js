import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

const SideBar = () => {
  const dispatch = useDispatch()
  return (
    <div className='shadow-lg w-44'>
        <ul className=' p-2 m-2'>
            <li className='p-1'><Link to={"/"}>Home</Link></li>
            <li className='p-1'>Shorts</li>
            <li className='p-1'>Subscription</li>
        </ul>
        <hr className='w-[80%] m-auto' />
        <ul className=' p-2 m-2'>
            <li className='p-1'>Your Channel</li>
            <li className='p-1'>History</li>
            <li className='p-1'>PlayList</li>
            <li className='p-1'>Your Videos</li>
            <li className='p-1'>Watch Later</li>
            <li className='p-1'>Liked Videos</li>
        </ul>
        <hr className='w-[80%] m-auto' />
        <ul className=' p-2 m-2'>
            <li className='p-1'>Trending</li>
            <li className='p-1'>Music</li>
            <li className='p-1'>Live</li>
            <li className='p-1'>Gaming</li>
            <li className='p-1'>Films</li>
            <li className='p-1'>Shopping</li>
        </ul>
    </div>
  )
}

export default SideBar