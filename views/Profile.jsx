const React = require("react");
const Sidebar = require("./components/Sidebar");
const PostsFeed = require("./components/PostsFeed");

class Profile extends React.Component {
  render() {
    return (
      <>
        <head>
          <link rel="stylesheet" href="/css/style.css" />
          <title>Profile</title>
        </head>
        <body className="body-wrapper">
          <Sidebar />
          <main>
            <h1>Profile</h1>
            <PostsFeed />
          </main>
        </body>
      </>
    );
  }
}

module.exports = Profile;
