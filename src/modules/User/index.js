import { Grid } from '@material-ui/core';
import React from 'react';
import DataUser from './components/DataUser/index';
import TableRepos from './components/TableRepos';
import TableStarred from './components/TableStarred';
import { useStyles } from './styles';

export default function User() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={1} className={classes.container}>
        <Grid container item justify="center" alignItems="center" xs={12}>
          <DataUser />
        </Grid>
        <Grid container item justify="center" alignItems="center" xs={12}>
          <TableRepos />
          <TableStarred />
        </Grid>
      </Grid>
    </>
  );
}
