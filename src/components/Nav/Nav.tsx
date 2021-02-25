import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LogInButton from './LogInButton';

const useStyles = makeStyles ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    maxWidth: 1200,
    margin: '0 auto',
    paddingTop: 20,
    zIndex: 1
  },
  img: {
    width: 36,
    margin: 16
  },
  navSpacing: {
    margin: 16
  },
  h2: {
    color: "#fff"
  },
  a: {
    color: '#fff',
    '&:hover': {
      color: '#0d47a1',
      transition: '0.4s'
    }
  },
  flexGrow: {
    flexGrow: 1
  }
});

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.root}>
        <img className={classes.img} src="../images/blot.svg" alt="Blot Logo"></img>
        <h2 className={classes.h2}>Blot</h2>
      </div>
      <div className={classes.flexGrow}></div>
      <div className={classes.root}>
        <h3 className={classes.navSpacing}><a className={classes.a} href="index.html">Home</a></h3>
        <h3 className={classes.navSpacing}><a className={classes.a} href="index.html">Sign Up</a></h3>
        <LogInButton />
      </div>
    </div>
  )
}