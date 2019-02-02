import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class PortfolioHome extends Component {
  render() {
    return <div />;
  }
}





const mapStoreToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStoreToProps)(PortfolioHome);
