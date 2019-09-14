import React, {useState} from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import Navbar from '../Navbar/Navbar'
import QueryForm from '../QueryForm/Queryform'
import Predictions from '../Predictions/Predictions'
import { VerticalFadeIn } from '../Homepage/AnimatedText/VerticalFadeIn'

import {ResultsContext} from '../../contexts/ResultsContext'


import "./App.css";


const App = () => {
  const [results, setResults] = useState([]);

  return (
    <Container fluid={'true'}>
      <Row className={"pin-top justify-content-end"}>
        <Col md={4} lg={4}>
          <ResultsContext.Provider value={[results, setResults]}>
            <QueryForm id="check-form"></QueryForm>
          </ResultsContext.Provider>
        </Col>
        <Col md={4} lg={4}>
        <ResultsContext.Provider value={[results, setResults]}>
            <Predictions></Predictions>
        </ResultsContext.Provider>
        </Col>
      </Row>
      <Row className={"page"} >
        <Col md={12}><h1 className={"text-center"}><VerticalFadeIn text="What is the cost of lies?"></VerticalFadeIn></h1></Col>
      </Row>
    </Container>
  );
};

export default App;
