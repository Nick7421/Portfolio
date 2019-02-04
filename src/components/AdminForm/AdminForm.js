import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  descriptionField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});


class AdminForm extends Component {
  state = {
    title: "Project Name",
    date: "Date",
    tag: "",
    github: "GitHub",
    website: "Website (Optional)",
    description: "Description"
  };

  componentDidMount = () => {
    this.getTags();
}

getTags = () => {
    const action = { type: 'GET_TAGS'};
    this.props.dispatch(action);
}

  handleNameChange = event => {
    this.setState({
        title: event.target.value,
    });
};

handleDateChange = event => {
    this.setState({
        date: event.target.value,
    });
};

handleTagChange = event => {
    this.setState({
        tag: event.target.value,
    });
};

handleGitChange = event => {
    this.setState({
        github: event.target.value,
    });
};

handleWebsiteChange = event => {
    this.setState({
        website: event.target.value,
    });
};

handleDescriptionChange = event => {
    this.setState({
        description: event.target.value,
    });
};

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form
          id="input-form"
          className={classes.container}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-name"
            label="Title Required"
            className={classes.textField}
            value={this.state.title}
            onChange={this.handleNameChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-date"
            label="Required"
            className={classes.textField}
            value={this.state.date}
            onChange={this.handleDateChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            // required
            id="outlined-tag"
            select
            label="Select a project tag"
            className={classes.textField}
            value={this.state.tag}
            onChange={this.handleTagChange}
            variant="outlined"
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select your project type"
            margin="normal"
          >
            {this.props.reduxStore.tags.map(tag => (
              <MenuItem key={tag.id} value={tag.name}>
              {tag.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            required
            id="outlined-github"
            label="Required"
            className={classes.textField}
            value={this.state.github}
            onChange={this.handleGitChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-website"
            label="Website URL (Optional)"
            className={classes.textField}
            value={this.state.website}
            onChange={this.handleWebsiteChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-description"
            label="Required"
            className={classes.descriptionField}
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            margin="normal"
            variant="outlined"
          />
          <Button
            className={classes.button}
            id="submit-btn"
            onClick={this.handleNewProject}
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

AdminForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStoreToProps = reduxStore => ({
    reduxStore
  });

export default connect(mapStoreToProps)(withStyles(styles)(AdminForm));
