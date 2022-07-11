import NavBar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import React, { useEffect } from "react";
import ArticlePage from "./ArticlePage";
import Editer from "./Edit";
import PageNotFound from "./PageNotFound";
import Contact from "./Contact"
import NavBarUser from "./NavbarUser";
import ArticlePageUser from "./ArticlePageUser";
import Login from "./Login";

function App() {
  
  let estAdmin= false
  
    if(localStorage.getItem("Admin")=="true"){
      estAdmin= true       
    } else {
      estAdmin = false       
    }    
 


  return (

    <Router>
      {estAdmin && <div className="App">        
         <NavBar></NavBar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>

            <Route path="/article/:id">
              <ArticlePage></ArticlePage>
            </Route>
            <Route path="/edit/:id">
              <Editer />
            </Route>
            <Route path="/login">
                <Login />
            </Route>

            <Route path="/contact">
              <Contact></Contact>

            </Route>

            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>          
        </div>   

      </div>}
        {!estAdmin && <div className="user">
          <NavBarUser />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/article/:id">
                <ArticlePageUser />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>  
          </div>
        </div> }

    </Router>
  );
}

export default App;
