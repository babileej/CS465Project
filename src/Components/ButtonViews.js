import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginBottom: 30,
  },
  input: {
    display: 'none',
  },
});


function ContainedButtons({classes, handleClick}) {
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => handleClick('Today')}>
        Today
      </Button>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => handleClick('Weekly')}>
        Weekly
      </Button>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => handleClick('Monthly')}>
        Monthly
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);