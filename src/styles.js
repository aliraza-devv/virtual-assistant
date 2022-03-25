import { makeStyles } from '@material-ui/core/styles';
import Image from './images/background.png'

export default makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    color: 'white',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 90,
    height: '80px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'rgba(21, 101, 192)',
  },
  image: {
    marginLeft: 20,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '3%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#4E57B7',
    margin: '0 12px',
    fontFamily: ['Raleway'],
    textAlign: 'center',
    height: '25vmin',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
      width: '100%',
      height: 'initial',
      '&:nth-of-type(1)': {
        marginBottom: '12px',
      },
    },
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  logoContainer: {
    padding: '0 5%',
    display: 'flex',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
    },
  },
  alanLogo: {
    height: '27vmin',
    borderRadius: '15%',
    padding: '0 5%',
    margin: '3% 0',
    [theme.breakpoints.down('sm')]: {
      height: '35vmin',
    },
  },
  backimg: {
    // backgroundImage: `url(${Image})`,
    backgroundImage: `linear-gradient(to right bottom,
      rgba(216,120,146, 0.55),
      rgba(78,87,183, 0.5)), url(${Image})`,
    height: '100vh'
  },
  heading: {
    color: 'white',
    marginTop: 70,
  },
}));