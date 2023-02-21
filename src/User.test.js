import { render, screen } from '@testing-library/react';
import User from './User';



describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User('testuser', 'testpassword');
  });

  test('constructor sets the username and password fields', () => {
    expect(user).toMatchObject({ username: 'testuser', password: 'testpassword' });
  });

  test('equals method returns true if the usernames are the same', () => {
    expect(user.equals(new User('testuser', 'otherpassword'))).toBe(true);
  });

  test('equals method returns false if the usernames are different', () => {
    expect(user.equals(new User('otheruser', 'otherpassword'))).toBe(false);
  });

  test('getUsername method returns the username field', () => {
    expect(user.getUsername()).toBe('testuser');
  });

  test('setUsername method sets the username field', () => {
    user.setUsername('newuser');
    expect(user.getUsername()).toBe('newuser');
  });

  test('getPassword method returns the password field', () => {
    expect(user.getPassword()).toBe('testpassword');
  });

  test('setPassword method sets the password field', () => {
    user.setPassword('newpassword');
    expect(user.getPassword()).toBe('newpassword');
  });
});








