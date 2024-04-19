import { Button, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch,  useSelector} from 'react-redux'
import { CreateNewPost } from '../../Actions/Post'
import { loadUser } from '../../Actions/User'
require("./NewPost.css")

const NewPost = () => {
    const [image, setImage]= useState(null)
    const[caption, setCaption]= useState("")
    const dispatch = useDispatch()
    const alert = useAlert()

    const {loading, error, message}= useSelector(state=>state.like)

    const PostSubmitHandler = async (e)=>{
        e.preventDefault()
        await dispatch(CreateNewPost(caption, image))
        dispatch(loadUser())
    }


    const HandleImageChange= (e)=>{
        const file = e.target.files[0]

        const Reader = new FileReader()
        Reader.readAsDataURL(file)
        Reader.onload = ()=>{
            if (Reader.readyState === 2) {
                setImage(Reader.result)
                
            }
        }
    }


      
    useEffect(()=>{
        if(error){
            alert.error(error)
            dispatch({type: "clearErrors"})
        }
       
        if(message){
            alert.success(message)
            dispatch({type: "clearMessage"})
        }
    },[dispatch,alert, message, error])


  return (
   <>
   <div className="newPost">
    <form className="newPostForm" onSubmit={PostSubmitHandler}>
        <Typography variant='h3'>New Post</Typography>
        {image && <img src={image} alt="post"/>}
        <input type="file" accept='image/*' onChange={HandleImageChange}/>
        <input type="text" placeholder='Caption...' value={caption} onChange={(e)=>setCaption(e.target.value)}/>
        <Button disabled={loading} type='submit'>Post</Button>
    </form>
   </div>
   </>
  )
}

export default NewPost