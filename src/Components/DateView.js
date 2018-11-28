// Bailee Johnstone, 465P Project, Calendar Grid Component
// Fall 2018
// This componenet displays a single day in either the daily view, weekly view, or monthly view
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import EventList from './EventList';

// Styles
const styles = theme => ({
    paper: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-around',
       // overflow: 'auto',
      },
      titleBar: {
        background: theme.palette.secondary.main,
        display: 'flex',
        border: 1,
      },
});

// Props to be passed
const DateView = ({
    classes,
    display,
    date,
    events
}) => {
    // Display data. If date is before current day, disable events
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
            <EventList events={events}/> 
        </Paper>
    );
}

export default withStyles(styles)(DateView);