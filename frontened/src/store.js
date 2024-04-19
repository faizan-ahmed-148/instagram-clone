import {configureStore} from "@reduxjs/toolkit"
import { likeReducer, myPostReducer, userPostsReducer } from "./Reducers/Post"

import { allUsersReducer, postofFollowingReducer, userProfileReducer, userReducer } from "./Reducers/User"




const store = configureStore({
    reducer:{
        user: userReducer,
        postofFollowing: postofFollowingReducer,
        allUsers: allUsersReducer,
        like: likeReducer,
        myPost: myPostReducer,
        userProfile: userProfileReducer,
        userPosts: userPostsReducer
       
    }
})
export default store