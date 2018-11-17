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
    };        
    handleClick = view => {
        this.setState({dates: CalendarFunctions.changeView(view)});
    }
    componentDidMount = () => {
        this.setState({dates: CalendarFunctions.changeView('Weekly')});
    }
    openForm = () => {
        this.setState({open: !this.state.open})
    }  
    render() {
        const { dates } = this.state;
        const { open } = this.state;
        return (
            <div className="CalendarApp">
                <ButtonAppBar handleClick={this.handleClick}/>
                <CalendarGrid dates={dates}/>
                <Form openForm={this.openForm} open={open}/>
            </div>
        );
    }
}

export default CalendarApp;
