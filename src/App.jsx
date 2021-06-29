import { Grid, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import './index.css';
import Routes from './routes';
import store from './store';
import appTheme from './theme/index';
import Footer from './utils/components/Footer/index';
import Header from './utils/components/Header/index';

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
