import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from 'react-bootstrap/Container'

import Slideshow from './Slideshow'


import "./App.css";

const ExampleToast = ({ children }) => {

  return (
    <Slideshow></Slideshow>
  );
};

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast className="toast">
        We now have Toasts
      <span role="img" aria-label="tada">
          🎉
      </span>
      </ExampleToast>
    </Jumbotron>
  </Container>
);

export default App;
