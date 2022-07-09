import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( 
        <div className="page-not-found">

            <h2> Desolé</h2>

            <p> La page n'a pas été trouvé</p>

            <Link to="/"> Retour</Link>


        </div>
     );
}
 
export default PageNotFound;