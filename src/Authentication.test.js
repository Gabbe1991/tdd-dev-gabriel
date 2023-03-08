import { render, screen } from '@testing-library/react';
import Authentication from './Authentication';
import User from './User';

describe('Authentication class', () => {
  const database = [];

  beforeEach(() => {
    const user1 = new User('Carl', 'carl123');
    const user2 = new User('Joakim', 'joakim123');

    database.push(user1);
    database.push(user2);
  });

  test('should return true from login method for valid username-password pair', () => {
    const authentication = new Authentication(database);
    expect(authentication.login('Carl', 'carl123')).toBe(true);
  });

  test('should throw error from login method for invalid username', () => {
    const authentication = new Authentication(database);
    expect(() => authentication.login('NotAUser', 'password')).toThrow('User does not exist');
  });

  test('should throw error from login method for invalid password', () => {
    const authentication = new Authentication(database);
    expect(() => authentication.login('Carl', 'IncorrectPassword')).toThrow('Invalid password');
  });
});
