import React from 'react';
import usericon from "../assets/user.jpg";

const LiveMessages = ({message}) => {
  return (
    <>    <div className="flex mx-2 my-3">
            <img src={usericon} alt="logo" className="w-5 h-5" />
            <span className="font-bold mx-1">{message.name}</span>
            <span className="mx-1">{message.message}</span>
        </div>
   </>
  )
}

export default LiveMessages