import React from "react";
import "./index.css";
import TopBar from "./TopBar";
// eslint-disable-next-line
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import HomePage from "./HomePage.js";
const history = createHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <TopBar/>
        <Route
          path="/"
          exact
          component={HomePage}
        />
      </Router>
    </div>
  );
}
export default App;
