import React from "react"
import { Link } from "react-router-dom"

const NavBar =()=> {
    return(
        <nav className="navbar">
            <h1>Guide de survie pour seigneur</h1>
            <div className="links">

                <Link to="/">Home</Link>
                <Link to="/create"> Nouvel article</Link>          

                <Link to="/Contact">contact</Link>
                
            </div>
        </nav>

    )
}

export default NavBar