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
        this.setState({dates: CalendarFunctions.changeView(view)});
    }
    componentDidMount = () => {
        this.setState({dates: CalendarFunctions.changeView('Weekly')});
    }
    openForm = () => {
        this.setState({open: true});
    }
    closeForm = () => {
        this.setState({open: false});
    }
    handleSubmit = event => {
        this.setState({open: false});
        const form = event.target;
        const data = new FormData(form);
        // Check date, time, and name so no dupe events
        // send to local storage
        window.localStorage.setItem(localStorage.length+1, data);
       
    }  
    render() {
        const { dates } = this.state;
        const { open } = this.state;
        return (
            <div className="CalendarApp">
                <ButtonAppBar handleClick={this.handleClick}/>
                <CalendarGrid dates={dates}/>
                <Form openForm={this.openForm} open={open} closeForm={this.closeForm} handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default CalendarApp;
