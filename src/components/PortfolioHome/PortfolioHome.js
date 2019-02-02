import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Header from '../Header/Header';

class PortfolioHome extends Component {
  render() {
    return (
        <div>
      <p>Portfolio Home Page</p>
        
      </div>
    )
  }
}





const mapStoreToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStoreToProps)(PortfolioHome);
