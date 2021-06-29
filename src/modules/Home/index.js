import { Button, Grid, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetUser } from '../../store/ducks/user';
import images from '../../utils/assets/imgs/index';
import CardUser from './components/CardUser';
import { TEXT } from './constants/texts';
import { useStyles } from './styles';

export default function Home() {
  const classes = useStyles();
  const userState = useSelector((state) => state.user);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(asyncGetUser(data.name));
  };

  return (
    <>
      <Grid container spacing={1} className={classes.container}>
        <Grid container item className={classes.containerPaper} justify="center" alignItems="center" xs={12}>
          <Paper elevation={3}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
              <Grid item container direction="row" justify="center" alignItems="center" xs={12} sm={4}>
                <img src={images.GithubBig} alt="logo" className={classes.logo} />
              </Grid>
              <Grid item container spacing={2} direction="row" justify="center" alignItems="center" xs={12} sm={6}>
                <Grid item xs={12} className={classes.btn}>
                  <Grid item className={classes.iputText} xs={12}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <TextField
                        label={TEXT.NAME}
                        variant="outlined"
                        size="small"
                        type="text"
                        placeholder={TEXT.INPUT}
                        {...register('name', {})}
                      />
                      <Button variant="contained" size="small" color="secondary" type="submit">
                        {TEXT.BTN}
                      </Button>
                    </form>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid container item justify="center" alignItems="center" xs={12}>
          {userState.error && <div>{TEXT.ERROR}</div>}
          {userState.user && <CardUser />}
        </Grid>
      </Grid>
    </>
  );
}
