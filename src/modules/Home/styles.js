import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#f5f5f5',
    minHeight: theme.spacing(80),
    [theme.breakpoints.down('sm')]: {
      minHeight: theme.spacing(50),
    },
  },
}));
