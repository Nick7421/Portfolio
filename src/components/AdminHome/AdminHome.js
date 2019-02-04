import React, { Component } from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import AdminForm from '../AdminForm/AdminForm'

class AdminHome extends Component {
  render() {
    return (
      <div>
      <h1>Admin Home Page</h1>
      <AdminForm />
        
      </div>
    )
  }
}

const mapStoreToProps = reduxStore => ({
    reduxStore
  });
  
  export default connect(mapStoreToProps)(AdminHome);