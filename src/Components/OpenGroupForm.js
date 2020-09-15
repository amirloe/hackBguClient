import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
class OpenGroupForm extends React.Component {
    constructor(props){
      super(props);
      this.state={
        maxNum:1,
        groupSize:1,
        groupLeader:"",
        zoomLink:"",
        description:"",
        courseName:this.props.courseName,
        date:this.props.date,
        time:""
      }
    }

    maxChange = (event)=>{
      this.setState({maxNum:event.target.value})
    }
    leaderChange = (event)=>{
      this.setState({groupLeader:event.target.value})
    }
    zoomLinkChange = (event)=>{
      this.setState({zoomLink:event.target.value})
    }
    groupDescriptionChange = (event)=>{
      this.setState({description:event.target.value})
    }
    courseNameChange = (event)=>{
      this.setState({courseName:event.target.value})
    }
    dateChange = (event)=>{
      this.setState({date:event.target.value})
    }
    timeChange = (event)=>{
      this.setState({time:event.target.value})
    }
    submitFunc=()=>{this.props.setNewRow(this.state.maxNum,this.state.groupLeader,this.state.courseName,this.state.description,
      this.state.zoomLink,this.state.date,this.state.time)
    
    }

    render(){
            
        return <Form  className onSubmit={(event)=>{event.preventDefault()}}>
        <Form.Row>

        <Form.Group controlId="GroupLeader">
          <Form.Label>Group Leader</Form.Label>
          <Form.Control placeholder="Israel Israeli" onChange={this.leaderChange} />
         </Form.Group>

          <Form.Group as={Col} controlId="ZoomLink">
            <Form.Label>Zoom Link</Form.Label>
            <Form.Control type="link" placeholder="Enter URL" onChange={this.zoomLinkChange} />
          </Form.Group>
      
          <Form.Group controlId="CourseName">
          <Form.Label>Course Name</Form.Label>
          <Form.Control value={this.props.courseName} disabled onChange={this.courseNameChange}/>
        </Form.Group> 
       
        </Form.Row>
            
      
        <Form.Group as={Col} controlId="GroupDescription">
            <Form.Label>Group description</Form.Label>
            <Form.Control type="text" placeholder="what's your group goal? " onChange={this.groupDescriptionChange} />
          </Form.Group>

      
        <Form.Row>
          <Form.Group as={Col} controlId="Date">
            <Form.Label>Date</Form.Label>
            <Form.Control value={this.props.date.toDateString()} disabled onChange={this.dateChange}/>
          </Form.Group>
      
          <Form.Group as={Col} controlId="MettingStartTime">
            <Form.Label>Metting Start Time</Form.Label>
            <Form.Control type="time" onChange={this.timeChange}>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>

        <Form.Group controlId="Max participants">
          <Form.Label>Max participants</Form.Label>
          <Form.Control placeholder="99" onChange={this.maxChange} />
         </Form.Group>

  
          </Form.Row>
            
        <Button variant="info"  size="sm" type="submit" onClick={this.submitFunc}>
          Submit
        </Button>
      </Form>
      
    }
}

export default OpenGroupForm;