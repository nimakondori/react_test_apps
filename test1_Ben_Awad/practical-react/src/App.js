import React from "react";
import logo from "./logo.svg";
import "./App.css";

// const Body = () => (
//   <p className="App_body">
//     To get started, edit the <code>src/App.js </code> and save and reload
//   </p>
// );
const Logo = () => <img src={logo} className="App-logo" alt="logo" />;
const Body = () => {
  return (
    <p className="App_body">
      <h3>
        To get started, edit the <code>src/App.js </code> and save and reload
      </h3>
      <h4>
        <a href="https://google.com">This is the second version</a>
      </h4>
    </p>
  );
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Body />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          why the fuck is this here
        </a>
      </header>
    </div>
  );
}

export default App;
