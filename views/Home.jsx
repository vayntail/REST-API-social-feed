const React = require("react");
const Sidebar = require("./components/Sidebar");
const PostsFeed = require("./components/PostsFeed");

class Home extends React.Component {
  render() {
    return (
      <>
        <head>
          <link rel="stylesheet" href="/css/style.css" />
          <title>Home</title>
        </head>
        <body className="body-wrapper">
          <Sidebar />
          <main>
            <h1>Posts</h1>
            <form action="/submit" className="card" method="POST">
              <img className="pfp" src={this.props.user.pfp} />
              <textarea name="content" placeholder="type here!"></textarea>
              <button>post</button>
            </form>
            <PostsFeed posts={this.props.posts} />
          </main>
        </body>
      </>
    );
  }
}

module.exports = Home;
