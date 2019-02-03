import React, { Component } from 'react'
import { connect } from 'react-redux';

//Material-UI components used for the Cards
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


class PortfolioCards extends Component {



  render() {
    return (
      <div>
        
      </div>
    )
  }
}


const mapStoreToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStoreToProps)(PortfolioCards);