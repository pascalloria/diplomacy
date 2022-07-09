import NavBar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import React from "react";
import ArticlePage from "./ArticlePage";
import Editer from "./Edit";
import PageNotFound from "./PageNotFound";
import Contact from "./Contact"

function App() {

  return (
    <Router>
      <div className="App">        
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

            <Route path="/contact">
              <Contact></Contact>

            </Route>

            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>          
        </div>        
      </div>
    </Router>
  );
}

export default App;
