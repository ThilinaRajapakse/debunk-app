import React, {useState} from "react";
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import FormContainer from './FormContainer'

import './QueryForm.css'


function QueryForm(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       value: 'You can copy and paste blog posts, news articles, and other documents here.'
    //     };
    
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);

    //   }

    return (
        <Accordion className={'transparent-background'}>
            <Card className={'transparent-background'}>
                <Accordion.Toggle as={Button} variant={"link"} className={'nav-text pixel-margin text-center button'} eventKey="0">
                    Pseudoscience Test
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0" className={"pad-bottom"}>
                    <Card.Body className={'no-padding'}>
                        <Jumbotron className={'white-text transparent-background pixel-margin fix-padding'}>
                            <FormContainer></FormContainer>
                        </Jumbotron>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>


    )
}


export default QueryForm;