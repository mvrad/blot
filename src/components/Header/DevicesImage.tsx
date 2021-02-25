import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
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
      margin: '0 auto',
      marginTop: 600,
      marginBottom: 600
    },
  },
  img: {
    [theme.breakpoints.down('sm')]: {
      width: 280,
      height: 'auto',
      marginBottom: 40
    },
    [theme.breakpoints.up('md')]: {
      width: 500,
      height: 'auto',
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2)
    }
  },
  h1: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      fontWeight: 400,
      margin: theme.spacing(2)
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2em',
      fontWeight: 400,
      margin: theme.spacing(2)
    }
  },
  flexGrow: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <img className={classes.img} src="../images/landing_devices.png" alt="Responsive Device Images"></img>
      </div>
      <div className={classes.flexGrow}></div>
      <div>
        <h1 className={classes.h1}>Blot works across multiple device screen sizes, so you can enjoy using it from your phone, tablet, or laptop.</h1>
      </div>
    </div>
  )
}