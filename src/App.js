import React from "react";
import { Sidebar } from "./Components";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Sidebar />
      </Router>
    </>
  );
}

export default App;
