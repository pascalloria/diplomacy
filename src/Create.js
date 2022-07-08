import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [titre, setTitre] = useState("")
    const [text, setText] = useState("")
    const [auteur, setAuteur]= useState("")
    const history = useHistory()

    const handleClick = (e) => {
        e.preventDefault();
        const article = {titre,text,auteur}

        fetch ("http://localhost:8000/articles",{
            method: "POST",
            headers:{"Content-Type" : "application/json"},
            body : JSON.stringify(article)           
        }) . then (()=> {
            history.push("/")
        })
    }


    return ( 
        <div className="create">
            <h2> Ajouter un Nouvelle Article</h2>

            <form >
                <div className="titre">
                    <label> Titre  </label>            
                    <input
                        required
                        value={titre}
                        onChange ={(e) => setTitre(e.target.value)}                       
                        ></input>
                </div>
                <div className="text">
                    <label> Texte </label>
                    <textarea
                        required
                        value={text}
                        onChange = {e => setText(e.target.value)}
                    ></textarea>
                </div>
                <div className="auteur">
                    <label> Auteur </label>
                    <input type="text"
                        required
                        value={auteur}
                        onChange ={(e) => setAuteur(e.target.value)}  />
                </div>
                <button
                onClick={handleClick}> Poster</button>
            </form>

        </div>
     );
}
 
export default Create;