import React from "react"
import { Link } from "react-router-dom"
import estAdmin from "./estAdmin"



const NavBar =()=> {
    const admin=estAdmin()
        
    return(
        <nav className="navbar">
            <h1>Guide de survie pour seigneur</h1>
            <div className="links">
                <Link to="/">Home</Link>
                {admin && <Link to="/create"> Nouvel article</Link> }                                
                <Link to="/Contact">Contact</Link>
                <Link to="/login">Login</Link> 
            </div>
        </nav>

    )
}

export default NavBar