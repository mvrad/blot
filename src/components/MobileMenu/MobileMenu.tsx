import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    fontSize: 52,
    padding: 0,
    marginLeft: 1
  },
  h3: {
    fontSize: 24
  }
});

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null),
    classes = useStyles();

  function handleClick(event: any) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button size="small" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <div className={classes.root}>
          <Icon className={classes.icon}>menu</Icon>
        </div>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.h3} onClick={handleClose}>Home</MenuItem>
        <MenuItem className={classes.h3} onClick={handleClose}>Sign Up</MenuItem>
        <MenuItem className={classes.h3} onClick={handleClose}>Log In</MenuItem>
      </Menu>
    </div>
  );
}