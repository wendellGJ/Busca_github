import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  containerFooterAbaixo: {
    backgroundColor: '#FAC21C',
    padding: theme.spacing(1, 4),
  },
  containerLogo: {
    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start',
      flexDirection: 'column',
      textAlign: 'left',
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
    },
  },

  containerItensFooter: {
    padding: theme.spacing(4, 0),
  },

  txtCompanhia: {
    color: '#FFFFFF',
    fontSize: '14px',
    letterSpacing: '0.08px',
    lineHeight: '19px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      padding: theme.spacing(1, 0),
    },
  },

  logo: {
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  gridCompanhia: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(2),
      justifyContent: 'center',
    },
  },
}));
