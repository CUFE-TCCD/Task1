class User {
  constructor(
    id,
    firstName,
    lastName,
    email,
    password,
    role = "member",
    sponsor = "false"
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
    this.sponsor = sponsor;
  }

  isAdmin() {
    return this.role === "admin";
  }
  isSponsor() {
    return this.sponsor === "true";
  }
}

module.exports = User;
