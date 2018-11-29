// Bailee Johnstone, 465P Project, Calendar Grid Component
// Fall 2018
// This componenet displays a single day in either the daily view, 
// weekly view, or monthly view

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
        display: 'flex',
        flexDirection: 'column',
      },
      titleBar: {
        background: theme.palette.secondary.main,
        height: 30,
        display: 'flex',
        border: 1,
      },
      events : {  
        flexGrow: 1,
        overflow: 'auto',
      },
});

// Props to be passed
const DateView = ({
    classes,
    display,
    date,
    deleteEvent,
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
            <div className={classes.events}>
                {
                    date.events && display && <EventList events={date.events} deleteEvent={deleteEvent}/>
                }
            </div> 
        </Paper>
    );
}

export default withStyles(styles)(DateView);