import React from "react";
import { useHistory, useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import { Markup } from "interweave";
import estAdmin from "./estAdmin";
import Comment from "./Comment";

const ArticlePage = () => {
    
    const {id} = useParams()
    const history = useHistory()    
    const  {data: article, isPending, error} = UseFetch("http://localhost:8000/articles/"+ id)
    const admin = estAdmin()    
    const handleClick = (()=>{

        fetch("http://localhost:8000/articles/"+ id,{
            method:"DELETE",
        }).then (()=> {
            history.push("/")            
        })
    })

    const handleClickModifier = (()=>{
        history.push("/edit/"+id)       
    })

    
    return (        
        
        <div className="article-page">
            {isPending && <div>Loading....</div>}           
            {error && <div>{error}</div>}            
            {article && (
                <div className="content">       
                            
                    <h2> {article.titre}</h2>                    
                    <Markup content={article.text} />
                    <br />
                    <p className="auteur"> Ecrit par {article.auteur}</p>
                    <br />
                    {admin && <div className="admin"><button onClick={handleClick}> Supprimer</button>
                    <button onClick={handleClickModifier}>Editer</button></div>                 
                    }
                    <br />
                    <Comment article ={article} id = {id}></Comment>
                 </div>
            )
            }
            
            
        </div>
    );
}
 
export default ArticlePage;