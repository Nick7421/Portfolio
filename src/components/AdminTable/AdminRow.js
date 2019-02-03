import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';

 class AdminRow extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AdminRow);