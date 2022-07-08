
import ArtcileList from "./ArticleList";
import UseFetch from "./UseFetch";
import React from "react";

const Home = () =>{


    const {data:articles, isPending, error} = UseFetch("http://localhost:8000/articles")

    
    return (
        <div className="home">
            {isPending && <div> Loadding ...</div>}
            {error && <div> {error}</div>}
            {articles && <ArtcileList articles={articles} />}
            
        </div>
    );


}

export default Home