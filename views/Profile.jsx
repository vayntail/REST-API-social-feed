const React = require("react");
const Sidebar = require("./components/Sidebar");

class Profile extends React.Component {
  render() {
    return (
      <>
        <head>
          <link rel="stylesheet" href="/css/style.css" />
          <title>Profile</title>
        </head>
        <Sidebar />
        <h1>This is the profile page.</h1>
        <PostsFeed />
      </>
    );
  }
}

module.exports = Profile;
