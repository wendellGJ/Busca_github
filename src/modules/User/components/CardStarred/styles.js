import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(49),
    width: theme.spacing(40),
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(35),
    },
  },
  pos: {
    marginBottom: 12,
  },
}));
