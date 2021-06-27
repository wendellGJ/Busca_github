import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import images from '../../assets/imgs';
import { useStyles } from './styles';

/**
 *
 * @Footer Componente responsável pelo Header da aplicacao
 * @CriadoEm 27/06/2021
 */
export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center" alignContent="center" className={classes.containerFooterAbaixo}>
        <Grid item xs={3}>
          <img src={images.GithubBig} alt="logo" className={classes.logo} />
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={3}>
          <Typography className={classes.txtCompanhia}>Busa Usuáros Github</Typography>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </div>
  );
}
