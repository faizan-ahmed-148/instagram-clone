import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './componenets/Header';
// import Register from './componenets/Register';
import Login from './componenets/login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './Actions/User';
import Home from './componenets/Home';
import Account from './componenets/Account/Account';
import NewPost from './componenets/newPost/NewPost';
import Register from './componenets/register/Register';
import EditProfile from "./componenets/editProfile/EditProfile"
import UpdatePassword from './componenets/UpdatePassword/UpdatePassword';
import ForgotPassword from './componenets/forgotPassword/ForgotPassword';
import ResetPassword from './componenets/resetPassword/ResetPassword';
import UserProfile from './componenets/UserProfile/UserProfile';
import Search from './componenets/Search/Search';
import Page from './componenets/notFound/Page';

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  const { isAuthenticated } = useSelector((state) => state.user)

  return (
    <>
      {

        isAuthenticated && <Header />

      }
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
        <Route path="/account" element={isAuthenticated ? <Account /> : <Login />} />
        <Route path="/newpost" element={isAuthenticated ? <NewPost /> : <Login />} />
        <Route path="/register" element={isAuthenticated ? <Account /> : <Register />} />
        <Route path="/update/profile" element={isAuthenticated ? <EditProfile /> : <Login />} />
        <Route path="/update/password" element={isAuthenticated ? <UpdatePassword /> : <Login />} />

        <Route path="/forgot/password" element={isAuthenticated ? <UpdatePassword /> : <ForgotPassword />} />

        <Route path="/password/reset/:token" element={isAuthenticated ? <UpdatePassword /> : <ResetPassword />} />


        <Route
          path="/user/:id"
          element={isAuthenticated ? <UserProfile /> : <Login />}
        />

        <Route
          path="/search"
          element={isAuthenticated ? <Search /> : <Login />}
        />

        <Route path="*" element={<Page />} />

      </Routes>
    </>
  )
}

export default App
