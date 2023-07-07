import {useState, useEffect} from 'react';
import { API_KEY, VIDEO_INFO_API } from './constants';

const useVideoInfo = (id)=>{
    const [videoData, setVideoData] = useState({});
    useEffect((id)=>{
        getVideoInfo(id);
    }, [])

    const getVideoInfo = async (id)=>{
        const data = await fetch(VIDEO_INFO_API+id+'&key='+API_KEY);
        const json = await data.json();
        setVideoData(json);
    }
    return videoData;
}

export default useVideoInfo;

