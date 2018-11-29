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
    handleClick = newView => {
        this.setState({view: newView, dates: CalendarFunctions.changeView(newView)});
    }
    componentDidMount = () => {
        this.setState({dates: CalendarFunctions.changeView(this.state.view)});
    }
    openForm = () => {
        this.setState({open: true});
    }
    closeForm = () => {
        this.setState({open: false});
    }
    handleSubmit = event => {
        this.setState({open: false});
        // TODO: Check date, time, and name so no dupe events
        // Send event to local storage
        event.id = localStorage.length + 1;
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
                <ButtonAppBar handleClick={this.handleClick}/>
                <CalendarGrid dates={dates} deleteEvent={this.deleteEvent}/>
                <Form openForm={this.openForm} open={open} closeForm={this.closeForm} handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default CalendarApp;
