import React, { Component } from "react";
import { connect } from "react-redux";
import Header from '../Header/Header';
import PortfolioCards from './PortfolioCards';

//Material-UI componenets
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class PortfolioHome extends Component {

 componentDidMount(){
     this.getProjects();
 }

 getProjects = () => {
     const action = { type: 'GET_PROJECTS' };
     this.props.dispatch(action);
 }

  render() {
    return (
        <div>
        <Header />
        <Grid container spacing={32}>
            {this.props.reduxStore.projects.map((projects) => (
                <PortfolioCards key={projects.id} projects={projects} />
            ))}

        </Grid>
        
      </div>
    )
  }
}





const mapStoreToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStoreToProps)(PortfolioHome);
