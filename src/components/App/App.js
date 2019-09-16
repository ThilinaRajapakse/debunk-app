import React, {useState} from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import BackgroundSlider from 'react-background-slider'

// import Navbar from '../Navbar/Navbar'
import QueryForm from '../QueryForm/Queryform'
import Predictions from '../Predictions/Predictions'

import {ResultsContext} from '../../contexts/ResultsContext'

import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'


import "./App.css";


const App = () => {
  const [results, setResults] = useState([]);

  return (
    <Container fluid={'true'}>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top" className={"navbar-fix-overflow navbar-background"}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Col md={6}>
          <ResultsContext.Provider value={[results, setResults]}>
            <QueryForm id="check-form"></QueryForm>
          </ResultsContext.Provider>
          </Col>
          <Col md={6}>
          <ResultsContext.Provider value={[results, setResults]}>
            <Predictions></Predictions>
          </ResultsContext.Provider>
          </Col>
        </Navbar.Collapse>
      </Navbar>

      <Row className={"page justify-content-center"} >
        <Col md={3}><h1 className={"text-center title-text overlay-text"}>What is the cost of lies?</h1></Col>
      </Row>

      <BackgroundSlider
        images={[image1, image2, image3]}
        duration={8}
        transition={2}
      />
    </Container>
  );
};

export default App;
