import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    padding: theme.spacing(2),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),

    // [theme.breakpoints.down('sm')]: {
    //   margin: theme.spacing(30),
    // },
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
}));
