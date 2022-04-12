import React, { useState } from 'react'
import './Navbar.css'
const Navbar = (props) => {
    const [userImg, setUserImg] = useState(localStorage.getItem("userImage"))
    return (
        <div className="topnav" id="myTopnav">
            <a href="/homepage" className="active">Home</a>
            <a href="">News</a>
            <a href="">Contact</a>
            <a href="">About</a>
            <a id="user-ava"><img id="user-img" src={localStorage.getItem("userImage")} alt="User avatar" /></a>
            <p id="user-name">{localStorage.getItem("userName")}</p>
        </div>
    )
}

export default Navbar