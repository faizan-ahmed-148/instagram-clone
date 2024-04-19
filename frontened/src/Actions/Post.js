import axios from "axios"

export const getLikePost = (id) => async (dispatch) => {
    try {

        dispatch({
            type: "likeRequest",
        })

        const { data } = await axios.get(`/api/vi/post/${id}`);

        dispatch({
            type: "likeSuccess",
            payload: data.message


        })

    } catch (error) {

        dispatch({
            type: "likeFailure",
            payload: error.response.data.message


        })
    }
}



export const getCommentPost = (id, comment) => async (dispatch) => {
    try {

        dispatch({
            type: "addCommentRequest",
        })

        const { data } = await axios.put(`/api/vi/post/comment/${id}`, {
            comment,
        }, {
            headers: {
                "Content-Type": "application/json",
            },
        },
        );
        dispatch({
            type: "addCommentSuccess",
            payload: data.message


        })

    } catch (error) {

        dispatch({
            type: "addCommentFailure",
            payload: error.response.data.message


        })
    }
}




export const deleteCommentPost = (id, commentId) => async (dispatch) => {
    try {

        dispatch({
            type: "deleteCommentRequest",
        })

        const { data } = await axios.delete(`/api/vi/post/comment/${id}`,

            {
                data: commentId
            },{
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
        dispatch({
            type: "deleteCommentSuccess",
            payload: data.message


        })

    } catch (error) {

        dispatch({
            type: "deleteCommentFailure",
            payload: error.response.data.message


        })
    }
}




export const CreateNewPost = (caption, image) => async (dispatch) => {
    try {

        dispatch({
            type: "NewPostRequest",
        })

        const { data } = await axios.post(`/api/vi/post/upload`,

            {
                caption, image
            },
             {
                headers: {
                    "Content-Type": "application/json",
                },
            },
            
        );
        dispatch({
            type: "NewPostSuccess",
            payload: data.message


        })

    } catch (error) {

        dispatch({
            type: "NewPostFailure",
            payload: error.response.data.message


        })
    }
}



export const UpdateCaptionPost = (caption, id) => async (dispatch) => {
    try {

        dispatch({
            type: "UpdateCaptionRequest",
        })

        const { data } = await axios.put(`/api/vi//post/${id}`,

            {
                caption
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
        dispatch({
            type: "UpdateCaptionSuccess",
            payload: data.message


        })

    } catch (error) {

        dispatch({
            type: "UpdateCaptionFailure",
            payload: error.response.data.message


        })
    }
}







export const DeletePost = (id) => async (dispatch) => {
    try {

        dispatch({
            type: "DeletePostRequest",
        })

        const { data } = await axios.delete(`/api/vi//post/${id}`)

           
        
        dispatch({
            type: "DeletePostSuccess",
            payload: data.message


        })

    } catch (error) {

        dispatch({
            type: "DeletePostFailure",
            payload: error.response.data.message


        })
    }
}



export const ForgotPasswordUser = (email)=> async(dispatch)=>{

    try {
        dispatch({
            type: "ForgotPasswordRequest"
        })
        const {data}= await axios.post("/api/vi/forgot/password", {email},
        {
            headers: {
                "Content-Type": "application/json",
            },
        },
        );


        dispatch({
            type: "ForgotPasswordSuccess",
            payload: data.message
            

        })
    } catch (error) {
        
        dispatch({
            type: "ForgotPasswordFailure",
            payload: error.response.data.message
            

        })
    } 


}






export const resetPassword = (token, password) => async (dispatch) => {
    try {
      dispatch({
        type: "resetPasswordRequest",
      });
  
      const { data } = await axios.put(
        `/api/vi/password/reset/${token}`,
        {
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      dispatch({
        type: "resetPasswordSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "resetPasswordFailure",
        payload: error.response.data.message,
      });
    }
  };
  