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
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));
