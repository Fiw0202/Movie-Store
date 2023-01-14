import { useState } from "react";
import "./App.css";
import NavBar from "../Navbar/NavBar";
import Content from "../Content/Content";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Content/>
    </div>
  );
}

export default App;
