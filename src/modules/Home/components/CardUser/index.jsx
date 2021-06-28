import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';

export default function CardUser() {
  const classes = useStyles();
  const userState = useSelector((state) => state.user);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={userState?.user.avatar_url} className={classes.large} />}
        title={userState?.user.name}
        subheader={userState?.user.login}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {userState?.user.bio}
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
