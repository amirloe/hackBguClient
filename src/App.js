
import React from 'react';
import Calendar from 'react-calendar';
import GroupInfo from './Components/GroupInfo';
import OpenGroupForm from './Components/OpenGroupForm';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './zoomate.jpeg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id:0,
      date: new Date(),
      show:false,
      showhours:false,
      courseName:"",
      courses:["לוגיקה ותורת הקבוצות","אלגברה","חדווא 1","מבוא למדעי המחשב"],
      rows:[]
    }
  }
  

  onChange = date => {
    let x = new Date(new Date(date).setHours(6));
    this.setState({ date:x })
  }


//3. render the scheduler component, mind that the Scheduler component should be placed in a DragDropContext(father or ancestor).
setNewRow=(maxNum,groupLeader,courseName,groupDescription,zoomLink,date,time)=>{
  var row={id:this.state.id,maxNum:maxNum,groupSize:1,groupLeader:groupLeader,courseName:courseName,Description:groupDescription,startTime:time,date:date,zoomUrl:zoomLink}
  var newRow=this.state.rows.concat(row)
  console.log("michal is the queenM")
   this.setState({rows:newRow,id:this.state.id+1})
}

render(){
 
  const showH =this.state.showhours?
  <div className='mu-2'>

  <GroupInfo groups={this.state.rows}></GroupInfo>
  <Button className='mx-auto'>Open new Group</Button>
  </div>
:
<h1>Choose day please</h1>

var buttons = this.state.courses.map(
  (name,x)=><Button key={x} className='m-3'  onClick={()=>this.setState({show:true,courseName:name})}>{name}</Button>)

  const x = this.state.show?  <div>  
                              <Calendar
                            className="c1"
                            onChange={this.onChange}
                            value={this.state.date}
                            calendarType="Hebrew"
                            onClickDay={()=>{this.setState({showhours:true})}}
                            />
                            {showH}
                          <Button className="text-center" onClick={()=>this.setState({show:false, showhours:false})}>back</Button>
                            </div> 
                            : <div>
                            {buttons}
                              </div>;

  return (
    <main>
      <OpenGroupForm courseName={this.state.courseName} date={this.state.date} setNewRow={this.setNewRow}></OpenGroupForm>


        <img src={logo} className='center' alt="Zoomate" ></img>
      <div className='center'>
      <h1>Zoomate 1.0</h1>
      {x}
   </div>

    </main>
  );

  }
}

export default App;
