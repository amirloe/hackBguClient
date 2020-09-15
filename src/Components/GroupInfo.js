import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
class GroupInfo extends React.Component {
    constructor(props){
      super(props);
    }

    render(){
        

        var groups = this.props.groups.map(
            (group,x)=>{
                var color = group.groupSize < group.maxNum? 'success' : 'danger'
                var to_absolute = group.zoomUrl.startsWith("http")?group.zoomUrl:"http://"+group.zoomUrl
                return <tr key={x}>
                <td>{group.id}</td>
                <td>{group.groupLeader}</td>
                <td>{group.startTime}</td>
                <td>{group.Description}</td>
                <td><a href={to_absolute} target="_blank">{group.zoomUrl}</a></td>
                <td><Button variant={color} disabled={group.groupSize >= group.maxNum}>click here</Button></td>
              </tr>
            }
            
        )
        return <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Group Leader</th>
            <th>Time</th>
            <th>Description</th>
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