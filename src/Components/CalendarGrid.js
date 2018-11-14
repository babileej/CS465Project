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
  todayCell: {
    height: 350,
    width: 400,
  },
  weekCell: {
    height: 350,
    width: 200,
    display: 'inline-block'
  },
  monthCell: {
    height: 125,
    width: 200,
    display: 'inline-block'
  },
  item: {
    justifyContent: 'center',
  },
});

class CalendarGrid extends React.Component {
  state = {
    spacing: 0,
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
    let rowsToRender = dates ? Math.ceil(dates.length / 7) : 0;
    let weeks = [];
    let i = 0;
    let special;
    if (dates && dates.length === 1) {
      special = classes.todayCell;
    } 
    else if(dates && dates.length === 7) {
      special = classes.weekCell;
    }
    else {
      special = classes.monthCell;
    }
    for(i; i < rowsToRender; ++i){
      let weekToMap = dates.slice(i * 7, (i*7) + 7);
      weeks.push(
        <div className={classes.container} spacing={Number(spacing)}>
          {
            weekToMap && weekToMap.map(value => (
            <div key={value} className= {special}>
              <DateView display={value.display} date = {value} events = {[]}/>
            </div>
          ))}
        </div>
      );
    } 
    return (
      <div>
        <ButtonAppBar handleClick={this.handleClick.bind(this)}/>
        {weeks}
      </div>
    );
  }
}
export default withStyles(styles)(CalendarGrid);