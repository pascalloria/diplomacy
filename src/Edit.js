import React from "react";
import UseFetch from "./UseFetch";
import { useParams } from "react-router-dom";
import ArticleForm from "./ArticleForm";

const Editer = () => {

    const {id} = useParams()  
    const {data: article, isPending, error}= UseFetch("http://test3.pascalloria.fr/"+ id) 
    
    return (         
        <div className="create">             
            <h2> Modifier votre Article </h2> 
            {isPending && <div> Loading ....</div>}
            {error && <div> {error} </div>}
            {article && ( <ArticleForm  article={article}  method="PUT" url={"http://test3.pascalloria.fr/"+ id} 
            />
             )}
     </div>)     ;

}
 
export default Editer;