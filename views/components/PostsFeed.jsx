const React = require("react");
const PostsCard = require("./PostCard");

class PostsFeed extends React.Component {
  render() {
    const { posts } = this.props;
    return (
      <>
        <div id="posts">
          {posts.map((post) => (
            <PostsCard post={post} />
          ))}
        </div>
      </>
    );
  }
}

module.exports = PostsFeed;
