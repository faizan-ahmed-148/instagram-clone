import React from 'react'
import { Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
const User = ({ userId, name, avatar }) => {
  return (
    <>
      <NavLink
        className="UserProfile"
        style={{ display: "flex", alignItems: "center", margin: "18px 0" }}
        to={`/user/${userId}`}>
        <img
          style={{ borderRadius: 40, height: "50px", width: "50px" , border: "1px solid #33a7c4"}}
          src={avatar}  alt=""/>
        <Typography sx={{marginLeft: "5px"}}>{name}</Typography>
      </NavLink>




    </>

  )
}

export default User