// Bailee Johnstone, 465P Project, Calendar Grid Component
// Fall 2018

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import FormControl from '@material-ui/core/FormControl';
import {white} from '@material-ui/core/colors';


// Styles
const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
    },
    button: {
        position: 'absolute',
        top: 100,
        right: 125
    },
    submitButton: {
        background: theme.palette.primary.main,
        color: white,
    },
});

const Form = ({
    classes,
    open,
    openForm,
    addEvent,
}) => {
    return (
        <div>
            <Button variant="fab" color="primary" aria-label="Add" className={classes.button} onClick={openForm}>
                <AddIcon />
            </Button>
            <Dialog open={open}>
                <div className={classes.container}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="component-simple" required="true">Event Name</InputLabel>
                        <Input id="component-simple"/>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="component-simple" required="true">Event Date</InputLabel>
                        <Input id="component-simple"/>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="component-simple">Location</InputLabel>
                        <Input id="component-simple"/>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="component-simple">Time</InputLabel>
                        <Input id="component-simple"/>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="component-simple">Attendees</InputLabel>
                        <Input id="component-simple"/>
                    </FormControl>
                    <Button className={classes.submitButton} fullWidth="true">
                        Submit
                    </Button>
                </div>
            </Dialog>
        </div>
    )
}
export default withStyles(styles)(Form);