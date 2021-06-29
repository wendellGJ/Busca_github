import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#FAC21C',
    padding: theme.spacing(2, 4),
  },
  txtCompanhia: {
    color: '#FFFFFF',
    fontSize: '14px',
    letterSpacing: '0.08px',
    lineHeight: '19px',
    textAlign: 'center',
    paddingTop: theme.spacing(2),
  },
  logo: {
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(1),
    },
  },
}));
