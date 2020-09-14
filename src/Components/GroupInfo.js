import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
class GroupInfo extends React.Component {
    constructor(props){
      super(props);
    }

    render(){
        var groups = this.props.groups.map(
            (group,x)=>
                <tr key={x}>
                <td>{group.id}</td>
                <td>{group.courseName}</td>
                <td>{group.Description}</td>
                <td>{group.zoomUrl}</td>
                <td><button>click here</button></td>
              </tr>
            
        )
        return <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Course Name</th>
            <th>Descriprion</th>
            <th>Zoom Url</th>
            <th>Join</th>
          </tr>
        </thead>
        <tbody>
          {groups}
        </tbody>
      </Table>
      
      
    }
}

export default GroupInfo;