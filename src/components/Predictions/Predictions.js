import React, {useState, useContext, Fragment} from "react"
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import {ResultsContext} from '../../contexts/ResultsContext'

import PredictionFragment from './PredictionFragment'

import './Predictions.css'


export default function Predictions(props) {
    const [results, setResults] = useContext(ResultsContext);

    return (
            <Accordion className={'transparent-background'}>
                <Card className={'transparent-background'}>
                    <Accordion.Toggle as={Button} variant="link" className={'title-text pixel-margin text-center button'} eventKey="predictions">
                        Prediction History
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="predictions" className={"pad-bottom"}>
                        <Card.Body className={'no-padding'}>
                            <Jumbotron className={'white-text transparent-background pixel-margin fix-padding'}>
                                <Accordion>
                                    <PredictionFragment></PredictionFragment>
                                </Accordion>
                            </Jumbotron>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
    );
};