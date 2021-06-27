import { Grid } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import './index.css';
import Routes from './routes';
import store from './store';
import Footer from './utils/components/Footer/index';
import Header from './utils/components/Header/index';
import appTheme from './theme/index';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Grid container item direction="column" justify="space-between" alignItems="stretch">
          <Header />
          <Routes />
          <Footer />
        </Grid>
      </ThemeProvider>
    </Provider>
  );
}
