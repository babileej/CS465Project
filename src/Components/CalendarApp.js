// Bailee Johnstone, 465P Project, Calendar Grid Component
// Fall 2018

import React from 'react';
import ButtonAppBar from './ButtonViews';
import Form from './Form';
import * as CalendarFunctions from './Functions/CalendarFunctions';
import CalendarGrid from './CalendarGrid';

class CalendarApp extends React.Component {
    state = {
        dates: undefined,
        open: false,
        view: 'Weekly',
    };        
    // Handle event functions for different views
    handleClick = newView => {
        this.setState({view: newView, dates: CalendarFunctions.changeView(newView)});
    }
    componentDidMount = () => {
        this.setState({dates: CalendarFunctions.changeView(this.state.view)});
    }
    // Open and close form to add event
    openForm = () => {
        this.setState({open: true});
    }
    closeForm = () => {
        this.setState({open: false});
    }
    // Handle submit of event
    handleSubmit = event => {
        this.setState({open: false});
        // Send event to local storage with unique key
        let last = localStorage.key(localStorage.length - 1);
        if(last === null)
            event.id = 1;
        else
            event.id = parseInt(last, 10) + 1;
        window.localStorage.setItem(event.id, JSON.stringify(event));
        this.setState({dates: CalendarFunctions.changeView(this.state.view)});
    }
    deleteEvent = id => {
        window.localStorage.removeItem(id);
        this.setState({dates: CalendarFunctions.changeView(this.state.view)});
    }  
    render() {
        const { dates } = this.state;
        const { open } = this.state;
        return (
            <div className="CalendarApp">
                {/* Loads view buttons */}
                <ButtonAppBar handleClick={this.handleClick}/>
                {/* Loads the actual calendar piece */}
                <CalendarGrid dates={dates} deleteEvent={this.deleteEvent}/>
                {/* Add an event */}
                <Form openForm={this.openForm} open={open} closeForm={this.closeForm} handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default CalendarApp;
