class Post {
  constructor(id, userId, content, date) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.date = date;
  }

  static fromJSON(data) {
    return new Post(data.id, data.userId, data.content, data.date);
  }
}

module.exports = Post;
