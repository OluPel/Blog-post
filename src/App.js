import React from "react";
import Navbar from "./Navbar";
import Home from "./components/Home";
import NewsLetter from "./components/NewsLetter";
import BloggersPage from "./components/BloggersPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/Newsletter">
              <NewsLetter />
            </Route>

            <Route path="/BloggersPage">
              <BloggersPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
