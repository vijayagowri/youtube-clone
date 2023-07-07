import React, { useEffect } from 'react'
import Comment from './Comment'
import { useSelector } from 'react-redux';

const CommentsList = ({data}, {datas}) => {
  const commentsData = useSelector(store=>store.comments);
  return (
    
    <div>
        {data.map((res)=>(
            <div key={res.id}>
        <Comment id={res.id} name={res.name} description={res.description} replies={res.replies} commentsObj={commentsData}/>
        <div className='ml-5 pl-5 border border-l-black'>
        <CommentsList data={res.replies} />
        </div>
        </div>
        ))}
       

    </div>
  )
}

export default CommentsList