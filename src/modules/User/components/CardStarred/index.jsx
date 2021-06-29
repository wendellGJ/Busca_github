import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { USER } from '../../constants/texts';
import { useStyles } from './styles';

/**
 * @CardRepo Componente responsável pela exibição do card com informações do repositório exibido em mais visitados.
 * @CriadoEm 27/06/2021
 */
export default function CardStarred({ starred }) {
  const classes = useStyles();
  const handleClick = () => {
    window.open(starred.svn_url, '_blank');
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {starred.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {starred.language}
        </Typography>
        <Typography variant="body2" component="p">
          {starred.description}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`${USER.STARS} ${starred.stargazers_count}`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`${USER.FORKS} ${starred.forks}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>
          {USER.ACCESS_REPO}
        </Button>
      </CardActions>
    </Card>
  );
}
/**
 * @prop name {string} nome do repositório do github
 * @prop language {string} linguagem em que o projeto foi feito
 * @prop description {string} descrição do projeto
 * @prop svn_url {string} url para acessar o repositório no github via browser
 * @prop forks {number} numero de forks do repositório
 * @prop stargazers_count {number} numero de estrelas do repositório
 */
CardStarred.propTypes = {
  starred: PropTypes.shape({
    name: PropTypes.string,
    forks: PropTypes.number,
    description: PropTypes.string,
    stargazers_count: PropTypes.number,
    language: PropTypes.string,
    svn_url: PropTypes.string,
  }),
};
CardStarred.defaultProps = {
  starred: {
    name: '',
    forks: 0,
    description: '',
    stargazers_count: 0,
    language: '',
    svn_url: '',
  },
};
