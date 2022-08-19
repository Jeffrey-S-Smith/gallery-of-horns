import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import './Horns.css';

class Horns extends React.Component {
  
  
    render() {
      return (
        
        <Form onSubmit={this.props.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>How many horns</Form.Label>
        <Form.Select aria-label="Enter the number of Horns" onChange={this.props.handleSelect}>
          <option>Choice the number of Horns</option>
          <option value="ANY">ANY</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">Hundred</option>
         
        </Form.Select>
        </Form.Group>
     <Button  variant="primary" type="submit">
        Submit
      </Button>
    </Form>

          
      
      );
    }
  
  }
  
  export default Horns;