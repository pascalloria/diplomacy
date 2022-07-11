import { useState } from "react"
import React from "react"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"

const Login = () => {

    const adminList = ["Mistrall","Pascal"]
    const [input, setInput] = useState("")
    const history = useHistory()


    const handleClick = (e) => {
        e.preventDefault()
        if(adminList.includes(input) ) {            
            localStorage.setItem("Admin","true");
            window.location.replace("/");
            // history.push("/");
        }      
        else {
            localStorage.setItem("Admin","false");        
            window.location.replace("/");                   
        }        
    }

    return ( 

        <form>
            <div className="login">
                <label > Name </label>
                <input
                    required
                    value={input}
                    onChange={(e) => setInput(e.target.value)}>
                </input>

                <button onClick={handleClick}>Log in</button>
            </div>
        </form>


     );
}
 
export default Login;