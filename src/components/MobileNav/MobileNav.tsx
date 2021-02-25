import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileMenu from '../MobileMenu/MobileMenu';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Roboto',
    height: 60
  },
  img: {
    width: 36,
    margin: theme.spacing(2)
  },
  h2: {
    marginRight: theme.spacing(3)
  }
}));

export default function MobileNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MobileMenu />
      <div className={classes.root}>
        <img className={classes.img} src="../images/blot.svg" alt="Blot Logo"></img>
        <h1 className={classes.h2}>Blot</h1>
      </div>
    </div>
  )
}