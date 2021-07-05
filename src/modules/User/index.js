import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';
import useGitHubUser from '../../utils/helpers/useGitHubUser';
import CardRepo from './components/CardRepo';
import CardStarred from './components/CardStarred';
import CardUser from './components/CardUser';
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
  const userState = useSelector((state) => state.user);
  const reposState = useSelector((state) => state.repos);
  const starredState = useSelector((state) => state.starred);

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
                <CardUser user={userState?.user} />
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
