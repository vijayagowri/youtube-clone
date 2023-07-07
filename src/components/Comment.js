import React from "react";
import usericon from "../assets/user.jpg";
import { useState } from "react";

const Comment = ({ name, description, replies, id }) => {
  const [isReplyClicked, setIsReplyClicked] = useState(false);
  const [replyText, setReplyText] = useState("false");
  const [repliesList, setrepliesList] = useState(replies);
  return (
    <div className="flex p-1 m-2 bg-gray-200 shadow-sm">
      <div className="mr-2">
        <img src={usericon} alt="logo" className="w-6 h-6 mt-3" />
      </div>
      <div className="text-sm	">
        <div>{name}</div>
        <div>{description}</div>
        <div>{id}</div>
        {!isReplyClicked && (
          <button
            className="bg-slate-50 p-1 m-1"
            onClick={(id) => {
              setIsReplyClicked(true);
            }}
          >
            Reply
          </button>
        )}

        {isReplyClicked && (
          <>
            <input
              type="text"
              className="p-2"
              onChange={(e) => setReplyText(e.target.value)}
            />{" "}
            <button
              className="bg-slate-50 p-2"
              onClick={() => {
                let obj = {
                  name: name,
                  description: replyText,
                  id: "2",
                  replies: [],
                };
                console.log(obj);
              }}
            >
              Submit
            </button>
            <button
              className="bg-slate-50 ml-2 p-2"
              onClick={() => setIsReplyClicked(false)}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Comment;
