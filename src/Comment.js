import React ,{ useState }from "react"

const Comment = (props) => {


    const [comment,setComment] = useState("")
    const [commentAuteur,setCommentAuteur] =useState(localStorage.getItem("Login"))

    const handleClickPoster = ( (e) => {
        e.preventDefault();       
        props.article.comments.push({"text": comment, "auteur":commentAuteur});
        console.log(comment)
        fetch ("http://localhost:8000/articles/" +props.id ,{
            method : "PUT",
            headers:{"Content-Type" : "application/json"},
            body :
             JSON.stringify({...props.article})     
        })
        window.location.reload()
    })
   
    return (
        <div className="comment">
                        {props.article.comments.map((comment) => (
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


      );
}
 
export default Comment;