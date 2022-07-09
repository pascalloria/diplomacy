import React from "react";
import { useHistory, useParams } from "react-router-dom";
import UseFetch from "./UseFetch";


const ArticlePage = () => {

    const {id} = useParams()
    const history = useHistory()
    const  {data: article, isPending, error} = UseFetch("http://localhost:8000/articles/"+ id)

    
    const handleClick = (()=>{

        fetch("http://localhost:8000/articles/"+ id,{
            method:"DELETE",
        }).then (()=> {
            history.push("/")
            
        })
    })

    const handleClickModifier = (()=>{
        history.push("/edit/"+id)
        console.log("Edition en cours")

    })

    return (        
        
        <div className="article-page">
            {isPending && <div>Loading....</div>}           
            {error && <div>{error}</div>}
            
            {article && (
                <div className="content">                    
                    <h2> {article.titre}</h2>
                    <p>   {article.text}</p>
                    <p> Ecrit par {article.auteur}</p>
                    <button onClick={handleClick}> Supprimer</button>
                    <button onClick={handleClickModifier}>Editer</button>
                 </div>
            )
            }
            
            
        </div>
    );
}
 
export default ArticlePage;