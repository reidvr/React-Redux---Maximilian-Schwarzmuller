import React, { Fragment as F } from "react";

import * as api from "../api/index";

import { HashRouter as Router, Route, Switch} from 'react-router-dom'

import NavBar from './layout/NavBar'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import Dashboard from "./dashboard/Dashboard";
import ProjectDetails from "./project/ProjectDetails";
import CreateProject from "./project/CreateProject";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    };
  }

  toggleSignIn = () => {
    this.setState({ signedIn: !this.state.signedIn })
  }

  render() {
   
    return (
      <F>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/create" component={CreateProject} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />

          </Switch>
        </Router>
      </F>
    );
  }
}

export default App;
