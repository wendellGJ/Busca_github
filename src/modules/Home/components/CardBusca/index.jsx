import React from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import images from '../../../../utils/assets/imgs/index';
import { useStyles } from './styles';

function CardBusca() {
  const classes = useStyles();

  return (
    <Grid container item className={classes.containerPaper} justify="center" alignItems="center" xs={12}>
      <Paper elevation={3}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
          <Grid item container direction="row" justify="center" alignItems="center" xs={12} sm={4}>
            <img src={images.GithubBig} alt="logo" className={classes.logo} />
          </Grid>
          <Grid item container spacing={2} direction="row" justify="center" alignItems="center" xs={12} sm={6}>
            <Grid item className={classes.iputText} xs={12}>
              <TextField label="Nome" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} className={classes.btn}>
              <Button variant="contained" size="small" color="primary">
                Buscar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default CardBusca;

// eslint-disable-next-line no-lone-blocks
{
  /* <Grid container justify="center" alignItems="center">
  <Button variant="contained" color="primary">
    Buscar usuário
  </Button>
</Grid>; */
}
