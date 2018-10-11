import React, { Component } from 'react';
import ButtonAppBar from './Components/Navbar';
import CalendarGrid from './Components/Calendar_grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple, lime } from '@material-ui/core/colors';
import './App.css';


const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: lime,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <ButtonAppBar/>
          <CalendarGrid/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
