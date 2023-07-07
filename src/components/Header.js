import logo from "../assets/logo.jpg";
import usericon from "../assets/user.jpg";
import hamburger from "../assets/hamburger.jpg";
import search from "../assets/search.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../Utilis/MenuSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_KEY, AUTOCOMPLETE_SERACH_API, VIDEO_INFO_API } from "../Utilis/constants";
import { updateCacheStore } from "../Utilis/searchSlice";
import VideoCard from "./VideoCard";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery]= useState("");
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const dispatch = useDispatch();
  const searchCache = useSelector(store=>store.search);
  const [selectedSearch, setSelectedSearch] = useState("");
const [data, setData] = useState("");
const navigate = useNavigate();

  useEffect(() => {
   const timer=  setTimeout(()=>{
    if(searchCache[searchQuery]){
      setSearchData(searchCache[searchQuery]);
    }else{
      getSearchSuggestions();

    }
    }, 300)
   return ()=>clearTimeout(timer)

  },[searchQuery]);

  useEffect(()=>{
    if(selectedSearch){
      handleSearchAPICall();
    }
  },[selectedSearch])

  const handleSearchAPICall = async ()=>{
      const data = await fetch(VIDEO_INFO_API +selectedSearch+"&key="+ API_KEY);
      const json = await data.json();
      const {items} = json;
      // navigate("/searchResult");
      <VideoCard videoInfo={items[0]}/>
      setData(items);
  }

  const getSearchSuggestions = async () => {
    if (searchQuery) {
      const data = await fetch(AUTOCOMPLETE_SERACH_API + searchQuery);
      const json = await data.json();
      setSearchData(json[1]);
      dispatch(updateCacheStore({[searchQuery]:json[1]}));
    }
  };

  const toggleSideBarMenu = () => {
    dispatch(toggleSideBar());
  };

  return (
    <>
      <div className="flex flex-wrap justify-between p-4 shadow-xl">
        <div className="flex cursor-pointer">
          <img
            src={hamburger}
            alt="menu"
            className="w-16 h-8"
            onClick={() => {
              toggleSideBarMenu();
            }}
          />
          <Link to="/">
            <img src={logo} alt="logo" className="w-25 h-8" />
          </Link>
        </div>
        <div>
          <div className="flex relative">
            <input
              type="text"
              placeholder="Search"
              onChange={e=>setSearchQuery(e.target.value)}
              onFocus={()=>setShowAutoComplete(true)}
              className="w-[40rem] border border-gray-500 rounded-l-full p-2"
            />
            <img
              src={search}
              className="w-10 border border-gray-500 rounded-r-full p-2"
              alt="search"
            />
          </div>
          {(searchQuery && showAutoComplete) && (
            <div className="absolute z-10 bg-white p-2 m-2 w-[40rem]">
              <ul>
                {searchQuery && searchData.length > 0
                  ? searchData.map((search) => (
                      <li
                        key={search} onClick={()=>{
                          setSelectedSearch(search);
                          setShowAutoComplete(false)
                        }}
                        className="p-1 bg-gray-50 hover:bg-gray-300"
                      >
                        {search}
                      </li>
                    ))
                  : searchQuery && <li>no results found</li>}
              </ul>
            </div>
          )}
        </div>
        <div>
          <img src={usericon} alt="logo" className="w-8 h-8" />
        </div>
      </div>
    </>
  );
};

export default Header;
