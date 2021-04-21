import React from 'react';
import MainMenu from './project/MainMenu';
import InfoPage from './project/InfoPage';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";


function App() {

  return (
    <Router>

      <div>
      <Switch>
          
          <Route path="/" exact component={MainMenu} />
          <Route path="/InfoPage" component={InfoPage} />
          
        </Switch>  
      </div>

    </Router>
  );
}

export default App;