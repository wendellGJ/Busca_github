import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TEXT } from '../../constants/texts';
import { useStyles } from './styles';

/**
 * @CardUser Componente responsável pela exibição do card com informações do usuário
 * @CriadoEm 27/06/2021
 */
export default function CardUser() {
  const classes = useStyles();
  const userState = useSelector((state) => state.user);
  const pageUser = `/${userState?.user.login}`;

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
        <Link to={pageUser}>
          <Button variant="contained" color="secondary">
            {TEXT.ACCESS_PERFIL}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
