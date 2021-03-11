import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/abc" component={Home} />
          <Route exact path="/xyz" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
