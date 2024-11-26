const React = require("react");

class PostsFeed extends React.Component {
  render() {
    return (
      <>
        <div id="posts">
          <div className="card">
            <img className="pfp" src="" />
            <div>
              <h2 className="name">name</h2>
              <h3 className="username">username</h3>
              <p className="content">content</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

module.exports = PostsFeed;
