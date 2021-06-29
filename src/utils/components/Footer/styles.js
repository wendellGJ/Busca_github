import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#003040',
    padding: theme.spacing(2, 4),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 3),
    },
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
