import React from "react";
import { useHistory, useParams } from "react-router-dom";
import UseFetch from "./UseFetch";
import { Markup } from "interweave";
import estAdmin from "./estAdmin";
import { useState } from "react";


const ArticlePage = () => {
    
    const {id} = useParams()
    const history = useHistory()    
    const  {data: article, isPending, error} = UseFetch("http://localhost:8000/articles/"+ id)
    const admin = estAdmin()
    const [comment,setComment] = useState("")
    
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

    const handleClickPoster = ( (e) => {
        e.preventDefault();
        fetch ("http://localhost:8000/articles/"+ id,{
            method : "PUT",
            headers:{"Content-Type" : "application/json"},
            body :
             JSON.stringify({comments: comment})     
        })
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
                    <div className="comment">
                        {article.comments.map((comment) => (
                            <div><br />
                                <div className="commentaireAfficher">                            
                                    <p>{comment.text} </p> 
                                    <p className="commentAuteur"> ecrit par {comment.auteur}</p>                                                          
                                </div>
                            </div>
                            
                        ))}
                        <br />
                        <label> Commentaires</label>
                        <textarea 
                            value={comment}
                            onChange ={(e) => setComment(e.target.value)}
                            >                                
                            </textarea>
                        <button onClick={handleClickPoster}>Poster</button>
                    </div>
                 </div>
            )
            }
            
            
        </div>
    );
}
 
export default ArticlePage;