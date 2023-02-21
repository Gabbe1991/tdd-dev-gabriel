class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  equals(otherUser) {
    return this.username === otherUser.username;
  }

  getUsername() {
    return this.username;
  }

  setUsername(value) {
    this.username = value;
  }

  getPassword() {
    return this.password;
  }

  setPassword(value) {
    this.password = value;
  }
}

export default User;
