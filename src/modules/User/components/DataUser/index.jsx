import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useStyles } from './styles';

export default function DataUser() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item xs={4}>
            <CardHeader
              avatar={<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />}
              title="Name"
              subheader="User Name"
              className={classes.cardHeader}
            />
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={7}>
            <Typography variant="body2" component="p">
              minha bio <br />
              well meaning and kindly.
              <br />a benevolent smile
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="primary">
          Acessar Githug
        </Button>
        <Button variant="outlined" color="primary">
          Repositorios
        </Button>
        <Button variant="outlined" color="primary">
          Mais visitados
        </Button>
      </CardActions>
    </Card>
  );
}
