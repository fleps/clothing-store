import { screen } from '@testing-library/react';
import Navigation from '../navigation.component';
import { renderWithProviders } from '../../../utils/test/test.utils';
import { expect } from 'vitest';

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
    expect(loginButton).toBeDefined();

    const loggoutLink = screen.queryByText(/logout/i);
    expect(loggoutLink).toBeDefined();
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
    expect(loginButton).toBeDefined();

    const loggoutLink = screen.getByText(/logout/i);
    expect(loggoutLink).toBeDefined();
  });
});
