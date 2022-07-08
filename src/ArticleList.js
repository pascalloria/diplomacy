import React from "react";
import { Link } from "react-router-dom";

const ArtcileList = (props) => {
    const articles = props.articles

    return (        
        <div className="articles">
            <h2> Campagne </h2>
            {articles.map((article)=>(
                <div className="articles-preview" key={article.id}>
                    <Link to={`/article/${article.id}`}><h2> {article.titre} </h2>
                    <p> Ecrit par {article.auteur}</p></Link>
                </div>
            ))}
        </div>
     );
}
 
export default ArtcileList;