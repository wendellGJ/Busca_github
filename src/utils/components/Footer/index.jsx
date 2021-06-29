import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import images from '../../assets/imgs';
import { TEXT } from '../../constants/text';
import { useStyles } from './styles';

/**
 *
 * @Footer Componente responsável pelo footer da aplicacao
 * @CriadoEm 27/06/2021
 */
export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify="space-between" alignContent="center" className={classes.container}>
      <img src={images.GithubBig} alt="logo" className={classes.logo} />
      <Typography className={classes.txtCompanhia}>{TEXT.FOOTER}</Typography>
    </Grid>
  );
}
