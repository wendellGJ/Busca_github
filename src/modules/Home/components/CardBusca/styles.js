import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
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
    // height: theme.spacing(1),
  },
  btn: {
    marginBottom: theme.spacing(1),
  },
  logo: {
    marginTop: theme.spacing(2),
  },
}));
