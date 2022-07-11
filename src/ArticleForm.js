import { useState } from "react"
import React from 'react';
import { useHistory } from "react-router-dom"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const ArticleForm = (props) => {
    


    
    const history = useHistory()
    const url = props.url

    const handleClick = (e) => {
        e.preventDefault();
        const article = {titre,text,auteur}

        fetch(url,{
            method: props.method,
            headers:{"Content-Type" : "application/json"},
            body : JSON.stringify(article)           
        }) . then (()=> {
            history.push("/")
        })
    }  


    const [titre, setTitre] = useState(props.article.titre)
    const [text, setText] =  useState(props.article.text)
    const [auteur, setAuteur]= useState(props.article.auteur)
    return (  
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
                    <ReactQuill theme="snow"
                     value={text} 
                     onChange={setText}/>                            
            </div>
            <div className="auteur">
                <label> Auteur </label>
                <input type="text"
                    required
                    value={auteur}
                    onChange ={(e) => setAuteur(e.target.value)}  />
            </div>
            <button onClick={handleClick}> Poster</button>
        </form>


    );
}
 
export default ArticleForm;