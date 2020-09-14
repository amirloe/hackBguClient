import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
class OpenGroupForm extends React.Component {
    constructor(props){
      super(props);
      this.state={groupLeader:"",

      }
    }
    leaderChange = (event)=>{
      this.setState({groupLeader:event.target.value})
    }
    zoomLinkChange = (event)=>{
      this.setState({zoomLinkChange:event.target.value})
    }
    groupDescriptionChange = (event)=>{
      this.setState({groupLeader:event.target.value})
    }
    courseNameChange = (event)=>{
      this.setState({zoomLinkChange:event.target.value})
    }
    dateChange = (event)=>{
      this.setState({zoomLinkChange:event.target.value})
    }
    timeChange = (event)=>{
      this.setState({zoomLinkChange:event.target.value})
    }
    render(){
            
        return <Form>
        <Form.Row>

        <Form.Group controlId="GroupLeader">
          <Form.Label>Group Leader</Form.Label>
          <Form.Control placeholder="Israel Israeli" onChange={this.leaderChange} />
         </Form.Group>

          <Form.Group as={Col} controlId="ZoomLink">
            <Form.Label>Zoom Link</Form.Label>
            <Form.Control type="link" placeholder="Enter URL" onChange={this.zoomLinkChange} />
          </Form.Group>
      
          <Form.Group as={Col} controlId="GroupDescription">
            <Form.Label>Group description</Form.Label>
            <Form.Control type="text" placeholder="what's your group goal? " onChange={this.groupDescriptionChange} />
          </Form.Group>
        </Form.Row>
            
      
        <Form.Group controlId="CourseName">
          <Form.Label>Course Name</Form.Label>
          <Form.Control placeholder={this.props.courseName} onChange={this.courseNameChange}/>
        </Form.Group> 
      
        <Form.Row>
          <Form.Group as={Col} controlId="Date">
            <Form.Label>Date</Form.Label>
            <Form.Control placeholder={this.props.date} onChange={this.dateChange}/>
          </Form.Group>
      
          <Form.Group as={Col} controlId="MettingStartTime">
            <Form.Label>Metting Start Time</Form.Label>
            <Form.Control type="time" onChange={this.timeChange}>
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