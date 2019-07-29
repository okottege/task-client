import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Jumbotron, Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <Jumbotron>
        <Container>
          <Main />
        </Container>
      </Jumbotron>
    </>
  );
}

export default App;
