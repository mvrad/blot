import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px'
  },
  rotate: {
    height: 'auto',
    animation: 'rotation 10s infinite linear',
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      width: 200
    },
    [theme.breakpoints.up('md')]: {
      width: 300
    }
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.rotate} src="../images/react.svg" alt="Blot Logo and Note"></img>
    </div>
  )
}