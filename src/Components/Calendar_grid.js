import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 140,
    textAlign: 'center',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  titleBar: {
    background:
    'linear-gradient(to bottom, rgba(142,252,32,1) 0%, ' +
    'rgba(142,252,32,.6) 70%, rgba(0,0,0,0) 100%)',
  }
});

class GuttersGrid extends React.Component {
  state = {
    spacing: '16',
  };
  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'].map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper}>
                    <Typography variant="h6" className={classes.titleBar}>
                        {value}
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