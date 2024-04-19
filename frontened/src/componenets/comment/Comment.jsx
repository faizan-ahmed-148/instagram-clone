import React from 'react'
import { NavLink } from 'react-router-dom'
import {Delete} from "@mui/icons-material"
import { Typography, Button } from '@mui/material'
import {useDispatch, useSelector} from "react-redux"
import { deleteCommentPost} from '../../Actions/Post'
import { getFollowingPost, GetMyPosts} from '../../Actions/User'

require("./comment.css")
const Comment = ({
    userId,
    name,
    avatar,
    comment,
    commentId,
    postId,
    isAccount
}) => {

    console.log(commentId);
    const {user}= useSelector(state=>state.user)

    const dispatch = useDispatch()

    const deleteCommentHandler = (e)=>{
        e.preventDefault()
        dispatch(deleteCommentPost(postId, commentId))
        
        if (isAccount) {
        dispatch(GetMyPosts())
        }else{

        dispatch(getFollowingPost())
        }
    }   


  return (
    <div className='commentUser'>
        <NavLink to={`/user/${userId}`}>
        <img src={avatar} alt={name}/>
        <Typography style={{minWidth: "6vmax"}}>{name}</Typography>
        </NavLink>
        <Typography>

        {comment}
        </Typography>
{
    isAccount?(
    <Button onClick={deleteCommentHandler}>
        <Delete />

    </Button>): userId ===user._id ?
    (
        <Button onClick={deleteCommentHandler}>
            <Delete />
    
        </Button>):null
    

}
</div>

  )
}

export default Comment