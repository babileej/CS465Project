// Bailee Johnstone, 465P Project, Calendar Grid Component
// Fall 2018

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Stylings for this particular element (calendar grid)
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 360,
    width: 140,
    textAlign: 'center',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  // Colored gradient header of each grid item
  titleBar: {
    background:
    'linear-gradient(to bottom, rgba(142,252,32,1) 0%, ' +
    'rgba(142,252,32,.6) 70%, rgba(0,0,0,0) 100%)',
  }
});

class GuttersGrid extends React.Component {
  state = {
    spacing: '14',
  };
  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    let today = new Date().getDate();
    let dayOfWeek = new Date().getDay();
    let day;
    switch (dayOfWeek) {
      case 0:
          day = "Sunday";
          break;
      case 1:
          day = "Monday";
          break;
      case 2:
          day = "Tuesday";
          break;
      case 3:
          day = "Wednesday";
          break;
      case 4:
          day = "Thursday";
          break;
      case 5:
          day = "Friday";
          break;
      case 6:
          day = "Saturday";
          break;
      default:
          break;
  }
    let dates = [{day, today}, today + 1, today + 2, today + 3, today + 4, today + 5, today + 6];
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {dates.map((day, date) => (
              <Grid key={day} item>
                <Paper className={classes.paper}>
                    <Typography variant="h6" className={classes.titleBar}>
                        {day} {date}
                    </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.control}></Paper>
        </Grid>
      </Grid>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);