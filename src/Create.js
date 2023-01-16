import React from "react";
import ArticleForm from "./ArticleForm";

const Create = () => {
    
    const article ={
        "text" : "",
        "titre": "",
        "auteur" : "",
        "comments": []
    }

    return ( 
        <div className="create">
            <h2> Ajouter un Nouvelle Article</h2>

            <ArticleForm article={article} method="POST" url="https://api.pascalloria.fr/"></ArticleForm>
        </div>
     );
}
 
export default Create;