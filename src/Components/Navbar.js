// Bailee Johnstone, 465P Project, Calendar Grid Component
// Fall 2018

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dropdown from'./Dropdown';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 40,
  },
  grow: {
    flexGrow: 1,
  },
  navbar: theme.mixins.toolbar,
});

const ButtonAppBar = props => {
    const { classes } = props;
    return (
    <div className={classes.root}>
        <AppBar position="fixed">
            <Toolbar>
                <Dropdown/>   
                <Typography variant="h5" color="inherit" className={classes.grow}>
                    Calendar
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        <div className={classes.navbar}></div>
    </div>
    );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);