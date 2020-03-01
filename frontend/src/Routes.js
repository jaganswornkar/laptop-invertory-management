import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import App from './App';
import Admin from './Components/Admin/Admin';
import { Description } from './Components/Description';
import Signin from './Components/Signin';
import Error from './Components/Error';



class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={App} />
          <Route path='/home' exact component={App} />
          <Route path='/Admin' exact component={Admin} />
          <Route path='/signin' exact component={Signin} />
          <Route path='/home/:id' exact component={Description} />
          <Route component={Error} />


          
        </Switch>
      </Router>
    )
  }
}

export default Routes