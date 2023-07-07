import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideMenuBar } from "../Utilis/MenuSlice";
import { useSearchParams  } from 'react-router-dom';
// import useVideoInfo from '../Utilis/useVideoInfo';
import CommentsConatiner from "./CommentsConatiner";
import Livechat from "./Livechat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const params = searchParams.get("id");
//   const videoInfo = useVideoInfo(params);
//  const data =videoInfo.items[0];
//   const {snippet, statistics} = data;
//   const {channelTitle, title, description, localized} = snippet;

  useEffect(() => {
    dispatch(hideMenuBar());
  }, []);

  return (<>
    <div className="p-4">
    <div className="font-bold text-2xl">title</div>

      <div className="flex flex-initial">
      <div>
      <iframe width="1000" height="400" src={"https://www.youtube.com/embed/"+params} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      {/* <div className="flex justify-between">
      <div className="text-2xl">{localized?.title}</div>
      <div>{channelTitle}</div>
      </div> */} 
     <Livechat />
      </div>
      
      <div className="p-2 m-2">
        <div className='text-2xl font-bold '>Comments</div>
      <CommentsConatiner className=" p-2 m-2"/>
      </div>
    

    </div>
    </> );
};

export default WatchPage;
