import { Avatar, Button, Typography, Dialog } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetMyPosts, LogOutUser, deleteProfile } from '../../Actions/User'
import Loader from '../loading/Loader'
import Post from '../Post/Post'
import { useAlert } from 'react-alert'
import { NavLink } from 'react-router-dom'
import User from "../User"
require("./account.css")
const Account = () => {
    const [isFollowers, setisFollowers]=useState(false)
    const [isFollowing, setisFollowing]=useState(false)



    const dispatch = useDispatch()
    const alert = useAlert()

    const{loading:userLoading, user , error: loginError}=useSelector(state=>state.user)
    const {loading, posts, error}=useSelector(state=>state.myPost)
    const {error:likeError, message, loading:DeleteLoading} = useSelector(state=>state.like)

    const LogOutHandler = async()=>{
     
      await dispatch(LogOutUser());
      alert.success("Logout Successfully")

    }

    const DeleteProfileHandler = async()=>{
   
      await dispatch(deleteProfile())
      dispatch(LogOutUser())
    }

    useEffect(()=>{
        dispatch(GetMyPosts())
       
    },[dispatch])
    


     
    useEffect(()=>{
      if(error){
          alert.error(error)
          dispatch({type: "clearErrors"})
      }
      if(likeError){
          alert.error(likeError)
          dispatch({type: "clearErrors"})
      }
      if(loginError){
        alert.error(loginError)
        dispatch({type: "clearErrors"})
    }
      if(message){
          alert.success(message)
          dispatch({type: "clearMessage"})
      }
  },[dispatch, alert, message, error,likeError, loginError])


  return loading===true || userLoading===true ?(<Loader />):(
    <>
    <div className="account">
        <div className="accountleft">
    {
     posts && posts.length > 0?(posts.map((post)=>(

        <Post
  
        key={post._id}
        postId={post._id}
        caption={post.caption}
        postImage={post.image.url}
        likes={post.likes}
        comments={post.comments}
        ownerImage={post.owner.avatar.url}
        ownerName={post.owner.name}
        ownerId={post.owner._id}
        isAccount={true}
        isDelete={true}
       
    />
      )

      )):(
        <Typography variant='h4'>No Post Yet</Typography>
      )
    
    }



        </div>
        <div className="accountright">

          <Avatar 
          src={user.avatar.url}
          style={{height: "8vmax", width: "8vmax"}}

          />
          <Typography variant="h5">{user.name}</Typography>

          <div>
            <button onClick={()=>setisFollowers(!isFollowers)}>
              <Typography>Followers</Typography>
            </button>
            <Typography>{user.followers.length}</Typography>
          </div>


          <div>
            <button onClick={()=>setisFollowing(!isFollowing)}>
              <Typography>Following</Typography>
            </button>
            <Typography>{user.following.length}</Typography>
          </div>


          <div>
            
              <Typography>Posts</Typography>
           
            <Typography>{user.posts.length}</Typography>
          </div>


          <Button onClick={LogOutHandler}  variant='contained'>Logout</Button>

            <NavLink to="/update/profile">Edit Your Profile</NavLink>
            <NavLink to="/update/Password">Update Your Password</NavLink>

            <Button variant="text" onClick={DeleteProfileHandler}
            style={{color:"red", margin: "2vmax"}} disabled={DeleteLoading}
            >Delete My Account</Button>
        </div>



        <Dialog open={isFollowers}
                onClose={()=>setisFollowers(!isFollowers)}
                >

                    <div className="DialogBox">
                        <Typography variant="h4">Followers</Typography>
                    {
                      user && user.followers.length>0?(user.followers.map((follower, index)=>(
                            <User 
                            userId={follower._id}
                            name={follower.name}
                            avatar={follower.avatar.url}
                            />                           
                        ))
                      ):(<Typography style={{margin: "2vmax"}}>No Followers</Typography>)
                    }

                    </div>
                </Dialog>



                <Dialog open={isFollowing}
                onClose={()=>setisFollowing(!isFollowing)}
                >

                    <div className="DialogBox">
                        <Typography variant="h4">Following</Typography>
                    {
                       user && user.following.length>0 ? (user.following.map((following, index)=>(
                            <User 
                            userId={following._id}
                            name={following.name}
                            avatar={following.avatar.url}
                            />                           
                        ))
                       ):(<Typography style={{margin: "2vmax"}}>No Following</Typography>)
                    }

                    </div>
                </Dialog>

    </div>
    </>
  )
}

export default Account