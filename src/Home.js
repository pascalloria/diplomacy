
import ArtcileList from "./ArticleList";
import UseFetch from "./UseFetch";
import React from "react";

const Home = () =>{


    const {data:articles, isPending, error} = UseFetch("http://localhost:8000/articles")

    
    return (
        <div className="home">
            <div className="intro">
                <p> Bienvenue à toi</p>
                <br />
                <p> Es-tu un seigneur injustement harcelé au porte de ton chateau par des citoyens ingrats ?</p>
                <br />
                <p> Grace à ce guide, a toi la joie de voir ces hordes de va-nue-pied balayer par ton armeé.
                Les cadavres de ces imbéciles joncheront les imposantes fortification de ta cité.</p>
            </div>
            <br />
            <p> Sur ce site tu trouveras des builds Orders et conseil pour réussir chaque mission de la campagne</p>

            <br /><br />

            {isPending && <div> Loadding ...</div>}
            {error && <div> {error}</div>}
            {articles && <ArtcileList articles={articles} />}
            
        </div>
    );


}

export default Home