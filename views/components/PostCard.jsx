const React = require("react");

class PostsCard extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <>
        <div className="card">
          <img className="pfp" src={post.pfp} />
          <div>
            <h2 className="name">{post.name}</h2>
            <h3 className="username">@{post.username}</h3>
            <p className="content">{post.content}</p>
          </div>
        </div>
      </>
    );
  }
}

module.exports = PostsCard;
