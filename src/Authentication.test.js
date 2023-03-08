import { render, screen } from '@testing-library/react';
import Authentication from './Authentication';
import User from './User';

describe('Authentication', () => {
    const database = [];

    beforeEach(() => {
        let user1 = new User('Carl', 'carl123');
        let user2 = new User('Joakim', 'joakim123');

        database.push(user1);
        database.push(user2);
    });

    test('login should return true for valid username-password pair', () => {
        let authentication = new Authentication(database);
        expect(authentication.login('Carl', 'carl123')).toBe(true);
    });

    test('login should throw error for invalid username', () => {
        let authentication = new Authentication(database);
        expect(() => authentication.login('NotAUser', 'password')).toThrow('User does not exist');

    });

    test('login should throw error for invalid password', () => {
        let authentication = new Authentication(database);
        expect(() => authentication.login('Carl', 'IncorrectPassword')).toThrow('Invalid password');
    });
});