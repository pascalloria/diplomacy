import React from "react";
import { BrowserRouter as  Route} from 'react-router-dom'
import { useParams } from "react-router-dom";

const RouteAdmin = ({children, ...props}) => {

   if (!localStorage.getItem("Admin" == "true"))
   return null;

return (
   <Route {...props}>
       {children}
   </Route>
);
}

 
export default RouteAdmin;