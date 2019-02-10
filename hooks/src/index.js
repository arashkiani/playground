import React from "react";
import ReactDOM from "react-dom";
import Movies from "./components/movies";
import { createStore } from "./hooks/store";

import "./index.css";
import "./App.css";

createStore({
  initialState: {
    movies: {
      isLoaded: false
    }
  }
});

const App = () => {
  return (
    <div className="App">
      <Movies />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
