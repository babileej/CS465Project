// Bailee Johnstone, 465P Project, Calendar Grid Component
// Fall 2018

// This is the form for adding an event to the calendar

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { DialogContent, DialogActions, DialogTitle } from '@material-ui/core';


// Styles
const styles = theme => ({
    formControl: {
      margin: theme.spacing.unit,
    },
    button: {
        position: 'absolute',
        top: 100,
        right: 125
    },
    submitButton: {
        top: 10,
    },
});

class Form extends React.Component {
    state = {
        event: {
            name: undefined,
            date: undefined,
            location: undefined,
            attendees: undefined,
        },   
    };
    handleChange = name => event => {
        this.setState({
          event: Object.assign({}, this.state.event, {[name]:event.target.value})
        });
    };
    clearForm = () => {
        let tempEvent = Object.assign({}, this.state.event);
        this.setState({event: { 
            name: undefined,
            date: undefined,
            location: undefined,
            attendees: undefined,}
        });
        this.props.handleSubmit(tempEvent);
    };
    render() {
        const { classes } = this.props;
        const { open } = this.props;
        const { openForm } = this.props;
        const { closeForm } = this.props;
        return (
            <div>
                <Button 
                    variant="fab" 
                    color="primary" 
                    aria-label="Add" 
                    className={classes.button} 
                    onClick={openForm}
                    >
                    <AddIcon />
                </Button>
                <Dialog open={open}>
                    <DialogTitle>Add Event</DialogTitle>
                        <DialogContent>
                            <form>
                                <TextField
                                    label="Event Name"
                                    className={classes.formControl}
                                    required
                                    type="text"
                                    value= {this.state.event.name}
                                    onChange={this.handleChange("name")}
                                />
                                <TextField
                                    id="datetime-local"
                                    label="Event Date and Time"
                                    type="datetime-local"
                                    defaultValue="2018-11-30T10:30"
                                    required
                                    className={classes.formControl}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value= {this.state.event.date}
                                    onChange={this.handleChange("date")}
                                />
                                <TextField
                                    label="Location"
                                    className={classes.formControl}
                                    type="text"
                                    value= {this.state.event.location}
                                    onChange={this.handleChange("location")}
                                />
                                <TextField
                                    label="Attendees"
                                    className={classes.formControl}
                                    type="text"
                                    value= {this.state.event.attendees}
                                    onChange={this.handleChange("attendees")}
                                />
                            </form>
                            <DialogActions>
                                <Button className={classes.submitButton} onClick={() => this.clearForm()}>
                                    Submit
                                </Button>
                                <Button className={classes.submitButton} onClick={closeForm}>
                                    Cancel
                                </Button>
                            </DialogActions>
                        </DialogContent>
                </Dialog>
            </div>
        )
    }
}
export default withStyles(styles)(Form);