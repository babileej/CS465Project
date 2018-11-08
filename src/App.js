import React, { Component } from 'react';
import ButtonAppBar from './Components/Navbar';
import CalendarGrid from './Components/CalendarGrid';
import ButtonView from './Components/ButtonViews';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple, lime, grey } from '@material-ui/core/colors';
import './App.css';


const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: lime,
    disabled: grey,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <ButtonAppBar/>
          <ButtonView/>
          <CalendarGrid/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
