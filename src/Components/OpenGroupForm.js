import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
class OpenGroupForm extends React.Component {
    constructor(props){
      super(props);
    }

    render(){
            
        return <Form>
        <Form.Row>

        <Form.Group controlId="GroupLeader">
          <Form.Label>Group Leader</Form.Label>
          <Form.Control placeholder="Israel Israeli" />
         </Form.Group>

          <Form.Group as={Col} controlId="ZoomLink">
            <Form.Label>Zoom Link</Form.Label>
            <Form.Control type="link" placeholder="Enter URL" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="GroupDescription">
            <Form.Label>Group description</Form.Label>
            <Form.Control type="text" placeholder="what's your group goal? " />
          </Form.Group>
        </Form.Row>
            
      
        <Form.Group controlId="CourseName">
          <Form.Label>Course Name</Form.Label>
          <Form.Control placeholder={this.props.courseName}/>
        </Form.Group> 
      
        <Form.Row>
          <Form.Group as={Col} controlId="Date">
            <Form.Label>Date</Form.Label>
            <Form.Control placeholder={this.props.date}/>
          </Form.Group>
      
          <Form.Group as={Col} controlId="MettingStartTime">
            <Form.Label>Metting Start Time</Form.Label>
            <Form.Control type="time">
            </Form.Control>
          </Form.Group>
        </Form.Row>
            
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      
    }
}

export default OpenGroupForm;