import React ,{ useState }from "react"
import estAdmin from "./estAdmin"

const Comment = (props) => {

    const admin = estAdmin
    const [comment,setComment] = useState("")
    const [commentAuteur,setCommentAuteur] =useState(localStorage.getItem("Login"))
    let comID = -1

    const handleClickDelete = ((e,comID)=>{   
        e.preventDefault();     
        let comment= comID          
        console.log(comment)
        props.article.comments.splice(comment,1);    
               
        fetch ("http://test3.pascalloria.fr/" +props.id ,{
            method : "PUT",
            headers:{"Content-Type" : "application/json"},
            body :
             JSON.stringify({...props.article})     
        })

            // setTimeout(window.location.reload(),10000)
    })

    const handleClickModifier = ((e)=>{
        e.preventDefault(); 

    })

    const handleClickPoster = ( (e) => {
        e.preventDefault();       
        props.article.comments.push({"text": comment, "auteur":commentAuteur});
        console.log(comment)
        fetch ("http://test3.pascalloria.fr/" +props.id ,{
            method : "PUT",
            headers:{"Content-Type" : "application/json"},
            body :
             JSON.stringify({...props.article})     
        })
        
        // setTimeout(window.location.reload(),2000)
    })
   
    return (
        <div className="comment">
                        {props.article.comments.map((comment) => (                        
                            <div key={comID =comID +1}><br /> 
                                <div className="commentaireAfficher" >    
                                    <p className="comID"> #{comment.com_id=comID }</p>                      
                                    <p>{comment.text}</p> 
                                    <p className="commentAuteur"> ecrit par {comment.auteur}</p>   
                                    {admin && <div className="admin"><button onClick={event => handleClickDelete(event,comment.com_id)}> Supprimer</button>
                                    <button onClick={handleClickModifier}>Editer</button></div>                 
                                    }                                                       
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
                        <label> Pseudo</label>
                        <input
                            value={commentAuteur}
                            onChange= {(e)=> setCommentAuteur(e.target.value)}
                        >

                        </input>

                        <button onClick={handleClickPoster}>Poster</button>
                    </div>


      );
}
 
export default Comment;