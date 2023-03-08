import { render, screen } from '@testing-library/react';
import User from './User';



describe('User class', () => {
  let user;

  beforeEach(() => {
    user = new User('testuser', 'testpassword');
  });

  test('should set username and password fields in constructor', () => {
    expect(user).toMatchObject({ username: 'testuser', password: 'testpassword' });
  });

  test('should return true from equals method if usernames are the same', () => {
    expect(user.equals(new User('testuser', 'otherpassword'))).toBe(true);
  });

  test('should return false from equals method if usernames are different', () => {
    expect(user.equals(new User('otheruser', 'otherpassword'))).toBe(false);
  });

  test('should return username field from getUsername method', () => {
    expect(user.getUsername()).toBe('testuser');
  });

  test('should set username field from setUsername method', () => {
    user.setUsername('newuser');
    expect(user.getUsername()).toBe('newuser');
  });

  test('should return password field from getPassword method', () => {
    expect(user.getPassword()).toBe('testpassword');
  });

  test('should set password field from setPassword method', () => {
    user.setPassword('newpassword');
    expect(user.getPassword()).toBe('newpassword');
  });
});







