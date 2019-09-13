import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class QueryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'You can copy and paste blog posts, news articles, and other documents here.'
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Sent to server: ' + this.state.value);
        event.preventDefault();
      }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter text to be checked for pseudoscience:</Form.Label>
                    <Form.Control as="textarea" rows="10"></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        )
    }
}


export default QueryForm;