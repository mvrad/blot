import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: 'url(../images/Spectrum-Gradient.svg)',
    backgroundSize: 'cover',
    width: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    height: '30%',
    zIndex: 0,
    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      height: '30%'
    }
  }
}));

export default function Pattern() {
  const classes = useStyles();

  return (
    <div className={classes.root}></div>
  )
}