import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RotatingImage from './RotatingImage';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    color: '#fff',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Roboto',
      margin: '0 auto',
      marginTop: 200
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Roboto',
      maxWidth: 1200,
      margin: '0 auto 0'
    },
  },
  img: {
    [theme.breakpoints.down('sm')]: {
      width: 200,
      height: 'auto',
      marginTop: 40
    },
    [theme.breakpoints.up('md')]: {
      width: 600,
      height: 'auto'
    }
  },
  h1: {
    color: '#000',
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      fontWeight: 400,
      margin: theme.spacing(2)
    },
    [theme.breakpoints.up('md')]: {
      color: '#fff',
      fontSize: '2em',
      fontWeight: 400,
      margin: theme.spacing(2)
    }
  },
  flexGrow: {
    flexGrow: 1
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.h1}>Blot is an open-source project created by <a href="https://mconrad.io">Matthew Conrad</a> and was bootstrapped with Create React App.</h1>
      </div>
      <div className={classes.flexGrow}></div>
      <div>
        <RotatingImage />
      </div>
    </div>
  )
}