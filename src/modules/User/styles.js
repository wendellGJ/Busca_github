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
  card: {
    minWidth: 250,
    padding: theme.spacing(2),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  containerCard: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  cardHeader: {
    padding: '0px !important',
  },
  divider: {
    padding: theme.spacing(1),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
