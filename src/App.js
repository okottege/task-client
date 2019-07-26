import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <div>
        <Main />
      </div>
    </>
  );
}

export default App;
