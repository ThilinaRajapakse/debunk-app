import React, {useState, useContext, Fragment} from "react"
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import {ResultsContext} from '../../contexts/ResultsContext'


export default function PredictionFragment(props) {
    const [results, setResults] = useContext(ResultsContext);

    return (
        <React.Fragment>
            {results.map(item => (
                <React.Fragment key={item.index.toString() + 'fragment'}>
                    <Accordion.Toggle as={Card.Header} className={'title-text border-bottom border-light pixel-margin text-center button'} key={item.index.toString() + 'head'} eventKey={'prediction_' + item.index}>
                        Prediction {item.index + 1}
                    </Accordion.Toggle>
                    <Accordion.Collapse key={item.index.toString() + 'body'} eventKey={'prediction_' + item.index}>
                        <Card.Body className={'no-padding dark-background-transparent border-bottom border-light'}>
                            <Jumbotron className={'white-text transparent-background no-margin fix-padding'}>
                                {item.result}
                            </Jumbotron>
                        </Card.Body>
                    </Accordion.Collapse>
                </React.Fragment>
            ))}
        </React.Fragment>
    );
}