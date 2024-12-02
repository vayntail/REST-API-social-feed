hello! this project showcases using Express to create a REST api and a front-end using the jsx view engine!

# views

## home

![alt text](/github-readme-imgs/home.png)

## profile

![alt text](/github-readme-imgs/profile.png)

# api methods:

## users

### **get** "/api/users/:id"

- gets a user by their ID

### **put** "/api/users/:id"

- edit's a user's information by ID

### **delete** "api/users/:userId/posts/:postId"

- deletes a post by ID created by the user

## posts

### **get** "/api/posts"

- get all posts

### **get** "/api/posts/:id"

- get a specific post by ID

### **post** "/api/posts/new"

- create a new post

# other info:

this works by running `nodemon server.js` and using https://localhost:3000 !
