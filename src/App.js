import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Level from "./components/Level/Level";
import Quiz from "./components/Quiz/Quiz";
// import { useState, useEffect } from "react";
// import axios from "axios";

const App = (props) => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/level" component={Level} />
        <Route path="/quiz" coomponent={Quiz} />
      </Switch>
    </div>
  );
};

export default App;
