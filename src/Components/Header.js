import React, { useEffect } from 'react'
import { ClickAwayListener } from "@mui/material";
import {BarChart, SearchRounded, ShoppingCartRounded} from "@mui/icons-material";
import Logo from './images/Logo.PNG'
import profile from './images/profile.png'

function Header() {
    useEffect(() => {
        const toggleMenu = document.querySelector(".toggleMenu")
        toggleMenu.addEventListener("click",()=>{
            document.querySelector(".rightMenu").classList.toggle("active");
        })
    },[])
  return (
    <header>

        <img src={Logo} alt="logo" className='logo'/>

        <div className="inputBox">
            <SearchRounded className="SearchIcon"/>
            <input type="text" placeholder="Search" />
        </div>

        <div className='shoppingCart'>
            <ShoppingCartRounded className="cart"/>
            <div className="cart_content">
                <p>2</p>
            </div>
        </div>
        <div className='profileContainer' >
            <div className="imgBox">
                <img src={profile} alt="profilepic" className="profilePic"/>
            </div>
            <h2 className="userName">Aaditya</h2>
        </div>

        <div className='toggleMenu'>
            <BarChart className="toggleIcon" />
        </div>
        

    </header>
  )
}

export default Header