import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import CardBusca from './components/CardBusca';
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

  return (
    <>
      <Grid container spacing={1} className={classes.container}>
        <Grid container item justify="center" alignItems="center" xs={12}>
          <CardBusca />
        </Grid>
        <Grid container item justify="center" alignItems="center" xs={12}>
          {userState.error && <div>{TEXT.ERROR}</div>}
          {userState.user && <CardUser user={userState?.user} />}
        </Grid>
      </Grid>
    </>
  );
}
