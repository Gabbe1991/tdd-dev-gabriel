import { render, screen } from '@testing-library/react';
import User from './User';



describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User('testuser', 'testpassword');
  });

  test('constructor should set the username and password fields', () => {
    expect(user.username).toBe('testuser');
    expect(user.password).toBe('testpassword');
  });

  test('equals method should return true if the usernames are the same', () => {
    const otherUser = new User('testuser', 'otherpassword');
    expect(user.equals(otherUser)).toBe(true);
  });

  test('equals method should return false if the usernames are different', () => {
    const otherUser = new User('otheruser', 'otherpassword');
    expect(user.equals(otherUser)).toBe(false);
  });

  test('get username method should return the username field', () => {
    expect(user.username).toBe('testuser');
  });

  test('set username method should set the username field', () => {
    user.username = 'newuser';
    expect(user.username).toBe('newuser');
  });

  test('get password method should return the password field', () => {
    expect(user.password).toBe('testpassword');
  });

  test('set password method should set the password field', () => {
    user.password = 'newpassword';
    expect(user.password).toBe('newpassword');
  });
});







