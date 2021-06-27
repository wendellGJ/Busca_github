import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: theme.spacing(100),
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  container: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5),
    },
  },
  divider: {
    marginLeft: '0px !important',
  },
}));
