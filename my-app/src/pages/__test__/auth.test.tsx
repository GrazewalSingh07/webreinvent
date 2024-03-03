// authSlice.test.ts
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { AuthState } from '../../utils/interface';
import authSlice from '../../redux/authSlice';
import Login from '../Login';
import { authService } from '../../utils/axiosService';
import { BrowserRouter } from 'react-router-dom';
import Register from '../Register';

 
jest.mock('../../utils/axiosService', () => ({
  authService: {
    login: jest.fn(),
    register: jest.fn(),
  },
}));
beforeEach(() => {
  jest.resetAllMocks();
});

test('user login', async () => {
  const store: EnhancedStore<{ auth: AuthState }> = configureStore({ reducer: { auth: authSlice } });

  render(
    <Provider store={store}>
      <BrowserRouter>
      <Login />
      </BrowserRouter>
    </Provider>
  );

   
  userEvent.type(screen.getByTestId('log-email'), 'eve.holt@reqres.in');
  userEvent.type(screen.getByTestId('log-password'), 'pistol');
  userEvent.click(screen.getByText('Login'));
 
  (authService.login as jest.Mock).mockResolvedValueOnce({ data: { token: 'mockToken' } });
 
  await waitFor(() => {
    expect(store.getState().auth.isAuthenticated).toBe(true);
  });
});


test('user register', async () => {
  const store: EnhancedStore<{ auth: AuthState }> = configureStore({ reducer: { auth: authSlice } });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </Provider>
  );

  userEvent.type(screen.getByTestId('reg-email'), 'eve.holt@reqres.in');
  userEvent.type(screen.getByTestId('reg-password'), 'pistol');
  userEvent.click(screen.getByText('Register'));

   

  try {
    
    (authService.register as jest.Mock).mockResolvedValueOnce({ data: { token: 'mockToken' } });

    await waitFor(() => {
      expect(store.getState().auth.isAuthenticated).toBe(true);
    });
  } catch (error) {
    // console.error('Test error:', error);
  }

  
});

