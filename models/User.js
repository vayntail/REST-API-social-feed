class User {
  constructor(id, pfp, name, username, bio) {
    this.id = id;
    this.pfp = pfp;
    this.name = name;
    this.username = username;
    this.bio = bio;
  }

  static fromJSON(data) {
    return new User(data.id, data.pfp, data.name, data.username, data.bio);
  }
}

module.exports = User;
