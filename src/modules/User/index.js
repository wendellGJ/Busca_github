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
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetRepos } from '../../store/ducks/repos';
import { asyncGetStarred } from '../../store/ducks/starred';
import TableRepos from './components/TableRepos';
import TableStarred from './components/TableStarred';
import { useStyles } from './styles';

export default function User() {
  const classes = useStyles();
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const reposState = useSelector((state) => state.repos);
  const starredState = useSelector((state) => state.starred);
  const handleClickRepos = () => {
    dispatch(asyncGetRepos(userState?.user.login));
  };
  const handleClickStarred = () => {
    dispatch(asyncGetStarred(starredState?.user.login));
  };

  return (
    <>
      <Grid container spacing={1} className={classes.container}>
        <Grid container item justify="center" alignItems="center" xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={4}>
                  <CardHeader
                    avatar={<Avatar alt="Remy Sharp" src={userState?.user.avatar_url} className={classes.large} />}
                    title={userState?.user.name}
                    subheader={userState?.user.login}
                    className={classes.cardHeader}
                  />
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={7}>
                  <Typography variant="body2" component="p">
                    {userState?.user.bio}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button variant="outlined" color="primary">
                Acessar Githug
              </Button>
              <Button variant="outlined" color="primary" onClick={handleClickRepos}>
                Repositorios
              </Button>
              <Button variant="outlined" color="primary" onClick={handleClickStarred}>
                Mais visitados
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid container item justify="center" alignItems="center" xs={12}>
          {reposState.error && <div>Repositório não encontrado :(</div>}
          {reposState.user && <TableRepos />}
          {starredState.error && <div>mais visitados não encontrado :(</div>}
          {starredState.user && <TableStarred />}
        </Grid>
      </Grid>
    </>
  );
}
