import React from "react";
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

            <ArticleForm article={article} method="POST" url="http://localhost:8000/articles/"></ArticleForm>
        </div>
     );
}
 
export default Create;