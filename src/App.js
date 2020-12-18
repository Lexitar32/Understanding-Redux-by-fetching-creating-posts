import React, { Component } from "react";

// Redux Stuffs
import { Provider } from "react-redux";

// Import from the store
import store from "./store";

// Components
import Post from "./components/Post";
import PostForm from "./components/PostForm";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Post />
        </div>
      </Provider>
    );
  }
}

export default App;
