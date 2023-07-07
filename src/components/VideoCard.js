import { Link } from "react-router-dom";

const VideoCard = ({videoInfo})=>{
   const {id, snippet, statistics  } = videoInfo;
   const {thumbnails, channelTitle, title} = snippet;
    return(
        <Link to={'/watch?id='+id}>
        <div className="p-2 m-2 cursor-pointer">
            <img src={thumbnails?.high?.url} alt={title} className="h-[17rem] rounded-lg border border-gray-50"/>
            <div>
            <div className="text-ellipsis overflow-hidden truncate hover:text-clip max-w-[14rem] font-bold">{title}</div>
            <div className="flex justify-between">
                <div>{channelTitle}</div>
            <div>{statistics?.viewCount} Views</div>
            </div>
           
            </div>
          
        </div>
        </Link>
    )
}

export default VideoCard;