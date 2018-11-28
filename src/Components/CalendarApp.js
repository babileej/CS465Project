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
        events: undefined,
    };        
    handleClick = view => {
        let tempDates = [];
        let tempEvents = [];
        tempDates = CalendarFunctions.changeView(view);
        tempEvents = CalendarFunctions.getEvents(tempDates);
        this.setState({dates: tempDates, events: tempEvents});
    }
    componentDidMount = () => {
        let tempDates = [];
        let tempEvents = [];
        tempDates = CalendarFunctions.changeView("Weekly");
        tempEvents = CalendarFunctions.getEvents(tempDates);
        this.setState({dates: tempDates, events: tempEvents});
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
        window.localStorage.setItem(localStorage.length+1, JSON.stringify(event));
        this.setState({events: CalendarFunctions.getEvents(this.state.dates)});
    }  
    render() {
        const { dates } = this.state;
        const { events } = this.state;
        const { open } = this.state;
        return (
            <div className="CalendarApp">
                <ButtonAppBar handleClick={this.handleClick}/>
                <CalendarGrid dates={dates} events={events}/>
                <Form openForm={this.openForm} open={open} closeForm={this.closeForm} handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default CalendarApp;
