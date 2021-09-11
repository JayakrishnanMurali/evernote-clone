import React from "react";
import { Sidebar } from "./Components";
import GlobalStyle, { FlexboxContainer } from "./GlobalStyle";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <FlexboxContainer>
          <Sidebar />
          <HomePage />
        </FlexboxContainer>
      </Router>
    </>
  );
}

export default App;
