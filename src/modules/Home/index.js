import { Grid } from '@material-ui/core';
import React from 'react';
import CardBusca from './components/CardBusca';
import CardUser from './components/CardUser';
import { useStyles } from './styles';

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={1} className={classes.container}>
        <Grid container item justify="center" alignItems="center" xs={12}>
          <CardBusca />
        </Grid>
        <Grid container item justify="center" alignItems="center" xs={12}>
          <CardUser />
        </Grid>
      </Grid>
    </>
  );
}
