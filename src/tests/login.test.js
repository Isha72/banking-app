import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../../pages/Login';

test('should render Login Component', () => {
  render(<Login />);
  const loginElement = screen.getByTestId('login-1');
  expect(loginElement).toBeInTheDocument();
});

test('email and password inputs should update on change', () => {
  render(<Login />);

  const emailInputNode = screen.getByTestId('email-input');
  fireEvent.change(emailInputNode, { target: { value: 'test@mail.com' } });
  expect(emailInputNode.value).toBe('test@mail.com');

  const passwordInputNode = screen.getByTestId('password-input');
  fireEvent.change(passwordInputNode, { target: { value: '1111' } });
  expect(passwordInputNode.value).toBe('1111');
});

// test('submit button should be disabled by default', () => {
//   render(<Login />);

//   const loginButton = screen.getByTestId('submit-btn');
//   expect(loginButton).toBeDisabled();
// });

test('submit button should be enabled when form inputs are valid', () => {
  render(<Login />);

  const emailInputNode = screen.getByTestId('email-input');
  fireEvent.change(emailInputNode, { target: { value: 'test@mail.com' } });

  const passwordInputNode = screen.getByTestId('password-input');
  fireEvent.change(passwordInputNode, { target: { value: '1111' } });

  const loginButton = screen.getByTestId('submit-btn');
  expect(loginButton).toBeEnabled();
});