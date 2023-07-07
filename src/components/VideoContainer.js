import VideoCard from './VideoCard';
import useVideosList from '../Utilis/useVideosList';

const VideoContainer = () =>{
    const {items} = useVideosList();
    return(
        <div className="p-2 flex flex-wrap">
            {items?.map((videoInfo)=>(
                <VideoCard  key={videoInfo.id} videoInfo={videoInfo}/>
            ))}
           
        </div>
    )
}

export default VideoContainer;