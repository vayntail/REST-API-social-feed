const React = require("react");

class Sidebar extends React.Component {
  render() {
    return (
      <nav>
        <a href="/"><div><svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#444344"><path d="M10 18V15C10 13.8954 10.8954 13 12 13V13C13.1046 13 14 13.8954 14 15V18" stroke="#444344" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 8L11.7317 3.13416C11.9006 3.04971 12.0994 3.0497 12.2683 3.13416L22 8" stroke="#444344" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11" stroke="#444344" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div></a>
        <a href="/profile"><div><svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#444344"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="#444344" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="#444344" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#444344" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div></a>
      </nav>
    );
  }
}

module.exports = Sidebar;
