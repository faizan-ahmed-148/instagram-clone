import React from 'react'
import Grid from '@mui/material/Grid'; // Grid version 1
import { Stack, Typography , Box} from '@mui/material';
import User from './User';
import Post from './Post/Post';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallUsers, getFollowingPost } from '../Actions/User';
import Loader from './loading/Loader';
import { useAlert } from 'react-alert'


const Home = () => {
    const dispatch = useDispatch()
    const alert = useAlert()

    const { loading, posts, error } = useSelector(state => state.postofFollowing)
    const { users, loading: usersLoading } = useSelector(state => state.allUsers)
    const { error: likeError, message } = useSelector(state => state.like)




    useEffect(() => {
        dispatch(getFollowingPost())
        dispatch(getallUsers())
    }, [dispatch])




    useEffect(() => {
        if (error) {
            alert.error(error)
        }
        if (likeError) {
            alert.error(likeError)
        }
        if (message) {
            alert.success(message)
            dispatch({ type: "clearMessage" })
        }
    }, [dispatch, alert, message, error, likeError])

    return loading === true || usersLoading === true ? (<Loader />) : (

        <Box style={{ overflowY: 'auto' }}>

            <Grid container gutter={24} justify='center'  >
                <Grid xs={6} >
                    <Stack direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ marginTop: "50px", boxSizing: "border-box" }}
                    >
                        {posts && posts.length > 0
                            ? (posts.map((post) => (

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

                                />
                            ))
                            ) : (
                                <Typography variant="h6">No Post Yet</Typography>
                            )
                        }



                    </Stack>
                </Grid>
                <Grid xs={4} sx={{ boxSizing: "border-box" }}>
                    <Stack direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ marginTop: "50px" }}

                    >
                        {users && users.length > 0
                            ? (users.map((user) => (

                                <User
                                    key={user._id}
                                    userId={user._id}
                                    name={user.name}
                                    avatar={user.avatar.url}
                                />
                            ))
                            ) : (
                                <Typography variant="h6">No User Yet</Typography>
                            )
                        }

                    </Stack>
                </Grid>


            </Grid>

        </Box>


    )

}

export default Home