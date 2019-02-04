import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route,} from "react-router-dom";
import PortfolioHome from "../PortfolioHome/PortfolioHome";
import AdminHome from "../AdminHome/AdminHome";
import Header from "../Header/Header";

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <Router>
          <div className="App">
          <header><Header /></header>
              <Route extact path="/portfolio" component={PortfolioHome} />
              <Route extact path="/admin" component={AdminHome} />
            
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
