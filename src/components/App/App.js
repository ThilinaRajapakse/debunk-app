import React, {useState} from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import Navbar from '../Navbar/Navbar'
import QueryForm from '../QueryForm/Queryform'
import Predictions from '../Predictions/Predictions'

import {ResultsContext} from '../../contexts/ResultsContext'


import "./App.css";


const App = () => {
  const [results, setResults] = useState([]);

  return (
    <Container fluid={'true'}>
      <Row className={"pin-top"}>
        <Col xs={12} md={4} lg={4}>
          <ResultsContext.Provider value={[results, setResults]}>
            <QueryForm id="check-form"></QueryForm>
          </ResultsContext.Provider>
        </Col>
        <Col xs={12} md={4} lg={4}>
        </Col>
        <Col xs={12} md={4} lg={4}>
        <ResultsContext.Provider value={[results, setResults]}>
            <Predictions></Predictions>
        </ResultsContext.Provider>
          
        </Col>
      </Row>
    </Container>
  );
};

export default App;
