import React, { useState, useContext, useCallback } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


import {ResultsContext} from '../../contexts/ResultsContext'

function FormContainer(props) {
    const [results, setResults] = useContext(ResultsContext);
    const [sentence, setSentence] = useState("");
    const [isSending, setIsSending] = useState(false)

    // const api_endpoint = "http://localhost:5000/api/predict"
    const api_endpoint = "https://debunk.io/api/predict"

    const handleSubmit = useCallback(async (evt) => {
        evt.preventDefault();
        // don't send again while we are sending
        if (isSending) return
        // update state
        setIsSending(true)
        // send the actual request
        const response = await fetch(api_endpoint, {
            method: 'POST',
            body: JSON.stringify({"sentence": {sentence}}),
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
            <Button variant="outline-light button" type="submit">Submit</Button>
        </Form>
    );
}

export default FormContainer;
