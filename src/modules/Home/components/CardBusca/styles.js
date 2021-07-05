import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  inputText: {
    [theme.breakpoints.up('xs')]: {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2),
    },
  },
  btn: {
    [theme.breakpoints.up('xs')]: {
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2),
    },
  },
  logo: {
    margin: theme.spacing(2),
  },
}));
