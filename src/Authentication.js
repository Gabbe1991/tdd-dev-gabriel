class Authentication {
    constructor(database) {
        this.database = database;
    }

    login(username, password) {

        let userInDatabase;

        for (let user of this.database) {
            if (user.username === username) {
                userInDatabase = user
            }
        }

        if (userInDatabase == undefined) {
            throw new Error('User does not exist');
        }

        if (userInDatabase.password !== password) {
            throw new Error('Invalid password');
        }

        return true;
    }
}

export default Authentication;