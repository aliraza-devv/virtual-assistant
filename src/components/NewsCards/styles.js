import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '45vh',
    padding: '10%',
    borderRadius: '20px 50px',
    boxShadow: '33px 40px 60px -40px rgba(0, 0, 0, 1)',
    color: 'white',
    marginTop: 80,
  },
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  container: {
    padding: '0 5%', width: '100%', margin: 0,
  },
  fontSt: {
    fontFamily: ['Raleway']
  },
});