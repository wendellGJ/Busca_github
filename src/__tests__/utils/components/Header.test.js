/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import { ThemeProvider } from '@material-ui/core';
import { createMount, createRender, createShallow } from '@material-ui/core/test-utils';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import 'mutationobserver-shim';
import React from 'react';
import { Router } from 'react-router-dom';
import AppTheme from '../../../theme';
import Header from '../../../utils/components/Header';

Enzyme.configure({ adapter: new Adapter() });

global.MutationObserver = window.MutationObserver;

describe('<Header />', () => {
  const originalConsoleError = console.error;
  let shallow;
  let mount;
  let render;
  const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };

  beforeAll(() => {
    console.error = jest.fn((msg) => {
      if (msg.includes('Warning: useLayoutEffect does nothing on the server')) {
        return null;
      }
      originalConsoleError(msg);
    });
    shallow = createShallow();
    mount = createMount();
    render = createRender();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should work', () => {
    shallow(
      <Router history={historyMock}>
        <ThemeProvider theme={AppTheme}>
          <Header />
        </ThemeProvider>
      </Router>,
    );
    mount(
      <Router history={historyMock}>
        <ThemeProvider theme={AppTheme}>
          <Header />
        </ThemeProvider>
      </Router>,
    );
    render(
      <Router history={historyMock}>
        <ThemeProvider theme={AppTheme}>
          <Header />
        </ThemeProvider>
      </Router>,
    );
  });
});
