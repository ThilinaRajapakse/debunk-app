import React, {useState, useContext, Fragment} from "react"
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import {ResultsContext} from '../../contexts/ResultsContext'

import './Predictions.css'


export default function Predictions(props) {
    const [results, setResults] = useContext(ResultsContext);

    return (
        <React.Fragment>
                {results.map(item => (
                    <Accordion className={'transparent-background'} key={item.index.toString() + 'panel'}>
                        <Accordion.Toggle as={Card.Header} className={'title-text border border-light pixel-margin text-center button'} key={item.index.toString() + 'head'} eventKey={item.index}>
                            Prediction {item.index + 1}
                        </Accordion.Toggle>
                        <Accordion.Collapse key={item.index.toString() + 'body'} eventKey={item.index}>
                            <Card.Body className={'no-padding dark-background-transparent border border-light'}>
                                <Jumbotron className={'white-text transparent-background no-margin fix-padding'}>
                                    {item.result}
                                </Jumbotron>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                ))};
        </React.Fragment>
    );
};