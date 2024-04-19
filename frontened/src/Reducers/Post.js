import { createReducer } from "@reduxjs/toolkit"

const initialState = {

}

export const likeReducer = createReducer(initialState, {
    likeRequest: (state) => {
        state.loading = true
    },
    likeSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    likeFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },



    addCommentRequest: (state) => {
        state.loading = true
    },
    addCommentSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    addCommentFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },


    NewPostRequest: (state) => {
        state.loading = true
    },
    NewPostSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    NewPostFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },







    deleteCommentRequest: (state) => {
        state.loading = true
    },
    deleteCommentSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    deleteCommentFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },



    UpdateCaptionRequest: (state) => {
        state.loading = true
    },
    UpdateCaptionSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    UpdateCaptionFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },




    DeletePostRequest: (state) => {
        state.loading = true
    },
    DeletePostSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    DeletePostFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },




    UpdateProfileRequest: (state) => {
        state.loading = true
    },
    UpdateProfileSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    UpdateProfileFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },





    DeleteProfileRequest: (state) => {
        state.loading = true
    },
    DeleteProfileSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    DeleteProfileFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },




    UpdatePasswordRequest: (state) => {
        state.loading = true
    },
    UpdatePasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    UpdatePasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },


    ForgotPasswordRequest: (state) => {
        state.loading = true
    },
    ForgotPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload
    },
    ForgotPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },





    resetPasswordRequest: (state) => {
        state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    resetPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },





    
  followUserRequest: (state) => {
    state.loading = true;
  },
  followUserSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  followUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },


  

    clearErrors: (state) => {
        state.error = null
    },
    clearMessage: (state) => {
        state.message = null
    }
})


export const myPostReducer = createReducer(initialState, {
    myPostRequest: (state) => {
        state.loading = true
    },
    myPostSuccess: (state, action) => {
        state.loading = false
        state.posts = action.payload
    },
    myPostFailure: (state, action) => {
        state.loading = false
        state.error = action.payload

    },
    clearErrors: (state) => {
        state.error = null
    },
    clearMessage: (state) => {
        state.message = null
    }
})










export const userPostsReducer = createReducer(initialState, {
    userPostsRequest: (state) => {
      state.loading = true;
    },
    userPostsSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    userPostsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  });