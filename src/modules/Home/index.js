import { Button, Grid, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetUser } from '../../store/ducks/user';
import images from '../../utils/assets/imgs/index';
import CardUser from './components/CardUser';
import { TEXT } from './constants/texts';
import { useStyles } from './styles';

/**
 * @Home Componente responsável pela exibição da pagina Home e chamadas dos componentes da mesma.
 * @CriadoEm 27/06/2021
 */
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
        <Grid
          container
          item
          className={classes.containerPaper}
          justify="center"
          alignItems="center"
          xs={12}
        >
          <Paper elevation={3}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
              <Grid
                item
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs={12}
                sm={4}
              >
                <img src={images.GithubBig} alt="logo" className={classes.logo} />
              </Grid>
              <Grid
                item
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="center"
                xs={12}
                sm={8}
              >
                <Grid item xs={12}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} className={classes.inputText}>
                        <TextField
                          label={TEXT.NAME}
                          variant="outlined"
                          color="secondary"
                          size="small"
                          type="text"
                          placeholder={TEXT.INPUT}
                          {...register('name', {})}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          size="small"
                          color="secondary"
                          type="submit"
                          className={classes.btn}
                        >
                          {TEXT.BTN}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
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
