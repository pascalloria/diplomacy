import { useState } from "react"
import React from "react"

const Login = () => {

    // const adminList = ["Mistrall","Pascal"]
    
    var adminList = {"Mistrall":"lool" , "Pascal": "OK"}  
    
    
    const [logName, setLogName] = useState("")
    const [password, setPassword] = useState("")    

    const handleClick = (e) => {
        e.preventDefault()
        localStorage.setItem("Login",logName)
         if(password === adminList[logName] )  

        
        {            
            localStorage.setItem("Admin","true"); // sauvegarde une donné sur le navigateur 
            window.location.replace("/");    // recharge la page a la position indiqué (ici Home)
        
        }      
        else {
            localStorage.setItem("Admin","false");        
            window.location.replace("/");                   
        }        
    }

    return ( 
        <form>
            <div className="login">
                <label > LogName </label>
                <input
                    required
                    value={logName}
                    onChange={(e) => setLogName(e.target.value)}>
                </input>
                <label > Password </label>
                <input
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <button onClick={handleClick}>Log in</button>
            </div>
        </form>


     );
}

export default Login;