class Authentication {
    constructor(database) {
        this.database = database;
    }

    login(username, password) {
        const userInDatabase = this.database.find(user => user.username === username);

        if (!userInDatabase) {
            throw new Error('User does not exist');
        }

        if (userInDatabase.password !== password) {
            throw new Error('Invalid password');
        }

        return true;
    }
}

export default Authentication;
