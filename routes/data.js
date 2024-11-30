// get users data
const User = require("../models/User");
const usersData = require("../data/users");
const users = usersData.map((data) => User.fromJSON(data));
const myUser = users[0];

// get comments data
const Comment = require("../models/Comment");
const commentsData = require("../data/comments.js");

// get posts data
const Post = require("../models/Post");
const postsData = require("../data/posts.js");

const posts = postsData.map((data) => {
  const post = Post.fromJSON(data);
  const user = getUserById(post.userId);
  return {
    ...post,
    pfp: user.pfp,
    name: user.name,
    username: user.username,
  };
}); // add user's name and username to each post instance

// functions
function addNewPost(obj) {
  const user = getUserById(obj.userId);
  posts.unshift({
    ...obj,
    pfp: user.pfp,
    name: user.name,
    username: user.username,
  })
}

function getPostsByUserId(userId) {
  return posts.filter((post) => {
    return post.userId == userId;
  });
}

function getUserById(userId) {
  return users.find((user) => user.id === userId);
}

// return a new id that is one higher than the last id set
function getNewPostId() {
  return posts[posts.length-1].id + 1;
}

module.exports = { users, posts, myUser, addNewPost, getNewPostId, getUserById, getPostsByUserId };
