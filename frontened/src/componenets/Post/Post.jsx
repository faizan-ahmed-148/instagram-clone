import { Avatar, Typography, Button, Dialog } from '@mui/material'
import { NavLink } from 'react-router-dom'
import React, { useEffect } from 'react'
import {
    MoreVert,
    Favorite,
    FavoriteBorder,
    ChatBubbleOutline,
    DeleteOutline
} from "@mui/icons-material"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeletePost, getCommentPost, getLikePost, UpdateCaptionPost } from '../../Actions/Post'
import { getFollowingPost, GetMyPosts, loadUser } from "../../Actions/User"
import User from '../User'
import Comment from '../comment/Comment'
require("./Post.css")
const Post = ({
    postId,
    caption,
    postImage,
    likes = [],
    comments = [],
    ownerImage,
    ownerName,
    ownerId,
    isDelete = false,
    isAccount = false,
}) => {



    const [isliked, SetisLiked] = useState(false)
    const [islikedUsers, SetisLikedUsers] = useState(false)
    const [commentValue, setCommentValue] = useState("")
    const [commentToogle, setCommentToogle] = useState("")

    const [captionValue, setCaptionValue] = useState(caption)
    const [captionToogle, setCaptionToogle] = useState("")




    const { user } = useSelector(state => state.user)

    const dispatch = useDispatch()

    const HandleLike = async () => {
        SetisLiked(!isliked)
        await dispatch(getLikePost(postId))


        if (isAccount) {
            dispatch(GetMyPosts())

        } else {

            dispatch(getFollowingPost())
        }

    }

    const CommentHandler = async (e) => {
        e.preventDefault()
        await dispatch(getCommentPost(postId, commentValue))
        if (isAccount) {
            dispatch(GetMyPosts())

        } else {

            dispatch(getFollowingPost())
        }
    }

    const deletePostHandler = async () => {
        await dispatch(DeletePost(postId))
        dispatch(GetMyPosts())
        dispatch(loadUser())
    }


    const CaptionUpdateHandler = (e) => {
        e.preventDefault()
        dispatch(UpdateCaptionPost(captionValue, postId))
        dispatch(GetMyPosts())

    }


    useEffect(() => {
        likes.forEach((item) => {
            if (item._id === user._id) {
                SetisLiked(true)
            }
        })
    }, [likes, user._id])
    return (
        <>
            <div className="post">
                <div className="postHeader">

                    {isAccount ? (
                        <Button>
                            <MoreVert onClick={() => setCaptionToogle(!captionToogle)} />
                        </Button>) : null

                    }

                </div>
                <img src={postImage} alt="" />

                <div className="postDetails">
                    <Avatar src={ownerImage} alt="User" sx={{
                        height: "3vmax",
                        width: "3vmax",
                        marginTop: "1vmax"
                    }}></Avatar>

                    <NavLink to={`/user/${ownerId}`}>
                        <Typography fontWeight={700}>{ownerName}</Typography>

                    </NavLink>
                    <Typography fontWeight={100}
                        color="rgba(0,0,0,0.582)"
                        style={{ alignSelf: "center" }}
                    >{caption}</Typography>


                </div>
                <button style={{
                    border: "none",
                    backgroundColor: "white",
                    cursor: "pointer",
                    margin: "0 8px"

                }}
                    onClick={() => SetisLikedUsers(!islikedUsers)}
                >
                    <Typography>{likes.length} Likes</Typography>
                </button>

                <div className="postFooter">
                    <Button onClick={HandleLike}>
                        {isliked ? <Favorite /> : <FavoriteBorder />}
                    </Button>


                    <Button>
                        <ChatBubbleOutline onClick={() => setCommentToogle(!commentToogle)} />
                    </Button>

                    {isDelete ? (
                        <Button onClick={deletePostHandler}>
                            <DeleteOutline />
                        </Button>
                    ) : null}

                </div>

                <Dialog open={islikedUsers}
                    onClose={() => SetisLikedUsers(!islikedUsers)}
                >

                    <div className="DialogBox">
                        <Typography variant="h4">Liked by</Typography>
                        {
                            likes.map((like) => (
                                <User
                                    key={like._id}
                                    userId={like._id}
                                    name={like.name}
                                    avatar={like.avatar.url}
                                />
                            ))
                        }

                    </div>
                </Dialog>



                <Dialog open={commentToogle}
                    onClose={() => setCommentToogle(!commentToogle)}
                >

                    <div className="DialogBox">
                        <Typography variant="h4">Comment</Typography>

                        <form className='commentForm' onSubmit={CommentHandler}>
                            <input
                                type="text"
                                value={commentValue}
                                onChange={(e) => setCommentValue(e.target.value)}
                                placeholder="Comment Here..."
                                required
                            />
                            <Button style={{ height: 50, marginTop: 20 }} type="submit" variant='contained'>Add</Button>
                        </form>
                        {
                            comments.length > 0 ? (comments.map((comment) => (
                                <Comment
                                    key={comment.user._id}
                                    userId={comment.user._id}
                                    name={comment.user.name}
                                    avatar={comment.user.avatar.url}
                                    comment={comment.comment}
                                    commentId={comment._Id}
                                    postId={postId}
                                    isAccount={isAccount}
                                />
                            ))
                            ) : (<Typography>No Comment Yet</Typography>)
                        }
                    </div>
                </Dialog>





                <Dialog open={captionToogle}
                    onClose={() => setCaptionToogle(!captionToogle)}
                >

                    <div className="DialogBox">
                        <Typography variant="h4">Update Caption</Typography>

                        <form className='commentForm' onSubmit={CaptionUpdateHandler}>
                            <input
                                type="text"
                                value={captionValue}
                                onChange={(e) => setCaptionValue(e.target.value)}
                                placeholder="Comment Here..."
                                required
                            />
                            <Button style={{ height: 50, marginTop: 20 }} type="submit" variant='contained'>Update</Button>
                        </form>

                    </div>
                </Dialog>
            </div>


        </>
    )
}

export default Post