import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import App from './App';
import Admin from './Components/Admin/Admin';
import { Description } from './Components/Description';
import Signin from './Components/Signin';



class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={App} />
          <Route path='/Admin' exact component={Admin} />
          <Route path='/signin' exact component={Signin} />
          <Route path='/:id' exact component={Description} />
          
        </Switch>
      </Router>
    )
  }
}

export default Routes