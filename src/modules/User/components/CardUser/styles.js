import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 250,
    padding: theme.spacing(2),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  cardHeader: {
    padding: '0px !important',
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  containerBtn: {
    [theme.breakpoints.up('sm')]: {
      minWidth: theme.spacing(65),
    },
  },
}));
