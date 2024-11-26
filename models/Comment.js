class Comment {
  constructor(postId, userId, content, date) {
    this.postId = postId;
    this.userId = userId;
    this.content = content;
    this.date = date;
  }

  static fromJSON(data) {
    return new Comment(data.postId, data.userId, data.content, data.date);
  }
}

module.exports = Comment;
