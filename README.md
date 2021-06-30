<h1 align="center"> Busca Usuários no Github </h1>

## ✅ Tipo: Frontend

## 💻 Sobre:

```
Trata-se de um projeto designado ao processo de seleção da Compasso, no qual foi requisitado um sistema que consumindo as apis do github faça a busca e exiba os dados do usuário, os repositório do usuário e o mais visitados do usuário, podendo fazer a busca ou acessar a pagina do usuário direto pela url.
```

## Stack

- ReactJS
- Redux
- redux-thunk
- axios
- Material-Ui
- React-Hook-Form
- Prettier, ESLint, Husky, lint-staged, git-commit-msg-linter
- react-router-dom
  -Jest

## Dependências:

Principais dependências do projeto:

- [Material-UI](https://material-ui.com/)
- [Axios](https://github.com/axios/axios)
- [CLSX](https://www.npmjs.com/package/clsx)
- [React-Hook-Form](https://react-hook-form.com/)
- [React-Redux](https://react-redux.js.org/)
- [Redux](https://redux.js.org/)
- [Redux-Thunk](https://www.npmjs.com/package/redux-thunk)
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [Jest](https://jestjs.io/pt-BR/)
- [Enzyme](https://www.npmjs.com/package/enzyme)

## Como Executar

```sh
# Clone
  git clone https://github.com/wendellGJ/Busca_github.git

# Acessar pasta do repositório
  cd Busca_github

# Instalar dependências
 yarn

# Execução do projeto
  npm start

# Execução dos testes
  yarn test
```

## Melhorias a ser implementadas

- Desacoplar o card de pesquisa no modulo Home do index criando um componente e remover Grid's aninhados
- Desacoplar o card com os dados de usuário do modulo User tirano do index e criando um componente para ele e remover Grid's aninhados
- Refatorar o modulo User a fim de não realizar uma nova requisição a api quando o usuário vier da pagina home através de uma busca
- Melhorar tratamento de erro incluindo modais de erro e um redirect para home no caso de o usuário tentar acessar um usuário que não existe na tela do usuário
- Melhorar os loadings e usar o componente de skeleton no carregamento dos cards no modulo home ao buscar usuário e no modulo user ao listar os repositórios e os mais visitados.
- Refatorar toda Ui a fim de deixar com um aspecto mais bonito e amigável (fazer ajustes na estilização)
- Adicionar constantes de rotas.
- Ajustar testes para uma melhor cobertura
- Implementar internacionalização
