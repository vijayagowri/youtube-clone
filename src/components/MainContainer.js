import ButtonGroup from "./ButtonGroup";
import VideoConatiner from './VideoContainer'
const MainContainer = () =>{
    const buttons =["All", "Live", "Mixes", "Music", "Stock Market", "Danush", "News", "Kids", "Movies", "Latest", "Top", "Highlights", "Trending"]
    return(
        <div className="w-4/5">
        <div className="mt-4">
           { buttons.map((button)=>(
            <ButtonGroup key={button} data={button} />
           ))
           }
        </div>
        <VideoConatiner / >
        </div>
    )
}

export default MainContainer;