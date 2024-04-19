import axios from "axios"

export const loginUser = (email, password)=> async(dispatch)=>{

    try {
        dispatch({
            type: "LoginRequest"
        })
        const {data}= await axios.post("/api/vi/login", {email, password},
        {
            headers: {
                "Content-Type": "application/json",
            },
        },
        );


        dispatch({
            type: "LoginSuccess",
            payload: data.user
            

        })
    } catch (error) {
        
        dispatch({
            type: "LoginFailure",
            payload: error.response.data.message
            

        })
    } 


}


export const RegisterUser = (name, email, password, avatar)=> async(dispatch)=>{

    try {
        dispatch({
            type: "RegisterRequest"
        })
        const {data}= await axios.post("/api/vi/register", {name, email, password, avatar},
        {
            headers: {
                "Content-Type": "application/json",
            },
        },
        );


        dispatch({
            type: "RegisterSuccess",
            payload: data.user
            

        })
    } catch (error) {
        
        dispatch({
            type: "RegisterFailure",
            payload: error.response.data.message
            

        })
    } 


}




export const loadUser = ()=> async(dispatch)=>{

    try {
        dispatch({
            type: "LoadUserRequest"
        })
       
        const {data} = await axios.get("/api/vi/me");

        dispatch({
            type: "LoadUserSuccess",
            payload: data.user
            

        })
    } catch (error) {
        
        dispatch({
            type: "LoadUserFailure",
            payload: error.response.data.message
            

        })
    } 


}


export const LogOutUser = ()=> async(dispatch)=>{

    try {
        dispatch({
            type: "LogOutUserRequest"
        })
       
        await axios.get("/api/vi/logout");

        dispatch({
            type: "LogOutUserSuccess",           

        })
    } catch (error) {
        
        dispatch({
            type: "LogOutUserFailure",
            payload: error.response.data.message
            

        })
    } 


}




export const getFollowingPost =()=>async(dispatch)=>{
    try {
        
        dispatch({
            type: "postofFollowingRequest",
        
        })

        const {data} = await axios.get("/api/vi/posts");

        dispatch({
            type: "postofFollowingSuccess",
            payload: data.posts
            

        })

    } catch (error) {
         
        dispatch({
            type: "postofFollowingFailure",
            payload: error.response.data.message
            

        })
    }
}


export const getallUsers =(name="")=>async(dispatch)=>{
    try {
        
        dispatch({
            type: "allUsersRequest",
        
        })

        const {data} = await axios.get(`/api/vi/users?name=${name}`);

        dispatch({
            type: "allUsersSuccess",
            payload: data.users
            

        })

    } catch (error) {
         
        dispatch({
            type: "allUsersFailure",
            payload: error.response.data.message
            

        })
    }
}





export const GetMyPosts = ()=> async(dispatch)=>{
    try {
          dispatch({
               type: "myPostRequest"
           })
       
           const {data} = await axios.get("/api/vi/my/posts");
       
           dispatch({
               type: "myPostSuccess",
               payload: data.posts
           })
   } catch (error) {
       dispatch({
           type: "myPostFailure",
           payload: error.response.data.message
       })
   }
   }




   
   export const UpdateProfileUser = (name, email, avatar)=> async(dispatch)=>{

    try {
        dispatch({
            type: "UpdateProfileRequest"
        })
        const {data}= await axios.put("/api/vi/update/profile", {name, email, avatar},
        {
            headers: {
                "Content-Type": "application/json",
            },
        },
        );


        dispatch({
            type: "UpdateProfileSuccess",
            payload: data.message
            

        })
    } catch (error) {
        
        dispatch({
            type: "UpdateProfileFailure",
            payload: error.response.data.message
            

        })
    } 


}





export const UpdatePasswordUser = (oldPassword, newPassword)=> async(dispatch)=>{

    try {
        dispatch({
            type: "UpdatePasswordRequest"
        })
        const {data}= await axios.put("/api/vi/update/password", {oldPassword, newPassword},
        {
            headers: {
                "Content-Type": "application/json",
            },
        },
        );


        dispatch({
            type: "UpdatePasswordSuccess",
            payload: data.message
            

        })
    } catch (error) {
        
        dispatch({
            type: "UpdatePasswordFailure",
            payload: error.response.data.message
            

        })
    } 


}



export const deleteProfile = () => async (dispatch) => {
    try {

        dispatch({
            type: "DeleteProfileRequest",
        })

        const { data } = await axios.delete(`/api/vi/delete/me`,

        
        );
        dispatch({
            type: "DeleteProfileSuccess",
            payload: data.message


        })

    } catch (error) {

        dispatch({
            type: "DeleteProfileFailure",
            payload: error.response.data.message


        })
    }
}















export const getUserPosts = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "userPostsRequest",
      });
  
      const { data } = await axios.get(`/api/vi/userposts/${id}`);
      dispatch({
        type: "userPostsSuccess",
        payload: data.posts,
      });
    } catch (error) {
      dispatch({
        type: "userPostsFailure",
        payload: error.response.data.message,
      });
    }
  };
  



  export const getUserProfile = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "userProfileRequest",
      });
  
      const { data } = await axios.get(`/api/vi/user/${id}`);
      dispatch({
        type: "userProfileSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "userProfileFailure",
        payload: error.response.data.message,
      });
    }
  };



  
  export const followAndUnfollowUser = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "followUserRequest",
      });
  
      const { data } = await axios.get(`/api/vi/follow/${id}`);
      dispatch({
        type: "followUserSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "followUserFailure",
        payload: error.response.data.message,
      });
    }
  };