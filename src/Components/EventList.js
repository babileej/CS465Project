// Bailee Johnstone, 465P Project, Calendar Grid Component
// Fall 2018

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    eventList: {

    },
});

const EventList = ({
    classes,
    events,
}) => {
    return(
        <div className={classes.eventList}>
            <List>
                {
                    events && events.map(item => {
                        return(
                            <ListItem>
                                <ListItemText
                                    primary={item.name}
                                    secondary={new Date(item.date).toLocaleTimeString('en-US')}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="Delete">
                                    <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        );    
                    })
                }
            </List>
        </div>
    )
}
export default withStyles(styles)(EventList); 