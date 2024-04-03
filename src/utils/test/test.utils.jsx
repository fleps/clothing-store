import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { rootReducer } from '../../store/root-reducer';
import { legacy_createStore } from 'redux';
import { HashRouter } from 'react-router-dom';

export function renderWithProviders(
  ui,
  {
    preloadState = {},
    store = legacy_createStore(rootReducer, preloadState),
    ...renderOptions
  } = {}
) {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <HashRouter>
          {children}
        </HashRouter>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}