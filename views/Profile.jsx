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
            
            <div className="card" id="profile">
            <button>edit</button>
              <img className="pfp" src={this.props.myUser.pfp} />
              <h2 className="name">{this.props.myUser.name}</h2>
              <h3 className="username">@{this.props.myUser.username}</h3>
              <p className="card">{this.props.myUser.bio}</p>

            </div>
            <PostsFeed posts={this.props.posts} />
          </main>
        </body>
      </>
    );
  }
}

module.exports = Profile;
