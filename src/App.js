import NavBar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import React from "react";
import ArticlePage from "./ArticlePage";
import Editer from "./Edit";

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
          </Switch>          
        </div>        
      </div>
    </Router>
  );
}

export default App;
