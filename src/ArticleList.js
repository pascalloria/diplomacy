import React from "react";
import { Link } from "react-router-dom";

const ArticleList = (props) => {
    const articles = props.articles
    // {console.log(articles)}
    return (        
        <div className="articles">
            <h2> Campagne </h2>
            {articles.map((article) => (
                
                <div className="articles-preview" key={article._id}>
                    <Link to={`/article/${article._id}`}><h2> {article.titre} </h2>
                    <p> Ecrit par {article.auteur}</p></Link>
                </div>
            ))}
        </div>
     );
}
 
export default ArticleList;