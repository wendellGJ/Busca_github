import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@material-ui/core';
import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncGetRepos } from '../../../../store/ducks/repos';
import { asyncGetStarred } from '../../../../store/ducks/starred';
import { USER } from '../../constants/texts';
import { useStyles } from './styles';

export default function CardUser({ user }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleClickRepos = () => {
    dispatch(asyncGetRepos(user.login));
  };
  const handleClickStarred = () => {
    dispatch(asyncGetStarred(user.login));
  };
  const handleClickAccessPerfil = () => {
    window.open(user.html_url, '_blank');
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item xs={12}>
            <CardHeader
              avatar={<Avatar alt="Remy Sharp" src={user.avatar_url} className={classes.large} />}
              title={user.name}
              subheader={user.login}
              className={classes.cardHeader}
            />
          </Grid>
          {user.bio && (
            <>
              <Grid item xs={12}>
                <Typography variant="body2" component="p">
                  {user.bio}
                </Typography>
              </Grid>
            </>
          )}
        </Grid>
      </CardContent>
      <CardActions className={classes.containerBtn}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Button variant="contained" color="secondary" onClick={handleClickAccessPerfil}>
              {USER.ACCESS_GITHUB}
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="contained" color="secondary" onClick={handleClickRepos}>
              {USER.REPOS}
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="contained" color="secondary" onClick={handleClickStarred}>
              {USER.STARREDS}
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
/**
 * @prop name {string} nome do usuário no github
 * @prop login {string} login do usuário no github
 * @prop bio {string} bio do usuário no github
 * @prop avatar_url {string} url com imagem do usuário no github
 * @prop html_url {string} url de acesso ao perfil do usuário no usuário no github
 */
CardUser.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string,
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    bio: PropTypes.string,
    html_url: PropTypes.string,
  }),
};
CardUser.defaultProps = {
  user: {
    login: '',
    name: '',
    avatar_url: '',
    bio: '',
    html_url: '',
  },
};
