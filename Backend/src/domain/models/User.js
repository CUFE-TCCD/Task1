class User {
  constructor(id, firstName, lastName, email, password, role = "member") {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  isAdmin() {
    return this.role === "admin";
  }
}

module.exports = User;
