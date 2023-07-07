import React from 'react'
import CommentsList from './CommentsList'
import {Comments} from '../Utilis/mockData';
import { useSelector } from 'react-redux';

const CommentsConatiner = () => {
  const commentsData = useSelector(store=>store.comments);

  return (
        <CommentsList data={commentsData} datas={commentsData}/>
  )
}

export default CommentsConatiner