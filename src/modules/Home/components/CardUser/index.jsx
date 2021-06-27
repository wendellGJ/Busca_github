import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useStyles } from './styles';

export default function CardUser() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />}
        title="Name"
        subheader="User Name"
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {/* Bio */}
          minha bio <br />
          well meaning and kindly.
          <br />a benevolent smile
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="primary">
          Acessar Perfil
        </Button>
      </CardActions>
    </Card>
  );
}
