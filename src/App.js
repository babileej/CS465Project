// Bailee Johnstone, 465P Project, Calendar Grid Component
// Fall 2018
// Main Application

import React, { Component } from 'react';
import CalendarGrid from './Components/CalendarGrid';
import Navbar from './Components/Navbar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';
import './App.css';


const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: '#b2ff59',
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Navbar/>
          <CalendarGrid/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
