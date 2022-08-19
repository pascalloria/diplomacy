import { useState } from "react"
import React from 'react';
import { useHistory } from "react-router-dom"
import ReactQuill  from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const ArticleForm = (props) => {  
   
    // Parametre de la toolbar de ReactQuill
    const toolbarItems = [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],[{ 'list': 'ordered'}, { 'list': 'bullet' }], ["font"],
        ["link","image"],["clean"]
    ]
    const history = useHistory()
    const url = props.url
    
    const handleClick = (e) => {
        e.preventDefault();
        const article = {titre,text,auteur,comments}
        console.log( text)

        fetch(url,{            
            method: props.method,            
            headers:{"Content-Type" : "application/json"},
            body : JSON.stringify(article)           
        }) . then (()=> {
           history.push("/")
        })
    }

     var quillObj;
   
    
    const  imageHandler = () => {
        const input = document.createElement("input")
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*")
        input.click()

        input.onchange =  () => {
            if (input.files.length > 0) {
                console.log("input OK")
                var file = input.files[0];
                // limiter la taille de l'image
                if (file.size > 2097152) {       
                    alert("La taille du fichier doit être inférieur à 1 MB")
                    return
                }
                var fileReader = new FileReader();
                
                fileReader.onload = function(fileLoadedEvent) {  // o chargement de filereader lance la fonction
                    var srcData = fileLoadedEvent.target.result;   // traduit l'image en base 64
                    console.log(srcData)
                    const range = quillObj.getEditorSelection();
                    quillObj.getEditor().insertEmbed(range.index, 'image', srcData);
                }
                fileReader.readAsDataURL(file);
            }
        
        
            

        }
    }    
    

    const [titre, setTitre] = useState(props.article.titre)
    const [text, setText] =  useState(props.article.text)
    const [auteur, setAuteur]= useState(props.article.auteur)
    const comments = props.article.comments
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
                    
                   <ReactQuill       
                   ref={(el) => {
                    quillObj = el;
                   }}            
                   modules={{
                    toolbar:{
                        container: toolbarItems,
                            handlers :{
                                image: imageHandler
                            }
                            ,}}}  // permet de customiser la toolbar
                    theme="snow"
                    value={text} 
                    onChange={setText} 
                     />                            
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