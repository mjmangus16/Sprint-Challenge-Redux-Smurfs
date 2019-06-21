import React from "react";
import "./App.css";

import Nav from "./Nav";
import SmurfsList from "./SmurfsList";
import SmurfForm from "./SmurfForm";

import { Route } from "react-router-dom";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
const App = () => {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={SmurfsList} />
      <Route exact path="/smurf-form" component={SmurfForm} />
    </div>
  );
};

export default App;
