import React, {useState} from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import BackgroundSlider from 'react-background-slider'
import Toast from 'react-bootstrap/Toast'

// import Navbar from '../Navbar/Navbar'
import QueryForm from '../QueryForm/Queryform'
import Predictions from '../Predictions/Predictions'

import {ResultsContext} from '../../contexts/ResultsContext'

import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'

import brand from '../../assets/debunk.png'

import "./App.css";
import { SendingContext } from '../../contexts/SendingContext';


const App = () => {
  const [results, setResults] = useState([]);
  const [showReady, setShowReady] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showSending, setShowSending] = useState(false);


  return (
    <Container fluid={'true'}>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top" className={"navbar-fix-overflow navbar-background"}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* <Navbar.Brand href="#home">
          <img
            alt=""
            src={brand}
            width="80"
            height="80"
            className="d-inline-block align-top"
          />
        </Navbar.Brand> */}
        <Navbar.Collapse>
          <Col md={6}>
          <ResultsContext.Provider value={[results, setResults, isSending, setIsSending, setShowSending]}>
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
