import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import { Markup } from "interweave";


const ArticlePageUser = () => {
    
    const {id} = useParams()
    const history = useHistory()    
    const  {data: article, isPending, error} = UseFetch("http://localhost:8000/articles/"+ id)
   
   
    return (        
        
        <div className="article-page">
            {isPending && <div>Loading....</div>}           
            {error && <div>{error}</div>}
            
            {article && (
                <div className="content">       
                            
                    <h2> {article.titre}</h2>                    
                    <Markup content={article.text} />
                    <p> Ecrit par {article.auteur}</p>                    
                 </div>
            )
            }
            
            
        </div>
    );
}
 
export default ArticlePageUser;