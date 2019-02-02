import React, { Component } from 'react'
import {connect} from 'react-redux';
import axios from 'axios';

class AdminHome extends Component {
  render() {
    return (
      <div>
      <p>Admin Home Page</p>
        
      </div>
    )
  }
}

const mapStoreToProps = reduxStore => ({
    reduxStore
  });
  
  export default connect(mapStoreToProps)(AdminHome);