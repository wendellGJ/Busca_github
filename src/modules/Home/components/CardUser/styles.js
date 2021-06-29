import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    padding: theme.spacing(2),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));
