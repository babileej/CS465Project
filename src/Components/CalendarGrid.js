// Bailee Johnstone, 465P Project, Calendar Grid Component
// Fall 2018

import React from 'react';
import DateView from './DateView';
import ButtonAppBar from './ButtonViews';
import * as CalendarFunctions from './Functions/CalendarFunctions';
import { withStyles } from '@material-ui/core/styles';

// Stylings for this particular element (calendar grid)
const styles = theme => ({
  container: {
    display: 'flex',
    marginLeft: '10%',
    justifyContent: 'center',
    width: '80%',
  },
  cell: {
    height: 350,
    width: 200,
  },
  item: {
    justifyContent: 'center',
  },
});

class CalendarGrid extends React.Component {
  state = {
    spacing: 12,
    dates: undefined,
  };
  handleClick(view) {
    this.setState({dates: CalendarFunctions.changeView(view)});
  }
  componentDidMount(){
    this.setState({dates: CalendarFunctions.changeView('Weekly')});
  }
  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    const { dates } = this.state;
    return (
      <div>
        <ButtonAppBar handleClick={this.handleClick.bind(this)}/>
        <div className={classes.container} spacing={Number(spacing)}>
          {dates && dates.map(value => (
            <div key={value} className= {classes.cell}>
              <DateView display={value.display} date = {value} events = {[]}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(CalendarGrid);