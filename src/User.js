class User {
  constructor(username, password) {
    this._username = username;
    this._password = password;
  }

  equals(otherUser) {
    return this.username === otherUser.username;
  }

  get username() {
    return this._username;
  }

  set username(value) {
    this._username = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }
}

export default User;
