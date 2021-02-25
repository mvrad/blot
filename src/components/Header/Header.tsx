import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DemoButton from './DemoButton';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#fff',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Roboto',
      margin: '0 auto',
      marginTop: 40
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Roboto',
      maxWidth: 1200,
      margin: '0 auto',
      marginTop: 160
    },
  },
  img: {
    [theme.breakpoints.down('sm')]: {
      width: 200,
      height: 'auto',
      marginTop: 40
    },
    [theme.breakpoints.up('md')]: {
      width: 300,
      height: 'auto'
    }
  },
  h1: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
      margin: theme.spacing(3)
    },
    [theme.breakpoints.up('md')]: {
      color: '#fff',
      fontSize: '4em',
      margin: theme.spacing(2)
    }
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexGrow: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.flexColumn}>
        <div>
          <h1 className={classes.h1}>Make the most of your notes and lists with Blot, an easy-to-use web app.</h1>
        </div>
        <div>
        <DemoButton />
      </div>
      </div>
      <div className={classes.flexGrow}></div>
      <div>
        <img className={classes.img} src="../images/sticky-note.svg" alt="Blot Logo and Note"></img>
      </div>
    </div>
  )
}