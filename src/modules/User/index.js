import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetRepos } from '../../store/ducks/repos';
import { asyncGetStarred } from '../../store/ducks/starred';
import useGitHubUser from '../../utils/helpers/useGitHubUser';
import CardRepo from './components/CardRepo';
import CardStarred from './components/CardStarred';
import { USER } from './constants/texts';
import { useStyles } from './styles';

/**
 * @User Componente responsável pela exibição da pagina de Usuário e chamadas dos componentes da mesma.
 * @CriadoEm 27/06/2021
 */
export default function User() {
  const classes = useStyles();

  const getLastItem = (thePath) => thePath.substring(thePath.lastIndexOf('/') + 1);
  useGitHubUser(getLastItem(document.URL));
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const reposState = useSelector((state) => state.repos);
  const starredState = useSelector((state) => state.starred);

  const handleClickRepos = () => {
    dispatch(asyncGetRepos(userState?.user.login));
  };
  const handleClickStarred = () => {
    dispatch(asyncGetStarred(userState?.user.login));
  };
  const handleClickAccessPerfil = () => {
    window.open(userState?.user.html_url, '_blank');
  };

  return (
    <>
      <Grid container spacing={1} className={classes.container}>
        {userState.isLoading && !userState.user && (
          <ReactLoading type="spin" color="#000000" width={50} height={50} />
        )}
        {!userState.isLoading && userState.error && <div>{USER.ERROR}</div>}
        {!userState.isLoading && userState.user && (
          <>
            <Grid container spacing={1} className={classes.container}>
              <Grid container item justify="center" alignItems="center" xs={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <Grid container direction="row" justify="space-between" alignItems="center">
                      <Grid item xs={12}>
                        <CardHeader
                          avatar={
                            <Avatar
                              alt="Remy Sharp"
                              src={userState?.user.avatar_url}
                              className={classes.large}
                            />
                          }
                          title={userState?.user.name}
                          subheader={userState?.user.login}
                          className={classes.cardHeader}
                        />
                      </Grid>
                      {userState?.user.bio && (
                        <>
                          <Grid item xs={12}>
                            <Typography variant="body2" component="p">
                              {userState?.user.bio}
                            </Typography>
                          </Grid>
                        </>
                      )}
                    </Grid>
                  </CardContent>
                  <CardActions className={classes.containerBtn}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={4}>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={handleClickAccessPerfil}
                        >
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
              </Grid>
              <Grid container item justify="center" alignItems="center" xs={12}>
                {(reposState.error || (reposState.repos && reposState.repos.length === 0)) && (
                  <div>{USER.ERROR_REPO}</div>
                )}
                {reposState.repos && reposState.repos.length !== 0 && (
                  <>
                    <Typography variant="h4" component="h2">
                      {USER.REPOS}
                      <br />
                      <br />
                    </Typography>

                    <Grid container justify="center" alignItems="center" spacing={2}>
                      {reposState.repos.map((repo) => (
                        <Grid item xs={12} sm={6} md={4}>
                          <CardRepo repo={repo} />
                        </Grid>
                      ))}
                    </Grid>
                  </>
                )}
                {(starredState.error ||
                  (starredState.starred && starredState.starred.length === 0)) && (
                  <div> {USER.ERROR_STARRED}</div>
                )}
                {starredState.starred && starredState.starred.length !== 0 && (
                  <>
                    <Typography variant="h4" component="h2">
                      <br />
                      {USER.STARREDS}
                      <br />
                      <br />
                    </Typography>
                    <Grid container justify="center" alignItems="center" spacing={2}>
                      {starredState.starred.map((starred) => (
                        <Grid item xs={12} sm={6} md={4} className={classes.containerCard}>
                          <CardStarred starred={starred} />
                        </Grid>
                      ))}
                    </Grid>
                  </>
                )}
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}
