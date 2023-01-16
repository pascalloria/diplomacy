
import ArticleList from "./ArticleList";
import UseFetch from "./UseFetch";
import React from "react";

const Home = () =>{

    const {data:articles, isPending, error} = UseFetch("https://api.pascalloria.fr") 
    
    
    return (
        <div className="home">
            <div className="intro">
                <h1>Guide : Diplomacy is not an option</h1>
                <br />
                <p> Bienvenue à toi</p>
                <br />
                <p> Es-tu un seigneur injustement harcelé au porte de ton chateau par des citoyens ingrats ?</p>
                <br />
                <p> Grace à ce guide, a toi la joie de voir ces hordes de va-nue-pied balayer par ton armeé.
                Les cadavres de ces imbéciles joncheront les imposantes fortification de ta cité.</p>
            </div>
            <br />
            <p> Sur ce site tu trouveras des <strong>build Order</strong> et  <strong>conseil</strong> pour réussir <em>chaques missions de la campagne</em> </p>

            <br /><br />

            {isPending && <div> Loadding ...</div>}
            {error && <div> {error}</div>}
            {articles && <ArticleList articles={articles} />}
            
        </div>
    );


}

export default Home