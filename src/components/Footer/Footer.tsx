import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 0,
      margin: '40px auto'
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: 80,
      width: 900,
      margin: '200px auto 0'
    }
  },
  img: {
    marginBottom: theme.spacing(4)
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <a href='https://github.com/mvrad/blot' target='_blank' rel='noopener noreferrer'><img className={classes.img} src="../images/github.svg" alt="GitHub"></img></a>
      </div>
      <div>
        <p>&copy; 2021 Matthew Conrad</p>
      </div>
    </div>
  )
}