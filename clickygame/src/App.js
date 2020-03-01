import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Mainpage from "./components/mainpage";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Mainpage />
      <Counter />
    </div>
  );
}
export default App;
