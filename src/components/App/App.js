import React from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Slideshow from '../Slideshow/Slideshow'
import QueryForm from '../QueryForm/Queryform'


import "./App.css";

const SlideShow = () => {
  return (
    <Slideshow></Slideshow>
  );
};

const App = () => (
  <Container>
    <Row className={'no-padding'}>
      <SlideShow></SlideShow>
    </Row>
    <Row className={'spacer'}></Row>
    <Row>
      <Col>
        <QueryForm></QueryForm>
      </Col>
    </Row>
  </Container>
);

export default App;
