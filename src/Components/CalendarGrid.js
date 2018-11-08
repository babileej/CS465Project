// Bailee Johnstone, 465P Project, Calendar Grid Component
// Fall 2018

import React from 'react';
import PropTypes from 'prop-types';
import DateView from './DateView';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


// Stylings for this particular element (calendar grid)
const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  cell: {
    height: 350,
  },
});

class GuttersGrid extends React.Component {
  state = {
    spacing: '14',
  };
  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    let today = new Date().getDate();
    //let dayOfWeek = new Date().getDay();
    let dates = [
      {
        'dayOfWeek' : 'S',
        'date': today - 1,
        'display':false
      },
      {
        'dayOfWeek' : 'M',
        'date': today,
        'display':true
      },
      {
        'dayOfWeek' : 'T',
        'date': today + 1,
        'display':true
      },
      {
        'dayOfWeek' : 'W',
        'date': today + 2,
        'display':true
      },
      {
        'dayOfWeek' : 'T',
        'date': today + 3,
        'display':true
      },
      {
        'dayOfWeek' : 'F',
        'date': today + 4,
        'display':true
      },
      {
        'dayOfWeek' : 'S',
        'date': today + 5,
        'display':true
      }
    ];
    return (
     // <Grid container className={classes.root} spacing={16}>
        //<Grid item xs={12} className={classes.root}spacing={16}>
          <Grid container className={classes.root} justify="center" spacing={Number(spacing)}>
            {dates.map(value => (
              <Grid key={value} item className= {classes.cell}>
                <DateView display={value.display} date = {value} events = {[]}/>
              </Grid>
            ))}
          </Grid>
      //  </Grid>
       // <Grid item xs={12}>
       //   <Paper className={classes.control}></Paper>
       // </Grid>
      //</Grid>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);