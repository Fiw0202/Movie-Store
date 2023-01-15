import { useState } from "react";
import "./App.css";
import NavBar from "../Navbar/NavBar";
import Content from "../Content/Content";
import  Movie from "../Card/Card";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Content/>
      <footer/>

    </div>
  );
}

export default App;
