import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#f5f5f5',
    minHeight: theme.spacing(75),
    [theme.breakpoints.down('sm')]: {
      minHeight: theme.spacing(50),
    },
  },
  containerCard: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
}));
