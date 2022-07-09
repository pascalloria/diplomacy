import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ArticleForm from "./ArticleForm";

const Create = () => {
    
    const article ={
        "text" : "",
        "titre": "",
        "auteur" : ""
    }

    return ( 
        <div className="create">
            <h2> Ajouter un Nouvelle Article</h2>

            <ArticleForm article={article} id={null} method="POST" url="http://localhost:8000/articles/"></ArticleForm>
        </div>
     );
}
 
export default Create;