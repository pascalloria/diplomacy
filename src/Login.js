import { useState } from "react"
import React from "react"

const Login = () => {

    const adminList = ["Mistrall","Pascal"]
    
    // {"admin": 
    //     { "name": "Mistrall" , "mdp": "LOL"},
    // }   
    
    const [input, setInput] = useState("")
 


    const handleClick = (e) => {
        e.preventDefault()
        if(adminList.includes(input) ) {            
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