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

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

class PortfolioCards extends Component {
    constructor(props){
        super(props);
    }


  render() {
      //This will display a card will all the project info.
    return (
      <Grid item lg={3}>
      <Card id ="project-card">
         <CardActionArea>
             <CardMedia 
                 component='img'
                 alt='image of project'
                 id='card-media'
                 image ={this.props.projects.thumbnail}
                 title={this.props.projects.name}
             />
             <CardContent>
                <Typography id='project-title' variant="h6">
                {this.props.projects.title}
                </Typography>
                <Typography id = 'project-type' variant ="h6">
                {this.props.projects.name}
                </Typography>
                <Typography id ='project-descrption' variant ="body1">
                {this.props.projects.description}

                </Typography>
             </CardContent>
         </CardActionArea> 
         <CardActions>
             <Link target='_blank' rel='noopener noreferrer' href={this.props.projects.github} variant='contained'>
                 <Button size="small" color="primary" id='git-btn'>
                     Github
                 </Button>
             </Link>
         </CardActions>
      </Card>

      </Grid>
    )
  }
}


const mapStoreToProps = reduxStore => ({
  reduxStore
});

export default connect(mapStoreToProps)(PortfolioCards);