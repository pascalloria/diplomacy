import React from "react";
import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";


const ArticlePage = () => {

    const {id} = useParams()

    const  {data: article, isPending, error} = UseFetch("http://localhost:8000/articles/"+ id)
    console.log (article)

    return (        
        
        <div className="article-page">
            {isPending && <div>Loading....</div>}           
            {error && <div>{error}</div>}
            
            {article && (
                <div className="content">                    
                    <h2> {article.titre}</h2>
                    <p>   {article.text}</p>
                    <p> Ecrit par {article.auteur}</p>
                 </div>
            )
            }
            
            
        </div>
    );
}
 
export default ArticlePage;