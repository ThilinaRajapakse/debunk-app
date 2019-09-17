import React, { useState, useContext, useCallback } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Alert from 'react-bootstrap/Alert'

import {ResultsContext} from '../../contexts/ResultsContext'

function FormContainer(props) {
    const [results, setResults] = useContext(ResultsContext);
    const [sentence, setSentence] = useState("");
    const [isSending, setIsSending] = useState(false)
    const [choice, setChoice] = useState("neutral")

    const api_endpoint = "http://localhost:7000/api/predict"
    // const api_endpoint = "https://debunk.io/api/predict"

    const handleSubmit = useCallback(async (evt) => {
        evt.preventDefault();
        // don't send again while we are sending
        if (isSending) return
        // update state
        setIsSending(true)
        // send the actual request
        const response = await fetch(api_endpoint, {
            method: 'POST',
            body: JSON.stringify({"sentence": {sentence}, "user_prediction": {choice}}),
            headers: {
            "Content-type": "application/json; charset=UTF-8",
            }
        });
        const result = await response.json();
        console.log(result)
        // once the request is sent, update state again
        setIsSending(false)
        // const result = JSON.parse('{ "pseudoscience" : "true", "probability": "0.9" }')

        const prediction = result.pseudoscience
        const item = {
            index: results.length,
            text:sentence, 
            result:prediction,
            probability:result.probability
        }

        setResults(results => [...results, item])
        console.log(results)
      }, [isSending, results, setResults, sentence]);

    return (
        <Form onSubmit={handleSubmit} className={''}>
            <Form.Group>
                <Form.Label>Enter text to be checked for pseudoscience:</Form.Label>
                <Form.Control as="textarea" rows="21" className={"transparent-textarea max-height-textarea"} onChange={e => setSentence(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Choose whether you think this text is pseudoscientific or not:</Form.Label>
                <Alert variant='warning'>Choosing "Pseudoscientific" or "Not Pseudoscientific" will store the text, your prediction, and the model prediction to our database. 
                Choosing "I don't want to say" will not store the results in our database. In either case, no personal data will be stored.</Alert>
                <ButtonGroup>
                    <Form.Check inline 
                        label="I don't want to say" 
                        type={'radio'} id={'choice_neutral'} 
                        name={'choice'} 
                        value="neutral"
                        onChange={e => setChoice(e.target.value)}
                        checked={choice === "neutral"}
                        >
                    </Form.Check>
                    <Form.Check inline 
                        label="Pseudoscientific" 
                        type={'radio'} id={'choice_true'} 
                        name={'choice'} 
                        value="true"
                        onChange={e => setChoice(e.target.value)}
                        checked={choice === "true"}
                        >
                    </Form.Check>
                    <Form.Check inline
                        label="Not Pseudoscientific" 
                        type={'radio'} 
                        id={'choice_false'} 
                        name={'choice'} 
                        value="false"
                        onChange={e => setChoice(e.target.value)}
                        checked={choice === "false"}
                        >
                    </Form.Check>
                </ButtonGroup>
            </Form.Group>
            <Button variant="outline-light button" type="submit">Submit</Button>
        </Form>
    );
}

export default FormContainer;
