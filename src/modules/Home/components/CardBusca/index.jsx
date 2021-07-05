import { Button, Grid, Paper, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { asyncGetUser } from '../../../../store/ducks/user';
import images from '../../../../utils/assets/imgs/index';
import { TEXT } from '../../constants/texts';
import { useStyles } from './styles';

export default function CardBusca() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(asyncGetUser(data.name));
  };

  return (
    <Paper elevation={3}>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={12} sm={4}>
          <img src={images.GithubBig} alt="logo" className={classes.logo} />
        </Grid>
        <Grid item container spacing={2} xs={12} sm={8}>
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
    </Paper>
  );
}
