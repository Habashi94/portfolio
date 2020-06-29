import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Main></Main>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
