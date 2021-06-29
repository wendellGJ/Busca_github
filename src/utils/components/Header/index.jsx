import { Grid, Typography, Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets/imgs';
import { useStyles } from './styles';

/**
 *
 * @Footer Componente responsável pelo Header da aplicacao
 * @CriadoEm 27/06/2021
 */
export default function Footer() {
  const classes = useStyles();
  const handleClick = () => {
    window.open('/home', '_self');
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center" alignContent="center" className={classes.containerFooterAbaixo}>
        <Grid item xs={3}>
          <Button size="small" onClick={handleClick}>
            <img src={images.HomeIcon} alt="logo" className={classes.logo} />
          </Button>
        </Grid>
        <Grid item xs={1} sm={2} />
        <Grid item xs={7} sm={5}>
          <Typography className={classes.txtCompanhia}>Busa Usuáros Github</Typography>
        </Grid>
        <Grid item xs={1} sm={2} />
      </Grid>
    </div>
  );
}
