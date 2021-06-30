import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#f5f5f5',
    minHeight: theme.spacing(80),
    [theme.breakpoints.down('sm')]: {
      minHeight: theme.spacing(50),
    },
  },
  containerPaper: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing(2),
    // width: theme.spacing(80),
    // minHeight: theme.spacing(75),
  },
  inputText: {
    marginTop: theme.spacing(2),
  },
  btn: {
    marginBottom: theme.spacing(2),
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
    },
  },
}));
