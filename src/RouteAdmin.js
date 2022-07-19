import React from "react";
import {Route} from 'react-router-dom'

const RouteAdmin = ({children, ...props}) => {     

   if (localStorage.getItem("Admin") === "true"){  
      
      return (
         <Route {...props}>
            {children}
         </Route>
      );
}}

 
export default RouteAdmin;