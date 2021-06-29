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
 * @CardRepo Componente responsável pela exibição do card com informações do repositório da lista de repositórios do usuário.
 * @CriadoEm 27/06/2021
 */
export default function CardRepo({ repo }) {
  const classes = useStyles();
  const handleClick = () => {
    window.open(repo.svn_url, '_blank');
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {repo.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {repo.language}
        </Typography>
        <Typography variant="body2" component="p">
          {repo.description}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`${USER.STARS} ${repo.stargazers_count}`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`${USER.FORKS} ${repo.forks}`}
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
CardRepo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string,
    forks: PropTypes.number,
    description: PropTypes.string,
    stargazers_count: PropTypes.number,
    language: PropTypes.string,
    svn_url: PropTypes.string,
  }),
};
CardRepo.defaultProps = {
  repo: {
    name: '',
    forks: 0,
    description: '',
    stargazers_count: 0,
    language: '',
    svn_url: '',
  },
};
