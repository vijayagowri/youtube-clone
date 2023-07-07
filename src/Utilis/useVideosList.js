import { useEffect, useState, } from "react";
import { API_KEY, YOUTUBE_LIST_API } from "./constants";

const useVideosList = ()=>{
   const [videosList, setVideosList] = useState([]);
    const getVideosList = async ()=>{
        const data = await fetch(YOUTUBE_LIST_API+API_KEY);
        const json = await data.json();
        setVideosList(json);
    }

   useEffect(()=>{
    getVideosList();
   }, [])
   return videosList;
   
}

export default useVideosList;