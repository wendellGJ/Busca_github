import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    // height: theme.spacing(100),
    backgroundColor: '#f5f5f5',
    minHeight: theme.spacing(75),
    [theme.breakpoints.down('sm')]: {
      minHeight: theme.spacing(50),
    },
  },
  containerPaper: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(1),
    width: theme.spacing(80),
    minHeight: theme.spacing(16),
  },
  containerInput: {
    margin: theme.spacing(1),
    width: '25ch',
  },
  iputText: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    // height: theme.spacing(1),
  },
  btn: {
    marginBottom: theme.spacing(1),
  },
  logo: {
    marginTop: theme.spacing(2),
  },
}));
