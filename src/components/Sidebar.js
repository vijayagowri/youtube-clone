const Sidebar = ()=>{
    return(
        <div className="text-left m-3">
            <div className="font-bold p-2">Home</div>
            <div className="p-2"> Shorts</div>
            <div className="p-2">Subscriptions</div>
            <hr />
            <div className="mt-2">
                <ul>
                    <li className="p-2">History</li>
                    <li className="p-2">Liked Videos</li>
                    <li className="p-2">Watch later</li>
                    <li className="p-2">Library</li>
                    <li className="p-2">Home</li>
                    </ul>
            </div>
        </div>
    )
}
export default Sidebar;