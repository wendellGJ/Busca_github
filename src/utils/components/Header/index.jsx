import { Grid, Typography, Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets/imgs';
import { TEXT } from '../../constants/text';
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
    <Grid container spacing={3} justify="space-between" alignContent="center" className={classes.container}>
      <Button size="small" onClick={handleClick}>
        <img src={images.HomeIcon} alt="logo" className={classes.logo} />
      </Button>
      <Typography className={classes.txtCompanhia}>{TEXT.HEADER}</Typography>
    </Grid>
  );
}
