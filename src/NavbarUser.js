import React from "react"
import { Link } from "react-router-dom"

const NavBarUser =()=> {
    return(
        <nav className="navbar">
            <h1>Guide de survie pour seigneur</h1>
            <div className="links">

                <Link to="/">Home</Link> 
                <Link to="/Contact">contact</Link>
                <Link to="/login">Login</Link> 
                
            </div>
        </nav>

    )
}

export default NavBarUser