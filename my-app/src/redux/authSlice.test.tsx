 
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import {configureStore, EnhancedStore } from '@reduxjs/toolkit';
import authSlice, { loginAction, registerAction } from './authSlice';
import { AuthState } from '../utils/interface';
import Login from '../pages/Login';
 
 
 
  test('user login authentication', () => {
    const store: EnhancedStore<{ auth: AuthState }> = configureStore({ reducer: { auth: authSlice } });
  
    render(
      <Provider store={store}>
        <Login/>
      </Provider>
    );
   
    userEvent.type(screen.getByPlaceholderText('Email'), 'test@example.com');
    userEvent.type(screen.getByPlaceholderText('Password'), 'password123');
    userEvent.click(screen.getByText('Login'));
    
  
   
    store.dispatch(loginAction('authenticated'));
  
    // Check if authentication is successful
    expect(store.getState().auth.isAuthenticated).toBe(true);
  });

  test('user register authentication', () => {
    const store: EnhancedStore<{ auth: AuthState }> = configureStore({ reducer: { auth: authSlice } });
  
    render(
      <Provider store={store}>
        <Login/>
      </Provider>
    );
   
    userEvent.type(screen.getByPlaceholderText('Email'), 'test@example.com');
    userEvent.type(screen.getByPlaceholderText('Password'), 'password123');
    userEvent.click(screen.getByText('Login'));
  
   
    store.dispatch(registerAction({id:'1', token:'authenticated'}));
  
    // Check if register is successful
    expect(store.getState().auth.isAuthenticated).toBe(true);
  });

