import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { Stack } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [tab, setTab]= useState(window.location.pathname)
    console.log(tab);
    return (
        <>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={{ xs: 4, sm: 11, md: 15 }}
                sx={{ marginTop: 1 }}
            >
              <li><NavLink to="/" onClick={()=>setTab("/")}>{tab==="/"?< HomeIcon  sx={{ fontSize: 32 }}/>:< HomeOutlinedIcon  sx={{ fontSize: 32 }}/>}
              </NavLink></li>


              <li><NavLink to="/newpost" onClick={()=>setTab("/newpost")}>{tab==="/newpost"?< AddCircleIcon sx={{ fontSize: 32 }}/>: < AddCircleOutlineOutlinedIcon sx={{ fontSize: 32 }}/>}</NavLink></li>



              <li><NavLink to="/search" onClick={()=>setTab("/search")}>{tab === "/search" ? < SearchIcon sx={{ fontSize: 32 }}  />:  <SearchOutlinedIcon sx={{ fontSize: 32 }}  />}</NavLink></li>


              <li><NavLink to="/account" onClick={()=>setTab("/account")}>{tab==="/account"?<AccountCircleIcon sx={{ fontSize: 32 }}/>:<AccountCircleOutlinedIcon sx={{ fontSize: 32 }}/>}</NavLink></li>


            </Stack>


        </>
    )
}

export default Header