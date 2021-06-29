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

- Ajustar configurações dos testes que estão quebrando
- Refatorar o modulo User a fim de não realizar uma nova requisição a api quando o usuário vier da pagina home através de uma busca
- Implementar internacionalização
- Adicionar constantes de rotas.
- Refatorar toda Ui a fim de deixar com um aspecto mais bonito e amigável
