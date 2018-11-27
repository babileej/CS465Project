// Bailee Johnstone, 465P Project, Calendar Grid Component
// Fall 2018

import React from 'react';
import DateView from './DateView';
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

const CalendarGrid = ({
  classes,
  dates,
  events,
}) => {
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
      <div className={classes.container}>
        {
          weekToMap && weekToMap.map(value => (
          <div key={value} className= {special}>
            <DateView display={value.display} date = {value} events = {events}/>
          </div>
        ))}
      </div>
    );
  } 
  return (
    <div>
      {weeks}
    </div>
  );
}

export default withStyles(styles)(CalendarGrid);