import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  MENU_LOGO,
  PROFILE_LOGO,
  YOUTUBE_API,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/headerConstants";
import { addVideos } from "../utils/movieSlice";
import { addSearchSuggestions } from "../utils/suggestionSlice";
import { toggleTheMenu } from "../utils/toggleMenuSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchTxt, setSearchTxt] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState()
  const navigate= useNavigate();

  const toggleMenuHandler = () => {
    dispatch(toggleTheMenu());
  };

  const searchResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API+searchTxt);
    const json = await data.json();
    setSearchSuggestions(json[1])
    dispatch(addSearchSuggestions({[searchTxt]:json[1]}))
  };

  const cache = useSelector(store=>store?.suggestion?.value)

  useEffect(() => {
   const timer =  setTimeout(() => {
    {!cache[searchTxt] && searchResults();}
    }, 400);

    return ()=>{
      clearTimeout(timer)
    }

  }, [searchTxt]);

  const searchByKeyword = async(keyWord)=>{
    const data = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+(keyWord)+"&maxResults=50&order=viewCount&key="+YOUTUBE_API);
    const json = await data.json();
    dispatch(addVideos(json.items))
    setShowSuggestions(false)
    navigate("/")

  }


  return (
    <div className="flex justify-between shadow-lg">
      <div className="flex  p-4">
        <img
          className="p-2 mx-2 w-14"
          src={MENU_LOGO}
          alt="menu"
          onClick={toggleMenuHandler}
        />
       <Link to={"/"} ><img className="w-24 p-4 ml-1" src={YOUTUBE_LOGO} alt="Logo" /></Link>
      </div>
      <div className="mt-7  w-1/3 -ml-24">
        <div>
        <input
          className="border border-black roun w-96 p-1 rounded-l-full"
          type="text"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur ={()=>setTimeout(() => {
            setShowSuggestions(false)
          },300)}

        />
        <button className="border border-black p-1 rounded-r-full bg-gray-200">
          🔍
        </button>
       { showSuggestions && <div className="absolute bg-white w-96 border border-gray-400 rounded-lg">
          <ul>
           { searchSuggestions.map(s=><li key={s} className="p-1 font-bold hover:bg-gray-300 cursor-pointer" onClick={()=>searchByKeyword(s)}>{s}</li>)}
            
          </ul>
        </div>}
        </div>
      </div>
      <div>
        <img className="w-8 mt-6 mr-8" src={PROFILE_LOGO} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
