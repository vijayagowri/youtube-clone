import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToMessages } from "../Utilis/liveChatSlice";
import { randomNameGenerate, randomStringGenerate } from "../Utilis/helper";
import LiveMessages from "./LiveMessages";

const Livechat = () => {
const dispatch = useDispatch();
const liveMessages = useSelector(store=>store.liveChat.messages);
const [textMes, setTextMes] = useState("");
  useEffect(()=>{
   const chatInterval = setInterval(()=>{
    dispatch(addToMessages({
      name: randomNameGenerate(),
      message:randomStringGenerate(25)
    }))
    },200)
    return ()=>{
      clearInterval(chatInterval)
    }
  }, [])
   
  return (
    <>
      <div className="h-[400px] border border-black w-[450px] ml-3 rounded-xl shadow-lg bg-slate-50">
        <div className="text-center font-bold">Livechat</div>
        <div className="overflow-y-scroll h-[327px] flex flex-col-reverse">
          { liveMessages && liveMessages.map((mes, index)=><LiveMessages key={index} message={mes}/>)}

          
        </div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          dispatch(addToMessages({
            name:"Gowri",
            message:textMes
          }))
          setTextMes("")
        }
         
        }>
        <input type="text" className="w-[26rem] mx-2 p-2 border border-black absolute" value={textMes} onChange={(e)=>setTextMes(e.target.value)}/>
        </form>
      </div>
    </>
  );
};

export default Livechat;
