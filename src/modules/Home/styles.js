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
}));
