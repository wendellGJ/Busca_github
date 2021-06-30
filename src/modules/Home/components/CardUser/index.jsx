import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { TEXT } from '../../constants/texts';
import { useStyles } from './styles';

/**
 * @CardUser Componente responsável pela exibição do card com informações do usuário
 * @CriadoEm 27/06/2021
 */
export default function CardUser({ user }) {
  const classes = useStyles();
  const pageUser = typeof user?.login === 'string' ? `/${user?.login}` : '/home';
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={user?.avatar_url} className={classes.avatar} />}
        title={user?.name}
        subheader={user?.login}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {user?.bio}
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
/**
 * @prop name {string} nome do usuário no github
 * @prop login {string} login do usuário no github
 * @prop bio {string} bio do usuario no github
 * @prop avatar_url {string} url com imagem do usuario no github
 */
CardUser.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string,
    name: PropTypes.string,
    avatar_url: PropTypes.number,
    bio: PropTypes.string,
  }),
};
CardUser.defaultProps = {
  user: {
    login: '',
    name: '',
    avatar_url: '',
    bio: '',
  },
};
