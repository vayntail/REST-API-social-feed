const React = require("react");

class Sidebar extends React.Component {
  render() {
    return (
      <nav>
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
      </nav>
    );
  }
}

module.exports = Sidebar;
