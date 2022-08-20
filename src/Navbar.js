import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import estAdmin from "./estAdmin"


const NavBar =()=> {
    const admin=estAdmin()   
    let login = null
    if(localStorage.getItem("Login")){
      login = localStorage.getItem('Login')
    } 
    const handleExtendMenu = (e)=> {
        e.preventDefault();
        setIsNavExtended (!isNavExtended)
    }

    const [isNavExtended, setIsNavExtended]= useState(false)
    
    return(
        <nav className="navbar">
            
            <h1>Guide de survie pour seigneur</h1> 
            <div className="test">
                <button className="hamburger" onClick = {handleExtendMenu}> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg> 
                </button>
            </div>
            <div className={
                isNavExtended ? "links extended" : "links"
                }>
                <Link to="/">Home</Link>
                {admin && <Link to="/create"> Nouvel article</Link> }                                
                <Link to="/Contact">Contact</Link>
                {login &&<Link to="/login">{login}</Link>}
                {!login &&<Link to="/login">Login</Link>}
            </div>
            
        </nav>

    )
}

export default NavBar