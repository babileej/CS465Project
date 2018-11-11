// Bailee Johnstone, 465P Project, Calendar Grid Component
// Fall 2018

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    paper: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-around'
      },
      titleBar: {
        background: theme.palette.secondary.main,
        display: 'flex',
        border: 1,
      },
});

const DateView = ({
    classes,
    display,
    date,
    events
}) => {
    console.log(date);
    return (
        <Paper className={classes.paper} style={display ? {} : {background: 'lightGrey'}}>
            <div className={classes.titleBar}>
                <Typography variant='h6' style={{textAlign: 'left', paddingLeft: 8}}>
                    {date.dateOfWeek}
                </Typography>
                <Typography variant='h6' style={{textAlign: 'right', paddingRight: 8, flexGrow: 2}}>
                    {date.date}
                </Typography>
            </div>
        </Paper>
    );
}

export default withStyles(styles)(DateView);