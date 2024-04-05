import { fireEvent, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import Navigation from '../routes/navigation/navigation.component';
import { renderWithProviders } from '../utils/test/test.utils';
import { expect, vi } from 'vitest';
import { logOutUser } from '../utils/firebase/firebase.utils';

describe('Navigation tests', () => {
  test('It should render Login link and not a logout link if there is no currrentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadState: {
        user: {
          currentUser: 'logged-out'
        }
      }
    });

    const loginButton = screen.getByText(/login/i);
    expect(loginButton).to.not.toBeNull();

    const loggoutLink = screen.queryByText(/logout/i);
    expect(loggoutLink).toBeNull();
  });

  test('It should render Logout and not Login link if there is an user', () => {
    renderWithProviders(<Navigation />, {
      preloadState: {
        user: {
          currentUser: {}
        }
      }
    });

    const loginButton = screen.queryByText(/login/i);
    expect(loginButton).toBeNull();

    const loggoutLink = screen.getByText(/logout/i);
    expect(loggoutLink).to.not.toBeNull();
  });

});
