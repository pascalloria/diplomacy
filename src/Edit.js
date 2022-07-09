import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UseFetch from "./UseFetch";
import { useParams } from "react-router-dom";

const Editer = () => {

    const {id} = useParams()
    const history = useHistory() 
    const [titre, setTitre] = useState("article.titre")
    const [text, setText] =  useState("article.text")
    const [auteur, setAuteur]= useState("article.auteur")

    const {data: article, isPending, error}= UseFetch("http://localhost:8000/articles/"+ id)
  
        setTitre = article.titre
     

      
       
 

    
   

    
    

    const handleClick = (e) => {
        e.preventDefault();
        const article = {titre,text,auteur}

        fetch ("http://localhost:8000/articles/"+ id,{
            method: "PUT",
            headers:{"Content-Type" : "application/json"},
            body : JSON.stringify(article)           
        }) . then (()=> {
            history.push("/")
        })
    }
   
   

    return ( 

        
        <div className="create">        
        {isPending && <div> Loading ....</div>}
        {error && <div> {error} </div>}
        {article && (    
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
        )}            
        </div>
     );
}
 
export default Editer;